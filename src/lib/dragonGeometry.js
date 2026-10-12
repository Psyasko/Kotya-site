// Генерує тіло дракона в реальних пікселях сторінки: без розтягування луски й гребеня.

const r1 = (n) => Math.round(n * 10) / 10;
const pt = (p) => `${r1(p.x)} ${r1(p.y)}`;
const smoothstep = (a, b, x) => {
  const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
};

function catmull(p0, p1, p2, p3, t) {
  const t2 = t * t;
  const t3 = t2 * t;
  const f = (a, b, c, d) => 0.5 * (2 * b + (-a + c) * t + (2 * a - 5 * b + 4 * c - d) * t2 + (-a + 3 * b - 3 * c + d) * t3);
  return { x: f(p0.x, p1.x, p2.x, p3.x), y: f(p0.y, p1.y, p2.y, p3.y) };
}

// Гладка крива через опорні точки, рівномірно розбита за довжиною.
export function centerline(points, spacing = 5) {
  const pts = [points[0], ...points, points[points.length - 1]];
  const dense = [];
  for (let i = 1; i < pts.length - 2; i += 1) {
    const steps = Math.max(8, Math.ceil(Math.hypot(pts[i + 1].x - pts[i].x, pts[i + 1].y - pts[i].y) / 2));
    for (let j = 0; j < steps; j += 1) dense.push(catmull(pts[i - 1], pts[i], pts[i + 1], pts[i + 2], j / steps));
  }
  dense.push(points[points.length - 1]);

  const out = [dense[0]];
  let carry = 0;
  for (let i = 1; i < dense.length; i += 1) {
    const a = dense[i - 1];
    const b = dense[i];
    const seg = Math.hypot(b.x - a.x, b.y - a.y);
    let d = spacing - carry;
    while (d <= seg) {
      out.push({ x: a.x + ((b.x - a.x) * d) / seg, y: a.y + ((b.y - a.y) * d) / seg });
      d += spacing;
    }
    carry = seg - (d - spacing);
  }

  return out.map((p, i) => {
    const a = out[Math.max(0, i - 2)];
    const b = out[Math.min(out.length - 1, i + 2)];
    const len = Math.hypot(b.x - a.x, b.y - a.y) || 1;
    const t = { x: (b.x - a.x) / len, y: (b.y - a.y) / len };
    return { ...p, t, n: { x: -t.y, y: t.x }, d: i * spacing };
  });
}

const add = (p, v, k) => ({ x: p.x + v.x * k, y: p.y + v.y * k });
const rotate = (v, a) => ({ x: v.x * Math.cos(a) - v.y * Math.sin(a), y: v.x * Math.sin(a) + v.y * Math.cos(a) });

