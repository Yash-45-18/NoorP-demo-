import React, { useState, useEffect } from 'react';
import { getBookings, saveBookings, Booking } from '../utils/mockDb';
import { sendBookingNotification } from '../utils/emailService';
import { Calendar, CheckCircle2, DollarSign, MapPin, Users, Phone, Mail, User, Info, ArrowLeft, ArrowRight, Sparkles, Send, AlertTriangle, CheckCircle, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const BookingView: React.FC = () => {
  const [step, setStep] = useState(1);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailStatus, setEmailStatus] = useState<'idle' | 'sending' | 'sent' | 'skipped'>('idle');

  // Form Fields State
  const [eventType, setEventType] = useState('Weddings');
  const [packageType, setPackageType] = useState('The Sovereign Royale');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('14:00');
  const [location, setLocation] = useState('');
  const [guestCount, setGuestCount] = useState(100);
  const [budget, setBudget] = useState('$5,000 - $10,000');
  const [customerName, setCustomerName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  // Form Validation State
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    // Listen for custom package selection events from other pages
    const handleSelectPackage = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail && customEvent.detail.name) {
        setPackageType(customEvent.detail.name);
        // If they chose classic, set appropriate budget
        if (customEvent.detail.name.includes('Classic')) {
          setBudget('$3,000 - $5,000');
        } else if (customEvent.detail.name.includes('Sovereign')) {
          setBudget('$5,000 - $10,000');
        } else {
          setBudget('$10,000 - $25,000+');
        }
      }
    };

    window.addEventListener('select-package', handleSelectPackage);
    return () => window.removeEventListener('select-package', handleSelectPackage);
  }, []);

  const validateStep = (currentStep: number) => {
    const newErrors: Record<string, string> = {};

    if (currentStep === 2) {
      if (!date) newErrors.date = 'Reservation date is required.';
      if (!location.trim()) newErrors.location = 'Destination venue/location is required.';
    }

    if (currentStep === 4) {
      if (!customerName.trim()) newErrors.customerName = 'Please enter your full name.';
      if (!email.trim()) {
        newErrors.email = 'Please enter your email.';
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        newErrors.email = 'Please provide a valid email format.';
      }
      if (!phone.trim()) newErrors.phone = 'Please enter your mobile contact number.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(step)) {
      setStep(prev => Math.min(prev + 1, 5));
    }
  };

  const prevStep = () => {
    setStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(4)) {
      setStep(4);
      return;
    }

    setIsSubmitting(true);
    setEmailStatus('sending');

    const newBooking: Booking = {
      id: 'b_' + Math.random().toString(36).substr(2, 9),
      customerName,
      email,
      phone,
      eventType,
      packageType,
      date,
      time,
      location,
      guestCount,
      budget,
      message,
      status: 'Pending',
      createdAt: new Date().toISOString()
    };

    // Store in mock db
    const bookings = getBookings();
    bookings.unshift(newBooking);
    saveBookings(bookings);

    // Send email notification to studio owner
    try {
      const result = await sendBookingNotification({
        customerName,
        email,
        phone,
        eventType,
        packageType,
        date,
        time,
        location,
        guestCount,
        budget,
        message,
      });

      if (result.success) {
        setEmailStatus('sent');
      } else if (result.message === 'EMAIL_NOT_CONFIGURED') {
        setEmailStatus('skipped');
      } else {
        setEmailStatus('skipped');
      }
    } catch {
      setEmailStatus('skipped');
    }

    setIsSubmitting(false);

    // Trigger success animations
    setIsSuccess(true);
  };

  const steps = [
    { num: 1, title: 'Concept & Tier' },
    { num: 2, title: 'Date & Location' },
    { num: 3, title: 'Scope & Budget' },
    { num: 4, title: 'Contact Curation' },
    { num: 5, title: 'Finalize Proposal' }
  ];

  return (
    <div className="bg-stone-950 text-stone-100 min-h-screen pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Animated Header */}
        <div className="text-center space-y-3 mb-12">
          <p className="text-xs text-yellow-500 tracking-[0.3em] font-semibold uppercase">SECURE COMMISSIONS</p>
          <h1 className="text-3xl md:text-5xl font-serif-lux font-bold tracking-tight">
            The Private <span className="text-luxury-gold italic">Scheduler</span>
          </h1>
          <p className="text-stone-400 text-xs font-light max-w-lg mx-auto">
            Design your ideal visual shoot. This multi-step consultation details the scope, timeline, and resources of your commission.
          </p>
        </div>

        {/* Progress Tracker */}
        {!isSuccess && (
          <div className="mb-12">
            <div className="flex items-center justify-between">
              {steps.map((s) => (
                <div key={s.num} className="flex flex-col items-center flex-grow text-center relative">
                  {/* Circle progress element */}
                  <div
                    className={`w-8 h-8 rounded-full border flex items-center justify-center text-xs font-mono font-bold transition-all duration-300 z-10 ${
                      step >= s.num
                        ? 'bg-yellow-500 border-yellow-500 text-stone-950 scale-105 shadow-md shadow-yellow-500/10'
                        : 'bg-stone-900 border-stone-800 text-stone-500'
                    }`}
                  >
                    {s.num}
                  </div>
                  <span
                    className={`text-[9px] tracking-widest uppercase font-semibold mt-2.5 transition-colors duration-300 hidden sm:block ${
                      step === s.num ? 'text-yellow-400' : 'text-stone-500'
                    }`}
                  >
                    {s.title}
                  </span>

                  {/* Connector lines between progress points */}
                  {s.num < 5 && (
                    <div
                      className={`absolute top-4 left-[calc(50%+16px)] right-[calc(-50%+16px)] h-0.5 -z-0 transition-colors duration-300 ${
                        step > s.num ? 'bg-yellow-500' : 'bg-stone-900'
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Form Container */}
        <div className="glassmorphism rounded-xl border border-stone-900/80 p-6 md:p-10 relative">
          
          <AnimatePresence mode="wait">
            {isSuccess ? (
              /* Booking Success view */
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center py-10 space-y-6 flex flex-col items-center"
              >
                {/* Submitting animation */}
                {isSubmitting ? (
                  <div className="py-12 space-y-6">
                    <Loader2 className="w-16 h-16 text-amber-500 mx-auto animate-spin" />
                    <div className="space-y-1.5">
                      <h2 className="font-serif-lux text-xl font-bold text-stone-200">Submitting Your Booking...</h2>
                      <p className="text-stone-400 text-xs font-light">Sending details to Noor Studio</p>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="relative">
                      <div className="absolute inset-0 bg-amber-500/10 rounded-full blur-xl scale-125 animate-pulse-glow" />
                      <CheckCircle2 className="w-20 h-20 text-amber-500 relative z-10 animate-bounce" />
                    </div>

                    <div className="space-y-2">
                      <h2 className="font-serif-lux text-2xl md:text-3xl font-bold text-stone-100">
                        Booking Submitted <span className="text-luxury-gold italic">Successfully!</span>
                      </h2>
                      <p className="text-stone-400 text-xs md:text-sm font-light max-w-md mx-auto leading-relaxed">
                        Thank you, {customerName}! Your shaadi booking has been received by Noor Studio. We'll be in touch within 24 hours.
                      </p>
                    </div>

                    {/* Email Notification Status */}
                    {emailStatus === 'sent' && (
                      <div className="w-full max-w-md p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-lg flex items-start space-x-3 text-left">
                        <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                        <div>
                          <p className="text-emerald-400 text-xs font-bold uppercase tracking-wider">Email Sent to Studio</p>
                          <p className="text-emerald-400/70 text-[11px] font-light mt-1">
                            Arjun Kapoor has been notified via email about your booking. Expect a reply soon!
                          </p>
                        </div>
                      </div>
                    )}

                    {emailStatus === 'skipped' && (
                      <div className="w-full max-w-md p-4 bg-amber-500/10 border border-amber-500/30 rounded-lg flex items-start space-x-3 text-left">
                        <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                        <div>
                          <p className="text-amber-400 text-xs font-bold uppercase tracking-wider">Saved Locally</p>
                          <p className="text-amber-400/70 text-[11px] font-light mt-1">
                            Your booking is saved in our system. For instant confirmation, please WhatsApp us at <span className="font-semibold text-amber-400">+91 98200 43210</span>.
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Proposal Metadata Summary Card */}
                    <div className="w-full max-w-md bg-stone-950/80 border border-stone-800 p-6 rounded-lg text-left space-y-4 text-xs font-light">
                      <div className="flex justify-between border-b border-stone-900 pb-2.5">
                        <span className="text-stone-500 font-mono">CLIENT NAME</span>
                        <span className="text-stone-200 font-bold">{customerName}</span>
                      </div>
                      <div className="flex justify-between border-b border-stone-900 pb-2.5">
                        <span className="text-stone-500 font-mono">EVENT</span>
                        <span className="text-stone-200 font-semibold">{eventType} — {packageType}</span>
                      </div>
                      <div className="flex justify-between border-b border-stone-900 pb-2.5">
                        <span className="text-stone-500 font-mono">VENUE</span>
                        <span className="text-stone-200 font-semibold flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-amber-500" />
                          {location}
                        </span>
                      </div>
                      <div className="flex justify-between border-b border-stone-900 pb-2.5">
                        <span className="text-stone-500 font-mono">DATE & TIME</span>
                        <span className="text-amber-400 font-mono font-bold">{date} @ {time}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-stone-500 font-mono">STATUS</span>
                        <span className="text-amber-500 font-bold uppercase animate-pulse">PENDING REVIEW</span>
                      </div>
                    </div>

                    <p className="text-stone-500 text-[11px] font-light leading-relaxed max-w-sm">
                      Arjun Kapoor & the Noor Studio team will reach out within 24 hours to discuss your vision and confirm the details over a call.
                    </p>

                    <div className="pt-4 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                      <a
                        href={`https://wa.me/919820043210?text=Hi Arjun! I just booked a ${eventType} shoot (${packageType}) for ${date} at ${location}. Looking forward to connecting!`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2.5 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 hover:border-emerald-500/50 text-emerald-400 rounded-full font-bold text-[10px] tracking-widest uppercase transition-all flex items-center justify-center space-x-2"
                      >
                        <Phone className="w-4 h-4" />
                        <span>WhatsApp Us Now</span>
                      </a>
                      <button
                        onClick={() => {
                          setStep(1);
                          setIsSuccess(false);
                          setIsSubmitting(false);
                          setEmailStatus('idle');
                          setLocation('');
                          setDate('');
                          setCustomerName('');
                          setEmail('');
                          setPhone('');
                          setMessage('');
                        }}
                        className="px-6 py-2.5 bg-stone-900 border border-stone-800 hover:border-stone-700 rounded-full text-stone-300 hover:text-white text-[10px] tracking-widest uppercase font-bold cursor-pointer"
                      >
                        Book Another
                      </button>
                    </div>
                  </>
                )}
              </motion.div>
            ) : (
              /* Steps rendering */
              <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* STEP 1: CONCEPT & PACKAGE */}
                {step === 1 && (
                  <motion.div
                    key="step-1"
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                    className="space-y-6"
                  >
                    <div className="flex items-center space-x-2 border-b border-stone-900 pb-3">
                      <Sparkles className="w-4 h-4 text-yellow-500" />
                      <h3 className="font-serif-lux text-lg font-bold text-stone-200">Concept Blueprint Selection</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="block text-xs font-bold text-stone-400 uppercase tracking-wider">Event / Concept Genre</label>
                        <select
                          value={eventType}
                          onChange={(e) => setEventType(e.target.value)}
                          className="w-full bg-stone-950 border rounded px-4 py-3 text-xs md:text-sm text-stone-200 focus:outline-none focus:border-amber-500/50 border-stone-850"
                        >
                          <option value="Weddings">Full Wedding (All Events)</option>
                          <option value="Haldi & Mehndi">Haldi & Mehndi Ceremony</option>
                          <option value="Sangeet & Baraat">Sangeet & Baraat Night</option>
                          <option value="Pre-Wedding">Pre-Wedding Couple Shoot</option>
                          <option value="Matrimony Reception">Reception Coverage</option>
                          <option value="Portraits">Bridal & Groom Portraits</option>
                          <option value="Fashion">Fashion & Editorial Shoot</option>
                          <option value="Events">Corporate / Brand Events</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="block text-xs font-bold text-stone-400 uppercase tracking-wider">Package Specification</label>
                        <select
                          value={packageType}
                          onChange={(e) => setPackageType(e.target.value)}
                          className="w-full bg-stone-950 border border-stone-850 rounded px-4 py-3 text-xs md:text-sm text-stone-200 focus:outline-none focus:border-yellow-500/50"
                        >
                          <option value="The Sovereign Royale">The Sovereign Royale (Most Popular)</option>
                          <option value="The Classic Archival">The Classic Archival (Essential)</option>
                          <option value="The Cinematic Grandeur">The Cinematic Grandeur (Full Crew)</option>
                          <option value="Custom Bespoke Shoot">Bespoke Fine Art Commission</option>
                        </select>
                      </div>
                    </div>

                    <div className="p-4 bg-yellow-500/5 rounded border border-yellow-500/10 flex items-start space-x-3 text-xs text-yellow-600/80">
                      <Info className="w-4 h-4 shrink-0 mt-0.5 text-yellow-500" />
                      <p>
                        Our packages are fully customized to match custom geographical routes. Changing event package values updates resources but lets you modify specifications later.
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* STEP 2: DATE & LOCATION */}
                {step === 2 && (
                  <motion.div
                    key="step-2"
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                    className="space-y-6"
                  >
                    <div className="flex items-center space-x-2 border-b border-stone-900 pb-3">
                      <Calendar className="w-4 h-4 text-yellow-500" />
                      <h3 className="font-serif-lux text-lg font-bold text-stone-200">Chronicle & Terrain</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="block text-xs font-bold text-stone-400 uppercase tracking-wider">Commission Date</label>
                        <input
                          type="date"
                          value={date}
                          min={new Date().toISOString().split('T')[0]}
                          onChange={(e) => setDate(e.target.value)}
                          className={`w-full bg-stone-950 border rounded px-4 py-3 text-xs md:text-sm text-stone-200 focus:outline-none ${
                            errors.date ? 'border-red-500' : 'border-stone-850 focus:border-yellow-500/50'
                          }`}
                        />
                        {errors.date && <p className="text-red-400 text-[10px] tracking-wide">{errors.date}</p>}
                      </div>

                      <div className="space-y-2">
                        <label className="block text-xs font-bold text-stone-400 uppercase tracking-wider">Preferred Capture Time</label>
                        <select
                          value={time}
                          onChange={(e) => setTime(e.target.value)}
                          className="w-full bg-stone-950 border border-stone-850 rounded px-4 py-3 text-xs md:text-sm text-stone-200 focus:outline-none focus:border-yellow-500/50"
                        >
                          <option value="09:00">09:00 AM — Morning Editorial Light</option>
                          <option value="14:00">02:00 PM — Mid-day Drama</option>
                          <option value="18:00">06:00 PM — Golden Hour Vows</option>
                          <option value="Full Day">Full-Day Multi-Time Continuous Block</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-xs font-bold text-stone-400 uppercase tracking-wider">Destination Location / Venue Name</label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3.5 w-4 h-4 text-stone-500" />
                        <input
                          type="text"
                          placeholder="e.g. Villa d'Este (Lake Como, Italy)"
                          value={location}
                          onChange={(e) => setLocation(e.target.value)}
                          className={`w-full bg-stone-950 border rounded pl-10 pr-4 py-3 text-xs md:text-sm text-stone-200 focus:outline-none ${
                            errors.location ? 'border-red-500' : 'border-stone-850 focus:border-yellow-500/50'
                          }`}
                        />
                      </div>
                      {errors.location && <p className="text-red-400 text-[10px] tracking-wide">{errors.location}</p>}
                      <p className="text-[10px] text-stone-500 font-light italic">
                        Provide a country or venue. Sebastian Vane reviews local photography permit steps for all locations.
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* STEP 3: SCOPE & BUDGET */}
                {step === 3 && (
                  <motion.div
                    key="step-3"
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                    className="space-y-6"
                  >
                    <div className="flex items-center space-x-2 border-b border-stone-900 pb-3">
                      <Users className="w-4 h-4 text-yellow-500" />
                      <h3 className="font-serif-lux text-lg font-bold text-stone-200">Scale, Guest Count & Budget</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                      <div className="space-y-3">
                        <div className="flex justify-between items-baseline">
                          <label className="block text-xs font-bold text-stone-400 uppercase tracking-wider">Estimated Guests</label>
                          <span className="text-sm font-mono font-bold text-yellow-400">{guestCount} Guests</span>
                        </div>
                        <input
                          type="range"
                          min="0"
                          max="500"
                          step="10"
                          value={guestCount}
                          onChange={(e) => setGuestCount(Number(e.target.value))}
                          className="w-full h-1.5 bg-stone-900 rounded-lg appearance-none cursor-pointer accent-yellow-500"
                        />
                        <div className="flex justify-between text-[9px] text-stone-500 font-mono">
                          <span>0 (ELOPEMENT)</span>
                          <span>250 (REGULAR)</span>
                          <span>500+ (GRAND)</span>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <label className="block text-xs font-bold text-stone-400 uppercase tracking-wider">Allocated Budget Range</label>
                        <div className="grid grid-cols-2 gap-3">
                          {[
                            '₹1,00,000 - ₹3,00,000',
                            '₹3,00,000 - ₹8,00,000',
                            '₹8,00,000 - ₹15,00,000',
                            '₹15,00,000+'
                          ].map((b) => (
                            <button
                              type="button"
                              key={b}
                              onClick={() => setBudget(b)}
                              className={`py-2 px-3 text-center rounded text-[10px] md:text-xs tracking-wider transition-colors font-semibold border cursor-pointer ${
                                budget === b
                                  ? 'bg-yellow-500 text-stone-950 border-yellow-500'
                                  : 'bg-stone-950 border-stone-850 hover:border-yellow-500/30 text-stone-300'
                              }`}
                            >
                              {b}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* STEP 4: CONTACT & DETAILS */}
                {step === 4 && (
                  <motion.div
                    key="step-4"
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                    className="space-y-6"
                  >
                    <div className="flex items-center space-x-2 border-b border-stone-900 pb-3">
                      <User className="w-4 h-4 text-yellow-500" />
                      <h3 className="font-serif-lux text-lg font-bold text-stone-200">Contact Details & Ambition</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="block text-xs font-bold text-stone-400 uppercase tracking-wider">Full Name</label>
                        <div className="relative">
                          <User className="absolute left-3 top-3.5 w-4 h-4 text-stone-500" />
                          <input
                            type="text"
                            placeholder="e.g. Eleanor Sterling"
                            value={customerName}
                            onChange={(e) => setCustomerName(e.target.value)}
                            className={`w-full bg-stone-950 border rounded pl-10 pr-4 py-3 text-xs md:text-sm text-stone-200 focus:outline-none ${
                              errors.customerName ? 'border-red-500' : 'border-stone-850 focus:border-yellow-500/50'
                            }`}
                          />
                        </div>
                        {errors.customerName && <p className="text-red-400 text-[10px] tracking-wide">{errors.customerName}</p>}
                      </div>

                      <div className="space-y-2">
                        <label className="block text-xs font-bold text-stone-400 uppercase tracking-wider">Email Directory</label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3.5 w-4 h-4 text-stone-500" />
                          <input
                            type="email"
                            placeholder="e.g. eleanor@luxury.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={`w-full bg-stone-950 border rounded pl-10 pr-4 py-3 text-xs md:text-sm text-stone-200 focus:outline-none ${
                              errors.email ? 'border-red-500' : 'border-stone-850 focus:border-yellow-500/50'
                            }`}
                          />
                        </div>
                        {errors.email && <p className="text-red-400 text-[10px] tracking-wide">{errors.email}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="block text-xs font-bold text-stone-400 uppercase tracking-wider">Mobile Number (WhatsApp Enabled)</label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-3.5 w-4 h-4 text-stone-500" />
                          <input
                            type="text"
                            placeholder="e.g. +1 (555) 123-4567"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className={`w-full bg-stone-950 border rounded pl-10 pr-4 py-3 text-xs md:text-sm text-stone-200 focus:outline-none ${
                              errors.phone ? 'border-red-500' : 'border-stone-850 focus:border-yellow-500/50'
                            }`}
                          />
                        </div>
                        {errors.phone && <p className="text-red-400 text-[10px] tracking-wide">{errors.phone}</p>}
                      </div>

                      <div className="space-y-2">
                        <label className="block text-xs font-bold text-stone-400 uppercase tracking-wider">Social / Instagram (Optional)</label>
                        <input
                          type="text"
                          placeholder="e.g. @eleanor_sterling"
                          className="w-full bg-stone-950 border border-stone-850 rounded px-4 py-3 text-xs md:text-sm text-stone-200 focus:outline-none focus:border-yellow-500/50"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-xs font-bold text-stone-400 uppercase tracking-wider">Describe your artistic ambition or details</label>
                      <textarea
                        rows={4}
                        placeholder="Detail any visual themes, expected schedules, drone shoot requirements, or editorial ideas..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full bg-stone-950 border border-stone-850 rounded px-4 py-3 text-xs md:text-sm text-stone-200 focus:outline-none focus:border-yellow-500/50"
                      />
                    </div>
                  </motion.div>
                )}

                {/* STEP 5: PROPOSAL SUMMARY SHEET */}
                {step === 5 && (
                  <motion.div
                    key="step-5"
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                    className="space-y-6"
                  >
                    <div className="flex items-center space-x-2 border-b border-stone-900 pb-3">
                      <Sparkles className="w-4 h-4 text-yellow-500" />
                      <h3 className="font-serif-lux text-lg font-bold text-stone-200">The Visual Proposal Curation</h3>
                    </div>

                    <p className="text-stone-400 text-xs font-light">
                      Please review your dossier details before finalizing submission. These items represent the starting roadmap for Sebastian Vane and our studio retouchers.
                    </p>

                    <div className="bg-stone-950 rounded-lg border border-stone-900 overflow-hidden divide-y divide-stone-900">
                      
                      {/* Concept detail row */}
                      <div className="p-4 md:p-5 grid grid-cols-1 md:grid-cols-12 gap-2 text-xs font-light">
                        <div className="md:col-span-4 text-stone-500 uppercase tracking-wider font-mono">CONCEPTS SELECTED</div>
                        <div className="md:col-span-8 text-stone-200 font-bold">
                          {eventType} &mdash; <span className="text-yellow-400">{packageType}</span>
                        </div>
                      </div>

                      {/* Schedule detail row */}
                      <div className="p-4 md:p-5 grid grid-cols-1 md:grid-cols-12 gap-2 text-xs font-light">
                        <div className="md:col-span-4 text-stone-500 uppercase tracking-wider font-mono">DATE & TIMEFRAME</div>
                        <div className="md:col-span-8 text-stone-200 font-semibold font-mono">
                          {date} @ {time}
                        </div>
                      </div>

                      {/* Terrain venue detail row */}
                      <div className="p-4 md:p-5 grid grid-cols-1 md:grid-cols-12 gap-2 text-xs font-light">
                        <div className="md:col-span-4 text-stone-500 uppercase tracking-wider font-mono">DESTINATION VENUE</div>
                        <div className="md:col-span-8 text-stone-200 font-semibold flex items-center space-x-1">
                          <MapPin className="w-3.5 h-3.5 text-yellow-500 shrink-0" />
                          <span>{location}</span>
                        </div>
                      </div>

                      {/* Scope detail row */}
                      <div className="p-4 md:p-5 grid grid-cols-1 md:grid-cols-12 gap-2 text-xs font-light">
                        <div className="md:col-span-4 text-stone-500 uppercase tracking-wider font-mono">ESTIMATED GUESTS & BUDGET</div>
                        <div className="md:col-span-8 text-stone-200">
                          {guestCount} Guests • <span className="text-yellow-400 font-semibold">{budget}</span>
                        </div>
                      </div>

                      {/* Profile details row */}
                      <div className="p-4 md:p-5 grid grid-cols-1 md:grid-cols-12 gap-2 text-xs font-light">
                        <div className="md:col-span-4 text-stone-500 uppercase tracking-wider font-mono">CLIENT PROFILE</div>
                        <div className="md:col-span-8 text-stone-300">
                          <span className="font-bold text-white block">{customerName}</span>
                          <span className="block">{email} • {phone}</span>
                        </div>
                      </div>

                      {/* Ambition text row */}
                      {message && (
                        <div className="p-4 md:p-5 grid grid-cols-1 md:grid-cols-12 gap-2 text-xs font-light">
                          <div className="md:col-span-4 text-stone-500 uppercase tracking-wider font-mono">AMBITION NOTE</div>
                          <div className="md:col-span-8 text-stone-400 italic">
                            "{message}"
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="flex items-center space-x-2.5 p-4 bg-yellow-500/5 border border-yellow-500/10 rounded-lg text-[11px] text-stone-400 font-light">
                      <DollarSign className="w-4 h-4 text-yellow-500 shrink-0" />
                      <p>
                        A formal commission quote is computed instantly based on date proximity and custom cargo variables. Sebastian Vane guarantees pricing schedules remain transparent.
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* Form Navigation Controls */}
                <div className="pt-6 border-t border-stone-900/80 flex justify-between items-center">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={prevStep}
                      className="px-5 py-2.5 bg-stone-900 hover:bg-stone-850 border border-stone-800 hover:border-stone-700 rounded-full text-stone-300 hover:text-white text-xs font-bold tracking-widest uppercase transition-all flex items-center space-x-1.5 cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>
                  ) : (
                    <div />
                  )}

                  {step < 5 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="px-6 py-2.5 bg-yellow-500 hover:bg-yellow-600 text-stone-950 rounded-full text-xs font-bold tracking-widest uppercase shadow-lg shadow-yellow-500/5 flex items-center space-x-1.5 cursor-pointer"
                    >
                      <span>Continue</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-8 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-stone-950 rounded-full text-xs font-bold tracking-widest uppercase shadow-xl shadow-amber-500/10 flex items-center space-x-1.5 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Booking</span>
                        </>
                      )}
                    </button>
                  )}
                </div>

              </form>
            )}
          </AnimatePresence>

        </div>

      </div>
    </div>
  );
};
