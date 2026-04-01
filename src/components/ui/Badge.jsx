export default function Badge({ children, color = '#f5a623', className = '' }) {
  return (
    <span
      className={`inline-block text-[0.68rem] font-display font-semibold
                  tracking-widest uppercase px-3 py-1 rounded-full ${className}`}
      style={{
        color,
        background: `${color}18`,
        border: `1px solid ${color}35`,
      }}
    >
      {children}
    </span>
  )
}
