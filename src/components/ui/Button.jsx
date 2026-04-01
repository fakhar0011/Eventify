const variants = {
  primary: `bg-amber text-bg font-display font-bold
             hover:bg-yellow-300 hover:-translate-y-0.5
             shadow-[0_4px_20px_rgba(245,166,35,0.3)]
             hover:shadow-[0_8px_28px_rgba(245,166,35,0.45)]`,

  outline: `border-2 border-amber text-amber font-display font-bold
             hover:bg-amber hover:text-bg hover:-translate-y-0.5`,

  ghost: `text-muted hover:text-white hover:bg-white/5 font-medium`,

  card: `bg-surface border border-border text-zinc-200 font-display font-semibold text-sm
             hover:bg-amber hover:text-bg hover:border-amber hover:-translate-y-0.5
             hover:shadow-[0_4px_16px_rgba(245,166,35,0.3)]`,
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
  ...rest
}) {
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-7 py-3.5 text-sm sm:px-8 sm:py-4 sm:text-base',
  }

  return (
    <button
      onClick={onClick}
      className={`
        inline-flex items-center justify-center gap-2
        rounded-full transition-all duration-200 cursor-pointer
        ${variants[variant]} ${sizes[size]} ${className}
      `}
      {...rest}
    >
      {children}
    </button>
  )
}
