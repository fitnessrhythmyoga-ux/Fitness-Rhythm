import { useState } from 'react'
import Reveal from './Reveal'

const images = [
  { src: 'https://images.unsplash.com/photo-1566501206188-5dd0cf160a0e?w=700&h=900&fit=crop&auto=format', alt: 'Yoga practitioner in seated pose on wooden floor', caption: 'Practice · Studio' },
  { src: 'https://images.unsplash.com/photo-1572044162257-6d1f66f91140?w=800&h=600&fit=crop&auto=format', alt: 'Woman performing yoga in natural light', caption: 'Movement · Yoga' },
  { src: 'https://images.unsplash.com/photo-1761971975962-9cc397e2ba2a?w=700&h=500&fit=crop&auto=format', alt: 'Modern yoga studio interior with large windows', caption: 'Our Studio · Space' },
  { src: 'https://images.unsplash.com/photo-1554244933-d876deb6b2ff?w=600&h=800&fit=crop&auto=format', alt: 'Meditating woman in peaceful environment', caption: 'Meditation · Wellness' },
  { src: 'https://images.unsplash.com/photo-1761971975724-31001b4de0bf?w=800&h=600&fit=crop&auto=format', alt: 'Minimalist yoga studio with artwork', caption: 'Studio · Interior' },
  { src: 'https://images.unsplash.com/photo-1768064722888-2136781a4150?w=600&h=900&fit=crop&auto=format', alt: 'Woman in white clothing near window light', caption: 'Calm · Presence' },
  { src: 'https://images.unsplash.com/photo-1636990628724-cb59f83326d7?w=700&h=1000&fit=crop&auto=format', alt: 'Yoga practice in clean studio space', caption: 'Strength · Form' },
  { src: 'https://images.unsplash.com/photo-1691131120810-661c022502d8?w=800&h=600&fit=crop&auto=format', alt: 'Practitioner in contemplative moment', caption: 'Awareness · Breath' },
]

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const prev = () => setLightbox(i => i !== null ? (i - 1 + images.length) % images.length : null)
  const next = () => setLightbox(i => i !== null ? (i + 1) % images.length : null)

  return (
    <section id="gallery" className="bg-[#F3F1EC] py-32 md:py-40">
      <div className="max-w-screen-2xl mx-auto px-8 md:px-16 lg:px-24">
        <Reveal>
          <p className="font-label text-[#0D0D0D] opacity-40 mb-10">GALLERY</p>
        </Reveal>
        <Reveal delay={1}>
          <h2
            className="font-display text-[#0D0D0D] leading-[0.92] mb-20"
            style={{ fontSize: 'clamp(2.8rem, 6vw, 7rem)' }}
          >
            Life at<br />
            <em>Fitness & Rhythm.</em>
          </h2>
        </Reveal>

        {/* Masonry grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {images.map((img, i) => (
            <div
              key={i}
              className="break-inside-avoid relative overflow-hidden cursor-pointer"
              onClick={() => setLightbox(i)}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full transition-transform duration-[1000ms] ease-out"
                style={{ transform: hoveredIndex === i ? 'scale(1.04)' : 'scale(1)' }}
                loading="lazy"
              />
              {/* Caption overlay */}
              <div
                className="absolute inset-0 flex items-end p-4 transition-opacity duration-700"
                style={{
                  background: 'linear-gradient(to top, rgba(13,13,13,0.6) 0%, transparent 60%)',
                  opacity: hoveredIndex === i ? 1 : 0,
                }}
              >
                <p className="font-label text-[#F3F1EC] text-[0.58rem] tracking-[0.15em]">
                  {img.caption.toUpperCase()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{ backgroundColor: 'rgba(13,13,13,0.96)' }}
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={e => { e.stopPropagation(); prev() }}
            className="absolute left-6 md:left-10 font-label text-[#F3F1EC] text-xl opacity-60 hover:opacity-100 transition-opacity duration-300 p-4"
          >
            ←
          </button>

          <div
            className="relative max-w-5xl max-h-[90vh] mx-16"
            onClick={e => e.stopPropagation()}
          >
            <img
              src={images[lightbox].src.replace('w=700', 'w=1400').replace('w=800', 'w=1400').replace('w=600', 'w=1200')}
              alt={images[lightbox].alt}
              className="max-w-full max-h-[85vh] object-contain"
            />
            <p className="font-label text-[#F3F1EC] opacity-40 text-[0.62rem] tracking-[0.18em] mt-4 text-center">
              {images[lightbox].caption.toUpperCase()}
            </p>
          </div>

          <button
            onClick={e => { e.stopPropagation(); next() }}
            className="absolute right-6 md:right-10 font-label text-[#F3F1EC] text-xl opacity-60 hover:opacity-100 transition-opacity duration-300 p-4"
          >
            →
          </button>

          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 font-label text-[#F3F1EC] opacity-50 hover:opacity-100 transition-opacity duration-300 text-lg p-2"
          >
            ✕
          </button>
        </div>
      )}
    </section>
  )
}
