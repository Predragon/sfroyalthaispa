import Link from 'next/link'
import Image from 'next/image'

const services = [
  {
    title: 'Thai Massage',
    description: 'Traditional Thai stretching and pressure point therapy for deep relaxation and flexibility.',
    image: '/images/thai-massage.jpg',
    href: '/services#thai-massage',
  },
  {
    title: 'Deep Tissue',
    description: 'Intensive massage targeting chronic muscle tension and knots for lasting relief.',
    image: '/images/massage.jpg',
    href: '/services#deep-tissue',
  },
  {
    title: 'Cryo T Shock',
    description: 'Advanced cryotherapy treatment for body contouring and skin rejuvenation.',
    image: '/images/cryo-treatment.jpg',
    href: '/services#cryo',
  },
  {
    title: 'Infrared Sauna',
    description: 'Detoxify and relax with our state-of-the-art infrared sauna therapy.',
    image: '/images/sauna.jpg',
    href: '/services#sauna',
  },
  {
    title: 'Cold Plunge',
    description: 'Invigorating cold therapy to boost recovery and mental clarity.',
    image: '/images/cold-plunge.png',
    href: '/services#cold-plunge',
  },
  {
    title: 'Red Light Therapy',
    description: 'Full body light therapy for skin health and cellular regeneration.',
    image: '/images/red-light.jpg',
    href: '/services#red-light',
  },
]

