import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button.jsx'
import ProductCard from '../components/ProductCard.jsx'
import ProductDetailModal from '../components/ProductDetailModal.jsx'
import TestimonialCarousel from '../components/TestimonialCarousel.jsx'
import { PRODUCT_CATEGORIES } from '../data/productCategories.js'
import { fadeUp, heroContainer, popIn, slideInLeft, slideInRight, staggerContainer, viewportOnce } from '../lib/motion.js'
import useDocumentTitle from '../lib/useDocumentTitle.js'

const FEATURED_PRODUCTS = PRODUCT_CATEGORIES.slice(0, 6)

const CATEGORY_TILES = [
  { name: 'POLYESTER', icon: '🧵', label: 'Explore All', to: '/products?category=polyester' },
  { name: 'KNITTED', icon: '🧶', label: 'Explore All', to: '/products?category=knitted' },
  { name: 'SPORTSWEAR', icon: '⚡', label: 'Explore All', to: '/products?category=sportswear' },
  { name: 'TERRY', icon: '🛁', label: 'Explore All', to: '/products?category=terry' },
  { name: 'MENS WEAR', icon: '👖', label: 'Explore All', to: '/products?category=mens' },
  { name: 'BABY BLANKET', icon: '💤', label: 'Explore All', to: '/products?category=winter' },
]

const SIGNATURE_PALETTE = [
  { name: 'Oatmeal', color: '#EAE0D5' },
  { name: 'Blush', color: '#E0B0A8' },
  { name: 'Rosewood', color: '#B86B5C' },
  { name: 'Sage', color: '#5F7A65' },
  { name: 'Teal', color: '#3B7070' },
  { name: 'Dusk', color: '#2C2623' },
]

const TESTIMONIALS = [
  {
    quote:
      'Great to deal with — responsive, and the fabric came at a fair price. We were fully satisfied with the order.',
    name: 'Parul',
    location: 'Ludhiana',
  },
  {
    quote: 'Consistent quality on our Polyester Fabric orders, order after order.',
    name: 'Bindiya',
    location: 'New Delhi',
  },
  {
    quote: 'Reliable fabric for our home furnishing line — good experience overall.',
    name: 'Bajranglal',
    location: 'Guwahati',
  },
  {
    quote: 'Good experience ordering Hosiery Fabric — smooth process from enquiry to delivery.',
    name: 'Musthafa',
    location: 'Kovur, Andhra Pradesh',
  },
  {
    quote: 'Happy with the Jacket Fabric we ordered — solid quality for the price.',
    name: 'Arsala',
    location: 'Delhi',
  },
  {
    quote: 'Dependable supplier for our Polyester Fabric needs.',
    name: 'Mujakkir',
    location: 'New Delhi',
  },
  {
    quote: 'Good quality Terry Fabric, delivered as expected.',
    name: 'Rajashekhar',
    location: 'Bengaluru',
  },
]

const FAQS = [
  {
    q: 'What is the minimum order quantity (MOQ) for custom fabric orders?',
    a: 'We accommodate both standard bulk runs and small sampling orders. Contact us directly with your target GSM and color specification to discuss MOQ options.',
  },
  {
    q: 'Do you provide physical fabric swatches before placing a bulk order?',
    a: 'Yes! We send swatch cards and sample swatches upon request so you can inspect hand-feel, weight, and finish prior to confirming your production run.',
  },
  {
    q: 'Can fabrics be manufactured to custom GSM, width, or color shades?',
    a: 'Absolutely. We offer custom manufacturing across polyester, knitted, sportswear, and terry lines tailored to your exact specifications.',
  },
  {
    q: 'Where is your factory located and how are orders shipped?',
    a: 'Our factory is located in Kabir Nagar, Ludhiana, Punjab — India’s textile hub. We ship nationwide with reliable logistics partners directly to your facility.',
  },
]

