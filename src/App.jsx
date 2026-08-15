import { useEffect, useState } from 'react';
import {
  Activity,
  Award,
  Camera,
  CalendarDays,
  ChevronRight,
  Droplets,
  Dumbbell,
  Flower2,
  Footprints,
  Hand,
  HeartHandshake,
  ExternalLink,
  MapPin,
  Menu,
  MessageCircle,
  X
} from 'lucide-react';
import OrganicCard from './components/OrganicCard';
import { DragonRoute, LeafBranch, PortraitOrnament, SectionCloud, StudioDivider } from './components/Decor';

const specialist = {
  name: 'Катерина',
  role: 'майстриня масажу у DeMassage',
  city: 'Львів',
  studio: 'DeMassage',
  address: 'вул. Стрийська, 108',
  schedule: '9:00–20:00',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=DeMassage%2C%20%D0%B2%D1%83%D0%BB.%20%D0%A1%D1%82%D1%80%D0%B8%D0%B9%D1%81%D1%8C%D0%BA%D0%B0%20108%2C%20%D0%9B%D1%8C%D0%B2%D1%96%D0%B2'
};

const bookingContacts = {
  telegramUrl: 'https://t.me/de_massage_stryiska',
  telegramLabel: '@de_massage_stryiska',
  instagramUrl: 'https://www.instagram.com/de_massage_spa?igsh=dHI4M2E3Z3lidWhp&igsi=dHI4M2E3Z3lidWhp',
  instagramLabel: '@de_massage_spa'
};

const services = [
  {
    title: 'Авторський масаж студії DeMassage',
    icon: Hand,
    shape: 'leaf'
  },
  {
    title: 'Масаж спини',
    icon: Activity,
    shape: 'pebble'
  },
  {
    title: 'Спортивний масаж',
    icon: Dumbbell,
    shape: 'drop'
  },
  {
    title: 'Антицелюлітний масаж',
    icon: Droplets,
    shape: 'wave'
  },
  {
    title: 'Тайський масаж',
    icon: Footprints,
    shape: 'leaf'
  },
  {
    title: 'SPA-послуги',
    icon: Flower2,
    shape: 'pebble'
  }
];

