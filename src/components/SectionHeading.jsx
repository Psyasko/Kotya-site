import { Whisker } from './Decor';

// Якір і анімований блок розділені: інакше браузер прокручує до ще зсунутого заголовка.
export default function SectionHeading({ id, eyebrow, title, children, className = '' }) {
  return (
    <div id={id} className={`section-heading anchor-target ${className}`.trim()}>
      <div data-reveal>
        <p className="eyebrow">
          <Whisker />
          {eyebrow}
        </p>
        <h2>{title}</h2>
        {children && <p className="section-heading__lead">{children}</p>}
      </div>
    </div>
  );
}
