import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {
  Layout,
  Globe,
  Cpu,
  ShoppingBag,
  Video,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Clock,
  MessageSquare,
} from 'lucide-react'
import { servicesData } from '../data/servicesData'
import {
  company,
  testimonials,
  processSteps,
  stats,
  faqs,
  works,
  projectTypes,
} from '../data/content'
import { HeroSvg, AboutSvg, Work1Svg, Work2Svg, Work3Svg } from '../components/Illustrations'

function getServiceIcon(iconName, size = 20) {
  switch (iconName) {
    case 'Layout':
      return <Layout size={size} />
    case 'Globe':
      return <Globe size={size} />
    case 'Cpu':
      return <Cpu size={size} />
    case 'ShoppingBag':
      return <ShoppingBag size={size} />
    case 'Video':
      return <Video size={size} />
    case 'Sparkles':
      return <Sparkles size={size} />
    default:
      return <Layout size={size} />
  }
}

function WhatsAppIcon({ size = 18, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
      style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
}

export function Home() {
  const { slug } = useParams()
  const [activeService, setActiveService] = useState(null)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Web Design & Development',
    message: ''
  })

  // Handle hash changes: #service-[slug], #about, #process, #work, #contact, etc.
  useEffect(() => {
    function handleRouting() {
      const hash = window.location.hash.replace(/^#/, '')

      // Check route param first, then hash
      const targetSlug = slug || (hash.startsWith('service-') ? hash.replace('service-', '') : null)

      if (targetSlug) {
        const found = servicesData.find((s) => s.slug === targetSlug)
        if (found) {
          setActiveService(found)
          document.title = `${found.name} | Launch Web Solutions`
          window.scrollTo({ top: 0, behavior: 'smooth' })
          return
        }
      }

      // If not a service slug
      setActiveService(null)
      document.title = 'Launch Web Solutions | High-Performance Websites & Digital Solutions'

      if (hash && hash !== 'home') {
        const targetElement = document.getElementById(hash)
        if (targetElement) {
          setTimeout(() => {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }, 60)
          return
        }
      }
      if (hash === 'home' || !hash) {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }

    handleRouting()
    window.addEventListener('hashchange', handleRouting)
    return () => window.removeEventListener('hashchange', handleRouting)
  }, [slug])

  const handleFormChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email) {
      alert('Please fill in your name and email address.')
      return
    }
    setFormSubmitted(true)
  }

  return (
    <>
      {/* Dynamic Service View */}
      {activeService ? (
        <div id="service-view" key={activeService.slug} className="view-transition">
          {/* Breadcrumb & Hero Header */}
          <section className="service-hero">
            <div className="wrap">
              <nav className="crumb">
                <a href="#services" className="crumb-back">
                  <ArrowLeft size={14} /> Back to All Services
                </a>
                <span className="crumb-sep">/</span>
                <span className="crumb-active">{activeService.name}</span>
              </nav>

              <div className="service-hero-content">
                <div className="service-hero-badge">
                  {getServiceIcon(activeService.icon, 16)}
                  <span>{activeService.category || 'Service Offering'}</span>
                </div>
                <h1 className="service-hero-title">{activeService.name}</h1>
                <p className="service-hero-tag">{activeService.tag}</p>

                <div className="service-hero-actions">
                  <a className="btn primary" href="#contact">
                    Get a Free Quote for this Service
                  </a>
                  <a
                    className="btn ghost whatsapp-cta-btn"
                    href={company.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                  >
                    <WhatsAppIcon size={18} />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Service Details Main Content */}
          <section className="service-detail-body">
            <div className="wrap service-detail-grid">
              <article className="service-main-content">
                {/* Executive Overview */}
                <div className="detail-section">
                  <span className="eyebrow">EXECUTIVE SUMMARY</span>
                  <h2>Service Overview</h2>
                  <p className="lead-text">{activeService.intro}</p>
                  {activeService.more && <p>{activeService.more}</p>}
                </div>

                {/* Quick Highlights / Facts Cards */}
                <div className="service-fact-cards">
                  <div className="fact-card">
                    <span className="fact-label">Best Suited For</span>
                    <p className="fact-value">{activeService.best}</p>
                  </div>
                  <div className="fact-card">
                    <span className="fact-label">Estimated Timeline</span>
                    <p className="fact-value">{activeService.time}</p>
                  </div>
                  <div className="fact-card">
                    <span className="fact-label">Core Deliverables</span>
                    <p className="fact-value">{activeService.deliv}</p>
                  </div>
                </div>

                {/* What is Included (Features) */}
                <div className="detail-section">
                  <span className="eyebrow">SCOPE &amp; DELIVERABLES</span>
                  <h2>What is included with this service</h2>
                  <div className="service-features-grid">
                    {activeService.feat.map(([title, desc]) => (
                      <div key={title} className="service-feature-card">
                        <div className="feature-check">
                          <CheckCircle2 size={18} />
                        </div>
                        <div>
                          <h3>{title}</h3>
                          <p>{desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Our 4-Step Process */}
                <div className="detail-section">
                  <span className="eyebrow">EXECUTION METHODOLOGY</span>
                  <h2>Our step-by-step delivery process</h2>
                  <div className="service-process-timeline">
                    {activeService.proc.map(([title, desc], idx) => (
                      <div key={title} className="process-timeline-step">
                        <div className="step-badge">{`0${idx + 1}`}</div>
                        <div className="step-body">
                          <h3>{title}</h3>
                          <p>{desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Why Choose This Service / Business Benefits */}
                <div className="detail-section">
                  <span className="eyebrow">VALUE CREATION</span>
                  <h2>Key business advantages &amp; ROI</h2>
                  <div className="service-benefits-grid">
                    {activeService.ben.map((b) => (
                      <div key={b} className="benefit-card">
                        <span className="benefit-icon">✓</span>
                        <p>{b}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Frequently Asked Questions */}
                {activeService.faq && activeService.faq.length > 0 && (
                  <div className="detail-section">
                    <span className="eyebrow">QUESTIONS &amp; ANSWERS</span>
                    <h2>Frequently asked questions</h2>
                    <div className="faq-accordion-group">
                      {activeService.faq.map(([q, a]) => (
                        <details key={q} className="faq-item">
                          <summary className="faq-question">{q}</summary>
                          <div className="faq-answer">
                            <p>{a}</p>
                          </div>
                        </details>
                      ))}
                    </div>
                  </div>
                )}
              </article>

              {/* Sidebar */}
              <aside className="service-sidebar">
                <div className="sidebar-sticky-box">
                  {/* Free Quote Callout Box */}
                  <div className="sidebar-quotebox">
                    <span className="quote-eyebrow">START A PROJECT</span>
                    <h3>Ready to get started?</h3>
                    <p>
                      Tell us about your requirements and receive a transparent quotation within 24 hours.
                    </p>
                    <a className="btn primary quote-full-btn" href="#contact">
                      Request a Free Quote
                    </a>
                    <a
                      className="btn ghost quote-whatsapp-btn"
                      href={company.whatsapp}
                      target="_blank"
                      rel="noreferrer"
                      style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
                    >
                      <WhatsAppIcon size={18} />
                      <span>Chat on WhatsApp</span>
                    </a>
                    <div className="sidebar-reassurance">
                      <span>✓ No obligations</span>
                      <span>✓ Direct developer call</span>
                    </div>
                  </div>

                  {/* All Services Navigation Box */}
                  <div className="sidebar-services-nav">
                    <h4>Other Services ({servicesData.length})</h4>
                    <div className="sidebar-services-list">
                      {servicesData.map((s) => (
                        <a
                          key={s.slug}
                          href={`#service-${s.slug}`}
                          className={`sidebar-service-item ${s.slug === activeService.slug ? 'active' : ''}`}
                        >
                          <span className="item-icon">{getServiceIcon(s.icon, 15)}</span>
                          <span className="item-title">{s.name}</span>
                          <span className="item-arrow">→</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </section>
        </div>
      ) : (
        /* Home View */
        <div id="home-view" key="home-view" className="view-transition">
          {/* Hero Section */}
          <section className="hero" id="home">
            <div className="wrap">
              <div>
                <span className="eyebrow">
                  Launch Web Solutions · Chennai · Kanchipuram · Vandavasi
                </span>
                <h1>We Design &amp; Engineer High-Performance Websites &amp; Digital Solutions.</h1>
                <p>
                  We build fast, secure, modern websites, business web platforms, e-commerce stores, and promotional video ads for growing businesses across India and worldwide.
                </p>
                <div className="btns">
                  <a href="#contact" className="btn primary">
                    Start Your Project
                  </a>
                  <a href="#services" className="btn ghost">
                    Explore Services
                  </a>
                </div>
              </div>
              <HeroSvg />
            </div>
          </section>

          {/* Stats Bar */}
          <div className="stats">
            <div className="wrap">
              {stats.map((st) => (
                <div key={st.label}>
                  <b>{st.value}</b>
                  <span>{st.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Services Section */}
          <section id="services" className="services-section">
            <div className="wrap">
              <div className="head">
                <span className="eyebrow">WHAT WE DO</span>
                <h2>Services built for business growth</h2>
                <p>
                  From custom high-performance websites and e-commerce storefronts to promotional video editing and AI commercials, we deliver complete digital solutions tailored for real growth.
                </p>
              </div>

              <div className="services-grid">
                {servicesData.map((s, idx) => (
                  <a
                    className="service-card"
                    href={`#service-${s.slug}`}
                    key={s.slug}
                    aria-label={`Learn more about ${s.name}`}
                  >
                    <div className="service-card-top">
                      <div className={`service-icon-box icon-${s.icon.toLowerCase()}`}>
                        {getServiceIcon(s.icon, 22)}
                      </div>
                      <span className="service-card-num">{`0${idx + 1}`}</span>
                    </div>

                    <div className="service-card-body">
                      <h3 className="service-card-title">{s.name}</h3>
                      <p className="service-card-tag">{s.tag}</p>
                    </div>

                    <div className="service-card-foot">
                      <span className="service-card-cta">
                        Explore service details
                        <ArrowRight size={15} className="cta-arrow" />
                      </span>
                    </div>
                  </a>
                ))}
              </div>

              {/* Quality Standards Bar */}
              <div className="services-standards-bar">
                <div className="standard-item">
                  <div className="standard-icon"><Zap size={18} /></div>
                  <div>
                    <b>Sub-Second Loading</b>
                    <p>95+ Google Lighthouse Core Web Vitals score.</p>
                  </div>
                </div>
                <div className="standard-item">
                  <div className="standard-icon"><ShieldCheck size={18} /></div>
                  <div>
                    <b>100% Hand-Crafted</b>
                    <p>Clean modern architecture with zero builder bloat.</p>
                  </div>
                </div>
                <div className="standard-item">
                  <div className="standard-icon"><MessageSquare size={18} /></div>
                  <div>
                    <b>WhatsApp &amp; Lead CTAs</b>
                    <p>Built-in conversion triggers that turn visitors into inquiries.</p>
                  </div>
                </div>
                <div className="standard-item">
                  <div className="standard-icon"><Clock size={18} /></div>
                  <div>
                    <b>Dedicated Support</b>
                    <p>Reliable post-launch updates and continuous guidance.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* About Us Section */}
          <section id="about" className="alt">
            <div className="wrap split">
              <AboutSvg />
              <div>
                <span className="eyebrow">About Launch Web Solutions</span>
                <h2>Built on technical craft, speed &amp; business clarity</h2>
                <p>
                  Launch Web Solutions is a digital technology studio based in Tamil Nadu—serving clients across Chennai, Kanchipuram, Vandavasi, and worldwide. We combine clean visual design with solid full-stack engineering to build websites and web applications that actually deliver results.
                </p>
                <ul className="checks">
                  <li>100% custom code with zero slow page builders or generic templates</li>
                  <li>Mobile-first architecture targeting 95+ Google Lighthouse scores</li>
                  <li>Transparent pricing with no hidden surprises or vendor lock-in</li>
                  <li>Reliable post-launch maintenance, security updates, and technical support</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section id="process">
            <div className="wrap">
              <div className="head">
                <span className="eyebrow">How We Work</span>
                <h2>A simple, transparent 5-step process</h2>
              </div>
              <div className="steps" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
                {processSteps.map((p) => (
                  <div className="step" key={p.step}>
                    <small>STEP {p.step}</small>
                    <h3>{p.title}</h3>
                    <p>{p.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Work Section */}
          <section id="work" className="alt">
            <div className="wrap">
              <div className="head">
                <span className="eyebrow">Featured Work</span>
                <h2>Proven solutions delivered for growing businesses</h2>
                <p>Explore real live websites, portals, and web applications built by Launch Web Solutions.</p>
              </div>
              <div className="grid3">
                {/* 1. Sri Sai Clinic */}
                <div className="work">
                  <Work1Svg />
                  <div>
                    <span>Healthcare Portal</span>
                    <h3>Sri Sai Clinic</h3>
                    <p style={{ marginBottom: '14px' }}>
                      Fast, patient-friendly medical portal with doctor specialties, OPD schedules, and direct appointment booking.
                    </p>
                    <a
                      href="https://srisaimedicalservice.com/"
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: 'var(--purple)', fontWeight: 600, fontSize: '13.5px' }}
                    >
                      Visit Live Website ↗
                    </a>
                  </div>
                </div>

                {/* 2. Sri Sai Sports */}
                <div className="work">
                  <Work3Svg />
                  <div>
                    <span>Retail &amp; E-Commerce</span>
                    <h3>Sri Sai Sports Shop</h3>
                    <p style={{ marginBottom: '14px' }}>
                      Sports gear and equipment storefront featuring direct WhatsApp ordering that increased footfall and customer inquiries.
                    </p>
                    <a
                      href="https://sri-sai-sports.netlify.app/"
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: 'var(--purple)', fontWeight: 600, fontSize: '13.5px' }}
                    >
                      Visit Live Website ↗
                    </a>
                  </div>
                </div>

                {/* 3. Skill Bridge LMS */}
                <div className="work">
                  <Work2Svg />
                  <div>
                    <span>E-Learning Web App</span>
                    <h3>Skill Bridge LMS</h3>
                    <p style={{ marginBottom: '14px' }}>
                      Interactive course platform with video modules, student tracking, and scalable backend architecture.
                    </p>
                    <a
                      href="https://skillbridgelearning.netlify.app/"
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: 'var(--purple)', fontWeight: 600, fontSize: '13.5px' }}
                    >
                      Visit Live Website ↗
                    </a>
                  </div>
                </div>

                {/* 4. Dhinagar S Portfolio */}
                <div className="work">
                  <Work2Svg />
                  <div>
                    <span>Engineer Showcase</span>
                    <h3>Dhinagar S Portfolio</h3>
                    <p style={{ marginBottom: '14px' }}>
                      Senior full-stack engineer portfolio presenting production web applications, system architectures, and technical skills.
                    </p>
                    <a
                      href="https://dhinagars.netlify.app/"
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: 'var(--purple)', fontWeight: 600, fontSize: '13.5px' }}
                    >
                      Visit Live Website ↗
                    </a>
                  </div>
                </div>

                {/* 5. Adarsh Portfolio */}
                <div className="work">
                  <Work1Svg />
                  <div>
                    <span>Developer Portfolio</span>
                    <h3>Adarsh Portfolio</h3>
                    <p style={{ marginBottom: '14px' }}>
                      Clean developer layout highlighting full-stack engineering achievements, interactive badges, and client work.
                    </p>
                    <a
                      href="https://adarshportfolio-qdxx.onrender.com/"
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: 'var(--purple)', fontWeight: 600, fontSize: '13.5px' }}
                    >
                      Visit Live Website ↗
                    </a>
                  </div>
                </div>

                {/* 6. Aswin B Portfolio */}
                <div className="work">
                  <Work3Svg />
                  <div>
                    <span>Frontend Showcase</span>
                    <h3>Aswin B Portfolio</h3>
                    <p style={{ marginBottom: '14px' }}>
                      Fast, lightweight frontend showcase with smooth navigation, crisp typography, and responsive interactive cards.
                    </p>
                    <a
                      href="https://regal-sunshine-dfda35.netlify.app/"
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: 'var(--purple)', fontWeight: 600, fontSize: '13.5px' }}
                    >
                      Visit Live Website ↗
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section>
            <div className="wrap">
              <div className="head">
                <span className="eyebrow">Client Testimonials</span>
                <h2>Verified feedback from our partners</h2>
              </div>
              <div className="grid3">
                {testimonials.map((t) => (
                  <div className="card quote" key={t.id}>
                    <p style={{ fontSize: '15px', lineHeight: 1.6, fontStyle: 'italic' }}>
                      “{t.quote}”
                    </p>
                    <cite>
                      <b>{t.client}</b>
                      <span style={{ display: 'block', fontSize: '13px', color: 'var(--text)', fontWeight: 400 }}>
                        {t.role}, {t.company} ({t.location})
                      </span>
                    </cite>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="alt" id="faq">
            <div className="wrap">
              <div className="head">
                <span className="eyebrow">FAQ</span>
                <h2>Frequently asked questions</h2>
              </div>
              <div className="faq">
                {faqs.map((f) => (
                  <details key={f.q}>
                    <summary>{f.q}</summary>
                    <p>{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>

          {/* Call to Action Banner */}
          <div className="cta">
            <div className="wrap">
              <h2>Ready to build your high-performance website?</h2>
              <p>Tell us about your project and we will get back to you with ideas and a clear quote within one business day.</p>
              <a href="#contact" className="btn amber">
                Request a Free Quote
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Contact Section (Always visible at the bottom) */}
      <section id="contact">
        <div className="wrap contact">
          <div className="info">
            <span className="eyebrow">Contact Launch Web Solutions</span>
            <h2>Let’s talk about your project</h2>
            <p>Share a few details and our engineering team will reach out with actionable ideas and a clear quote.</p>
            
            <p>
              <b>Official Email</b>
              <a href="mailto:launchwebservice@gmail.com" style={{ color: 'var(--purple)', fontWeight: 600 }}>
                ✉ launchwebservice@gmail.com
              </a>
            </p>

            <p>
              <b>Phone Numbers</b>
              <span style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginTop: '4px' }}>
                <a href="tel:+919585523658" style={{ color: 'var(--indigo)', fontWeight: 600 }}>
                  📞 +91 95855 23658
                </a>
                <a href="tel:+919025102679" style={{ color: 'var(--indigo)', fontWeight: 600 }}>
                  📞 +91 90251 02679
                </a>
              </span>
            </p>

            <p>
              <b>WhatsApp Direct Chat</b>
              <a
                href={company.whatsapp}
                target="_blank"
                rel="noreferrer"
                style={{
                  color: '#128c7e',
                  fontWeight: 600,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginTop: '4px',
                }}
              >
                <WhatsAppIcon size={18} />
                <span>+91 90251 02679 (Click to Chat on WhatsApp)</span>
              </a>
            </p>

            <p>
              <b>Social Profiles</b>
              <span style={{ display: 'flex', gap: '12px', marginTop: '4px' }}>
                <a href={company.instagram} target="_blank" rel="noreferrer" style={{ color: 'var(--orange)', fontWeight: 600 }}>
                  Instagram (@launch____web)
                </a>
                <span>•</span>
                <a href={company.linkedin} target="_blank" rel="noreferrer" style={{ color: 'var(--orange)', fontWeight: 600 }}>
                  LinkedIn
                </a>
              </span>
            </p>

            <p>
              <b>Regional Offices &amp; Engineering Hubs</b>
              <span>Vandavasi · Kanchipuram · Chennai, Tamil Nadu, India (Serving Worldwide)</span>
            </p>
          </div>

          <div>
            {formSubmitted ? (
              <div
                style={{
                  background: '#f1eefc',
                  border: '1px solid #c9c3ee',
                  padding: '30px',
                  borderRadius: '10px',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    background: 'var(--purple)',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 16px',
                    fontSize: '22px',
                  }}
                >
                  ✓
                </div>
                <h3 style={{ marginBottom: '8px', color: 'var(--ink)' }}>Message Sent Successfully!</h3>
                <p style={{ color: 'var(--text)', fontSize: '15px', marginBottom: '20px' }}>
                  Thank you, <b>{formData.name}</b>. We have received your project details and will
                  contact you within one business day at <b>{formData.email}</b>.
                </p>
                <button
                  type="button"
                  className="btn ghost"
                  onClick={() => {
                    setFormSubmitted(false)
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      service: 'Web Design & Development',
                      message: '',
                    })
                  }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <div className="two">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    placeholder="Your name *"
                    aria-label="Name"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    placeholder="Email address *"
                    aria-label="Email"
                    required
                  />
                </div>
                <div className="two">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleFormChange}
                    placeholder="Phone number"
                    aria-label="Phone"
                  />
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleFormChange}
                    aria-label="Service"
                  >
                    {projectTypes.map((pt) => (
                      <option key={pt} value={pt}>
                        {pt}
                      </option>
                    ))}
                  </select>
                </div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleFormChange}
                  placeholder="Tell us about your project requirements..."
                  aria-label="Message"
                  required
                ></textarea>
                <button className="btn primary" type="submit" style={{ width: '100%' }}>
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
