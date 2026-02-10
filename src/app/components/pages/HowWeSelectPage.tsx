import React from 'react';
import { motion } from 'motion/react';
import { Award, Shield, Star, Users } from 'lucide-react';

const selectionCriteria = [
  {
    icon: Shield,
    title: 'Financial Stability',
    description: 'All partners are FDIC-insured institutions with strong financial ratings and decades of lending experience.',
  },
  {
    icon: Star,
    title: 'Customer Satisfaction',
    description: 'We only work with lenders who maintain high customer satisfaction scores and positive reviews.',
  },
  {
    icon: Award,
    title: 'Competitive Rates',
    description: 'Partners must offer market-competitive rates and transparent fee structures with no hidden costs.',
  },
  {
    icon: Users,
    title: 'Homeowner First',
    description: 'Every partner shares our commitment to putting homeowners\' needs first and providing exceptional service.',
  },
];

export function HowWeSelectPage() {
  return (
    <div className="pt-32">
      {/* Hero */}
      <div className="bg-[#026EC4] text-white px-[32px] py-[50px]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-5xl sm:text-6xl mb-6"
            style={{ fontWeight: 700 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            How We Select Partners
          </motion.h1>
          <motion.p
            className="text-xl text-white/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We maintain the highest standards to ensure you get the best experience
          </motion.p>
        </div>
      </div>

      {/* Selection Criteria */}
      <div className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {selectionCriteria.map((criteria, index) => {
              const Icon = criteria.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-16 h-16 bg-[#026EC4] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl mb-3 text-gray-900" style={{ fontWeight: 600 }}>
                    {criteria.title}
                  </h3>
                  <p className="text-gray-600">
                    {criteria.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Detailed Explanation */}
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-cyan-50 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl sm:text-4xl mb-6 text-gray-900" style={{ fontWeight: 700 }}>
                Our Vetting Process
              </h2>
              <div className="space-y-6 text-gray-700">
                <p className="text-lg">
                  At HELOC Guru, we understand that choosing a lender is one of the most important financial decisions you'll make. That's why we've developed a rigorous vetting process to ensure every partner on our platform meets our strict standards.
                </p>
                <p className="text-lg">
                  Before any lender can become a partner, they must undergo a comprehensive review that includes:
                </p>
                <ul className="space-y-3 ml-6">
                  <li className="text-lg flex items-start gap-3">
                    <span className="text-[#026EC4] mt-1">•</span>
                    <span><strong>Financial health assessment</strong> - We verify their FDIC insurance, capital reserves, and financial stability ratings</span>
                  </li>
                  <li className="text-lg flex items-start gap-3">
                    <span className="text-[#026EC4] mt-1">•</span>
                    <span><strong>Customer review analysis</strong> - We evaluate customer satisfaction scores from multiple independent sources</span>
                  </li>
                  <li className="text-lg flex items-start gap-3">
                    <span className="text-[#026EC4] mt-1">•</span>
                    <span><strong>Rate competitiveness check</strong> - We compare their offerings against market averages to ensure competitive pricing</span>
                  </li>
                  <li className="text-lg flex items-start gap-3">
                    <span className="text-[#026EC4] mt-1">•</span>
                    <span><strong>Transparency review</strong> - We examine fee structures, terms, and disclosures to ensure clarity and fairness</span>
                  </li>
                  <li className="text-lg flex items-start gap-3">
                    <span className="text-[#026EC4] mt-1">•</span>
                    <span><strong>Service quality evaluation</strong> - We assess their customer service responsiveness and support resources</span>
                  </li>
                </ul>
                <p className="text-lg">
                  We continuously monitor our partners' performance and customer feedback. If a lender fails to maintain our standards, we won't hesitate to remove them from our platform. Your trust is our top priority.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
