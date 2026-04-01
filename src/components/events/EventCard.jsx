import Badge from '../ui/Badge'
import Button from '../ui/Button'

export default function EventCard({ event, style }) {
  const handleRegister = () => {
    alert(`✅ You've registered for "${event.name}"!\n\nA confirmation email will be sent shortly.`)
  }

  const spotsLeft = event.spots <= 30 ? `${event.spots} spots left` : null

  return (
    <article
      style={style}
      className="group bg-card border border-border rounded-2xl overflow-hidden
                 flex flex-col animate-fade-up w-full
                 transition-all duration-300
                 hover:-translate-y-1 sm:hover:-translate-y-2
                 hover:border-amber/30
                 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)]
                 sm:hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
    >
      {/* Accent top bar */}
      <div
        className="h-1 w-full flex-shrink-0"
        style={{ background: event.accentColor }}
      />

      {/* Card body */}
      <div className="p-4 sm:p-6 flex flex-col flex-1">

        {/* Category badge */}
        <div className="mb-2 sm:mb-3">
          <Badge color={event.accentColor}>{event.category}</Badge>
        </div>

        {/* Event name */}
        <h3 className="font-display font-bold text-lg sm:text-xl text-white leading-snug
                       tracking-tight mb-3 sm:mb-4
                       group-hover:text-amber transition-colors duration-200">
          {event.name}
        </h3>

        {/* Meta info */}
        <ul className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
          <MetaRow icon="📅" text={event.date} />
          <MetaRow icon="🕐" text={event.time} />
          <MetaRow icon="📍" text={event.location} />
        </ul>

        {/* Description */}
        <p className="text-muted text-xs sm:text-sm leading-relaxed flex-1 mb-4 sm:mb-5">
          {event.description}
        </p>

        {/* Footer row */}
        <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-border mt-auto">
          <div>
            <span
              className="font-display font-bold text-sm sm:text-base"
              style={{ color: event.accentColor }}
            >
              {event.price}
            </span>
            {spotsLeft && (
              <p className="text-[0.65rem] sm:text-[0.7rem] text-coral mt-0.5 font-medium">
                ⚠ {spotsLeft}
              </p>
            )}
          </div>
          <Button variant="card" size="sm" onClick={handleRegister}>
            Register →
          </Button>
        </div>
      </div>
    </article>
  )
}

function MetaRow({ icon, text }) {
  return (
    <li className="flex items-start gap-2 sm:gap-2.5 text-xs sm:text-sm text-muted">
      <span className="text-sm sm:text-base mt-0.5 flex-shrink-0">{icon}</span>
      <span className="leading-relaxed">{text}</span>
    </li>
  )
}
