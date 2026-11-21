import { useEffect } from 'react'
import { X, ExternalLink } from 'lucide-react'
import { Button } from './Button'

export function WorkModal({ work, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    if (work) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [work, onClose])

  if (!work) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs"
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div
        className="relative z-10 w-full max-w-2xl max-h-[85vh] sm:max-h-[90vh] overflow-y-auto rounded-2xl border border-slate-200 bg-white shadow-2xl my-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-work-title"
      >
        {/* Header Image Frame */}
        <div className="relative h-44 sm:h-56 w-full overflow-hidden bg-slate-100">
          <img
            src={work.image}
            alt={work.imageAlt || work.name}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
          
          <button
            type="button"
            onClick={onClose}
            className="absolute top-3.5 right-3.5 flex min-h-[40px] min-w-[40px] items-center justify-center rounded-full border border-slate-200 bg-white/95 text-slate-700 shadow-xs hover:bg-white hover:text-slate-900 cursor-pointer"
            aria-label="Close project modal"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="absolute bottom-3 left-4 right-4 sm:left-6 sm:right-6">
            <span className="inline-block rounded-md bg-slate-900 px-2.5 py-0.5 text-xs font-semibold text-white">
              {work.category} &bull; {work.type}
            </span>
            <h3 id="modal-work-title" className="mt-1.5 font-display text-2xl sm:text-3xl font-extrabold text-slate-900">
              {work.name}
            </h3>
          </div>
        </div>

        {/* Modal Body Content */}
        <div className="p-5 sm:p-7 space-y-5">
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Project Overview
            </h4>
            <p className="mt-1.5 text-sm sm:text-base leading-relaxed text-slate-600">
              {work.summary}
            </p>
          </div>

          {/* Challenge & Solution */}
          {work.challenge && (
            <div className="space-y-4 rounded-xl border border-slate-200 bg-slate-50/70 p-4 sm:p-5">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  The Challenge
                </h4>
                <p className="mt-1 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {work.challenge}
                </p>
              </div>
              {work.solution && (
                <div className="pt-3 border-t border-slate-200">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900">
                    Our Solution
                  </h4>
                  <p className="mt-1 text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {work.solution}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Technologies Used */}
          {work.tech && work.tech.length > 0 && (
            <div className="space-y-2 pt-1">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                Engineered With
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {work.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-slate-100 border border-slate-200 px-3 py-1 text-xs font-medium text-slate-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Live CTA Button */}
          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
            {work.url ? (
              <Button
                href={work.url}
                variant="primary"
                className="w-full sm:w-auto min-w-[190px]"
                iconComponent={ExternalLink}
              >
                Open Live Project
              </Button>
            ) : (
              <span className="text-xs font-semibold text-slate-500 bg-slate-100 border border-slate-200 px-3.5 py-2 rounded-lg">
                Internal Client Platform • Proprietary
              </span>
            )}
            <Button
              to="/contact"
              variant="outline"
              className="w-full sm:w-auto"
              onClick={onClose}
            >
              Request Similar Project
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
