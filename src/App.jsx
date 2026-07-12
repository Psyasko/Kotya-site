import { useEffect, useState } from 'react';
import {
  Award,
  CalendarDays,
  ChevronRight,
  HeartHandshake,
  Leaf,
  MapPin,
  Menu,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Waves,
  X
} from 'lucide-react';
import OrganicCard from './components/OrganicCard';
import { DragonRoute, LeafBranch, PortraitOrnament, SectionCloud } from './components/Decor';

const specialist = {
  name: 'Катерина',
  role: 'масажист у студії DeMassage',
  city: 'Львів',
  clinic: 'DeMassage',
  schedule: '9:00–20:00',
  telegramUrl: 'https://t.me/katiya06',
  telegramLabel: '@katiya06'
};

const services = [
  {
    title: 'Класичний масаж',
    text: 'Робота з мʼязовою напругою, втомою та загальним відновленням тіла.',
    icon: Waves,
    shape: 'leaf'
  },
  {
    title: 'Спина та шия',
    text: 'Увага до зон, де часто накопичується напруга через стрес або тривале навантаження.',
    icon: Sparkles,
    shape: 'pebble'
  },
  {
    title: 'Релакс-масаж',
    text: 'Мʼякий темп, спокійна атмосфера та відновлення контакту з тілом.',
    icon: HeartHandshake,
    shape: 'drop'
  },
  {
    title: 'Відновлювальний масаж',
    text: 'Індивідуальний підбір технік відповідно до актуального стану й рівня навантаження.',
    icon: ShieldCheck,
    shape: 'wave'
  }
];

const principles = [
  'Індивідуальний підбір технік під актуальний стан тіла',
  'Акуратна робота без агресивного тиску та перебільшених обіцянок',
  'Повага до комфорту, особистих меж і темпу клієнта',
  'Прозоре уточнення графіка й доступності через Telegram'
];

const certificates = ['Сертифікат 1', 'Сертифікат 2', 'Сертифікат 3', 'Сертифікат 4'];

