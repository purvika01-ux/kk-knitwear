// Accurate color hex mappings for fabric shades across K.K Knitwear Club products

const COLOR_HEX_MAP = {
  // Whites & Off-Whites
  'white': '#FFFFFF',
  'pure white': '#FFFFFF',
  'snow white': '#FAFAFA',
  'cream white': '#FFFDD0',
  'off white': '#F8F6F0',
  'ivory cream': '#FFF8DC',
  'oatmeal': '#EAE0D5',
  'oatmeal cream': '#E8DFD1',

  // Greys & Melange
  'melange grey': '#A8A9AD',
  'grey': '#808080',
  'dark grey melange': '#4A4E51',
  'charcoal': '#363636',
  'charcoal grey': '#333333',
  'dusk black': '#252323',
  'silver': '#C0C0C0',

  // Blacks
  'black': '#1A1A1A',
  'jet black': '#0D0D0D',
  'solid black': '#1A1A1A',

  // Reds, Rosewood & Maroons
  'red': '#DC2626',
  'bright red': '#EF4444',
  'royal red': '#B91C1C',
  'rosewood': '#B86B5C',
  'maroon': '#800020',
  'terracotta': '#C05C46',
  'blush': '#E0B0A8',
  'blush pink': '#F4B6C2',
  'pastel pink': '#F8C8DC',
  'peach': '#FFDAD0',

  // Blues
  'navy': '#1B2A4A',
  'navy blue': '#1B2A4A',
  'solid navy': '#1B2A4A',
  'royal blue': '#2563EB',
  'sky blue': '#87CEEB',
  'powder blue': '#B0E0E6',
  'teal': '#3B7070',
  'teal blue': '#2B6CB0',
  'teal green': '#0D9488',

  // Greens
  'sage': '#5F7A65',
  'sage green': '#5F7A65',
  'soft mint': '#A8E6CF',
  'olive green': '#556B2F',
  'dark olive': '#3B4727',
  'neon green': '#22C55E',

  // Yellows & Oranges
  'yellow': '#EAB308',
  'neon yellow': '#FACC15',
  'gold': '#D97706',
  'fluorescent orange': '#FF5722',
  'lavender': '#E6E6FA',
  'beige': '#F5F5DC',
  'taupe': '#8B8589',

  // Stripes & Mixed
  'black/white stripe': '#222222',
  'navy/red stripe': '#1B2A4A',
  'red/white': '#DC2626',
  'assorted mixed colors': '#B86B5C',
  'custom shade': '#B86B5C',
}

/**
 * Returns exact Hex color code matching the fabric shade name.
 * Fallbacks to warm terracotta rose if shade is custom or unlisted.
 */
export function getColorHex(colorName = '') {
  if (!colorName) return '#B86B5C'
  const key = colorName.trim().toLowerCase()

  if (COLOR_HEX_MAP[key]) {
    return COLOR_HEX_MAP[key]
  }

  // Partial matching fallbacks
  if (key.includes('white') || key.includes('ivory')) return '#F8F6F0'
  if (key.includes('black')) return '#1A1A1A'
  if (key.includes('navy')) return '#1B2A4A'
  if (key.includes('blue')) return '#2563EB'
  if (key.includes('red') || key.includes('maroon')) return '#B86B5C'
  if (key.includes('green') || key.includes('sage') || key.includes('mint')) return '#5F7A65'
  if (key.includes('grey') || key.includes('gray') || key.includes('charcoal')) return '#666666'
  if (key.includes('pink') || key.includes('blush') || key.includes('peach')) return '#E0B0A8'
  if (key.includes('yellow') || key.includes('gold')) return '#D97706'

  return '#B86B5C'
}
