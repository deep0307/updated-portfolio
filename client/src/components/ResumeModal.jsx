import { useEffect } from 'react';

export default function ResumeModal({ src, onClose }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className="modal" role="dialog" aria-modal="true" aria-label="Resume" onClick={onClose}>
      <div className="modal__box" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="modal__close" onClick={onClose} aria-label="Close">
          &times;
        </button>
        <iframe className="modal__frame" src={src} title="Resume" />
      </div>
    </div>
  );
}