export default function Home() {
  useDocumentTitle('K.K Knitwear Club — Polyester & Knitted Fabric Manufacturer, Ludhiana')

  const [selectedProduct, setSelectedProduct] = useState(null)
  const [openFaq, setOpenFaq] = useState(null)

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx)
  }

  return (
    <>
      {/* Hero Section (SoftLoop Studio aesthetic) */}
      <section className="bg-linear-to-b from-cream-deep/60 via-cream to-cream py-14 md:py-20 overflow-hidden border-b border-line">
        <div className="mx-auto grid max-w-[1160px] grid-cols-1 items-center gap-12 px-6 md:grid-cols-[1.1fr_0.9fr]">
          <motion.div initial="hidden" animate="visible" variants={heroContainer}>
            <motion.p variants={slideInLeft} className="font-cursive text-2xl text-rose font-semibold mb-2">
              ♡ made with expertise, woven with care since 1990 ♡
            </motion.p>
            <motion.h1 variants={slideInLeft} className="mb-4 font-heading text-4xl font-bold tracking-tight text-charcoal md:text-5xl lg:text-6xl">
              Beautiful Fabrics. <br />
              <span className="italic font-normal text-rose">Mindful Manufacturing.</span>
            </motion.h1>
            <motion.p variants={slideInLeft} className="max-w-[48ch] text-base leading-relaxed text-charcoal-soft md:text-lg">
              Curated polyester, knitted, sportswear, and terry fabrics engineered to inspire your next garment collection. Directly from Ludhiana’s trusted manufacturer.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-7 flex flex-wrap items-center gap-3.5">
              <Button to="/products" variant="primary">Shop Fabric Catalogue</Button>
              <Button to="/contact" variant="outline">Request Bulk Quote</Button>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-6 border-t border-line/70 pt-6 text-xs font-semibold text-charcoal-soft">
              <span className="flex items-center gap-1.5"><span className="text-rose">🛡️</span> Thoughtfully Crafted</span>
              <span className="flex items-center gap-1.5"><span className="text-sage">🌱</span> Batch-to-Batch Quality</span>
              <span className="flex items-center gap-1.5"><span className="text-rose">🤝</span> Direct Factory Supply</span>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideInRight}
            className="relative overflow-hidden rounded-3xl border border-line bg-cream-card p-3 shadow-md group"
          >
            <div className="overflow-hidden rounded-2xl aspect-4/3 sm:aspect-square">
              <motion.img
                src="/images/company/fabric-rolls-storage.jpg"
                alt="Rolls of finished fabric stacked in the K.K Knitwear Club warehouse"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Floating SoftLoop badge overlay */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, type: 'spring' }}
              className="absolute bottom-6 right-6 rounded-2xl border border-line/80 bg-cream-card/95 p-4 shadow-lg backdrop-blur-xs text-center"
            >
              <p className="font-cursive text-xl font-bold text-rose">keep creating ♡</p>
              <p className="text-[0.7rem] font-bold uppercase tracking-wider text-charcoal-soft">35+ Years Fabric Trust</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Shop by Category Icon Tiles (SoftLoop Studio exact style) */}
      <section className="bg-cream-card py-12 border-b border-line">
        <div className="mx-auto max-w-[1160px] px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6"
          >
            {CATEGORY_TILES.map((tile) => (
              <Link key={tile.name} to={tile.to}>
                <motion.div
                  variants={popIn}
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col items-center rounded-2xl border border-line bg-cream p-5 text-center transition-colors hover:border-rose/40 hover:bg-rose-light/20"
                >
                  <span className="mb-2 text-2xl">{tile.icon}</span>
                  <span className="font-heading text-sm font-bold tracking-tight text-charcoal">{tile.name}</span>
                  <span className="mt-1 text-[0.7rem] text-charcoal-soft font-semibold group-hover:text-rose">{tile.label} &rarr;</span>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Favorites (SoftLoop reference section) */}
      <section className="bg-white py-16 border-b border-line">
        <div className="mx-auto max-w-[1160px] px-6">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeUp}>
              <p className="font-cursive text-2xl text-rose font-semibold">Featured Favorites ♡</p>
              <h2 className="font-heading text-3xl font-bold text-charcoal">Curated Fabric Lines</h2>
            </motion.div>
            <Link to="/products" className="text-xs font-bold uppercase tracking-wider text-rose hover:text-rose-dark transition-colors">
              VIEW ALL FAVORITES &rarr;
            </Link>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {FEATURED_PRODUCTS.map((product) => (
              <ProductCard
                key={product.id || product.name}
                product={product}
                onSelectProduct={(prod) => setSelectedProduct(prod)}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Start your making journey Banner (SoftLoop exact layout) */}
      <section className="bg-cream py-16 border-b border-line">
        <div className="mx-auto max-w-[1160px] px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            className="overflow-hidden rounded-3xl border border-rose/20 bg-linear-to-r from-rose-light/50 via-cream-card to-rose-light/30 p-8 md:p-10 shadow-sm"
          >
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[0.8fr_1.2fr_1fr]">
              <div className="overflow-hidden rounded-2xl shadow-xs aspect-4/3">
                <img
                  src="/images/company/office-desk-swatches.jpg"
                  alt="Fabric swatches on office desk"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>

              <div>
                <p className="font-cursive text-2xl text-rose font-semibold mb-1">New to ordering bulk fabric? ♡</p>
                <h3 className="font-heading text-2xl font-bold text-charcoal md:text-3xl">Start your making journey</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-soft">
                  Everything you need to learn, test, and feel proud of. Request sample swatches or speak directly with our manufacturing experts.
                </p>
                <div className="mt-5">
                  <Button to="/contact" variant="primary">SHOP BEGINNER KITS &amp; SAMPLES</Button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 border-t border-rose/15 pt-6 lg:border-t-0 lg:border-l lg:pl-8 lg:pt-0">
                <div className="flex flex-col items-center text-center p-2">
                  <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-full bg-white text-rose font-bold shadow-xs">✓</div>
                  <span className="text-xs font-bold text-charcoal">Easy to Follow</span>
                </div>
                <div className="flex flex-col items-center text-center p-2">
                  <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-full bg-white text-rose font-bold shadow-xs">✓</div>
                  <span className="text-xs font-bold text-charcoal">Quality Materials</span>
                </div>
                <div className="flex flex-col items-center text-center p-2">
                  <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-full bg-white text-rose font-bold shadow-xs">✓</div>
                  <span className="text-xs font-bold text-charcoal">Step-by-Step Specs</span>
                </div>
                <div className="flex flex-col items-center text-center p-2">
                  <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-full bg-white text-rose font-bold shadow-xs">♡</div>
                  <span className="text-xs font-bold text-charcoal">Direct Factory Price</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Good fibers. Thoughtful choices + Signature Color Palette (SoftLoop reference) */}
      <section className="bg-white py-16 border-b border-line">
        <div className="mx-auto max-w-[1160px] px-6">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.1fr_0.9fr_1fr]">
            {/* Left box */}
            <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={slideInLeft} className="rounded-3xl border border-line bg-cream p-8">
              <p className="font-cursive text-2xl text-rose font-semibold mb-1">Good fibers. ♡</p>
              <h3 className="font-heading text-2xl font-bold text-charcoal">Thoughtful choices.</h3>
              <p className="mt-3 text-sm leading-relaxed text-charcoal-soft">
                We believe in consistent weight, ethical sourcing, and fabrics that are kind to garment makers and long-lasting for wearers.
              </p>
              <div className="mt-6">
                <Button to="/about" variant="outline">OUR FIBER STORY &rarr;</Button>
              </div>
            </motion.div>

            {/* Center photo */}
            <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={popIn} className="overflow-hidden rounded-3xl shadow-md aspect-4/3">
              <img
                src="/images/company/knitting-machinery.jpg"
                alt="Knitting machinery at factory floor"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </motion.div>

            {/* Right signature palette */}
            <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={slideInRight} className="rounded-3xl border border-line bg-cream-card p-8">
              <h3 className="font-heading text-xl font-bold text-charcoal mb-1">Our Signature Palette</h3>
              <p className="text-xs text-charcoal-soft mb-6">Calming, versatile tones inspired by nature. Custom dyeing available for large runs.</p>

              <div className="grid grid-cols-3 gap-4 text-center">
                {SIGNATURE_PALETTE.map((pal) => (
                  <div key={pal.name} className="flex flex-col items-center">
                    <span
                      className="mb-1.5 h-8 w-8 rounded-full border border-black/10 shadow-xs"
                      style={{ backgroundColor: pal.color }}
                    />
                    <span className="text-[0.72rem] font-bold text-charcoal">{pal.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Loved by our maker community (Testimonials + Social Tile) */}
      <section className="bg-cream py-16 border-b border-line">
        <div className="mx-auto max-w-[1160px] px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeUp} className="text-center mb-10">
            <p className="font-cursive text-2xl text-rose font-semibold">Loved by our maker community ♡</p>
            <h2 className="font-heading text-3xl font-bold text-charcoal">Trusted by Garment Manufacturers</h2>
          </motion.div>

          <TestimonialCarousel testimonials={TESTIMONIALS} />

          <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeUp} className="mt-12 rounded-3xl bg-sage py-8 px-6 text-center text-white shadow-xs">
            <h3 className="font-heading text-2xl font-bold text-white mb-2">Share your orders with us! ♡</h3>
            <p className="text-xs text-sage-light max-w-md mx-auto mb-4">
              Mention K.K Knitwear Club or tag @kkknitwearclub for a chance to be featured in our seasonal fabric highlights.
            </p>
            <div className="flex justify-center gap-4 text-sm font-semibold text-white">
              <span>📷 Instagram</span>
              <span>💼 LinkedIn</span>
              <span>🏬 IndiaMART</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tutorials & Inspiration / Fabric Guides */}
      <section className="bg-white py-16 border-b border-line">
        <div className="mx-auto max-w-[1160px] px-6">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeUp}>
              <p className="font-cursive text-2xl text-rose font-semibold">Tutorials &amp; Inspiration ♡</p>
              <h2 className="font-heading text-3xl font-bold text-charcoal">Fabric Guides for Manufacturers</h2>
            </motion.div>
            <Link to="/products" className="text-xs font-bold uppercase tracking-wider text-rose hover:text-rose-dark transition-colors">
              READ ALL ARTICLES &rarr;
            </Link>
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={staggerContainer} className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <motion.article variants={popIn} className="rounded-3xl border border-line bg-cream overflow-hidden">
              <div className="aspect-16/10 overflow-hidden">
                <img src="/images/products/polyester-fabric.jpg" alt="Polyester fabric GSM guide" className="h-full w-full object-cover" loading="lazy" />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-lg font-bold text-charcoal mb-2">Understanding Fabric Weights (GSM)</h3>
                <p className="text-xs text-charcoal-soft leading-relaxed mb-4">
                  A simple guide to choosing between 140 GSM plain polyester, heavy knit, and activewear mesh.
                </p>
                <span className="text-xs font-bold text-rose">Read More &rarr;</span>
              </div>
            </motion.article>

            <motion.article variants={popIn} className="rounded-3xl border border-line bg-cream overflow-hidden">
              <div className="aspect-16/10 overflow-hidden">
                <img src="/images/products/sportswear-fabric.jpg" alt="Sportswear activewear fabric" className="h-full w-full object-cover" loading="lazy" />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-lg font-bold text-charcoal mb-2">5 Best Fabrics for Activewear &amp; Tracksuits</h3>
                <p className="text-xs text-charcoal-soft leading-relaxed mb-4">
                  Breathable dot knit, Bon Patti, and moisture-wicking synthetic blends explained.
                </p>
                <span className="text-xs font-bold text-rose">Read More &rarr;</span>
              </div>
            </motion.article>

            <motion.article variants={popIn} className="rounded-3xl border border-line bg-cream overflow-hidden">
              <div className="aspect-16/10 overflow-hidden">
                <img src="/images/products/terry-fabric.jpg" alt="Terry fabric swatches" className="h-full w-full object-cover" loading="lazy" />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-lg font-bold text-charcoal mb-2">Terry &amp; Knitted Lining Fabrics</h3>
                <p className="text-xs text-charcoal-soft leading-relaxed mb-4">
                  How to pick soft-hand linings for baby blankets, sweaters, and winter jacket linings.
                </p>
                <span className="text-xs font-bold text-rose">Read More &rarr;</span>
              </div>
            </motion.article>
          </motion.div>
        </div>
      </section>

      {/* Frequently Asked Questions + Newsletter / Enquiry Banner */}
      <section className="bg-cream py-16">
        <div className="mx-auto max-w-[1160px] px-6">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1fr]">
            {/* FAQ Left */}
            <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={slideInLeft}>
              <h3 className="font-heading text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h3>
              <div className="space-y-4">
                {FAQS.map((faq, idx) => (
                  <div key={faq.q} className="rounded-2xl border border-line bg-white p-5 transition-all">
                    <button
                      type="button"
                      onClick={() => toggleFaq(idx)}
                      className="flex w-full items-center justify-between text-left font-bold text-charcoal text-sm cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      <span className="ml-2 font-bold text-rose">{openFaq === idx ? '−' : '+'}</span>
                    </button>
                    <AnimatePresence>
                      {openFaq === idx && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-3 text-xs leading-relaxed text-charcoal-soft border-t border-line/50 pt-3"
                        >
                          {faq.a}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Let's stay in touch Banner Right */}
            <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={slideInRight} className="rounded-3xl border border-rose/30 bg-rose p-8 md:p-10 text-white flex flex-col justify-between shadow-md">
              <div>
                <p className="font-cursive text-3xl text-rose-light font-semibold mb-2">Let&rsquo;s stay in touch! ♡</p>
                <h3 className="font-heading text-2xl font-bold text-white mb-3">Get Custom Order Updates &amp; Sample Swatches</h3>
                <p className="text-xs text-rose-light leading-relaxed mb-6">
                  Be the first to know about new fabric lines, seasonal colors, and factory-direct volume discounts.
                </p>
              </div>

              <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full rounded-full bg-white px-5 py-3 text-sm text-charcoal placeholder:text-charcoal-soft/60 focus:outline-none"
                />
                <button
                  type="submit"
                  className="w-full cursor-pointer rounded-full bg-charcoal py-3 text-center text-xs font-bold uppercase tracking-wider text-white shadow-xs transition-transform hover:scale-102 active:scale-98"
                >
                  JOIN THE CLUB &rarr;
                </button>
                <p className="text-[0.7rem] text-rose-light text-center">No spam, just direct fabric updates.</p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  )
}
