import { Mail, Phone, MessageSquare, MapPin, Clock, Instagram, Linkedin, Globe } from 'lucide-react'
import { SectionHeading } from '../components/Section'
import { ContactForm } from '../components/ContactForm'
import { SEO } from '../components/SEO'
import { company } from '../data/content'
import { trackEmailClick, trackPhoneClick, trackWhatsAppClick } from '../utils/analytics'

export function Contact() {
  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact LaunchWeb Solutions',
    description: 'Get in touch with LaunchWeb Solutions for custom web design, software development, and digital solutions in Vandavasi, Kanchipuram, and Chennai.',
    url: 'https://launchwebsolutions.in/contact',
    mainEntity: {
      '@type': 'ProfessionalService',
      name: 'LaunchWeb Solutions',
      telephone: '+919585523658',
      email: 'launchwebservice@gmail.com',
      url: 'https://launchwebsolutions.in/',
      sameAs: [
        company.instagram,
        company.linkedin,
        'https://launchwebsolutions.in/'
      ]
    },
  }

  return (
    <>
      <SEO
        title="Contact LaunchWeb Solutions | Web Developer in Vandavasi, Kanchipuram &amp; Chennai"
        description="Contact LaunchWeb Solutions (launchwebsolutions.in) for custom web design, software engineering, or AI ads inquiries. Call +91 95855 23658 or instant WhatsApp."
        keywords="Contact LaunchWeb Solutions, Launch Web Solutions Vandavasi, Launch Web Solutions Kanchipuram, Launch Web Solutions Chennai, Hire web developer Vandavasi, Hire web developer Kanchipuram, Hire web developer Chennai"
        canonicalUrl="https://launchwebsolutions.in/contact"
        schemaJson={contactSchema}
      />

      <div className="pt-26 pb-16 sm:pt-32 sm:pb-24 bg-[#F8FAFC] text-slate-900 min-h-screen">
        <div className="container-page">
          <div className="max-w-3xl space-y-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#4338CA]">
              Contact Us &amp; Free Quote
            </p>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight">
              Let's Discuss Your Project
            </h1>
            <p className="text-base sm:text-lg leading-relaxed text-slate-600">
              Have a question or ready to begin? Reach out via our inquiry form or contact our team directly.
            </p>
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-12 items-start">
            {/* Left Column: Direct Info */}
            <div className="lg:col-span-5 space-y-5">
              <div className="rounded-2xl border border-slate-200 bg-white p-7 sm:p-8 space-y-5 shadow-2xs">
                <h2 className="font-display text-xl font-bold text-slate-900">
                  Direct Contact Channels
                </h2>

                <div className="space-y-5 text-sm">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                      Email Communication
                    </p>
                    <a
                      href={`mailto:${company.email}`}
                      onClick={() => trackEmailClick(company.email)}
                      className="flex items-center gap-2.5 font-display text-base sm:text-lg font-bold text-slate-900 hover:text-slate-700 transition-colors"
                    >
                      <Mail className="h-5 w-5 text-slate-500" />
                      <span>{company.email}</span>
                    </a>
                  </div>

                  <div className="pt-3.5 border-t border-slate-100">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                      Phone &amp; Direct Call Lines
                    </p>
                    <div className="space-y-1.5">
                      {company.phones.map((phone) => (
                        <a
                          key={phone.href}
                          href={phone.href}
                          onClick={() => trackPhoneClick(phone.label)}
                          className="flex items-center gap-2.5 font-display text-base sm:text-lg font-bold text-slate-900 hover:text-slate-700 transition-colors"
                        >
                          <Phone className="h-5 w-5 text-slate-500" />
                          <span>{phone.label}</span>
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3.5 border-t border-slate-100">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                      Official Website
                    </p>
                    <a
                      href={company.url}
                      className="flex items-center gap-2.5 font-display text-base sm:text-lg font-bold text-slate-900 hover:text-[#4338CA] transition-colors"
                    >
                      <Globe className="h-5 w-5 text-slate-500" />
                      <span>{company.url}</span>
                    </a>
                  </div>

                  <div className="pt-3.5 border-t border-slate-100">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                      Instant WhatsApp Messenger
                    </p>
                    <a
                      href={company.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackWhatsAppClick('contact_page')}
                      className="inline-flex min-h-[40px] items-center gap-2.5 font-display text-base font-bold text-emerald-800 hover:underline"
                    >
                      <MessageSquare className="h-5 w-5 text-emerald-600" />
                      <span>Chat Directly on WhatsApp →</span>
                    </a>
                  </div>

                  {company.instagram && (
                    <div className="pt-3.5 border-t border-slate-100">
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                        Instagram
                      </p>
                      <a
                        href={company.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-display text-sm font-bold text-slate-700 hover:text-slate-900"
                      >
                        <Instagram className="h-4 w-4 text-[#E1306C]" />
                        <span>{company.instagramHandle}</span>
                      </a>
                    </div>
                  )}

                  {company.linkedin && (
                    <div className="pt-3.5 border-t border-slate-100">
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                        LinkedIn
                      </p>
                      <a
                        href={company.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-display text-sm font-bold text-slate-700 hover:text-slate-900"
                      >
                        <Linkedin className="h-4 w-4 text-[#0A66C2]" />
                        <span>{company.linkedinHandle}</span>
                      </a>
                    </div>
                  )}

                  <div className="pt-3.5 border-t border-slate-100">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                      Service Hubs
                    </p>
                    <p className="flex items-center gap-2 text-xs font-medium text-slate-600">
                      <MapPin className="h-4 w-4 text-[#EA580C] shrink-0" />
                      <span>{company.location}</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Response Time Guarantee */}
              <div className="rounded-xl border border-slate-200 bg-white p-5 flex items-center gap-3.5 shadow-2xs">
                <Clock className="h-7 w-7 text-[#4338CA] shrink-0" />
                <div>
                  <h3 className="font-display text-sm font-bold text-slate-900">
                    Guaranteed Fast Turnaround
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    All project queries receive a comprehensive consultation response within 2 hours.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
