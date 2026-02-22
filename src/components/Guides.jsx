import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { guides } from '../data/guides';

export default function Guides() {
  const { t } = useLanguage();
  const [selectedGuide, setSelectedGuide] = useState(null);

  return (
    <section id="guides" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold" style={{ color: '#1d2634' }}>
          {t('localTouristGuides') || 'Official Tourist Guides'}
        </h2>

        <div className="row g-4">
          {guides.map((guide, index) => (
            <div className="col-md-4" key={index}>
              <div className="card h-100 guide-card border-0 shadow-sm text-center">
                <div className="card-body p-4">
                  <div className="mb-3">
                    <img 
                      src={guide.photo} 
                      alt={guide.name}
                      className="rounded-circle shadow-sm border border-3 border-white"
                      style={{ width: '120px', height: '120px', objectFit: 'cover' }}
                      loading="lazy"
                    />
                  </div>
                  
                  <span className="badge mb-2" style={{ backgroundColor: '#f7931e20', color: '#f7931e' }}>
                    {guide.category}
                  </span>
                  <h5 className="card-title fw-bold mb-3" style={{ color: '#1d2634' }}>{guide.name}</h5>
                  <p className="mb-2 text-secondary small">
                    🏆 <strong>{t('experience') || 'Experience'}:</strong> {guide.experience} {t('years') || 'Years'}
                  </p>
                  
                  <div className="mb-3">
                    <div className="d-flex flex-wrap gap-2 justify-content-center">
                      {guide.languages.map((lang, i) => (
                        <span key={i} className="badge bg-white text-muted border fw-normal">{lang}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="card-footer bg-transparent border-0 p-4 pt-0">
                  <button 
                    onClick={() => setSelectedGuide(guide)} 
                    className="btn w-100"
                    style={{ border: '1px solid #f7931e', borderRadius: '8px', color: '#f7931e' }}
                  >
                    📞 {t('contact') || 'Contact'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 p-4 rounded bg-white shadow-sm text-center">
          <h6 className="fw-bold">Regional Commissariat for Tourism - Sfax</h6>
          <p className="mb-1 small">Avenue Mohamed El Hédi Kefacha, 3000 Sfax</p>
          <p className="mb-0 text-primary fw-bold">Tel: +216 74 497 041</p>
          <p className="mt-2 small text-muted">
            {t('contactViaOffice') || 'For guide bookings or inquiries, please contact the official tourism office.'}
          </p>
        </div>
      </div>

      {selectedGuide && (
        <div className="modal-overlay" onClick={() => setSelectedGuide(null)} style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.6)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1050,
          backdropFilter: 'blur(4px)'
        }}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '20px',
            width: '90%',
            maxWidth: '380px',
            boxShadow: '0 15px 35px rgba(0,0,0,0.3)'
          }}>
            <div className="text-center mb-4">
              <img 
                src={selectedGuide.photo} 
                alt={selectedGuide.name}
                className="rounded-circle mb-3 shadow-sm"
                style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                loading="lazy"
              />
              <h5 className="mb-0 fw-bold">{selectedGuide.name}</h5>
              <p className="text-muted small">{selectedGuide.category}</p>
            </div>
            
            <div className="alert alert-info mb-3 text-center">
              {t('guideContactInfo') || 'To book this guide, please contact the Regional Commissariat for Tourism:'}
              <br />
              <strong>Tel: +216 74 497 041</strong>
            </div>

            <button className="btn btn-light w-100 mt-2" onClick={() => setSelectedGuide(null)}>
              {t('close') || 'Close'}
            </button>
          </div>
        </div>
      )}
    </section>
  );
}