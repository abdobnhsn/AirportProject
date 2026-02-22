// src/components/Hero.jsx
import { useLanguage } from '../contexts/LanguageContext';

export default function Hero() {
    const { t } = useLanguage();

    return (
        <div
            className="position-relative min-vh-70 d-flex align-items-center justify-content-center text-white text-center"
            style={{
                background: `linear-gradient(rgba(0,0,0,0.58), rgba(0,0,0,0.68)),
                             url('https://www.destinationtunisie.info/wp-content/uploads/2023/03/aeroport-sfax-thyna-tunisie.jpg') center/cover no-repeat`
            }}
        >
            {/* subtle overlay gradient */}
            <div
                className="position-absolute inset-0"
                style={{
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0.15), rgba(0,0,0,0.45))'
                }}
            />

            <div className="container position-relative z-10 py-5">
                <h1 className="display-3 fw-bold mb-3">
                    {t('welcome') || 'Welcome'}
                </h1>

                <p className="lead fs-3 fw-light opacity-90 mb-5">
                    {t('exploreAirport') || 'Sfax–Thyna International Airport & surrounding area'}
                </p>
            </div>
        </div>
    )
}