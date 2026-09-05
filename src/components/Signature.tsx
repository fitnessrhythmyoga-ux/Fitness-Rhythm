import { useEffect, useRef } from 'react'
import Reveal from './Reveal'

const pillars = [
  { word: 'MOVE', desc: 'Build strength and flexibility through intentional practice.' },
  { word: 'BREATHE', desc: 'Develop awareness, regulate the nervous system, find calm.' },
  { word: 'ALIGN', desc: 'Create lasting balance in body, breath and mind.' },
]

export default function Signature() {
  const parallaxRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const onScroll = () => {
      if (!parallaxRef.current || !sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const offset = rect.top * 0.25
      parallaxRef.current.style.transform = `translateY(${-offset}px)`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section id="programs" ref={sectionRef} className="relative overflow-hidden bg-[#0D0D0D]" style={{ minHeight: '100vh' }}>
      {/* Parallax background */}
      <div
        ref={parallaxRef}
        className="absolute inset-0"
        style={{ height: '120%', top: '-10%' }}
      >
        <img
          src="https://images.unsplash.com/photo-1780130487332-b6a96a31b024?w=1920&h=1280&fit=crop&auto=format"
          alt="Person in meditative posture in dramatic light"
          className="w-full h-full object-cover opacity-35"
        />
      </div>

      {/* Gradient */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to bottom, rgba(13,13,13,0.3) 0%, rgba(13,13,13,0.7) 100%)' }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between h-full min-h-screen px-8 md:px-16 lg:px-24 py-28 md:py-36 max-w-screen-2xl mx-auto">
        {/* Heading */}
        <div>
          <Reveal>
            <p className="font-label text-[#F3F1EC] opacity-40 mb-10">THE PRACTICE</p>
          </Reveal>
          <Reveal delay={1}>
            <h2
              className="font-display text-[#F3F1EC] leading-[0.92]"
              style={{ fontSize: 'clamp(3rem, 8vw, 9rem)' }}
            >
              Your Practice.<br />
              Your Pace.<br />
              <em>Your Rhythm.</em>
            </h2>
          </Reveal>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 mt-24 md:mt-0 border-t border-[#F3F1EC] border-opacity-15 pt-12">
          {pillars.map((p, i) => (
            <Reveal key={p.word} delay={(i + 1) as 1 | 2 | 3}>
              <div>
                <p
                  className="font-display text-[#F3F1EC] mb-4"
                  style={{ fontSize: 'clamp(2rem, 3.5vw, 3.5rem)' }}
                >
                  {p.word.charAt(0) + p.word.slice(1).toLowerCase()}
                </p>
                <p
                  className="font-label text-[#F3F1EC] opacity-45 leading-loose"
                  style={{ fontSize: '0.67rem', letterSpacing: '0.1em' }}
                >
                  {p.desc.toUpperCase()}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
