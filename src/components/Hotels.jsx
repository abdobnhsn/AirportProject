import { useLanguage } from '../contexts/LanguageContext';
import { FaStar, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { hotelsList } from '../data/hotels';

export default function Hotels() {
  const { t } = useLanguage();

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold">{t('hotelsTitle') || 'Hotels in Sfax'}</h2>
        <p className="text-muted">{t('hotelsSub') || 'Comfortable stays near Sfax–Thyna International Airport'}</p>
      </div>

      <div className="row g-4">
        {hotelsList.map((hotel, index) => (
          <div className="col-md-6 col-lg-3" key={index}>
            <div className="card shadow-sm border-0 rounded-4 h-100 overflow-hidden">
              <img 
                src={hotel.image} 
                alt={hotel.name} 
                style={{ height: '180px', objectFit: 'cover' }}
                className="card-img-top"
                loading="lazy"
              />
              
              <div className="card-body p-4 d-flex flex-column">
                <h5 className="fw-bold mb-1">{hotel.name}</h5>
                
                <div className="text-warning mb-3">
                  {[...Array(hotel.stars)].map((_, i) => (
                    <FaStar key={i} size={14} />
                  ))}
                </div>

                <p className="text-muted small mb-3">
                  <FaMapMarkerAlt className="text-danger me-1" />
                  {hotel.dist} {t('fromAirport') || 'from airport'}
                </p>

                <p className="card-text text-secondary small flex-grow-1">
                  {hotel.desc}
                </p>

                <a 
                  href={hotel.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-warning w-100 mt-4 fw-bold rounded-pill text-dark d-flex align-items-center justify-content-center gap-2"
                >
                  <FaPhoneAlt size={14} /> {t('bookNow') || 'Book / Contact'}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}