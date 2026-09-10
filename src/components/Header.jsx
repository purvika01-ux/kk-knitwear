import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import QuickQuoteModal from './QuickQuoteModal.jsx'

const NAV_LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About Us' },
  { to: '/products', label: 'Products' },
  { to: '/contact', label: 'Contact Us' },
]

const underlineVariants = {
  rest: { scaleX: 0 },
  active: { scaleX: 1 },
}

function NavItem({ to, label, end, onClick }) {
  return (
    <NavLink to={to} end={end} onClick={onClick} className="block px-1 py-2 text-sm font-semibold">
      {({ isActive }) => (
        <motion.span
          initial={false}
          animate={isActive ? 'active' : 'rest'}
          whileHover="active"
          className="relative inline-block"
        >
          <span className={`transition-colors ${isActive ? 'text-rose-dark font-bold' : 'text-charcoal hover:text-rose-dark'}`}>
            {label}
          </span>
          <motion.span
            variants={underlineVariants}
            transition={{ type: 'spring', stiffness: 380, damping: 25 }}
            style={{ originX: 0 }}
            className="absolute right-0 -bottom-1 left-0 h-0.5 rounded-full bg-rose-dark"
          />
        </motion.span>
      )}
    </NavLink>
  )
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isQuoteOpen, setIsQuoteOpen] = useState(false)

  const handleOpenQuote = () => {
    setIsOpen(false)
    setIsQuoteOpen(true)
  }

  return (
    <>
      {/* Top announcement bar */}
      <div className="bg-rose text-white text-xs py-1.5 px-4 text-center font-medium tracking-wide">
        <span>✨ Direct Factory Supply Since 1990 &middot; 100% Quality Checked &middot; Call: <a href="tel:07942802251" className="underline font-semibold">07942802251</a></span>
      </div>

      <header className="sticky top-0 z-40 border-b border-line bg-cream/95 backdrop-blur-md">
        <div className="mx-auto flex h-[80px] max-w-[1160px] items-center justify-between px-6">
          <motion.div whileHover={{ scale: 1.02 }} transition={{ type: 'spring', stiffness: 400, damping: 25 }}>
            <NavLink to="/" className="flex flex-col leading-tight" onClick={() => setIsOpen(false)}>
              <span className="font-heading text-2xl font-bold tracking-tight text-charcoal">K.K Knitwear Club</span>
              <span className="font-cursive text-sm text-rose font-semibold tracking-wider">
                ~ crafted with quality, woven with trust &amp; care ♡ ~
              </span>
            </NavLink>
          </motion.div>

          {/* Desktop nav + action button */}
          <div className="hidden lg:flex items-center gap-6">
            <nav aria-label="Primary">
              <ul className="flex items-center gap-6">
                {NAV_LINKS.map((link) => (
                  <li key={link.to}>
                    <NavItem {...link} />
                  </li>
                ))}
              </ul>
            </nav>

            <button
              type="button"
              onClick={handleOpenQuote}
              className="rounded-full bg-rose px-5 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-xs transition-transform hover:bg-rose-dark hover:scale-105 active:scale-95 cursor-pointer"
            >
              Request Quote &rarr;
            </button>
          </div>

          {/* Tablet Nav */}
          <nav aria-label="Primary tablet" className="hidden md:flex lg:hidden items-center gap-4">
            <ul className="flex gap-4">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <NavItem {...link} />
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={handleOpenQuote}
              className="rounded-full bg-rose px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-xs hover:bg-rose-dark cursor-pointer"
            >
              Request Quote &rarr;
            </button>
          </nav>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="p-2 md:hidden cursor-pointer"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="mb-1.5 block h-0.5 w-6 rounded-full bg-charcoal" />
            <span className="mb-1.5 block h-0.5 w-6 rounded-full bg-charcoal" />
            <span className="block h-0.5 w-6 rounded-full bg-charcoal" />
          </button>
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="absolute top-[80px] right-0 left-0 border-b border-line bg-cream shadow-lg md:hidden"
            >
              <nav aria-label="Primary mobile">
                <ul className="flex flex-col gap-1 px-6 py-4">
                  {NAV_LINKS.map((link) => (
                    <li key={link.to}>
                      <NavItem {...link} onClick={() => setIsOpen(false)} />
                    </li>
                  ))}
                  <li className="pt-2">
                    <button
                      type="button"
                      onClick={handleOpenQuote}
                      className="block w-full rounded-full bg-rose py-2.5 text-center text-xs font-bold uppercase tracking-wider text-white shadow-xs hover:bg-rose-dark cursor-pointer"
                    >
                      Request Quote &rarr;
                    </button>
                  </li>
                </ul>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Quick Quote Modal */}
      <QuickQuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
      />
    </>
  )
}