const testimonials = [
  {
    name: 'Sarah M.',
    text: 'The best massage I\'ve ever had! The therapists really know what they\'re doing.',
    rating: 5,
  },
  {
    name: 'Michael T.',
    text: 'Amazing atmosphere and incredible Thai massage. I feel like a new person!',
    rating: 5,
  },
  {
    name: 'Jennifer L.',
    text: 'Love the cryo treatments here. Professional staff and beautiful facility.',
    rating: 5,
  },
]

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-massage.jpg"
            alt="Relaxing massage at Royal Thai Spa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-spa-darker/90 via-spa-darker/70 to-spa-darker"></div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gold-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 text-center pt-24">
          <p className="text-gold-500 font-medium tracking-widest uppercase mb-4 animate-fade-in-up">
            San Francisco&apos;s Premier Wellness Spa
          </p>
          <h1 className="heading-primary mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <span className="gradient-text">Renew.</span>{' '}
            <span className="text-white">Recover.</span>{' '}
            <span className="gradient-text">Relax.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Experience traditional Thai massage and modern wellness therapies at Fisherman&apos;s Wharf
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <a href="https://sfroyalthaispa.square.site/" target="_blank" rel="noopener noreferrer" className="btn-primary text-lg">
              Book Online
            </a>
            <a href="tel:+14159021442" className="btn-secondary text-lg">
              Call (415) 902-1442
            </a>
          </div>

          {/* Quick Info */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="bg-spa-dark/50 backdrop-blur-sm rounded-xl p-6 border border-gold-500/20">
              <div className="text-gold-500 text-2xl mb-2">📍</div>
              <p className="text-white font-medium">Fisherman&apos;s Wharf</p>
              <p className="text-gray-400 text-sm">Marriott Hotel</p>
            </div>
            <div className="bg-spa-dark/50 backdrop-blur-sm rounded-xl p-6 border border-gold-500/20">
              <div className="text-gold-500 text-2xl mb-2">🕐</div>
              <p className="text-white font-medium">Open Daily</p>
              <p className="text-gray-400 text-sm">10AM - 9/10PM</p>
            </div>
            <div className="bg-spa-dark/50 backdrop-blur-sm rounded-xl p-6 border border-gold-500/20">
              <div className="text-gold-500 text-2xl mb-2">📧</div>
              <p className="text-white font-medium">Email Us</p>
              <p className="text-gray-400 text-sm">reservations@sfroyalthaispa.com</p>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-spa-dark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-gold-500 font-medium tracking-widest uppercase mb-4">Our Services</p>
            <h2 className="heading-secondary mb-4">Massage & Wellness</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From traditional Thai massage to cutting-edge cryotherapy, we offer a complete range of treatments for your body and mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Link
                key={service.title}
                href={service.href}
                className="group relative overflow-hidden rounded-2xl bg-spa-darker border border-gold-500/10 hover:border-gold-500/30 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-[4/3] relative">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-spa-darker via-spa-darker/50 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-gold-500 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{service.description}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-spa-darker">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gold-500 font-medium tracking-widest uppercase mb-4">Why Choose Us</p>
              <h2 className="heading-secondary mb-6">A Sanctuary in the Heart of San Francisco</h2>
              <p className="text-gray-400 mb-8">
                Located at the iconic Fisherman&apos;s Wharf Marriott Hotel, Royal Thai Spa has been serving San Francisco since 2015. Our expert therapists combine traditional Thai techniques with modern wellness treatments to deliver an unparalleled spa experience.
              </p>
              <ul className="space-y-4">
                {[
                  'Certified Thai massage therapists',
                  'State-of-the-art wellness equipment',
                  'Convenient Fisherman\'s Wharf location',
                  'Couples rooms available',
                  'Gift certificates for any occasion',
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-gold-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-gold-500/20">
                <Image
                  src="/images/spa-treatment.jpg"
                  alt="Spa treatment at Royal Thai Spa"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-spa-dark border border-gold-500/30 rounded-xl p-4 shadow-xl">
                <p className="text-3xl font-serif text-gold-500">Since 2015</p>
                <p className="text-gray-400 text-sm">Serving San Francisco</p>
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gold-500/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Packages */}
      <section className="section-padding bg-spa-dark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-gold-500 font-medium tracking-widest uppercase mb-4">Special Packages</p>
            <h2 className="heading-secondary mb-4">Curated Experiences</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group relative overflow-hidden rounded-2xl">
              <div className="aspect-[3/4] relative">
                <Image
                  src="/images/couples.jpg"
                  alt="Couples massage package"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-spa-darker via-spa-darker/30 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-gold-500 text-sm font-medium mb-1">For Two</p>
                <h3 className="text-2xl font-serif text-white mb-2">Couples Retreat</h3>
                <p className="text-gray-400 text-sm mb-4">Share a romantic spa experience together</p>
                <Link href="/packages" className="text-gold-500 hover:text-gold-400 text-sm font-medium">
                  View Package →
                </Link>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl">
              <div className="aspect-[3/4] relative">
                <Image
                  src="/images/restore-package.jpg"
                  alt="Restore package"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-spa-darker via-spa-darker/30 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-gold-500 text-sm font-medium mb-1">Recovery</p>
                <h3 className="text-2xl font-serif text-white mb-2">Restore Package</h3>
                <p className="text-gray-400 text-sm mb-4">Deep muscle relief and total restoration</p>
                <Link href="/packages" className="text-gold-500 hover:text-gold-400 text-sm font-medium">
                  View Package →
                </Link>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl">
              <div className="aspect-[3/4] relative">
                <Image
                  src="/images/gift-card.jpg"
                  alt="Gift cards"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-spa-darker via-spa-darker/30 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-gold-500 text-sm font-medium mb-1">Give Wellness</p>
                <h3 className="text-2xl font-serif text-white mb-2">Gift Cards</h3>
                <p className="text-gray-400 text-sm mb-4">The perfect present for any occasion</p>
                <Link href="/packages" className="text-gold-500 hover:text-gold-400 text-sm font-medium">
                  Purchase →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-spa-darker">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-gold-500 font-medium tracking-widest uppercase mb-4">Testimonials</p>
            <h2 className="heading-secondary">What Our Guests Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">&ldquo;{testimonial.text}&rdquo;</p>
                <p className="text-gold-500 font-medium">{testimonial.name}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://www.yelp.com/biz/royal-thai-spa-san-francisco"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Read More on Yelp
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/herbal-massage.jpg"
            alt="Herbal massage"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-spa-darker/90"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="heading-secondary mb-6">Ready to Relax?</h2>
          <p className="text-xl text-gray-300 mb-10">
            Book your appointment today and experience the Royal Thai difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://sfroyalthaispa.square.site/" target="_blank" rel="noopener noreferrer" className="btn-primary text-lg">
              Book Online
            </a>
            <a href="tel:+14159021442" className="btn-secondary text-lg">
              Call (415) 902-1442
            </a>
          </div>
          <p className="text-gray-500 mt-8 text-sm">
            685 N. Point St, San Francisco, CA 94133 | At Fisherman&apos;s Wharf Marriott Hotel
          </p>
        </div>
      </section>
    </>
  )
}
