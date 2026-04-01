import { useState, useEffect, useMemo } from 'react'
import { EVENTS } from '../data/events'

export function useEvents() {
  const [events,  setEvents]  = useState([])
  const [loading, setLoading] = useState(true)
  const [error,   setError]   = useState(null)
  const [query,   setQuery]   = useState('')

  useEffect(() => {
    setLoading(true)
    const timer = setTimeout(() => {
      try {
        setEvents(EVENTS)
      } catch (err) {
        setError('Failed to load events. Please try again.')
      } finally {
        setLoading(false)
      }
    }, 600)

    return () => clearTimeout(timer)
  }, [])

  const filtered = useMemo(() => {
    if (!query.trim()) return events
    const q = query.toLowerCase()
    return events.filter(ev =>
      ev.name.toLowerCase().includes(q)      ||
      ev.category.toLowerCase().includes(q)  ||
      ev.location.toLowerCase().includes(q)
    )
  }, [events, query])

  return { events: filtered, loading, error, query, setQuery }
}
