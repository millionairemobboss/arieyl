import { useState } from 'react'
import { faqs } from '../data/faqs'

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(null)

  const toggle = (id: string) => setOpenId((prev) => (prev === id ? null : id))

  return (
    <section id="faq" className="py-24 px-4" style={{ background: '#080810' }}>
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ color: '#8B2CFF' }}
          >
            Common Questions
          </p>
          <h2
            className="text-4xl md:text-5xl font-black leading-tight"
            style={{ color: '#F8F8FF' }}
          >
            Got Questions?
            <br />
            <span
              style={{
                background: 'linear-gradient(90deg, #8B2CFF, #00D5FF)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              We Have Answers.
            </span>
          </h2>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id
            return (
              <div
                key={faq.id}
                className="glass-card rounded-2xl overflow-hidden"
                style={{
                  borderColor: isOpen ? 'rgba(139,44,255,0.4)' : 'rgba(255,255,255,0.12)',
                  transition: 'border-color 0.2s ease',
                }}
              >
                {/* Question */}
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}
                >
                  <span
                    className="text-sm font-semibold leading-snug"
                    style={{ color: '#F8F8FF' }}
                  >
                    {faq.question}
                  </span>
                  <span
                    className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold"
                    style={{
                      background: isOpen ? 'rgba(139,44,255,0.3)' : 'rgba(255,255,255,0.06)',
                      color: isOpen ? '#B449FF' : '#A7A7B8',
                      transition: 'background 0.2s, color 0.2s, transform 0.2s',
                      transform: isOpen ? 'rotate(45deg)' : 'none',
                    }}
                  >
                    +
                  </span>
                </button>

                {/* Answer */}
                <div
                  style={{
                    maxHeight: isOpen ? '400px' : '0',
                    opacity: isOpen ? 1 : 0,
                    overflow: 'hidden',
                    transition: 'max-height 0.3s ease, opacity 0.3s ease',
                  }}
                >
                  <div
                    className="px-6 pb-5 text-sm leading-relaxed"
                    style={{ color: '#A7A7B8', borderTop: '1px solid rgba(255,255,255,0.06)' }}
                  >
                    <div className="pt-4">{faq.answer}</div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
