import { useState, useEffect } from 'react'

const links = ['Courses', 'About', 'Classes', 'Programs', 'Gallery', 'Reviews', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    setMenuOpen(false)
    const el = document.getElementById(id.toLowerCase())
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-700"
        style={{
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          backgroundColor: scrolled ? 'rgba(243,241,236,0.88)' : 'transparent',
        }}
      >
        <div className="max-w-screen-2xl mx-auto px-8 md:px-16 flex items-center justify-between h-16 md:h-20">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-label text-xs tracking-[0.22em] text-[#0D0D0D] hover:opacity-60 transition-opacity duration-500"
            style={{ textShadow: scrolled ? 'none' : '0 1px 12px rgba(0,0,0,0.4)' }}
          >
            FITNESS & RHYTHM
          </button>

          <div className="hidden lg:flex items-center gap-10">
            {links.map(link => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className="font-label text-[0.65rem] tracking-[0.2em] text-[#0D0D0D] hover:opacity-50 transition-opacity duration-400"
                style={{ textShadow: scrolled ? 'none' : '0 1px 8px rgba(0,0,0,0.35)' }}
              >
                {link.toUpperCase()}
              </button>
            ))}
            <button
              onClick={() => scrollTo('Contact')}
              className="font-label text-[0.65rem] tracking-[0.2em] text-[#0D0D0D] border border-[#0D0D0D] px-5 py-2.5 hover:bg-[#0D0D0D] hover:text-[#F3F1EC] transition-all duration-500"
            >
              BOOK A SESSION
            </button>
          </div>

          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Menu"
          >
            <span
              className="block w-6 h-px bg-[#0D0D0D] transition-all duration-500"
              style={{
                transform: menuOpen ? 'rotate(45deg) translateY(4px)' : 'none',
                boxShadow: scrolled ? 'none' : '0 1px 6px rgba(0,0,0,0.4)',
              }}
            />
            <span
              className="block w-6 h-px bg-[#0D0D0D] transition-all duration-500"
              style={{
                opacity: menuOpen ? 0 : 1,
                boxShadow: scrolled ? 'none' : '0 1px 6px rgba(0,0,0,0.4)',
              }}
            />
            <span
              className="block w-6 h-px bg-[#0D0D0D] transition-all duration-500"
              style={{
                transform: menuOpen ? 'rotate(-45deg) translateY(-4px)' : 'none',
                boxShadow: scrolled ? 'none' : '0 1px 6px rgba(0,0,0,0.4)',
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className="fixed inset-0 z-40 lg:hidden flex flex-col justify-center items-center gap-8 transition-all duration-700"
        style={{
          backgroundColor: '#F3F1EC',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'all' : 'none',
        }}
      >
        {links.map((link, i) => (
          <button
            key={link}
            onClick={() => scrollTo(link)}
            className="font-display text-4xl transition-opacity duration-500 hover:opacity-40"
            style={{
              transitionDelay: menuOpen ? `${i * 60}ms` : '0ms',
              transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
              opacity: menuOpen ? 1 : 0,
              transition: 'opacity 0.5s ease, transform 0.5s ease',
            }}
          >
            {link}
          </button>
        ))}
        <button
          onClick={() => scrollTo('Contact')}
          className="font-label text-xs tracking-[0.2em] border border-[#0D0D0D] px-8 py-4 mt-4 hover:bg-[#0D0D0D] hover:text-[#F3F1EC] transition-all duration-500"
        >
          BOOK A SESSION
        </button>
      </div>
    </>
  )
}
