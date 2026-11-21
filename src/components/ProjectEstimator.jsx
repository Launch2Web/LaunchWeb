import { useState } from 'react'
import { Check, Clock, Shield, MessageSquare, Sparkles } from 'lucide-react'
import { Button } from './Button'
import { trackWhatsAppClick } from '../utils/analytics'

const serviceTypes = [
  { id: 'website', name: 'Business Website', baseDays: '10-14 days', range: '₹15,000 - ₹35,000', icon: '🌐' },
  { id: 'webapp', name: 'Custom Web App / Portal', baseDays: '3-5 weeks', range: '₹35,000 - ₹85,000', icon: '⚡' },
  { id: 'ecommerce', name: 'E-Commerce Storefront', baseDays: '2-4 weeks', range: '₹25,000 - ₹55,000', icon: '🛍️' },
  { id: 'ai-ads', name: 'AI Ads & Video Commercials', baseDays: '3-5 days', range: '₹8,000 - ₹20,000', icon: '✨' },
]

const addOnOptions = [
  { id: 'seo', name: 'Advanced SEO & Google Ranking', days: '+3 days' },
  { id: 'cms', name: 'Admin Dashboard & Content Manager', days: '+5 days' },
  { id: 'payment', name: 'Payment Gateway Integration', days: '+2 days' },
  { id: 'support', name: '1-Year Priority Support & Maintenance', days: 'Ongoing' },
]

export function ProjectEstimator() {
  const [selectedService, setSelectedService] = useState(serviceTypes[0])
  const [selectedAddons, setSelectedAddons] = useState(['seo'])

  const toggleAddon = (id) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  const whatsappMessage = encodeURIComponent(
    `Hello LaunchWeb Solutions team! I used your Project Estimator:
- Selected: ${selectedService.name}
- Add-ons: ${selectedAddons.map((a) => addOnOptions.find((o) => o.id === a)?.name).filter(Boolean).join(', ') || 'None'}
Could we discuss the exact scope and start date?`
  )

  const directWhatsAppUrl = `https://wa.me/919025102679?text=${whatsappMessage}`

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-9 shadow-xs">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-6">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 border border-slate-200 px-3 py-1 text-xs font-bold text-slate-800">
            <Sparkles className="h-3.5 w-3.5 text-[#F97316]" />
            Instant Project Scope Planner
          </span>
          <h3 className="mt-2 font-display text-2xl font-extrabold text-slate-900">
            Interactive Project Estimator
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Choose your project requirements to calculate estimated turnaround and investment guide.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-lg px-3.5 py-2 w-fit">
          <Shield className="h-4 w-4 text-emerald-600" />
          <span>Transparent Pricing • Free Technical Consultation</span>
        </div>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-12">
        {/* Step 1: Select Service */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
              1. Select Project Type
            </label>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {serviceTypes.map((srv) => {
                const isSelected = selectedService.id === srv.id
                return (
                  <button
                    key={srv.id}
                    type="button"
                    onClick={() => setSelectedService(srv)}
                    className={`flex flex-col text-left p-4 rounded-xl border transition-colors duration-150 cursor-pointer min-h-[48px] ${
                      isSelected
                        ? 'border-[#4338CA] bg-indigo-50/50 ring-1 ring-[#4338CA]'
                        : 'border-slate-200 bg-slate-50/50 hover:bg-slate-50 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xl" role="img" aria-hidden="true">{srv.icon}</span>
                      {isSelected && (
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#4338CA] text-white">
                          <Check className="h-3 w-3 stroke-[3]" />
                        </span>
                      )}
                    </div>
                    <span className="mt-2 font-display text-sm font-bold text-slate-900">
                      {srv.name}
                    </span>
                    <span className="text-xs text-slate-500 mt-1">Est: {srv.range}</span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Step 2: Add-on Capabilities */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
              2. Optional Capabilities &amp; Upgrades
            </label>
            <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
              {addOnOptions.map((addon) => {
                const checked = selectedAddons.includes(addon.id)
                return (
                  <button
                    key={addon.id}
                    type="button"
                    onClick={() => toggleAddon(addon.id)}
                    className={`flex items-center justify-between p-3 rounded-lg border text-left text-xs transition-colors duration-150 cursor-pointer min-h-[44px] ${
                      checked
                        ? 'border-[#4338CA] bg-indigo-50/50 text-slate-900 font-semibold'
                        : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    <span>{addon.name}</span>
                    <div
                      className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border ${
                        checked
                          ? 'border-[#4338CA] bg-[#4338CA] text-white'
                          : 'border-slate-300 bg-white'
                      }`}
                    >
                      {checked && <Check className="h-3 w-3 stroke-[3]" />}
                    </div>
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* Step 3: Calculation & Instant WhatsApp Connect */}
        <div className="lg:col-span-5 flex flex-col justify-between rounded-xl border border-slate-200 bg-slate-50/70 p-6 space-y-6">
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Estimated Scope Summary
            </span>

            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-600">Selected Solution:</span>
                <span className="font-bold text-slate-900">{selectedService.name}</span>
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-600">Typical Turnaround:</span>
                <span className="font-bold text-slate-900 flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5 text-[#F97316]" />
                  {selectedService.baseDays}
                </span>
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-600">Active Add-ons:</span>
                <span className="font-bold text-slate-900">
                  {selectedAddons.length} Selected
                </span>
              </div>

              <div className="border-t border-slate-200 pt-3">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Investment Guide
                  </span>
                  <span className="font-display text-xl sm:text-2xl font-extrabold text-[#4338CA]">
                    {selectedService.range}
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 mt-1">
                  Final quotation determined by custom feature specifications and API complexity.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-2.5 pt-2">
            <a
              href={directWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('Estimator')}
              className="w-full inline-flex min-h-[46px] items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white hover:bg-emerald-700 transition-colors cursor-pointer"
            >
              <MessageSquare className="h-4 w-4" />
              <span>Discuss This Estimate on WhatsApp</span>
            </a>

            <Button to="/contact" variant="secondary" size="md" className="w-full">
              Send Formal Proposal Request
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
