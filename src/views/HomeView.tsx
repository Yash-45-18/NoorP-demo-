import React, { useState, useEffect } from 'react';
import { Award, Camera, ChevronLeft, ChevronRight, Compass, Heart, ShieldCheck, Sparkles, Star, Trophy, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { getPortfolio, getTestimonials, PortfolioItem, Testimonial } from '../utils/mockDb';

interface HomeViewProps {
  setCurrentPage: (page: string) => void;
}

const HERO_IMAGES = [
  'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1920&q=90',
  'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1920&q=90',
  'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1920&q=90',
  'https://images.unsplash.com/photo-1475503572774-15a45e5d60b9?auto=format&fit=crop&w=1920&q=90'
];

export const HomeView: React.FC<HomeViewProps> = ({ setCurrentPage }) => {
  const [heroIndex, setHeroIndex] = useState(0);
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    setPortfolioItems(getPortfolio().slice(0, 4));
    setTestimonials(getTestimonials());

    const heroInterval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000);

    return () => clearInterval(heroInterval);
  }, []);

  const handleNextHero = () => setHeroIndex((prev) => (prev + 1) % HERO_IMAGES.length);
  const handlePrevHero = () => setHeroIndex((prev) => (prev - 1 + HERO_IMAGES.length) % HERO_IMAGES.length);

  return (
    <div className="bg-stone-950 text-stone-100 overflow-x-hidden">
      
      {/* 1. Cinematic Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={heroIndex}
              initial={{ opacity: 0, scale: 1.08 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${HERO_IMAGES[heroIndex]})` }}
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-stone-950/50" />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center px-4 pt-16 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex items-center space-x-2 px-3 py-1 bg-stone-900/60 backdrop-blur-md rounded-full border border-amber-500/20 mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
            <span className="text-[10px] tracking-[0.3em] text-amber-400 font-bold uppercase">
              India's Premier Wedding Photography Studio
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-4xl md:text-7xl font-serif-lux font-bold tracking-tight mb-6 leading-[1.1]"
          >
            Where Every Frame <br />
            <span className="text-luxury-gold italic">Tells Your Shaadi Story</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="max-w-2xl text-stone-300 text-sm md:text-base tracking-wide font-light mb-10 leading-relaxed"
          >
            Luxury destination wedding photography across Udaipur palaces, Jaipur forts, Kerala backwaters & beyond. Based in Mumbai, shooting across India & the world.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-5"
          >
            <button
              onClick={() => { setCurrentPage('booking'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="px-8 py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-stone-950 font-bold text-xs tracking-[0.2em] uppercase rounded-full shadow-lg shadow-amber-500/10 hover:shadow-amber-500/25 transition-all cursor-pointer"
            >
              Book Your Shaadi Coverage
            </button>
            <button
              onClick={() => { setCurrentPage('portfolio'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="px-8 py-3.5 bg-stone-900/80 hover:bg-stone-800 border border-stone-700/60 hover:border-amber-500/40 text-stone-200 hover:text-white font-semibold text-xs tracking-[0.2em] uppercase rounded-full transition-all cursor-pointer"
            >
              Explore Our Work
            </button>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-4 right-4 md:left-10 md:right-10 flex items-center justify-between z-20">
          <div className="flex space-x-2">
            {HERO_IMAGES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setHeroIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                  heroIndex === idx ? 'w-8 bg-amber-500' : 'w-2 bg-stone-700 hover:bg-stone-500'
                }`}
              />
            ))}
          </div>
          <div className="flex items-center space-x-3">
            <button onClick={handlePrevHero} className="w-10 h-10 rounded-full border border-stone-800 bg-stone-950/40 backdrop-blur-md flex items-center justify-center text-stone-400 hover:text-white hover:border-amber-500/50 transition-all cursor-pointer">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={handleNextHero} className="w-10 h-10 rounded-full border border-stone-800 bg-stone-950/40 backdrop-blur-md flex items-center justify-center text-stone-400 hover:text-white hover:border-amber-500/50 transition-all cursor-pointer">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-70 z-10 hidden sm:flex">
          <div className="w-5 h-8 rounded-full border-2 border-stone-500 flex justify-center pt-1.5">
            <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} className="w-1 h-1 bg-amber-500 rounded-full" />
          </div>
          <span className="text-[8px] tracking-[0.3em] text-stone-500 uppercase mt-2">Scroll</span>
        </div>
      </section>

      {/* 2. Photographer Intro */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative border border-stone-800 p-2 bg-stone-900/30 rounded-lg">
              <div className="absolute inset-0 border border-amber-500/20 translate-x-3 translate-y-3 rounded-lg pointer-events-none -z-10" />
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
                alt="Lead Photographer Arjun Kapoor"
                className="w-full aspect-[4/5] object-cover rounded-md filter grayscale brightness-90 hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 glassmorphism border border-amber-500/30 px-6 py-4 rounded-lg gold-glow flex items-center space-x-3">
              <Camera className="w-6 h-6 text-amber-500" />
              <div>
                <p className="text-[10px] tracking-[0.2em] text-stone-400 uppercase font-semibold">Featured In</p>
                <p className="text-xs font-serif-lux font-bold text-amber-400">Vogue India & Brides Today</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <p className="text-xs text-amber-500 uppercase tracking-[0.3em] font-semibold flex items-center">
                <span className="w-6 h-px bg-amber-500/50 mr-2" />
                THE STORY BEHIND THE LENS
              </p>
              <h2 className="text-3xl md:text-5xl font-serif-lux font-bold text-stone-100 tracking-tight leading-tight">
                Capturing the Soul of <br />
                <span className="text-luxury-gold italic">Your Shaadi</span>
              </h2>
            </div>

            <p className="text-stone-300 text-sm leading-relaxed font-light">
              Namaste, I'm Arjun Kapoor, founder and lead photographer at Noor Studio. For over 12 years, I have been documenting India's most spectacular weddings — from the grand palaces of Rajasthan to the serene backwaters of Kerala. Every shaadi has a unique rhythm, and my lens is dedicated to preserving those fleeting, magical moments forever.
            </p>

            <p className="text-stone-400 text-sm leading-relaxed font-light">
              Whether it's the emotional bidaai, the vibrant energy of a sangeet night, the quiet intimacy of a haldi ceremony, or the royal grandeur of a baraat on horseback — we bring a cinematic, editorial approach rooted in the beauty of Indian traditions.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-2">
              <div className="flex items-start space-x-3">
                <ShieldCheck className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase text-stone-200 tracking-wider">Premium Equipment</h4>
                  <p className="text-stone-400 text-[11px] font-light mt-1">Sony A1, Canon R5, Hasselblad & DJI Inspire 3 drones.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Compass className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase text-stone-200 tracking-wider">Pan-India Coverage</h4>
                  <p className="text-stone-400 text-[11px] font-light mt-1">Shooting across all Indian states & international destinations.</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={() => { setCurrentPage('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="inline-flex items-center space-x-2 text-xs font-bold tracking-widest text-amber-400 hover:text-amber-300 uppercase transition-all group cursor-pointer"
              >
                <span>Know More About Us</span>
                <span className="text-lg group-hover:translate-x-1.5 transition-transform duration-300">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Animated Statistics */}
      <section className="bg-stone-900/30 border-y border-stone-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="flex justify-center text-amber-500/20 mb-2"><Users className="w-8 h-8 text-amber-500/80" /></div>
              <p className="text-4xl md:text-5xl font-serif-lux font-bold text-luxury-gold">500+</p>
              <p className="text-[10px] tracking-[0.2em] text-stone-400 uppercase font-semibold">Indian Weddings Shot</p>
            </div>
            <div className="space-y-2">
              <div className="flex justify-center text-amber-500/20 mb-2"><Trophy className="w-8 h-8 text-amber-500/80" /></div>
              <p className="text-4xl md:text-5xl font-serif-lux font-bold text-luxury-gold">25+</p>
              <p className="text-[10px] tracking-[0.2em] text-stone-400 uppercase font-semibold">Industry Awards Won</p>
            </div>
            <div className="space-y-2">
              <div className="flex justify-center text-amber-500/20 mb-2"><Camera className="w-8 h-8 text-amber-500/80" /></div>
              <p className="text-4xl md:text-5xl font-serif-lux font-bold text-luxury-gold">12+</p>
              <p className="text-[10px] tracking-[0.2em] text-stone-400 uppercase font-semibold">Years of Craft</p>
            </div>
            <div className="space-y-2">
              <div className="flex justify-center text-amber-500/20 mb-2"><Award className="w-8 h-8 text-amber-500/80" /></div>
              <p className="text-4xl md:text-5xl font-serif-lux font-bold text-luxury-gold">100%</p>
              <p className="text-[10px] tracking-[0.2em] text-stone-400 uppercase font-semibold">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Featured Portfolio */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-baseline justify-between mb-16">
          <div className="space-y-3">
            <p className="text-xs text-amber-500 uppercase tracking-[0.3em] font-semibold">OUR FINEST WORK</p>
            <h2 className="text-3xl md:text-5xl font-serif-lux font-bold text-stone-100 tracking-tight">
              Featured <span className="text-luxury-gold italic">Showcase</span>
            </h2>
          </div>
          <button
            onClick={() => { setCurrentPage('portfolio'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="text-xs uppercase font-bold tracking-[0.2em] text-stone-400 hover:text-amber-500 transition-colors border-b border-stone-800 pb-1 mt-4 md:mt-0 cursor-pointer"
          >
            View Full Gallery →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => { setCurrentPage('portfolio'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="group relative h-[450px] overflow-hidden rounded-lg border border-stone-900 cursor-pointer interactive-card"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.85] group-hover:brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent opacity-80" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex items-center space-x-2 text-[10px] font-semibold text-amber-500 uppercase tracking-[0.2em] mb-2">
                  <span>{item.category}</span>
                  <span>•</span>
                  <span>{item.location}</span>
                </div>
                <h3 className="font-serif-lux text-2xl font-bold text-stone-100 mb-2 group-hover:text-amber-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-stone-400 text-xs font-light line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {item.description}
                </p>
              </div>

              <div className="absolute top-4 right-4 bg-stone-950/70 backdrop-blur-md px-3 py-1 rounded-full border border-stone-800 text-[9px] tracking-widest text-stone-300 font-mono">
                SHOT {index + 1}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Testimonials */}
      <section className="bg-gradient-to-b from-stone-950 to-stone-900 py-24 border-t border-stone-900 relative">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <p className="text-xs text-amber-500 uppercase tracking-[0.3em] font-semibold mb-3">CLIENT LOVE</p>
          <h2 className="text-3xl md:text-5xl font-serif-lux font-bold text-stone-100 tracking-tight mb-16">
            Words From Our <span className="text-luxury-gold italic">Happy Couples</span>
          </h2>

          {testimonials.length > 0 && (
            <div className="min-h-[280px] flex flex-col justify-between">
              <div>
                <div className="flex justify-center space-x-1 mb-8">
                  {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />
                  ))}
                </div>

                <p className="text-stone-200 text-lg md:text-2xl font-serif-lux font-light leading-relaxed italic mb-8">
                  "{testimonials[activeTestimonial].content}"
                </p>
              </div>

              <div className="flex flex-col items-center">
                <img
                  src={testimonials[activeTestimonial].avatar}
                  alt={testimonials[activeTestimonial].name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-amber-500/40 mb-3"
                />
                <h4 className="font-bold text-stone-100 text-sm tracking-wider uppercase">
                  {testimonials[activeTestimonial].name}
                </h4>
                <p className="text-[10px] text-amber-500 tracking-[0.2em] uppercase font-mono mt-1">
                  {testimonials[activeTestimonial].role}
                </p>
              </div>
            </div>
          )}

          <div className="flex justify-center space-x-3 mt-10">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTestimonial(idx)}
                className={`w-3.5 h-3.5 rounded-full border transition-all duration-300 cursor-pointer ${
                  activeTestimonial === idx ? 'bg-amber-500 border-amber-500 scale-110' : 'border-stone-700 bg-transparent hover:border-stone-500'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 6. Awards */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-16">
          <p className="text-xs text-stone-400 uppercase tracking-[0.3em] font-semibold">RECOGNITION</p>
          <h2 className="text-3xl md:text-5xl font-serif-lux font-bold text-stone-100 tracking-tight">
            Awards & <span className="text-luxury-gold italic">Accolades</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: 'Best Indian Wedding Photographer', org: 'Wedding Sutra Awards', year: '2025' },
            { title: 'Top 10 South Asian Wedding Artists', org: 'Vogue India', year: '2024' },
            { title: 'Excellence in Bridal Cinematography', org: 'Filmfare Weddings', year: '2024' },
            { title: 'Heritage Wedding Photography Master', org: 'Brides Today Magazine', year: '2023' }
          ].map((award, i) => (
            <div key={i} className="glassmorphism p-8 rounded-lg border border-stone-900 flex flex-col justify-between items-center text-center space-y-6 hover:border-amber-500/20 transition-colors duration-500 group">
              <div className="w-12 h-12 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center text-amber-500 group-hover:bg-amber-500/10 transition-colors duration-300">
                <Trophy className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </div>
              <div className="space-y-2">
                <h4 className="font-serif-lux text-base font-bold text-stone-100 group-hover:text-amber-400 transition-colors">{award.title}</h4>
                <p className="text-stone-400 text-xs font-light">{award.org}</p>
              </div>
              <span className="text-[10px] font-mono tracking-widest bg-stone-900 px-3 py-1 rounded-full border border-stone-800 text-stone-500">{award.year}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Instagram */}
      <section className="py-16 bg-stone-950 border-t border-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
          <p className="text-xs text-amber-500 uppercase tracking-[0.3em] font-semibold mb-2">FOLLOW US ON INSTAGRAM</p>
          <a
            href="https://instagram.com/noorstudioindia"
            target="_blank"
            rel="noreferrer"
            className="font-serif-lux text-xl md:text-3xl font-bold tracking-tight text-stone-200 hover:text-amber-500 transition-colors cursor-pointer"
          >
            @noorstudioindia
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4 max-w-[1400px] mx-auto">
          {[
            'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=500&q=80'
          ].map((url, i) => (
            <a
              key={i}
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="group relative aspect-square overflow-hidden rounded-md border border-stone-900 cursor-pointer block"
            >
              <img src={url} alt="Instagram" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500 filter brightness-90 group-hover:brightness-100" />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="flex items-center space-x-1.5 text-white text-sm font-semibold">
                  <Heart className="w-4 h-4 text-rose-500 fill-rose-500 animate-pulse" />
                  <span>2.4k</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* 8. CTA */}
      <section className="relative py-28 overflow-hidden bg-stone-900">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
          <p className="text-xs text-amber-500 uppercase tracking-[0.3em] font-bold">BOOK YOUR DATES NOW</p>
          <h2 className="text-3xl md:text-6xl font-serif-lux font-bold text-stone-100 tracking-tight leading-none">
            Ready to Make Your <br />
            <span className="text-luxury-gold italic">Shaadi Unforgettable?</span>
          </h2>
          <p className="max-w-2xl mx-auto text-stone-400 text-sm md:text-base font-light leading-relaxed">
            We take on a limited number of weddings each year to give every couple the personal attention they deserve. Wedding season books fast — secure your date with a complimentary consultation today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
            <button
              onClick={() => { setCurrentPage('booking'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-stone-950 font-bold text-xs tracking-[0.2em] uppercase rounded-full shadow-2xl shadow-amber-500/10 cursor-pointer"
            >
              Start Your Booking
            </button>
            <button
              onClick={() => { setCurrentPage('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="px-8 py-4 bg-transparent hover:bg-stone-800 border border-stone-800 hover:border-amber-500/50 text-stone-300 hover:text-white font-semibold text-xs tracking-[0.2em] uppercase rounded-full transition-all cursor-pointer"
            >
              Call Us Directly
            </button>
          </div>

          <div className="pt-8 text-stone-500 text-xs font-mono">
            <span>COVERING ALL OF INDIA • INTERNATIONAL DESTINATIONS WELCOME</span>
          </div>
        </div>
      </section>
    </div>
  );
};
