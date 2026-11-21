import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { faqs } from '../data/content'
import { SectionHeading } from './Section'

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="py-16 sm:py-24 border-t border-slate-200 bg-[#F8FAFC]">
      <div className="container-page">
        <SectionHeading
          eyebrow="Frequently Asked Questions"
          title="Everything You Need to Know"
          description="Clear answers about our development process, timelines, custom software engineering, and partner support."
        />

        <div className="mt-10 max-w-3xl space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={faq.q}
                className={`overflow-hidden rounded-xl border bg-white transition-colors duration-150 ${
                  isOpen ? 'border-slate-400' : 'border-slate-200'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between p-5 sm:p-6 text-left font-display text-base sm:text-lg font-bold text-slate-900 gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="leading-snug">{faq.q}</span>
                  <div
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-md border transition-transform duration-150 ${
                      isOpen
                        ? 'bg-slate-100 border-slate-300 text-slate-900 rotate-180'
                        : 'bg-slate-50 border-slate-200 text-slate-400'
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-sm leading-relaxed text-slate-600 border-t border-slate-100 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
