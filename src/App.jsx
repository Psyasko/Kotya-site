import { useEffect } from 'react';
import {
  Award,
  CalendarDays,
  Feather,
  HeartHandshake,
  Leaf,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Waves
} from 'lucide-react';

const specialist = {
  name: 'Імʼя спеціаліста',
  role: 'Масажист у клініці',
  city: '[Місто — заглушка]',
  clinicAddress: '[Адреса клініки — заглушка]',
  schedule: '[Графік уточнюється]',
  telegramUrl: '#',
  viberUrl: '#',
  telegramLabel: 'Telegram',
  viberLabel: 'Viber'
};

const services = [
  {
    title: 'Класичний масаж',
    text: 'Базова робота з тілом, мʼязовою напругою та загальним відновленням без зайвого тиску.',
    icon: Waves
  },
  {
    title: 'Спина та шия',
    text: 'Фокус на зонах, де часто накопичується напруга через стрес, сидячу роботу або навантаження.',
    icon: Sparkles
  },
  {
    title: 'Релакс-масаж',
    text: 'Мʼякий темп, спокійна атмосфера та повернення відчуття контакту з тілом.',
    icon: HeartHandshake
  },
  {
    title: 'Відновлювальний масаж',
    text: 'Підбір технік під актуальний стан, втому, перенапруження та потребу у відновленні.',
    icon: ShieldCheck
  }
];

const principles = [
  'Індивідуальний підбір технік під актуальний стан тіла',
  'Акуратна робота без агресивного тиску й перебільшених обіцянок',
  'Повага до комфорту, меж і темпу клієнта',
  'Уточнення доступності, графіка та запису через месенджери'
];

const certificates = [
  'Сертифікат 1',
  'Сертифікат 2',
  'Сертифікат 3',
  'Сертифікат 4'
];

function DragonSilk({ className = '' }) {
  return (
    <svg className={`dragon-silk ${className}`} viewBox="0 0 1180 680" fill="none" aria-hidden="true">
      <path className="silk-line silk-main" d="M79 458C184 263 349 207 498 258C659 314 635 475 470 462C315 449 312 262 498 153C671 51 913 73 1007 230C1102 389 965 566 750 561C574 557 479 457 514 341" />
      <path className="silk-line silk-soft" d="M160 536C270 405 396 372 529 409C665 446 775 398 856 276C904 203 971 173 1084 184" />
      <path className="silk-whisker" d="M506 153C530 119 567 97 618 84M506 153C549 154 585 142 615 118M498 258C535 244 565 221 590 188M750 561C755 604 779 635 822 657M750 561C712 595 671 612 626 612M470 462C424 485 383 486 346 467" />
      <path className="silk-leaf" d="M830 227C874 209 910 178 938 134C895 138 861 168 830 227Z" />
      <path className="silk-leaf muted" d="M360 296C315 272 272 273 231 298C273 322 316 322 360 296Z" />
      <path className="silk-leaf" d="M610 465C652 468 689 451 721 415C677 406 640 423 610 465Z" />
    </svg>
  );
}

function CloudCurl({ className = '' }) {
  return <span className={`cloud-curl ${className}`} aria-hidden="true" />;
}


