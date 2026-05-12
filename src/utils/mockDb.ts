// Premium Mock Database with LocalStorage Persistence — Indian Luxury Edition
// All content localized for Indian high-end wedding & editorial photography market

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
  location: string;
  date: string;
}

export interface Booking {
  id: string;
  customerName: string;
  email: string;
  phone: string;
  eventType: string;
  packageType: string;
  date: string;
  time: string;
  location: string;
  guestCount: number;
  budget: string;
  message: string;
  status: 'Pending' | 'Confirmed' | 'Rescheduled' | 'Cancelled' | 'Completed';
  createdAt: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
  shootType: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
}

export const DEFAULT_CATEGORIES: Category[] = [
  { id: '1', name: 'All Works', slug: 'all' },
  { id: '2', name: 'Weddings', slug: 'weddings' },
  { id: '3', name: 'Haldi & Mehndi', slug: 'haldi-mehndi' },
  { id: '4', name: 'Sangeet & Baraat', slug: 'sangeet-baraat' },
  { id: '5', name: 'Couples & Portraits', slug: 'couples-portraits' },
  { id: '6', name: 'Fashion & Editorials', slug: 'fashion' },
  { id: '7', name: 'Cinematic Films', slug: 'cinematic-films' },
  { id: '8', name: 'Events & Corporate', slug: 'events' }
];

export const DEFAULT_PORTFOLIO: PortfolioItem[] = [
  {
    id: 'p1',
    title: 'The Royal Udaipur Vows',
    category: 'weddings',
    imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    description: 'A breathtaking sunset ceremony at the Taj Lake Palace, with the Aravalli hills reflecting in Lake Pichola.',
    location: 'Taj Lake Palace, Udaipur',
    date: 'February 2025'
  },
  {
    id: 'p2',
    title: 'Golden Haldi Moments',
    category: 'haldi-mehndi',
    imageUrl: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80',
    description: 'The warmth of turmeric rituals captured with natural light through the courtyard of a heritage haveli.',
    location: 'Samode Haveli, Jaipur',
    date: 'November 2025'
  },
  {
    id: 'p3',
    title: 'The Royal Baraat Entry',
    category: 'sangeet-baraat',
    imageUrl: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80',
    description: 'A groom arriving on a majestic white Marwari horse through the grand gates of a Rajasthani fort.',
    location: 'Mehrangarh Fort, Jodhpur',
    date: 'December 2025'
  },
  {
    id: 'p4',
    title: 'Kerala Backwater Romance',
    category: 'couples-portraits',
    imageUrl: 'https://images.unsplash.com/photo-1475503572774-15a45e5d60b9?auto=format&fit=crop&w=1200&q=80',
    description: 'A serene pre-wedding couple session on a traditional houseboat drifting through the emerald backwaters.',
    location: 'Alleppey, Kerala',
    date: 'January 2025'
  },
  {
    id: 'p5',
    title: 'Desert Dunes of Jaisalmer',
    category: 'couples-portraits',
    imageUrl: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80',
    description: 'Cinematic pre-wedding portraits captured in the golden sands of the Thar Desert at sunset.',
    location: 'Sam Sand Dunes, Jaisalmer',
    date: 'October 2025'
  },
  {
    id: 'p6',
    title: 'Bridal Lehenga Editorial',
    category: 'fashion',
    imageUrl: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=80',
    description: 'High-fashion bridal portrait showcasing a Sabyasachi ivory lehenga against heritage Rajput architecture.',
    location: 'City Palace, Udaipur',
    date: 'March 2025'
  },
  {
    id: 'p7',
    title: 'Mumbai Couture Week',
    category: 'fashion',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80',
    description: 'Backstage editorial at India Couture Week capturing raw moments before the runway.',
    location: 'Taj Mahal Palace, Mumbai',
    date: 'July 2025'
  },
  {
    id: 'p8',
    title: 'The Maharaja Portrait',
    category: 'couples-portraits',
    imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80',
    description: 'A regal studio portrait with dramatic shadows, royal sherwani, and antique jewellery detailing.',
    location: 'Noor Studio, Mumbai',
    date: 'April 2025'
  },
  {
    id: 'p9',
    title: 'Aerial View of Neemrana Fort',
    category: 'cinematic-films',
    imageUrl: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1200&q=80',
    description: 'A sweeping drone capture of the 15th-century Neemrana Fort Palace illuminated for a grand destination wedding.',
    location: 'Neemrana Fort, Rajasthan',
    date: 'November 2025'
  },
  {
    id: 'p10',
    title: 'Goa Beach Ceremony',
    category: 'weddings',
    imageUrl: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=1200&q=80',
    description: 'An intimate beach wedding at the W Goa with Arabian Sea waves and Portuguese-inspired architecture.',
    location: 'W Goa, Vagator',
    date: 'December 2025'
  },
  {
    id: 'p11',
    title: 'Sangeet Night Choreography',
    category: 'sangeet-baraat',
    imageUrl: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80',
    description: 'Dramatic low-light photography capturing the energy of a Bollywood-inspired sangeet dance performance.',
    location: 'The Oberoi Udaivilas',
    date: 'February 2025'
  },
  {
    id: 'p12',
    title: 'Luxury Brand Launch',
    category: 'events',
    imageUrl: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1200&q=80',
    description: 'Premium product photography and event coverage for a luxury jewellery launch in South Mumbai.',
    location: 'Four Seasons, Mumbai',
    date: 'September 2025'
  }
];

