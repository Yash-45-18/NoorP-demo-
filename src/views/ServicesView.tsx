import React, { useState } from 'react';
import { Camera, Video, Compass, Sparkles, Users, Heart, ChevronDown, Check, HelpCircle, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Service {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  specs: string[];
}

interface Package {
  name: string;
  price: string;
  tier: string;
  description: string;
  features: string[];
  recommended: boolean;
}

interface FAQItem {
  question: string;
  answer: string;
}

export const ServicesView: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const services: Service[] = [
    {
      icon: Camera,
      title: 'Full Wedding Day Photography',
      description: 'From the haldi to the bidaai — we document every single moment of your shaadi. Candid, traditional, artistic, and editorial. Complete coverage spanning 2-3 days.',
      specs: ['2-3 Senior photographers per wedding day', 'Candid + Traditional coverage combined', '500-1500+ hand-retouched photos', 'Premium leather-bound wedding album included']
    },
    {
      icon: Video,
      title: 'Cinematic Wedding Film',
      description: 'Your wedding story told like a Bollywood film — dramatic baraat entries, emotional bidaai moments, sangeet performances — all cut to your favourite songs.',
      specs: ['4K/8K cinema-grade camera setup', '3-5 min cinematic highlight film', '20-30 min full wedding documentary', 'Drone aerial footage of venue']
    },
    {
      icon: Compass,
      title: 'Pre-Wedding / Couple Shoot',
      description: 'Romantic couple sessions at stunning Indian locations — Udaipur palaces, Goa beaches, Manali mountains, or the streets of Old Delhi.',
      specs: ['4-6 hour dedicated session', '2 locations of your choice', '50+ retouched digital photos', 'Outfit & styling consultation']
    },
    {
      icon: Sparkles,
      title: 'Haldi & Mehndi Specialisation',
      description: 'We have a dedicated team that specialises in capturing the vibrant colours, raw emotions, and intimate rituals of haldi and mehndi ceremonies.',
      specs: ['Colour science optimised for turmeric & henna tones', 'Macro detail shots of mehndi designs', 'Fun candid moments of family', 'Separate photo booth setup option']
    },
    {
      icon: Users,
      title: 'Sangeet & Reception Coverage',
      description: 'From choreographed sangeet performances to the grand entrance at your reception — we capture the party, the glamour, and the celebration.',
      specs: ['Low-light specialist photographers', 'Stage & dance floor multi-angle coverage', 'Guest candid & portrait stations', 'Same-night preview edits for social media']
    },
    {
      icon: Heart,
      title: 'Bridal & Fashion Portraiture',
      description: 'Exclusive bridal portrait sessions showcasing your lehenga, jewellery, and bridal look. Perfect for Instagram reveals, wedding invites, and magazine features.',
      specs: ['Studio or on-location setups', 'Multiple outfit & jewellery changes', 'High-end beauty retouching', 'Social media ready vertical formats']
    }
  ];

  const packages: Package[] = [
    {
      name: 'The Essential Shaadi',
      price: '₹3,50,000',
      tier: 'Single Day Essential',
      description: 'Perfect for intimate weddings and single-day ceremonies. Professional coverage with premium quality.',
      features: [
        '1 Lead Photographer + 1 Assistant',
        'Up to 8 hours of continuous coverage',
        '400+ hand-retouched high-res photos',
        'Online gallery with download access',
        'Delivery within 6 weeks',
        'Travel within Mumbai & MMR included'
      ],
      recommended: false
    },
    {
      name: 'The Royal Heritage',
      price: '₹8,50,000',
      tier: 'Most Popular — 3 Day Coverage',
      description: 'Our signature package for the full Indian wedding experience. Haldi, Sangeet, Phere & Reception — all captured in cinematic glory.',
      features: [
        'Arjun Kapoor + 2 Senior Photographers',
        'Full 3-day wedding coverage (up to 30 hours)',
        'Drone aerial photography included',
        '800+ masterfully retouched photos',
        'Premium leather-bound wedding album (20 pages)',
        '3-5 minute cinematic highlight film',
        'Delivery within 4 weeks',
        'Free pre-wedding couple shoot (4 hours)'
      ],
      recommended: true
    },
    {
      name: 'The Grand Destiny',
      price: '₹18,00,000',
      tier: 'The Ultimate Luxury Package',
      description: 'The complete Noor experience — full creative team, cinematic films, drone coverage, international travel, and museum-grade album production.',
      features: [
        'Full Noor Team: 3 photographers + 2 videographers + drone pilot',
        'Up to 5 days of comprehensive coverage',
        'Full 30-min cinematic wedding documentary + 5-min highlight',
        'Heavy-lift drone aerial cinematography (8K)',
        '1500+ ultra high-res retouched photos',
        'Two premium albums + family keepsake boxes',
        'Express 10-day digital delivery',
        'Pan-India & international travel included',
        'Dedicated wedding day coordinator'
      ],
      recommended: false
    }
  ];

  const faqs: FAQItem[] = [
    {
      question: 'Do you travel for destination weddings outside Mumbai?',
      answer: 'Absolutely! Over 60% of our bookings are destination weddings. We regularly shoot in Udaipur, Jaipur, Jodhpur, Goa, Kerala, Delhi, and across India. We also cover international destination weddings in Dubai, Thailand, Bali, Italy, and the UK. Travel & accommodation costs are included in our Grand Destiny package.'
    },
    {
      question: 'How far in advance should we book?',
      answer: 'Indian wedding season (November to February) books up 12-18 months in advance. We recommend reaching out at least 8-12 months before your wedding date. A 30% advance payment and signed agreement confirms your booking.'
    },
    {
      question: 'What if it rains during the wedding?',
      answer: 'We come prepared for everything! We carry rain covers for all equipment, and honestly, some of our most magical shots have been in the rain — couples dancing under umbrellas, kids playing in puddles during the baraat. Rain adds romance to Indian weddings!'
    },
    {
      question: 'Can we customise a package for our specific needs?',
      answer: 'Of course! Every Indian wedding is unique. Whether you need only sangeet coverage, want additional photographers for a 1000-guest wedding, or need same-day edit prints for your reception — we will create a custom proposal tailored to you.'
    },
    {
      question: 'How do you handle large Indian weddings with 500+ guests?',
      answer: 'We scale our team accordingly. For large weddings, we deploy 4-6 photographers across multiple zones — one dedicated to the bride, one to the groom, one for family portraits, one for candid guest moments, one for decor & detail shots, and one roaming. No moment goes uncaptured.'
    },
    {
      question: 'Do you provide same-day edits for the reception?',
      answer: 'Yes! Our Royal Heritage and Grand Destiny packages include a same-day highlight reel (30-60 seconds) that we edit on-site and can display on screens during the reception. It is always a huge hit with guests!'
    }
  ];

  const toggleFaq = (index: number) => setActiveFaq(activeFaq === index ? null : index);

  return (
    <div className="bg-stone-950 text-stone-100 min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <p className="text-xs text-amber-500 tracking-[0.3em] font-semibold uppercase flex items-center justify-center">
            <span className="w-6 h-px bg-amber-500/50 mr-2" />
            SERVICES & PACKAGES
            <span className="w-6 h-px bg-amber-500/50 ml-2" />
          </p>
          <h1 className="text-4xl md:text-6xl font-serif-lux font-bold tracking-tight">
            Our Shaadi <span className="text-luxury-gold italic">Services</span>
          </h1>
          <p className="text-stone-400 text-xs md:text-sm font-light leading-relaxed">
            From intimate haldi ceremonies to grand 3-day palace weddings — we offer specialised coverage for every Indian wedding tradition.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-28">
          {services.map((service, idx) => {
            const IconComponent = service.icon;
            return (
              <div key={idx} className="glassmorphism p-8 rounded-lg border border-stone-900/80 hover:border-amber-500/20 transition-all duration-500 group space-y-6">
                <div className="w-12 h-12 bg-stone-900 border border-stone-800 rounded-md flex items-center justify-center text-amber-500 group-hover:bg-amber-500/10 transition-colors duration-300">
                  <IconComponent className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif-lux text-lg font-bold text-stone-100 group-hover:text-amber-400 transition-colors">{service.title}</h3>
                  <p className="text-stone-400 text-xs font-light leading-relaxed">{service.description}</p>
                </div>
                <ul className="space-y-2.5 pt-4 border-t border-stone-900/80">
                  {service.specs.map((spec, specIdx) => (
                    <li key={specIdx} className="flex items-start space-x-2 text-[11px] text-stone-400 font-light">
                      <Check className="w-3.5 h-3.5 text-amber-500/80 shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Pricing */}
        <div className="py-20 border-t border-stone-900 mb-28 relative">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="text-center mb-16 relative z-10 space-y-3">
            <p className="text-xs text-amber-500 uppercase tracking-[0.3em] font-semibold">TRANSPARENT PRICING</p>
            <h2 className="text-2xl md:text-4xl font-serif-lux font-bold text-stone-100">
              Wedding Photography <span className="text-luxury-gold italic">Packages</span>
            </h2>
            <p className="text-stone-400 text-xs font-light max-w-lg mx-auto">
              All prices are in INR (₹). Custom packages available for multi-day, multi-venue, and international weddings.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10 items-stretch">
            {packages.map((pkg, idx) => (
              <div key={idx} className={`relative rounded-xl flex flex-col justify-between p-8 border transition-all duration-500 ${pkg.recommended ? 'bg-stone-900/60 border-amber-500/40 shadow-2xl shadow-amber-500/5 scale-102 z-10' : 'bg-stone-900/15 border-stone-900/80 hover:border-stone-800'}`}>
                {pkg.recommended && (
                  <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-amber-500 to-amber-600 text-stone-950 font-bold text-[9px] tracking-[0.25em] uppercase px-4 py-1 rounded-full shadow-lg">
                    Most Booked by Indian Couples
                  </div>
                )}

                <div className="space-y-6">
                  <div className="space-y-1">
                    <p className="text-[10px] text-stone-500 tracking-widest uppercase font-mono">{pkg.tier}</p>
                    <h3 className="font-serif-lux text-xl font-bold text-stone-100">{pkg.name}</h3>
                  </div>

                  <div className="flex items-baseline space-x-1 border-b border-stone-800/80 pb-6">
                    <span className="text-3xl md:text-4xl font-serif-lux font-bold text-luxury-gold">{pkg.price}</span>
                    <span className="text-[10px] text-stone-400 uppercase tracking-widest font-mono">/ starting</span>
                  </div>

                  <p className="text-stone-400 text-xs font-light leading-relaxed">{pkg.description}</p>

                  <ul className="space-y-3.5 pt-4">
                    {pkg.features.map((feature, featIdx) => (
                      <li key={featIdx} className="flex items-start space-x-3 text-xs text-stone-300 font-light">
                        <Check className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8 mt-8 border-t border-stone-800/50">
                  <button
                    onClick={() => {
                      window.dispatchEvent(new CustomEvent('select-package', { detail: { name: pkg.name } }));
                    }}
                    className={`w-full py-3 rounded-full text-xs font-bold tracking-widest uppercase transition-all cursor-pointer ${pkg.recommended ? 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-stone-950' : 'bg-stone-900 border border-stone-800 hover:border-amber-500/30 text-stone-300 hover:text-white'}`}
                  >
                    Choose This Package
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <div className="mt-12 bg-stone-900/30 border border-stone-900 rounded-lg p-6 flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 text-left mb-4 md:mb-0">
              <AlertCircle className="w-5 h-5 text-amber-500 shrink-0" />
              <p className="text-stone-400 text-xs font-light max-w-xl">
                Need a custom quote for your specific wedding? Have questions about coverage? Chat with us directly on WhatsApp — we respond within 2 hours.
              </p>
            </div>
            <a href="https://wa.me/919820043210" target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 text-emerald-400 rounded-full font-bold text-[10px] tracking-widest uppercase transition-colors">
              WhatsApp Us Now
            </a>
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center space-y-2 mb-16">
            <HelpCircle className="w-8 h-8 text-amber-500/40 mx-auto" />
            <p className="text-[10px] text-stone-500 tracking-[0.3em] font-mono">COMMON QUESTIONS</p>
            <h2 className="text-2xl md:text-4xl font-serif-lux font-bold text-stone-200">
              Frequently Asked <span className="text-luxury-gold italic">Questions</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div key={idx} className="bg-stone-900/20 border border-stone-900/80 rounded-lg overflow-hidden transition-all duration-300">
                  <button onClick={() => toggleFaq(idx)} className="w-full px-6 py-5 flex items-center justify-between text-left text-sm md:text-base font-bold text-stone-200 hover:text-amber-400 transition-colors cursor-pointer">
                    <span>{faq.question}</span>
                    <ChevronDown className={`w-4 h-4 text-amber-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden border-t border-stone-950">
                        <div className="px-6 py-5 text-xs md:text-sm text-stone-400 font-light leading-relaxed">{faq.answer}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};