function DragonRoute() {
  return (
    <div className="dragon-route" aria-hidden="true">
      <svg viewBox="0 0 900 3650" preserveAspectRatio="none" fill="none">
        <defs>
          <linearGradient id="dragonRouteGold" x1="160" y1="0" x2="720" y2="3650" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#fff3a3" stopOpacity="0.95" />
            <stop offset="0.18" stopColor="#ffe600" stopOpacity="0.85" />
            <stop offset="0.48" stopColor="#f0d76d" stopOpacity="0.72" />
            <stop offset="0.78" stopColor="#9fccc7" stopOpacity="0.38" />
            <stop offset="1" stopColor="#ffe600" stopOpacity="0.62" />
          </linearGradient>
          <linearGradient id="dragonRouteMint" x1="0" y1="0" x2="900" y2="3650" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#9fccc7" stopOpacity="0.34" />
            <stop offset="0.52" stopColor="#85b084" stopOpacity="0.28" />
            <stop offset="1" stopColor="#ffe600" stopOpacity="0.2" />
          </linearGradient>
          <filter id="routeGlow" x="-20%" y="-10%" width="140%" height="120%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <path className="route-glow" d="M626 130C733 263 668 398 517 482C320 592 279 764 459 916C641 1071 662 1228 484 1395C307 1562 352 1735 604 1854C822 1957 779 2133 540 2254C321 2364 245 2553 460 2717C665 2874 716 3037 556 3208C464 3306 406 3431 452 3596" />
        <path className="route-body" d="M626 130C733 263 668 398 517 482C320 592 279 764 459 916C641 1071 662 1228 484 1395C307 1562 352 1735 604 1854C822 1957 779 2133 540 2254C321 2364 245 2553 460 2717C665 2874 716 3037 556 3208C464 3306 406 3431 452 3596" />
        <path className="route-shadow-line" d="M688 288C581 369 491 422 420 519C340 630 345 747 462 858M388 1460C471 1514 567 1561 629 1648C699 1745 666 1853 558 1930M352 2508C430 2607 571 2668 615 2795C650 2896 608 3002 520 3108" />

        <g className="route-head" transform="translate(532 32)">
          <path d="M79 98C132 26 224 38 278 101C223 91 183 109 154 151C128 190 91 205 38 193C61 166 70 134 79 98Z" />
          <path d="M120 93C84 54 41 39 0 43C31 69 50 95 58 124" />
          <path d="M164 77C190 35 227 10 278 1C260 35 241 62 219 83" />
          <path d="M152 150C216 164 267 196 305 247" />
          <path d="M130 171C82 218 31 243 -24 245" />
          <circle cx="203" cy="103" r="5" />
        </g>

        <g className="route-whiskers">
          <path d="M683 124C757 98 819 108 869 153" />
          <path d="M676 155C759 166 813 204 842 269" />
          <path d="M600 188C529 198 468 228 418 279" />
          <path d="M598 214C510 269 454 339 429 425" />
        </g>

        <g className="route-clouds">
          <path d="M201 705C244 652 312 650 340 699C380 681 436 692 451 736C408 733 374 746 349 775C300 740 252 738 201 705Z" />
          <path d="M576 1261C628 1210 699 1222 714 1276C759 1268 805 1296 815 1340C761 1326 712 1338 669 1377C643 1322 612 1285 576 1261Z" />
          <path d="M116 2124C168 2082 229 2094 250 2142C292 2135 337 2158 354 2202C302 2191 253 2200 208 2229C187 2175 157 2140 116 2124Z" />
          <path d="M568 2926C611 2881 673 2884 703 2931C742 2917 789 2930 811 2967C762 2965 719 2977 681 3011C654 2970 617 2942 568 2926Z" />
        </g>
      </svg>
    </div>
  );
}

