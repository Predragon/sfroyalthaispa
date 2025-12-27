import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Spa Packages | Royal Thai Spa San Francisco',
  description: 'Discover our curated spa packages combining massage and wellness treatments for the ultimate relaxation experience.',
}

const packages = [
  {
    name: 'Royal Thai Experience',
    tagline: 'Our Signature Package',
    description: 'The ultimate spa journey combining traditional Thai techniques with modern wellness. Begin with an infrared sauna session, followed by an authentic Thai massage, and finish with a refreshing cold plunge.',
    includes: [
      '30 min Infrared Sauna',
      '90 min Thai Massage',
      '15 min Cold Plunge',
      'Herbal tea service',
    ],
    duration: '2.5 hours',
    price: '$245',
    image: '/images/thai-massage.jpg',
    popular: true,
  },
  {
    name: 'Restore Package',
    tagline: 'Deep Recovery',
    description: 'Designed for those seeking deep muscle relief and total restoration. Perfect after intense workouts or for chronic tension relief.',
    includes: [
      '60 min Deep Tissue Massage',
      '30 min Compression Therapy',
      '20 min Red Light Therapy',
    ],
    duration: '2 hours',
    price: '$195',
    image: '/images/restore-package.jpg',
    popular: false,
  },
  {
    name: 'Invigorate Package',
    tagline: 'Energy & Clarity',
    description: 'Wake up your body and mind with this energizing combination. Boost circulation, reduce inflammation, and leave feeling refreshed.',
    includes: [
      '45 min Infrared Sauna',
      '15 min Cold Plunge',
      '60 min Thai Massage',
    ],
    duration: '2 hours',
    price: '$185',
    image: '/images/sauna.jpg',
    popular: false,
  },
  {
    name: 'Awaken Package',
    tagline: 'Mind & Body Reset',
    description: 'A gentle yet effective package for those new to spa treatments or seeking a lighter touch with maximum relaxation.',
    includes: [
      '60 min Aromatherapy Massage',
      '30 min Infrared Sauna',
      'Essential oil treatment',
    ],
    duration: '1.5 hours',
    price: '$165',
    image: '/images/awaken-package.jpg',
    popular: false,
  },
  {
    name: 'Couples Retreat',
    tagline: 'Share the Experience',
    description: 'Enjoy a romantic spa experience together in our private couples suite. Perfect for anniversaries, date nights, or any special occasion.',
    includes: [
      'Private couples room',
      '60 min Couples Massage',
      'Choice of massage style',
      'Champagne or sparkling cider',
    ],
    duration: '1.5 hours',
    price: '$295',
    image: '/images/couples.jpg',
    popular: true,
  },
  {
    name: 'Cryo Sculpt Package',
    tagline: 'Body Contouring',
    description: 'Target stubborn fat and tighten skin with our advanced cryotherapy package. Includes consultation and customized treatment plan.',
    includes: [
      'Consultation',
      '45 min Cryo T Shock treatment',
      '20 min Red Light Therapy',
      'Post-treatment care guide',
    ],
    duration: '1.5 hours',
    price: '$225',
    image: '/images/cryo-treatment.jpg',
    popular: false,
  },
]

const giftCards = [
  { amount: '$50', description: 'Perfect for add-on treatments' },
  { amount: '$100', description: 'Great for single services' },
  { amount: '$200', description: 'Ideal for packages' },
  { amount: 'Custom', description: 'Any amount you choose' },
]

