import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-dark text-white text-center py-4 mt-auto">
      <div className="container">
        <p className="mb-0">
          {t('footer', { year: new Date().getFullYear() })}
        </p>
      </div>
    </footer>
  )
}