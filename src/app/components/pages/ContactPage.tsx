import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Send, MessageSquare, Users, TrendingUp, Target, DollarSign, Award } from 'lucide-react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    companyName: '',
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Partnership inquiry submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
            Advertise With Us
          </motion.h1>
          <motion.p
            className="text-xl text-white/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Partner with HELOC Guru to reach qualified homeowners actively seeking home equity solutions
          </motion.p>
        </div>
      </div>

      <div className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-2xl mx-auto">
          {/* Partnership Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <MessageSquare className="w-8 h-8 text-[#026EC4]" />
                <h3 className="text-2xl text-gray-900" style={{ fontWeight: 600 }}>
                  Partnership Inquiry
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="companyName" className="block text-sm text-gray-700 mb-2" style={{ fontWeight: 500 }}>
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#026EC4] focus:border-transparent transition-all"
                    placeholder="Your Lending Company"
                  />
                </div>

                <div>
                  <label htmlFor="name" className="block text-sm text-gray-700 mb-2" style={{ fontWeight: 500 }}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#026EC4] focus:border-transparent transition-all"
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-gray-700 mb-2" style={{ fontWeight: 500 }}>
                    Business Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#026EC4] focus:border-transparent transition-all"
                    placeholder="john@lendingcompany.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm text-gray-700 mb-2" style={{ fontWeight: 500 }}>
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#026EC4] focus:border-transparent transition-all"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-gray-700 mb-2" style={{ fontWeight: 500 }}>
                    Tell Us About Your Goals *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#026EC4] focus:border-transparent transition-all resize-none"
                    placeholder="Share details about your company and partnership goals..."
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full px-6 py-4 bg-[#026EC4] text-white rounded-xl shadow-lg hover:shadow-xl hover:bg-[#0ECEEO] transition-all flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{ fontWeight: 600 }}
                >
                  <Send className="w-5 h-5" />
                  Submit Partnership Inquiry
                </motion.button>

                <p className="text-xs text-gray-500 text-center">
                  We'll respond to all partnership inquiries within 1-2 business days
                </p>
              </form>
            </div>

            {/* Contact Email */}
            <div className="mt-8 bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <div className="flex items-center gap-3">
                <Mail className="w-6 h-6 text-[#026EC4]" />
                <div>
                  <p className="text-sm text-gray-600 mb-1">Or email us directly at:</p>
                  <a href="mailto:partnerships@heloc.guru" className="text-[#026EC4] hover:text-[#0ECEEO]" style={{ fontWeight: 600 }}>
                    partnerships@heloc.guru
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}