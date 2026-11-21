import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Layout,
  Code2,
  Globe,
  Cpu,
  ShoppingBag,
  Palette,
  Video,
  Sparkles,
} from 'lucide-react'

const iconMap = {
  Layout,
  Code2,
  Globe,
  Cpu,
  ShoppingBag,
  Palette,
  Video,
  Sparkles,
}

export function ServiceCard({ service }) {
  const IconComponent = iconMap[service.icon] || Layout

  return (
    <div className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 transition-all duration-150 hover:border-slate-300 hover:shadow-xs">
      <div>
        {/* Top: Icon & Index */}
        <div className="flex items-center justify-between">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50/80 text-[#4338CA] transition-colors group-hover:bg-[#4338CA] group-hover:text-white">
            <IconComponent className="h-5 w-5" />
          </div>
          <span className="font-mono text-xs font-semibold text-slate-400">
            {service.number}
          </span>
        </div>

        {/* Title */}
        <h3 className="mt-4 font-display text-lg font-bold text-slate-900 group-hover:text-[#4338CA] transition-colors">
          {service.title}
        </h3>

        {/* Description */}
        <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
          {service.description}
        </p>

        {/* Deliverables */}
        {service.deliverables && service.deliverables.length > 0 && (
          <ul className="mt-4 space-y-1.5 border-t border-slate-100 pt-3 text-xs text-slate-600">
            {service.deliverables.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#EA580C] shrink-0 mt-1.5" />
                <span className="leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Action */}
      <div className="mt-5 pt-3 border-t border-slate-100">
        <Link
          to="/services"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#4338CA] hover:text-[#3730A3] transition-colors"
        >
          <span>Learn More</span>
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </div>
  )
}
