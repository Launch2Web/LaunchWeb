export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
}) {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  }

  return (
    <div className={`max-w-3xl ${alignClasses[align]} ${className}`}>
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-widest text-[#4338CA]">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-2.5 font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base sm:text-lg leading-relaxed text-slate-600">
          {description}
        </p>
      )}
    </div>
  )
}

export function SectionReveal({ children, className = '' }) {
  return <div className={className}>{children}</div>
}
