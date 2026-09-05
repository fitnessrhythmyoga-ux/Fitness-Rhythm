import { useState } from 'react'
import Reveal from './Reveal'

const categories = [
  {
    id: 'yoga',
    label: 'YOGA',
    heading: 'Yoga',
    description: 'Hatha, Vinyasa, Power, Beginner & Advanced flows — each designed to deepen your practice at your own pace.',
    image: 'https://images.unsplash.com/photo-1572044162257-6d1f66f91140?w=1200&h=900&fit=crop&auto=format',
    alt: 'Woman performing an elegant yoga pose',
    classes: ['Hatha Yoga', 'Vinyasa Flow', 'Power Yoga', 'Beginner Yoga', 'Advanced Yoga'],
    duration: '60 – 90 min',
    levels: 'All levels',
  },
  {
    id: 'wellness',
    label: 'WELLNESS',
    heading: 'Wellness',
    description: 'Meditation, breathwork, relaxation and mindfulness practices to restore clarity and inner calm.',
    image: 'https://images.unsplash.com/photo-1554244933-d876deb6b2ff?w=1200&h=900&fit=crop&auto=format',
    alt: 'Woman in quiet meditation, eyes closed, peaceful',
    classes: ['Guided Meditation', 'Breathwork', 'Deep Relaxation', 'Mindfulness'],
    duration: '45 – 60 min',
    levels: 'All levels',
  },
  {
    id: 'fitness',
    label: 'FITNESS',
    heading: 'Fitness',
    description: 'Functional movement, mobility work and strength conditioning grounded in yogic principles.',
    image: 'https://images.unsplash.com/photo-1636990628724-cb59f83326d7?w=1200&h=900&fit=crop&auto=format',
    alt: 'Person on yoga mat demonstrating strength and form',
    classes: ['Functional Fitness', 'Mobility', 'Flexibility', 'Strength & Conditioning'],
    duration: '45 – 75 min',
    levels: 'Intermediate+',
  },
]

export default function Classes() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  return (
    <section id="classes" className="bg-[#F3F1EC] pt-32 pb-0">
      {/* Section header */}
      <div className="px-8 md:px-16 lg:px-24 pb-20 max-w-screen-2xl mx-auto">
        <Reveal>
          <p className="font-label text-[#0D0D0D] opacity-50 mb-8">OUR CLASSES</p>
        </Reveal>
        <Reveal delay={1}>
          <h2
            className="font-display text-[#0D0D0D] leading-[0.92]"
            style={{ fontSize: 'clamp(3rem, 7vw, 8rem)' }}
          >
            Move with<br />
            <em>Intention.</em>
          </h2>
        </Reveal>
      </div>

      {/* Category panels — editorial alternating */}
      {categories.map((cat, i) => (
        <div
          key={cat.id}
          className={`grid grid-cols-1 lg:grid-cols-2 ${i === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}
          style={{ minHeight: '72vh' }}
        >
          {/* Image panel */}
          <div
            className="relative overflow-hidden cursor-pointer"
            style={{ minHeight: '50vw' }}
            onMouseEnter={() => setActiveCategory(cat.id)}
            onMouseLeave={() => setActiveCategory(null)}
          >
            <img
              src={cat.image}
              alt={cat.alt}
              className="w-full h-full object-cover transition-transform duration-[1000ms] ease-out"
              style={{ transform: activeCategory === cat.id ? 'scale(1.04)' : 'scale(1)' }}
            />
            {/* Overlay on hover */}
            <div
              className="absolute inset-0 flex items-end p-10 transition-opacity duration-700"
              style={{
                background: 'linear-gradient(to top, rgba(13,13,13,0.6) 0%, transparent 60%)',
                opacity: activeCategory === cat.id ? 1 : 0.4,
              }}
            >
              <p className="font-label text-[#F3F1EC] text-[0.65rem] tracking-[0.2em]">
                {cat.classes.join(' · ')}
              </p>
            </div>
          </div>

          {/* Text panel */}
          <div className="flex flex-col justify-center px-10 md:px-16 lg:px-20 xl:px-24 py-20">
            <Reveal>
              <p className="font-label text-[#0D0D0D] opacity-40 mb-8">{cat.label}</p>
            </Reveal>
            <Reveal delay={1}>
              <h3
                className="font-display text-[#0D0D0D] leading-[0.95] mb-8"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}
              >
                {cat.heading}
              </h3>
            </Reveal>
            <Reveal delay={2}>
              <p
                className="font-label text-[#0D0D0D] opacity-55 max-w-xs leading-loose mb-10"
                style={{ fontSize: '0.7rem', letterSpacing: '0.09em' }}
              >
                {cat.description.toUpperCase()}
              </p>
            </Reveal>
            <Reveal delay={3}>
              <div className="flex gap-8 mb-12">
                <div>
                  <p className="font-label text-[#0D0D0D] opacity-30 text-[0.58rem] mb-1">DURATION</p>
                  <p className="font-label text-[#0D0D0D] text-[0.65rem]">{cat.duration.toUpperCase()}</p>
                </div>
                <div>
                  <p className="font-label text-[#0D0D0D] opacity-30 text-[0.58rem] mb-1">LEVEL</p>
                  <p className="font-label text-[#0D0D0D] text-[0.65rem]">{cat.levels.toUpperCase()}</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={4}>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="font-label text-[#0D0D0D] text-[0.65rem] tracking-[0.18em] underline underline-offset-4 hover:opacity-40 transition-opacity duration-500 self-start"
              >
                ENQUIRE ABOUT CLASSES
              </button>
            </Reveal>
          </div>
        </div>
      ))}
    </section>
  )
}
