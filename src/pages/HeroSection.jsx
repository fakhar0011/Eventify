import React from 'react'
import Button from '../components/ui/Button'

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center
                 overflow-hidden px-4 sm:px-6 pt-14 sm:pt-16 pb-16 sm:pb-20 text-center"
    >
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute -top-20 -left-20 sm:-top-32 sm:-left-32
                     w-[300px] h-[300px] sm:w-[520px] sm:h-[520px] rounded-full
                     bg-amber/10 blur-[80px] sm:blur-[100px] animate-blob-slow"
        />
        <div
          className="absolute -bottom-16 -right-16 sm:-bottom-24 sm:-right-24
                     w-[260px] h-[260px] sm:w-[440px] sm:h-[440px] rounded-full
                     bg-coral/10 blur-[70px] sm:blur-[90px] animate-blob-slow"
          style={{ animationDirection: 'alternate-reverse', animationDuration: '17s' }}
        />
        {/* Grid texture */}
        <div className="absolute inset-0 grid-texture opacity-60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto w-full">

        {/* Badge */}

        {/* Heading */}
        <h1
          className="animate-fade-up stagger-2
                     font-display font-extrabold leading-[1.05] sm:leading-[1.03]
                     tracking-tight text-white mb-4 sm:mb-6"
          style={{ fontSize: 'clamp(2.2rem, 8vw, 3.5rem)' }}
        >
          Discover Events<br />
          <span className="text-amber">Near You</span>
        </h1>

        {/* Sub */}
        <p className="animate-fade-up stagger-3 text-muted max-w-xl mx-auto mb-7 sm:mb-9
                      text-sm sm:text-base lg:text-lg font-light leading-relaxed px-2 sm:px-0">
          Concerts, workshops, meetups, food fests — curated fresh every day
          for your city. Never miss what's happening around you.
        </p>

        {/* CTA Buttons */}
        <div className="animate-fade-up stagger-4
                        flex flex-col xs:flex-row items-center justify-center
                        gap-3 sm:gap-4 flex-wrap">
          <Button size="lg" className="w-full xs:w-auto min-w-[160px]">
            <a href="#events" className="w-full block">Explore Events →</a>
          </Button>
          <Button variant="ghost" size="lg" className="w-full xs:w-auto min-w-[160px]">
            <a href="#contact" className="w-full block">Partner With Us</a>
          </Button>
        </div>
      </div>

      {/* Scroll hint - hidden on very small screens */}
      <span className="hidden sm:block absolute bottom-8 left-1/2 text-muted text-[0.68rem]
                       tracking-[3px] uppercase animate-bob">
        scroll ↓
      </span>
    </section>
  )
}

export default HeroSection
