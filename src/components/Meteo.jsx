import { useLanguage } from '../contexts/LanguageContext';

export default function Meteo() {
  const { t } = useLanguage();

  // Seasonal tips — now using translation keys
  const seasonalTips = [
    {
      period: t('summer'),
      icon: '☀️',
      text: t('summerTip'),
      color: 'text-danger',
    },
    {
      period: t('windy'),
      icon: '🌬️',
      text: t('windyTip'),
      color: 'text-info',
    },
    {
      period: t('winter'),
      icon: '🌧️',
      text: t('winterTip'),
      color: 'text-primary',
    },
  ];

  return (
    <div className="container py-5">
      {/* Header Section */}
      <div className="text-center mb-5">
        <h1 className="fw-bold display-5" style={{ color: '#1d2634' }}>
          {t('meteoTitle')}
        </h1>
        <p className="text-muted fs-5">{t('meteoSubtitle')}</p>
      </div>

      <div className="row g-4 align-items-stretch">
        {/* Left Column: General Info & Live Link */}
        <div className="col-lg-7">
          <div className="card h-100 border-0 shadow-sm rounded-4 p-4 d-flex flex-column justify-content-center bg-white">
            <h3 className="fw-bold mb-3">{t('climateOverview')}</h3>
            <p className="fs-5 text-secondary">
              {t('climateDescription')}
            </p>

            <div className="mt-4">
              <h5 className="fw-bold mb-3">{t('liveUpdates')}</h5>
              <a
                href="https://www.accuweather.com/en/tn/sfax/319985/weather-forecast/319985"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary btn-lg rounded-pill px-4 shadow-sm"
                style={{ backgroundColor: '#007bff', border: 'none' }}
              >
                📊 {t('viewRealTimeWeather')}
              </a>
              <p className="small text-muted mt-2">
                {t('accuweatherNote')}
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Seasonal Breakdown */}
        <div className="col-lg-5">
          <div className="d-flex flex-column gap-3">
            {seasonalTips.map((tip, index) => (
              <div
                key={index}
                className="card border-0 shadow-sm rounded-4 p-3 border-start border-4 border-primary bg-white"
              >
                <div className="d-flex align-items-center">
                  <span className="display-6 me-3">{tip.icon}</span>
                  <div>
                    <h6 className={`fw-bold mb-1 ${tip.color}`}>{tip.period}</h6>
                    <p className="small mb-0 text-muted">{tip.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}