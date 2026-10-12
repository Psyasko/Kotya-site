import { useEffect, useRef, useState } from 'react';
import { buildBody, buildEcho, centerline, distanceAtY, pointAt } from '../lib/dragonGeometry';

const CLOUD = 'M8 78C38 78 40 48 64 48C88 48 88 72 74 74C64 75 62 62 70 60M64 48C72 24 108 18 124 38C136 20 172 22 176 48C196 42 216 58 208 74C202 86 184 82 188 70M8 78C68 86 148 86 222 78';
const GLINT_CYCLE = 6500;

// Коефіцієнти паралаксу: >0 — шар відстає від сторінки (глибше), <0 — випереджає (ближче).
const DEPTH = {
  desktop: { body: 0.12, echo: 0.26, front: -0.1 },
  mobile: { body: 0.06, echo: 0.14, front: -0.05 }
};

const rectOf = (selector) => document.querySelector(selector)?.getBoundingClientRect();

// Десктоп: тіло спускається повз заголовки по краях, а горизонтально перетинає сторінку
// в порожніх місцях або за непрозорими картками.
function desktopWaypoints(width, pageY) {
  const aboutHead = rectOf('.about .section-heading');
  const servicesHead = rectOf('.services .section-heading');
  const grid = rectOf('.services__grid');
  const studio = rectOf('.studio-card');
  const booking = rectOf('.booking-card');
  const certsHead = rectOf('.certificates .section-heading');
  const certs = rectOf('.certificates__grid');
  if (!aboutHead || !servicesHead || !grid || !studio || !booking || !certsHead || !certs) return [];
  const L = width * 0.05;
  const R = width * 0.94;
  return [
    { x: width * 0.07, y: pageY(aboutHead) - 60 },
    { x: width * 0.04, y: pageY(aboutHead) + aboutHead.height + 60 },
    { x: R, y: pageY(servicesHead) + servicesHead.height * 0.5 },
    { x: width * 0.07, y: pageY(grid) + grid.height * 0.72 },
    { x: width * 0.9, y: pageY(studio) + studio.height * 0.5 },
    { x: width * 0.1, y: pageY(booking) + booking.height * 0.5 },
    { x: L, y: pageY(certsHead) + certsHead.height + 50 },
    { x: width * 0.92, y: pageY(certs) + certs.height * 0.7 }
  ];
}

// Телефон: усередині кожного блоку карток тіло переходить на інший бік за картками,
// а повз заголовки йде по самому краю екрана.
function mobileWaypoints(width, pageY) {
  const blocks = ['.about__cards', '.services__grid', '.studio-card', '.booking-card', '.certificates__grid']
    .map(rectOf)
    .filter(Boolean);
  const sides = [width * 0.035, width * 0.965];
  const points = [];
  blocks.forEach((r, i) => {
    const from = sides[i % 2];
    const to = sides[(i + 1) % 2];
    points.push({ x: from, y: pageY(r) + Math.min(80, r.height * 0.15) });
    points.push({ x: to, y: pageY(r) + r.height - Math.min(80, r.height * 0.15) });
  });
  return points;
}

function measure() {
  const app = document.querySelector('.app');
  const portrait = document.querySelector('.dragon-head__portrait');
  const footer = document.querySelector('.footer');
  if (!app || !portrait || !footer) return null;

  const width = app.clientWidth;
  const height = app.scrollHeight;
  const viewport = window.innerHeight;
  const mobile = width < 820;
  const maxScroll = Math.max(0, document.documentElement.scrollHeight - viewport);
  const pageY = (rect) => rect.top + window.scrollY;

  const p = portrait.getBoundingClientRect();
  const start = { x: p.left + p.width / 2, y: pageY(p) + p.height / 2 };
  const exit = mobile
    ? { x: width * 0.3, y: start.y + p.height * 1.05 }
    : { x: Math.min(width * 0.95, start.x + p.width * 0.6), y: start.y + p.height * 1.05 };

  const waypoints = (mobile ? mobileWaypoints : desktopWaypoints)(width, pageY);
  const end = { x: width * 0.5, y: pageY(footer.getBoundingClientRect()) - 24 };
  return { width, height, viewport, mobile, maxScroll, targets: [start, exit, ...waypoints, end] };
}