export function buildBody(line, { maxWidth, legs = true, detail = 1 }) {
  const total = line[line.length - 1].d;
  // Шия ширшає від медальйона, тіло «дихає», хвіст звужується.
  const widthAt = (p) => {
    const s = p.d / total;
    const neck = 0.55 + 0.45 * smoothstep(0, 0.06, s);
    const tail = 0.1 + 0.9 * (1 - smoothstep(0.6, 1, s));
    const pulse = 0.88 + 0.12 * Math.sin(p.d / 150);
    return maxWidth * neck * tail * pulse;
  };

  const left = [];
  const right = [];
  line.forEach((p) => {
    const w = widthAt(p) / 2;
    left.push(add(p, p.n, w));
    right.push(add(p, p.n, -w));
  });

  const edge = (arr) => `M${arr.map(pt).join('L')}`;
  const outline = `${edge(left)}L${[...right].reverse().map(pt).join('L')}Z`;

  // Лінія хребта ділить тіло: черево з одного боку, луска з іншого.
  const spine = `M${line.map(pt).join('L')}`;

  // Черевні пластини: півдуги від краю до хребта, вигнуті до хвоста.
  let scales = '';
  let next = 0;
  line.forEach((p, i) => {
    if (p.d < next) return;
    const w = widthAt(p);
    next = p.d + Math.max(5, (w * 0.42) / detail);
    scales += `M${pt(right[i])}Q${pt(add(add(p, p.n, -w * 0.25), p.t, w * 0.3))} ${pt(p)}`;
  });

  // Луска на спині: два зміщені ряди дрібних дуг.
  [0.2, 0.38].forEach((row, r) => {
    let at = r * 6;
    line.forEach((p) => {
      if (p.d < at) return;
      const w = widthAt(p);
      const step = Math.max(6, (w * 0.32) / detail);
      at = p.d + step;
      const c = add(p, p.n, w * row);
      const half = Math.max(1.6, w * 0.09);
      scales += `M${pt(add(c, p.n, -half))}Q${pt(add(c, p.t, step * 0.8))} ${pt(add(c, p.n, half))}`;
    });
  });

  // Спинний гребінь: суцільна полум'яна хвиля з плавцями різної висоти.
  let spikes = '';
  let fin = 0;
  let i = 8;
  while (i < line.length - 6) {
    const p = line[i];
    const w = widthAt(p);
    const span = Math.max(3, Math.round((w * 0.85) / 5));
    const j = Math.min(line.length - 1, i + span);
    const h = w * (0.42 + 0.18 * Math.sin(fin * 1.7));
    const tip = add(add(left[i], p.n, h), p.t, -w * 0.18);
    spikes += `M${pt(left[i])}Q${pt(add(left[i], p.n, h * 0.7))} ${pt(tip)}Q${pt(add(left[j], p.n, h * 0.15))} ${pt(left[j])}Z`;
    i = j;
    fin += 1;
  }

  // Лапи з трьома кігтями на черевному боці.
  let limbs = '';
  if (legs) {
    [0.2, 0.46, 0.7].forEach((at) => {
      const i = Math.round((line.length - 1) * at);
      const p = line[i];
      const w = widthAt(p);
      const out = { x: -p.n.x, y: -p.n.y };
      const base = right[i];
      const knee = add(add(base, out, w * 1.3), p.t, -w * 0.2);
      const foot = add(add(knee, out, w * 0.5), p.t, w * 0.9);
      // Лапа — стрічка з двох ліній: стегно ширше, до стопи звужується.
      const base2 = add(base, p.t, w * 0.55);
      const knee2 = add(knee, p.t, w * 0.28);
      limbs += `M${pt(base)}Q${pt(add(base, out, w * 1.1))} ${pt(knee)}Q${pt(add(knee, p.t, w * 0.2))} ${pt(foot)}`;
      limbs += `M${pt(base2)}Q${pt(add(base2, out, w * 0.9))} ${pt(knee2)}Q${pt(add(knee2, p.t, w * 0.3))} ${pt(foot)}`;
      [-0.8, -0.25, 0.3, 0.85].forEach((a) => {
        const claw = rotate(p.t, a);
        limbs += `M${pt(foot)}Q${pt(add(foot, claw, w * 0.35))} ${pt(add(add(foot, claw, w * 0.55), out, w * 0.15))}`;
      });
    });
  }

  // Хвіст-полум'я.
  const end = line[line.length - 1];
  const k = maxWidth * 2.2;
  const back = { x: -end.t.x, y: -end.t.y };
  const tail = [
    [add(add(end, end.t, k * 0.9), end.n, k * 0.6), add(add(end, end.t, k * 1.4), end.n, -k * 0.1), add(add(end, end.t, k * 0.9), end.n, -k * 0.7)],
    [add(add(end, end.t, k * 0.5), end.n, -k * 0.9), add(add(end, back, k * 0.2), end.n, -k * 1.3), add(add(end, back, k * 0.5), end.n, -k * 0.8)],
    [add(add(end, end.t, k * 0.4), end.n, k * 1.0), add(add(end, back, k * 0.1), end.n, k * 1.4), add(add(end, back, k * 0.45), end.n, k * 0.9)]
  ]
    .map(([c1, c2, e]) => `M${pt(end)}C${pt(c1)} ${pt(c2)} ${pt(e)}`)
    .join('');

  return { outline, left: edge(left), right: edge(right), spine, scales, spikes, limbs, tail };
}

// Тонкі паралельні лінії «тіньового» дракона в глибині.
export function buildEcho(line, offset, width) {
  const side = (k) => `M${line.map((p) => pt(add(p, p.n, offset + k))).join('L')}`;
  return `${side(width / 2)}${side(-width / 2)}`;
}

// Точка на лінії за відстанню від початку.
export function pointAt(line, distance) {
  const spacing = line[1]?.d ?? 1;
  const i = Math.min(line.length - 1, Math.max(0, Math.floor(distance / spacing)));
  return line[i];
}

// Відстань до першої точки, нижчої за y. Лінійний пошук: на вигинах y може ненадовго спадати.
export function distanceAtY(line, y) {
  const found = line.find((p) => p.y >= y);
  return (found ?? line[line.length - 1]).d;
}
