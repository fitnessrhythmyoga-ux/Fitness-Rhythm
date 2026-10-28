import { useState } from 'react'
import Reveal from './Reveal'

const courses = [
  { title: 'Yoga Foundations', instructor: 'Fitness & Rhythm Studio', duration: '4 Weeks', level: 'Beginner', price: 'Coming Soon', status: 'upcoming' },
  { title: '21-Day Wellness Journey', instructor: 'Fitness & Rhythm Studio', duration: '3 Weeks', level: 'All Levels', price: 'Coming Soon', status: 'upcoming' },
  { title: 'Flexibility & Mobility Program', instructor: 'Fitness & Rhythm Studio', duration: '6 Weeks', level: 'Intermediate', price: 'Coming Soon', status: 'upcoming' },
  { title: 'Mindfulness & Meditation', instructor: 'Fitness & Rhythm Studio', duration: '2 Weeks', level: 'All Levels', price: 'Coming Soon', status: 'upcoming' },
  { title: 'Advanced Yoga Program', instructor: 'Fitness & Rhythm Studio', duration: '8 Weeks', level: 'Advanced', price: 'Coming Soon', status: 'upcoming' },
  { title: 'Teacher Training', instructor: 'Fitness & Rhythm Studio', duration: '12 Weeks', level: 'Advanced', price: 'Coming Soon', status: 'upcoming' },
  { title: 'Personal Wellness Program', instructor: 'Fitness & Rhythm Studio', duration: 'Custom', level: 'All Levels', price: 'On Request', status: 'enquire' },
]

export default function Courses() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="courses" className="bg-[#F3F1EC] py-32 md:py-40">
      <div className="max-w-screen-2xl mx-auto px-8 md:px-16 lg:px-24">
        {/* Course list */}
        <div className="mb-20 md:mb-28">
          <Reveal>
            <p className="font-label text-[#0D0D0D] opacity-50 mb-10">COURSES & PROGRAMS</p>
          </Reveal>
          {courses.map((course, i) => (
            <Reveal key={course.title} delay={(i % 3) as 0 | 1 | 2}>
              <div
                className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-center gap-4 py-7 border-t border-[#0D0D0D] border-opacity-10 transition-opacity duration-500 cursor-default group"
                style={{ opacity: hoveredIndex !== null && hoveredIndex !== i ? 0.35 : 1 }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-10">
                  <h3
                    className="font-display text-[#0D0D0D] transition-all duration-500"
                    style={{ fontSize: 'clamp(1.3rem, 2.5vw, 2rem)' }}
                  >
                    {course.title}
                  </h3>
                  <div className="flex gap-6">
                    <p className="font-label text-[#0D0D0D] opacity-35 text-[0.6rem]">{course.level.toUpperCase()}</p>
                    <p className="font-label text-[#0D0D0D] opacity-35 text-[0.6rem]">{course.duration.toUpperCase()}</p>
                  </div>
                </div>
                <div className="flex items-center gap-8">
                  <p className="font-label text-[#0D0D0D] opacity-50 text-[0.65rem] tracking-widest">{course.price.toUpperCase()}</p>
                  <button
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="font-label text-[#0D0D0D] text-[0.62rem] tracking-[0.18em] underline underline-offset-4 hover:opacity-40 transition-opacity duration-500 whitespace-nowrap"
                  >
                    {course.status === 'enquire' ? 'ENQUIRE' : 'JOIN WAITLIST'}
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
          <div className="border-t border-[#0D0D0D] border-opacity-10" />
        </div>

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20 md:mb-28">
          <div>
            <Reveal delay={1}>
              <h2
                className="font-display text-[#0D0D0D] leading-[0.92]"
                style={{ fontSize: 'clamp(2.8rem, 6vw, 7rem)' }}
              >
                Deepen<br />
                <em>Your Practice.</em>
              </h2>
            </Reveal>
          </div>
          <div className="flex flex-col justify-end">
            <Reveal delay={2}>
              <p
                className="font-label text-[#0D0D0D] opacity-55 leading-loose"
                style={{ fontSize: '0.7rem', letterSpacing: '0.09em' }}
              >
                STRUCTURED COURSES AND PROGRAMS DESIGNED FOR CONSISTENT TRANSFORMATION. EACH IS BUILT TO TAKE YOU DEEPER — INTO YOUR PRACTICE, YOUR BODY, AND YOUR UNDERSTANDING OF WELLNESS.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Featured image */}
        <Reveal>
          <div className="relative overflow-hidden" style={{ height: 'clamp(280px, 45vw, 620px)' }}>
            <img
              src="/images/img_0234.webp"
              alt="Fitness & Rhythm spacious yoga studio interior with wooden flooring and practice space"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-end p-10"
              style={{ background: 'linear-gradient(to top, rgba(13,13,13,0.5) 0%, transparent 60%)' }}
            >
              <p className="font-label text-[#F3F1EC] opacity-70 text-[0.65rem] tracking-[0.18em]">
                FITNESS & RHYTHM STUDIO — INDORE
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
