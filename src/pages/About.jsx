import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Button from '../components/Button.jsx'
import { fadeUp, popIn, slideInLeft, slideInRight, staggerContainer, viewportOnce } from '../lib/motion.js'
import useDocumentTitle from '../lib/useDocumentTitle.js'

const KEY_FACTS = [
  { label: 'Established', value: '1990', icon: '🏭' },
  { label: 'Nature of Business', value: 'Manufacturer', icon: '🧵' },
  { label: 'Legal Status', value: 'Proprietorship', icon: '📋' },
  { label: 'Team Size', value: '11–25 Employees', icon: '👥' },
  { label: 'Annual Turnover', value: '₹1.5–5 Cr', icon: '📊' },
  { label: 'GST No.', value: '03ABLPJ0347H1ZZ', icon: '✓' },
  { label: 'GST Registered', value: '01-07-2017', icon: '📅' },
  { label: 'Location', value: 'Ludhiana, Punjab', icon: '📍' },
]

const VALUES = [
  {
    title: 'Quality First',
    icon: '✓',
    body: 'Every roll of fabric is held to the same standard, whether it is a sample run or a bulk order — quality is not negotiated to hit a deadline.',
  },
  {
    title: 'Full Transparency',
    icon: '🤝',
    body: 'Clear pricing, honest lead times, and no surprises once an order is confirmed. Customers know what they are getting and when.',
  },
  {
    title: 'Ethical Business',
    icon: '♡',
    body: 'Fair dealing with customers and suppliers alike — the same principles that built the business in 1990 still guide it today.',
  },
]

