import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'HOME' },
    { path: '/services', label: 'CAPABILITIES' },
    { path: '/industries', label: 'INDUSTRIES' },
    { path: '/blog', label: 'BLOG' },
    { path: '/about', label: 'ABOUT US' },
    { path: '/contact', label: 'CONTACT' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`
          fixed top-0 left-0 right-0 z-50 transition-all duration-300
          ${isScrolled ? 'bg-obsidian/95 backdrop-blur-sm border-b border-silver-steel/10' : 'bg-transparent'}
        `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24 sm:h-32">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 sm:gap-4">
              <div className="w-16 h-16 sm:w-24 sm:h-24 flex items-center justify-center">
                <img 
                  src="/images/logo.jpg" 
                  alt="Divine Lab Worx"
                  loading="lazy" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="hidden sm:flex items-center gap-3">
                <div className="h-10 w-px bg-silver-steel/30" />
                <span className="text-xs font-mono tracking-widest text-accent-muted uppercase">
                  Part of
                </span>
                <div className="w-28 sm:w-36">
                  <img 
                    src="/images/sharktech-logo.png" 
                    alt="Sharktech Global"
                    loading="lazy" 
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <nav className="flex items-center gap-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`
                      relative text-xs font-mono tracking-widest transition-colors duration-200
                      ${isActive(link.path) ? 'text-optical-white' : 'text-accent-muted hover:text-gold'}
                    `}
                  >
                    {link.label}
                    {isActive(link.path) && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute -bottom-1 left-0 right-0 h-px bg-gold"
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </Link>
                ))}
              </nav>
              
              {/* CTA Button */}
              <Link
                to="/contact"
                className="px-6 py-3 bg-gold text-obsidian text-xs font-semibold tracking-tight hover:bg-gold-light transition-colors"
              >
                ENGAGE DIVINE LAB WORX
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-optical-white"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-obsidian/98 backdrop-blur-md lg:hidden"
          >
            <nav className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`
                      text-2xl font-mono tracking-widest transition-colors
                      ${isActive(link.path) ? 'text-optical-white' : 'text-accent-muted hover:text-gold'}
                    `}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
              >
                <Link
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-8 py-4 bg-gold text-obsidian text-sm font-semibold tracking-tight"
                >
                  ENGAGE DIVINE LAB WORX
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
