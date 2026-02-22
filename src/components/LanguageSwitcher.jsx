import { useLanguage } from '../contexts/LanguageContext';

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="d-flex gap-2">
      <button
        type="button"
        className={`btn btn-sm ${lang === 'en' ? 'btn-warning' : 'btn-outline-light'}`}
        onClick={() => setLang('en')}
      >
        EN
      </button>
      <button
        type="button"
        className={`btn btn-sm ${lang === 'fr' ? 'btn-warning' : 'btn-outline-light'}`}
        onClick={() => setLang('fr')}
      >
        FR
      </button>
      <button
        type="button"
        className={`btn btn-sm ${lang === 'ar' ? 'btn-warning' : 'btn-outline-light'}`}
        onClick={() => setLang('ar')}
      >
        عربي
      </button>
    </div>
  );
}