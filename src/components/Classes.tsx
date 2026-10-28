import Reveal from './Reveal'

const categories = [
  {
    id: 'yoga',
    badge: 'YOGA & ASANA',
    heading: 'Yoga Practice',
    subheading: 'Hatha, Vinyasa & Power Flows',
    description:
      'Immerse yourself in mindful movement sequenced to deepen physical strength, spine alignment, and mental presence. Designed for both beginners taking their first breath on the mat and advanced practitioners refining their posture.',
    image: '/images/img_0242.webp',
    alt: 'Fitness & Rhythm studio yoga space with mats, mirrors and natural lighting in Indore',
    classes: ['Hatha Yoga', 'Vinyasa Flow', 'Power Yoga', 'Asana Mechanics', 'Spine Mobility'],
    duration: '60 – 90 Min',
    levels: 'All Levels Welcomed',
    schedule: 'Morning & Evening Batches',
  },
  {
    id: 'wellness',
    badge: 'MINDFULNESS & PRANAYAMA',
    heading: 'Mindful Wellness',
    subheading: 'Breathwork, Meditation & Deep Calm',
    description:
      'Rebalance your nervous system with ancient breathing techniques and therapeutic stillness. Each session clears mental fatigue, reduces chronic stress, and reconnects you to a deep sense of stillness and resilience.',
    image: '/images/img_0247.webp',
    alt: 'Calm yoga meditation corner at Fitness & Rhythm with Surya Namaskar chart in Indore',
    classes: ['Pranayama Mastery', 'Guided Meditation', 'Surya Namaskar', 'Deep Relaxation', 'Sound Calm'],
    duration: '45 – 60 Min',
    levels: 'All Levels',
    schedule: 'Daily Dedicated Sessions',
  },
  {
    id: 'fitness',
    badge: 'MOBILITY & CONDITIONING',
    heading: 'Functional Fitness',
    subheading: 'Strength, Posture & Stamina',
    description:
      'A holistic approach to body conditioning that blends functional strength training with yogic mobility drills. Build athletic endurance, enhance joint longevity, and sculpt lasting functional power.',
    image: '/images/img_0231.webp',
    alt: 'Fitness & Rhythm yoga equipment, balls and training gear arranged neatly in Indore',
    classes: ['Core Stability', 'Functional Mobility', 'Flexibility Work', 'Bodyweight Conditioning'],
    duration: '50 – 75 Min',
    levels: 'Beginner to Intermediate+',
    schedule: 'Flexible Timings Available',
  },
]

