// Органічна панель: окремий декоративний шар форми та незалежна safe-area для вмісту.
export default function OrganicCard({ children, className = '', shape = 'leaf', as: Tag = 'article', index, reveal = true }) {
  return (
    <Tag
      className={`organic-card organic-card--${shape} ${className}`.trim()}
      data-reveal={reveal ? '' : undefined}
      style={index === undefined ? undefined : { '--i': index }}
    >
      <span className="organic-card__shape" aria-hidden="true" />
      <div className="organic-card__content">{children}</div>
    </Tag>
  );
}
