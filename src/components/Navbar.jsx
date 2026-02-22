import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaPlaneArrival, FaBars, FaTimes } from 'react-icons/fa'
import LanguageSwitcher from './LanguageSwitcher'
import { useLanguage } from '../contexts/LanguageContext'

export default function Navbar() {
  const { t } = useLanguage()
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow sticky-top">
      <div className="container">

        {/* LOGO */}
        <Link
          className="navbar-brand d-flex align-items-center gap-2 fw-bold fs-4"
          to="/"
          onClick={closeMenu}
        >
          <FaPlaneArrival size={28} className="text-warning" />
          {t('appName')}
        </Link>

        {/* MOBILE TOGGLE */}
        <button
          className="navbar-toggler border-0"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* MENU */}
        <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto align-items-center gap-3 gap-lg-4">

            <li className="nav-item">
              <Link className="nav-link text-white fw-medium" to="/" onClick={closeMenu}>
                {t('home') || 'Home'}
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white fw-medium" to="/airport" onClick={closeMenu}>
                {t('airportInfo') || 'Airport Info'}
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white fw-medium" to="/transport" onClick={closeMenu}>
                {t('Transport') || 'Transport'}
              </Link>
            </li>

            {/* --- ADDED HOTELS LINK HERE --- */}
            <li className="nav-item">
              <Link className="nav-link text-white fw-medium" to="/hotels" onClick={closeMenu}>
                {t('hotels') || 'Hotels'}
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white fw-medium" to="/meteo" onClick={closeMenu}>
                {t('Meteo') || 'Meteo'}
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white fw-medium" to="/guides" onClick={closeMenu}>
                {t('touristGuides') || 'Tourist Guides'}
              </Link>
            </li>

            <li className="nav-item mt-3 mt-lg-0">
              <LanguageSwitcher />
            </li>

          </ul>
        </div>
      </div>
    </nav>
  )
}