import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { ScrollProgress } from './components/ScrollProgress';
import { CustomCursor } from './components/CustomCursor';
import { Footer } from './components/Footer';

// Views
import { HomeView } from './views/HomeView';
import { PortfolioView } from './views/PortfolioView';
import { AboutView } from './views/AboutView';
import { ServicesView } from './views/ServicesView';
import { BookingView } from './views/BookingView';
import { ContactView } from './views/ContactView';
import { AdminView } from './views/AdminView';

// Framer motion for transitions
import { motion, AnimatePresence } from 'framer-motion';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    // Check if admin is logged in from prior session
    const status = localStorage.getItem('aura_admin_logged_in');
    if (status === 'true') {
      setIsAdminLoggedIn(true);
    }

    // Smooth page scrolling listener for selected package events (routes automatically to scheduler)
    const handleSelectPackageEvent = () => {
      setCurrentPage('booking');
    };

    window.addEventListener('select-package', handleSelectPackageEvent);
    return () => window.removeEventListener('select-package', handleSelectPackageEvent);
  }, []);

  const handleLoginAdmin = () => {
    setIsAdminLoggedIn(true);
    localStorage.setItem('aura_admin_logged_in', 'true');
  };

  const handleLogoutAdmin = () => {
    setIsAdminLoggedIn(false);
    localStorage.removeItem('aura_admin_logged_in');
  };

  const renderActivePage = () => {
    switch (currentPage) {
      case 'home':
        return <HomeView setCurrentPage={setCurrentPage} />;
      case 'portfolio':
        return <PortfolioView />;
      case 'about':
        return <AboutView />;
      case 'services':
        return <ServicesView />;
      case 'booking':
        return <BookingView />;
      case 'contact':
        return <ContactView />;
      case 'admin':
        return (
          <AdminView
            isAdminLoggedIn={isAdminLoggedIn}
            onLoginAdmin={handleLoginAdmin}
            onLogoutAdmin={handleLogoutAdmin}
          />
        );
      default:
        return <HomeView setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="relative min-h-screen bg-stone-950 text-stone-100 flex flex-col justify-between selection:bg-yellow-500/30 selection:text-yellow-400">
      
      {/* 1. Global Custom Cursor */}
      <CustomCursor />

      {/* 2. Global Scroll progress Bar */}
      <ScrollProgress />

      {/* 3. Global Luxury Navigation bar */}
      <Navbar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        isAdminLoggedIn={isAdminLoggedIn}
        onLogoutAdmin={handleLogoutAdmin}
      />

      {/* 4. Smooth Animated Central View Container */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.45, ease: 'easeInOut' }}
          >
            {renderActivePage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* 5. Global Brand Footer */}
      <Footer setCurrentPage={setCurrentPage} />

    </div>
  );
}
