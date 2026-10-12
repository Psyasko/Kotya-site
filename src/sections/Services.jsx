import OrganicCard from '../components/OrganicCard';
import SectionHeading from '../components/SectionHeading';
import { services } from '../data/site';

export default function Services() {
  return (
    <section className="section services" data-section="services">
      <SectionHeading id="services" eyebrow="Напрямки роботи" title="Форми роботи з тілом">
        Кожен формат підбирається під стан, рівень напруги та потребу у відновленні.
      </SectionHeading>

      <div className="services__grid">
        {services.map(({ title, icon: Icon, shape }, index) => (
          <OrganicCard key={title} shape={shape} index={index % 2} className="service-card">
            <span className="service-card__number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
            <span className="card-icon" aria-hidden="true"><Icon size={22} /></span>
            <h3>{title}</h3>
            <svg className="service-card__stroke" viewBox="0 0 120 12" fill="none" aria-hidden="true">
              <path pathLength="1" d="M2 8C20 2 34 2 50 6C66 10 84 10 118 3" />
            </svg>
          </OrganicCard>
        ))}
      </div>
    </section>
  );
}
