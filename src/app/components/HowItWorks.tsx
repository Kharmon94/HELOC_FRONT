import React from 'react';
import { motion } from 'motion/react';
import { ClipboardCheck, Search, Handshake, DollarSign } from 'lucide-react';

const steps = [
  {
    icon: ClipboardCheck,
    title: 'Share A Few Details',
    description: 'Tell us about your home and financial goals in 60 seconds.',
    delay: 0.1,
  },
  {
    icon: Search,
    title: 'We Find The Best Matches',
    description: 'Our platform instantly connects you with trusted HELOC partners.',
    delay: 0.2,
  },
  {
    icon: Handshake,
    title: 'Compare & Choose',
    description: 'Review personalized offers with transparent rates and terms.',
    delay: 0.3,
  },
  {
    icon: DollarSign,
    title: 'Access Your Cash',
    description: 'Get funded and unlock your equity for what matters most.',
    delay: 0.4,
  },
];

export function HowItWorks() {
  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl mb-4 text-gray-900" style={{ fontWeight: 700 }}>
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Four simple steps to unlock your home equity
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: step.delay }}
                whileHover={{ y: -10 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-8 shadow-xl h-full hover:shadow-2xl transition-shadow">
                  {/* Step number */}
                  

                  {/* Icon */}
                  <div className="w-16 h-16 bg-[#026EC4] rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl mb-3 text-gray-900" style={{ fontWeight: 600 }}>
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}