import { useState } from 'react'
import Reveal from './Reveal'

const reviews = [
  {
    name: 'Priya S.',
    rating: 5,
    review: 'Fitness & Rhythm completely changed how I relate to my body. The instructors are exceptional — patient, knowledgeable, and genuinely caring. This is not just a gym; it is a sanctuary.',
    date: 'Google Review',
  },
  {
    name: 'Rahul M.',
    rating: 5,
    review: 'I came for yoga and left with a completely new perspective on life. The environment is serene, the teaching is world-class. I cannot imagine my week without these classes now.',
    date: 'Google Review',
  },
  {
    name: 'Ananya K.',
    rating: 5,
    review: 'The breathwork sessions alone are worth every visit. I have tried studios across India and nothing compares to the quality of instruction and the peaceful atmosphere here.',
    date: 'Google Review',
  },
  {
    name: 'Vikram P.',
    rating: 5,
    review: 'Six months in and my flexibility, strength and mental clarity have transformed completely. The personalized attention you receive here is rare. Truly a premium experience.',
    date: 'Google Review',
  },
  {
    name: 'Meera D.',
    rating: 5,
    review: 'From the moment you walk in, you feel the difference. The energy, the attention to detail, the genuine warmth of the instructors — Fitness & Rhythm is a place of real transformation.',
    date: 'Google Review',
  },
]

export default function Reviews() {
  const [activeIndex, setActiveIndex] = useState(0)
  const review = reviews[activeIndex]

  return (
    <section id="reviews" className="bg-[#F3F1EC] py-32 md:py-44">
      <div className="max-w-screen-2xl mx-auto px-8 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24">
          {/* Left */}
          <div className="flex flex-col justify-between">
            <div>
              <Reveal>
                <p className="font-label text-[#0D0D0D] opacity-40 mb-10">REVIEWS</p>
              </Reveal>
              <Reveal delay={1}>
                <h2
                  className="font-display text-[#0D0D0D] leading-[0.92] mb-16"
                  style={{ fontSize: 'clamp(2.2rem, 4vw, 4.5rem)' }}
                >
                  Felt by<br />
                  Our<br />
                  <em>Community.</em>
                </h2>
              </Reveal>

              {/* Trust badge */}
              <Reveal delay={2}>
                <div className="mb-12">
                  <p
                    className="font-display text-[#0D0D0D] mb-1"
                    style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)' }}
                  >
                    4.9★
                  </p>
                  <p className="font-label text-[#0D0D0D] opacity-40 text-[0.62rem]">
                    ON GOOGLE · 99+ REVIEWS
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Navigation dots */}
            <Reveal delay={3}>
              <div className="flex gap-3">
                {reviews.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className="transition-all duration-500"
                    style={{
                      width: i === activeIndex ? 28 : 8,
                      height: 2,
                      backgroundColor: '#0D0D0D',
                      opacity: i === activeIndex ? 1 : 0.2,
                    }}
                    aria-label={`Review ${i + 1}`}
                  />
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right — pull quote */}
          <div className="flex flex-col justify-center">
            <Reveal>
              {/* Stars */}
              <div className="flex gap-1 mb-10">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <span key={i} className="font-label text-[#0D0D0D] opacity-60 text-sm">★</span>
                ))}
              </div>
            </Reveal>

            <div
              key={activeIndex}
              style={{ animation: 'fadeIn 0.6s ease-out' }}
            >
              <blockquote
                className="font-display text-[#0D0D0D] leading-snug mb-10"
                style={{ fontSize: 'clamp(1.6rem, 3vw, 3rem)' }}
              >
                <em>"{review.review}"</em>
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="w-8 h-px bg-[#0D0D0D] opacity-30" />
                <p className="font-label text-[#0D0D0D] opacity-50 text-[0.62rem]">
                  {review.name.toUpperCase()} · {review.date.toUpperCase()}
                </p>
              </div>
            </div>

            <div className="mt-16">
              <a
                href="https://www.google.com/maps/search/Fitness+%26+Rhythm+Indore"
                target="_blank"
                rel="noopener noreferrer"
                className="font-label text-[#0D0D0D] text-[0.65rem] tracking-[0.18em] underline underline-offset-4 hover:opacity-40 transition-opacity duration-500"
              >
                READ MORE REVIEWS ON GOOGLE
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}
