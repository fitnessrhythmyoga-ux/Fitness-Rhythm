import Reveal from './Reveal'

const stats = [
  { value: '4.9★', label: 'Google Rating' },
  { value: '99+', label: 'Happy Reviews' },
  { value: 'Yoga + Fitness', label: 'Holistic Approach' },
]

export default function About() {
  return (
    <section id="about" className="bg-[#F3F1EC]">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Image — left */}
        <div className="relative overflow-hidden" style={{ minHeight: '60vw', maxHeight: '100vh' }}>
          <img
            src="https://images.unsplash.com/photo-1768064722888-2136781a4150?w=900&h=1200&fit=crop&auto=format"
            alt="Woman in white clothing in peaceful, light-filled space"
            className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out hover:scale-[1.03]"
          />
        </div>

        {/* Text — right */}
        <div className="flex flex-col justify-center px-10 md:px-16 lg:px-20 xl:px-28 py-24 lg:py-32">
          <Reveal>
            <p className="font-label text-[#0D0D0D] mb-12 opacity-50">ABOUT US</p>
          </Reveal>

          <Reveal delay={1}>
            <h2
              className="font-display text-[#0D0D0D] leading-[0.95] mb-10"
              style={{ fontSize: 'clamp(2.6rem, 5vw, 5.5rem)' }}
            >
              More Than<br />
              Movement.<br />
              <em>A Way of Living.</em>
            </h2>
          </Reveal>

          <Reveal delay={2}>
            <p
              className="font-label text-[#0D0D0D] opacity-60 max-w-sm leading-loose mb-16"
              style={{ fontSize: '0.72rem', letterSpacing: '0.09em' }}
            >
              AT FITNESS & RHYTHM, WE BELIEVE THAT YOGA IS NOT JUST A PRACTICE — IT IS A WAY OF BEING. WE GUIDE YOU THROUGH PHYSICAL STRENGTH, DEEP FLEXIBILITY, AND GENUINE MINDFULNESS. EVERY CLASS IS AN INVITATION TO SLOW DOWN, BREATHE, AND RETURN TO YOURSELF.
            </p>
          </Reveal>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 border-t border-[#0D0D0D] border-opacity-10 pt-10">
            {stats.map((s, i) => (
              <Reveal key={s.value} delay={(i + 1) as 1 | 2 | 3}>
                <div>
                  <p
                    className="font-display text-[#0D0D0D] mb-1"
                    style={{ fontSize: 'clamp(1.2rem, 2.5vw, 2rem)' }}
                  >
                    {s.value}
                  </p>
                  <p className="font-label text-[#0D0D0D] opacity-40" style={{ fontSize: '0.6rem' }}>
                    {s.label.toUpperCase()}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
