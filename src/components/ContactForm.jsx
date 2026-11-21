import { useForm, ValidationError } from '@formspree/react'
import { CheckCircle2, MessageSquare, Send, Sparkles } from 'lucide-react'
import { budgets, company, projectTypes } from '../data/content'
import { Button } from './Button'
import { trackContactFormSubmit, trackWhatsAppClick } from '../utils/analytics'

const fieldClass =
  'w-full min-h-[44px] rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 outline-none transition duration-150 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 disabled:opacity-50'

export function ContactForm({ compact = false }) {
  const [state, handleSubmit] = useForm('xojgazpl')

  const handleFormSubmit = async (e) => {
    const formData = new FormData(e.currentTarget)
    const projectType = formData.get('projectType') || 'Unspecified'
    const budget = formData.get('budget') || 'Unspecified'
    
    trackContactFormSubmit(projectType, budget)
    await handleSubmit(e)
  }

  if (state.succeeded) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-12 text-center space-y-4 shadow-xl shadow-slate-900/5">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200/60">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h3 className="font-display text-2xl font-extrabold text-slate-900">
          Enquiry Received!
        </h3>
        <p className="text-sm leading-relaxed text-slate-600 max-w-sm mx-auto">
          Thank you for reaching out to LaunchWeb Solutions. Our engineering team will review your business requirements and reply within 2 hours.
        </p>
        <div className="pt-3">
          <a
            href={company.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('form_success')}
            className="inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-emerald-50 border border-emerald-200 px-4 py-2 text-xs font-semibold text-emerald-800 hover:bg-emerald-100 transition-colors"
          >
            <MessageSquare className="h-4 w-4 text-emerald-600" />
            <span>Need an urgent reply? Chat on WhatsApp →</span>
          </a>
        </div>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleFormSubmit}
      className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 space-y-5"
    >
      <div className="border-b border-slate-100 pb-4">
        <h3 className="font-display text-lg font-bold text-slate-900">
          Send Us a Message
        </h3>
        <p className="text-xs text-slate-500 mt-0.5">Tell us about your project requirements</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-700">
          Your Name *
          <input
            id="name"
            name="name"
            className={fieldClass}
            placeholder="John Doe"
            autoComplete="name"
            required
            disabled={state.submitting}
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} className="text-xs font-normal text-rose-600" />
        </label>

        <label className="grid gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-700">
          Email Address *
          <input
            id="email"
            type="email"
            name="email"
            className={fieldClass}
            placeholder="john@example.com"
            autoComplete="email"
            required
            disabled={state.submitting}
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} className="text-xs font-normal text-rose-600" />
        </label>

        <label className="grid gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-700">
          Phone Number
          <input
            id="phone"
            type="tel"
            name="phone"
            className={fieldClass}
            placeholder="+91 95855 23658"
            autoComplete="tel"
            disabled={state.submitting}
          />
          <ValidationError prefix="Phone" field="phone" errors={state.errors} className="text-xs font-normal text-rose-600" />
        </label>

        <label className="grid gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-700">
          Company / Business Name
          <input
            id="business"
            name="business"
            className={fieldClass}
            placeholder="Your Brand Name"
            disabled={state.submitting}
          />
          <ValidationError prefix="Business" field="business" errors={state.errors} className="text-xs font-normal text-rose-600" />
        </label>

        <label className="grid gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-700">
          Project Service Need
          <select
            id="projectType"
            name="projectType"
            className={fieldClass}
            defaultValue=""
            disabled={state.submitting}
          >
            <option value="" disabled>Select service required</option>
            {projectTypes.map((type) => (
              <option key={type} value={type} className="bg-white text-slate-900">
                {type}
              </option>
            ))}
          </select>
          <ValidationError prefix="Project Type" field="projectType" errors={state.errors} className="text-xs font-normal text-rose-600" />
        </label>

        <label className="grid gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-700">
          Estimated Budget
          <select
            id="budget"
            name="budget"
            className={fieldClass}
            defaultValue=""
            disabled={state.submitting}
          >
            <option value="" disabled>Select budget range</option>
            {budgets.map((budget) => (
              <option key={budget} value={budget} className="bg-white text-slate-900">
                {budget}
              </option>
            ))}
          </select>
          <ValidationError prefix="Budget" field="budget" errors={state.errors} className="text-xs font-normal text-rose-600" />
        </label>

        <label className="grid gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-700 sm:col-span-2">
          Project Scope &amp; Deliverables *
          <textarea
            id="message"
            name="message"
            rows={compact ? 4 : 5}
            className={fieldClass}
            placeholder="Describe what you want to build (e.g., website redesign, medical booking portal, sports shop store, custom software)..."
            required
            disabled={state.submitting}
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} className="text-xs font-normal text-rose-600" />
        </label>
      </div>

      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Button
          type="submit"
          variant="primary"
          className="w-full sm:w-auto min-w-[200px]"
          disabled={state.submitting}
          iconComponent={Send}
        >
          {state.submitting ? 'Sending Request...' : 'Send Project Enquiry'}
        </Button>
        <span className="text-xs font-medium text-slate-500">
          ⚡ Average response time: under 2 hours
        </span>
      </div>
    </form>
  )
}
