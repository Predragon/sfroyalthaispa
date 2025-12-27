import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Services | Royal Thai Spa San Francisco',
  description: 'Explore our massage and wellness services including Thai massage, deep tissue, cryotherapy, infrared sauna, and more.',
}

const massageServices = [
  {
    id: 'thai-massage',
    name: 'Thai Massage',
    description: 'Experience authentic Thai massage combining acupressure, stretching, and yoga-like positions. Our therapists use their hands, knees, legs, and feet to move you into a series of stretches while applying deep muscle compression and joint mobilization.',
    duration: '60/90/120 min',
    price: 'From $95',
    benefits: ['Increased flexibility', 'Stress relief', 'Improved circulation', 'Energy restoration'],
  },
  {
    id: 'deep-tissue',
    name: 'Deep Tissue Massage',
    description: 'Intensive massage therapy focusing on the deeper layers of muscle tissue. Perfect for chronic aches, pain, and contracted areas such as stiff neck, upper back, low back pain, leg muscle tightness, and sore shoulders.',
    duration: '60/90/120 min',
    price: 'From $105',
    benefits: ['Pain relief', 'Muscle recovery', 'Reduced tension', 'Improved mobility'],
  },
  {
    id: 'aromatherapy',
    name: 'Therapeutic Aroma Massage',
    description: 'A relaxing full-body massage using doTERRA essential oils tailored to your needs. The aromatic compounds enhance your physical and emotional wellbeing while skilled hands work away tension.',
    duration: '60/90 min',
    price: 'From $110',
    benefits: ['Deep relaxation', 'Mood enhancement', 'Skin nourishment', 'Stress relief'],
  },
  {
    id: 'foot-reflexology',
    name: 'Foot Reflexology',
    description: 'Ancient healing art applying pressure to specific points on the feet that correspond to different body organs and systems. Promotes healing, relaxation, and overall wellbeing.',
    duration: '30/60 min',
    price: 'From $55',
    benefits: ['Improved circulation', 'Relaxation', 'Pain reduction', 'Better sleep'],
  },
  {
    id: 'herbal-massage',
    name: 'Herbal Massage',
    description: 'Traditional Thai herbal compress massage using steamed herbs wrapped in cloth. The warm compresses are applied to the body, releasing aromatic essential oils that soothe muscles and calm the mind.',
    duration: '90 min',
    price: 'From $130',
    benefits: ['Muscle relaxation', 'Detoxification', 'Skin rejuvenation', 'Aromatherapy benefits'],
  },
  {
    id: 'couples',
    name: 'Couples Massage',
    description: 'Share a relaxing experience with your partner in our private couples room. Choose your preferred massage style and enjoy side-by-side treatments in a romantic setting.',
    duration: '60/90 min',
    price: 'From $190',
    benefits: ['Shared experience', 'Romantic atmosphere', 'Quality time', 'Mutual relaxation'],
  },
]

