import { Whisker } from '../components/Decor';
import { specialist } from '../data/site';

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer__brand">
        <Whisker />
        © {new Date().getFullYear()} {specialist.name}. Професійна візитівка майстрині масажу.
      </p>
      <p>Масаж не замінює консультацію лікаря за наявності медичних показань.</p>
    </footer>
  );
}
