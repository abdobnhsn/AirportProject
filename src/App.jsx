// src/App.jsx
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import { Routes, Route } from 'react-router-dom'
import { useLanguage } from './contexts/LanguageContext'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AirportGuide from './components/AirportGuide'
import Guides from './components/Guides'
import Transport from './components/Transport'
import Meteo from './components/Meteo'
import Hotels from './components/Hotels'
import Footer from './components/Footer'

function Home() {
  const { t } = useLanguage()

  const weather = {
    temp: '17–19°C',
    condition: t('mildSunny') || 'Mild & mostly sunny',
  }

  const distances = [
    { place: t('medina') || 'Medina of Sfax',       km: '7–9 km',   time: '15–25 min' },
    { place: t('kerkennah') || 'Kerkennah Islands', km: '10–12 km + ferry', time: '1h–1.5h total' },
    { place: t('hotels') || 'City Center Hotels',   km: '6–9 km',   time: '10–20 min' },
    { place: t('beach') || 'Nearest Beach',         km: '25–30 km', time: '35–50 min' },
  ]

  return (
    <>
      <Hero />
      <div className="container pb-5">
        <div className="row g-4 align-items-stretch">
          {/* Weather Card */}
          <div className="col-lg-5">
            <div className="card shadow-sm border-0 rounded-4 h-100">
              <div className="card-body text-center p-4 d-flex flex-column justify-content-center">
                <h4 className="fw-semibold mb-4">
                  {t('weatherInSfax') || 'Weather in Sfax'}
                </h4>
                <div className="display-3 fw-bold text-primary mb-2">
                  {weather.temp}
                </div>
                <p className="fs-4 text-muted mb-0">
                  {weather.condition}
                </p>
                <small className="text-muted d-block mt-3">
                  {t('staticWeather') || 'approximate • February 2026 averages'}
                </small>
                <a 
                  href="https://www.accuweather.com/en/tn/sfax/319985/weather-forecast/319985"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm btn-outline-primary mt-3"
                >
                  {t('viewRealTimeWeather') || 'See live forecast'}
                </a>
              </div>
            </div>
          </div>

          {/* Distance Card */}
          <div className="col-lg-7">
            <div className="card shadow-sm border-0 rounded-4 h-100">
              <div className="card-body p-4 d-flex flex-column justify-content-center">
                <h4 className="fw-semibold mb-4 text-center">
                  {t('distanceFromAirport') || 'Distance from Airport'}
                </h4>
                <table className="table table-borderless table-sm mb-0">
                  <tbody>
                    {distances.map((item, i) => (
                      <tr key={i}>
                        <td className="fw-medium">{item.place}</td>
                        <td className="text-end text-muted">
                          {item.km} • {item.time}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <small className="text-muted d-block text-center mt-4">
                  {t('distanceNote') || 'approximate values • traffic & ferry may affect time'}
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/airport" element={<AirportGuide />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="/transport" element={<Transport />} />
          <Route path="/meteo" element={<Meteo />} />
          <Route path="/hotels" element={<Hotels />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}