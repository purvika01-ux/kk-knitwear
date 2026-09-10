import { animate, motion } from 'framer-motion'
import { useRef } from 'react'
import { fadeUp, staggerContainer, viewportOnce } from '../lib/motion.js'

const ARROW_TAP = {
  whileHover: { scale: 1.12 },
  whileTap: { scale: 0.9 },
  transition: { type: 'spring', stiffness: 400, damping: 20 },
}

function TestimonialCard({ quote, name, location }) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.015, boxShadow: '0 12px 20px -8px rgba(0,0,0,0.06)' }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="h-full rounded-3xl border border-line bg-cream-card p-7 transition-colors hover:border-rose/30"
    >
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-light text-rose font-bold font-heading text-sm">
          {name.charAt(0)}
        </div>
        <div>
          <p className="text-sm font-bold text-charcoal">{name}</p>
          <p className="text-xs text-charcoal-soft">{location}</p>
        </div>
      </div>
      <span className="mb-3 block text-xs tracking-widest text-rose" aria-hidden="true">
        &#9733;&#9733;&#9733;&#9733;&#9733;
      </span>
      <p className="text-sm leading-relaxed text-charcoal-soft italic">&ldquo;{quote}&rdquo;</p>
    </motion.div>
  )
}

export default function TestimonialCarousel({ testimonials }) {
  const trackRef = useRef(null)

  const scrollByCard = (direction) => {
    const track = trackRef.current
    if (!track) return
    const card = track.querySelector('[data-testimonial-card]')
    const step = card ? card.offsetWidth + 24 : track.clientWidth * 0.85
    const from = track.scrollLeft
    const max = track.scrollWidth - track.clientWidth

    if (max <= 0) return

    let to
    if (direction === 1) {
      if (from >= max - 10) {
        to = 0
      } else {
        to = Math.min(max, from + step)
      }
    } else {
      if (from <= 10) {
        to = max
      } else {
        to = Math.max(0, from - step)
      }
    }

    animate(from, to, {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (value) => {
        track.scrollLeft = value
      },
    })
  }

  return (
    <div className="relative">
      <motion.div
        ref={trackRef}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
        className="scrollbar-hide flex gap-6 overflow-x-auto pb-2"
      >
        {testimonials.map((testimonial) => (
          <motion.div
            key={testimonial.name}
            data-testimonial-card
            variants={fadeUp}
            className="w-[85%] shrink-0 sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
          >
            <TestimonialCard {...testimonial} />
          </motion.div>
        ))}
      </motion.div>

      <motion.button
        type="button"
        aria-label="Show previous testimonials"
        onClick={() => scrollByCard(-1)}
        {...ARROW_TAP}
        className="absolute top-1/2 cursor-pointer left-0 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-cream-card text-charcoal shadow-md hover:bg-rose-light hover:text-rose-dark transition-colors"
      >
        <span aria-hidden="true">&#8592;</span>
      </motion.button>

      <motion.button
        type="button"
        aria-label="Show more testimonials"
        onClick={() => scrollByCard(1)}
        {...ARROW_TAP}
        className="absolute top-1/2 cursor-pointer right-0 flex h-10 w-10 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-cream-card text-charcoal shadow-md hover:bg-rose-light hover:text-rose-dark transition-colors"
      >
        <span aria-hidden="true">&#8594;</span>
      </motion.button>
    </div>
  )
}
