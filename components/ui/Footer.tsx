import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-spa-darker border-t border-gold-500/20">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex items-center justify-center">
                <span className="text-spa-darker font-serif font-bold">R</span>
              </div>
              <h3 className="text-xl font-serif font-bold text-white">Royal Thai Spa</h3>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              San Francisco&apos;s premier wellness destination for traditional and contemporary massage therapies.
            </p>
            <p className="text-gold-500 font-serif italic">Renew. Recover. Relax.</p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Massage</h4>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-gray-400 hover:text-gold-500 transition-colors text-sm">Thai Massage</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-gold-500 transition-colors text-sm">Deep Tissue</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-gold-500 transition-colors text-sm">Aromatherapy</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-gold-500 transition-colors text-sm">Foot Reflexology</Link></li>
            </ul>
          </div>

          {/* Wellness */}
          <div>
            <h4 className="text-white font-semibold mb-4">Wellness</h4>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-gray-400 hover:text-gold-500 transition-colors text-sm">Cryo T Shock</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-gold-500 transition-colors text-sm">Infrared Sauna</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-gold-500 transition-colors text-sm">Red Light Therapy</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-gold-500 transition-colors text-sm">Cold Plunge</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="text-gray-400">
                <span className="block text-gold-500 font-medium">Address</span>
                685 N. Point St.<br />
                San Francisco, CA 94133<br />
                <span className="text-xs">(Fisherman&apos;s Wharf Marriott)</span>
              </li>
              <li>
                <span className="block text-gold-500 font-medium">Phone</span>
                <a href="tel:+14155004321" className="text-gray-400 hover:text-white transition-colors">(415) 500-4321</a>
              </li>
              <li>
                <span className="block text-gold-500 font-medium">Text</span>
                <a href="sms:+14158942299" className="text-gray-400 hover:text-white transition-colors">(415) 894-2299</a>
              </li>
              <li className="text-gray-400">
                <span className="block text-gold-500 font-medium">Hours</span>
                Mon-Thu: 10AM - 9PM<br />
                Fri-Sun: 10AM - 10PM
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-12 pt-8 border-t border-gold-500/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex space-x-6">
            <a href="https://www.facebook.com/royalthaispa/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold-500 transition-colors" aria-label="Facebook">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5L14.17.5C10.24.5,9.5,3.44,9.5,5.32v2.15H7v4h2.5v12h5v-12h3.85l.42-4Z"/></svg>
            </a>
            <a href="https://www.instagram.com/sfroyalthaispa/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold-500 transition-colors" aria-label="Instagram">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12,2.16c3.2,0,3.58.01,4.85.07,1.17.05,1.8.25,2.23.41.56.22.96.48,1.38.9s.68.82.9,1.38c.16.42.36,1.06.41,2.23.06,1.27.07,1.65.07,4.85s-.01,3.58-.07,4.85c-.05,1.17-.25,1.8-.41,2.23-.22.56-.48.96-.9,1.38s-.82.68-1.38.9c-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9s-.68-.82-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38s.82-.68,1.38-.9c.42-.16,1.06-.36,2.23-.41,1.27-.06,1.65-.07,4.85-.07M12,0C8.74,0,8.33.01,7.05.07,5.78.13,4.9.33,4.14.63c-.78.3-1.45.71-2.11,1.38S.93,3.36.63,4.14C.33,4.9.13,5.78.07,7.05.01,8.33,0,8.74,0,12s.01,3.67.07,4.95c.06,1.27.26,2.15.56,2.91.3.78.71,1.45,1.38,2.11s1.33,1.08,2.11,1.38c.76.3,1.64.5,2.91.56,1.28.06,1.69.07,4.95.07s3.67-.01,4.95-.07c1.27-.06,2.15-.26,2.91-.56.78-.3,1.45-.71,2.11-1.38s1.08-1.33,1.38-2.11c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91-.3-.78-.71-1.45-1.38-2.11s-1.33-1.08-2.11-1.38c-.76-.3-1.64-.5-2.91-.56C15.67.01,15.26,0,12,0Zm0,5.84A6.16,6.16,0,1,0,18.16,12,6.16,6.16,0,0,0,12,5.84ZM12,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16ZM19.85,5.59a1.44,1.44,0,1,1-1.44-1.44A1.44,1.44,0,0,1,19.85,5.59Z"/></svg>
            </a>
            <a href="https://www.yelp.com/biz/royal-thai-spa-san-francisco" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold-500 transition-colors" aria-label="Yelp">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.14,11.38l-2.87-.69a.52.52,0,0,1-.27-.84l5.56-6.31a.53.53,0,0,1,.95.24l-.48,7a.52.52,0,0,1-.67.46l-2.22-.53Zm-1.49,1.49-.69,2.87a.52.52,0,0,1-.84.27L2.81,10.45a.53.53,0,0,1,.24-.95l7,.48a.52.52,0,0,1,.46.67l-.53,2.22Zm1.49,1.49,2.87.69a.52.52,0,0,1,.27.84l-5.56,6.31a.53.53,0,0,1-.95-.24l.48-7a.52.52,0,0,1,.67-.46l2.22.53Zm1.49-1.49.69-2.87a.52.52,0,0,1,.84-.27l6.31,5.56a.53.53,0,0,1-.24.95l-7-.48a.52.52,0,0,1-.46-.67l.53-2.22Z"/></svg>
            </a>
          </div>
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Royal Thai Spa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
