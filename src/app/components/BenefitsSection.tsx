import React from 'react';
import { motion } from 'motion/react';
import { Zap, Target, Heart, PiggyBank, GraduationCap, Home } from 'lucide-react';

const benefits = [
  {
    icon: Zap,
    title: 'Lower Rates Than Credit Cards',
    description: 'Save thousands with HELOC rates typically 5-10% lower than credit cards.',
  },
  {
    icon: Target,
    title: 'Flexible Access',
    description: 'Draw funds as needed, pay interest only on what you use.',
  },
  {
    icon: Heart,
    title: 'Tax Advantages',
    description: 'Interest may be tax-deductible for home improvements.',
  },
  {
    icon: PiggyBank,
    title: 'Fund Your Dreams',
    description: 'Renovations, investments, or consolidate high-interest debt.',
  },
  {
    icon: GraduationCap,
    title: 'Education Expenses',
    description: 'Finance education without high-interest student loans.',
  },
  {
    icon: Home,
    title: 'Build Home Value',
    description: 'Invest back into your property and increase its worth.',
  },
];

export function BenefitsSection() {
  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8 bg-cyan-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl mb-4 text-gray-900" style={{ fontWeight: 700 }}>
            Why Choose a HELOC?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Turn your home equity into opportunity
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 h-full shadow-xl hover:shadow-2xl transition-all">
                  <motion.div
                    className="w-14 h-14 bg-[#026EC4] rounded-xl flex items-center justify-center mb-5 shadow-lg group-hover:shadow-xl transition-shadow"
                    whileHover={{ rotate: 5 }}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </motion.div>

                  <h3 className="text-xl mb-3 text-gray-900" style={{ fontWeight: 600 }}>
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
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