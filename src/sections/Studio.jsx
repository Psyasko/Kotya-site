import { CalendarDays, ExternalLink, HeartHandshake, MapPin } from 'lucide-react';
import OrganicCard from '../components/OrganicCard';
import SectionHeading from '../components/SectionHeading';
import { StudioDivider } from '../components/Decor';
import { specialist } from '../data/site';

export default function Studio() {
  return (
    <section className="section studio" data-section="studio">
      <SectionHeading id="studio" eyebrow="Місце роботи" title="Прийом у студії DeMassage">
        Катерина працює у студії DeMassage у Львові. Актуальну доступність краще уточнювати перед візитом.
      </SectionHeading>

      <OrganicCard className="studio-card" shape="wave" as="div">
        <StudioDivider />
        <div className="studio-item">
          <MapPin size={21} aria-hidden="true" />
          <span>Місто</span>
          <strong>{specialist.city}</strong>
        </div>
        <div className="studio-item">
          <HeartHandshake size={21} aria-hidden="true" />
          <span>Студія</span>
          <strong>{specialist.studio}</strong>
        </div>
        <div className="studio-item">
          <CalendarDays size={21} aria-hidden="true" />
          <span>Графік</span>
          <strong>{specialist.schedule}</strong>
        </div>
        {/* Адреса — у ширшій правій колонці, щоб не ламалася на кілька рядків. */}
        <div className="studio-item">
          <MapPin size={21} aria-hidden="true" />
          <span>Адреса</span>
          <a
            className="studio-address"
            href={specialist.mapsUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`${specialist.address} — відкрити у Google Maps`}
          >
            <strong>{specialist.address}</strong>
            <ExternalLink size={15} aria-hidden="true" />
          </a>
        </div>
      </OrganicCard>
    </section>
  );
}