const wellnessServices = [
  {
    id: 'cryo',
    name: 'Cryo T Shock',
    description: 'Revolutionary treatment using thermal shock technology to destroy fat cells, reduce cellulite, and tighten skin. Alternating cold and warm temperatures boost collagen production and metabolism.',
    duration: '30-60 min',
    price: 'From $150',
    benefits: ['Fat reduction', 'Cellulite treatment', 'Skin tightening', 'Collagen boost'],
  },
  {
    id: 'sauna',
    name: 'Infrared Sauna',
    description: 'Private infrared sauna session using light to create heat, penetrating deeper into tissues than traditional saunas. Lower temperatures, greater detoxification, and enhanced relaxation.',
    duration: '30/45 min',
    price: 'From $45',
    benefits: ['Detoxification', 'Pain relief', 'Weight loss', 'Improved circulation'],
  },
  {
    id: 'red-light',
    name: 'Red Light Therapy',
    description: 'Full-body red light therapy using medical-grade LED panels. Stimulates cellular energy production, reduces inflammation, and promotes healing at the cellular level.',
    duration: '20/30 min',
    price: 'From $40',
    benefits: ['Skin health', 'Reduced inflammation', 'Faster healing', 'Anti-aging'],
  },
  {
    id: 'cold-plunge',
    name: 'Cold Plunge',
    description: 'Invigorating cold water immersion therapy to boost recovery, reduce inflammation, and enhance mental clarity. Perfect after sauna or massage for the ultimate contrast therapy.',
    duration: '10-15 min',
    price: 'From $35',
    benefits: ['Muscle recovery', 'Mental clarity', 'Reduced inflammation', 'Immune boost'],
  },
  {
    id: 'compression',
    name: 'Compression Therapy',
    description: 'Advanced pneumatic compression boots that massage and stimulate blood flow in the legs. Ideal for athletes, travelers, or anyone seeking improved circulation and recovery.',
    duration: '30 min',
    price: 'From $45',
    benefits: ['Faster recovery', 'Reduced swelling', 'Improved circulation', 'Relaxation'],
  },
  {
    id: 'facials',
    name: 'Facials',
    description: 'Rejuvenating facial treatments customized to your skin type. Deep cleansing, exfoliation, and hydration leave your skin glowing and refreshed.',
    duration: '60 min',
    price: 'From $95',
    benefits: ['Deep cleansing', 'Hydration', 'Anti-aging', 'Radiant skin'],
  },
]

function ServiceCard({ service }: { service: typeof massageServices[0] }) {
  return (
    <div id={service.id} className="card scroll-mt-24">
      <div className="flex flex-col md:flex-row md:items-start gap-6">
        <div className="flex-grow">
          <h3 className="text-2xl font-serif font-bold text-white mb-2">{service.name}</h3>
          <p className="text-gray-400 mb-4">{service.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {service.benefits.map((benefit, index) => (
              <span
                key={index}
                className="text-xs bg-gold-500/10 text-gold-500 px-3 py-1 rounded-full"
              >
                {benefit}
              </span>
            ))}
          </div>
        </div>
        <div className="md:text-right flex-shrink-0">
          <p className="text-gold-500 font-semibold text-lg">{service.price}</p>
          <p className="text-gray-500 text-sm">{service.duration}</p>
        </div>
      </div>
    </div>
  )
}

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-spa-darker to-spa-dark">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gold-500 font-medium tracking-widest uppercase mb-4">Our Services</p>
          <h1 className="heading-primary mb-6">Massage & Wellness</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From traditional Thai massage to cutting-edge wellness treatments, discover the perfect therapy for your body and mind.
          </p>
        </div>
      </section>

      {/* Quick Nav */}
      <section className="bg-spa-dark border-b border-gold-500/10 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4 flex gap-4 overflow-x-auto">
          <a href="#massage" className="text-gold-500 hover:text-gold-400 whitespace-nowrap font-medium">Massage</a>
          <a href="#wellness" className="text-gray-400 hover:text-gold-500 whitespace-nowrap">Wellness</a>
          <Link href="/packages" className="text-gray-400 hover:text-gold-500 whitespace-nowrap">Packages</Link>
        </div>
      </section>

      {/* Massage Services */}
      <section id="massage" className="section-padding bg-spa-darker scroll-mt-32">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading-secondary mb-4">Massage Therapy</h2>
            <p className="text-gray-400">Expert therapists trained in traditional and contemporary techniques</p>
          </div>
          <div className="space-y-6">
            {massageServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Wellness Services */}
      <section id="wellness" className="section-padding bg-spa-dark scroll-mt-32">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading-secondary mb-4">Wellness Treatments</h2>
            <p className="text-gray-400">Advanced therapies for recovery, rejuvenation, and total wellness</p>
          </div>
          <div className="space-y-6">
            {wellnessServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-spa-darker">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-6">
            Ready to Book Your Treatment?
          </h2>
          <p className="text-gray-400 mb-8">
            Call or text us to schedule your appointment. Walk-ins welcome based on availability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+14155004321" className="btn-primary">
              Call (415) 500-4321
            </a>
            <a href="sms:+14158942299" className="btn-secondary">
              Text (415) 894-2299
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
