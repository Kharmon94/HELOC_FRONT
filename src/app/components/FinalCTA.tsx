import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface FinalCTAProps {
  onNavigate: (page: string) => void;
}

export function FinalCTA({ onNavigate }: FinalCTAProps) {
  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8 bg-[#ECFEFF] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ top: '20%', left: '10%' }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ bottom: '20%', right: '10%' }}
        />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            
            <span className="text-black font-bold text-[48px]">Start Your Journey Today</span>
          </motion.div>

          

          <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
            Join thousands of homeowners who've discovered financial freedom through their home equity.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="px-8 py-4 bg-[#026EC4] text-white rounded-full text-lg shadow-2xl hover:shadow-3xl hover:bg-[#0159a3] transition-all group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate('survey')}
              style={{ fontWeight: 600 }}
            >Shop Rates<ArrowRight className="inline-block w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" /></motion.button>

            
          </div>

          <p className="text-sm text-gray-600 mt-8">
            No credit check required • Takes less than 60 seconds • 100% free
          </p>
        </motion.div>
      </div>
    </div>
  );
}