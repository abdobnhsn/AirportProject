import { useLanguage } from '../contexts/LanguageContext';

export default function Transport() {
  const { t } = useLanguage();

  return (
    <div className="container py-5">
      {/* Header Section */}
      <div className="text-center mb-5">
        <h1 className="fw-bold display-5" style={{ color: '#1d2634' }}>
          {t('transportTitle')}
        </h1>
        <p className="text-muted fs-5">{t('transportSubtitle')}</p>
      </div>

      <div className="row g-4">
        {/* TAXI SECTION */}
        <div className="col-lg-6">
          <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
            <div className="card-header bg-primary text-white p-4 text-center border-0">
              <span className="display-4">🚕</span>
              <h3 className="fw-bold mt-2 mb-0">{t('officialTaxis')}</h3>
            </div>
            <div className="card-body p-4">
              <ul className="list-unstyled">
                <li className="mb-3">
                  📍 <strong>{t('availability')}:</strong> {t('taxiAvailability')}
                </li>
                <li className="mb-3">
                  💰 <strong>{t('price')}:</strong> {t('taxiPrice')}
                </li>
                <li className="mb-3">
                  🌙 <strong>{t('nightRate')}:</strong> {t('taxiNightRate')}
                </li>
                <li className="mb-3">
                  📟 <strong>{t('note')}:</strong> {t('taxiNote')}
                </li>
              </ul>
              <div className="alert alert-danger mb-0 small py-2">
                ⚠️ {t('noRideApps')}
              </div>
            </div>
          </div>
        </div>

        {/* BUS SECTION */}
        <div className="col-lg-6">
          <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
            <div className="card-header bg-success text-white p-4 text-center border-0">
              <span className="display-4">🚌</span>
              <h3 className="fw-bold mt-2 mb-0">{t('publicBus')}</h3>
            </div>
            <div className="card-body p-4">
              <ul className="list-unstyled">
                <li className="mb-3">
                  🕒 <strong>{t('frequency')}:</strong> {t('busFrequency')}
                </li>
                <li className="mb-3">
                  💰 <strong>{t('price')}:</strong> {t('busPrice')}
                </li>
                <li className="mb-3">
                  🗺️ <strong>{t('route')}:</strong> {t('busRoute')}
                </li>
                <li className="mb-3">
                  💵 <strong>{t('payment')}:</strong> {t('busPayment')}
                </li>
              </ul>
              <div className="alert alert-info mb-0 small py-2">
                ℹ️ {t('busBestFor')}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER NOTE */}
      <div className="mt-5 p-4 rounded bg-white shadow-sm text-center border-start border-primary border-4">
        <p className="mb-0 text-muted fst-italic">
          <strong>{t('travelTip')}:</strong> {t('atmRecommendation')}
        </p>
      </div>
    </div>
  );
}