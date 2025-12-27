import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About Us | Royal Thai Spa San Francisco',
  description: 'Learn about Royal Thai Spa, San Francisco\'s premier wellness destination at Fisherman\'s Wharf since 2015.',
}

const faqs = [
  {
    question: 'Do I need to make a reservation?',
    answer: 'While walk-ins are welcome based on availability, we recommend making a reservation to ensure your preferred time slot, especially on weekends. You can call, text, or book online.',
  },
  {
    question: 'What should I wear?',
    answer: 'For massage services, you will be provided with comfortable spa attire. We recommend wearing loose, comfortable clothing to your appointment. For sauna and wellness treatments, you may bring a swimsuit or use the provided disposable undergarments.',
  },
  {
    question: 'How early should I arrive?',
    answer: 'We recommend arriving 10-15 minutes before your scheduled appointment. This allows time to check in, complete any paperwork, and begin relaxing before your treatment.',
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'We request at least 24 hours notice for cancellations. Late cancellations or no-shows may be subject to a cancellation fee. We understand emergencies happen, so please contact us if you need to reschedule.',
  },
  {
    question: 'Do you offer couples treatments?',
    answer: 'Yes! We have a private couples room where you can enjoy side-by-side massages. Our Couples Retreat package is perfect for anniversaries, date nights, or any special occasion.',
  },
  {
    question: 'Is parking available?',
    answer: 'We are located in the Fisherman\'s Wharf Marriott Hotel. The hotel offers valet and self-parking options. Street parking and nearby public lots are also available. We\'re easily accessible by public transit as well.',
  },
]

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative section-padding">
        <div className="absolute inset-0">
          <Image
            src="/images/spa-treatment.jpg"
            alt="Royal Thai Spa"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-spa-darker/95 via-spa-darker/80 to-spa-darker"></div>
        </div>
        <div className="relative max-w-7xl mx-auto text-center">
          <p className="text-gold-500 font-medium tracking-widest uppercase mb-4">About Us</p>
          <h1 className="heading-primary mb-6">Royal Thai Spa</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A sanctuary of wellness in the heart of San Francisco since 2015
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-spa-darker">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-secondary mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-400">
                <p>
                  Royal Thai Spa was founded with a simple mission: to bring the healing traditions of Thai massage to San Francisco while embracing modern wellness innovations.
                </p>
                <p>
                  Located at the iconic Fisherman&apos;s Wharf Marriott Hotel, our spa serves both locals seeking regular wellness care and visitors looking to unwind during their San Francisco stay.
                </p>
                <p>
                  Our team of certified therapists brings years of experience and a deep understanding of traditional Thai techniques, combined with training in contemporary wellness modalities like cryotherapy and red light therapy.
                </p>
                <p>
                  Whether you&apos;re recovering from a workout, seeking relief from chronic tension, or simply need time to relax, we&apos;re here to help you feel your best.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/images/thai-massage.jpg"
                  alt="Thai massage therapy"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-spa-darker/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                  <p className="text-2xl font-serif text-gold-500 mb-1">Est. 2015</p>
                  <p className="text-gray-300">Fisherman&apos;s Wharf</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-spa-dark">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading-secondary mb-4">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="text-4xl mb-4">🙏</div>
              <h3 className="text-xl font-serif font-bold text-white mb-2">Tradition</h3>
              <p className="text-gray-400 text-sm">
                We honor the ancient healing arts of Thai massage while embracing modern wellness innovations.
              </p>
            </div>
            <div className="card text-center">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-xl font-serif font-bold text-white mb-2">Excellence</h3>
              <p className="text-gray-400 text-sm">
                Every treatment is performed with care, skill, and attention to your individual needs.
              </p>
            </div>
            <div className="card text-center">
              <div className="text-4xl mb-4">💚</div>
              <h3 className="text-xl font-serif font-bold text-white mb-2">Wellness</h3>
              <p className="text-gray-400 text-sm">
                We believe in holistic health—treating the body, mind, and spirit together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="section-padding bg-spa-darker">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="heading-secondary mb-6">Find Us</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-gold-500 font-medium mb-2">Address</h3>
                  <p className="text-gray-300">
                    685 N. Point Street<br />
                    San Francisco, CA 94133<br />
                    <span className="text-gray-500">At Fisherman&apos;s Wharf Marriott Hotel</span>
                  </p>
                </div>
                <div>
                  <h3 className="text-gold-500 font-medium mb-2">Hours</h3>
                  <p className="text-gray-300">
                    Monday - Thursday: 10:00 AM - 9:00 PM<br />
                    Friday - Sunday: 10:00 AM - 10:00 PM
                  </p>
                </div>
                <div>
                  <h3 className="text-gold-500 font-medium mb-2">Contact</h3>
                  <p className="text-gray-300">
                    Phone: <a href="tel:+14159021442" className="text-gold-500 hover:underline">(415) 902-1442</a><br />
                    Email: <a href="mailto:reservations@sfroyalthaispa.com" className="text-gold-500 hover:underline">reservations@sfroyalthaispa.com</a>
                  </p>
                </div>
                <div>
                  <h3 className="text-gold-500 font-medium mb-2">Getting Here</h3>
                  <p className="text-gray-400 text-sm">
                    Located at the corner of Columbus Ave and N. Point St. Accessible by MUNI lines F, 30, and 47. Parking available at the Marriott Hotel or nearby public lots.
                  </p>
                </div>
              </div>
            </div>
            <div>
              {/* Map embed */}
              <div className="aspect-square rounded-2xl overflow-hidden border border-gold-500/20">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.323016213679!2d-122.42017272165398!3d37.80590231824276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580e155c0bc53%3A0x285e92d4ff46bb35!2sRoyal%20Thai%20Spa!5e0!3m2!1sen!2sus!4v1579163291403!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Royal Thai Spa Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-spa-dark">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading-secondary mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="card">
                <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
                <p className="text-gray-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative section-padding">
        <div className="absolute inset-0">
          <Image
            src="/images/couples.jpg"
            alt="Book your spa experience"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-spa-darker/90"></div>
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-6">
            Have More Questions?
          </h2>
          <p className="text-gray-400 mb-8">
            We&apos;re happy to help. Reach out anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://sfroyalthaispa.square.site/" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Book Online
            </a>
            <Link href="/contact" className="btn-secondary">
              Send a Message
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
