import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export function Button({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  icon = true,
  iconComponent = null,
  disabled = false,
  type = 'button',
  onClick,
  ...props
}) {
  const sizeClasses = {
    sm: 'min-h-[38px] px-3.5 py-1.5 text-xs font-semibold rounded-lg',
    md: 'min-h-[42px] px-5 py-2 text-sm font-semibold rounded-xl sm:px-5.5',
    lg: 'min-h-[46px] px-6 py-2.5 text-sm sm:text-base font-semibold rounded-xl',
  }

  const variantClasses = {
    primary:
      'bg-[#4338CA] text-white hover:bg-[#3730A3] transition-colors duration-150 shadow-2xs font-semibold',
    accent:
      'bg-[#EA580C] text-white hover:bg-[#C2410C] transition-colors duration-150 shadow-2xs font-semibold',
    dark:
      'bg-slate-900 text-white hover:bg-black transition-colors duration-150 shadow-2xs font-semibold',
    secondary:
      'bg-white text-slate-900 border border-slate-300 hover:bg-slate-50 hover:border-slate-400 transition-colors duration-150 font-semibold',
    outline:
      'bg-transparent text-slate-800 border border-slate-300 hover:border-[#4338CA] hover:text-[#4338CA] hover:bg-indigo-50/50 transition-colors duration-150 font-semibold',
    ghost:
      'bg-transparent text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors duration-150 font-semibold',
  }

  const combinedClass = `inline-flex items-center justify-center gap-2 font-sans tracking-tight cursor-pointer disabled:opacity-50 disabled:pointer-events-none select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-[#4338CA] ${sizeClasses[size] || sizeClasses.md} ${variantClasses[variant] || variantClasses.primary} ${className}`

  const IconRender = iconComponent || ArrowRight

  const content = (
    <>
      <span>{children}</span>
      {icon && (
        <IconRender className="h-4 w-4 shrink-0" />
      )}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={combinedClass} {...props}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={combinedClass} target="_blank" rel="noopener noreferrer" {...props}>
        {content}
      </a>
    )
  }

  return (
    <button type={type} className={combinedClass} onClick={onClick} disabled={disabled} {...props}>
      {content}
    </button>
  )
}
