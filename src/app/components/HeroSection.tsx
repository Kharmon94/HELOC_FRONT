import React from 'react';
import { motion } from 'motion/react';
import { Shield, Lock, CheckCircle2 } from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (page: string) => void;
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <div className="relative overflow-hidden px-[0px] pt-[120px] pb-[0px] bg-[#ECFEFF]">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Text Content */}
          <motion.h1 
            className="text-gray-900 text-5xl sm:text-6xl lg:text-7xl mb-6"
            style={{ fontWeight: 700, lineHeight: 1.1 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Unlock Cash With a Home Equity Line of Credit
          </motion.h1>

          <motion.p 
            className="text-xl sm:text-2xl text-gray-600 mb-10"
            style={{ fontWeight: 400 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Find out what you could access in under 60 seconds.
          </motion.p>

          {/* Trust indicators */}
          <motion.div 
            className="flex flex-wrap justify-center gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <span className="text-sm text-gray-700">No credit impact</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-600" />
              <span className="text-sm text-gray-700">Secure</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-5 h-5 text-green-600" />
              <span className="text-sm text-gray-700">No obligation</span>
            </div>
          </motion.div>

          {/* Shop Rates Button */}
          <motion.button
            className="px-12 py-5 bg-[#026EC4] text-white rounded-full text-xl shadow-lg hover:shadow-xl hover:bg-[#0ECEEO] transition-all"
            onClick={() => onNavigate('survey')}
            style={{ fontWeight: 600 }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Shop Rates →
          </motion.button>
        </div>
      </div>
    </div>
  );
}