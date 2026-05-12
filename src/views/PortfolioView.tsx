import React, { useState, useEffect } from 'react';
import { getPortfolio, getCategories, PortfolioItem, Category } from '../utils/mockDb';
import { Camera, MapPin, Calendar, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const PortfolioView: React.FC = () => {
  const [items, setItems] = useState<PortfolioItem[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [visibleCount, setVisibleCount] = useState(8);

  useEffect(() => {
    // Load portfolio & categories from database/localStorage
    setItems(getPortfolio());
    setCategories(getCategories());
  }, []);

  // Filter items based on selected category
  const filteredItems = activeCategory === 'all'
    ? items
    : items.filter(item => item.category === activeCategory);

  const displayedItems = filteredItems.slice(0, visibleCount);

  const handleImageLoad = (id: string) => {
    setLoadedImages(prev => ({ ...prev, [id]: true }));
  };

  const handleLoadMore = () => {
    setIsLoadingMore(true);
    setTimeout(() => {
      setVisibleCount(prev => prev + 4);
      setIsLoadingMore(false);
    }, 800);
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextSlide = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % displayedItems.length);
    }
  };

  const prevSlide = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + displayedItems.length) % displayedItems.length);
    }
  };

  return (
    <div className="bg-stone-950 text-stone-100 min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Intro */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <p className="text-xs text-yellow-500 tracking-[0.3em] font-semibold uppercase flex items-center justify-center">
            <span className="w-6 h-px bg-yellow-500/50 mr-2" />
            FINE ART PORTFOLIO
            <span className="w-6 h-px bg-yellow-500/50 ml-2" />
          </p>
          <h1 className="text-4xl md:text-6xl font-serif-lux font-bold tracking-tight">
            The Living <span className="text-luxury-gold italic">Gallery</span>
          </h1>
          <p className="text-stone-400 text-xs md:text-sm font-light leading-relaxed">
            Every photograph is curated, Retouched, and composed with international fine art sensibilities. Filter our catalog to explore our mastery of diverse lighting, terrain, and styles.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center flex-wrap gap-2 md:gap-4 mb-12 border-b border-stone-900 pb-6">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.slug);
                setVisibleCount(8); // Reset pagination on filter change
              }}
              className={`px-4 py-2 rounded-full text-[10px] md:text-xs font-semibold tracking-widest uppercase transition-all duration-300 cursor-pointer ${
                activeCategory === cat.slug
                  ? 'bg-yellow-500 text-stone-950 shadow-md'
                  : 'bg-stone-900/60 text-stone-400 hover:text-white border border-stone-800/80 hover:border-yellow-500/30'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Masonry-Style Grid */}
        {displayedItems.length === 0 ? (
          <div className="text-center py-20 bg-stone-900/10 rounded-lg border border-stone-900">
            <Camera className="w-12 h-12 text-stone-600 mx-auto mb-4" />
            <h3 className="font-serif-lux text-xl font-bold text-stone-300">No Masterpieces Found</h3>
            <p className="text-stone-500 text-xs mt-1 font-light">Add portfolio images via the Admin Dashboard.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {displayedItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layoutId={`portfolio-card-${item.id}`}
                className="group relative overflow-hidden rounded-lg border border-stone-900/80 bg-stone-900/30 interactive-card cursor-pointer"
                onClick={() => openLightbox(idx)}
              >
                {/* Skeletons loader */}
                {!loadedImages[item.id] && (
                  <div className="absolute inset-0 bg-stone-900 animate-pulse flex items-center justify-center">
                    <Camera className="w-8 h-8 text-stone-700 animate-spin" />
                  </div>
                )}

                <img
                  src={item.imageUrl}
                  alt={item.title}
                  onLoad={() => handleImageLoad(item.id)}
                  className={`w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.85] group-hover:brightness-95 ${
                    loadedImages[item.id] ? 'opacity-100' : 'opacity-0'
                  }`}
                />

                {/* Elegant Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="flex items-center space-x-1 text-[10px] font-bold tracking-widest text-yellow-500 uppercase mb-1">
                    <MapPin className="w-3 h-3" />
                    <span>{item.location}</span>
                  </div>
                  <h3 className="font-serif-lux text-lg font-bold text-stone-100 mb-1">{item.title}</h3>
                  <p className="text-stone-400 text-[11px] font-light leading-relaxed mb-3 line-clamp-2">
                    {item.description}
                  </p>
                  <div className="flex items-center space-x-1.5 text-[9px] font-mono text-stone-500">
                    <Calendar className="w-3 h-3" />
                    <span>{item.date}</span>
                  </div>
                </div>

                {/* Corner Expand Icon */}
                <div className="absolute top-4 right-4 bg-stone-950/60 backdrop-blur-md p-2 rounded-full border border-stone-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-stone-400 hover:text-white">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Load More Trigger */}
        {filteredItems.length > displayedItems.length && (
          <div className="flex justify-center mt-16">
            <button
              onClick={handleLoadMore}
              disabled={isLoadingMore}
              className="px-8 py-3.5 bg-stone-900 border border-stone-800 hover:border-yellow-500/40 rounded-full text-stone-300 hover:text-white font-semibold text-xs tracking-widest uppercase transition-all flex items-center space-x-2 cursor-pointer disabled:opacity-50"
            >
              {isLoadingMore ? (
                <>
                  <div className="w-3.5 h-3.5 rounded-full border-2 border-stone-500 border-t-yellow-500 animate-spin" />
                  <span>Curating Frames...</span>
                </>
              ) : (
                <span>Load More Works</span>
              )}
            </button>
          </div>
        )}

      </div>

      {/* 5. Custom Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-stone-950/95 backdrop-blur-md z-[9999] flex flex-col justify-between p-4 md:p-8"
          >
            {/* Top Bar inside modal */}
            <div className="flex items-center justify-between text-stone-400 text-xs tracking-widest uppercase relative z-50">
              <div className="flex items-center space-x-2">
                <Camera className="w-4 h-4 text-yellow-500" />
                <span className="font-serif-lux font-bold text-white">AURA LIGHTBOX</span>
              </div>
              <div>
                FRAME {lightboxIndex + 1} OF {displayedItems.length}
              </div>
              <button
                onClick={closeLightbox}
                className="p-2 bg-stone-900 hover:bg-stone-800 rounded-full text-stone-300 hover:text-white border border-stone-800 transition-colors cursor-pointer"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Central Slide Content */}
            <div className="relative flex-grow flex items-center justify-center my-4 overflow-hidden">
              
              {/* Left Arrow */}
              <button
                onClick={prevSlide}
                className="absolute left-2 md:left-6 z-50 p-3 rounded-full bg-stone-900/60 backdrop-blur-md text-stone-300 hover:text-white border border-stone-800/80 transition-colors cursor-pointer"
                title="Previous Slide"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Main Image Frame with animation */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={lightboxIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="max-h-[75vh] max-w-[85vw] flex items-center justify-center relative shadow-2xl rounded-md overflow-hidden border border-stone-800"
                >
                  <img
                    src={displayedItems[lightboxIndex].imageUrl}
                    alt={displayedItems[lightboxIndex].title}
                    className="max-h-[75vh] max-w-[85vw] object-contain rounded-md"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Right Arrow */}
              <button
                onClick={nextSlide}
                className="absolute right-2 md:right-6 z-50 p-3 rounded-full bg-stone-900/60 backdrop-blur-md text-stone-300 hover:text-white border border-stone-800/80 transition-colors cursor-pointer"
                title="Next Slide"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

            </div>

            {/* Bottom details card inside modal */}
            <div className="glassmorphism max-w-2xl mx-auto p-5 rounded-lg border border-stone-800 text-center w-full relative z-10">
              <span className="inline-block px-2.5 py-1 bg-stone-900 rounded-full border border-stone-800 text-[9px] text-yellow-500 uppercase tracking-widest font-mono mb-2">
                {displayedItems[lightboxIndex].category}
              </span>
              <h2 className="font-serif-lux text-xl md:text-2xl font-bold text-stone-100">
                {displayedItems[lightboxIndex].title}
              </h2>
              <p className="text-stone-400 text-xs font-light mt-1.5 max-w-lg mx-auto leading-relaxed">
                {displayedItems[lightboxIndex].description}
              </p>
              
              <div className="flex items-center justify-center space-x-6 mt-4 text-[10px] text-stone-500 font-mono">
                <div className="flex items-center space-x-1">
                  <MapPin className="w-3 h-3 text-yellow-500" />
                  <span>{displayedItems[lightboxIndex].location}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="w-3 h-3 text-yellow-500" />
                  <span>{displayedItems[lightboxIndex].date}</span>
                </div>
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};