export default function Classes() {
  const handleBook = (className: string) => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
      const selectElem = document.querySelector('select[name="class"]') as HTMLSelectElement | null
      if (selectElem) {
        selectElem.value = className
      }
    }
  }

  return (
    <section id="classes" className="bg-[#F3F1EC] py-24 sm:py-32 lg:py-40 border-t border-[#0D0D0D]/10">
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-10 lg:px-16 xl:px-24">
        
        {/* Section header */}
        <div className="max-w-3xl mb-16 sm:mb-24">
          <Reveal>
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-8 h-[1px] bg-[#0D0D0D]/40" />
              <p className="font-label text-[#0D0D0D] opacity-60 text-[0.68rem] tracking-[0.25em]">
                OUR DISCIPLINES
              </p>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <h2
              className="font-display text-[#0D0D0D] leading-[1.0] mb-6"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 5.5rem)' }}
            >
              Move with<br />
              <em>Conscious Intention.</em>
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="text-[#0D0D0D]/70 text-sm sm:text-base leading-relaxed font-light max-w-xl">
              Each discipline at Fitness & Rhythm is curated to guide you toward balanced health, inner tranquility, and sustainable vitality.
            </p>
          </Reveal>
        </div>

        {/* Classes Showcase — Framed Luxury Cards */}
        <div className="flex flex-col gap-20 sm:gap-28 lg:gap-36">
          {categories.map((cat, i) => {
            const isReversed = i % 2 === 1
            return (
              <div
                key={cat.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-20 items-center"
              >
                {/* Framed Image Column */}
                <div
                  className={`lg:col-span-6 xl:col-span-6 ${
                    isReversed ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <Reveal delay={(i % 2) as 0 | 1}>
                    <div className="relative rounded-3xl overflow-hidden border border-[#0D0D0D]/10 bg-[#E8E5DD] shadow-2xl group aspect-[16/11] sm:aspect-[4/3] w-full">
                      <img
                        src={cat.image}
                        alt={cat.alt}
                        className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                      />

                      {/* Vignette Overlay */}
                      <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                          background:
                            'linear-gradient(to top, rgba(13,13,13,0.5) 0%, transparent 60%)',
                        }}
                      />

                      {/* Floating Category Pill */}
                      <div className="absolute top-5 left-5 z-10">
                        <span className="inline-flex items-center bg-black/60 backdrop-blur-md border border-white/20 text-[#F3F1EC] px-3.5 py-1.5 rounded-full text-[0.58rem] tracking-[0.2em] font-label shadow-md">
                          {cat.badge}
                        </span>
                      </div>

                      {/* Floating Bottom Info */}
                      <div className="absolute bottom-5 left-5 right-5 z-10 flex items-center justify-between text-[#F3F1EC]">
                        <span className="font-label text-[0.6rem] tracking-[0.16em] opacity-80">
                          {cat.schedule}
                        </span>
                        <span className="font-label text-[0.6rem] tracking-[0.16em] bg-white/20 backdrop-blur-md px-3 py-1 rounded-full">
                          {cat.duration}
                        </span>
                      </div>
                    </div>
                  </Reveal>
                </div>

                {/* Editorial Content Column */}
                <div
                  className={`lg:col-span-6 xl:col-span-6 flex flex-col justify-center ${
                    isReversed ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <Reveal delay={1}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-label text-[#C2A382] text-[0.65rem] tracking-[0.22em] font-medium">
                        0{i + 1}
                      </span>
                      <span className="w-6 h-[1px] bg-[#C2A382]" />
                      <span className="font-label text-[#0D0D0D]/50 text-[0.62rem] tracking-[0.2em]">
                        {cat.subheading.toUpperCase()}
                      </span>
                    </div>
                  </Reveal>

                  <Reveal delay={1}>
                    <h3
                      className="font-display text-[#0D0D0D] leading-[1.05] mb-5"
                      style={{ fontSize: 'clamp(2rem, 3.8vw, 3.5rem)' }}
                    >
                      {cat.heading}
                    </h3>
                  </Reveal>

                  <Reveal delay={2}>
                    <p className="text-[#0D0D0D]/75 text-sm sm:text-base leading-relaxed mb-8 font-light">
                      {cat.description}
                    </p>
                  </Reveal>

                  {/* Class Pillars Chips */}
                  <Reveal delay={2}>
                    <div className="flex flex-wrap gap-2 sm:gap-2.5 mb-8">
                      {cat.classes.map((cls) => (
                        <span
                          key={cls}
                          className="bg-[#EBE8E0] border border-[#0D0D0D]/8 text-[#0D0D0D]/80 text-[0.68rem] tracking-[0.06em] px-3.5 py-1.5 rounded-full font-label font-normal"
                        >
                          {cls}
                        </span>
                      ))}
                    </div>
                  </Reveal>

                  {/* Specs & CTA */}
                  <Reveal delay={3}>
                    <div className="flex flex-wrap items-center gap-6 sm:gap-10 pt-6 border-t border-[#0D0D0D]/10">
                      <div>
                        <p className="font-label text-[#0D0D0D]/40 text-[0.55rem] tracking-[0.2em] mb-1">
                          LEVEL
                        </p>
                        <p className="font-label text-[#0D0D0D] text-[0.68rem] tracking-[0.1em]">
                          {cat.levels.toUpperCase()}
                        </p>
                      </div>

                      <div className="w-[1px] h-8 bg-[#0D0D0D]/10" />

                      <div>
                        <p className="font-label text-[#0D0D0D]/40 text-[0.55rem] tracking-[0.2em] mb-1">
                          BATCH
                        </p>
                        <p className="font-label text-[#0D0D0D] text-[0.68rem] tracking-[0.1em]">
                          {cat.duration.toUpperCase()}
                        </p>
                      </div>

                      <div className="sm:ml-auto">
                        <button
                          onClick={() => handleBook(cat.heading)}
                          className="inline-flex items-center gap-3 font-label text-[0.65rem] tracking-[0.2em] bg-[#0D0D0D] text-[#F3F1EC] px-6 py-3.5 rounded-full hover:bg-[#C2A382] hover:text-[#0D0D0D] transition-colors duration-400 shadow-md group"
                        >
                          <span>BOOK CLASS</span>
                          <span className="transition-transform duration-300 group-hover:translate-x-1">
                            →
                          </span>
                        </button>
                      </div>
                    </div>
                  </Reveal>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
