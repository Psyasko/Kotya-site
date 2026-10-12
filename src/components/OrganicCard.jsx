// Органічні силуети для вузьких екранів (координати 0–100, розтягуються під картку).
// Кожен має свій характер: різкий і широкий кути по діагоналі, хвилясті краї.
const SHAPES = {
  leaf: 'M3 6C3 2 6 1 12 1C40 1 64 3 80 7C94 11 99 22 99 40C99 62 98 82 95 92C93 98 88 99 80 99C56 99 32 97 18 92C6 88 1 78 1 60C1 40 3 22 3 6Z',
  pebble: 'M18 3C40 0 66 4 90 1C97 0 99 4 99 12C99 40 100 60 96 76C92 92 78 99 60 99C40 99 20 100 8 97C2 95 1 88 1 78C1 56 0 34 3 18C5 9 10 4 18 3Z',
  drop: 'M30 2C52 0 76 1 90 4C98 6 100 16 98 32C96 52 100 74 96 88C93 97 84 99 70 99C48 99 24 99 6 98C2 98 1 94 1 86C1 62 2 40 6 22C10 8 18 3 30 2Z',
  wave: 'M4 8C12 2 26 4 40 3C56 2 70 6 86 3C96 1 99 8 99 18C99 44 97 66 99 84C100 94 94 99 84 98C66 96 50 100 34 98C18 96 6 99 2 90C0 72 2 50 1 30C1 20 1 12 4 8Z'
};

// Органічна панель: окремий декоративний шар форми та незалежна safe-area для вмісту.
export default function OrganicCard({ children, className = '', shape = 'leaf', as: Tag = 'article', index, reveal = true }) {
  const d = SHAPES[shape] ?? SHAPES.leaf;
  return (
    <Tag
      className={`organic-card organic-card--${shape} ${className}`.trim()}
      data-reveal={reveal ? '' : undefined}
      style={index === undefined ? undefined : { '--i': index }}
    >
      <span className="organic-card__shape" aria-hidden="true" />
      <svg className="organic-card__outline" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true" focusable="false">
        <path className="organic-card__fill" d={d} />
        <path className="organic-card__glow" d={d} />
        <path className="organic-card__echo" d={d} pathLength="100" />
        <path className="organic-card__line" d={d} />
      </svg>
      <div className="organic-card__content">{children}</div>
    </Tag>
  );
}
