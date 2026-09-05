const quickLinks = ['Classes', 'Courses', 'About', 'Reviews', 'Contact']
const legalLinks = ['Privacy Policy', 'Terms']

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id.toLowerCase())
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#0D0D0D] pt-24 pb-12">
      <div className="max-w-screen-2xl mx-auto px-8 md:px-16 lg:px-24">
        {/* Statement */}
        <div className="mb-20 md:mb-28">
          <h2
            className="font-display text-[#F3F1EC] leading-[0.92]"
            style={{ fontSize: 'clamp(3rem, 8vw, 10rem)' }}
          >
            Move.<br />
            Breathe.<br />
            <em>Transform.</em>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 border-t border-[#F3F1EC] border-opacity-10 pt-12 mb-16">
          {/* Brand */}
          <div>
            <p className="font-label text-[#F3F1EC] text-[0.65rem] tracking-[0.22em] mb-6 opacity-80">
              FITNESS & RHYTHM
            </p>
            <p
              className="font-label text-[#F3F1EC] opacity-30 leading-loose"
              style={{ fontSize: '0.65rem', letterSpacing: '0.08em' }}
            >
              PREMIUM YOGA & WELLNESS<br />
              STUDIO IN INDORE,<br />
              MADHYA PRADESH
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="font-label text-[#F3F1EC] opacity-30 text-[0.58rem] mb-6">QUICK LINKS</p>
            <div className="flex flex-col gap-3">
              {quickLinks.map(link => (
                <button
                  key={link}
                  onClick={() => scrollTo(link)}
                  className="font-label text-[#F3F1EC] opacity-50 text-[0.65rem] tracking-[0.12em] hover:opacity-100 transition-opacity duration-400 text-left"
                >
                  {link.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="font-label text-[#F3F1EC] opacity-30 text-[0.58rem] mb-6">CONTACT</p>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+917987349193"
                className="font-label text-[#F3F1EC] opacity-50 text-[0.65rem] tracking-[0.1em] hover:opacity-100 transition-opacity duration-400"
              >
                079873 49193
              </a>
              <a
                href="https://maps.google.com/?q=Fitness+Rhythm+Indore"
                target="_blank"
                rel="noopener noreferrer"
                className="font-label text-[#F3F1EC] opacity-50 text-[0.65rem] tracking-[0.08em] leading-loose hover:opacity-100 transition-opacity duration-400"
              >
                180, AIRPORT RD,<br />
                KALANI NAGAR,<br />
                INDORE MP 452005
              </a>
            </div>
          </div>

          {/* Social / Rating */}
          <div>
            <p className="font-label text-[#F3F1EC] opacity-30 text-[0.58rem] mb-6">CONNECT</p>
            <div className="flex flex-col gap-3 mb-8">
              {['Instagram', 'Facebook', 'YouTube'].map(s => (
                <button
                  key={s}
                  className="font-label text-[#F3F1EC] opacity-50 text-[0.65rem] tracking-[0.12em] hover:opacity-100 transition-opacity duration-400 text-left"
                >
                  {s.toUpperCase()}
                </button>
              ))}
            </div>
            <div>
              <p className="font-display text-[#F3F1EC] opacity-60" style={{ fontSize: '1.6rem' }}>4.9★</p>
              <p className="font-label text-[#F3F1EC] opacity-25 text-[0.58rem] mt-1">99+ GOOGLE REVIEWS</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-t border-[#F3F1EC] border-opacity-10 pt-8">
          <p className="font-label text-[#F3F1EC] opacity-25 text-[0.58rem] tracking-[0.1em]">
            © {new Date().getFullYear()} FITNESS & RHYTHM. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-6">
            {legalLinks.map(link => (
              <button
                key={link}
                className="font-label text-[#F3F1EC] opacity-25 text-[0.58rem] tracking-[0.1em] hover:opacity-60 transition-opacity duration-400"
              >
                {link.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
