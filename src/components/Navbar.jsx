import React, { useState, useEffect, useRef } from 'react'
import { Linkedin, Instagram, Mail, Phone } from 'lucide-react'
import { servicesData } from '../data/servicesData'

function WhatsAppIcon({ size = 14, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
      style={{ display: 'inline-block', verticalAlign: 'middle' }}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
}

export function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const dropdownRef = useRef(null)

  const closeAll = () => {
    setDropdownOpen(false)
    setMobileMenuOpen(false)
    setMobileServicesOpen(false)
  }

  // Close desktop dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  // Close menus on hash change / page navigation
  useEffect(() => {
    function handleHashChange() {
      closeAll()
    }
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  return (
    <>
      {/* Top Bar */}
      <div className="topbar">
        {/* Desktop Topbar Content */}
        <div className="wrap topbar-desktop">
          {/* Left Side: Social & WhatsApp */}
          <div className="topbar-left">
            <a
              href="https://www.linkedin.com/company/launch2web/"
              target="_blank"
              rel="noreferrer"
              className="topbar-link"
              title="Launch Web Solutions on LinkedIn"
            >
              <Linkedin size={13} className="topbar-icon" />
              <span>LinkedIn</span>
            </a>
            <span className="topbar-sep">|</span>
            <a
              href="https://www.instagram.com/launch____web/"
              target="_blank"
              rel="noreferrer"
              className="topbar-link"
              title="Launch Web Solutions on Instagram"
            >
              <Instagram size={13} className="topbar-icon" />
              <span>Instagram</span>
            </a>
            <span className="topbar-sep">|</span>
            <a
              href="https://wa.me/919025102679?text=Hello%20Launch%20Web%20Solutions%20team,%20I%20would%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noreferrer"
              className="topbar-link topbar-whatsapp"
              title="Chat on WhatsApp (+91 9025102679)"
            >
              <WhatsAppIcon size={14} className="topbar-icon" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Right Side: Email & Phone Numbers */}
          <div className="topbar-right">
            <a
              href="mailto:launchwebservice@gmail.com"
              className="topbar-link"
              title="Email Launch Web Solutions"
            >
              <Mail size={13} className="topbar-icon" />
              <span>launchwebservice@gmail.com</span>
            </a>
            <span className="topbar-sep">|</span>
            <a
              href="tel:+919025102679"
              className="topbar-link"
              title="Call +91 9025102679"
            >
              <Phone size={13} className="topbar-icon" />
              <span>+91 9025102679</span>
            </a>
            <span className="topbar-sep">|</span>
            <a
              href="tel:+919585523658"
              className="topbar-link"
              title="Call +91 95855 23658"
            >
              <Phone size={13} className="topbar-icon" />
              <span>+91 95855 23658</span>
            </a>
          </div>
        </div>

        {/* Mobile Topbar Content: Mail ID at Left, Social Media Icons Only (No text) at Right */}
        <div className="wrap topbar-mobile">
          <div className="topbar-mobile-left">
            <a
              href="mailto:launchwebservice@gmail.com"
              className="topbar-link topbar-mobile-mail"
              title="Email launchwebservice@gmail.com"
            >
              <Mail size={12} className="topbar-icon" />
              <span>launchwebservice@gmail.com</span>
            </a>
          </div>

          <div className="topbar-mobile-right">
            <a
              href="https://www.linkedin.com/company/launch2web/"
              target="_blank"
              rel="noreferrer"
              className="topbar-icon-link"
              aria-label="LinkedIn"
              title="Launch Web Solutions on LinkedIn"
            >
              <Linkedin size={14} />
            </a>
            <a
              href="https://www.instagram.com/launch____web/"
              target="_blank"
              rel="noreferrer"
              className="topbar-icon-link"
              aria-label="Instagram"
              title="Launch Web Solutions on Instagram"
            >
              <Instagram size={14} />
            </a>
            <a
              href="https://wa.me/919025102679?text=Hello%20Launch%20Web%20Solutions%20team,%20I%20would%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noreferrer"
              className="topbar-icon-link topbar-whatsapp-icon"
              aria-label="WhatsApp"
              title="Chat on WhatsApp (+91 9025102679)"
            >
              <WhatsAppIcon size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header>
        <div className="wrap nav">
          <a href="#home" className="nav-logo" onClick={closeAll}>
            <img src="/logo-tight.png" alt="Launch Web Solutions" />
          </a>

          {/* Desktop Navigation */}
          <ul className="desktop-nav">
            <li
              className={`dd ${dropdownOpen ? 'open' : ''}`}
              ref={dropdownRef}
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                type="button"
                className="ddbtn"
                aria-expanded={dropdownOpen}
                aria-haspopup="true"
                onClick={(e) => {
                  e.stopPropagation()
                  setDropdownOpen((prev) => !prev)
                }}
              >
                Services <span>▾</span>
              </button>
              <div className="menu" style={{ width: '290px' }}>
                {servicesData.map((s) => (
                  <a
                    key={s.slug}
                    href={`#service-${s.slug}`}
                    onClick={(e) => {
                      e.stopPropagation()
                      setDropdownOpen(false)
                    }}
                  >
                    {s.name}
                  </a>
                ))}
                <a
                  href="#services"
                  className="all"
                  onClick={(e) => {
                    e.stopPropagation()
                    setDropdownOpen(false)
                  }}
                >
                  View all services overview →
                </a>
              </div>
            </li>
            <li><a href="#about" onClick={closeAll}>About</a></li>
            <li><a href="#process" onClick={closeAll}>Process</a></li>
            <li><a href="#work" onClick={closeAll}>Work</a></li>
            <li><a href="#contact" className="btn primary" onClick={closeAll}>Get a Quote</a></li>
          </ul>

          {/* Mobile Header Right Controls */}
          <div className="mobile-controls">
            <a href="#contact" className="btn primary mobile-quote-btn" onClick={closeAll}>
              Quote
            </a>
            <button
              type="button"
              className={`hamburger-btn ${mobileMenuOpen ? 'active' : ''}`}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((prev) => !prev)}
            >
              <span className="ham-line"></span>
              <span className="ham-line"></span>
              <span className="ham-line"></span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="mobile-drawer-overlay" onClick={closeAll}>
            <div className="mobile-drawer" onClick={(e) => e.stopPropagation()}>
              <div className="mobile-drawer-header">
                <a href="#home" onClick={closeAll}>
                  <img src="/logo-tight.png" alt="Launch Web Solutions" style={{ height: '42px', width: 'auto' }} />
                </a>
                <button
                  type="button"
                  className="mobile-close-btn"
                  aria-label="Close menu"
                  onClick={closeAll}
                >
                  ✕
                </button>
              </div>

              <div className="mobile-nav-links">
                <a href="#home" className="mobile-nav-item" onClick={closeAll}>
                  Home
                </a>

                {/* Mobile Services Accordion */}
                <div className="mobile-services-group">
                  <button
                    type="button"
                    className="mobile-services-toggle"
                    onClick={() => setMobileServicesOpen((prev) => !prev)}
                  >
                    <span>Our Services ({servicesData.length})</span>
                    <span className="toggle-arrow">{mobileServicesOpen ? '▴' : '▾'}</span>
                  </button>
                  {mobileServicesOpen && (
                    <div className="mobile-services-sublist">
                      {servicesData.map((s) => (
                        <a
                          key={s.slug}
                          href={`#service-${s.slug}`}
                          onClick={closeAll}
                        >
                          {s.name}
                        </a>
                      ))}
                      <a href="#services" className="mobile-sub-all" onClick={closeAll}>
                        View all services overview →
                      </a>
                    </div>
                  )}
                </div>

                <a href="#about" className="mobile-nav-item" onClick={closeAll}>
                  About Us
                </a>
                <a href="#process" className="mobile-nav-item" onClick={closeAll}>
                  Our Process
                </a>
                <a href="#work" className="mobile-nav-item" onClick={closeAll}>
                  Featured Work
                </a>
                <a href="#faq" className="mobile-nav-item" onClick={closeAll}>
                  FAQ
                </a>
                <a href="#contact" className="mobile-nav-item" onClick={closeAll}>
                  Contact Us
                </a>
              </div>

              {/* Direct Actions in Mobile Drawer */}
              <div className="mobile-drawer-actions">
                <a href="#contact" className="btn primary mobile-action-btn" onClick={closeAll}>
                  Start Your Project →
                </a>
                <div className="mobile-quick-channels">
                  <a
                    href="https://wa.me/919025102679?text=Hello%20Launch%20Web%20Solutions%20team,%20I%20would%20like%20to%20discuss%20a%20project."
                    target="_blank"
                    rel="noreferrer"
                    className="quick-channel-btn whatsapp-btn"
                  >
                    💬 WhatsApp Chat
                  </a>
                  <a href="tel:+919585523658" className="quick-channel-btn call-btn">
                    📞 Call Us
                  </a>
                </div>
                <div className="mobile-drawer-info">
                  <p><b>Email:</b> launchwebservice@gmail.com</p>
                  <p><b>Phones:</b> +91 9025102679 · +91 95855 23658</p>
                  <p><b>Social:</b> LinkedIn · Instagram · WhatsApp</p>
                  <p><b>Hours:</b> Mon–Sat · 9:30 AM – 6:30 PM</p>
                  <p><b>Locations:</b> Chennai · Kanchipuram · Vandavasi</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
