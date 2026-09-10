// Shared Framer Motion variants — keep animations smooth, dynamic, and consistent site-wide.

export const EASE_OUT = [0.16, 1, 0.3, 1]
export const SPRING_TOUCH = { type: 'spring', stiffness: 300, damping: 22 }

export const fadeUp = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: EASE_OUT },
  },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4, ease: EASE_OUT },
  },
}

export const popIn = {
  hidden: { opacity: 0, scale: 0.92, y: 12 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.42, ease: EASE_OUT },
  },
}

export const slideInLeft = {
  hidden: { opacity: 0, x: -36 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: EASE_OUT },
  },
}

export const slideInRight = {
  hidden: { opacity: 0, x: 36 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: EASE_OUT },
  },
}

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.04 },
  },
}

export const heroContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
}

export const cardHoverProps = {
  whileHover: { y: -6, scale: 1.015 },
  transition: { duration: 0.25, ease: 'easeOut' },
}

// Triggered once when scrolling into view
export const viewportOnce = { once: true, amount: 0.05 }
