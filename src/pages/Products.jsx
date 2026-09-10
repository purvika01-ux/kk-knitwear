import { motion } from 'framer-motion'
import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import Button from '../components/Button.jsx'
import ProductCard from '../components/ProductCard.jsx'
import ProductDetailModal from '../components/ProductDetailModal.jsx'
import { PRODUCT_CATEGORIES } from '../data/productCategories.js'
import { fadeUp, staggerContainer, viewportOnce } from '../lib/motion.js'
import useDocumentTitle from '../lib/useDocumentTitle.js'

const FILTER_CATEGORIES = [
  { id: 'all', label: 'All Fabrics' },
  { id: 'polyester', label: 'Polyester' },
  { id: 'knitted', label: 'Knitted' },
  { id: 'sportswear', label: 'Sportswear & Mesh' },
  { id: 'winter', label: 'Baby Blanket & Fleece' },
  { id: 'terry', label: 'Terry' },
  { id: 'mens', label: 'Mens Wear' },
  // { id: 'specialty', label: 'Specialty & Furnishing' },
]

export default function Products() {
  useDocumentTitle('Our Fabric Collection — K.K Knitwear Club')

  const [selectedProduct, setSelectedProduct] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchParams, setSearchParams] = useSearchParams()

  // Filter state lives in the URL so category tiles can deep-link into the catalog
  const categoryParam = searchParams.get('category')
  const activeFilter = FILTER_CATEGORIES.some((cat) => cat.id === categoryParam)
    ? categoryParam
    : 'all'

  const setActiveFilter = (filterId) => {
    setSearchParams(
      (prev) => {
        const next = new URLSearchParams(prev)
        if (filterId === 'all') {
          next.delete('category')
        } else {
          next.set('category', filterId)
        }
        return next
      },
      { replace: true },
    )
  }

  // Filter products based on active tab and search query
  const filteredProducts = PRODUCT_CATEGORIES.filter((prod) => {
    const matchesSearch =
      searchQuery === '' ||
      prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (prod.material && prod.material.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (prod.gsm && prod.gsm.toLowerCase().includes(searchQuery.toLowerCase()))

    if (!matchesSearch) return false

    if (activeFilter === 'all') return true
    if (activeFilter === 'polyester') return prod.id.includes('polyester')
    if (activeFilter === 'knitted') return prod.id.includes('knit') || prod.id.includes('bon-patti')
    if (activeFilter === 'sportswear') return prod.id.includes('sportswear') || prod.id.includes('mesh') || prod.id.includes('dot-knit')
    if (activeFilter === 'winter') return prod.id.includes('baby-blanket')
    if (activeFilter === 'terry') return prod.id.includes('terry')
    if (activeFilter === 'mens') return prod.id.includes('mens')
    //if (activeFilter === 'specialty') return prod.id.includes('home') || prod.id.includes('foma') || prod.id.includes('foams') || prod.id.includes('chair') || prod.id.includes('surplus')

    return true
  })

  return (
    <>
      {/* Hero Header */}
      <section className="border-b border-line bg-linear-to-b from-cream-deep/60 to-cream py-14">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mx-auto max-w-[1160px] px-6"
        >
          <p className="font-cursive text-2xl text-rose font-semibold mt-2">Explore our catalog ♡</p>
          <h1 className="mt-1 font-heading text-4xl font-bold tracking-tight text-charcoal">Our Fabric Collection</h1>
          <p className="mt-3 max-w-[65ch] text-sm leading-relaxed text-charcoal-soft">
            K.K Knitwear Club manufactures the following fabric categories. Click on any product to view full technical specifications, GSM ranges, roll widths, and order details.
          </p>
        </motion.div>
      </section>

      {/* Filter & Search Bar */}
      <section className="sticky top-[80px] z-30 border-b border-line bg-cream/95 py-4 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1160px] flex-col gap-4 px-6 md:flex-row md:items-center md:justify-between">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-hide">
            {FILTER_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveFilter(cat.id)}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-xs font-semibold transition-all cursor-pointer ${
                  activeFilter === cat.id
                    ? 'bg-rose text-white shadow-xs'
                    : 'bg-white text-charcoal hover:bg-rose-light hover:text-rose-dark border border-line'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search fabric, GSM, material..."
              className="w-full rounded-full border border-line bg-white px-4 py-2 pl-9 text-xs text-charcoal placeholder:text-charcoal-soft/60 focus:border-rose focus:ring-2 focus:ring-rose/20 focus:outline-none"
            />
            <span className="absolute left-3 top-2.5 text-xs text-charcoal-soft">🔍</span>
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-2 text-xs text-charcoal-soft hover:text-charcoal cursor-pointer"
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="bg-white py-16 border-b border-line">
        <div className="mx-auto max-w-[1160px] px-6">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <motion.div initial="hidden" animate="visible" variants={fadeUp}>
              <p className="font-cursive text-xl text-rose font-semibold">Full catalog ♡</p>
              <h2 className="font-heading text-2xl font-bold text-charcoal">
                Showing {filteredProducts.length} of {PRODUCT_CATEGORIES.length} Fabric Lines
              </h2>
            </motion.div>
            <p className="text-xs font-semibold text-charcoal-soft">
              💡 Tip: Click any fabric card to open full specifications &amp; technical details.
            </p>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="rounded-3xl border border-line bg-cream p-12 text-center">
              <span className="text-4xl mb-3 block">🧵</span>
              <h3 className="font-heading text-xl font-bold text-charcoal">No fabrics match your search</h3>
              <p className="mt-2 text-xs text-charcoal-soft">Try searching for a different keyword like "polyester", "mesh", or "140 GSM".</p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('')
                  setActiveFilter('all')
                }}
                className="mt-4 rounded-full bg-rose px-5 py-2 text-xs font-bold text-white shadow-xs"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {filteredProducts.map((category) => (
                <ProductCard
                  key={category.id || category.name}
                  product={category}
                  onSelectProduct={(prod) => setSelectedProduct(prod)}
                />
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Signature Palette Banner */}
      <section className="bg-cream py-12 border-b border-line">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="mx-auto max-w-[1160px] px-6"
        >
          <div className="rounded-3xl border border-rose/20 bg-rose-light/30 p-8 md:p-10 text-center">
            <p className="font-cursive text-2xl text-rose font-semibold mb-1">Custom dyeing available ♡</p>
            <h3 className="font-heading text-2xl font-bold text-charcoal mb-3">Need a specific color or GSM?</h3>
            <p className="mx-auto max-w-lg text-sm text-charcoal-soft leading-relaxed mb-6">
              We manufacture to order &mdash; send us your exact specification including shade card, weight (GSM), width, and quantity. We&rsquo;ll provide a quote and sample timeline.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['#EAE0D5', '#E0B0A8', '#B86B5C', '#5F7A65', '#3B7070', '#2C2623'].map((color) => (
                <span
                  key={color}
                  className="h-7 w-7 rounded-full border border-black/10 shadow-xs"
                  style={{ backgroundColor: color }}
                />
              ))}
              <span className="ml-2 flex items-center text-xs font-bold text-charcoal-soft">+ Any custom shade</span>
            </div>
          </div>
        </motion.div>
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
          <p className="font-cursive text-2xl text-rose-light font-semibold mb-2">Don&rsquo;t see what you need? ♡</p>
          <h2 className="font-heading text-3xl font-bold text-white">We manufacture to order</h2>
          <p className="mx-auto mt-3 max-w-xl text-xs text-rose-light leading-relaxed">
            Get in touch to discuss specification, quantity, and pricing for your requirement. Sample swatches available on request.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3.5">
            <Button to="/contact" variant="secondary">Get in Touch &rarr;</Button>
            <Button to="/gallery" variant="secondary">Factory Gallery</Button>
          </div>
        </motion.div>
      </section>

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  )
}
