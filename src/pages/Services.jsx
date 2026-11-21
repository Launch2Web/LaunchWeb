import { CheckCircle2, ShieldCheck, Zap, Code2, Lock, Sparkles } from 'lucide-react'
import { SectionHeading, SectionReveal } from '../components/Section'
import { ServiceCard } from '../components/ServiceCard'
import { FAQ } from '../components/FAQ'
import { Button } from '../components/Button'
import { SEO } from '../components/SEO'
import { services } from '../data/content'

export function Services() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Web Design & Development Services',
    provider: {
      '@type': 'ProfessionalService',
      name: 'LaunchWeb Solutions',
      url: 'https://launchwebsolutions.in/',
    },
    areaServed: ['Vandavasi', 'Kanchipuram', 'Chennai', 'Tamil Nadu', 'Worldwide'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'LaunchWeb Solutions Services Catalog',
      itemListElement: services.map((s, idx) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: s.title,
          description: s.description,
        },
        position: idx + 1,
      })),
    },
  }

  return (
    <>
      <SEO
        title="Web Design &amp; Digital Solutions Services | LaunchWeb Solutions"
        description="Explore custom web design, high-speed website development, business web platforms, e-commerce, and AI video ads by LaunchWeb Solutions for clients in Vandavasi, Kanchipuram, Chennai & globally."
        keywords="LaunchWeb Solutions services, Web developer Vandavasi, Web developer Kanchipuram, Web developer Chennai, Digital solutions, Web design company Tamil Nadu, AI ads"
        canonicalUrl="https://launchwebsolutions.in/services"
        schemaJson={serviceSchema}
      />

      <div className="pt-26 pb-16 sm:pt-32 sm:pb-24 bg-[#F8FAFC] text-slate-900 min-h-screen">
        <div className="container-page">
          <div className="max-w-3xl space-y-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#4338CA]">
              Services &amp; Capabilities
            </p>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight">
              Web Design &amp; Digital Solutions
            </h1>
            <p className="text-base sm:text-lg leading-relaxed text-slate-600">
              We combine user-focused interface design, robust software engineering, and search engine readiness into every digital product we deliver.
            </p>
          </div>

          {/* Service Cards Grid - Clean, simple, uniform */}
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          {/* Quality Guarantee Standards Bar */}
          <div className="mt-14 rounded-2xl border border-slate-200 bg-white p-7 sm:p-9 shadow-xs">
            <div className="text-center max-w-xl mx-auto space-y-1.5 mb-8">
              <h2 className="font-display text-2xl font-bold text-slate-900">
                Included with Every LaunchWeb Project
              </h2>
              <p className="text-xs text-slate-500">
                Architectural quality and security built into every line of code we ship
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-5 space-y-1.5">
                <div className="flex items-center gap-2 text-[#4338CA]">
                  <Zap className="h-5 w-5" />
                  <h3 className="font-display text-sm font-bold text-slate-900">95+ Performance</h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Optimized Core Web Vitals and lightning-fast sub-second loading speeds.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-5 space-y-1.5">
                <div className="flex items-center gap-2 text-[#EA580C]">
                  <ShieldCheck className="h-5 w-5" />
                  <h3 className="font-display text-sm font-bold text-slate-900">SEO &amp; Schema Built-in</h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Clean semantic HTML5 hierarchy, JSON-LD schema markup, and metadata.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-5 space-y-1.5">
                <div className="flex items-center gap-2 text-emerald-700">
                  <Code2 className="h-5 w-5" />
                  <h3 className="font-display text-sm font-bold text-slate-900">Clean React &amp; Spring Boot</h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Modular, zero-bloat codebases built for scalability and maintainability.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-5 space-y-1.5">
                <div className="flex items-center gap-2 text-[#4338CA]">
                  <Lock className="h-5 w-5" />
                  <h3 className="font-display text-sm font-bold text-slate-900">SSL &amp; Security</h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  End-to-end data encryption and production-grade security standards.
                </p>
              </div>
            </div>
          </div>

          {/* Custom Solution Callout */}
          <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-8 sm:p-12 text-center space-y-4 shadow-xs">
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900">
              Need a Custom Web Solution or Architecture?
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
              If your business requires a tailored digital portal, appointment system, database integration, or API backend, our senior engineering team is ready to build it.
            </p>
            <div className="pt-2">
              <Button to="/contact" size="lg" variant="primary">
                Discuss Your Scope
              </Button>
            </div>
          </div>
        </div>

        <FAQ />
      </div>
    </>
  )
}
