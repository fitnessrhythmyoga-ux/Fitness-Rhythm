import Reveal from './Reveal'

const hours = [
  { day: 'Monday – Friday', time: '6:00 AM – 9:00 PM' },
  { day: 'Saturday', time: '7:00 AM – 8:00 PM' },
  { day: 'Sunday', time: '8:00 AM – 6:00 PM' },
]

export default function Location() {
  return (
    <section id="location" className="bg-[#0D0D0D] py-24 sm:py-32 lg:py-40">
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-10 lg:px-16 xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          
          {/* Text column — Left */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col justify-center">
            <Reveal>
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="w-8 h-[1px] bg-[#F3F1EC]/40" />
                <p className="font-label text-[#F3F1EC] opacity-50 text-[0.68rem] tracking-[0.25em]">
                  VISIT OUR STUDIO
                </p>
              </div>
            </Reveal>

            <Reveal delay={1}>
              <h2
                className="font-display text-[#F3F1EC] leading-[0.96] mb-12"
                style={{ fontSize: 'clamp(2.5rem, 4.5vw, 5rem)' }}
              >
                Come Find<br />
                <em>Your Rhythm.</em>
              </h2>
            </Reveal>

            {/* Address */}
            <Reveal delay={2}>
              <div className="mb-8 p-6 rounded-2xl bg-[#141414] border border-[#F3F1EC]/10">
                <p className="font-label text-[#C2A382] text-[0.62rem] tracking-[0.22em] mb-2">
                  FITNESS & RHYTHM (फिटनेस & रिदम)
                </p>
                <p
                  className="font-display text-[#F3F1EC] leading-snug mb-3"
                  style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.45rem)' }}
                >
                  Bholenath Colony, 180, Airport Rd,<br />
                  Hujurganj, Sukhdev Nagar,<br />
                  Indore, Madhya Pradesh 452005
                </p>
                <p className="text-[#F3F1EC]/70 text-xs sm:text-sm font-light leading-relaxed">
                  राधा कृष्ण मंदिर के आगे, राठौर किराना के पास (Near Kalani Nagar & Aerodrum Road)
                </p>
              </div>
            </Reveal>

            {/* Contact Phone */}
            <Reveal delay={3}>
              <div className="mb-8 flex items-baseline justify-between border-b border-[#F3F1EC]/10 pb-4">
                <p className="font-label text-[#F3F1EC] opacity-40 text-[0.62rem] tracking-[0.18em]">
                  PHONE ENQUIRY
                </p>
                <a
                  href="tel:+917987349193"
                  className="font-display text-[#F3F1EC] hover:text-[#C2A382] transition-colors duration-300 text-lg sm:text-xl"
                >
                  079873 49193
                </a>
              </div>
            </Reveal>

            {/* Opening Hours */}
            <Reveal delay={4}>
              <div className="mb-10">
                <p className="font-label text-[#F3F1EC] opacity-40 text-[0.6rem] tracking-[0.18em] mb-4">
                  STUDIO HOURS
                </p>
                {hours.map((h) => (
                  <div
                    key={h.day}
                    className="flex justify-between py-2.5 border-b border-[#F3F1EC]/10 text-xs"
                  >
                    <span className="font-label text-[#F3F1EC] opacity-65 text-[0.65rem] tracking-[0.1em]">
                      {h.day.toUpperCase()}
                    </span>
                    <span className="font-label text-[#F3F1EC] opacity-85 text-[0.65rem]">
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* CTAs */}
            <Reveal delay={4}>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="https://www.google.com/maps/place/?q=place_id:ChIJVeR7Aa39YjkR65KU2vb9NOE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 font-label text-[0.65rem] tracking-[0.2em] bg-[#F3F1EC] text-[#0D0D0D] px-6 py-3.5 rounded-full hover:bg-[#C2A382] hover:text-[#0D0D0D] transition-colors duration-400 font-medium shadow-lg"
                >
                  <span>VIEW ON GOOGLE MAPS</span>
                  <span>↗</span>
                </a>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Fitness+%26+Rhythm+180+Airport+Rd+Bholenath+Colony+Indore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-label text-[#F3F1EC] text-[0.65rem] tracking-[0.18em] underline underline-offset-4 hover:opacity-60 transition-opacity duration-400 py-3 px-2"
                >
                  GET DIRECTIONS
                </a>
              </div>
            </Reveal>
          </div>

          {/* Map column — Right */}
          <div className="lg:col-span-7 xl:col-span-7">
            <Reveal delay={1}>
              {/* Clean White Framing Container */}
              <div 
                className="relative rounded-[2rem] p-2.5 sm:p-3 bg-white shadow-[0_25px_60px_-15px_rgba(255,255,255,0.08),0_15px_40px_rgba(0,0,0,0.4)] border border-white/80"
                style={{ height: 'clamp(420px, 48vw, 650px)' }}
              >
                {/* Inner Map Viewport */}
                <div className="w-full h-full rounded-[1.4rem] overflow-hidden bg-[#FAF9F6] relative">
                  {/* Embedded Google Map with bright, high-clarity white contrast */}
                  <iframe
                    title="Fitness & Rhythm Google Maps location"
                    src="https://maps.google.com/maps?q=Fitness+%26+Rhythm,+Bholenath+Colony,+180,+Airport+Rd,+Indore&t=&z=16&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    className="w-full h-full border-0"
                    style={{
                      filter: 'brightness(1.07) contrast(1.08) saturate(1.05)',
                      colorScheme: 'light',
                    }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />

                  {/* Top Right Floating Badge (Avoids Google card on top-left) */}
                  <div className="absolute top-4 right-4 z-10 pointer-events-none hidden sm:block">
                    <div className="inline-flex items-center gap-2 bg-[#0D0D0D]/90 backdrop-blur-md border border-white/20 text-[#F3F1EC] px-3.5 py-1.5 rounded-full text-[0.62rem] tracking-[0.14em] font-label shadow-xl">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      FITNESS & RHYTHM · INDORE
                    </div>
                  </div>

                  {/* Bottom Bar: Quick Directions Action */}
                  <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between pointer-events-none">
                    <div className="pointer-events-auto bg-white/95 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-black/10 flex items-center gap-2">
                      <span className="text-[#C2A382] text-sm">📍</span>
                      <span className="font-label text-[#0D0D0D] text-[0.62rem] tracking-[0.12em] font-medium">
                        180 AIRPORT RD · KALANI NAGAR
                      </span>
                    </div>

                    <a
                      href="https://www.google.com/maps/dir/?api=1&destination=Fitness+%26+Rhythm+180+Airport+Rd+Bholenath+Colony+Indore"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pointer-events-auto inline-flex items-center gap-2 bg-[#0D0D0D] text-[#F3F1EC] hover:bg-[#C2A382] hover:text-[#0D0D0D] px-4 py-2 rounded-full text-[0.62rem] tracking-[0.14em] font-label font-medium shadow-xl transition-all duration-300"
                    >
                      <span>NAVIGATE</span>
                      <span>↗</span>
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  )
}
