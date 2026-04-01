import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Events', href: '#events' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-14 sm:h-16 transition-all duration-300
        ${scrolled
          ? 'bg-bg/90 backdrop-blur-xl border-b border-border'
          : 'bg-transparent border-b border-transparent'
        }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-full flex items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-1.5 font-display font-extrabold text-lg sm:text-xl tracking-tight text-white"
        >
          <span className="text-amber text-xl sm:text-2xl">⚡</span>
          Eventify
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8">
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-muted hover:text-white text-sm font-medium tracking-wide
                           transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-amber rounded-full
                                 transition-all duration-200 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col justify-center gap-[5px] w-9 h-9 cursor-pointer z-50"
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className={`block w-6 h-0.5 bg-white rounded transition-all duration-200
            ${open ? 'translate-y-[7px] rotate-45' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white rounded transition-all duration-200
            ${open ? 'opacity-0 scale-x-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white rounded transition-all duration-200
            ${open ? '-translate-y-[7px] -rotate-45' : ''}`} />
        </button>
      </div>

      {/* Mobile Fullscreen Dropdown */}
      <div
        className={`md:hidden fixed inset-0 top-14 bg-bg/98 backdrop-blur-xl
          transition-all duration-300 z-40
          ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <div className="flex flex-col px-6 pt-6 gap-1">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-zinc-300 hover:text-white hover:bg-white/5 py-4 px-3
                         text-lg font-display font-semibold tracking-tight
                         border-b border-border last:border-0
                         transition-all duration-200 rounded-lg"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              {link.label}
            </a>
          ))}

          {/* CTA in mobile menu */}
          <a
            href="#events"
            onClick={() => setOpen(false)}
            className="mt-6 w-full text-center bg-amber text-bg font-display font-bold
                       py-3.5 rounded-full text-sm tracking-wide
                       hover:bg-yellow-300 transition-colors duration-200"
          >
            Explore Events →
          </a>
        </div>
      </div>
    </nav>
  )
}
