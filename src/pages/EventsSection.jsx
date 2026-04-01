import React from 'react'
import { useEvents } from '../hooks/useEvents'
import SearchBar from '../components/events/SearchBar'
import EventGrid from '../components/events/EventGrid'

const EventsSection = () => {
    const { events, loading, query, setQuery } = useEvents()

    return (
        <section id="events" className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">

            {/* Section header */}
            <div className="mb-8 sm:mb-12">
                <p className="text-amber text-xs font-display font-semibold
                      tracking-[3px] uppercase mb-2">
                    This Week
                </p>

                {/* Title + Search — stack on mobile, side by side on sm+ */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
                    <h2
                        className="font-display font-extrabold text-white tracking-tight leading-none"
                        style={{ fontSize: 'clamp(1.6rem, 5vw, 2.8rem)' }}
                    >
                        Featured Events
                    </h2>
                    <SearchBar value={query} onChange={setQuery} />
                </div>
            </div>

            {/* Event count */}
            {!loading && (
                <p className="text-muted text-xs mb-5 sm:mb-6 font-medium">
                    {events.length} event{events.length !== 1 ? 's' : ''} found
                    {query && <span className="text-amber"> for "{query}"</span>}
                </p>
            )}

            <EventGrid events={events} loading={loading} />
        </section>
    )
}

export default EventsSection
