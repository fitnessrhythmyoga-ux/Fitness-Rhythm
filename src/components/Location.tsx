import Reveal from './Reveal'

const hours = [
  { day: 'Monday – Friday', time: '6:00 AM – 9:00 PM' },
  { day: 'Saturday', time: '7:00 AM – 8:00 PM' },
  { day: 'Sunday', time: '8:00 AM – 6:00 PM' },
]

export default function Location() {
  return (
    <section className="bg-[#0D0D0D] py-32 md:py-44">
      <div className="max-w-screen-2xl mx-auto px-8 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">
          {/* Text column */}
          <div>
            <Reveal>
              <p className="font-label text-[#F3F1EC] opacity-30 mb-10">FIND US</p>
            </Reveal>
            <Reveal delay={1}>
              <h2
                className="font-display text-[#F3F1EC] leading-[0.92] mb-16"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 6rem)' }}
              >
                Come Find<br />
                <em>Your Rhythm.</em>
              </h2>
            </Reveal>

            <Reveal delay={2}>
              <div className="mb-12">
                <p className="font-label text-[#F3F1EC] opacity-30 text-[0.6rem] mb-4">ADDRESS</p>
                <p
                  className="font-display text-[#F3F1EC] leading-snug"
                  style={{ fontSize: 'clamp(1rem, 1.8vw, 1.5rem)' }}
                >
                  180, Airport Rd,<br />
                  Hujurganj, Kalani Nagar,<br />
                  Indore, Madhya Pradesh 452005
                </p>
              </div>
            </Reveal>

            <Reveal delay={3}>
              <div className="mb-12">
                <p className="font-label text-[#F3F1EC] opacity-30 text-[0.6rem] mb-4">CONTACT</p>
                <a
                  href="tel:+917987349193"
                  className="font-display text-[#F3F1EC] hover:opacity-50 transition-opacity duration-500"
                  style={{ fontSize: 'clamp(1rem, 1.8vw, 1.5rem)' }}
                >
                  079873 49193
                </a>
              </div>
            </Reveal>

            <Reveal delay={4}>
              <div className="mb-16">
                <p className="font-label text-[#F3F1EC] opacity-30 text-[0.6rem] mb-6">OPENING HOURS</p>
                {hours.map(h => (
                  <div key={h.day} className="flex justify-between py-3 border-b border-[#F3F1EC] border-opacity-10">
                    <p className="font-label text-[#F3F1EC] opacity-55 text-[0.65rem]">{h.day.toUpperCase()}</p>
                    <p className="font-label text-[#F3F1EC] opacity-55 text-[0.65rem]">{h.time}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal>
              <a
                href="https://maps.google.com/?q=180,Airport+Rd,Hujurganj,Kalani+Nagar,Indore,Madhya+Pradesh+452005"
                target="_blank"
                rel="noopener noreferrer"
                className="font-label text-[#F3F1EC] text-[0.65rem] tracking-[0.18em] underline underline-offset-4 hover:opacity-40 transition-opacity duration-500"
              >
                GET DIRECTIONS
              </a>
            </Reveal>
          </div>

          {/* Map column */}
          <Reveal delay={1}>
            <div className="relative overflow-hidden" style={{ height: 'clamp(360px, 55vw, 680px)' }}>
              <iframe
                title="Fitness & Rhythm location map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.7!2d75.885!3d22.716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd6024a72a23%3A0x1f8c8a2a26c88d6!2s180%2C%20Airport%20Rd%2C%20Hujurganj%2C%20Kalani%20Nagar%2C%20Indore%2C%20Madhya%20Pradesh%20452005!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(100%) contrast(1.1) brightness(0.6)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
