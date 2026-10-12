import { ChevronRight, HeartHandshake, MapPin, MessageCircle } from 'lucide-react';
import { DragonHead } from '../components/Decor';
import { specialist } from '../data/site';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__copy">
        <p className="eyebrow hero__enter" style={{ '--i': 0 }}>Тиша · увага · відновлення</p>
        <h1>
          <span className="hero__name hero__enter" style={{ '--i': 1 }}>{specialist.name}</span>
          <span className="hero__role hero__enter" style={{ '--i': 2 }}>— {specialist.role}</span>
        </h1>

        <div className="hero__actions hero__enter" style={{ '--i': 3 }}>
          <a className="button button--primary" href="#booking">
            <MessageCircle size={19} aria-hidden="true" />
            Записатися у студії
          </a>
          <a className="button button--ghost" href="#services">
            Напрямки роботи
            <ChevronRight size={18} aria-hidden="true" />
          </a>
        </div>

        <ul className="hero__meta hero__enter" style={{ '--i': 4 }} aria-label="Коротка інформація">
          <li><MapPin size={16} aria-hidden="true" /> {specialist.city}</li>
          <li><HeartHandshake size={16} aria-hidden="true" /> Студія {specialist.studio}</li>
          <li><MapPin size={16} aria-hidden="true" /> {specialist.address}</li>
        </ul>
      </div>

      <div className="hero__art">
        <span className="hero__moon" />
        <DragonHead
          portrait={specialist.photo
            ? (
              <img
                src={specialist.photo.src}
                srcSet={specialist.photo.srcSet}
                sizes="(max-width: 820px) 220px, 360px"
                alt={specialist.photo.alt}
                width="720"
                height="720"
                fetchPriority="high"
              />
            )
            : <span className="dragon-head__monogram" aria-hidden="true">{specialist.name[0]}</span>}
        />
      </div>
    </section>
  );
}
