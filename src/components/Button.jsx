import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const VARIANTS = {
  primary: 'bg-rose text-white hover:bg-rose-dark shadow-xs',
  secondary: 'bg-transparent text-white border-2 border-white/60 hover:bg-white/10 hover:border-white',
  outline: 'bg-transparent text-charcoal border-2 border-line hover:border-charcoal hover:bg-charcoal hover:text-white',
}

const MotionLink = motion.create(Link)
const MotionAnchor = motion.create('a')

const TAP_HOVER = {
  whileHover: { scale: 1.04, y: -2 },
  whileTap: { scale: 0.95 },
  transition: { type: 'spring', stiffness: 350, damping: 20 },
}

export default function Button({ to, href, variant = 'primary', children }) {
  const className = `inline-block cursor-pointer rounded-full px-7 py-3 text-center text-sm font-bold uppercase tracking-wider transition-colors ${VARIANTS[variant]}`

  if (href) {
    return (
      <MotionAnchor href={href} className={className} {...TAP_HOVER}>
        {children}
      </MotionAnchor>
    )
  }

  return (
    <MotionLink to={to} className={className} {...TAP_HOVER}>
      {children}
    </MotionLink>
  )
}