export const DEFAULT_TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Aditya & Priya Malhotra',
    role: 'Taj Lake Palace, Udaipur Wedding',
    content: 'Noor Studio captured our three-day Udaipur wedding like it was a scene from a Sanjay Leela Bhansali film. Every haldi moment, every sangeet dance, every tear during the phere — preserved in absolute cinematic perfection. Our families are still in awe of the album.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80',
    shootType: 'Royal Destination Wedding'
  },
  {
    id: 't2',
    name: 'Kabir Mehta',
    role: 'Creative Director, Sabyasayi Campaign',
    content: 'Working with Noor Studio on our bridal editorial was an absolute revelation. The way they understand light, composition, and the cultural depth of Indian bridal fashion is truly world-class. Every frame looks like it belongs in Vogue India.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&h=150&q=80',
    shootType: 'Bridal Fashion Editorial'
  },
  {
    id: 't3',
    name: 'Ritika & Vikram Singhania',
    role: 'Neemrana Fort Destination Wedding',
    content: 'From the mehndi ceremony under the stars to the grand baraat entry on horseback — Noor Studio made us feel like royalty in our own wedding film. Their attention to the small cultural details — the sindoor, the pheras, the bidaai — was deeply emotional and beautifully told.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=150&h=150&q=80',
    shootType: 'Heritage Fort Wedding'
  }
];

export const DEFAULT_BOOKINGS: Booking[] = [
  {
    id: 'b1',
    customerName: 'Ishita & Rohan Kapoor',
    email: 'ishita.kapoor@gmail.com',
    phone: '+91 98765 43210',
    eventType: 'Weddings',
    packageType: 'The Royal Heritage Package',
    date: '2026-02-14',
    time: '16:00',
    location: 'Taj Falaknuma Palace, Hyderabad',
    guestCount: 350,
    budget: '₹15,00,000 - ₹25,00,000',
    message: 'We are planning a grand 3-day destination wedding with haldi, sangeet, pheras, and reception. We need drone coverage of the palace, a cinematic highlight film, and full candid photography. Looking for that Sanjay Leela Bhansali grandeur.',
    status: 'Confirmed',
    createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    id: 'b2',
    customerName: 'Neha Desai',
    email: 'neha.desai@vogue.in',
    phone: '+91 91234 56789',
    eventType: 'Fashion',
    packageType: 'Editorial Campaign',
    date: '2026-07-20',
    time: '10:00',
    location: 'Mumbai Studio & Outdoor Locations',
    guestCount: 10,
    budget: '₹5,00,000 - ₹10,00,000',
    message: 'Bridal couture editorial for our September issue. We need studio portraits as well as on-location shots at heritage Mumbai buildings. Special focus on intricate zardozi and gota patti jewellery details.',
    status: 'Pending',
    createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    id: 'b3',
    customerName: 'Arjun & Meera Rajput',
    email: 'arjun.rajput@outlook.com',
    phone: '+91 87654 32100',
    eventType: 'Pre-Wedding',
    packageType: 'The Enchanted Couple\'s Package',
    date: '2026-10-05',
    time: '06:00',
    location: 'Udaipur — Lake Pichola & Jag Mandir',
    guestCount: 2,
    budget: '₹2,00,000 - ₹5,00,000',
    message: 'We want a romantic pre-wedding shoot at sunrise in Udaipur. A boat session on Lake Pichola, shots at Jag Mandir, and some candid moments in the old city lanes. Looking for a dreamy, cinematic feel.',
    status: 'Rescheduled',
    createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString()
  }
];

// Helper functions to interact with our database with localStorage backup
export const getPortfolio = (): PortfolioItem[] => {
  const data = localStorage.getItem('noor_portfolio');
  if (!data) {
    localStorage.setItem('noor_portfolio', JSON.stringify(DEFAULT_PORTFOLIO));
    return DEFAULT_PORTFOLIO;
  }
  return JSON.parse(data);
};

export const savePortfolio = (items: PortfolioItem[]) => {
  localStorage.setItem('noor_portfolio', JSON.stringify(items));
};

export const getBookings = (): Booking[] => {
  const data = localStorage.getItem('noor_bookings');
  if (!data) {
    localStorage.setItem('noor_bookings', JSON.stringify(DEFAULT_BOOKINGS));
    return DEFAULT_BOOKINGS;
  }
  return JSON.parse(data);
};

export const saveBookings = (bookings: Booking[]) => {
  localStorage.setItem('noor_bookings', JSON.stringify(bookings));
};

export const getTestimonials = (): Testimonial[] => {
  const data = localStorage.getItem('noor_testimonials');
  if (!data) {
    localStorage.setItem('noor_testimonials', JSON.stringify(DEFAULT_TESTIMONIALS));
    return DEFAULT_TESTIMONIALS;
  }
  return JSON.parse(data);
};

export const saveTestimonials = (testimonials: Testimonial[]) => {
  localStorage.setItem('noor_testimonials', JSON.stringify(testimonials));
};

export const getCategories = (): Category[] => {
  const data = localStorage.getItem('noor_categories');
  if (!data) {
    localStorage.setItem('noor_categories', JSON.stringify(DEFAULT_CATEGORIES));
    return DEFAULT_CATEGORIES;
  }
  return JSON.parse(data);
};

export const saveCategories = (categories: Category[]) => {
  localStorage.setItem('noor_categories', JSON.stringify(categories));
};
