import { Link } from 'react-router-dom'

export function Logo({ size = 'md', variant = 'brand', className = '' }) {
  const imgHeight = {
    sm: 'h-9 w-auto',
    md: 'h-11 sm:h-12 w-auto',
    lg: 'h-14 sm:h-16 w-auto',
  }

  const textSize = {
    sm: 'text-lg sm:text-xl',
    md: 'text-xl sm:text-2xl',
    lg: 'text-2xl sm:text-3xl',
  }

  const subtextSize = {
    sm: 'text-[8px] sm:text-[9px] tracking-[0.26em]',
    md: 'text-[9px] sm:text-[10px] tracking-[0.3em]',
    lg: 'text-[11px] sm:text-[12px] tracking-[0.32em]',
  }

  if (variant === 'full-image') {
    return (
      <Link
        to="/"
        className={`group inline-flex items-center transition-opacity hover:opacity-95 ${className}`}
        aria-label="LaunchWeb Solutions Home"
      >
        <img
          src="/logo-tight.png"
          alt="LaunchWeb Solutions"
          className={`object-contain transition-transform duration-300 group-hover:scale-105 ${imgHeight[size] || imgHeight.md}`}
        />
      </Link>
    )
  }

  return (
    <Link
      to="/"
      className={`group inline-flex items-center gap-2.5 sm:gap-3 transition-opacity hover:opacity-95 ${className}`}
      aria-label="LaunchWeb Solutions Home"
    >
      <img
        src="/logo-mark.png"
        alt="LaunchWeb Solutions Emblem"
        className={`object-contain transition-transform duration-300 group-hover:scale-105 ${imgHeight[size] || imgHeight.md}`}
      />
      
      <div className="flex flex-col select-none">
        <div className={`font-display font-extrabold tracking-tight leading-none text-slate-950 ${textSize[size] || textSize.md}`}>
          LAUNCH<span className="text-[#EA580C]">WEB</span>
        </div>
        <span className={`font-display font-bold uppercase text-[#4338CA] mt-0.5 leading-none ${subtextSize[size] || subtextSize.md}`}>
          SOLUTIONS
        </span>
      </div>
    </Link>
  )
}