function AmbientBackground() {
  return (
    <div className="ambient" aria-hidden="true">
      <div className="night-garden" />
      <div className="mist mist-one" />
      <div className="mist mist-two" />
      <div className="leaf-field leaf-field-left" />
      <div className="leaf-field leaf-field-right" />
      <span className="dragon-mark dragon-mark-one" />
      <span className="dragon-mark dragon-mark-two" />
      <span className="dragon-mark dragon-mark-three" />
      <span className="serpent-line serpent-line-one" />
      <span className="serpent-line serpent-line-two" />
      <CloudCurl className="cloud-one" />
      <CloudCurl className="cloud-two" />
      <div className="gold-dust" />
    </div>
  );
}

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -56px 0px' }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <AmbientBackground />
      <main className="site-shell">
        <DragonRoute />
        <header className="topbar reveal is-visible">
          <a className="brand" href="#hero" aria-label="На головний екран">
            <span className="brand-mark"><Feather size={20} /></span>
            <span>
              <strong>{specialist.name}</strong>
              <small>{specialist.role}</small>
            </span>
          </a>

          <nav className="nav" aria-label="Основна навігація">
            <a href="#about">Про спеціаліста</a>
            <a href="#services">Напрямки</a>
            <a href="#clinic">Клініка</a>
            <a href="#certificates">Сертифікати</a>
            <a href="#contacts">Контакти</a>
          </nav>
        </header>

        <section id="hero" className="hero">
          <div className="hero-copy reveal is-visible">
            <p className="eyebrow">Професійна візитівка</p>
            <h1>Масажист у клініці з мʼяким, уважним підходом</h1>
            <p className="lead">
              Акуратний масаж, спокійна комунікація та індивідуальний підбір технік.
              Щоб уточнити графік, місто роботи або спосіб запису через клініку — напишіть у зручний месенджер.
            </p>

            <div className="hero-actions">
              <a className="btn primary" href="#contacts">Уточнити доступність</a>
              <a className="btn ghost" href={specialist.telegramUrl}>Написати в Telegram</a>
            </div>

            <div className="quick-info" aria-label="Коротка інформація">
              <span><MapPin size={16} /> {specialist.city}</span>
              <span><CalendarDays size={16} /> {specialist.schedule}</span>
            </div>
          </div>

          <div className="hero-visual reveal is-visible">
            <span className="portrait-dragon-shadow" aria-hidden="true" />
            <DragonSilk className="portrait-curve" />
            <span className="portrait-whisker portrait-whisker-one" aria-hidden="true" />
            <span className="portrait-whisker portrait-whisker-two" aria-hidden="true" />
            <CloudCurl className="portrait-cloud" />
            <div className="portrait-aura" />
            <div className="portrait-frame">
              <img src="/images/profile.webp" alt="Фото спеціаліста з масажу" width="864" height="1536" />
            </div>
            <div className="portrait-note">
              <span>{specialist.role}</span>
              <strong>{specialist.city}</strong>
            </div>
          </div>
        </section>

        <section id="about" className="about organic-panel reveal">
          <span className="panel-dragon-curl" aria-hidden="true" />
          <div className="section-kicker">
            <p className="eyebrow">Про спеціаліста</p>
            <h2>Витончений підхід без зайвої демонстративності</h2>
          </div>
          <div className="text-flow">
            <p>
              Спеціаліст працює в клініці та допомагає клієнтам зменшувати тілесну напругу,
              відновлюватися після навантаження й уважніше відчувати власне тіло.
            </p>
            <p>
              Цей сайт — не сторінка приватної практики, а професійна візитівка: напрямки роботи,
              місце прийому, сертифікати та швидкий спосіб уточнити доступність.
            </p>
          </div>
        </section>

        <section id="services" className="section-block reveal">
          <span className="section-serpent services-serpent" aria-hidden="true" />
          <div className="section-heading">
            <p className="eyebrow">Напрямки роботи</p>
            <h2>Форми роботи з тілом</h2>
            <p>
              Кожен формат підбирається під стан клієнта, рівень напруги та доступний графік прийому.
            </p>
          </div>

          <div className="organic-grid">
            {services.map((item) => {
              const Icon = item.icon;
              return (
                <article className="service-card" key={item.title}>
                  <span className="organic-outline" />
                  <div className="card-safe-area">
                    <div className="icon-box"><Icon size={22} /></div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="principles reveal">
          <DragonSilk className="principles-curve" />
          <CloudCurl className="principles-cloud" />
          <div className="section-heading compact">
            <p className="eyebrow">Підхід</p>
            <h2>Спокій, межі, точність</h2>
          </div>
          <div className="principle-list">
            {principles.map((item) => (
              <div className="principle-item" key={item}>
                <Leaf size={18} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="clinic" className="clinic reveal">
          <div className="section-kicker">
            <p className="eyebrow">Місце роботи</p>
            <h2>Прийом у клініці</h2>
            <p className="lead small">
              Актуальну адресу, графік і можливість запису краще уточнювати перед візитом.
            </p>
          </div>

          <div className="clinic-card organic-panel thin">
            <span className="clinic-dragon" aria-hidden="true" />
            <div className="clinic-row">
              <MapPin size={20} />
              <div>
                <span>Місто</span>
                <strong>{specialist.city}</strong>
              </div>
            </div>
            <div className="clinic-row">
              <MapPin size={20} />
              <div>
                <span>Адреса клініки</span>
                <strong>{specialist.clinicAddress}</strong>
              </div>
            </div>
            <div className="clinic-row">
              <CalendarDays size={20} />
              <div>
                <span>Графік</span>
                <strong>{specialist.schedule}</strong>
              </div>
            </div>
          </div>
        </section>

        <section id="certificates" className="section-block reveal">
          <span className="section-serpent cert-serpent" aria-hidden="true" />
          <div className="section-heading">
            <p className="eyebrow">Сертифікати</p>
            <h2>Місце під підтвердження навчання</h2>
            <p>
              Плейсхолдери можна замінити на реальні фото сертифікатів без зміни структури сайту.
            </p>
          </div>

          <div className="cert-grid">
            {certificates.map((certificate) => (
              <article className="cert-card" key={certificate}>
                <span className="organic-outline" />
                <div className="card-safe-area">
                  <Award size={30} />
                  <h3>{certificate}</h3>
                  <p>Фото або короткий опис сертифіката</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contacts" className="contacts reveal">
          <DragonSilk className="contact-curve" />
          <span className="contact-dragon" aria-hidden="true" />
          <CloudCurl className="contact-cloud" />
          <div className="contact-copy">
            <p className="eyebrow">Контакти</p>
            <h2>Уточнити доступність</h2>
            <p>
              Напишіть у Telegram або Viber, щоб уточнити актуальний графік, місце прийому
              та спосіб запису через клініку.
            </p>
          </div>

          <div className="contact-actions">
            <a className="contact-link" href={specialist.telegramUrl}>
              <MessageCircle size={22} />
              <span>
                <small>Месенджер</small>
                <strong>{specialist.telegramLabel}</strong>
              </span>
            </a>
            <a className="contact-link" href={specialist.viberUrl}>
              <Phone size={22} />
              <span>
                <small>Месенджер</small>
                <strong>{specialist.viberLabel}</strong>
              </span>
            </a>
          </div>
        </section>

        <footer className="footer reveal">
          <p>© {new Date().getFullYear()} {specialist.name}. Професійна візитівка спеціаліста.</p>
          <p>Спеціаліст працює в клініці. Масаж не замінює консультацію лікаря за наявності медичних показань.</p>
        </footer>
      </main>
    </>
  );
}

export default App;
