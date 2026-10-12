import OrganicCard from '../components/OrganicCard';
import SectionHeading from '../components/SectionHeading';
import { SectionCloud } from '../components/Decor';
import { aboutCards } from '../data/site';

export default function About() {
  return (
    <section className="section about" data-section="about">
      <SectionHeading id="about" eyebrow="Про Катерину" title="Медична освіта й уважна практика" />

      <div className="about__cards">
        {aboutCards.map(({ title, shape, text }, index) => (
          <OrganicCard key={title} shape={shape} index={index} className={`about-card about-card--${index + 1}`}>
            <h3>{title}</h3>
            <p>{text}</p>
          </OrganicCard>
        ))}
      </div>

      <SectionCloud className="about__cloud" />
    </section>
  );
}
