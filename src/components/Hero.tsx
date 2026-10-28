import { useEffect, useRef } from 'react'

export default function Hero() {
  const parallaxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => {
      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translateY(${window.scrollY * 0.35}px)`
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Parallax image */}
      <div
        ref={parallaxRef}
        className="absolute inset-0 w-full bg-[#1a1a1a]"
        style={{ height: '120%', top: '-10%' }}
      >
        <img
          src="/images/img_0230.webp"
          alt="Fitness & Rhythm Yoga Studio interior with wooden flooring, mirrors, and practice mats in Indore"
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.72) contrast(1.04)' }}
        />
      </div>

      {/* Gradient overlay — subtle, warm */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            'linear-gradient(to bottom, rgba(13,13,13,0.15) 0%, rgba(13,13,13,0.08) 50%, rgba(13,13,13,0.55) 100%)',
        }}
      />

      {/* Grain texture */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`,
          opacity: 0.4,
        }}
      />

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-end pb-20 md:pb-28 px-8 md:px-16 lg:px-24">
        <div className="max-w-screen-2xl mx-auto w-full">
          {/* Trust indicator */}
          <p
            className="font-label text-[#F3F1EC] mb-8 opacity-70"
            style={{ animationDelay: '0.2s' }}
          >
            4.9 ★ GOOGLE RATING · 99+ REVIEWS · INDORE
          </p>

          {/* Main headline */}
          <h1
            className="font-display text-[#F3F1EC] leading-[0.92] mb-8"
            style={{ fontSize: 'clamp(3.5rem, 10vw, 10rem)' }}
          >
            Find Your<br />
            <em>Inner Rhythm.</em>
          </h1>

          {/* Supporting text */}
          <p
            className="font-label text-[#F3F1EC] max-w-sm mb-12 opacity-75 leading-relaxed"
            style={{ letterSpacing: '0.08em', fontSize: '0.72rem' }}
          >
            YOGA, MOVEMENT AND MINDFUL WELLNESS DESIGNED TO HELP YOU FEEL STRONGER, CALMER AND MORE CONNECTED.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 items-start">
            <button
              onClick={() => document.getElementById('classes')?.scrollIntoView({ behavior: 'smooth' })}
              className="font-label text-[#F3F1EC] text-[0.7rem] tracking-[0.2em] underline underline-offset-4 hover:opacity-50 transition-opacity duration-500"
            >
              EXPLORE CLASSES
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="font-label text-[#F3F1EC] text-[0.7rem] tracking-[0.2em] underline underline-offset-4 hover:opacity-50 transition-opacity duration-500"
            >
              START YOUR JOURNEY
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 md:right-16 z-20 flex flex-col items-center gap-3">
        <div
          className="w-px bg-[#F3F1EC] opacity-40"
          style={{ height: 48, animation: 'scrollPulse 2s ease-in-out infinite' }}
        />
        <span className="font-label text-[#F3F1EC] text-[0.55rem] opacity-40 tracking-[0.25em]">SCROLL</span>
      </div>

      <style>{`
        @keyframes scrollPulse {
          0%, 100% { transform: scaleY(1); opacity: 0.4; }
          50% { transform: scaleY(0.5); opacity: 0.2; }
        }
      `}</style>
    </section>
  )
}
