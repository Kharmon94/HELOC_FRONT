import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, TrendingUp, DollarSign, Award, Star, ArrowRight, Home, X, Mail, Phone, MapPin, User } from 'lucide-react';

interface ResultsPageProps {
  onNavigate: (page: string) => void;
  surveyData: {
    homeValue: string;
    mortgageBalance: string;
    creditScore: string;
    propertyType: string;
    useOfFunds: string;
    timeframe: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    zipCode: string;
  };
}

const allPartners = [
  {
    name: 'Chase',
    rating: 4.9,
    minLoan: '$25,000',
    maxLoan: '$500,000',
    aprFrom: '7.15%',
    matchScore: 95,
    bestFor: 'Quick funding needs',
    whyMatched: 'Fast approval process matches your immediate timeframe',
    creditTier: ['740+', '670-739'],
    specialties: ['Immediately', 'Within 30 days', 'Debt Consolidation'],
  },
  {
    name: 'Wells Fargo',
    rating: 4.8,
    minLoan: '$25,000',
    maxLoan: '$500,000',
    aprFrom: '6.99%',
    matchScore: 92,
    bestFor: 'Large loan amounts',
    whyMatched: 'Best rates for your equity amount',
    creditTier: ['740+'],
    specialties: ['Home Renovation', 'Investment Property'],
  },
  {
    name: 'Bank of America',
    rating: 4.7,
    minLoan: '$25,000',
    maxLoan: '$500,000',
    aprFrom: '7.25%',
    matchScore: 88,
    bestFor: 'Flexible terms',
    whyMatched: 'No annual fee and mobile-first experience',
    creditTier: ['740+', '670-739'],
    specialties: ['Home Renovation', 'Education Expenses'],
  },
  {
    name: 'US Bank',
    rating: 4.6,
    minLoan: '$15,000',
    maxLoan: '$750,000',
    aprFrom: '7.40%',
    matchScore: 85,
    bestFor: 'Lower credit scores',
    whyMatched: 'Works with a wider range of credit profiles',
    creditTier: ['670-739', '580-669'],
    specialties: ['Debt Consolidation', 'Emergency Fund'],
  },
  {
    name: 'PNC Bank',
    rating: 4.7,
    minLoan: '$25,000',
    maxLoan: '$500,000',
    aprFrom: '7.30%',
    matchScore: 87,
    bestFor: 'Digital experience',
    whyMatched: 'Virtual wallet integration and 24/7 support',
    creditTier: ['740+', '670-739'],
    specialties: ['Just exploring', 'Within 60 days'],
  },
  {
    name: 'Regions Bank',
    rating: 4.5,
    minLoan: '$10,000',
    maxLoan: '$500,000',
    aprFrom: '7.50%',
    matchScore: 82,
    bestFor: 'First-time borrowers',
    whyMatched: 'Lowest minimum loan amount and personalized service',
    creditTier: ['670-739', '580-669', 'below-580'],
    specialties: ['Other', 'Emergency Fund'],
  },
];

