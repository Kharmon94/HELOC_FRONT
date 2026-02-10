import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import logo from '@/assets/ff4a416c4f7e438ef1715fb8c96936568b791dfe.png';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const [openSection, setOpenSection] = useState<string | null>(null);
  
  const handleNavigate = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="bg-white text-gray-800 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Brand - Always visible */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <img src={logo} alt="HELOC Guru" className="h-[140px] md:h-[80px]" />
          </div>
          <p className="text-gray-600 mb-6">
            Unlock your home's hidden value and discover financial freedom with trusted HELOC partners.
          </p>
          
        </div>

        {/* Mobile: Collapsible sections */}
        <div className="md:hidden space-y-4 mb-12">
          {/* Quick Links */}
          <div className="border-b border-gray-200">
            <button
              onClick={() => toggleSection('quick-links')}
              className="w-full flex items-center justify-between py-4 text-gray-900"
              style={{ fontWeight: 600 }}
            >
              <span className="text-lg">Quick Links</span>
              <ChevronDown
                className={`w-5 h-5 transition-transform ${
                  openSection === 'quick-links' ? 'rotate-180' : ''
                }`}
              />
            </button>
            {openSection === 'quick-links' && (
              <ul className="space-y-3 pb-4">
                {[
                  { id: 'home', label: 'Home' },
                  { id: 'why-helocs', label: 'Why HELOCs' },
                  { id: 'calculators', label: 'Calculators' },
                  { id: 'partners', label: 'Lending Partners' },
                ].map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => handleNavigate(item.id)}
                      className="text-gray-600 hover:text-[#026EC4] transition-colors"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Company */}
          <div className="border-b border-gray-200">
            <button
              onClick={() => toggleSection('company')}
              className="w-full flex items-center justify-between py-4 text-gray-900"
              style={{ fontWeight: 600 }}
            >
              <span className="text-lg">Company</span>
              <ChevronDown
                className={`w-5 h-5 transition-transform ${
                  openSection === 'company' ? 'rotate-180' : ''
                }`}
              />
            </button>
            {openSection === 'company' && (
              <ul className="space-y-3 pb-4">
                <li>
                  <button
                    onClick={() => handleNavigate('how-we-select')}
                    className="text-gray-600 hover:text-[#026EC4] transition-colors"
                  >
                    How We Select Partners
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavigate('contact')}
                    className="text-gray-600 hover:text-[#026EC4] transition-colors"
                  >
                    Advertise With Us
                  </button>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-[#026EC4] transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-[#026EC4] transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            )}
          </div>
        </div>

        {/* Desktop: Grid layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg mb-4 text-gray-900" style={{ fontWeight: 600 }}>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { id: 'home', label: 'Home' },
                { id: 'why-helocs', label: 'Why HELOCs' },
                { id: 'calculators', label: 'Calculators' },
                { id: 'partners', label: 'Lending Partners' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavigate(item.id)}
                    className="text-gray-600 hover:text-[#026EC4] transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg mb-4 text-gray-900" style={{ fontWeight: 600 }}>
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => handleNavigate('how-we-select')}
                  className="text-gray-600 hover:text-[#026EC4] transition-colors"
                >
                  How We Select Partners
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigate('contact')}
                  className="text-gray-600 hover:text-[#026EC4] transition-colors"
                >
                  Advertise With Us
                </button>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#026EC4] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#026EC4] transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8">
          {/* How We Make Money Section */}
          <div className="mb-8">
            <h3 className="text-lg mb-3 text-gray-900" style={{ fontWeight: 600 }}>
              How We Make Money
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              HELOC Guru is an independent, advertising-supported publisher and comparison service. Our website may earn compensation when a customer clicks on a link, when an application is approved, or when an account is opened. Therefore, this compensation may impact what products appear and how, where, and in what order they appear within listing categories, except where prohibited by law for our mortgage, home equity and other home lending products. Other factors, such as our proprietary website rules and whether a product is offered in your area or at your self-selected credit score range, can also impact how and where products appear on this site. While we strive to provide a wide range of offers, HELOC Guru does not include information about every financial or credit product or service.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © 2026 HELOC Guru. All rights reserved.
            </p>
            
          </div>
          <p className="text-gray-400 text-xs mt-4 text-center">
            Disclaimer: HELOC Guru is not a lender. We connect homeowners with lending partners. 
            Actual loan terms, rates, and fees may vary. All loans subject to credit approval.
          </p>
        </div>
      </div>
    </footer>
  );
}