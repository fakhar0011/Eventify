import EventCard from './EventCard'

function SkeletonCard() {
  return (
    <div className="bg-card border border-border rounded-2xl overflow-hidden animate-pulse">
      <div className="h-1 bg-zinc-700 w-full" />
      <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
        <div className="h-4 bg-zinc-700 rounded-full w-24" />
        <div className="h-5 sm:h-6 bg-zinc-700 rounded-full w-3/4" />
        <div className="space-y-2">
          <div className="h-3 bg-zinc-800 rounded-full w-2/3" />
          <div className="h-3 bg-zinc-800 rounded-full w-1/2" />
          <div className="h-3 bg-zinc-800 rounded-full w-3/5" />
        </div>
        <div className="h-14 sm:h-16 bg-zinc-800 rounded-xl" />
        <div className="flex justify-between pt-2">
          <div className="h-5 bg-zinc-700 rounded-full w-16" />
          <div className="h-8 sm:h-9 bg-zinc-700 rounded-full w-20 sm:w-24" />
        </div>
      </div>
    </div>
  )
}

export default function EventGrid({ events, loading }) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {[...Array(5)].map((_, i) => <SkeletonCard key={i} />)}
      </div>
    )
  }

  if (events.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 sm:py-24 text-center px-4">
        <span className="text-4xl sm:text-5xl mb-4">🔍</span>
        <h3 className="font-display font-bold text-base sm:text-lg text-white mb-2">
          No events found
        </h3>
        <p className="text-muted text-xs sm:text-sm max-w-xs">
          Try a different keyword — search by city, category, or event name.
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {events.map((event, i) => (
        <EventCard
          key={event.id}
          event={event}
          style={{ animationDelay: `${i * 80}ms` }}
        />
      ))}
    </div>
  )
}