export function ResultsPage({ onNavigate, surveyData }: ResultsPageProps) {
  const [selectedPartner, setSelectedPartner] = useState<string | null>(null);
  const [contactForm, setContactForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    zipCode: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const homeValue = Number(surveyData.homeValue) || 500000;
  const mortgageBalance = Number(surveyData.mortgageBalance) || 250000;
  const equity = homeValue - mortgageBalance;
  const availableCash = Math.floor(equity * 0.85);
  const ltv = ((mortgageBalance / homeValue) * 100).toFixed(1);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  // Personalized matching logic
  const getRecommendedPartners = () => {
    let scoredPartners = allPartners.map(partner => {
      let score = partner.matchScore;

      // Credit score matching
      if (partner.creditTier.includes(surveyData.creditScore)) {
        score += 10;
      }

      // Timeframe matching
      if (partner.specialties.includes(surveyData.timeframe)) {
        score += 8;
      }

      // Use of funds matching
      if (partner.specialties.includes(surveyData.useOfFunds)) {
        score += 7;
      }

      // Loan amount matching
      const minLoanNum = parseInt(partner.minLoan.replace(/[$,]/g, ''));
      const maxLoanNum = parseInt(partner.maxLoan.replace(/[$,]/g, ''));
      if (availableCash >= minLoanNum && availableCash <= maxLoanNum) {
        score += 5;
      }

      return { ...partner, finalScore: score };
    });

    // Sort by final score and return top 3
    return scoredPartners.sort((a, b) => b.finalScore - a.finalScore).slice(0, 3);
  };

  const recommendedPartners = getRecommendedPartners();

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission to vendor
    console.log('Contact form submitted for:', selectedPartner, contactForm);
    setFormSubmitted(true);
    setTimeout(() => {
      setSelectedPartner(null);
      setFormSubmitted(false);
      setContactForm({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        zipCode: '',
      });
    }, 2000);
  };

  const updateContactForm = (field: string, value: string) => {
    setContactForm({ ...contactForm, [field]: value });
  };

  return (
    <div className="pt-32 min-h-screen bg-cyan-50">
      {/* Success Header */}
      <div className="bg-[#026EC4] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-block mb-6"
          >
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-12 h-12 text-green-500" />
            </div>
          </motion.div>
          
          <motion.h1
            className="text-4xl sm:text-5xl mb-4"
            style={{ fontWeight: 700 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Great News, {surveyData.firstName}!
          </motion.h1>
          
          <motion.p
            className="text-xl text-white/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Based on your profile, you could access up to <strong>{formatCurrency(availableCash)}</strong> in home equity
          </motion.p>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Personalized Recommendations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl mb-4 text-gray-900" style={{ fontWeight: 700 }}>
                Your Personalized Matches
              </h2>
              <p className="text-xl text-gray-600">
                Based on your profile, we've found {recommendedPartners.length} lenders perfectly matched to your needs
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {recommendedPartners.map((partner, index) => (
                <motion.div
                  key={partner.name}
                  className={`bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all ${
                    index === 0 ? 'ring-2 ring-[#026EC4] relative' : ''
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  {index === 0 && (
                    <div className="absolute top-0 left-0 right-0 bg-[#026EC4] text-white text-center py-2 text-sm z-10" style={{ fontWeight: 600 }}>
                      ⭐ TOP MATCH - {partner.finalScore}% Compatible
                    </div>
                  )}
                  
                  <div className={`p-6 ${index === 0 ? 'pt-12' : ''}`}>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl text-gray-900" style={{ fontWeight: 700 }}>
                        {partner.name}
                      </h3>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm text-gray-600">{partner.rating}</span>
                      </div>
                    </div>

                    <div className="mb-4 p-3 bg-green-50 rounded-xl border border-green-200">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="text-sm text-green-900" style={{ fontWeight: 600 }}>
                            Why we matched you:
                          </div>
                          <div className="text-sm text-green-800">
                            {partner.whyMatched}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="bg-cyan-50 rounded-xl p-3">
                        <div className="text-xs text-gray-600 mb-1">APR From</div>
                        <div className="text-xl text-[#026EC4]" style={{ fontWeight: 700 }}>
                          {partner.aprFrom}
                        </div>
                      </div>
                      <div className="bg-cyan-50 rounded-xl p-3">
                        <div className="text-xs text-gray-600 mb-1">Loan Range</div>
                        <div className="text-sm text-gray-900" style={{ fontWeight: 600 }}>
                          {partner.minLoan} - {partner.maxLoan}
                        </div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="text-xs text-gray-600 mb-2" style={{ fontWeight: 600 }}>
                        Best For:
                      </div>
                      <div className="text-sm text-gray-700">{partner.bestFor}</div>
                    </div>

                    <motion.button
                      className={`w-full px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all text-white ${
                        index === 0 ? 'bg-[#026EC4] hover:bg-[#0ECEEO]' : 'bg-[#026EC4] hover:bg-[#0ECEEO]'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      style={{ fontWeight: 600 }}
                      onClick={() => setSelectedPartner(partner.name)}
                    >
                      Get Pre-Qualified
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* View All Partners CTA */}
            <motion.div
              className="bg-white rounded-3xl p-12 shadow-xl text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <TrendingUp className="w-16 h-16 text-[#026EC4] mx-auto mb-6" />
              <h3 className="text-3xl mb-4 text-gray-900" style={{ fontWeight: 700 }}>
                Want to See More Options?
              </h3>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                We work with {allPartners.length} trusted lenders. Compare all available offers to find your perfect match.
              </p>
              <motion.button
                onClick={() => onNavigate('partners')}
                className="px-8 py-4 bg-[#026EC4] text-white rounded-full text-lg shadow-lg hover:shadow-xl hover:bg-[#0ECEEO] transition-all inline-flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ fontWeight: 600 }}
              >
                View All Partners
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Your Equity Summary - Now Below Recommendations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="bg-white rounded-3xl p-8 shadow-xl"
          >
            <h2 className="text-2xl mb-6 text-gray-900" style={{ fontWeight: 700 }}>
              Your Equity Summary
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-cyan-50 rounded-2xl">
                <Home className="w-8 h-8 text-[#026EC4] mx-auto mb-3" />
                <div className="text-sm text-gray-600 mb-2">Home Value</div>
                <div className="text-3xl text-gray-900" style={{ fontWeight: 700 }}>
                  {formatCurrency(homeValue)}
                </div>
              </div>
              
              <div className="text-center p-6 bg-cyan-50 rounded-2xl">
                <TrendingUp className="w-8 h-8 text-[#026EC4] mx-auto mb-3" />
                <div className="text-sm text-gray-600 mb-2">Total Equity</div>
                <div className="text-3xl text-gray-900" style={{ fontWeight: 700 }}>
                  {formatCurrency(equity)}
                </div>
                <div className="text-xs text-gray-500 mt-1">LTV: {ltv}%</div>
              </div>
              
              <div className="text-center p-6 bg-white rounded-2xl border-2 border-green-500">
                <DollarSign className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <div className="text-sm text-gray-600 mb-2">Available Cash</div>
                <div className="text-3xl text-green-600" style={{ fontWeight: 800 }}>
                  {formatCurrency(availableCash)}
                </div>
                <div className="text-xs text-gray-500 mt-1">Up to 85% LTV</div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 text-[#026EC4] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-700">
                    <strong>Your Goals:</strong> {surveyData.useOfFunds} • <strong>Timeframe:</strong> {surveyData.timeframe}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Contact Form Modal */}
      <AnimatePresence>
        {selectedPartner && (
          <motion.div
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => !formSubmitted && setSelectedPartner(null)}
          >
            <motion.div
              className="bg-white rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {!formSubmitted ? (
                <>
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-3xl text-gray-900 mb-2" style={{ fontWeight: 700 }}>
                        Contact {selectedPartner}
                      </h3>
                      <p className="text-gray-600">
                        Get pre-qualified in minutes
                      </p>
                    </div>
                    <button
                      onClick={() => setSelectedPartner(null)}
                      className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-all"
                    >
                      <X className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>

                  {/* Equity Summary */}
                  <div className="bg-cyan-50 rounded-2xl p-6 mb-6">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-xs text-gray-600 mb-1">Home Value</div>
                        <div className="text-lg text-gray-900" style={{ fontWeight: 700 }}>
                          {formatCurrency(homeValue)}
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-600 mb-1">Total Equity</div>
                        <div className="text-lg text-gray-900" style={{ fontWeight: 700 }}>
                          {formatCurrency(homeValue - mortgageBalance)}
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-600 mb-1">Available Cash</div>
                        <div className="text-lg text-green-600" style={{ fontWeight: 700 }}>
                          {formatCurrency(availableCash)}
                        </div>
                      </div>
                    </div>
                  </div>

                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-gray-700 mb-2" style={{ fontWeight: 600 }}>
                          <User className="w-4 h-4 inline-block mr-1" />
                          First Name *
                        </label>
                        <input
                          type="text"
                          value={contactForm.firstName}
                          onChange={(e) => updateContactForm('firstName', e.target.value)}
                          placeholder="John"
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#026EC4] focus:border-transparent transition-all"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-700 mb-2" style={{ fontWeight: 600 }}>
                          <User className="w-4 h-4 inline-block mr-1" />
                          Last Name *
                        </label>
                        <input
                          type="text"
                          value={contactForm.lastName}
                          onChange={(e) => updateContactForm('lastName', e.target.value)}
                          placeholder="Smith"
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#026EC4] focus:border-transparent transition-all"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm text-gray-700 mb-2" style={{ fontWeight: 600 }}>
                        <Mail className="w-4 h-4 inline-block mr-1" />
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={contactForm.email}
                        onChange={(e) => updateContactForm('email', e.target.value)}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#026EC4] focus:border-transparent transition-all"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-gray-700 mb-2" style={{ fontWeight: 600 }}>
                        <Phone className="w-4 h-4 inline-block mr-1" />
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        value={contactForm.phone}
                        onChange={(e) => updateContactForm('phone', e.target.value)}
                        placeholder="(555) 123-4567"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#026EC4] focus:border-transparent transition-all"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-gray-700 mb-2" style={{ fontWeight: 600 }}>
                        <MapPin className="w-4 h-4 inline-block mr-1" />
                        ZIP Code *
                      </label>
                      <input
                        type="text"
                        value={contactForm.zipCode}
                        onChange={(e) => updateContactForm('zipCode', e.target.value)}
                        placeholder="94105"
                        maxLength={5}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#026EC4] focus:border-transparent transition-all"
                        required
                      />
                    </div>

                    <div className="bg-yellow-50 rounded-xl p-4 border border-yellow-200">
                      <p className="text-xs text-yellow-900">
                        By clicking "Submit", you agree to our{' '}
                        <a href="#" className="text-[#026EC4] hover:text-[#0ECEEO] underline">
                          Terms of Service
                        </a>
                        {' '}and{' '}
                        <a href="#" className="text-[#026EC4] hover:text-[#0ECEEO] underline">
                          Privacy Policy
                        </a>
                        . You consent to receive calls and texts from {selectedPartner} at the number provided, including via automated technology. HELOC Guru earns commission from partner lenders.
                      </p>
                    </div>

                    <motion.button
                      type="submit"
                      className="w-full px-6 py-4 bg-[#026EC4] text-white rounded-xl shadow-lg hover:shadow-xl hover:bg-[#0ECEEO] transition-all flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      style={{ fontWeight: 600 }}
                    >
                      Submit to {selectedPartner}
                      <ArrowRight className="w-5 h-5" />
                    </motion.button>
                  </form>
                </>
              ) : (
                <div className="text-center py-12">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, type: "spring" }}
                    className="inline-block mb-6"
                  >
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-12 h-12 text-green-600" />
                    </div>
                  </motion.div>
                  <h3 className="text-3xl text-gray-900 mb-4" style={{ fontWeight: 700 }}>
                    Success!
                  </h3>
                  <p className="text-lg text-gray-600">
                    Your information has been sent to {selectedPartner}.
                    <br />
                    They'll contact you shortly to discuss your options.
                  </p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}