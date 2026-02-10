import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Users, Award, TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: '50K+',
    label: 'Homeowners Helped',
  },
  {
    icon: Award,
    value: '$2.5B+',
    label: 'Equity Unlocked',
  },
  {
    icon: Star,
    value: '4.9/5',
    label: 'Average Rating',
  },
  {
    icon: TrendingUp,
    value: '3 Days',
    label: 'Average Funding Time',
  },
];

const partners = [
  'Wells Fargo',
  'Bank of America',
  'Chase',
  'US Bank',
  'Regions Bank',
  'PNC Bank',
];

const testimonials = [
  {
    quote: "I unlocked $180K for my kitchen remodel. The process was incredibly smooth!",
    name: "Sarah M.",
    location: "Austin, TX",
  },
  {
    quote: "Better rates than I ever imagined. Paid off my credit cards and saved thousands.",
    name: "Michael R.",
    location: "Denver, CO",
  },
  {
    quote: "Fast, transparent, and trustworthy. Funded my daughter's college tuition.",
    name: "Linda K.",
    location: "Seattle, WA",
  },
];

export function TrustSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Auto-advance testimonials every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="bg-[#ffffff] px-[32px] pt-[50px] pb-[96px]">
      <div className="max-w-7xl mx-auto">
        {/* Partners - Auto-scrolling */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="mb-8 text-[#000000] text-[48px]" style={{ fontWeight: 700 }}>
            Trusted Lending Partners
          </h3>
          <div className="bg-white rounded-3xl p-8 shadow-xl overflow-hidden">
            <div className="relative">
              <motion.div
                className="flex gap-12 items-center"
                animate={{
                  x: [0, -100 * partners.length],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 20,
                    ease: "linear",
                  },
                }}
              >
                {/* Render partners twice for seamless loop */}
                {[...partners, ...partners].map((partner, index) => (
                  <div
                    key={index}
                    className="text-gray-400 text-lg whitespace-nowrap flex-shrink-0"
                    style={{ fontWeight: 600 }}
                  >
                    {partner}
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Testimonials - Swipeable Carousel */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative max-w-3xl mx-auto">
            {/* Mobile: Single card swipeable */}
            <div className="md:hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  className="bg-white rounded-2xl p-6 shadow-lg"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.3 }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipe = Math.abs(offset.x) * velocity.x;
                    if (swipe < -10000) {
                      nextTestimonial();
                    } else if (swipe > 10000) {
                      prevTestimonial();
                    }
                  }}
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonials[currentTestimonial].quote}"</p>
                  <div>
                    <div className="text-gray-900" style={{ fontWeight: 600 }}>{testimonials[currentTestimonial].name}</div>
                    <div className="text-sm text-gray-500">{testimonials[currentTestimonial].location}</div>
                  </div>
                </motion.div>
              </AnimatePresence>
              
              {/* Navigation dots */}
              <div className="flex justify-center gap-2 mt-6">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentTestimonial ? 'bg-[#026EC4] w-8' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Desktop: Grid of 3 cards */}
            <div className="hidden md:grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                  <div>
                    <div className="text-gray-900" style={{ fontWeight: 600 }}>{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.location}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Navigation arrows for mobile */}
            <div className="md:hidden flex justify-center gap-4 mt-6">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-[#026EC4] hover:bg-[#026EC4] hover:text-white transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-[#026EC4] hover:bg-[#026EC4] hover:text-white transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}