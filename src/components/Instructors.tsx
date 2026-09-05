import Reveal from './Reveal'

const instructors = [
  {
    name: 'Lead Instructor',
    expertise: 'Hatha & Vinyasa Yoga',
    experience: '10+ Years',
    philosophy: 'Yoga is not about touching your toes — it is about what you learn on the way down.',
    image: 'https://images.unsplash.com/photo-1691131120810-661c022502d8?w=600&h=800&fit=crop&auto=format',
    alt: 'Yoga instructor in contemplative pose, natural light',
  },
  {
    name: 'Wellness Guide',
    expertise: 'Meditation & Breathwork',
    experience: '8+ Years',
    philosophy: 'The breath is your anchor. Every time you return to it, you return to yourself.',
    image: 'https://images.unsplash.com/photo-1706714134209-bb8e32070586?w=600&h=800&fit=crop&auto=format',
    alt: 'Instructor in peaceful indoor setting with natural elements',
  },
]

export default function Instructors() {
  return (
    <section className="bg-[#0D0D0D] py-32 md:py-40">
      <div className="max-w-screen-2xl mx-auto px-8 md:px-16 lg:px-24">
        {/* Header */}
        <Reveal>
          <p className="font-label text-[#F3F1EC] opacity-30 mb-10">INSTRUCTORS</p>
        </Reveal>
        <Reveal delay={1}>
          <h2
            className="font-display text-[#F3F1EC] leading-[0.92] mb-24 md:mb-32"
            style={{ fontSize: 'clamp(2.8rem, 6vw, 7rem)' }}
          >
            Guidance That<br />
            Goes Beyond<br />
            <em>the Mat.</em>
          </h2>
        </Reveal>

        {/* Instructor profiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 lg:gap-20">
          {instructors.map((instructor, i) => (
            <Reveal key={instructor.name} delay={(i + 1) as 1 | 2}>
              <div>
                {/* Portrait */}
                <div className="overflow-hidden mb-10" style={{ aspectRatio: '3/4' }}>
                  <img
                    src={instructor.image}
                    alt={instructor.alt}
                    className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out hover:scale-[1.04]"
                    style={{ filter: 'grayscale(20%) brightness(0.88)' }}
                  />
                </div>

                {/* Info */}
                <div className="flex items-start justify-between mb-5">
                  <div>
                    <h3
                      className="font-display text-[#F3F1EC] mb-1"
                      style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)' }}
                    >
                      {instructor.name}
                    </h3>
                    <p className="font-label text-[#F3F1EC] opacity-35 text-[0.62rem]">
                      {instructor.expertise.toUpperCase()}
                    </p>
                  </div>
                  <p className="font-label text-[#F3F1EC] opacity-30 text-[0.6rem] mt-1">
                    {instructor.experience.toUpperCase()}
                  </p>
                </div>

                <p
                  className="font-display text-[#F3F1EC] opacity-55 italic leading-snug"
                  style={{ fontSize: 'clamp(1rem, 1.8vw, 1.4rem)' }}
                >
                  "{instructor.philosophy}"
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
