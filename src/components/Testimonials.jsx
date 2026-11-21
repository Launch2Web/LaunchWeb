import { Star, Quote, CheckCircle2 } from 'lucide-react'
import { SectionHeading } from './Section'
import { testimonials } from '../data/content'

export function Testimonials() {
  return (
    <section className="py-16 sm:py-24 bg-slate-50/70 border-b border-slate-200">
      <div className="container-page">
        <SectionHeading
          eyebrow="Client Reviews"
          title="Trusted by Growing Businesses & Clinics"
          description="Read direct feedback from clients who partner with LaunchWeb Solutions to engineer their digital presence."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-7 shadow-xs hover:border-slate-300 transition-colors"
            >
              <div>
                {/* Rating & Quote Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="h-5 w-5 text-slate-300" />
                </div>

                {/* Project Tag */}
                <div className="mt-3.5 inline-flex items-center gap-1 text-[11px] font-semibold text-[#4338CA]">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                  <span>{item.project}</span>
                </div>

                {/* Feedback Quote */}
                <p className="mt-3 text-sm leading-relaxed text-slate-700 italic">
                  "{item.quote}"
                </p>
              </div>

              {/* Author / Client */}
              <div className="mt-6 pt-4 border-t border-slate-100">
                <p className="font-display text-sm font-bold text-slate-900">
                  {item.client}
                </p>
                <p className="text-xs text-slate-500">
                  {item.role}, <span className="font-medium text-slate-700">{item.company}</span>
                </p>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  {item.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
