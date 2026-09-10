import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { PRODUCT_CATEGORIES } from '../data/productCategories.js'

export default function QuickQuoteModal({ isOpen, onClose, initialProduct = '' }) {
  const [product, setProduct] = useState(initialProduct)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [gsm, setGsm] = useState('')
  const [quantity, setQuantity] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  // Close on ESC key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleReset = () => {
    setSubmitted(false)
    setName('')
    setPhone('')
    setEmail('')
    setGsm('')
    setQuantity('')
    setMessage('')
    onClose()
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 bg-charcoal/65 backdrop-blur-sm"
          aria-hidden="true"
        />

        {/* Dialog Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.93, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ type: 'spring', stiffness: 360, damping: 28 }}
          className="relative z-10 my-auto w-full max-w-lg overflow-hidden rounded-3xl border border-line bg-cream-card shadow-2xl"
          role="dialog"
          aria-modal="true"
          aria-labelledby="quote-modal-title"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between border-b border-line bg-cream px-6 py-4">
            <div>
              <p className="font-cursive text-lg text-rose font-semibold">Direct Factory Quote ♡</p>
              <h3 id="quote-modal-title" className="font-heading text-xl font-bold text-charcoal">
                Request a Quick Bulk Quote
              </h3>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-charcoal shadow-xs transition-transform hover:scale-110 hover:bg-rose-light hover:text-rose cursor-pointer"
              aria-label="Close modal"
            >
              ✕
            </button>
          </div>

          <div className="p-6 sm:p-8">
            {submitted ? (
              <div className="rounded-2xl border border-sage/30 bg-sage-light/40 p-6 text-center">
                <span className="text-4xl mb-3 block">✨</span>
                <h4 className="font-heading text-2xl font-bold text-sage-dark mb-2">Quote Request Submitted!</h4>
                <p className="text-xs text-charcoal-soft leading-relaxed mb-4">
                  Thank you, <strong className="text-charcoal">{name || 'valued customer'}</strong>. Our factory manager, Mr. Avnish Jain, will review your requirement and follow up directly at <strong className="text-charcoal">{phone || email}</strong>.
                </p>
                <div className="rounded-xl border border-line bg-white p-3 text-[0.75rem] text-charcoal-soft mb-6">
                  <strong>Factory Location:</strong> Street No-1, Kabir Nagar, Ludhiana, Punjab &middot; GST No: 03ABLPJ0347H1ZZ
                </div>
                <button
                  type="button"
                  onClick={handleReset}
                  className="rounded-full bg-rose px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-xs hover:bg-rose-dark cursor-pointer"
                >
                  Done &amp; Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div>
                  <label htmlFor="quote-name" className="mb-1 block font-bold text-charcoal uppercase tracking-wider">
                    Full Name / Company
                  </label>
                  <input
                    id="quote-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name or business name"
                    className="w-full rounded-xl border border-line bg-white px-3.5 py-2.5 text-sm text-charcoal placeholder:text-charcoal-soft/50 focus:border-rose focus:ring-2 focus:ring-rose/20 focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="quote-phone" className="mb-1 block font-bold text-charcoal uppercase tracking-wider">
                      Phone Number *
                    </label>
                    <input
                      id="quote-phone"
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. 09876543210"
                      className="w-full rounded-xl border border-line bg-white px-3.5 py-2.5 text-sm text-charcoal placeholder:text-charcoal-soft/50 focus:border-rose focus:ring-2 focus:ring-rose/20 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="quote-email" className="mb-1 block font-bold text-charcoal uppercase tracking-wider">
                      Email Address
                    </label>
                    <input
                      id="quote-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-line bg-white px-3.5 py-2.5 text-sm text-charcoal placeholder:text-charcoal-soft/50 focus:border-rose focus:ring-2 focus:ring-rose/20 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="quote-product" className="mb-1 block font-bold text-charcoal uppercase tracking-wider">
                    Select Fabric Line
                  </label>
                  <select
                    id="quote-product"
                    value={product}
                    onChange={(e) => setProduct(e.target.value)}
                    className="w-full rounded-xl border border-line bg-white px-3.5 py-2.5 text-sm text-charcoal focus:border-rose focus:ring-2 focus:ring-rose/20 focus:outline-none"
                  >
                    <option value="">Choose fabric category...</option>
                    {PRODUCT_CATEGORIES.map((cat) => (
                      <option key={cat.id} value={cat.name}>
                        {cat.name} ({cat.gsm ? cat.gsm.split('(')[0] : 'Custom'})
                      </option>
                    ))}
                    <option value="Other Fabric Spec">Other / Custom Manufacturing</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="quote-gsm" className="mb-1 block font-bold text-charcoal uppercase tracking-wider">
                      Target Weight (GSM)
                    </label>
                    <input
                      id="quote-gsm"
                      type="text"
                      value={gsm}
                      onChange={(e) => setGsm(e.target.value)}
                      placeholder="e.g. 140 GSM, 220 GSM"
                      className="w-full rounded-xl border border-line bg-white px-3.5 py-2.5 text-sm text-charcoal placeholder:text-charcoal-soft/50 focus:border-rose focus:ring-2 focus:ring-rose/20 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="quote-qty" className="mb-1 block font-bold text-charcoal uppercase tracking-wider">
                      Target Quantity (Kg/Meters)
                    </label>
                    <input
                      id="quote-qty"
                      type="text"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      placeholder="e.g. 100 Kg, 500 Meters"
                      className="w-full rounded-xl border border-line bg-white px-3.5 py-2.5 text-sm text-charcoal placeholder:text-charcoal-soft/50 focus:border-rose focus:ring-2 focus:ring-rose/20 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="quote-message" className="mb-1 block font-bold text-charcoal uppercase tracking-wider">
                    Special Requirements or Shade Notes
                  </label>
                  <textarea
                    id="quote-message"
                    rows="3"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Mention color preferences, application, delivery timeline, or sample request..."
                    className="w-full rounded-xl border border-line bg-white px-3.5 py-2.5 text-sm text-charcoal placeholder:text-charcoal-soft/50 focus:border-rose focus:ring-2 focus:ring-rose/20 focus:outline-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full cursor-pointer rounded-full bg-rose py-3 text-center text-xs font-bold uppercase tracking-wider text-white shadow-xs transition-transform hover:bg-rose-dark hover:scale-101 active:scale-99"
                  >
                    Submit Price Enquiry &rarr;
                  </button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
