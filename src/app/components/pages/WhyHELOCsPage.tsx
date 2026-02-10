import React from 'react';
import { motion } from 'motion/react';
import { TrendingDown, CreditCard, DollarSign, Shield, BarChart3, Clock, CheckCircle2, XCircle } from 'lucide-react';

interface WhyHELOCsPageProps {
  onNavigate?: (page: string) => void;
}

const advantages = [
  {
    icon: TrendingDown,
    title: 'Lower Interest Rates',
    description: 'HELOCs typically offer interest rates 5-10% lower than credit cards, saving you thousands in interest payments.',
    stat: 'Average APR: 7-9%',
  },
  {
    icon: DollarSign,
    title: 'Access Large Amounts',
    description: 'Unlock up to 85% of your home equity, giving you access to substantial funds for major expenses.',
    stat: 'Up to $500K+',
  },
  {
    icon: Clock,
    title: 'Flexible Draw Period',
    description: 'Draw funds as needed during a 10-year period, paying interest only on what you use.',
    stat: '10-Year Draw',
  },
  {
    icon: Shield,
    title: 'Potential Tax Benefits',
    description: 'Interest may be tax-deductible when used for home improvements (consult your tax advisor).',
    stat: 'Tax Deductible*',
  },
  {
    icon: BarChart3,
    title: 'Revolving Credit',
    description: 'Like a credit card, but secured by your home. Pay down and redraw as needed during the draw period.',
    stat: 'Reusable Credit',
  },
  {
    icon: CreditCard,
    title: 'Debt Consolidation',
    description: 'Consolidate high-interest debt into one lower-rate payment and improve your cash flow.',
    stat: 'Save $1,000s',
  },
];

const comparison = {
  heloc: {
    name: 'HELOC',
    items: [
      { label: 'Interest Rate', value: '7-9% APR', positive: true },
      { label: 'Access to Funds', value: 'Up to 85% of equity', positive: true },
      { label: 'Draw Period', value: '10 years flexible', positive: true },
      { label: 'Tax Benefits', value: 'Potentially deductible', positive: true },
      { label: 'Closing Costs', value: 'Low to none', positive: true },
      { label: 'Repayment', value: 'Interest-only options', positive: true },
    ],
  },
  creditCard: {
    name: 'Credit Card',
    items: [
      { label: 'Interest Rate', value: '18-24% APR', positive: false },
      { label: 'Access to Funds', value: '$5K-$30K limits', positive: false },
      { label: 'Draw Period', value: 'Ongoing (with high interest)', positive: false },
      { label: 'Tax Benefits', value: 'None', positive: false },
      { label: 'Closing Costs', value: 'None', positive: true },
      { label: 'Repayment', value: 'Minimum payment trap', positive: false },
    ],
  },
  personalLoan: {
    name: 'Personal Loan',
    items: [
      { label: 'Interest Rate', value: '10-18% APR', positive: false },
      { label: 'Access to Funds', value: '$10K-$100K', positive: false },
      { label: 'Draw Period', value: 'One-time lump sum', positive: false },
      { label: 'Tax Benefits', value: 'None', positive: false },
      { label: 'Closing Costs', value: 'Origination fees', positive: false },
      { label: 'Repayment', value: 'Fixed monthly payments', positive: true },
    ],
  },
};

export function WhyHELOCsPage({ onNavigate }: WhyHELOCsPageProps) {
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
            Why Choose a HELOC?
          </motion.h1>
          <motion.p
            className="text-xl text-white/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Unlock the power of your home equity with flexible, low-cost financing
          </motion.p>
        </div>
      </div>

      {/* Advantages */}
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
              Key Advantages
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-16 h-16 bg-[#026EC4] rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl mb-3 text-gray-900" style={{ fontWeight: 600 }}>
                    {advantage.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {advantage.description}
                  </p>
                  <div className="inline-block px-4 py-2 bg-[#026EC4] text-white rounded-full text-sm" style={{ fontWeight: 600 }}>
                    {advantage.stat}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Comparison Table */}
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
              How HELOCs Compare
            </h2>
            <p className="text-xl text-gray-600">
              See why HELOCs are the smart choice for accessing funds
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {Object.entries(comparison).map(([key, data], idx) => (
              <motion.div
                key={key}
                className={`bg-white rounded-2xl overflow-hidden shadow-xl ${
                  key === 'heloc' ? 'ring-2 ring-[#026EC4] relative' : ''
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                {key === 'heloc' && (
                  <div className="absolute top-0 left-0 right-0 bg-[#026EC4] text-white text-center py-2 text-sm" style={{ fontWeight: 600 }}>
                    ⭐ RECOMMENDED
                  </div>
                )}
                <div className={`p-8 ${key === 'heloc' ? 'pt-16' : ''}`}>
                  <h3 className="text-2xl mb-6 text-center text-gray-900" style={{ fontWeight: 700 }}>
                    {data.name}
                  </h3>
                  <div className="space-y-4">
                    {data.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex items-start gap-3">
                        <div className="mt-1">
                          {item.positive ? (
                            <CheckCircle2 className="w-5 h-5 text-green-500" />
                          ) : (
                            <XCircle className="w-5 h-5 text-red-500" />
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="text-sm text-gray-600">{item.label}</div>
                          <div className="text-gray-900" style={{ fontWeight: 600 }}>
                            {item.value}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
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
            <h2 className="text-4xl sm:text-5xl mb-6 text-gray-900" style={{ fontWeight: 700 }}>
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Discover how much you could access in under 60 seconds
            </p>
            <motion.button
              className="px-8 py-4 bg-[#026EC4] text-white rounded-full text-lg shadow-lg hover:shadow-xl hover:bg-[#0ECEEO] transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ fontWeight: 600 }}
              onClick={() => onNavigate && onNavigate('calculators')}
            >
              Calculate My Equity
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}