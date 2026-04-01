export default function SearchBar({ value, onChange }) {
  return (
    <div className="relative w-full sm:max-w-sm md:max-w-md">
      {/* Icon */}
      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted text-base pointer-events-none">
        🔍
      </span>

      <input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder="Search events…"
        className="w-full pl-11 pr-10 py-2.5 sm:py-3 rounded-full bg-card border border-border
                   text-zinc-200 text-sm placeholder-muted outline-none font-body
                   focus:border-amber focus:ring-2 focus:ring-amber/20
                   transition-all duration-200"
      />

      {/* Clear button */}
      {value && (
        <button
          onClick={() => onChange('')}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-muted
                     hover:text-white transition-colors text-xs p-1"
          aria-label="Clear search"
        >
          ✕
        </button>
      )}
    </div>
  )
}
