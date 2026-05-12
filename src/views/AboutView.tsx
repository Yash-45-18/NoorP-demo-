import React from 'react';
import { Cpu, Eye, Film, Layers, Award as Ribbon } from 'lucide-react';

export const AboutView: React.FC = () => {
  const milestones = [
    {
      year: '2013',
      title: 'The First Click',
      description: 'Borrowed a DSLR from a college friend to shoot a cousin\'s wedding in Jodhpur. The magic of capturing raw, emotional moments between a bride and her family changed my life forever.'
    },
    {
      year: '2016',
      title: 'Noor Studio Founded in Mumbai',
      description: 'Set up our first studio in Bandra West, Mumbai. Started with a team of 3 — one shooter, one editor, one producer — and a dream to redefine Indian wedding photography.'
    },
    {
      year: '2019',
      title: 'Vogue India Feature',
      description: 'Our Udaipur palace wedding series was featured in Vogue India\'s "Best of Indian Weddings" edition. Overnight, our phone started ringing with inquiries from across the country.'
    },
    {
      year: '2023',
      title: 'Wedding Sutra Best Photographer Award',
      description: 'Recognized as one of India\'s top wedding photographers. Expanded to a team of 12 — including cinematographers, drone pilots, retouchers, and album designers.'
    },
    {
      year: '2025',
      title: '500+ Weddings & International Expansion',
      description: 'Shot our 500th Indian wedding. Expanded to cover destination weddings in Dubai, Thailand, Italy, and the UK, carrying the warmth of Indian storytelling to the world.'
    }
  ];

  const equipment = [
    {
      category: 'Camera Bodies',
      items: [
        { name: 'Sony A1 (x3)', desc: 'Our workhorse. 50MP full-frame, 30fps burst, incredible low-light performance for those dark mandap moments.' },
        { name: 'Canon EOS R5 Mark II', desc: 'Unmatched colour science for skin tones — essential for capturing the warmth of haldi and the richness of bridal reds.' },
        { name: 'Hasselblad X2D 100C', desc: 'Medium format for the ultimate in fine-art bridal portraits. 100MP of pure, uncompressed detail.' }
      ]
    },
    {
      category: 'Lenses We Swear By',
      items: [
        { name: 'Sony FE 85mm f/1.4 GM', desc: 'The "Bridal Lens." Creamy bokeh, razor-sharp eyes — perfect for intimate couple portraits.' },
        { name: 'Canon RF 28-70mm f/2L', desc: 'One lens for the entire wedding day. Wide enough for mandap shots, tight enough for emotional close-ups.' },
        { name: 'Sony FE 135mm f/1.8 GM', desc: 'Candid magic from a distance. Captures natural expressions during the pheras without being intrusive.' }
      ]
    },
    {
      category: 'Cinematic & Drone',
      items: [
        { name: 'DJI Inspire 3', desc: '8K aerial cinema drone for breathtaking palace and venue shots. Licensed for all Indian heritage sites.' },
        { name: 'Sony FX6 Cinema Line', desc: 'Dedicated wedding film camera with dual ISO. Handles the challenging lighting of Indian evening ceremonies beautifully.' },
        { name: 'Godox AD1200 Pro (x4)', desc: 'Portable strobe lights for when the venue power fails (as it often does at Indian weddings!).' }
      ]
    }
  ];

  const team = [
    {
      name: 'Arjun Kapoor',
      role: 'Founder & Lead Photographer',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Ananya Sharma',
      role: 'Head of Cinematography & Editing',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Rohan Mehta',
      role: 'Senior Retoucher & Album Designer',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Kavya Nair',
      role: 'Drone Pilot & Aerial Cinematographer',
      image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=400&q=80'
    }
  ];

  return (
    <div className="bg-stone-950 text-stone-100 min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <p className="text-xs text-amber-500 tracking-[0.3em] font-semibold uppercase flex items-center justify-center">
            <span className="w-6 h-px bg-amber-500/50 mr-2" />
            THE NOOR STORY
            <span className="w-6 h-px bg-amber-500/50 ml-2" />
          </p>
          <h1 className="text-4xl md:text-6xl font-serif-lux font-bold tracking-tight">
            Arjun <span className="text-luxury-gold italic">Kapoor</span>
          </h1>
          <p className="text-stone-400 text-xs md:text-sm font-light leading-relaxed">
            From a borrowed DSLR at a cousin's wedding in Jodhpur to shooting 500+ weddings across India and the world. This is the story behind Noor Studio.
          </p>
        </div>

        {/* Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-28">
          <div className="space-y-6">
            <h3 className="font-serif-lux text-2xl md:text-3xl font-bold text-stone-200">
              "We don't just photograph weddings. <br />
              We capture <span className="text-luxury-gold italic">rishtaas</span>, emotions, <br />
              and the soul of your shaadi."
            </h3>
            <p className="text-stone-400 text-sm leading-relaxed font-light">
              Indian weddings aren't just events — they're a riot of colours, traditions, and emotions that span days. From the raw intimacy of a haldi ceremony to the grand spectacle of a baraat with 1,000 guests, every moment deserves to be captured with both artistry and authenticity.
            </p>
            <p className="text-stone-400 text-sm leading-relaxed font-light">
              At Noor Studio, we blend cinematic storytelling with deep cultural understanding. We know when to step back during the emotional bidaai and when to step in for that perfect candid during the sangeet. We speak the language of Indian weddings — literally and visually.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-stone-900">
              <div className="space-y-1">
                <p className="text-xs font-bold uppercase text-stone-300 tracking-wider">FEATURED IN</p>
                <p className="text-stone-500 text-[11px] font-light">Vogue India, Brides Today, Wedding Sutra, ShaadiSaga</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-bold uppercase text-stone-300 tracking-wider">SPECIALISATIONS</p>
                <p className="text-stone-500 text-[11px] font-light">Palace Weddings, Destination Shaadis, Candid Photography</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent z-10" />
            <img
              src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80"
              alt="Arjun shooting at a Rajasthani wedding"
              className="w-full aspect-[16/10] object-cover rounded-lg border border-stone-900 grayscale brightness-90 hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute bottom-4 left-4 bg-stone-950/80 backdrop-blur-md px-4 py-2 rounded border border-stone-800/80 z-20">
              <p className="text-[10px] tracking-[0.2em] font-bold text-amber-500 uppercase">ON LOCATION</p>
              <p className="text-xs font-serif-lux text-stone-200 font-bold">Mehrangarh Fort, Jodhpur • 2025</p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="py-20 border-t border-stone-900 mb-28">
          <div className="text-center mb-16 space-y-2">
            <p className="text-[10px] text-stone-500 tracking-[0.3em] font-mono">OUR JOURNEY</p>
            <h2 className="text-2xl md:text-4xl font-serif-lux font-bold text-stone-200">
              The Noor <span className="text-luxury-gold italic">Timeline</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-stone-800" />
            <div className="space-y-12">
              {milestones.map((m, idx) => (
                <div key={idx} className={`relative flex flex-col md:flex-row ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-stone-950 border-2 border-amber-500 transform -translate-x-[7px] mt-2 z-10" />
                  <div className="hidden md:block w-1/2" />
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                    <div className="glassmorphism p-6 rounded-lg border border-stone-900 hover:border-amber-500/25 transition-colors duration-500 space-y-2.5">
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-serif-lux font-bold text-luxury-gold">{m.year}</span>
                        <Ribbon className="w-4 h-4 text-stone-600" />
                      </div>
                      <h4 className="font-serif-lux text-base font-bold text-stone-100">{m.title}</h4>
                      <p className="text-stone-400 text-xs font-light leading-relaxed">{m.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-28">
          {[
            { title: 'Bridal Retouching', score: '99%', desc: 'Natural skin retouching that preserves the bride\'s glow without over-smoothing.', icon: Eye },
            { title: 'Low-Light Mandap Work', score: '97%', desc: 'Expertise in shooting the pheras and sindoor daan in dimly lit temple venues.', icon: Layers },
            { title: 'Cinematic Wedding Films', score: '94%', desc: 'Bollywood-inspired storytelling with drone shots, slow-motion baraat entries, and emotional montages.', icon: Film },
            { title: 'Drone & Heritage Aerials', score: '96%', desc: 'Licensed aerial coverage of palaces, forts, and beach venues across India.', icon: Cpu }
          ].map((skill, idx) => (
            <div key={idx} className="glassmorphism p-6 rounded-lg border border-stone-900 space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-2.5 bg-stone-900 border border-stone-800 rounded text-amber-500">
                  <skill.icon className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold font-mono text-amber-400">{skill.score}</span>
              </div>
              <div className="space-y-1.5">
                <h4 className="font-bold text-stone-100 text-sm uppercase tracking-wider">{skill.title}</h4>
                <p className="text-stone-400 text-xs font-light leading-relaxed">{skill.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Equipment */}
        <div className="py-20 border-t border-stone-900 mb-28">
          <div className="text-center max-w-xl mx-auto space-y-3 mb-16">
            <p className="text-xs text-amber-500 uppercase tracking-[0.3em] font-semibold">OUR GEAR</p>
            <h2 className="text-2xl md:text-4xl font-serif-lux font-bold text-stone-200">
              Equipment We <span className="text-luxury-gold italic">Trust</span>
            </h2>
            <p className="text-stone-400 text-xs font-light">
              We invest in the best so your memories are captured with absolute perfection.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {equipment.map((category, idx) => (
              <div key={idx} className="bg-stone-900/15 border border-stone-900 rounded-lg p-8 space-y-6">
                <h3 className="font-serif-lux text-lg font-bold text-amber-400 border-b border-stone-900 pb-3 uppercase tracking-widest">
                  {category.category}
                </h3>
                <div className="space-y-6">
                  {category.items.map((item, key) => (
                    <div key={key} className="space-y-1.5">
                      <h4 className="font-bold text-stone-100 text-xs uppercase tracking-wider">{item.name}</h4>
                      <p className="text-stone-400 text-xs font-light leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="py-20 border-t border-stone-900 mb-20">
          <div className="text-center max-w-xl mx-auto space-y-3 mb-16">
            <p className="text-xs text-amber-500 uppercase tracking-[0.3em] font-semibold">THE NOOR TEAM</p>
            <h2 className="text-2xl md:text-4xl font-serif-lux font-bold text-stone-200">
              Meet the <span className="text-luxury-gold italic">People Behind the Lens</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((t, idx) => (
              <div key={idx} className="group relative rounded-lg border border-stone-900/80 bg-stone-900/30 overflow-hidden text-center pb-6 hover:border-amber-500/20 transition-all duration-300">
                <div className="aspect-[4/5] overflow-hidden mb-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-102 transition-all duration-500"
                  />
                </div>
                <h4 className="font-serif-lux text-base font-bold text-stone-100">{t.name}</h4>
                <p className="text-stone-400 text-xs font-light mt-1">{t.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Behind the Scenes */}
        <div className="border-t border-stone-900 pt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative rounded-lg overflow-hidden border border-stone-900 h-64">
              <img src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=600&q=80" alt="BTS" className="w-full h-full object-cover filter brightness-75 hover:scale-103 transition-all duration-500" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <span className="text-[10px] tracking-[0.2em] font-bold text-stone-300 uppercase">Setting up for the baraat</span>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden border border-stone-900 h-64">
              <img src="https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=600&q=80" alt="BTS" className="w-full h-full object-cover filter brightness-75 hover:scale-103 transition-all duration-500" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <span className="text-[10px] tracking-[0.2em] font-bold text-stone-300 uppercase">Mandap detail capture</span>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden border border-stone-900 h-64">
              <img src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80" alt="BTS" className="w-full h-full object-cover filter brightness-75 hover:scale-103 transition-all duration-500" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <span className="text-[10px] tracking-[0.2em] font-bold text-stone-300 uppercase">Drone flight at palace</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
