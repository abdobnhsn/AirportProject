import { useState } from 'react';
import InfoCard from './InfoCard';
import { useLanguage } from '../contexts/LanguageContext';
import { sfaxAirportTips } from '../data/sfaxAirportTips';

export default function AirportGuide({ category = null }) {
  const { t, lang } = useLanguage(); // ← get lang too
  const [search, setSearch] = useState('');

  const filtered = sfaxAirportTips.filter(tip => {
    // Use current language strings (fallback to English)
    const title       = (tip.title?.[lang]       || tip.title?.en       || '').toLowerCase();
    const description = (tip.description?.[lang] || tip.description?.en || '').toLowerCase();
    const location    = (tip.location?.[lang]    || tip.location?.en    || '').toLowerCase();
    const categoryStr = (tip.category?.[lang]    || tip.category?.en    || '').toLowerCase();

    const searchLower = search.toLowerCase();

    const matchesSearch =
      title.includes(searchLower) ||
      description.includes(searchLower) ||
      location.includes(searchLower) ||
      categoryStr.includes(searchLower);

    const matchesCategory = !category || 
      (tip.category?.[lang] || tip.category?.en || '') === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5">
          {category 
            ? t('categoryTips', { category: category }) 
            : t('popularTips')}
        </h2>

        <div className="mb-4">
          <input
            type="search"
            className="form-control form-control-lg"
            placeholder={t('searchTipsPlaceholder')}
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>

        {filtered.length > 0 ? (
          <div className="row g-4">
            {filtered.map(tip => (
              <div key={tip.id} className="col-md-6 col-lg-4">
                <InfoCard tip={tip} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-5">
            <h4>{t('noResults')}</h4>
            <p className="text-muted">{t('tryAnother')}</p>
          </div>
        )}
      </div>
    </section>
  );
}