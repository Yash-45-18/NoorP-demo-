import React, { useState, useEffect } from 'react';
import {
  getPortfolio,
  savePortfolio,
  getBookings,
  saveBookings,
  getTestimonials,
  saveTestimonials,
  getCategories,
  PortfolioItem,
  Booking,
  Testimonial,
  Category
} from '../utils/mockDb';
import {
  Camera,
  Calendar,
  Lock,
  Users,
  TrendingUp,
  Trash2,
  CheckCircle,
  XCircle,
  Plus,
  RefreshCw,
  LogOut,
  Star,
  MapPin,
  AlertCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface AdminViewProps {
  isAdminLoggedIn: boolean;
  onLoginAdmin: () => void;
  onLogoutAdmin: () => void;
}

export const AdminView: React.FC<AdminViewProps> = ({
  isAdminLoggedIn,
  onLoginAdmin,
  onLogoutAdmin,
}) => {
  // Login State
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  // Dashboard Data State
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [portfolio, setPortfolio] = useState<PortfolioItem[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  // Form states for adding items
  const [newImage, setNewImage] = useState({
    title: '',
    category: 'weddings',
    imageUrl: '',
    description: '',
    location: '',
    date: ''
  });

  const [newTestimonial, setNewTestimonial] = useState({
    name: '',
    role: '',
    content: '',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80',
    shootType: 'Luxury Wedding'
  });

  const [activeTab, setActiveTab] = useState<'bookings' | 'portfolio' | 'testimonials'>('bookings');

  // Load and refresh state from database
  const refreshDbState = () => {
    setBookings(getBookings());
    setPortfolio(getPortfolio());
    setTestimonials(getTestimonials());
    setCategories(getCategories());
  };

  useEffect(() => {
    refreshDbState();
  }, [isAdminLoggedIn]);

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim() === 'admin' && password === 'password123') {
      onLoginAdmin();
      setLoginError('');
      setUsername('');
      setPassword('');
    } else {
      setLoginError('Invalid secret key or username. Please check your developer credentials.');
    }
  };

  // BOOKING MUTATIONS
  const updateBookingStatus = (id: string, newStatus: Booking['status']) => {
    const updated = bookings.map((b) => (b.id === id ? { ...b, status: newStatus } : b));
    setBookings(updated);
    saveBookings(updated);
  };

  const deleteBooking = (id: string) => {
    if (window.confirm('Are you absolutely sure you want to delete this client booking file?')) {
      const filtered = bookings.filter((b) => b.id !== id);
      setBookings(filtered);
      saveBookings(filtered);
    }
  };

  // PORTFOLIO MUTATIONS
  const handleAddImage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newImage.title || !newImage.imageUrl || !newImage.location) {
      alert('Please fill out Title, Image URL, and Location.');
      return;
    }

    const newItem: PortfolioItem = {
      id: 'p_' + Math.random().toString(36).substr(2, 9),
      ...newImage,
      date: newImage.date || new Date().toLocaleString('en-US', { month: 'long', year: 'numeric' })
    };

    const updated = [newItem, ...portfolio];
    setPortfolio(updated);
    savePortfolio(updated);

    // Reset Form
    setNewImage({
      title: '',
      category: 'weddings',
      imageUrl: '',
      description: '',
      location: '',
      date: ''
    });

    alert('Fine-art portfolio piece successfully registered in Live Database!');
  };

  const deletePortfolioItem = (id: string) => {
    if (window.confirm('Are you sure you want to discard this photograph from public view?')) {
      const filtered = portfolio.filter((item) => item.id !== id);
      setPortfolio(filtered);
      savePortfolio(filtered);
    }
  };

  // TESTIMONIAL MUTATIONS
  const handleAddTestimonial = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTestimonial.name || !newTestimonial.content || !newTestimonial.role) {
      alert('Please fill out Client Name, Role, and Review content.');
      return;
    }

    const newItem: Testimonial = {
      id: 't_' + Math.random().toString(36).substr(2, 9),
      ...newTestimonial
    };

    const updated = [newItem, ...testimonials];
    setTestimonials(updated);
    saveTestimonials(updated);

    // Reset Form
    setNewTestimonial({
      name: '',
      role: '',
      content: '',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80',
      shootType: 'Luxury Wedding'
    });

    alert('Client testimonial registered! Check Homepage view to confirm.');
  };

  const deleteTestimonialItem = (id: string) => {
    if (window.confirm('Delete this client testimonial?')) {
      const filtered = testimonials.filter((t) => t.id !== id);
      setTestimonials(filtered);
      saveTestimonials(filtered);
    }
  };

  // Computed Financial/Ledger values
  const computeTotalRevenueEstimate = () => {
    return bookings
      .filter((b) => b.status === 'Confirmed' || b.status === 'Completed')
      .reduce((acc, curr) => {
        if (curr.packageType.includes('Royale')) return acc + 8500;
        if (curr.packageType.includes('Classic')) return acc + 4500;
        if (curr.packageType.includes('Grandeur')) return acc + 14000;
        return acc + 6000; // Default flat estimate
      }, 0);
  };

  if (!isAdminLoggedIn) {
    /* ADMIN SECURITY GATE */
    return (
      <div className="bg-stone-950 text-stone-100 min-h-screen pt-28 pb-20 flex items-center justify-center">
        <div className="max-w-md w-full px-4">
          
          <div className="text-center space-y-3 mb-8">
            <Lock className="w-10 h-10 text-yellow-500 mx-auto animate-pulse" />
            <h1 className="text-3xl font-serif-lux font-bold tracking-tight">Noor Admin Access</h1>
            <p className="text-stone-500 text-xs font-light">
              Enter credentials to access the Noor Studio admin dashboard.
            </p>
          </div>

          <div className="glassmorphism p-8 rounded-lg border border-stone-900 shadow-2xl relative">
            <form onSubmit={handleLoginSubmit} className="space-y-5">
              
              <div className="space-y-1.5">
                <label className="text-[10px] uppercase font-bold tracking-wider text-stone-400">username directory</label>
                <input
                  type="text"
                  required
                  placeholder="admin"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full bg-stone-950 border border-stone-850 rounded px-4 py-2.5 text-xs text-stone-200 focus:outline-none focus:border-yellow-500/50"
                />
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between items-baseline">
                  <label className="text-[10px] uppercase font-bold tracking-wider text-stone-400">pass-phrase key</label>
                  <span className="text-[9px] font-mono text-stone-600">Tip: password123</span>
                </div>
                <input
                  type="password"
                  required
                  placeholder="••••••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-stone-950 border border-stone-850 rounded px-4 py-2.5 text-xs text-stone-200 focus:outline-none focus:border-yellow-500/50"
                />
              </div>

              {loginError && (
                <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-400 text-[10px] rounded flex items-start space-x-2">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                  <span>{loginError}</span>
                </div>
              )}

              <button
                type="submit"
                className="w-full py-2.5 bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-stone-950 rounded font-bold text-xs tracking-widest uppercase cursor-pointer"
              >
                Authenticate Gateway
              </button>
            </form>
          </div>

          <div className="text-center mt-6 text-[10px] text-stone-600 font-mono">
            <span>SECURE SYSTEM PROTOCOL v15.1</span>
          </div>

        </div>
      </div>
    );
  }

  /* FULL ADMIN INTERFACE PANEL */
  return (
    <div className="bg-stone-950 text-stone-100 min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Panel */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between border-b border-stone-900 pb-8 mb-10">
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
              <p className="text-xs font-bold text-amber-500 tracking-[0.25em] uppercase font-mono">noor studio admin</p>
            </div>
            <h1 className="text-3xl font-serif-lux font-bold text-stone-100">Studio Dashboard</h1>
          </div>

          <div className="flex items-center space-x-3 mt-4 md:mt-0">
            <button
              onClick={refreshDbState}
              className="p-2.5 bg-stone-900 border border-stone-850 hover:bg-stone-800 rounded-full text-stone-400 hover:text-white transition-colors cursor-pointer"
              title="Refresh Database Grid"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                onLogoutAdmin();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-4 py-2 bg-red-500/10 hover:bg-red-500/20 border border-red-500/25 rounded-full text-red-400 text-xs font-bold tracking-widest uppercase flex items-center space-x-1.5 cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Log Out</span>
            </button>
          </div>
        </div>

        {/* Analytics Summary Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          
          <div className="glassmorphism p-6 rounded-lg border border-stone-900 flex items-center justify-between">
            <div className="space-y-1">
              <p className="text-stone-500 text-[10px] uppercase font-bold tracking-wider font-mono">Gross ledger value</p>
              <p className="text-2xl font-serif-lux font-bold text-luxury-gold">${computeTotalRevenueEstimate().toLocaleString()}</p>
              <p className="text-stone-600 text-[9px]">Calculated from confirmed sessions</p>
            </div>
            <div className="p-3 bg-stone-900 border border-stone-800 rounded-md text-yellow-500">
              <TrendingUp className="w-5 h-5" />
            </div>
          </div>

          <div className="glassmorphism p-6 rounded-lg border border-stone-900 flex items-center justify-between">
            <div className="space-y-1">
              <p className="text-stone-500 text-[10px] uppercase font-bold tracking-wider font-mono">Total client proposals</p>
              <p className="text-2xl font-serif-lux font-bold text-stone-100">{bookings.length}</p>
              <p className="text-stone-600 text-[9px]">{bookings.filter(b => b.status === 'Pending').length} Pending files require review</p>
            </div>
            <div className="p-3 bg-stone-900 border border-stone-800 rounded-md text-yellow-500">
              <Calendar className="w-5 h-5" />
            </div>
          </div>

          <div className="glassmorphism p-6 rounded-lg border border-stone-900 flex items-center justify-between">
            <div className="space-y-1">
              <p className="text-stone-500 text-[10px] uppercase font-bold tracking-wider font-mono">fine art image assets</p>
              <p className="text-2xl font-serif-lux font-bold text-stone-100">{portfolio.length}</p>
              <p className="text-stone-600 text-[9px]">Categories: {categories.length - 1} active filters</p>
            </div>
            <div className="p-3 bg-stone-900 border border-stone-800 rounded-md text-yellow-500">
              <Camera className="w-5 h-5" />
            </div>
          </div>

          <div className="glassmorphism p-6 rounded-lg border border-stone-900 flex items-center justify-between">
            <div className="space-y-1">
              <p className="text-stone-500 text-[10px] uppercase font-bold tracking-wider font-mono">saved testimonials</p>
              <p className="text-2xl font-serif-lux font-bold text-stone-100">{testimonials.length}</p>
              <p className="text-stone-600 text-[9px]">Avg Star Rating: 5.0 / 5.0</p>
            </div>
            <div className="p-3 bg-stone-900 border border-stone-800 rounded-md text-yellow-500">
              <Users className="w-5 h-5" />
            </div>
          </div>

        </div>

        {/* Tab Selection */}
        <div className="flex border-b border-stone-900 mb-8 overflow-x-auto gap-2">
          {[
            { id: 'bookings', label: 'Bookings Coordinator', icon: Calendar },
            { id: 'portfolio', label: 'Portfolio Asset Manager', icon: Camera },
            { id: 'testimonials', label: 'Testimonials Curation', icon: Users }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center space-x-2 px-6 py-3 border-b-2 text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                activeTab === tab.id
                  ? 'border-yellow-500 text-yellow-500'
                  : 'border-transparent text-stone-500 hover:text-stone-300'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content display */}
        <AnimatePresence mode="wait">
          
          {/* TAB 1: BOOKING COORDINATOR MANAGER */}
          {activeTab === 'bookings' && (
            <motion.div
              key="bookings-tab"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-6"
            >
              <div className="flex justify-between items-baseline border-b border-stone-900 pb-3">
                <h2 className="font-serif-lux text-xl font-bold text-stone-200">Scheduled Client Bookings</h2>
                <span className="text-[10px] font-mono text-stone-500">TOTAL: {bookings.length} DOSSIERS</span>
              </div>

              {bookings.length === 0 ? (
                <div className="text-center py-16 bg-stone-900/10 border border-stone-900 rounded-md">
                  <p className="text-stone-500 text-xs">No client proposals registered inside local database archive.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {bookings.map((booking) => (
                    <div
                      key={booking.id}
                      className="bg-stone-900/20 border border-stone-900 p-6 rounded-lg flex flex-col lg:flex-row justify-between gap-6"
                    >
                      <div className="space-y-4 flex-grow">
                        {/* Title details bar */}
                        <div className="flex flex-wrap items-baseline gap-2.5">
                          <h3 className="font-serif-lux text-lg font-bold text-stone-100">{booking.customerName}</h3>
                          <span className="px-2.5 py-0.5 rounded text-[9px] font-bold uppercase font-mono tracking-widest border border-stone-800 bg-stone-900 text-stone-400">
                            ID: {booking.id}
                          </span>
                          <span className="px-2 py-0.5 rounded text-[9px] font-mono tracking-widest text-stone-500">
                            SUBMITTED {new Date(booking.createdAt).toLocaleDateString()}
                          </span>
                        </div>

                        {/* Booking metadata grids */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-light">
                          <div className="space-y-1">
                            <p className="text-stone-500 font-mono text-[9px] uppercase">Concept Shoot</p>
                            <p className="text-stone-300 font-bold">{booking.eventType} ({booking.packageType})</p>
                          </div>
                          <div className="space-y-1">
                            <p className="text-stone-500 font-mono text-[9px] uppercase">Schedule Timeframe</p>
                            <p className="text-yellow-400 font-semibold font-mono">{booking.date} @ {booking.time}</p>
                          </div>
                          <div className="space-y-1">
                            <p className="text-stone-500 font-mono text-[9px] uppercase">Location Terrain</p>
                            <p className="text-stone-300 flex items-center gap-1">
                              <MapPin className="w-3 h-3 text-stone-500" />
                              <span>{booking.location}</span>
                            </p>
                          </div>
                          <div className="space-y-1">
                            <p className="text-stone-500 font-mono text-[9px] uppercase">Assigned Contact Details</p>
                            <p className="text-stone-300 font-mono">{booking.email} • {booking.phone}</p>
                          </div>
                        </div>

                        {/* Customer note */}
                        {booking.message && (
                          <div className="p-3 bg-stone-950/60 rounded border border-stone-900 text-xs text-stone-400 italic">
                            "{booking.message}"
                          </div>
                        )}

                        {/* Status elements */}
                        <div className="flex items-center space-x-3 pt-1">
                          <span className="text-[10px] font-mono text-stone-500 uppercase font-bold">Proposal State:</span>
                          <span
                            className={`px-3 py-1 rounded-full text-[9px] font-bold tracking-widest uppercase font-mono ${
                              booking.status === 'Confirmed'
                                ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                                : booking.status === 'Rescheduled'
                                ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20'
                                : booking.status === 'Cancelled'
                                ? 'bg-rose-500/10 text-rose-450 border border-rose-500/20'
                                : 'bg-amber-500/10 text-yellow-400 border border-yellow-500/20'
                            }`}
                          >
                            {booking.status}
                          </span>
                        </div>
                      </div>

                      {/* Administrative Action Controllers */}
                      <div className="flex flex-row lg:flex-col justify-end gap-2.5 border-t lg:border-t-0 border-stone-900/85 pt-4 lg:pt-0 min-w-[160px]">
                        
                        {booking.status !== 'Confirmed' && (
                          <button
                            onClick={() => updateBookingStatus(booking.id, 'Confirmed')}
                            className="w-full py-2 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 text-[10px] font-bold tracking-wider uppercase rounded flex items-center justify-center space-x-1.5 cursor-pointer transition-colors"
                          >
                            <CheckCircle className="w-3.5 h-3.5" />
                            <span>Approve</span>
                          </button>
                        )}

                        {booking.status !== 'Rescheduled' && (
                          <button
                            onClick={() => updateBookingStatus(booking.id, 'Rescheduled')}
                            className="w-full py-2 bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-400 text-[10px] font-bold tracking-wider uppercase rounded flex items-center justify-center space-x-1.5 cursor-pointer transition-colors"
                          >
                            <RefreshCw className="w-3.5 h-3.5" />
                            <span>Reschedule</span>
                          </button>
                        )}

                        {booking.status !== 'Cancelled' && (
                          <button
                            onClick={() => updateBookingStatus(booking.id, 'Cancelled')}
                            className="w-full py-2 bg-rose-500/5 hover:bg-rose-500/15 text-rose-450 text-[10px] font-bold tracking-wider uppercase rounded flex items-center justify-center space-x-1.5 cursor-pointer transition-colors"
                          >
                            <XCircle className="w-3.5 h-3.5" />
                            <span>Cancel</span>
                          </button>
                        )}

                        <button
                          onClick={() => deleteBooking(booking.id)}
                          className="w-full py-2 bg-stone-950 hover:bg-red-500/10 text-stone-500 hover:text-red-400 text-[10px] font-bold tracking-wider uppercase rounded flex items-center justify-center space-x-1.5 cursor-pointer transition-colors"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                          <span>Delete file</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          )}

          {/* TAB 2: PORTFOLIO ASSET MANAGER */}
          {activeTab === 'portfolio' && (
            <motion.div
              key="portfolio-tab"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8"
            >
              
              {/* Left Column: Form to upload a new item */}
              <div className="lg:col-span-5 space-y-6">
                <div className="glassmorphism p-6 rounded-lg border border-stone-900 space-y-4">
                  <h3 className="font-serif-lux text-base font-bold text-stone-200 flex items-center space-x-2">
                    <Plus className="w-4 h-4 text-yellow-500" />
                    <span>Upload Fine-Art Asset</span>
                  </h3>

                  <form onSubmit={handleAddImage} className="space-y-4">
                    <div className="space-y-1">
                      <label className="text-[10px] text-stone-400 uppercase tracking-wider font-bold">Image Title *</label>
                      <input
                        type="text"
                        required
                        value={newImage.title}
                        onChange={(e) => setNewImage({ ...newImage, title: e.target.value })}
                        placeholder="e.g. Whispers of Florence"
                        className="w-full bg-stone-950 border border-stone-850 rounded px-3 py-2 text-xs text-stone-200 focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] text-stone-400 uppercase tracking-wider font-bold">Image URL *</label>
                      <input
                        type="url"
                        required
                        value={newImage.imageUrl}
                        onChange={(e) => setNewImage({ ...newImage, imageUrl: e.target.value })}
                        placeholder="Unsplash / Cloudinary complete URL link"
                        className="w-full bg-stone-950 border border-stone-850 rounded px-3 py-2 text-xs text-stone-200 focus:outline-none"
                      />
                      <p className="text-[9px] text-stone-500 font-mono">Input a visual URL link from hosting servers.</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-[10px] text-stone-400 uppercase tracking-wider font-bold">Category</label>
                        <select
                          value={newImage.category}
                          onChange={(e) => setNewImage({ ...newImage, category: e.target.value })}
                          className="w-full bg-stone-950 border border-stone-850 rounded px-3 py-2 text-xs text-stone-200 focus:outline-none"
                        >
                          {categories.filter(c => c.slug !== 'all').map((c) => (
                            <option key={c.id} value={c.slug}>{c.name}</option>
                          ))}
                        </select>
                      </div>

                      <div className="space-y-1">
                        <label className="text-[10px] text-stone-400 uppercase tracking-wider font-bold">Location</label>
                        <input
                          type="text"
                          required
                          value={newImage.location}
                          onChange={(e) => setNewImage({ ...newImage, location: e.target.value })}
                          placeholder="e.g. Florence, Italy"
                          className="w-full bg-stone-950 border border-stone-850 rounded px-3 py-2 text-xs text-stone-200 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] text-stone-400 uppercase tracking-wider font-bold">Description Details</label>
                      <textarea
                        rows={3}
                        value={newImage.description}
                        onChange={(e) => setNewImage({ ...newImage, description: e.target.value })}
                        placeholder="Ethereal fine-art session at dawn..."
                        className="w-full bg-stone-950 border border-stone-850 rounded px-3 py-2 text-xs text-stone-200 focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] text-stone-400 uppercase tracking-wider font-bold">Custom Date (Optional)</label>
                      <input
                        type="text"
                        value={newImage.date}
                        onChange={(e) => setNewImage({ ...newImage, date: e.target.value })}
                        placeholder="e.g. September 2025"
                        className="w-full bg-stone-950 border border-stone-850 rounded px-3 py-2 text-xs text-stone-200 focus:outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-2 bg-yellow-500 hover:bg-yellow-650 text-stone-950 text-xs tracking-widest uppercase font-bold rounded cursor-pointer"
                    >
                      Publish to Live Portfolio
                    </button>
                  </form>
                </div>
              </div>

              {/* Right Column: List of items to delete */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex justify-between items-baseline border-b border-stone-900 pb-2">
                  <h3 className="font-serif-lux text-base font-bold text-stone-200">Existing Media Catalog</h3>
                  <span className="text-[10px] font-mono text-stone-500">{portfolio.length} ACTIVE WORKS</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[600px] overflow-y-auto pr-2">
                  {portfolio.map((item) => (
                    <div
                      key={item.id}
                      className="bg-stone-900/30 border border-stone-900 rounded p-3 flex items-center space-x-3.5 hover:border-yellow-500/10 transition-colors"
                    >
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-16 h-16 object-cover rounded border border-stone-800 shrink-0"
                      />
                      <div className="flex-grow min-w-0 space-y-1">
                        <h4 className="font-serif-lux text-xs font-bold text-stone-200 truncate">{item.title}</h4>
                        <p className="text-[9px] text-yellow-500 font-mono uppercase tracking-wider truncate">{item.category}</p>
                        <p className="text-[10px] text-stone-500 font-light truncate flex items-center">
                          <MapPin className="w-3 h-3 text-stone-500 mr-1" />
                          <span>{item.location}</span>
                        </p>
                      </div>
                      <button
                        onClick={() => deletePortfolioItem(item.id)}
                        className="p-2 text-stone-500 hover:text-red-400 hover:bg-stone-900 rounded cursor-pointer transition-colors"
                        title="Delete image asset"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          )}

          {/* TAB 3: CLIENT TESTIMONIALS MANAGER */}
          {activeTab === 'testimonials' && (
            <motion.div
              key="testimonials-tab"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8"
            >
              {/* Left Form */}
              <div className="lg:col-span-5 space-y-6">
                <div className="glassmorphism p-6 rounded-lg border border-stone-900 space-y-4">
                  <h3 className="font-serif-lux text-base font-bold text-stone-200 flex items-center space-x-2">
                    <Plus className="w-4 h-4 text-yellow-500" />
                    <span>Create Testimonial Card</span>
                  </h3>

                  <form onSubmit={handleAddTestimonial} className="space-y-4">
                    <div className="space-y-1">
                      <label className="text-[10px] text-stone-400 uppercase tracking-wider font-bold">Client Couples / Brand Name *</label>
                      <input
                        type="text"
                        required
                        value={newTestimonial.name}
                        onChange={(e) => setNewTestimonial({ ...newTestimonial, name: e.target.value })}
                        placeholder="e.g. Julian & Marcella"
                        className="w-full bg-stone-950 border border-stone-850 rounded px-3 py-2 text-xs text-stone-200 focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] text-stone-400 uppercase tracking-wider font-bold">Role Title / Project Context *</label>
                      <input
                        type="text"
                        required
                        value={newTestimonial.role}
                        onChange={(e) => setNewTestimonial({ ...newTestimonial, role: e.target.value })}
                        placeholder="e.g. Lake Como Wedding Couple"
                        className="w-full bg-stone-950 border border-stone-850 rounded px-3 py-2 text-xs text-stone-200 focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] text-stone-400 uppercase tracking-wider font-bold">Review Content *</label>
                      <textarea
                        rows={4}
                        required
                        value={newTestimonial.content}
                        onChange={(e) => setNewTestimonial({ ...newTestimonial, content: e.target.value })}
                        placeholder="Sebastian has a raw visual eye..."
                        className="w-full bg-stone-950 border border-stone-850 rounded px-3 py-2 text-xs text-stone-200 focus:outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-[10px] text-stone-400 uppercase tracking-wider font-bold">Shoot category type</label>
                        <input
                          type="text"
                          value={newTestimonial.shootType}
                          onChange={(e) => setNewTestimonial({ ...newTestimonial, shootType: e.target.value })}
                          placeholder="e.g. Luxury Wedding"
                          className="w-full bg-stone-950 border border-stone-850 rounded px-3 py-2 text-xs text-stone-200 focus:outline-none"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[10px] text-stone-400 uppercase tracking-wider font-bold">Rating stars</label>
                        <select
                          value={newTestimonial.rating}
                          onChange={(e) => setNewTestimonial({ ...newTestimonial, rating: Number(e.target.value) })}
                          className="w-full bg-stone-950 border border-stone-850 rounded px-3 py-2 text-xs text-stone-200 focus:outline-none"
                        >
                          <option value="5">5 Stars Outstanding</option>
                          <option value="4">4 Stars Great</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] text-stone-400 uppercase tracking-wider font-bold">Avatar profile headshot URL</label>
                      <input
                        type="url"
                        value={newTestimonial.avatar}
                        onChange={(e) => setNewTestimonial({ ...newTestimonial, avatar: e.target.value })}
                        placeholder="Image URL Link"
                        className="w-full bg-stone-950 border border-stone-850 rounded px-3 py-2 text-xs text-stone-200 focus:outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-2 bg-yellow-500 hover:bg-yellow-650 text-stone-950 text-xs tracking-widest uppercase font-bold rounded cursor-pointer"
                    >
                      Publish Client Testimonial
                    </button>
                  </form>
                </div>
              </div>

              {/* Right list */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex justify-between items-baseline border-b border-stone-900 pb-2">
                  <h3 className="font-serif-lux text-base font-bold text-stone-200">Active Testimonials List</h3>
                  <span className="text-[10px] font-mono text-stone-500">{testimonials.length} VERIFIED REVIEWS</span>
                </div>

                <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
                  {testimonials.map((t) => (
                    <div
                      key={t.id}
                      className="bg-stone-900/30 border border-stone-900 p-4 rounded flex items-start gap-4"
                    >
                      <img
                        src={t.avatar}
                        alt={t.name}
                        className="w-12 h-12 rounded-full object-cover border border-stone-850 shrink-0"
                      />
                      <div className="flex-grow min-w-0 space-y-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-bold text-stone-200 text-xs uppercase tracking-wider">{t.name}</h4>
                            <p className="text-[9px] text-stone-500 font-mono">{t.role}</p>
                          </div>
                          <button
                            onClick={() => deleteTestimonialItem(t.id)}
                            className="p-1.5 text-stone-500 hover:text-red-400 rounded cursor-pointer transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <div className="flex space-x-0.5 text-yellow-500 py-1">
                          {[...Array(t.rating)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-current" />
                          ))}
                        </div>
                        <p className="text-stone-400 text-xs font-light italic leading-relaxed line-clamp-3">
                          "{t.content}"
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          )}

        </AnimatePresence>

      </div>
    </div>
  );
};
