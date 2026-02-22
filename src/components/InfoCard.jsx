import { FaStar } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';

export default function InfoCard({ tip }) {
  const { t, lang } = useLanguage();

  // Safely get strings in current language (fallback → English)
  const title       = tip.title?.[lang]       || tip.title?.en       || 'Untitled';
  const location    = tip.location?.[lang]    || tip.location?.en    || '';
  const description = tip.description?.[lang] || tip.description?.en || '';
  const category    = tip.category?.[lang]    || tip.category?.en    || '';
  const rating      = tip.rating || '—';

  return (
    <div className="card h-100 shadow border-0 rounded-4 overflow-hidden card-hover">
      <img
        src={tip.image}
        alt={title}
        className="card-img-top"
        style={{ height: '180px', objectFit: 'cover' }}
      />

      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        {location && (
          <p className="text-muted small mb-2">{location}</p>
        )}

        <div className="d-flex align-items-center mb-3">
          <FaStar className="text-warning me-1" />
          <span className="fw-bold text-warning">{rating}</span>
        </div>

        <p className="card-text text-muted small flex-grow-1">
          {description}
        </p>

        {tip.link && (
          <a
            href={tip.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-warning btn-sm mt-auto align-self-start"
          >
            {t('seeDetails')}
          </a>
        )}
      </div>
    </div>
  );
}