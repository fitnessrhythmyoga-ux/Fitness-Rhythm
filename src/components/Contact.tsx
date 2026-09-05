import { useState } from 'react'
import Reveal from './Reveal'

const classOptions = [
  'Hatha Yoga', 'Vinyasa Flow', 'Power Yoga', 'Beginner Yoga', 'Advanced Yoga',
  'Guided Meditation', 'Breathwork', 'Functional Fitness', 'Personal Training', 'Other',
]

const timeOptions = [
  'Early Morning (6–8 AM)', 'Morning (8–10 AM)', 'Midday (10 AM–12 PM)',
  'Afternoon (12–4 PM)', 'Evening (4–7 PM)', 'Late Evening (7–9 PM)',
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '', phone: '', email: '', class: '', time: '', message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputClass = "w-full bg-transparent border-b border-[#0D0D0D] border-opacity-20 py-4 font-label text-[#0D0D0D] text-[0.7rem] tracking-[0.1em] placeholder:text-[#0D0D0D] placeholder:opacity-30 focus:outline-none focus:border-opacity-80 transition-all duration-500"

  return (
    <section id="contact" className="bg-[#F3F1EC] py-32 md:py-44">
      <div className="max-w-screen-2xl mx-auto px-8 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-20 lg:gap-32">
          {/* Left */}
          <div>
            <Reveal>
              <p className="font-label text-[#0D0D0D] opacity-40 mb-10">BOOK A SESSION</p>
            </Reveal>
            <Reveal delay={1}>
              <h2
                className="font-display text-[#0D0D0D] leading-[0.92] mb-12"
                style={{ fontSize: 'clamp(2.8rem, 5.5vw, 6.5rem)' }}
              >
                Ready<br />
                <em>to Begin?</em>
              </h2>
            </Reveal>
            <Reveal delay={2}>
              <p
                className="font-label text-[#0D0D0D] opacity-50 leading-loose mb-12 max-w-xs"
                style={{ fontSize: '0.7rem', letterSpacing: '0.09em' }}
              >
                REACH OUT AND ONE OF OUR TEAM WILL RESPOND WITHIN 24 HOURS TO CONFIRM YOUR SESSION.
              </p>
            </Reveal>
            <Reveal delay={3}>
              <div className="flex flex-col gap-3">
                <p className="font-label text-[#0D0D0D] opacity-30 text-[0.6rem]">OR CALL DIRECTLY</p>
                <a
                  href="tel:+917987349193"
                  className="font-display text-[#0D0D0D] hover:opacity-50 transition-opacity duration-500"
                  style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2.2rem)' }}
                >
                  079873 49193
                </a>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={1}>
            {submitted ? (
              <div className="flex flex-col justify-center h-full py-20">
                <p className="font-label text-[#0D0D0D] opacity-40 text-[0.6rem] mb-6">MESSAGE RECEIVED</p>
                <h3
                  className="font-display text-[#0D0D0D] leading-snug mb-8"
                  style={{ fontSize: 'clamp(2rem, 3.5vw, 3.5rem)' }}
                >
                  <em>Thank you.</em><br />
                  We will be in touch.
                </h3>
                <p
                  className="font-label text-[#0D0D0D] opacity-40 text-[0.68rem] leading-loose"
                  style={{ letterSpacing: '0.1em' }}
                >
                  EXPECT A RESPONSE WITHIN 24 HOURS.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <input
                    className={inputClass}
                    placeholder="YOUR NAME"
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    required
                  />
                  <input
                    className={inputClass}
                    placeholder="PHONE NUMBER"
                    type="tel"
                    value={form.phone}
                    onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                    required
                  />
                </div>
                <input
                  className={inputClass}
                  placeholder="EMAIL ADDRESS"
                  type="email"
                  value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  required
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <select
                    className={`${inputClass} appearance-none cursor-pointer`}
                    value={form.class}
                    onChange={e => setForm(f => ({ ...f, class: e.target.value }))}
                  >
                    <option value="" className="text-[#0D0D0D]">PREFERRED CLASS</option>
                    {classOptions.map(o => (
                      <option key={o} value={o} className="text-[#0D0D0D] bg-[#F3F1EC]">{o.toUpperCase()}</option>
                    ))}
                  </select>
                  <select
                    className={`${inputClass} appearance-none cursor-pointer`}
                    value={form.time}
                    onChange={e => setForm(f => ({ ...f, time: e.target.value }))}
                  >
                    <option value="">PREFERRED TIME</option>
                    {timeOptions.map(o => (
                      <option key={o} value={o} className="bg-[#F3F1EC]">{o.toUpperCase()}</option>
                    ))}
                  </select>
                </div>
                <textarea
                  className={`${inputClass} resize-none`}
                  placeholder="MESSAGE (OPTIONAL)"
                  rows={4}
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                />
                <button
                  type="submit"
                  className="font-label text-[#0D0D0D] text-[0.68rem] tracking-[0.2em] border border-[#0D0D0D] py-5 px-10 hover:bg-[#0D0D0D] hover:text-[#F3F1EC] transition-all duration-600 self-start mt-4"
                >
                  BOOK YOUR SESSION
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
