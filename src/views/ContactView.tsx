import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, CheckCircle2, Globe, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const ContactView: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Luxury Wedding Enquiry',
    message: ''
  });

  const [isSent, setIsSent] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please complete the required details.');
      return;
    }

    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'Luxury Wedding Enquiry',
        message: ''
      });
    }, 1200);
  };

  // Check if current Paris time is open (09:00 - 18:00 CET)
  const isStudioOpen = () => {
    const currentHour = new Date().getUTCHours() + 5.5; // IST (UTC+5:30)
    return currentHour >= 10 && currentHour < 19;
  };

  return (
    <div className="bg-stone-950 text-stone-100 min-h-screen pt-28 pb-20 relative">
      {/* Absolute Ambient Background Lights */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-stone-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Page Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <p className="text-xs text-yellow-500 tracking-[0.3em] font-semibold uppercase flex items-center justify-center">
            <span className="w-6 h-px bg-yellow-500/50 mr-2" />
            DIRECT ACCESS
            <span className="w-6 h-px bg-yellow-500/50 ml-2" />
          </p>
          <h1 className="text-4xl md:text-6xl font-serif-lux font-bold tracking-tight">
            Connect With <span className="text-luxury-gold italic">Sebastian</span>
          </h1>
          <p className="text-stone-400 text-xs md:text-sm font-light leading-relaxed">
            Ready to initiate your fine-art commission? Request custom details, coordinate travel plans, or check schedule availability.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Contact Details & Info Card */}
          <div className="lg:col-span-5 space-y-8">
            <div className="glassmorphism p-8 rounded-lg border border-stone-900/80 space-y-8">
              
              <div className="space-y-2">
                <h3 className="font-serif-lux text-xl font-bold text-stone-100 uppercase tracking-wider">The Mumbai Studio</h3>
                <p className="text-stone-400 text-xs font-light leading-relaxed">
                  Our creative studio in the heart of Bandra West, Mumbai, where couples can review albums, discuss concepts, and share chai over wedding planning.
                </p>
              </div>

              {/* Status Indicator */}
              <div className="flex items-center space-x-3 p-3.5 bg-stone-950/60 rounded border border-stone-900">
                <Clock className="w-5 h-5 text-yellow-500" />
                <div className="text-xs font-light">
                  <p className="font-bold uppercase tracking-wider text-stone-200">
                    Atelier Hours: <span className={isStudioOpen() ? 'text-emerald-400' : 'text-amber-500'}>
                      {isStudioOpen() ? 'OPEN NOW' : 'CLOSED NOW'}
                    </span>
                  </p>
                  <p className="text-stone-500 text-[10px] mt-0.5">10:00 AM — 07:00 PM IST (By Appointment Only)</p>
                </div>
              </div>

              {/* Contact details list */}
              <ul className="space-y-6">
                <li className="flex items-start space-x-4">
                  <div className="p-3 bg-stone-900/80 border border-stone-850 rounded text-yellow-500 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xs font-bold text-stone-300 uppercase tracking-wider">Studio Headquarters</h4>
                    <p className="text-stone-400 text-xs leading-relaxed font-light">
                      42 Carter Road, Bandra West, Mumbai 400050, Maharashtra, India
                    </p>
                  </div>
                </li>

                <li className="flex items-start space-x-4">
                  <div className="p-3 bg-stone-900/80 border border-stone-850 rounded text-yellow-500 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xs font-bold text-stone-300 uppercase tracking-wider">Telephony Link</h4>
                    <p className="text-stone-400 text-xs font-mono">
                      +91 98200 43210 (Arjun Kapoor)
                    </p>
                  </div>
                </li>

                <li className="flex items-start space-x-4">
                  <div className="p-3 bg-stone-900/80 border border-stone-850 rounded text-yellow-500 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xs font-bold text-stone-300 uppercase tracking-wider">Email Directory</h4>
                    <p className="text-stone-400 text-xs font-mono hover:text-yellow-400 transition-colors">
                      hello@noorstudio.in
                    </p>
                  </div>
                </li>

                <li className="flex items-start space-x-4">
                  <div className="p-3 bg-stone-900/80 border border-stone-850 rounded text-yellow-500 mt-0.5">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xs font-bold text-stone-300 uppercase tracking-wider">Geographic Reach</h4>
                    <p className="text-stone-400 text-xs leading-relaxed font-light">
                      Full coverage across all 28 Indian states & Union Territories. International destinations: Dubai, Thailand, Bali, Italy, UK & more.
                    </p>
                  </div>
                </li>
              </ul>

              {/* Direct Link to WhatsApp Quick Chat */}
              <div className="pt-6 border-t border-stone-900">
                <a
                  href="https://wa.me/919820043210?text=Hello%20Arjun,%20I%20am%20reaching%20out%20to%2520discuss%20a%20luxury%20photography%20commission..."
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3.5 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/35 hover:border-emerald-500/60 rounded text-emerald-400 text-xs font-bold tracking-widest uppercase transition-all flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-emerald-400 text-emerald-950" />
                  <span>Launch WhatsApp Quick Chat</span>
                </a>
              </div>

            </div>
          </div>

          {/* Interactive Form & Simulated Maps Column */}
          <div className="lg:col-span-7 space-y-8">
            <div className="glassmorphism p-8 rounded-lg border border-stone-900/80 relative">
              <AnimatePresence mode="wait">
                {isSent ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-12 space-y-5"
                  >
                    <div className="w-16 h-16 bg-yellow-500/10 border border-yellow-500/40 rounded-full flex items-center justify-center text-yellow-500 mx-auto animate-bounce">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <div className="space-y-1.5">
                      <h3 className="font-serif-lux text-xl font-bold text-stone-100">Enquiry Transmitted</h3>
                      <p className="text-stone-400 text-xs font-light max-w-sm mx-auto leading-relaxed">
                        Your luxury portfolio query has been dispatched to Sebastian Vane. We will contact you shortly.
                      </p>
                    </div>
                    <button
                      onClick={() => setIsSent(false)}
                      className="px-6 py-2 bg-stone-900 hover:bg-stone-850 border border-stone-800 rounded text-xs font-bold text-stone-300 hover:text-white uppercase tracking-widest cursor-pointer"
                    >
                      Transmit Another Enquiry
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <h3 className="font-serif-lux text-xl font-bold text-stone-200 border-b border-stone-900 pb-3">
                      Bespoke Portfolio Inquiry
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-1.5">
                        <label className="text-stone-400 text-[10px] font-bold uppercase tracking-wider">Your Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Eleanor Sterling"
                          className="w-full bg-stone-950 border border-stone-850 focus:border-yellow-500/50 rounded px-4 py-3 text-xs md:text-sm text-stone-200 focus:outline-none"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-stone-400 text-[10px] font-bold uppercase tracking-wider">Your Email *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. eleanor@luxury.com"
                          className="w-full bg-stone-950 border border-stone-850 focus:border-yellow-500/50 rounded px-4 py-3 text-xs md:text-sm text-stone-200 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-1.5">
                        <label className="text-stone-400 text-[10px] font-bold uppercase tracking-wider">Your Telephone</label>
                        <input
                          type="text"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g. +1 (555) 123-4567"
                          className="w-full bg-stone-950 border border-stone-850 focus:border-yellow-500/50 rounded px-4 py-3 text-xs md:text-sm text-stone-200 focus:outline-none"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-stone-400 text-[10px] font-bold uppercase tracking-wider">Aesthetic Subject</label>
                        <select
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full bg-stone-950 border border-stone-850 focus:border-yellow-500/50 rounded px-4 py-3 text-xs md:text-sm text-stone-200 focus:outline-none"
                        >
                          <option value="Luxury Wedding Enquiry">Luxury Wedding Enquiry</option>
                          <option value="Fashion Campaign Shoot">Fashion Campaign Shoot</option>
                          <option value="High-Contrast Portraits">High-Contrast Portraits</option>
                          <option value="Commercial Publishing Request">Commercial Publishing Request</option>
                          <option value="Other Inquiries">Other Atelier Inquiries</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-stone-400 text-[10px] font-bold uppercase tracking-wider">Aura Request / Message Details *</label>
                      <textarea
                        rows={5}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Share details regarding your milestone. Preferred dates, destination, expectations..."
                        className="w-full bg-stone-950 border border-stone-850 focus:border-yellow-500/50 rounded px-4 py-3 text-xs md:text-sm text-stone-200 focus:outline-none"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSending}
                        className="w-full py-3.5 bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-stone-950 rounded font-bold text-xs tracking-widest uppercase transition-all flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50"
                      >
                        {isSending ? (
                          <>
                            <div className="w-4 h-4 border-2 border-stone-550 border-t-stone-950 rounded-full animate-spin" />
                            <span>Transmitting...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4 text-stone-950" />
                            <span>Send Private Enquiry</span>
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </AnimatePresence>
            </div>

            {/* Google Maps Embed Design Mockup */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs tracking-wider uppercase text-stone-400 font-mono">
                <span>ATELIER GEOLOCATION</span>
                <span>MUMBAI 400050</span>
              </div>
              
              {/* Luxury dark map graphics simulating google map */}
              <div className="relative h-64 w-full rounded-lg border border-stone-900 bg-stone-900/40 overflow-hidden flex items-center justify-center">
                
                {/* Visual grid representing streets */}
                <div className="absolute inset-0 bg-[radial-gradient(#1c1917_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />
                
                {/* Streets design line segments */}
                <div className="absolute left-0 right-0 h-0.5 bg-stone-800/80 top-[35%]" />
                <div className="absolute left-0 right-0 h-0.5 bg-stone-800/80 top-[70%]" />
                <div className="absolute top-0 bottom-0 w-0.5 bg-stone-800/80 left-[25%]" />
                <div className="absolute top-0 bottom-0 w-0.5 bg-stone-800/80 left-[60%]" />
                
                {/* Seine River visual layout */}
                <div className="absolute bottom-0 right-0 left-[50%] h-12 bg-stone-950 border-t border-stone-850/40 transform rotate-12 blur-xs flex items-center justify-center text-[9px] font-mono tracking-widest text-stone-700">
                  SEINE RIVER
                </div>

                {/* Styled Pin indicating location */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="relative flex items-center justify-center">
                    <div className="absolute inset-0 bg-yellow-500/20 rounded-full scale-[2.5] animate-ping" />
                    <div className="absolute inset-0 bg-yellow-500/30 rounded-full scale-[1.5] animate-pulse" />
                    <div className="w-10 h-10 rounded-full bg-stone-950 border-2 border-yellow-500 flex items-center justify-center text-yellow-500 relative z-10 shadow-2xl">
                      <Heart className="w-4.5 h-4.5 fill-current text-yellow-500" />
                    </div>
                  </div>
                  
                  <div className="bg-stone-950 border border-stone-850 px-3 py-1.5 rounded mt-3 text-center shadow-2xl relative">
                    <p className="font-serif-lux font-bold text-[10px] text-stone-200">Noor Studio Mumbai</p>
                    <p className="text-[8px] text-stone-500 font-mono uppercase mt-0.5">Rue du Faubourg St-Honoré</p>
                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-stone-950 border-l border-t border-stone-850 rotate-45" />
                  </div>
                </div>

                {/* Corner Controls panel on map */}
                <div className="absolute bottom-3 left-3 bg-stone-950/80 backdrop-blur-md px-2.5 py-1 rounded border border-stone-850 text-[9px] text-stone-400 font-mono flex items-center space-x-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>GPS: 19.0626° N, 72.8311° E</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
