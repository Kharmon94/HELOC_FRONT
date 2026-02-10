import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Home, DollarSign, Target, CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react';

interface SurveyPageProps {
  onNavigate: (page: string) => void;
  onSubmit: (data: any) => void;
}

export function SurveyPage({ onNavigate, onSubmit }: SurveyPageProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    homeValue: 500000,
    mortgageBalance: 250000,
    creditScore: '',
    propertyType: '',
    useOfFunds: '',
    timeframe: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    zipCode: '',
  });

  const totalSteps = 3;
  const progress = (step / totalSteps) * 100;

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Final step - submit survey data and go to results
      console.log('Submitting form data:', formData);
      onSubmit(formData);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const updateFormData = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <div className="pt-20 min-h-screen">
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <Step1
                key="step1"
                formData={formData}
                updateFormData={updateFormData}
                onNext={handleNext}
                step={step}
                totalSteps={totalSteps}
              />
            )}
            {step === 2 && (
              <Step2
                key="step2"
                formData={formData}
                updateFormData={updateFormData}
                onNext={handleNext}
                onBack={handleBack}
                step={step}
                totalSteps={totalSteps}
              />
            )}
            {step === 3 && (
              <Step3
                key="step3"
                formData={formData}
                updateFormData={updateFormData}
                onNext={handleNext}
                onBack={handleBack}
                step={step}
                totalSteps={totalSteps}
              />
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

interface StepProps {
  formData: any;
  updateFormData: (field: string, value: string) => void;
  onNext: () => void;
  onBack?: () => void;
  step: number;
  totalSteps: number;
}

function Step1({ formData, updateFormData, onNext, step, totalSteps }: StepProps) {
  const homeValue = Number(formData.homeValue) || 500000;
  const mortgageBalance = Number(formData.mortgageBalance) || 250000;
  const progress = (step / totalSteps) * 100;

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-200"
    >
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-600">Step {step} of {totalSteps}</span>
          <span className="text-sm text-[#026EC4]" style={{ fontWeight: 600 }}>{Math.round(progress)}%</span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-[#026EC4] rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-[#026EC4] rounded-xl flex items-center justify-center">
          <Home className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-3xl text-gray-900" style={{ fontWeight: 700 }}>
          Tell Us About Your Home
        </h2>
      </div>

      <p className="text-lg text-gray-600 mb-8">
        First, let's understand your property details
      </p>

      <div className="space-y-8">
        <div>
          <label className="block text-sm text-gray-700 mb-3" style={{ fontWeight: 600 }}>
            Estimated Home Value
          </label>
          <div className="flex items-center justify-between mb-3">
            <span className="text-3xl text-gray-900" style={{ fontWeight: 700 }}>
              {formatCurrency(homeValue)}
            </span>
          </div>
          <input
            type="range"
            min="100000"
            max="2000000"
            step="10000"
            value={homeValue}
            onChange={(e) => updateFormData('homeValue', e.target.value)}
            className="w-full h-3 bg-gray-200 rounded-full appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-2">
            <span>$100K</span>
            <span>$2M</span>
          </div>
        </div>

        <div>
          <label className="block text-sm text-gray-700 mb-3" style={{ fontWeight: 600 }}>
            Remaining Mortgage Balance
          </label>
          <div className="flex items-center justify-between mb-3">
            <span className="text-3xl text-gray-900" style={{ fontWeight: 700 }}>
              {formatCurrency(mortgageBalance)}
            </span>
          </div>
          <input
            type="range"
            min="0"
            max={homeValue * 0.9}
            step="5000"
            value={mortgageBalance}
            onChange={(e) => updateFormData('mortgageBalance', e.target.value)}
            className="w-full h-3 bg-gray-200 rounded-full appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-2">
            <span>$0</span>
            <span>{formatCurrency(homeValue * 0.9)}</span>
          </div>
        </div>

        <div>
          <label className="block text-sm text-gray-700 mb-2" style={{ fontWeight: 600 }}>
            Property Type *
          </label>
          <div className="grid grid-cols-2 gap-4">
            {['Single Family', 'Condo', 'Townhouse', 'Multi-Family'].map((type) => (
              <motion.button
                key={type}
                type="button"
                onClick={() => updateFormData('propertyType', type)}
                className={`px-4 py-3 rounded-xl border-2 transition-all ${
                  formData.propertyType === type
                    ? 'border-purple-600 bg-purple-50 text-purple-900'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{ fontWeight: formData.propertyType === type ? 600 : 500 }}
              >
                {formData.propertyType === type && <CheckCircle2 className="w-5 h-5 text-[#026EC4] inline-block mr-2" />}
                {type}
              </motion.button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm text-gray-700 mb-2" style={{ fontWeight: 600 }}>
            Property Zip Code *
          </label>
          <input
            type="text"
            placeholder="Enter 5-digit zip code"
            value={formData.zipCode}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, '').slice(0, 5);
              updateFormData('zipCode', value);
            }}
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-[#026EC4] focus:outline-none transition-all"
            maxLength={5}
          />
          <p className="text-xs text-gray-500 mt-2">
            We use this to match you with lenders operating in your state
          </p>
        </div>
      </div>

      <motion.button
        onClick={onNext}
        disabled={!formData.homeValue || !formData.mortgageBalance || !formData.propertyType || !formData.zipCode || formData.zipCode.length !== 5}
        className="w-full mt-8 px-6 py-4 bg-[#026EC4] text-white rounded-xl shadow-lg hover:shadow-xl hover:bg-[#0ECEEO] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        whileHover={{ scale: formData.homeValue && formData.mortgageBalance && formData.propertyType && formData.zipCode && formData.zipCode.length === 5 ? 1.02 : 1 }}
        whileTap={{ scale: 0.98 }}
        style={{ fontWeight: 600 }}
      >
        Continue
        <ArrowRight className="w-5 h-5" />
      </motion.button>
    </motion.div>
  );
}

function Step2({ formData, updateFormData, onNext, onBack, step, totalSteps }: StepProps) {
  const progress = (step / totalSteps) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-200"
    >
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-600">Step {step} of {totalSteps}</span>
          <span className="text-sm text-[#026EC4]" style={{ fontWeight: 600 }}>{Math.round(progress)}%</span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-[#026EC4] rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-[#026EC4] rounded-xl flex items-center justify-center">
          <Target className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-3xl text-gray-900" style={{ fontWeight: 700 }}>
          Your Financial Goals
        </h2>
      </div>

      <p className="text-lg text-gray-600 mb-8">
        Help us understand what you're looking to accomplish
      </p>

      <div className="space-y-6">
        <div>
          <label className="block text-sm text-gray-700 mb-2" style={{ fontWeight: 600 }}>
            How will you use the funds? *
          </label>
          <div className="space-y-3">
            {[
              'Home Renovation',
              'Debt Consolidation',
              'Education Expenses',
              'Investment Property',
              'Emergency Fund',
              'Other',
            ].map((use) => (
              <motion.button
                key={use}
                type="button"
                onClick={() => updateFormData('useOfFunds', use)}
                className={`w-full px-4 py-3 rounded-xl border-2 transition-all text-left ${
                  formData.useOfFunds === use
                    ? 'border-purple-600 bg-purple-50 text-purple-900'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                style={{ fontWeight: formData.useOfFunds === use ? 600 : 500 }}
              >
                {formData.useOfFunds === use && <CheckCircle2 className="w-5 h-5 text-[#026EC4] inline-block mr-2" />}
                {use}
              </motion.button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm text-gray-700 mb-2" style={{ fontWeight: 600 }}>
            When do you need funding? *
          </label>
          <div className="grid grid-cols-2 gap-4">
            {['Immediately', 'Within 30 days', 'Within 60 days', 'Just exploring'].map((time) => (
              <motion.button
                key={time}
                type="button"
                onClick={() => updateFormData('timeframe', time)}
                className={`px-4 py-3 rounded-xl border-2 transition-all ${
                  formData.timeframe === time
                    ? 'border-purple-600 bg-purple-50 text-purple-900'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{ fontWeight: formData.timeframe === time ? 600 : 500 }}
              >
                {formData.timeframe === time && <CheckCircle2 className="w-5 h-5 text-[#026EC4] inline-block mr-2" />}
                {time}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex gap-4 mt-8">
        <motion.button
          onClick={onBack}
          className="px-6 py-4 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-all flex items-center gap-2"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          style={{ fontWeight: 600 }}
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </motion.button>
        <motion.button
          onClick={onNext}
          disabled={!formData.useOfFunds || !formData.timeframe}
          className="flex-1 px-6 py-4 bg-[#026EC4] text-white rounded-xl shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          whileHover={{ scale: formData.useOfFunds && formData.timeframe ? 1.02 : 1 }}
          whileTap={{ scale: 0.98 }}
          style={{ fontWeight: 600 }}
        >
          Continue
          <ArrowRight className="w-5 h-5" />
        </motion.button>
      </div>
    </motion.div>
  );
}

function Step3({ formData, updateFormData, onNext, onBack, step, totalSteps }: StepProps) {
  const progress = (step / totalSteps) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-200"
    >
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-600">Step {step} of {totalSteps}</span>
          <span className="text-sm text-[#026EC4]" style={{ fontWeight: 600 }}>{Math.round(progress)}%</span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-[#026EC4] rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-[#026EC4] rounded-xl flex items-center justify-center">
          <DollarSign className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-3xl text-gray-900" style={{ fontWeight: 700 }}>
          Credit Information
        </h2>
      </div>

      <p className="text-lg text-gray-600 mb-8">
        This helps us match you with the best rates
      </p>

      <div className="space-y-6">
        <div>
          <label className="block text-sm text-gray-700 mb-2" style={{ fontWeight: 600 }}>
            Estimated Credit Score *
          </label>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: 'Excellent (740+)', value: '740+' },
              { label: 'Good (670-739)', value: '670-739' },
              { label: 'Fair (580-669)', value: '580-669' },
              { label: 'Poor (Below 580)', value: 'below-580' },
            ].map((score) => (
              <motion.button
                key={score.value}
                type="button"
                onClick={() => updateFormData('creditScore', score.value)}
                className={`px-4 py-3 rounded-xl border-2 transition-all ${
                  formData.creditScore === score.value
                    ? 'border-purple-600 bg-purple-50 text-purple-900'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{ fontWeight: formData.creditScore === score.value ? 600 : 500 }}
              >
                {formData.creditScore === score.value && <CheckCircle2 className="w-5 h-5 text-[#026EC4] inline-block mr-2" />}
                {score.label}
              </motion.button>
            ))}
          </div>
        </div>

        <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
          <p className="text-sm text-blue-900">
            💡 <strong>Good news!</strong> Checking your options will not affect your credit score.
          </p>
        </div>
      </div>

      <div className="flex gap-4 mt-8">
        <motion.button
          onClick={onBack}
          className="px-6 py-4 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-all flex items-center gap-2"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          style={{ fontWeight: 600 }}
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </motion.button>
        <motion.button
          onClick={onNext}
          disabled={!formData.creditScore}
          className="flex-1 px-6 py-4 bg-[#026EC4] text-white rounded-xl shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          whileHover={{ scale: formData.creditScore ? 1.02 : 1 }}
          whileTap={{ scale: 0.98 }}
          style={{ fontWeight: 600 }}
        >
          Continue
          <ArrowRight className="w-5 h-5" />
        </motion.button>
      </div>
    </motion.div>
  );
}