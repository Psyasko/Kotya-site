import { Camera, ChevronRight, MessageCircle } from 'lucide-react';
import OrganicCard from '../components/OrganicCard';
import SectionHeading from '../components/SectionHeading';
import { SectionCloud } from '../components/Decor';
import { bookingContacts } from '../data/site';

const links = [
  { href: bookingContacts.telegramUrl, label: 'Telegram студії', handle: bookingContacts.telegramLabel, icon: MessageCircle },
  { href: bookingContacts.instagramUrl, label: 'Instagram студії', handle: bookingContacts.instagramLabel, icon: Camera }
];

export default function Booking() {
  return (
    <section className="section booking" data-section="booking">
      <SectionHeading id="booking" eyebrow="Запис" title="Записатися у DeMassage">
        Щоб обрати зручний час і записатися на сеанс, зверніться до адміністрації студії у Telegram або Instagram.
      </SectionHeading>

      <OrganicCard className="booking-card" shape="pebble" as="div">
        <ul className="booking__links">
          {links.map(({ href, label, handle, icon: Icon }) => (
            <li key={href}>
              <a className="booking-link" href={href} target="_blank" rel="noreferrer">
                <span className="booking-link__icon" aria-hidden="true"><Icon size={24} /></span>
                <span className="booking-link__copy">
                  <small>{label}</small>
                  <strong>{handle}</strong>
                </span>
                <ChevronRight className="booking-link__arrow" size={20} aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </OrganicCard>

      <SectionCloud className="booking__cloud" />
    </section>
  );
}