const certificates = [
  {
    title: 'Тайський масаж з елементами йоги',
    details: 'Майстер-клас · 19 червня 2026',
    image: '/images/certificates/thai-massage-yoga.jpg',
    alt: 'Сертифікат Катерини Свідрак про проходження майстер-класу з тайського масажу з елементами йоги'
  },
  {
    title: 'Базовий курс масажу та Body Blade',
    details: 'Курс і майстер-клас · 10 квітня 2026',
    image: '/images/certificates/massage-body-blade.jpg',
    alt: 'Сертифікат Катерини Свідрак про завершення базового курсу масажу та майстер-класу Body Blade'
  },
  {
    title: 'Фаховий молодший бакалавр',
    details: 'Спеціальність «Медсестринство» · 2025',
    image: '/images/certificates/nursing-diploma.jpg',
    alt: 'Диплом Катерини Свідрак за спеціальністю Медсестринство'
  }
];

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
            <span className="brand__copy">
              <strong>{specialist.name}</strong>
              <small>{specialist.role}</small>
            </span>
          </a>

          <nav className={`nav ${menuOpen ? 'nav--open' : ''}`} aria-label="Основна навігація">
            <a href="#about" onClick={closeMenu}>Про Катерину</a>
            <a href="#services" onClick={closeMenu}>Напрямки</a>
            <a href="#clinic" onClick={closeMenu}>Студія</a>
            <a href="#booking" onClick={closeMenu}>Запис</a>
            <a href="#certificates" onClick={closeMenu}>Сертифікати</a>
          </nav>

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
              <p className="eyebrow">Тиша · увага · відновлення</p>
              <h1>
                <span>{specialist.name}</span>
                <em>— {specialist.role}</em>
              </h1>

              <div className="hero__actions">
                <a className="button button--primary" href="#booking">
                  <MessageCircle size={19} />
                  Записатися у студії
                </a>
                <a className="button button--ghost" href="#services">
                  Напрямки роботи
                  <ChevronRight size={18} />
                </a>
              </div>

              <div className="hero__meta" aria-label="Коротка інформація">
                <span><MapPin size={16} /> {specialist.city}</span>
                <span><HeartHandshake size={16} /> {specialist.studio}</span>
                <span><MapPin size={16} /> {specialist.address}</span>
              </div>
            </div>

            <div className="hero__ornament" aria-hidden="true">
              <PortraitOrnament />
              <SectionCloud className="hero__cloud hero__cloud--top" />
              <SectionCloud className="hero__cloud hero__cloud--bottom" />
              <LeafBranch className="hero__leaf-branch" />
              <div className="hero__seal">
                <span>{specialist.studio}</span>
                <strong>{specialist.city}</strong>
              </div>
            </div>
          </section>

          <section className="about section" data-reveal>
            <div id="about" className="section__heading section__heading--narrow anchor-target">
              <p className="eyebrow">Про Катерину</p>
              <h2>Медична освіта й уважна практика</h2>
            </div>
            <div className="about__cards">
              <OrganicCard className="about-card about-card--medical" shape="leaf">
                <h3>Медична основа</h3>
                <p>
                  В основі практики — професійна медична освіта та розуміння анатомії, фізіології й біомеханіки. Перед кожним сеансом Катерина уточнює стан і самопочуття клієнта та підбирає техніки відповідно до актуальних потреб тіла.
                </p>
              </OrganicCard>
              <OrganicCard className="about-card about-card--individual" shape="drop">
                <h3>Індивідуальна робота</h3>
                <p>
                  Катерина володіє техніками різної інтенсивності — від делікатного релакс-масажу до глибшого опрацювання м’язів, тригерних точок і затисків. У студії особлива увага приділяється комфорту: затишній атмосфері, приємній музиці, гіпоалергенним оліям і комфортній температурі.
                </p>
              </OrganicCard>
            </div>
            <SectionCloud className="about__cloud" />
          </section>

          <section className="section services" data-reveal>
            <div id="services" className="section__heading anchor-target">
              <p className="eyebrow">Напрямки роботи</p>
              <h2>Форми роботи з тілом</h2>
              <p>Кожен формат підбирається під стан, рівень напруги та потребу у відновленні.</p>
            </div>

            <div className="services__grid">
              {services.map(({ title, icon: Icon, shape }, index) => (
                <OrganicCard key={title} shape={shape} className={`service-card service-card--${index + 1}`}>
                  <div className="service-card__topline">
                    <span className="card-icon"><Icon size={22} /></span>
                    <span className="service-card__number">0{index + 1}</span>
                  </div>
                  <h3>{title}</h3>
                </OrganicCard>
              ))}
            </div>
          </section>

          <section className="section clinic" data-reveal>
            <div id="clinic" className="clinic__intro anchor-target">
              <p className="eyebrow">Місце роботи</p>
              <h2>Прийом у студії DeMassage</h2>
              <p>Катерина працює у студії DeMassage у Львові. Актуальну доступність краще уточнювати перед візитом.</p>
            </div>

            <OrganicCard className="clinic-card" shape="wave" as="div">
              <StudioDivider />
              <div className="clinic-item">
                <MapPin size={21} />
                <span>Місто</span>
                <strong>{specialist.city}</strong>
              </div>
              <div className="clinic-item">
                <HeartHandshake size={21} />
                <span>Студія</span>
                <strong>{specialist.studio}</strong>
              </div>
              <div className="clinic-item">
                <MapPin size={21} />
                <span>Адреса</span>
                <a
                  className="clinic-address"
                  href={specialist.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Відкрити адресу DeMassage у Google Maps"
                >
                  <strong>{specialist.address}</strong>
                  <ExternalLink size={15} aria-hidden="true" />
                </a>
              </div>
              <div className="clinic-item">
                <CalendarDays size={21} />
                <span>Графік</span>
                <strong>{specialist.schedule}</strong>
              </div>
            </OrganicCard>
          </section>

          <section className="section booking" data-reveal>
            <div id="booking" className="booking__intro anchor-target">
              <p className="eyebrow">Запис</p>
              <h2>Записатися у DeMassage</h2>
              <p>
                Щоб обрати зручний час і записатися на сеанс, зверніться до адміністрації студії у Telegram або Instagram.
              </p>
            </div>

            <OrganicCard className="booking-card" shape="pebble" as="div">
              <div className="booking__links">
                <a
                  className="booking-link"
                  href={bookingContacts.telegramUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="booking-link__icon"><MessageCircle size={24} /></span>
                  <span className="booking-link__copy">
                    <small>Telegram студії</small>
                    <strong>{bookingContacts.telegramLabel}</strong>
                  </span>
                  <ChevronRight size={20} />
                </a>

                <a
                  className="booking-link"
                  href={bookingContacts.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="booking-link__icon"><Camera size={24} /></span>
                  <span className="booking-link__copy">
                    <small>Instagram студії</small>
                    <strong>{bookingContacts.instagramLabel}</strong>
                  </span>
                  <ChevronRight size={20} />
                </a>
              </div>
            </OrganicCard>
          </section>

          <section className="section certificates" data-reveal>
            <div id="certificates" className="section__heading anchor-target">
              <p className="eyebrow">Сертифікати</p>
              <h2>Підтвердження навчання</h2>
              <p>Професійна освіта та додаткове навчання у різних напрямках масажу.</p>
            </div>

            <div className="certificates__grid">
              {certificates.map(({ title, details, image, alt }, index) => (
                <OrganicCard key={title} shape={index % 2 ? 'drop' : 'leaf'} className="certificate-card">
                  <a
                    className="certificate-card__media"
                    href={image}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Відкрити документ: ${title}`}
                  >
                    <img src={image} alt={alt} loading="lazy" />
                  </a>
                  <div className="certificate-card__copy">
                    <Award size={24} aria-hidden="true" />
                    <div>
                      <h3>{title}</h3>
                      <p>{details}</p>
                    </div>
                  </div>
                </OrganicCard>
              ))}
            </div>
          </section>

        </main>

        <footer className="footer">
          <p>© {new Date().getFullYear()} {specialist.name}. Професійна візитівка майстрині масажу.</p>
          <p>Масаж не замінює консультацію лікаря за наявності медичних показань.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