// Зсуває точки так, щоб із паралаксом вони опинялися там, де задумано, коли їх видно на екрані.
const forDepth = (targets, k, viewport, maxScroll) =>
  targets.map((p) => ({ x: p.x, y: p.y - k * Math.min(Math.max(p.y - viewport / 2, 0), maxScroll) }));

function buildGeometry(m) {
  const depth = m.mobile ? DEPTH.mobile : DEPTH.desktop;
  const line = centerline(forDepth(m.targets, depth.body, m.viewport, m.maxScroll));
  const echoLine = centerline(forDepth(m.targets, depth.echo, m.viewport, m.maxScroll), 8);
  const maxWidth = m.mobile ? 17 : Math.min(46, Math.max(26, m.width * 0.03));

  const clouds = forDepth(m.targets, depth.front, m.viewport, m.maxScroll)
    .slice(2, -1)
    .filter((_, i) => i % 2 === 0)
    .map((p) => {
      const left = p.x < m.width / 2;
      const span = 222 * (m.mobile ? 0.5 : 0.9);
      // Хмара тягнеться від краю до середини, біля вигину тіла.
      return { x: left ? p.x + 24 : p.x - 24, y: p.y + (m.mobile ? 60 : 140), flip: !left, span };
    });

  return {
    ...m,
    depth,
    line,
    body: buildBody(line, { maxWidth, legs: !m.mobile, detail: m.mobile ? 0.8 : 1 }),
    echo: buildEcho(echoLine, m.mobile ? 22 : 70, m.mobile ? 8 : 22),
    clouds,
    cloudScale: m.mobile ? 0.5 : 0.9
  };
}

