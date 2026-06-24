import {
  Award,
  CalendarDays,
  ChevronRight,
  HeartHandshake,
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

const workAreas = [
  {
    title: 'Класичний масаж',
    text: 'Базова робота з тілом, мʼязовою напругою та загальним відновленням.',
    icon: Waves
  },
  {
    title: 'Спина та шия',
    text: 'Фокус на зонах, де часто накопичується напруга через сидячу роботу, стрес або навантаження.',
    icon: Sparkles
  },
  {
    title: 'Релакс-масаж',
    text: 'Мʼякий темп, зниження напруги, відчуття спокою та повернення контакту з тілом.',
    icon: HeartHandshake
  },
  {
    title: 'Відновлювальний масаж',
    text: 'Підбір технік під актуальний стан, втому, перенапруження та потребу у відновленні.',
    icon: ShieldCheck
  }
];

const principles = [
  'Індивідуальний підбір технік під стан тіла',
  'Акуратна робота без зайвого тиску й обіцянок',
  'Повага до комфорту, меж і темпу клієнта',
  'Уточнення доступності та запису через месенджери'
];

const certificates = [
  'Сертифікат 1',
  'Сертифікат 2',
  'Сертифікат 3',
  'Сертифікат 4'
];

function App() {
  return (
    <main className="site-shell">
      <header className="topbar">
        <a className="brand" href="#hero" aria-label="На головний екран">
          <span className="brand-mark">M</span>
          <span>
            <strong>{specialist.name}</strong>
            <small>{specialist.role}</small>
          </span>
        </a>

        <nav className="nav" aria-label="Основна навігація">
          <a href="#about">Про спеціаліста</a>
          <a href="#areas">Напрямки</a>
          <a href="#certificates">Сертифікати</a>
          <a href="#contacts">Контакти</a>
        </nav>
      </header>

      <section id="hero" className="hero section-grid">
        <div className="hero-copy">
          <p className="eyebrow">Професійна візитівка</p>
          <h1>Масажист у клініці: робота з напругою, втомою та відновленням тіла</h1>
          <p className="lead">
            Акуратний масаж, уважність до стану клієнта та індивідуальний підбір технік.
            Щоб уточнити актуальну доступність, графік або спосіб запису — напишіть у зручний месенджер.
          </p>

          <div className="hero-actions">
            <a className="btn primary" href="#contacts">
              Уточнити доступність
              <ChevronRight size={18} />
            </a>
            <a className="btn ghost" href={specialist.telegramUrl}>
              Написати в Telegram
            </a>
          </div>

          <div className="quick-info" aria-label="Коротка інформація">
            <span><MapPin size={16} /> {specialist.city}</span>
            <span><CalendarDays size={16} /> {specialist.schedule}</span>
          </div>
        </div>

        <div className="portrait-card" aria-label="Фото спеціаліста">
          <div className="portrait-glow" />
          <img src="/images/profile.jpg" alt="Фото спеціаліста з масажу" />
          <div className="portrait-caption">
            <span>{specialist.role}</span>
            <strong>{specialist.city}</strong>
          </div>
        </div>
      </section>

      <section id="about" className="about section-grid soft-card">
        <div>
          <p className="eyebrow">Про спеціаліста</p>
          <h2>Спокійний професійний підхід без зайвих обіцянок</h2>
        </div>
        <div className="text-block">
          <p>
            Спеціаліст працює в клініці та допомагає клієнтам зменшувати тілесну напругу,
            відновлюватися після навантаження й краще відчувати власне тіло. Формат роботи
            залежить від стану клієнта, запиту та доступного графіка прийому.
          </p>
          <p>
            Сайт не є сторінкою приватної практики. Він створений як візитівка: коротко показати
            напрямки роботи, місце прийому, сертифікати та зручний спосіб уточнення доступності.
          </p>
        </div>
      </section>

      <section id="areas" className="section-block">
        <div className="section-heading">
          <p className="eyebrow">Напрямки роботи</p>
          <h2>Основні формати масажу</h2>
        </div>

        <div className="cards-grid">
          {workAreas.map((item) => {
            const Icon = item.icon;
            return (
              <article className="service-card" key={item.title}>
                <div className="icon-box"><Icon size={22} /></div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="principles soft-card">
        <div className="section-heading compact">
          <p className="eyebrow">Підхід</p>
          <h2>Що важливо в роботі</h2>
        </div>
        <div className="principle-list">
          {principles.map((item) => (
            <div className="principle-item" key={item}>
              <Award size={18} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="clinic" className="clinic section-grid">
        <div>
          <p className="eyebrow">Місце роботи</p>
          <h2>Прийом у клініці</h2>
          <p className="lead small">
            Актуальну адресу, графік та можливість запису краще уточнювати перед візитом.
          </p>
        </div>

        <div className="clinic-card">
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

      <section id="certificates" className="section-block">
        <div className="section-heading">
          <p className="eyebrow">Сертифікати</p>
          <h2>Місце під підтвердження навчання</h2>
          <p>
            Заміни ці блоки на реальні фото сертифікатів у наступній версії сайту.
          </p>
        </div>

        <div className="cert-grid">
          {certificates.map((certificate) => (
            <article className="cert-card" key={certificate}>
              <Award size={30} />
              <h3>{certificate}</h3>
              <p>Фото або короткий опис сертифіката</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contacts" className="contacts">
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

      <footer className="footer">
        <p>© {new Date().getFullYear()} {specialist.name}. Професійна візитівка спеціаліста.</p>
        <p>
          Спеціаліст працює в клініці. Масаж не замінює консультацію лікаря за наявності медичних показань.
        </p>
      </footer>
    </main>
  );
}

export default App;