export default function PackagesPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative section-padding">
        <div className="absolute inset-0">
          <Image
            src="/images/spa-treatment.jpg"
            alt="Spa packages"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-spa-darker/95 via-spa-darker/80 to-spa-darker"></div>
        </div>
        <div className="relative max-w-7xl mx-auto text-center">
          <p className="text-gold-500 font-medium tracking-widest uppercase mb-4">Spa Packages</p>
          <h1 className="heading-primary mb-6">Curated Experiences</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our carefully designed packages combine multiple treatments for enhanced benefits and exceptional value.
          </p>
        </div>
      </section>

      {/* Packages */}
      <section className="section-padding bg-spa-darker">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`card relative overflow-hidden ${pkg.popular ? 'border-gold-500/50 ring-1 ring-gold-500/20' : ''}`}
              >
                {pkg.popular && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-gold-500 text-spa-darker text-xs font-bold px-3 py-1 rounded-full">
                      POPULAR
                    </span>
                  </div>
                )}
                <div className="relative aspect-[16/9] -mx-6 -mt-6 mb-6 overflow-hidden">
                  <Image
                    src={pkg.image}
                    alt={pkg.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-spa-dark to-transparent"></div>
                </div>
                <div>
                  <p className="text-gold-500 text-sm font-medium mb-1">{pkg.tagline}</p>
                  <h3 className="text-2xl font-serif font-bold text-white mb-2">{pkg.name}</h3>
                  <p className="text-gray-400 text-sm mb-6">{pkg.description}</p>

                  <div className="border-t border-gold-500/10 pt-4 mb-6">
                    <p className="text-sm text-gray-500 mb-3">Includes:</p>
                    <ul className="space-y-2">
                      {pkg.includes.map((item, i) => (
                        <li key={i} className="flex items-center text-gray-300 text-sm">
                          <svg className="w-4 h-4 text-gold-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-3xl font-bold text-gold-500">{pkg.price}</p>
                      <p className="text-gray-500 text-sm">{pkg.duration}</p>
                    </div>
                    <a href="tel:+14155004321" className="btn-primary text-sm py-2 px-4">
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gift Cards */}
      <section className="section-padding bg-spa-dark">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/gift-card.jpg"
                alt="Gift cards"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-gold-500 font-medium tracking-widest uppercase mb-4">Gift Cards</p>
              <h2 className="heading-secondary mb-4">Give the Gift of Relaxation</h2>
              <p className="text-gray-400 mb-8">
                The perfect present for any occasion. Gift cards never expire and can be used for any service or package.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {giftCards.map((card, index) => (
                  <div key={index} className="bg-spa-darker rounded-xl p-4 text-center border border-gold-500/10">
                    <p className="text-2xl font-bold text-gold-500 mb-1">{card.amount}</p>
                    <p className="text-gray-400 text-xs">{card.description}</p>
                  </div>
                ))}
              </div>

              <a href="tel:+14155004321" className="btn-primary">
                Purchase Gift Card
              </a>
              <p className="text-gray-500 text-sm mt-4">
                Call or visit us to purchase. Available in-store or by phone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Membership */}
      <section className="relative section-padding">
        <div className="absolute inset-0">
          <Image
            src="/images/herbal-massage.jpg"
            alt="Membership"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-spa-darker/95"></div>
        </div>
        <div className="relative max-w-4xl mx-auto">
          <div className="text-center">
            <p className="text-gold-500 font-medium tracking-widest uppercase mb-4">Membership</p>
            <h2 className="heading-secondary mb-4">Royal Rewards</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join our membership program and enjoy exclusive benefits including discounted treatments, priority booking, and special member-only offers.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-spa-dark/50 backdrop-blur-sm rounded-xl p-6 border border-gold-500/20">
                <div className="text-3xl mb-2">💰</div>
                <p className="text-white font-medium">10% Off</p>
                <p className="text-gray-400 text-sm">All services</p>
              </div>
              <div className="bg-spa-dark/50 backdrop-blur-sm rounded-xl p-6 border border-gold-500/20">
                <div className="text-3xl mb-2">⭐</div>
                <p className="text-white font-medium">Earn Points</p>
                <p className="text-gray-400 text-sm">Redeem for services</p>
              </div>
              <div className="bg-spa-dark/50 backdrop-blur-sm rounded-xl p-6 border border-gold-500/20">
                <div className="text-3xl mb-2">🎁</div>
                <p className="text-white font-medium">Special Offers</p>
                <p className="text-gray-400 text-sm">Members only</p>
              </div>
            </div>
            <a href="tel:+14155004321" className="btn-primary">
              Ask About Membership
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-spa-dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-6">
            Questions About Our Packages?
          </h2>
          <p className="text-gray-400 mb-8">
            Our team is happy to help you choose the perfect package for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+14155004321" className="btn-primary">
              Call (415) 500-4321
            </a>
            <Link href="/contact" className="btn-secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
