import { motion } from 'framer-motion'
import { useState } from 'react'
import { getColorHex } from '../lib/colorUtils.js'
import { fadeUp } from '../lib/motion.js'

const MAX_SWATCHES = 5

export default function ProductCard({
  product,
  name,
  aka,
  description,
  flagship,
  image,
  imageAlt,
  gsm,
  colors,
  ctaLabel = 'Quick View & Specs',
  onSelectProduct,
}) {
  const [isSaved, setIsSaved] = useState(false)

  // Use product object if provided, fallback to individual props
  const productData = product || {
    name,
    aka,
    description,
    flagship,
    image,
    imageAlt,
    gsm,
    colors,
  }

  const swatches = (productData.colors || []).slice(0, MAX_SWATCHES)
  const extraColorCount = (productData.colors?.length || 0) - swatches.length

  const handleCardClick = () => {
    if (onSelectProduct) {
      onSelectProduct(productData)
    }
  }

  const handleCardKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleCardClick()
    }
  }

  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -8, boxShadow: '0 20px 25px -5px rgba(0,0,0,0.08), 0 8px 10px -6px rgba(0,0,0,0.03)' }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-line bg-cream-card transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
      role="button"
      tabIndex={0}
      aria-label={`${productData.name} — view full specifications`}
      onClick={handleCardClick}
      onKeyDown={handleCardKeyDown}
    >
      <div className="relative aspect-4/3 overflow-hidden border-b border-line bg-cream-deep">
        {productData.image ? (
          <motion.img
            src={productData.image}
            alt={productData.imageAlt || productData.name}
            whileHover={{ scale: 1.07 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center p-3 text-center text-sm text-charcoal-soft">
            {productData.name}
          </div>
        )}

        {/* GSM badge pill overlay */}
        {productData.gsm && (
          <span className="absolute bottom-3 left-3 rounded-full bg-charcoal/80 px-2.5 py-1 text-[0.65rem] font-bold text-white backdrop-blur-xs shadow-xs">
            {productData.gsm.split('(')[0]}
          </span>
        )}

        {/* Favorite heart icon overlay (SoftLoop style) */}
        <button
          type="button"
          aria-label="Save to favorites"
          onClick={(e) => {
            e.stopPropagation()
            setIsSaved(!isSaved)
          }}
          className={`absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full shadow-xs backdrop-blur-xs transition-transform hover:scale-110 active:scale-95 cursor-pointer ${
            isSaved ? 'bg-rose text-white' : 'bg-white/90 text-rose'
          }`}
        >
          <span className="text-xs font-bold">{isSaved ? '♥' : '♡'}</span>
        </button>
      </div>

      <div className="flex flex-1 flex-col p-6">
        {/* Color swatches preview (SoftLoop style) */}
        {swatches.length > 0 && (
          <div className="mb-2.5 flex items-center gap-1.5">
            {swatches.map((colorName) => (
              <span
                key={colorName}
                className="h-3 w-3 rounded-full border border-black/10"
                style={{ backgroundColor: getColorHex(colorName) }}
                title={colorName}
              />
            ))}
            {extraColorCount > 0 && (
              <span className="ml-1 text-[0.7rem] text-charcoal-soft font-medium">
                +{extraColorCount} more
              </span>
            )}
          </div>
        )}

        {productData.flagship && (
          <span className="mb-2 w-fit rounded-full bg-rose/15 px-2.5 py-0.5 text-[0.68rem] font-bold tracking-wider text-rose-dark uppercase">
            ★ Best Seller &middot; Flagship
          </span>
        )}

        <h3 className="mb-1 text-lg font-bold text-charcoal group-hover:text-rose-dark transition-colors">
          {productData.name}
        </h3>
        {productData.aka && <p className="mb-2 text-xs text-charcoal-soft italic">{productData.aka}</p>}
        <p className="flex-1 text-sm leading-relaxed text-charcoal-soft line-clamp-3">
          {productData.description}
        </p>

        <div className="mt-4 flex items-center justify-between border-t border-line/60 pt-3">
          <span className="inline-flex items-center gap-1 text-xs font-bold text-rose group-hover:text-rose-dark transition-colors">
            <span>{ctaLabel}</span>
            <span>&rarr;</span>
          </span>
          <span className="rounded-full bg-cream px-2.5 py-1 text-[0.68rem] font-semibold text-charcoal-soft border border-line">
            View Details
          </span>
        </div>
      </div>
    </motion.article>
  )
}
