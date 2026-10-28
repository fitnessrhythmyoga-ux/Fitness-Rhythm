import { useState } from 'react'
import Reveal from './Reveal'

const images = [
  { src: '/images/img_0242.webp', alt: 'Fitness & Rhythm yoga studio interior with yoga mats, mirrors and natural light', caption: 'Our Studio · Space' },
  { src: '/images/img_0245.webp', alt: 'Colourful yoga mats lined along the studio wall in natural light', caption: 'Practice · Mats' },
  { src: '/images/img_0234.webp', alt: 'Spacious studio practice hall with mirrors and equipment', caption: 'Studio · Practice Hall' },
  { src: '/images/img_0238.webp', alt: 'Medals and awards earned at Fitness & Rhythm studio', caption: 'Achievements · Dedication' },
  { src: '/images/img_0231.webp', alt: 'Rolled yoga mats and practice balls neatly arranged along the wall', caption: 'Equipment · Ready' },
  { src: '/images/img_0246.webp', alt: 'Secondary practice room with Surya Namaskar poster and open floor', caption: 'Surya Namaskar · Room' },
  { src: '/images/img_0233.webp', alt: 'Full view of the yoga studio from the entrance with gleaming floor', caption: 'Studio · Entrance' },
  { src: '/images/img_0241.webp', alt: 'Framed certificates and awards displayed at Fitness & Rhythm studio', caption: 'Certified · Excellence' },
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
              src={images[lightbox].src}
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
