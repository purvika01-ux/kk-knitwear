import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getColorHex } from '../lib/colorUtils.js'

export default function ProductDetailModal({ product, onClose }) {
  const [isSaved, setIsSaved] = useState(false)

  // Close on ESC key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  // Prevent scroll when modal is open
  useEffect(() => {
    if (product) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [product])

  if (!product) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 bg-charcoal/60 backdrop-blur-sm"
          aria-hidden="true"
        />

        {/* Modal Dialog Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: 'spring', stiffness: 350, damping: 28 }}
          className="relative z-10 my-auto w-full max-w-4xl overflow-hidden rounded-3xl border border-line bg-cream-card shadow-2xl"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-product-title"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between border-b border-line bg-cream px-6 py-4">
            <div className="flex items-center gap-2">
              <span className="font-cursive text-xl text-rose font-bold">K.K Fabric Details ♡</span>
              {product.flagship && (
                <span className="rounded-full bg-rose/15 px-3 py-0.5 text-[0.7rem] font-bold text-rose-dark uppercase">
                  ★ Best Seller Flagship
                </span>
              )}
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

          <div className="max-h-[82vh] overflow-y-auto p-6 sm:p-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {/* Product Image Gallery Column */}
              <div className="flex flex-col gap-4">
                <div className="relative aspect-4/3 overflow-hidden rounded-2xl border border-line bg-cream-deep shadow-xs">
                  <img
                    src={product.image}
                    alt={product.imageAlt || product.name}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <button
                    type="button"
                    onClick={() => setIsSaved(!isSaved)}
                    className={`absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full shadow-md backdrop-blur-md transition-all cursor-pointer ${
                      isSaved ? 'bg-rose text-white scale-110' : 'bg-white/90 text-rose hover:scale-110'
                    }`}
                    aria-label="Save product to wishlist"
                  >
                    <span className="text-base font-bold">{isSaved ? '♥' : '♡'}</span>
                  </button>
                </div>

                {/* Color Swatch Options */}
                {product.colors && (
                  <div className="rounded-2xl border border-line bg-cream p-4">
                    <p className="mb-2 text-xs font-bold uppercase tracking-wider text-charcoal">
                      Available Shades &amp; Dyeing
                    </p>
                    <div className="flex flex-wrap items-center gap-2">
                      {product.colors.map((colorName) => (
                        <span
                          key={colorName}
                          className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-3 py-1 text-xs font-medium text-charcoal shadow-2xs"
                        >
                          <span
                            className="h-3 w-3 rounded-full border border-black/20 shadow-2xs shrink-0"
                            style={{ backgroundColor: getColorHex(colorName) }}
                          />
                          {colorName}
                        </span>
                      ))}
                    </div>
                    <p className="mt-2 text-[0.7rem] text-charcoal-soft italic">
                      * Custom shade card dyeing available for bulk manufacturing orders.
                    </p>
                  </div>
                )}

                {/* Factory Trust Badge */}
                <div className="rounded-2xl border border-rose/20 bg-rose-light/20 p-4 text-xs text-charcoal-soft leading-relaxed">
                  <p className="font-bold text-rose-dark mb-1">🏭 Ludhiana Mill Direct</p>
                  <p>
                    Manufactured at Street No-1, Kabir Nagar, Ludhiana, Punjab. GST Registered (03ABLPJ0347H1ZZ). Batch quality checked before delivery.
                  </p>
                </div>
              </div>

              {/* Product Info & Specs Column */}
              <div className="flex flex-col">
                <p className="text-xs font-semibold uppercase tracking-wider text-rose">
                  Category Specs &middot; K.K Knitwear Club
                </p>
                <h2 id="modal-product-title" className="mt-1 font-heading text-3xl font-bold text-charcoal">
                  {product.name}
                </h2>
                {product.aka && <p className="mt-1 text-xs font-medium italic text-charcoal-soft">{product.aka}</p>}

                <p className="mt-4 text-sm leading-relaxed text-charcoal-soft">
                  {product.description}
                </p>

                {/* Technical Specifications Table */}
                <div className="mt-6 overflow-hidden rounded-2xl border border-line bg-white shadow-2xs">
                  <div className="bg-cream px-4 py-2.5 border-b border-line text-xs font-bold uppercase tracking-wider text-charcoal">
                    Technical Specifications
                  </div>
                  <dl className="divide-y divide-line text-xs">
                    {product.gsm && (
                      <div className="grid grid-cols-3 px-4 py-2.5">
                        <dt className="font-semibold text-charcoal-soft">Fabric Weight</dt>
                        <dd className="col-span-2 font-bold text-charcoal">{product.gsm}</dd>
                      </div>
                    )}
                    {product.material && (
                      <div className="grid grid-cols-3 px-4 py-2.5 bg-cream/30">
                        <dt className="font-semibold text-charcoal-soft">Material</dt>
                        <dd className="col-span-2 font-bold text-charcoal">{product.material}</dd>
                      </div>
                    )}
                    {product.pattern && (
                      <div className="grid grid-cols-3 px-4 py-2.5">
                        <dt className="font-semibold text-charcoal-soft">Pattern / Weave</dt>
                        <dd className="col-span-2 font-bold text-charcoal">{product.pattern}</dd>
                      </div>
                    )}
                    {product.width && (
                      <div className="grid grid-cols-3 px-4 py-2.5 bg-cream/30">
                        <dt className="font-semibold text-charcoal-soft">Roll Width</dt>
                        <dd className="col-span-2 font-bold text-charcoal">{product.width}</dd>
                      </div>
                    )}
                    {product.moq && (
                      <div className="grid grid-cols-3 px-4 py-2.5">
                        <dt className="font-semibold text-charcoal-soft">Min Order (MOQ)</dt>
                        <dd className="col-span-2 font-bold text-rose-dark">{product.moq}</dd>
                      </div>
                    )}
                  </dl>
                </div>

                {/* Key Features */}
                {product.features && (
                  <div className="mt-6">
                    <h4 className="mb-2 text-xs font-bold uppercase tracking-wider text-charcoal">Key Performance Features</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {product.features.map((feat) => (
                        <span key={feat} className="rounded-lg bg-sage-light/60 px-2.5 py-1 text-xs font-semibold text-sage-dark">
                          ✓ {feat}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Recommended Applications */}
                {product.applications && (
                  <div className="mt-5">
                    <h4 className="mb-2 text-xs font-bold uppercase tracking-wider text-charcoal">Recommended Garment Uses</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {product.applications.map((app) => (
                        <span key={app} className="rounded-lg border border-line bg-cream px-2.5 py-1 text-xs font-medium text-charcoal">
                          • {app}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Action Buttons Footer */}
                <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-line pt-6">
                  <Link
                    to={`/contact?product=${encodeURIComponent(product.name)}`}
                    onClick={onClose}
                    className="flex-1 rounded-full bg-rose px-6 py-3 text-center text-xs font-bold uppercase tracking-wider text-white shadow-xs transition-transform hover:bg-rose-dark hover:scale-102 active:scale-98"
                  >
                    Enquire for Bulk Quote &rarr;
                  </Link>
                  <a
                    href="tel:07942802251"
                    className="rounded-full border border-line bg-cream px-5 py-3 text-xs font-bold text-charcoal hover:bg-rose-light hover:text-rose-dark transition-colors"
                  >
                    📞 Call 07942802251
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
