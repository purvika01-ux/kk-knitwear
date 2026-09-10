import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Button from '../components/Button.jsx'
import { fadeUp, popIn, staggerContainer, viewportOnce } from '../lib/motion.js'
import useDocumentTitle from '../lib/useDocumentTitle.js'

const GALLERY_ITEMS = [
  {
    src: '/images/company/signboard.jpg',
    caption: 'K.K Knitwear Club signboard, factory entrance',
  },
  {
    src: '/images/company/knitting-machinery.jpg',
    caption: 'Knitting machinery in operation',
  },
  {
    src: '/images/company/office-desk-swatches.jpg',
    caption: 'Fabric swatches at the office desk',
  },
  {
    src: '/images/company/fabric-rolls-storage.jpg',
    caption: 'Fabric rolls in storage',
  },
  {
    src: '/images/products/polyester-fabric.jpg',
    caption: '140 GSM plain polyester fabric',
  },
  {
    src: '/images/products/knitted-fabric.jpg',
    caption: 'Knitted fabric close-up',
  },
  {
    src: '/images/products/sportswear-fabric.jpg',
    caption: 'Sportswear fabric close-up',
  },
  {
    src: '/images/products/terry-fabric.jpg',
    caption: 'Terry fabric close-up',
  },
  {
    src: '/images/products/mens-lower.jpg',
    caption: 'Bon Patti fabric used in a tracksuit lower',
  },
  {
    src: '/images/products/home-furnishing.jpg',
    caption: 'Pillow cover / home furnishing fabric',
  },
  {
    src: '/images/products/foma-fabric.jpg',
    caption: 'Foma fabric close-up',
  },
  {
    src: '/images/products/surplus-fabric.webp',
    caption: 'Surplus polyester fabric',
  },
  {
    src: '/images/products/bon-patti.jpg',
    caption: 'Bon Patti fabric',
  },
  {
    src: '/images/products/dot-knit-fabric.jpg',
    caption: 'Dot knit fabric close-up',
  },
]

export default function Gallery() {
  useDocumentTitle('Factory Gallery — K.K Knitwear Club')

  return (
    <>
      <section className="border-b border-line bg-linear-to-b from-cream-deep/60 to-cream py-14">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mx-auto max-w-[1160px] px-6"
        >
          <p className="text-sm text-charcoal-soft">
            <Link to="/" className="font-semibold text-charcoal hover:text-rose transition-colors">Home</Link> / Gallery
          </p>
          <p className="font-cursive text-2xl text-rose font-semibold mt-3">A look inside our world ♡</p>
          <h1 className="mt-1 font-heading text-4xl font-bold tracking-tight text-charcoal">Factory &amp; Product Gallery</h1>
          <p className="mt-3 max-w-[65ch] text-sm leading-relaxed text-charcoal-soft">
            A look at our factory floor, fabric stock, and finished products. Every image is from our facility in Ludhiana.
          </p>
        </motion.div>
      </section>

      <section className="bg-white py-16 border-b border-line">
        <div className="mx-auto max-w-[1160px] px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4"
          >
            {GALLERY_ITEMS.map((item) => (
              <motion.figure
                key={item.src}
                variants={popIn}
                whileHover={{ y: -6, boxShadow: '0 16px 24px -6px rgba(0,0,0,0.08)' }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="group overflow-hidden rounded-3xl border border-line bg-cream-card transition-colors"
              >
                <div className="aspect-square overflow-hidden bg-cream-deep">
                  <motion.img
                    src={item.src}
                    alt={item.caption}
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <figcaption className="border-t border-line p-3 text-xs font-bold text-charcoal-soft group-hover:text-charcoal transition-colors">
                  {item.caption}
                </figcaption>
              </motion.figure>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-rose py-16 text-center text-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="mx-auto max-w-[1160px] px-6"
        >
          <p className="font-cursive text-2xl text-rose-light font-semibold mb-2">Want to see more? ♡</p>
          <h2 className="font-heading text-3xl font-bold text-white">Visit in person or request more photos</h2>
          <p className="mx-auto mt-3 max-w-xl text-xs text-rose-light leading-relaxed">
            Get in touch and we&rsquo;ll be happy to share more photos or arrange a visit to our facility.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3.5">
            <Button to="/contact" variant="secondary">Get in Touch &rarr;</Button>
          </div>
        </motion.div>
      </section>
    </>
  )
}
