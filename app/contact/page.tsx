import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | Royal Thai Spa San Francisco',
  description: 'Get in touch with Royal Thai Spa. Book appointments, ask questions, or provide feedback. Located at Fisherman\'s Wharf.',
}

export default function ContactPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-spa-darker to-spa-dark">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gold-500 font-medium tracking-widest uppercase mb-4">Contact</p>
          <h1 className="heading-primary mb-6">Get in Touch</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to book? Have questions? We&apos;re here to help.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="section-padding bg-spa-darker">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-white mb-8">Contact Information</h2>

              <div className="space-y-8">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">Phone</h3>
                    <a href="tel:+14155004321" className="text-gold-500 text-lg hover:underline">(415) 500-4321</a>
                    <p className="text-gray-400 text-sm mt-1">For reservations and inquiries</p>
                  </div>
                </div>

                {/* Text */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">Text</h3>
                    <a href="sms:+14158942299" className="text-gold-500 text-lg hover:underline">(415) 894-2299</a>
                    <p className="text-gray-400 text-sm mt-1">Quick questions & booking</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">Location</h3>
                    <p className="text-gray-300">
                      685 N. Point Street<br />
                      San Francisco, CA 94133
                    </p>
                    <p className="text-gold-500 text-sm mt-1">At Fisherman&apos;s Wharf Marriott Hotel</p>
                    <a
                      href="https://goo.gl/maps/VsmuV"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 text-sm hover:text-gold-500 transition-colors mt-2 inline-block"
                    >
                      Get Directions →
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">Hours</h3>
                    <p className="text-gray-300">
                      Mon - Thu: 10:00 AM - 9:00 PM<br />
                      Fri - Sun: 10:00 AM - 10:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-12">
                <h3 className="text-white font-medium mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.facebook.com/royalthaispa/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gold-500/10 rounded-full flex items-center justify-center text-gold-500 hover:bg-gold-500 hover:text-spa-darker transition-all"
                    aria-label="Facebook"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5L14.17.5C10.24.5,9.5,3.44,9.5,5.32v2.15H7v4h2.5v12h5v-12h3.85l.42-4Z"/></svg>
                  </a>
                  <a
                    href="https://www.instagram.com/sfroyalthaispa/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gold-500/10 rounded-full flex items-center justify-center text-gold-500 hover:bg-gold-500 hover:text-spa-darker transition-all"
                    aria-label="Instagram"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12,2.16c3.2,0,3.58.01,4.85.07,1.17.05,1.8.25,2.23.41.56.22.96.48,1.38.9s.68.82.9,1.38c.16.42.36,1.06.41,2.23.06,1.27.07,1.65.07,4.85s-.01,3.58-.07,4.85c-.05,1.17-.25,1.8-.41,2.23-.22.56-.48.96-.9,1.38s-.82.68-1.38.9c-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9s-.68-.82-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38s.82-.68,1.38-.9c.42-.16,1.06-.36,2.23-.41,1.27-.06,1.65-.07,4.85-.07M12,0C8.74,0,8.33.01,7.05.07,5.78.13,4.9.33,4.14.63c-.78.3-1.45.71-2.11,1.38S.93,3.36.63,4.14C.33,4.9.13,5.78.07,7.05.01,8.33,0,8.74,0,12s.01,3.67.07,4.95c.06,1.27.26,2.15.56,2.91.3.78.71,1.45,1.38,2.11s1.33,1.08,2.11,1.38c.76.3,1.64.5,2.91.56,1.28.06,1.69.07,4.95.07s3.67-.01,4.95-.07c1.27-.06,2.15-.26,2.91-.56.78-.3,1.45-.71,2.11-1.38s1.08-1.33,1.38-2.11c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91-.3-.78-.71-1.45-1.38-2.11s-1.33-1.08-2.11-1.38c-.76-.3-1.64-.5-2.91-.56C15.67.01,15.26,0,12,0Zm0,5.84A6.16,6.16,0,1,0,18.16,12,6.16,6.16,0,0,0,12,5.84ZM12,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16ZM19.85,5.59a1.44,1.44,0,1,1-1.44-1.44A1.44,1.44,0,0,1,19.85,5.59Z"/></svg>
                  </a>
                  <a
                    href="https://www.yelp.com/biz/royal-thai-spa-san-francisco"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gold-500/10 rounded-full flex items-center justify-center text-gold-500 hover:bg-gold-500 hover:text-spa-darker transition-all"
                    aria-label="Yelp"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.14,11.38l-2.87-.69a.52.52,0,0,1-.27-.84l5.56-6.31a.53.53,0,0,1,.95.24l-.48,7a.52.52,0,0,1-.67.46l-2.22-.53Zm-1.49,1.49-.69,2.87a.52.52,0,0,1-.84.27L2.81,10.45a.53.53,0,0,1,.24-.95l7,.48a.52.52,0,0,1,.46.67l-.53,2.22Zm1.49,1.49,2.87.69a.52.52,0,0,1,.27.84l-5.56,6.31a.53.53,0,0,1-.95-.24l.48-7a.52.52,0,0,1,.67-.46l2.22.53Zm1.49-1.49.69-2.87a.52.52,0,0,1,.84-.27l6.31,5.56a.53.53,0,0,1-.24.95l-7-.48a.52.52,0,0,1-.46-.67l.53-2.22Z"/></svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="card">
                <h2 className="text-2xl font-serif font-bold text-white mb-6">Send a Message</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 bg-spa-darker border border-gold-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gold-500 transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">Phone</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-3 bg-spa-darker border border-gold-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gold-500 transition-colors"
                        placeholder="(xxx) xxx-xxxx"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-spa-darker border border-gold-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gold-500 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                    <select
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-3 bg-spa-darker border border-gold-500/20 rounded-lg text-white focus:outline-none focus:border-gold-500 transition-colors"
                    >
                      <option value="booking">Booking Inquiry</option>
                      <option value="services">Question About Services</option>
                      <option value="gift">Gift Cards</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 bg-spa-darker border border-gold-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gold-500 transition-colors resize-none"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full btn-primary"
                  >
                    Send Message
                  </button>
                  <p className="text-gray-500 text-xs text-center">
                    For immediate assistance, please call <a href="tel:+14155004321" className="text-gold-500">(415) 500-4321</a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-96 relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.323016213679!2d-122.42017272165398!3d37.80590231824276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580e155c0bc53%3A0x285e92d4ff46bb35!2sRoyal%20Thai%20Spa!5e0!3m2!1sen!2sus!4v1579163291403!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Royal Thai Spa Location"
          className="grayscale"
        ></iframe>
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-spa-darker via-transparent to-transparent"></div>
      </section>
    </div>
  )
}
