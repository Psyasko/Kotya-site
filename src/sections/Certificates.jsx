import { useRef, useState } from 'react';
import { Award, Maximize2 } from 'lucide-react';
import CertificateLightbox from '../components/CertificateLightbox';
import OrganicCard from '../components/OrganicCard';
import SectionHeading from '../components/SectionHeading';
import { certificates } from '../data/site';

const shapes = ['leaf', 'drop', 'pebble'];

export default function Certificates() {
  const [openIndex, setOpenIndex] = useState(null);
  const triggers = useRef([]);

  const open = (event, index) => {
    // Без підтримки <dialog> посилання просто відкриє зображення.
    if (typeof HTMLDialogElement === 'undefined') return;
    event.preventDefault();
    setOpenIndex(index);
  };

  const close = () => {
    const trigger = triggers.current[openIndex];
    setOpenIndex(null);
    trigger?.focus();
  };

  return (
    <section className="section certificates" data-section="certificates">
      <SectionHeading id="certificates" eyebrow="Сертифікати" title="Підтвердження навчання">
        Професійна освіта та додаткове навчання у різних напрямках масажу.
      </SectionHeading>

      <div className="certificates__grid">
        {certificates.map(({ title, details, image, thumb, alt }, index) => (
          <OrganicCard key={title} shape={shapes[index % shapes.length]} index={index} className="certificate-card">
            <a
              ref={(node) => { triggers.current[index] = node; }}
              className="certificate-card__media"
              href={image}
              target="_blank"
              rel="noreferrer"
              onClick={(event) => open(event, index)}
              aria-label={`Переглянути документ: ${title}`}
            >
              <img src={thumb} alt={alt} loading="lazy" decoding="async" />
              <span className="certificate-card__zoom" aria-hidden="true"><Maximize2 size={18} /></span>
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

      <CertificateLightbox items={certificates} index={openIndex} onClose={close} onNavigate={setOpenIndex} />
    </section>
  );
}