export default function DragonRoute() {
  const [geo, setGeo] = useState(null);
  const layers = useRef([]);
  const sparks = useRef([]);

  useEffect(() => {
    let timer;
    let lastKey = '';
    const update = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        const m = measure();
        if (!m) return;
        // На телефоні адресний рядок постійно змінює висоту вікна — не перебудовуємо геометрію через дрібниці.
        const key = [m.width, Math.round(m.height / 40), Math.round(m.viewport / (m.mobile ? 200 : 40))].join('|');
        if (key === lastKey) return;
        lastKey = key;
        setGeo(buildGeometry(m));
      }, 150);
    };
    update();
    document.fonts?.ready.then(update);
    const observer = new ResizeObserver(update);
    observer.observe(document.querySelector('.app'));
    window.addEventListener('resize', update);
    return () => {
      clearTimeout(timer);
      observer.disconnect();
      window.removeEventListener('resize', update);
    };
  }, []);

  // Паралакс без scroll-timeline: оновлюємо шари лише під час прокручування.
  useEffect(() => {
    if (window.CSS?.supports?.('animation-timeline: scroll()')) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    let frame = 0;
    const apply = () => {
      frame = 0;
      layers.current.forEach((el) => {
        if (el) el.style.transform = `translate3d(0, ${Number(el.dataset.k) * window.scrollY}px, 0)`;
      });
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(apply); };
    apply();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
    };
  }, [geo]);

  // Відблиск: на кожен цикл будуємо Web Animation (transform + opacity), яку браузер
  // програє на компоновщику — без JS у кожному кадрі.
  useEffect(() => {
    if (!geo || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    let animations = [];
    let timer;
    let lastScroll = -Infinity;
    let stopped = false;

    const run = () => {
      if (stopped) return;
      const scroll = window.scrollY;
      lastScroll = scroll;
      const offset = geo.depth.body * scroll;
      const from = distanceAtY(geo.line, scroll - offset + geo.viewport * 0.06);
      const to = distanceAtY(geo.line, scroll - offset + geo.viewport * 0.94);
      animations.forEach((animation) => animation.cancel());
      animations = [];
      if (to - from < 60) return;

      const steps = 24;
      sparks.current.forEach((el, i) => {
        if (!el) return;
        const frames = Array.from({ length: steps + 1 }, (_, s) => {
          const phase = s / steps;
          const eased = phase < 0.5 ? 2 * phase * phase : 1 - (-2 * phase + 2) ** 2 / 2;
          const p = pointAt(geo.line, from + (to - from) * eased - i * 26);
          return {
            offset: phase,
            transform: `translate3d(${p.x.toFixed(1)}px, ${p.y.toFixed(1)}px, 0)`,
            opacity: Math.sin(Math.PI * phase) * (i ? 0.55 : 1)
          };
        });
        animations.push(el.animate(frames, { duration: GLINT_CYCLE, easing: 'linear' }));
      });
      if (animations[0]) animations[0].onfinish = run;
    };

    const onScroll = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        if (Math.abs(window.scrollY - lastScroll) > geo.viewport * 0.25) run();
      }, 160);
    };

    run();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      stopped = true;
      clearTimeout(timer);
      animations.forEach((animation) => animation.cancel());
      window.removeEventListener('scroll', onScroll);
    };
  }, [geo]);

  if (!geo) return <div className="dragon-route" aria-hidden="true" />;

  const { width, height, body, echo, clouds, cloudScale, depth } = geo;
  const size = { width, height, viewBox: `0 0 ${width} ${height}` };
  const layer = (name, k) => ({
    ref: (el) => { layers.current[name] = el; },
    className: `dragon-layer dragon-layer--${name}`,
    'data-k': k,
    style: { '--k': k, width, height }
  });

  return (
    <div className={`dragon-route ${geo.mobile ? 'dragon-route--mobile' : ''}`} aria-hidden="true" style={{ '--scroll-max': geo.maxScroll }}>
      <div {...layer(0, depth.echo)}>
        <svg {...size} fill="none">
          <path className="dragon-echo" d={echo} />
        </svg>
      </div>

      <div {...layer(1, depth.body)}>
        <svg {...size} fill="none">
          <defs>
            <linearGradient id="routeGold" x1="0" y1="0" x2="0" y2={height} gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#fff3a3" />
              <stop offset="0.3" stopColor="#d7bd55" />
              <stop offset="0.6" stopColor="#9fccc7" />
              <stop offset="0.85" stopColor="#d7bd55" />
              <stop offset="1" stopColor="#ffe600" />
            </linearGradient>
            <linearGradient id="routeFill" x1="0" y1="0" x2="0" y2={height} gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#144f07" stopOpacity="0.55" />
              <stop offset="0.5" stopColor="#092816" stopOpacity="0.6" />
              <stop offset="1" stopColor="#144f07" stopOpacity="0.45" />
            </linearGradient>
          </defs>
          <path className="dragon-body__halo" d={body.outline} />
          <path className="dragon-body__fill" d={body.outline} />
          <path className="dragon-body__scales" d={body.scales} />
          <path className="dragon-body__spikes" d={body.spikes} />
          <path className="dragon-body__limbs" d={body.limbs} />
          <path className="dragon-body__spine" d={body.spine} />
          <path className="dragon-body__edge dragon-body__edge--back" pathLength="1" d={body.left} />
          <path className="dragon-body__edge dragon-body__edge--belly" pathLength="1" d={body.right} />
          <path className="dragon-body__tail" d={body.tail} />
        </svg>
        <span className="dragon-spark" ref={(el) => { sparks.current[0] = el; }} />
        <span className="dragon-spark dragon-spark--trail" ref={(el) => { sparks.current[1] = el; }} />
      </div>

      <div {...layer(2, depth.front)}>
        <svg {...size} fill="none">
          {clouds.map(({ x, y, flip }) => (
            <path
              key={`${x}-${y}`}
              className="dragon-cloud"
              d={CLOUD}
              transform={`translate(${x} ${y}) scale(${flip ? -cloudScale : cloudScale} ${cloudScale})`}
            />
          ))}
        </svg>
      </div>
    </div>
  );
}