function useReveal() {
  useEffect(() => {
    const nodes = [...document.querySelectorAll('[data-reveal]')];
    if (!nodes.length) return undefined;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      nodes.forEach((node) => node.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -48px 0px' }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  useReveal();

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen);
    return () => document.body.classList.remove('menu-open');
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="app">
      <div className="site-background" aria-hidden="true">
        <div className="site-background__photo" />
        <div className="site-background__glow site-background__glow--one" />
        <div className="site-background__glow site-background__glow--two" />
        <LeafBranch className="site-leaf site-leaf--left" />
        <LeafBranch className="site-leaf site-leaf--right" />
      </div>

      <div className="page-shell">
        <DragonRoute />

        <header className="topbar">
          <a className="brand" href="#hero" onClick={closeMenu} aria-label="На початок сторінки">
            <span className="brand__mark" aria-hidden="true">К</span>
            <span className="brand__copy">
              <strong>{specialist.name}</strong>
              <small>{specialist.role}</small>
            </span>
          </a>

          <nav className={`nav ${menuOpen ? 'nav--open' : ''}`} aria-label="Основна навігація">
            <a href="#about" onClick={closeMenu}>Про Катерину</a>
            <a href="#services" onClick={closeMenu}>Напрямки</a>
            <a href="#clinic" onClick={closeMenu}>Студія</a>
            <a href="#certificates" onClick={closeMenu}>Сертифікати</a>
            <a href="#contacts" onClick={closeMenu}>Контакти</a>
          </nav>

          <a className="topbar__cta" href={specialist.telegramUrl} target="_blank" rel="noreferrer">
            Написати
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? 'Закрити меню' : 'Відкрити меню'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </header>

        <main>
          <section id="hero" className="hero" data-reveal>
            <div className="hero__copy">
              <p className="eyebrow">Професійна візитівка</p>
              <h1>
                <span>{specialist.name}</span>
                <em>{specialist.role}</em>
              </h1>
              <p className="hero__lead">
                Уважний масаж, спокійна комунікація та індивідуальний підбір технік відповідно до стану тіла.
              </p>

              <div className="hero__actions">
                <a className="button button--primary" href={specialist.telegramUrl} target="_blank" rel="noreferrer">
                  <MessageCircle size={19} />
                  Уточнити доступність
                </a>
                <a className="button button--ghost" href="#services">
                  Напрямки роботи
                  <ChevronRight size={18} />
                </a>
              </div>

              <div className="hero__meta" aria-label="Коротка інформація">
                <span><MapPin size={16} /> {specialist.city}</span>
                <span><CalendarDays size={16} /> {specialist.schedule}</span>
                <span><HeartHandshake size={16} /> {specialist.clinic}</span>
              </div>
            </div>

            <div className="hero__visual">
              <div className="portrait-composition">
                <PortraitOrnament />
                <SectionCloud className="portrait-cloud portrait-cloud--top" />
                <SectionCloud className="portrait-cloud portrait-cloud--bottom" />
                <div className="portrait-glow" aria-hidden="true" />
                <div className="portrait-mask">
                  <picture>
                    <source
                      type="image/webp"
                      srcSet="/images/profile-480.webp 480w, /images/profile-720.webp 720w, /images/profile-960.webp 960w"
                      sizes="(max-width: 720px) 82vw, (max-width: 1100px) 46vw, 430px"
                    />
                    <img
                      src="/images/profile-720.webp"
                      alt="Катерина, масажист у студії DeMassage"
                      width="720"
                      height="1280"
                      fetchPriority="high"
                    />
                  </picture>
                </div>
                <div className="portrait-label">
                  <small>{specialist.clinic}</small>
                  <strong>{specialist.city}</strong>
                </div>
              </div>
            </div>
          </section>

          <section id="about" className="about section" data-reveal>
            <div className="section__heading section__heading--narrow">
              <p className="eyebrow">Про Катерину</p>
              <h2>Професійний підхід без зайвої демонстративності</h2>
            </div>
            <div className="about__copy">
              <p className="about__lead">
                Катерина працює у студії DeMassage у Львові та допомагає клієнтам зменшувати тілесну напругу, відновлюватися після навантаження й уважніше відчувати власне тіло.
              </p>
              <p>
                У роботі поєднує мʼяку комунікацію, повагу до меж і добір технік відповідно до актуального стану клієнта. Актуальний графік і можливість запису можна уточнити через Telegram.
              </p>
            </div>
            <SectionCloud className="about__cloud" />
          </section>

          <section id="services" className="section services" data-reveal>
            <div className="section__heading">
              <p className="eyebrow">Напрямки роботи</p>
              <h2>Форми роботи з тілом</h2>
              <p>Кожен формат підбирається під стан, рівень напруги та потребу у відновленні.</p>
            </div>

            <div className="services__grid">
              {services.map(({ title, text, icon: Icon, shape }, index) => (
                <OrganicCard key={title} shape={shape} className={`service-card service-card--${index + 1}`}>
                  <span className="card-icon"><Icon size={22} /></span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </OrganicCard>
              ))}
            </div>
          </section>

          <section className="section principles" data-reveal>
            <div className="section__heading section__heading--compact">
              <p className="eyebrow">Підхід</p>
              <h2>Спокій, межі, точність</h2>
            </div>

            <div className="principles__grid">
              {principles.map((item, index) => (
                <OrganicCard key={item} shape={index % 2 ? 'wave' : 'pebble'} className="principle-card" as="div">
                  <Leaf size={19} />
                  <p>{item}</p>
                </OrganicCard>
              ))}
            </div>
          </section>

          <section id="clinic" className="section clinic" data-reveal>
            <div className="clinic__intro">
              <p className="eyebrow">Місце роботи</p>
              <h2>Прийом у студії DeMassage</h2>
              <p>Катерина працює у студії DeMassage у Львові. Актуальну доступність краще уточнювати перед візитом.</p>
            </div>

            <OrganicCard className="clinic-card" shape="wave" as="div">
              <div className="clinic-item">
                <MapPin size={21} />
                <span>Місто</span>
                <strong>{specialist.city}</strong>
              </div>
              <div className="clinic-item">
                <HeartHandshake size={21} />
                <span>Студія</span>
                <strong>{specialist.clinic}</strong>
              </div>
              <div className="clinic-item">
                <CalendarDays size={21} />
                <span>Графік</span>
                <strong>{specialist.schedule}</strong>
              </div>
            </OrganicCard>
          </section>

          <section id="certificates" className="section certificates" data-reveal>
            <div className="section__heading">
              <p className="eyebrow">Сертифікати</p>
              <h2>Підтвердження навчання</h2>
              <p>Місця під реальні фото сертифікатів. Їх можна додати без зміни структури сторінки.</p>
            </div>

            <div className="certificates__grid">
              {certificates.map((certificate, index) => (
                <OrganicCard key={certificate} shape={index % 2 ? 'drop' : 'leaf'} className="certificate-card">
                  <Award size={28} />
                  <h3>{certificate}</h3>
                  <p>Фото або короткий опис навчання</p>
                </OrganicCard>
              ))}
            </div>
          </section>

          <section id="contacts" className="contacts" data-reveal>
            <SectionCloud className="contacts__cloud" />
            <div className="contacts__copy">
              <p className="eyebrow">Контакти</p>
              <h2>Уточнити доступність</h2>
              <p>
                Напиши Катерині в Telegram, щоб уточнити актуальний графік, доступність і спосіб запису через студію.
              </p>
            </div>

            <div className="contacts__action">
              <a className="telegram-card" href={specialist.telegramUrl} target="_blank" rel="noreferrer">
                <span className="telegram-card__icon"><MessageCircle size={25} /></span>
                <span>
                  <small>Telegram</small>
                  <strong>{specialist.telegramLabel}</strong>
                </span>
                <ChevronRight size={20} />
              </a>
              <div className="contacts__meta">
                <span><MapPin size={16} /> {specialist.city}</span>
                <span><HeartHandshake size={16} /> {specialist.clinic}</span>
                <span><CalendarDays size={16} /> {specialist.schedule}</span>
              </div>
            </div>
          </section>
        </main>

        <footer className="footer">
          <p>© {new Date().getFullYear()} {specialist.name}. Професійна візитівка масажиста.</p>
          <p>Масаж не замінює консультацію лікаря за наявності медичних показань.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
