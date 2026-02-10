import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import logo from '@/assets/ff4a416c4f7e438ef1715fb8c96936568b791dfe.png';
import { canViewAdmin } from '@/utils/permissions';
import type { User } from '@/types';

type Page = 'home' | 'why-helocs' | 'about' | 'contact' | 'calculators' | 'partners' | 'survey' | 'admin';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  user?: User | null;
}

const baseNavItems = [
  { id: 'home' as const, label: 'Home' },
  { id: 'why-helocs' as const, label: 'Why HELOCs' },
  { id: 'calculators' as const, label: 'Calculators' },
  { id: 'partners' as const, label: 'Lending Partners' },
];

export function Header({ currentPage, onNavigate, user = null }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItems = [...baseNavItems, ...(canViewAdmin(user) ? [{ id: 'admin' as const, label: 'Admin' }] : [])];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (page: Page) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${ isScrolled ? 'bg-white/80 backdrop-blur-xl shadow-lg border-b border-gray-200' : 'bg-transparent' } px-[0px] py-[5px]`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-[32px] py-[15px]">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.button
            onClick={() => handleNavigate('home')}
            className="flex items-center gap-2 group mx-auto lg:mx-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img 
              src={logo} 
              alt="HELOC Guru" 
              className={`transition-all duration-300 ${ isScrolled ? 'h-[77px] md:h-[64px]' : 'h-[100px] md:h-[70px]' } m-[0px]`} 
            />
          </motion.button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`px-4 py-2 rounded-full transition-all ${
                  currentPage === item.id
                    ? 'bg-[#026EC4] text-white shadow-lg'
                    : 'bg-[#0ECEEO] text-gray-900 hover:bg-[#026EC4] hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ fontWeight: currentPage === item.id ? 600 : 500 }}
              >
                {item.label}
              </motion.button>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <motion.button
            className="hidden lg:block px-6 py-3 bg-[#026EC4] text-white rounded-full shadow-lg hover:shadow-xl hover:bg-[#0ECEEO] transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleNavigate('survey')}
            style={{ fontWeight: 600 }}
          >
            Get Started
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors absolute right-4"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden bg-cyan-50 border-t border-gray-200"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="px-4 py-6 space-y-2">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => handleNavigate(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl transition-all ${
                    currentPage === item.id
                      ? 'bg-[#026EC4] text-white'
                      : 'text-gray-700 hover:bg-cyan-200'
                  }`}
                  whileTap={{ scale: 0.98 }}
                  style={{ fontWeight: currentPage === item.id ? 600 : 500 }}
                >
                  {item.label}
                </motion.button>
              ))}
              <motion.button
                className="w-full px-4 py-3 bg-[#026EC4] text-white rounded-xl mt-4"
                whileTap={{ scale: 0.98 }}
                onClick={() => handleNavigate('survey')}
                style={{ fontWeight: 600 }}
              >
                Get Started
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}