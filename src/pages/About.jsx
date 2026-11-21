import { CheckCircle2, ShieldCheck, Zap, Sparkles, MapPin } from 'lucide-react'
import { SectionHeading } from '../components/Section'
import { Button } from '../components/Button'
import { SEO } from '../components/SEO'
import { whyChoose, serviceLocations } from '../data/content'
import { servicesData } from '../data/servicesData'

export function About() {
  const aboutSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About LaunchWeb Solutions',
    description: 'LaunchWeb Solutions is a digital software studio bridging modern UI design and full-stack software engineering in Vandavasi, Kanchipuram, and Chennai.',
    url: 'https://launchwebsolutions.in/about',
    publisher: {
      '@type': 'Organization',
      name: 'LaunchWeb Solutions',
      url: 'https://launchwebsolutions.in/',
      logo: 'https://launchwebsolutions.in/logo.png',
    },
  }

  return (
    <>
      <SEO
        title="About LaunchWeb Solutions | Web Design &amp; Digital Solutions Studio"
        description="Learn how LaunchWeb Solutions (launchwebsolutions.in) builds high-speed websites, web applications, and digital solutions in Vandavasi, Kanchipuram, Chennai & globally."
        keywords="About LaunchWeb Solutions, LaunchWeb Solutions Vandavasi, LaunchWeb Solutions Kanchipuram, LaunchWeb Solutions Chennai, web developer Tamil Nadu, web design studio"
        canonicalUrl="https://launchwebsolutions.in/about"
        schemaJson={aboutSchema}
      />

      <div className="pt-26 pb-16 sm:pt-32 sm:pb-24 bg-[#F8FAFC] text-slate-900 min-h-screen">
        <div className="container-page space-y-16 sm:space-y-20">
          {/* Main Header */}
          <div className="max-w-3xl space-y-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#4338CA]">
              About LaunchWeb Solutions
            </p>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight">
              Software &amp; Web Design Built with Care
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              LaunchWeb Solutions is an engineering studio in Tamil Nadu crafting fast websites, custom software, and digital solutions that help businesses establish credibility and operate smoothly.
            </p>
          </div>

          {/* Story & Philosophy Section */}
          <div className="grid gap-8 md:grid-cols-12 items-center border-y border-slate-200 py-12 sm:py-16">
            <div className="md:col-span-6 space-y-4">
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900">
                Built on Technical Craft &amp; Business Clarity
              </h2>
              <p className="text-sm leading-relaxed text-slate-600">
                We avoid fragile drag-and-drop website builders and bloated generic templates. Every solution developed by LaunchWeb Solutions is written with clean, modular HTML, modern React, and enterprise Java Spring Boot backend infrastructure where required.
              </p>
              <p className="text-sm leading-relaxed text-slate-600">
                Our engineering methodology prioritizes sub-second loading speed, intuitive mobile ergonomics, deep search engine visibility, and bulletproof security across every viewport.
              </p>

              <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-slate-600">
                <MapPin className="h-4 w-4 text-slate-400" />
                <span>Headquartered in Tamil Nadu &bull; Operating Worldwide</span>
              </div>
            </div>

            <div className="md:col-span-6 rounded-xl border border-slate-200 bg-white p-7 sm:p-8 space-y-5">
              <h3 className="font-display text-xl font-bold text-slate-900">
                What Sets Our Studio Apart
              </h3>
              <div className="space-y-3.5 text-sm text-slate-600">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-slate-900 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Direct Engineer Collaboration:</strong> Work directly with the senior developers building your software without agency bureaucracy.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-slate-900 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Revenue &amp; Trust Focus:</strong> We design layouts that turn first-time website visitors into paying customers and patients.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-slate-900 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Production Reliability:</strong> 100% responsive, high-accessibility (WCAG), and tested under real-world network conditions.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Regional Hubs & Presence */}
          <div>
            <SectionHeading
              eyebrow="Local Presence &amp; Global Reach"
              title="Serving Local Businesses &amp; International Clients"
              description="With roots in Vandavasi, Kanchipuram, and Chennai, LaunchWeb Solutions serves local retail shops, healthcare centers, educational institutes, and remote global clients."
            />
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {serviceLocations.map((loc) => (
                <div
                  key={loc.city}
                  className="rounded-xl border border-slate-200 bg-white p-6 space-y-2.5"
                >
                  <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-400">
                    <MapPin className="h-3.5 w-3.5" />
                    <span>{loc.city} Hub</span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-slate-900">
                    {loc.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-slate-600">
                    {loc.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Guiding Principles */}
          <div>
            <SectionHeading
              eyebrow="Our Principles"
              title="A Solid Architectural Foundation"
              description="Four foundational tenets guiding every line of code and user interface component we design."
            />
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {whyChoose.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-slate-200 bg-white p-7 space-y-2.5"
                >
                  <span className="font-mono text-xs font-semibold text-slate-400">
                    {item.number}
                  </span>
                  <h3 className="font-display text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Services Capabilities Showcase */}
          <div>
            <SectionHeading
              eyebrow="What We Deliver"
              title="End-to-End Digital Solutions"
              description="From high-speed web design to e-commerce and AI video promotion, we deliver complete solutions built for real business growth."
            />
            <div className="mt-8 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
              {servicesData.map((s) => (
                <div
                  key={s.slug}
                  className="rounded-xl border border-slate-200 bg-white p-5 space-y-1 shadow-2xs"
                >
                  <h3 className="font-display text-base font-bold text-slate-900">
                    {s.name}
                  </h3>
                  <p className="text-xs text-slate-500">
                    {s.tag}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA Callout */}
          <div className="rounded-2xl border border-slate-200 bg-white p-8 sm:p-12 text-center space-y-4 shadow-xs">
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900">
              Ready to Upgrade Your Digital Platform?
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
              Partner with LaunchWeb Solutions to engineer a modern, trustworthy, high-performing website or custom software system for your business.
            </p>
            <div className="pt-2 flex justify-center gap-4">
              <Button to="/contact" size="lg" variant="primary">
                Start Your Project
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
