import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-charcoal pt-14 pb-8 text-sky">
      <div className="mx-auto max-w-[1160px] px-6">
        <div className="grid grid-cols-1 gap-10 pb-10 md:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
          <div>
            <span className="font-heading text-2xl font-bold text-white">K.K Knitwear Club</span>
            <p className="font-cursive text-lg text-rose-light mt-1">
              ~ crafted with quality, woven with trust &amp; care ♡ ~
            </p>
            <p className="mt-3 text-xs leading-relaxed text-mist">
              Ludhiana&rsquo;s trusted fabric manufacturer since 1990. Specializing in polyester, knitted, sportswear, terry, and custom garment fabrics.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-bold tracking-widest text-white uppercase font-heading">
              Explore Catalog
            </h4>
            <ul className="space-y-2.5 text-xs text-mist">
              <li><Link to="/products" className="hover:text-white transition-colors">Polyester Fabric</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">Knitted Fabric</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">Sportswear Fabric</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">Terry Fabric</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">Mens Lower &amp; T-Shirts</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-bold tracking-widest text-white uppercase font-heading">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs text-mist">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">Full Catalog</Link></li>
              <li><Link to="/gallery" className="hover:text-white transition-colors">Factory Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact &amp; Enquiry</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-bold tracking-widest text-white uppercase font-heading">Factory &amp; Location</h4>
            <address className="text-xs not-italic leading-relaxed text-mist">
              Street No-1, K.K Knitwear Club,<br />
              Kabir Nagar, Sekhonwal Road,<br />
              Ludhiana &ndash; 141008, Punjab, India
              <br /><br />
              Phone: <a href="tel:07942802251" className="font-bold text-white hover:text-rose-light transition-colors">07942802251</a>
            </address>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between border-t border-white/10 pt-6 text-xs text-mist gap-4">
          <p>&copy; {new Date().getFullYear()} K.K Knitwear Club. All rights reserved. &middot; GST No. 03ABLPJ0347H1ZZ</p>
          <p className="font-cursive text-sm text-rose-light">made with love, woven one roll at a time ♡</p>
        </div>
      </div>
    </footer>
  )
}
