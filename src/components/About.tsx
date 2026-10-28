import Reveal from './Reveal'

const stats = [
  { value: '4.9★', label: 'Google Rating', note: '99+ Verified Reviews' },
  { value: '10+', label: 'Years Experience', note: 'Certified Yog Guru Faculty' },
  { value: 'Yoga + Fitness', label: 'Holistic Method', note: 'Mind, Body & Movement' },
]

const features = [
  {
    title: 'Authentic Lineage',
    desc: 'Rooted in traditional Hatha, Vinyasa, and classical Pranayama techniques.',
  },
  {
    title: 'Personalized Attention',
    desc: 'Intimate batch sizes with dedicated hands-on posture corrections and guidance.',
  },
  {
    title: 'Mind & Body Sanctuary',
    desc: 'Natural light, serene acoustics, and hygienic studio equipment on Airport Road.',
  },
]

export default function About() {
  return (
    <section id="about" className="bg-[#F3F1EC] py-24 sm:py-32 lg:py-40 border-t border-[#0D0D0D]/10">
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-10 lg:px-16 xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-center">
          
          {/* Framed Image Column — Left */}
          <div className="lg:col-span-5 xl:col-span-6">
            <Reveal>
              <div className="relative rounded-3xl overflow-hidden border border-[#0D0D0D]/10 bg-[#E8E5DD] shadow-2xl group aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] max-h-[720px] w-full">
                <img
                  src="/images/img_0233.webp"
                  alt="Fitness & Rhythm yoga studio full interior entrance view in Indore"
                  className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />

                {/* Ambient vignette */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'linear-gradient(to top, rgba(13,13,13,0.55) 0%, rgba(13,13,13,0.05) 50%, rgba(13,13,13,0.2) 100%)',
                  }}
                />

                {/* Floating Top Badge */}
                <div className="absolute top-6 left-6 z-10">
                  <div className="inline-flex items-center gap-2 bg-black/60 backdrop-blur-md border border-white/20 text-[#F3F1EC] px-4 py-2 rounded-full text-[0.62rem] tracking-[0.2em] font-label shadow-lg">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C2A382] animate-pulse" />
                    SANCTUARY · INDORE
                  </div>
                </div>

                {/* Floating Bottom Card */}
                <div className="absolute bottom-6 left-6 right-6 z-10 p-5 rounded-2xl bg-black/60 backdrop-blur-md border border-white/15 text-[#F3F1EC] shadow-xl">
                  <p className="font-label text-[0.58rem] tracking-[0.22em] text-[#C2A382] mb-1">
                    FITNESS & RHYTHM
                  </p>
                  <p className="font-display text-lg sm:text-xl text-[#F3F1EC] leading-tight">
                    Where strength meets tranquility.
                  </p>
                  <p className="font-label text-[0.55rem] tracking-[0.12em] opacity-70 mt-2 text-[#F3F1EC]">
                    BHOLENATH COLONY, 180 AIRPORT RD · INDORE
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Editorial Content Column — Right */}
          <div className="lg:col-span-7 xl:col-span-6 flex flex-col justify-center">
            <Reveal>
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="w-8 h-[1px] bg-[#0D0D0D]/40" />
                <p className="font-label text-[#0D0D0D] opacity-60 text-[0.68rem] tracking-[0.25em]">
                  ABOUT OUR STUDIO
                </p>
              </div>
            </Reveal>

            <Reveal delay={1}>
              <h2
                className="font-display text-[#0D0D0D] leading-[1.02] mb-8"
                style={{ fontSize: 'clamp(2.4rem, 4.5vw, 4.8rem)' }}
              >
                More Than Movement.<br />
                <em>A Way of Living.</em>
              </h2>
            </Reveal>

            <Reveal delay={2}>
              <p className="text-[#0D0D0D]/75 text-sm sm:text-base leading-relaxed mb-10 max-w-xl font-light">
                At <strong className="font-normal text-[#0D0D0D]">Fitness & Rhythm</strong>, we believe that yoga is not just a routine — it is an art of conscious living. Guided by certified Yog Guru faculty in Indore, our studio brings together the wisdom of classical yoga with progressive fitness conditioning. Whether you wish to build physical core strength, release daily mental strain, or cultivate meditative calm, every practice is tailored to your natural pace.
              </p>
            </Reveal>

            {/* Feature Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
              {features.map((f, i) => (
                <Reveal key={f.title} delay={(i % 3) as 0 | 1 | 2}>
                  <div className="p-4 rounded-2xl bg-[#EBE8E0]/70 border border-[#0D0D0D]/5">
                    <h4 className="font-display text-[#0D0D0D] text-base mb-1.5 font-normal">
                      {f.title}
                    </h4>
                    <p className="text-[#0D0D0D]/65 text-xs leading-relaxed font-light">
                      {f.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[#0D0D0D]/10">
              {stats.map((s, i) => (
                <Reveal key={s.value} delay={(i + 1) as 1 | 2 | 3}>
                  <div>
                    <p
                      className="font-display text-[#0D0D0D] mb-1 leading-none"
                      style={{ fontSize: 'clamp(1.5rem, 2.8vw, 2.4rem)' }}
                    >
                      {s.value}
                    </p>
                    <p className="font-label text-[#0D0D0D] text-[0.62rem] opacity-80 mb-0.5">
                      {s.label.toUpperCase()}
                    </p>
                    <p className="text-[0.62rem] text-[#0D0D0D]/50 font-light hidden sm:block">
                      {s.note}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
