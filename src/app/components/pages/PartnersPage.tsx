import React from 'react';
import { motion } from 'motion/react';
import { Award, Shield, TrendingUp, Users, Star, CheckCircle2, ExternalLink } from 'lucide-react';

const partners = [
  {
    name: 'Figure',
    rating: 4.8,
    minLoan: '$15,000',
    maxLoan: '$400,000',
    aprFrom: '6.49%',
    features: ['100% online process', 'Fast 5-day funding', 'No appraisal required'],
    bestFor: 'Tech-savvy homeowners seeking speed',
    url: 'https://www.figure.com/',
  },
  {
    name: 'Wells Fargo',
    rating: 4.8,
    minLoan: '$25,000',
    maxLoan: '$500,000',
    aprFrom: '6.99%',
    features: ['No closing costs', 'Online account management', 'Relationship discounts'],
    bestFor: 'Existing customers and large loan amounts',
    url: 'https://www.wellsfargo.com/home-equity/',
  },
  {
    name: 'Bank of America',
    rating: 4.7,
    minLoan: '$25,000',
    maxLoan: '$500,000',
    aprFrom: '7.25%',
    features: ['Preferred Rewards discounts', 'Mobile app access', 'No annual fee'],
    bestFor: 'Rewards program members',
    url: 'https://www.bankofamerica.com/home-loans/home-equity-loans/',
  },
  {
    name: 'Chase',
    rating: 4.9,
    minLoan: '$25,000',
    maxLoan: '$500,000',
    aprFrom: '7.15%',
    features: ['Fast approval process', 'Premier banking benefits', 'Rate lock options'],
    bestFor: 'Quick funding needs',
    url: 'https://www.chase.com/personal/home-equity',
  },
  {
    name: 'US Bank',
    rating: 4.6,
    minLoan: '$15,000',
    maxLoan: '$750,000',
    aprFrom: '7.40%',
    features: ['Lower minimum loan', 'Flexible terms', 'Free financial planning'],
    bestFor: 'Smaller loan amounts and financial guidance',
    url: 'https://www.usbank.com/home-loans/home-equity-loans-and-lines-of-credit.html',
  },
  {
    name: 'PNC Bank',
    rating: 4.7,
    minLoan: '$25,000',
    maxLoan: '$500,000',
    aprFrom: '7.30%',
    features: ['Virtual wallet integration', 'No prepayment penalty', 'Customer support 24/7'],
    bestFor: 'Digital-first experience',
    url: 'https://www.pnc.com/en/personal-banking/borrowing/home-lending/home-equity.html',
  },
  {
    name: 'Regions Bank',
    rating: 4.5,
    minLoan: '$10,000',
    maxLoan: '$500,000',
    aprFrom: '7.50%',
    features: ['Lowest minimum loan', 'Regional expertise', 'Personalized service'],
    bestFor: 'First-time HELOC borrowers',
    url: 'https://www.regions.com/personal-banking/loans/home-equity-line-of-credit',
  },
];

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

export function PartnersPage({ onNavigate }: { onNavigate: (page: string) => void }) {
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
            Our Lending Partners
          </motion.h1>
          <motion.p
            className="text-xl text-white/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We've partnered with America's most trusted lenders to bring you the best HELOC options
          </motion.p>
        </div>
      </div>

      {/* Affiliate Disclosure */}
      

      {/* Partners Grid */}
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
              Featured Partners
            </h2>
            <p className="text-xl text-gray-600">
              Compare offers from top-rated lenders
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {/* Header */}
                <div className="bg-[#026EC4] p-6 text-white">
                  <h3 className="text-2xl mb-2" style={{ fontWeight: 700 }}>
                    {partner.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < Math.floor(partner.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-white/30'}`}
                        />
                      ))}
                    </div>
                    <span className="text-sm">{partner.rating}/5</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <div className="text-xs text-gray-500 mb-1">Min Loan</div>
                      <div className="text-lg text-gray-900" style={{ fontWeight: 600 }}>
                        {partner.minLoan}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 mb-1">Max Loan</div>
                      <div className="text-lg text-gray-900" style={{ fontWeight: 600 }}>
                        {partner.maxLoan}
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="text-xs text-gray-500 mb-1">APR From</div>
                    <div className="text-3xl text-[#026EC4]" style={{ fontWeight: 800 }}>
                      {partner.aprFrom}
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="text-sm text-gray-700 mb-3" style={{ fontWeight: 600 }}>
                      Key Features:
                    </div>
                    <ul className="space-y-2">
                      {partner.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-cyan-50 rounded-xl p-4 mb-6">
                    <div className="text-xs text-gray-600 mb-1" style={{ fontWeight: 600 }}>
                      Best For:
                    </div>
                    <div className="text-sm text-gray-700">
                      {partner.bestFor}
                    </div>
                  </div>

                  <motion.a
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full px-6 py-3 bg-[#026EC4] text-white rounded-xl shadow-lg hover:shadow-xl hover:bg-[#0ECEEO] transition-all flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    style={{ fontWeight: 600 }}
                  >
                    View Rates
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <TrendingUp className="w-16 h-16 text-[#026EC4] mx-auto mb-6" />
            <h2 className="text-4xl sm:text-5xl mb-6 text-gray-900" style={{ fontWeight: 700 }}>
              Get Matched With The Right Partner
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Answer a few quick questions and we'll recommend the best HELOC options for your unique situation
            </p>
            <motion.button
              className="px-8 py-4 bg-[#026EC4] text-white rounded-full text-lg shadow-lg hover:shadow-xl hover:bg-[#0ECEEO] transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ fontWeight: 600 }}
              onClick={() => onNavigate('survey')}
            >
              Find My Perfect Match
            </motion.button>
            <p className="text-sm text-gray-500 mt-6">
              <strong>Disclosure:</strong> HELOC Guru earns commission from partner lenders when you connect through our service. This does not affect your rates or loan terms.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}