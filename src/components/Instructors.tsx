import Reveal from './Reveal'

const instructors = [
  {
    name: 'Lead Instructor',
    expertise: 'Hatha & Vinyasa Yoga',
    experience: '10+ Years',
    philosophy: 'Yoga is not about touching your toes — it is about what you learn on the way down.',
    image: '/images/img_0241.webp',
    alt: 'Certified Yog Guru Rachana Jain awards and credentials',
  },
  {
    name: 'Wellness Guide',
    expertise: 'Meditation & Breathwork',
    experience: '8+ Years',
    philosophy: 'The breath is your anchor. Every time you return to it, you return to yourself.',
    image: '/images/img_0236.webp',
    alt: 'Fitness & Rhythm dedicated meditation and yoga practice space in Indore',
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
                <div className="overflow-hidden mb-10 rounded-2xl border border-white/10" style={{ aspectRatio: '3/4' }}>
                  <img
                    src={instructor.image}
                    alt={instructor.alt}
                    className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out hover:scale-105"
                  />
                </div>

                {/* Info */}
                <div className="border-t border-[#F3F1EC] border-opacity-15 pt-8">
                  <div className="flex justify-between items-baseline mb-4">
                    <h3
                      className="font-display text-[#F3F1EC]"
                      style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2.2rem)' }}
                    >
                      {instructor.name}
                    </h3>
                    <p className="font-label text-[#F3F1EC] opacity-35 text-[0.62rem]">
                      {instructor.experience}
                    </p>
                  </div>

                  <p className="font-label text-[#F3F1EC] opacity-50 text-[0.68rem] tracking-[0.14em] mb-6">
                    {instructor.expertise.toUpperCase()}
                  </p>

                  <p
                    className="font-label text-[#F3F1EC] opacity-35 leading-relaxed"
                    style={{ fontSize: '0.68rem', letterSpacing: '0.07em' }}
                  >
                    "{instructor.philosophy}"
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
