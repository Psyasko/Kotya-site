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
    <svg className={`dragon-silk ${className}`} viewBox="0 0 920 520" fill="none" aria-hidden="true">
      <path className="silk-line silk-main" d="M77 333C183 153 343 119 473 173C626 237 555 379 412 351C283 326 319 169 500 89C671 14 833 99 854 234C879 399 681 503 514 439C365 381 315 247 425 154" />
      <path className="silk-line silk-soft" d="M148 402C238 296 332 265 437 295C552 328 623 301 663 221C701 146 763 116 842 143" />
      <path className="silk-leaf" d="M351 235C317 218 284 221 260 244C295 255 323 255 351 235Z" />
      <path className="silk-leaf" d="M589 308C627 303 654 282 670 249C630 249 606 269 589 308Z" />
      <path className="silk-leaf" d="M492 123C457 105 427 108 401 132C434 145 462 143 492 123Z" />
    </svg>
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
      <DragonSilk className="ambient-dragon" />
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
      { threshold: 0.14, rootMargin: '0px 0px -80px 0px' }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <AmbientBackground />
      <main className="site-shell">
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
            <h1>Масажист у клініці з мʼяким, уважним підходом до тіла</h1>
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
            <DragonSilk className="portrait-curve" />
            <div className="portrait-aura" />
            <div className="portrait-frame">
              <img src="/images/profile.jpg" alt="Фото спеціаліста з масажу" />
            </div>
            <div className="portrait-note">
              <span>{specialist.role}</span>
              <strong>{specialist.city}</strong>
            </div>
          </div>
        </section>

        <section id="about" className="about organic-panel reveal">
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
                  <div className="icon-box"><Icon size={22} /></div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="principles reveal">
          <DragonSilk className="principles-curve" />
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
                <Award size={30} />
                <h3>{certificate}</h3>
                <p>Фото або короткий опис сертифіката</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contacts" className="contacts reveal">
          <DragonSilk className="contact-curve" />
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
