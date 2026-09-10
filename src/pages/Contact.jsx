import { motion } from 'framer-motion'
import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { PRODUCT_CATEGORIES } from '../data/productCategories.js'
import { fadeUp, slideInLeft, slideInRight, viewportOnce } from '../lib/motion.js'
import useDocumentTitle from '../lib/useDocumentTitle.js'

const MAP_SRC =
  'https://maps.google.com/maps?q=K.K+Knitwear+Club,+Kabir+Nagar,+Sekhonwal+Road,+Ludhiana,+Punjab+141008,+India&output=embed'

const inputClass =
  'w-full rounded-xl border border-line px-3.5 py-2.5 text-sm text-charcoal placeholder:text-charcoal-soft/60 focus:border-rose focus:ring-2 focus:ring-rose/30 focus:outline-none transition-shadow bg-white'

export default function Contact() {
  useDocumentTitle('Contact Us — K.K Knitwear Club')

  const [searchParams] = useSearchParams()
  const [selectedProduct, setSelectedProduct] = useState(() => {
    const productParam = searchParams.get('product')
    if (productParam) {
      const match = PRODUCT_CATEGORIES.find(
        (p) => p.name.toLowerCase() === productParam.toLowerCase() || p.id === productParam
      )
      return match ? match.name : productParam
    }
    return ''
  })
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <section className="border-b border-line bg-cream py-14">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mx-auto max-w-[1160px] px-6"
        >
          <p className="font-cursive text-2xl text-rose font-semibold mt-2">Get in touch ♡</p>
          <h1 className="mt-1 font-heading text-4xl font-bold tracking-tight text-charcoal">Contact &amp; Fabric Enquiry</h1>
          <p className="mt-3 max-w-[65ch] text-sm leading-relaxed text-charcoal-soft">
            Get in touch for pricing, samples, custom dyeing, or bulk manufacturing enquiries. Our Ludhiana factory team will follow up directly.
          </p>
        </motion.div>
      </section>

      <section className="bg-white py-16 overflow-hidden border-b border-line">
        <div className="mx-auto grid max-w-[1160px] grid-cols-1 gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Contact info + map */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={slideInLeft}
          >
            <p className="font-cursive text-xl text-rose font-semibold mb-1">Direct Factory Contact ♡</p>
            <h2 className="mb-5 font-heading text-2xl font-bold text-charcoal">Factory Location &amp; Office</h2>

            <div className="mb-6 flex gap-4">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-rose font-bold text-white shadow-xs"
              >
                📍
              </motion.div>
              <div>
                <h3 className="mb-1 text-xs font-bold tracking-wide text-charcoal uppercase">
                  Factory Address
                </h3>
                <address className="text-sm not-italic text-charcoal-soft leading-relaxed">
                  Street No-1, K.K Knitwear Club,
                  <br />
                  Kabir Nagar, Sekhonwal Road,
                  <br />
                  Ludhiana &ndash; 141008, Punjab, India
                </address>
              </div>
            </div>

            <div className="mb-6 flex gap-4">
              <motion.div
                whileHover={{ scale: 1.1, rotate: -5 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-rose font-bold text-white shadow-xs"
              >
                📞
              </motion.div>
              <div>
                <h3 className="mb-1 text-xs font-bold tracking-wide text-charcoal uppercase">
                  Phone &amp; Orders
                </h3>
                <a
                  href="tel:07942802251"
                  className="text-sm font-bold text-charcoal hover:text-rose-dark transition-colors"
                >
                  07942802251
                </a>
                <p className="text-xs text-charcoal-soft">Owner: Mr. Avnish Jain</p>
              </div>
            </div>

            <div className="mb-8 flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sage font-bold text-white shadow-xs">
                🏢
              </div>
              <div>
                <h3 className="mb-1 text-xs font-bold tracking-wide text-charcoal uppercase">
                  Business Registration
                </h3>
                <p className="text-xs text-charcoal-soft">
                  GST No.: <strong className="text-charcoal">03ABLPJ0347H1ZZ</strong> (Reg. 01-07-2017)
                  <br />
                  Established 1990 &middot; Proprietorship Mill
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-line shadow-xs">
              <iframe
                title="K.K Knitwear Club location map"
                src={MAP_SRC}
                width="100%"
                height="280"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Enquiry form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={slideInRight}
            className="rounded-3xl border border-line bg-cream p-6 sm:p-8 shadow-xs"
          >
            <p className="font-cursive text-xl text-rose font-semibold mb-1">Quick Enquiry Form ♡</p>
            <h2 className="mb-5 font-heading text-2xl font-bold text-charcoal">Request Sample or Bulk Pricing</h2>

            {submitted ? (
              <div className="rounded-2xl border border-sage/30 bg-sage-light/50 p-6 text-center">
                <span className="text-3xl mb-2 block">✨</span>
                <h3 className="font-heading text-xl font-bold text-sage-dark">Enquiry Received!</h3>
                <p className="mt-2 text-xs leading-relaxed text-charcoal-soft">
                  Thank you for reaching out to K.K Knitwear Club. Our Ludhiana office will review your fabric requirements and contact you promptly.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-4 rounded-full bg-rose px-5 py-2 text-xs font-bold text-white shadow-xs"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-charcoal">
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    placeholder="Enter full name"
                    className={inputClass}
                  />
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-charcoal">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      placeholder="you@example.com"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-charcoal">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      required
                      placeholder="Your phone number"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="product" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-charcoal">
                    Product Interest
                  </label>
                  <select
                    id="product"
                    name="product"
                    value={selectedProduct}
                    onChange={(e) => setSelectedProduct(e.target.value)}
                    className={inputClass}
                  >
                    <option value="">
                      Select a product category...
                    </option>
                    {PRODUCT_CATEGORIES.map((category) => (
                      <option key={category.name} value={category.name}>
                        {category.name}
                      </option>
                    ))}
                    <option value="Other / Custom GSM">Other / Custom Fabric Specs</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-charcoal">
                    Requirement Details (GSM, Quantity, Color, Timeline)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    placeholder="Tell us about your requirement — GSM weight, roll quantity, target shade, delivery timeline, etc."
                    className={inputClass}
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full cursor-pointer rounded-full bg-rose px-7 py-3 text-center text-xs font-bold uppercase tracking-wider text-white shadow-xs transition-colors hover:bg-rose-dark"
                >
                  Submit Fabric Enquiry &rarr;
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </>
  )
}
