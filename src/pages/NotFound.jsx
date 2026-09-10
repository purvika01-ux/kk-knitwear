import { motion } from 'framer-motion'
import Button from '../components/Button.jsx'
import { fadeUp } from '../lib/motion.js'
import useDocumentTitle from '../lib/useDocumentTitle.js'

export default function NotFound() {
  useDocumentTitle('Page Not Found — K.K Knitwear Club')

  return (
    <section className="bg-linear-to-b from-cream-deep/60 to-cream py-24">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="mx-auto max-w-[1160px] px-6 text-center"
      >
        <p className="font-cursive text-2xl text-rose font-semibold">Oops &mdash; a dropped stitch ♡</p>
        <h1 className="mt-2 font-heading text-5xl font-bold tracking-tight text-charcoal">
          404 &middot; Page Not Found
        </h1>
        <p className="mx-auto mt-4 max-w-[55ch] text-sm leading-relaxed text-charcoal-soft">
          The page you&rsquo;re looking for doesn&rsquo;t exist or may have moved. Browse our fabric
          catalog or head back to the homepage &mdash; we&rsquo;re happy to help you find the right
          material.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3.5">
          <Button to="/">Back to Home</Button>
          <Button to="/products" variant="outline">Browse Fabrics</Button>
        </div>
      </motion.div>
    </section>
  )
}
