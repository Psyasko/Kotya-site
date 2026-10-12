import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut } from 'lucide-react';

const SWIPE_DISTANCE = 50;

export default function CertificateLightbox({ items, index, onClose, onNavigate }) {
  const dialogRef = useRef(null);
  const swipeStart = useRef(null);
  const [zoomed, setZoomed] = useState(false);
  const isOpen = index !== null;
  const item = isOpen ? items[index] : null;
  const count = items.length;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (isOpen && !dialog.open) {
      dialog.showModal();
      dialog.querySelector('.lightbox__close')?.focus();
    }
    if (!isOpen && dialog.open) dialog.close();
    document.documentElement.classList.toggle('has-dialog', isOpen);
  }, [isOpen]);

  useEffect(() => () => document.documentElement.classList.remove('has-dialog'), []);

  useEffect(() => setZoomed(false), [index]);

  const go = (step) => onNavigate((index + step + count) % count);

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowRight') go(1);
    if (event.key === 'ArrowLeft') go(-1);
  };

  const handlePointerDown = (event) => {
    if (zoomed || event.pointerType === 'mouse') return;
    swipeStart.current = event.clientX;
  };

  const handlePointerUp = (event) => {
    if (swipeStart.current === null) return;
    const distance = event.clientX - swipeStart.current;
    swipeStart.current = null;
    if (Math.abs(distance) > SWIPE_DISTANCE) go(distance < 0 ? 1 : -1);
  };

  return (
    <dialog
      ref={dialogRef}
      className="lightbox"
      aria-label={item ? `Документ: ${item.title}` : 'Перегляд документа'}
      onClose={onClose}
      onKeyDown={handleKeyDown}
      onClick={(event) => event.target === event.currentTarget && onClose()}
    >
      {item && (
        <div className="lightbox__frame">
          <div className="lightbox__toolbar">
            <p className="lightbox__counter" aria-live="polite">
              {index + 1} / {count}
            </p>
            <button
              type="button"
              className="lightbox__icon-button"
              onClick={() => setZoomed((value) => !value)}
              aria-pressed={zoomed}
              aria-label={zoomed ? 'Зменшити документ' : 'Збільшити документ'}
            >
              {zoomed ? <ZoomOut size={20} /> : <ZoomIn size={20} />}
            </button>
            <button type="button" className="lightbox__icon-button lightbox__close" onClick={onClose} aria-label="Закрити перегляд">
              <X size={22} />
            </button>
          </div>

          <div
            className={`lightbox__stage ${zoomed ? 'lightbox__stage--zoomed' : ''}`}
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
            onPointerCancel={() => { swipeStart.current = null; }}
          >
            <img
              key={item.image}
              src={item.image}
              alt={item.alt}
              onClick={() => setZoomed((value) => !value)}
              draggable="false"
            />
          </div>

          <div className="lightbox__caption">
            <button type="button" className="lightbox__nav" onClick={() => go(-1)} aria-label="Попередній документ">
              <ChevronLeft size={22} />
            </button>
            <div>
              <h3>{item.title}</h3>
              <p>{item.details}</p>
            </div>
            <button type="button" className="lightbox__nav" onClick={() => go(1)} aria-label="Наступний документ">
              <ChevronRight size={22} />
            </button>
          </div>
        </div>
      )}
    </dialog>
  );
}
