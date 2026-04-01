export default function Footer() {
  return (
    <footer className="border-t border-border py-8 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-4
                      sm:flex-row sm:justify-between sm:gap-3 text-muted text-sm">

        {/* Logo */}
        <span className="font-display font-bold text-white flex items-center gap-2 text-base">
          <span className="text-amber">⚡</span> Eventify
        </span>

        {/* Copyright */}
        <p className="text-center text-xs sm:text-sm">
          © 2025 Eventify. Built with ❤️ by Fakhar.
        </p>

        {/* Links */}
        <div className="flex gap-5 sm:gap-6">
          <a href="#home" className="hover:text-white transition-colors">Home</a>
          <a href="#events" className="hover:text-white transition-colors">Events</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  )
}