export default function About() {
  useDocumentTitle('About Us — K.K Knitwear Club')

  return (
    <>
      <section className="border-b border-line bg-linear-to-b from-cream-deep/60 to-cream py-14">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mx-auto max-w-[1160px] px-6"
        >
          <p className="font-cursive text-2xl text-rose font-semibold mt-2">Our fiber story ♡</p>
          <h1 className="mt-1 font-heading text-4xl font-bold tracking-tight text-charcoal">About K.K Knitwear Club</h1>
        </motion.div>
      </section>

      {/* Company story */}
      <section className="bg-white py-16 overflow-hidden border-b border-line">
        <div className="mx-auto grid max-w-[1160px] grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[1fr_0.85fr]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={slideInLeft}
          >
            <p className="font-cursive text-xl text-rose font-semibold mb-2">Three decades of trust ♡</p>
            <h2 className="mb-5 font-heading text-3xl font-bold tracking-tight text-charcoal">
              One standard of quality, since 1990
            </h2>
            <p className="mb-4 text-sm leading-relaxed text-charcoal-soft">
              Since 1990, K.K Knitwear Club has manufactured polyester, knitted, sportswear, terry,
              and specialty fabrics from our facility in Ludhiana, Punjab — one of India&rsquo;s
              largest textile and hosiery manufacturing hubs.
            </p>
            <p className="mb-4 text-sm leading-relaxed text-charcoal-soft">
              Under the leadership of owner{' '}
              <strong className="text-charcoal font-bold">Mr. Avnish Jain</strong>, the company has grown by
              holding to a simple standard: consistent product quality, straightforward business
              dealings, and following through on every order, large or small.
            </p>
            <p className="text-sm leading-relaxed text-charcoal-soft">
              We focus on doing a few things well rather than everything at once: dependable
              fabric, fair pricing, and a business relationship customers can count on.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-6 border-t border-line/70 pt-6 text-xs font-semibold text-charcoal-soft">
              <span className="flex items-center gap-1.5"><span className="text-rose">🛡️</span> Batch-to-Batch Quality</span>
              <span className="flex items-center gap-1.5"><span className="text-sage">🌱</span> Ethical Sourcing</span>
              <span className="flex items-center gap-1.5"><span className="text-rose">🤝</span> Direct Factory</span>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={slideInRight}
            className="overflow-hidden rounded-3xl border border-line bg-cream-card p-3 shadow-md group"
          >
            <div className="overflow-hidden rounded-2xl">
              <motion.img
                src="/images/company/signboard.jpg"
                alt="K.K Knitwear Club signboard at the entrance of the factory in Kabir Nagar, Ludhiana"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-cream py-16 border-b border-line">
        <div className="mx-auto max-w-[1160px] px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            className="mx-auto mb-10 max-w-xl text-center"
          >
            <p className="font-cursive text-2xl text-rose font-semibold">What we stand for ♡</p>
            <h2 className="font-heading text-3xl font-bold text-charcoal">Our Values</h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="grid grid-cols-1 gap-7 md:grid-cols-3"
          >
            {VALUES.map((value) => (
              <motion.div
                key={value.title}
                variants={popIn}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="group rounded-3xl border border-line bg-cream-card p-7 transition-shadow hover:shadow-md"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-rose-light text-rose font-bold">
                  {value.icon}
                </div>
                <h3 className="mb-2 font-heading text-lg font-bold text-charcoal group-hover:text-rose-dark transition-colors">{value.title}</h3>
                <p className="text-sm leading-relaxed text-charcoal-soft">{value.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Inside the workshop */}
      <section className="bg-white py-16 border-b border-line">
        <div className="mx-auto max-w-[1160px] px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            className="mx-auto mb-10 max-w-xl text-center"
          >
            <p className="font-cursive text-2xl text-rose font-semibold">A look inside ♡</p>
            <h2 className="font-heading text-3xl font-bold text-charcoal">Where the Fabric is Made</h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="grid grid-cols-1 gap-6 md:grid-cols-2"
          >
            <motion.div variants={popIn} className="overflow-hidden rounded-3xl border border-line bg-cream-card p-3 shadow-md group">
              <div className="overflow-hidden rounded-2xl">
                <motion.img
                  src="/images/company/knitting-machinery.jpg"
                  alt="Knitting machinery and yarn cones on the K.K Knitwear Club factory floor"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <p className="mt-3 px-2 pb-1 text-xs font-bold text-charcoal">Knitting floor — yarn cones and machinery in operation</p>
            </motion.div>
            <motion.div variants={popIn} className="overflow-hidden rounded-3xl border border-line bg-cream-card p-3 shadow-md group">
              <div className="overflow-hidden rounded-2xl">
                <motion.img
                  src="/images/company/office-desk-swatches.jpg"
                  alt="Fabric swatches laid out on the office desk at K.K Knitwear Club"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <p className="mt-3 px-2 pb-1 text-xs font-bold text-charcoal">Office desk — fabric swatches laid out for order review</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Key business facts */}
      <section className="bg-cream py-16 border-b border-line">
        <div className="mx-auto max-w-[1160px] px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            className="mx-auto mb-10 max-w-xl text-center"
          >
            <p className="font-cursive text-2xl text-rose font-semibold">At a glance ♡</p>
            <h2 className="font-heading text-3xl font-bold text-charcoal">Key Business Facts</h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="grid grid-cols-2 gap-5 md:grid-cols-4"
          >
            {KEY_FACTS.map((fact) => (
              <motion.div
                key={fact.label}
                variants={popIn}
                whileHover={{ y: -3, scale: 1.03 }}
                transition={{ duration: 0.2 }}
                className="rounded-3xl border border-line bg-cream-card p-5 text-center transition-colors hover:border-rose/30 hover:shadow-xs"
              >
                <span className="mb-2 block text-lg">{fact.icon}</span>
                <span className="font-heading block text-base font-bold break-words text-rose-dark">
                  {fact.value}
                </span>
                <span className="mt-1 block text-[0.7rem] text-charcoal-soft uppercase tracking-wider font-bold">{fact.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-rose py-16 text-center text-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="mx-auto max-w-[1160px] px-6"
        >
          <p className="font-cursive text-2xl text-rose-light font-semibold mb-2">Want to work with us? ♡</p>
          <h2 className="font-heading text-3xl font-bold text-white">Let&rsquo;s Create Together</h2>
          <p className="mx-auto mt-3 max-w-xl text-xs text-rose-light leading-relaxed">
            Reach out for pricing, samples, or to discuss a bulk order. We&rsquo;d love to hear about your next project.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3.5">
            <Button to="/contact" variant="secondary">Get in Touch &rarr;</Button>
            <Button to="/products" variant="secondary">View Products</Button>
          </div>
        </motion.div>
      </section>
    </>
  )
}
