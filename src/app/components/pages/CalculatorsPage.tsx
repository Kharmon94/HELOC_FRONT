import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, DollarSign, TrendingUp, PiggyBank, Home, Percent } from 'lucide-react';

export function CalculatorsPage() {
  const [activeCalculator, setActiveCalculator] = useState<'equity' | 'payment' | 'savings'>('equity');

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
          >Calculators</motion.h1>
          <motion.p
            className="text-xl text-white/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Discover your home equity potential and plan your financial future
          </motion.p>
        </div>
      </div>

      {/* Calculator Tabs */}
      <div className="py-12 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { id: 'equity' as const, label: 'Equity Calculator', icon: Home },
              { id: 'payment' as const, label: 'Payment Calculator', icon: DollarSign },
              { id: 'savings' as const, label: 'Savings Calculator', icon: PiggyBank },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveCalculator(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all ${
                    activeCalculator === tab.id
                      ? 'bg-[#026EC4] text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ fontWeight: 600 }}
                >
                  <Icon className="w-5 h-5" />
                  {tab.label}
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Calculator Content */}
      <div className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {activeCalculator === 'equity' && <EquityCalculator />}
          {activeCalculator === 'payment' && <PaymentCalculator />}
          {activeCalculator === 'savings' && <SavingsCalculator />}
        </div>
      </div>

      {/* Educational Content */}
      <div className="py-24 px-4 sm:px-6 lg:px-8 bg-cyan-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl mb-4 text-gray-900" style={{ fontWeight: 700 }}>
              Understanding Your Results
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: TrendingUp,
                title: 'Home Equity Explained',
                description: 'Your home equity is the difference between your home\'s current market value and what you owe on your mortgage. It grows as you pay down your mortgage and as your home appreciates.',
              },
              {
                icon: Percent,
                title: 'Loan-to-Value (LTV)',
                description: 'Most lenders allow you to borrow up to 85% of your home\'s value minus your mortgage balance. This protects both you and the lender.',
              },
              {
                icon: DollarSign,
                title: 'Monthly Payments',
                description: 'During the draw period, you typically only pay interest on what you borrow. After the draw period, you\'ll pay both principal and interest.',
              },
              {
                icon: PiggyBank,
                title: 'Save on Interest',
                description: 'HELOCs typically have much lower interest rates than credit cards, helping you save thousands on high-interest debt consolidation.',
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6 border border-purple-200"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Icon className="w-10 h-10 text-purple-600 mb-4" />
                  <h3 className="text-xl mb-3 text-gray-900" style={{ fontWeight: 600 }}>
                    {item.title}
                  </h3>
                  <p className="text-gray-700">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function EquityCalculator() {
  const [homeValue, setHomeValue] = useState(500000);
  const [mortgageBalance, setMortgageBalance] = useState(250000);
  
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

  return (
    <div className="grid lg:grid-cols-2 gap-12">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl mb-8 text-gray-900" style={{ fontWeight: 700 }}>
          Calculate Your Home Equity
        </h2>

        <div className="space-y-8">
          <div>
            <label className="block text-sm text-gray-700 mb-3" style={{ fontWeight: 600 }}>
              Estimated Home Value: {formatCurrency(homeValue)}
            </label>
            <input
              type="range"
              min="100000"
              max="2000000"
              step="10000"
              value={homeValue}
              onChange={(e) => setHomeValue(Number(e.target.value))}
              className="w-full h-3 bg-gray-200 rounded-full appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-sm text-gray-500 mt-2">
              <span>$100K</span>
              <span>$2M</span>
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-3" style={{ fontWeight: 600 }}>
              Remaining Mortgage: {formatCurrency(mortgageBalance)}
            </label>
            <input
              type="range"
              min="0"
              max={homeValue * 0.9}
              step="5000"
              value={mortgageBalance}
              onChange={(e) => setMortgageBalance(Number(e.target.value))}
              className="w-full h-3 bg-gray-200 rounded-full appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-sm text-gray-500 mt-2">
              <span>$0</span>
              <span>{formatCurrency(homeValue * 0.9)}</span>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-200 sticky top-24">
          <h3 className="text-2xl mb-6 text-gray-900" style={{ fontWeight: 700 }}>
            Your Results
          </h3>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-sm text-gray-600 mb-2">Total Home Equity</div>
              <div className="text-4xl mb-4 text-[#026EC4]" style={{ fontWeight: 800 }}>
                {formatCurrency(equity)}
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Current LTV:</span>
                <span className="text-purple-600" style={{ fontWeight: 600 }}>{ltv}%</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-200">
              <div className="flex items-center gap-2 mb-2">
                <DollarSign className="w-5 h-5 text-green-600" />
                <div className="text-sm text-gray-600">Cash You Could Access</div>
              </div>
              <div className="text-4xl text-green-600" style={{ fontWeight: 800 }}>
                {formatCurrency(availableCash)}
              </div>
              <p className="text-xs text-gray-500 mt-2">Based on 85% LTV</p>
            </div>

            <motion.button
              className="w-full px-6 py-4 bg-[#026EC4] text-white rounded-xl shadow-lg hover:shadow-xl hover:bg-[#0ECEEO] transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{ fontWeight: 600 }}
            >
              View My Offers
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function PaymentCalculator() {
  const [loanAmount, setLoanAmount] = useState(100000);
  const [interestRate, setInterestRate] = useState(7.5);
  const [drawPeriod, setDrawPeriod] = useState(10);
  
  const monthlyInterestRate = interestRate / 100 / 12;
  const interestOnlyPayment = loanAmount * monthlyInterestRate;
  const repaymentPeriod = 20;
  const totalPayments = repaymentPeriod * 12;
  const fullPayment = loanAmount * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalPayments)) / (Math.pow(1 + monthlyInterestRate, totalPayments) - 1);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="grid lg:grid-cols-2 gap-12">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl mb-8 text-gray-900" style={{ fontWeight: 700 }}>
          Calculate Monthly Payments
        </h2>

        <div className="space-y-8">
          <div>
            <label className="block text-sm text-gray-700 mb-3" style={{ fontWeight: 600 }}>
              Loan Amount: {formatCurrency(loanAmount)}
            </label>
            <input
              type="range"
              min="10000"
              max="500000"
              step="5000"
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              className="w-full h-3 bg-gray-200 rounded-full appearance-none cursor-pointer"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-3" style={{ fontWeight: 600 }}>
              Interest Rate: {interestRate.toFixed(2)}%
            </label>
            <input
              type="range"
              min="3"
              max="15"
              step="0.1"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full h-3 bg-gray-200 rounded-full appearance-none cursor-pointer"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-3" style={{ fontWeight: 600 }}>
              Draw Period: {drawPeriod} years
            </label>
            <input
              type="range"
              min="5"
              max="15"
              step="1"
              value={drawPeriod}
              onChange={(e) => setDrawPeriod(Number(e.target.value))}
              className="w-full h-3 bg-gray-200 rounded-full appearance-none cursor-pointer"
            />
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-200 sticky top-24">
          <h3 className="text-2xl mb-6 text-gray-900" style={{ fontWeight: 700 }}>
            Payment Breakdown
          </h3>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-[#026EC4]">
              <div className="text-sm text-gray-600 mb-2">Draw Period Payment</div>
              <div className="text-sm text-gray-500 mb-3">(Years 1-{drawPeriod} - Interest Only)</div>
              <div className="text-4xl text-[#026EC4]" style={{ fontWeight: 800 }}>
                {formatCurrency(interestOnlyPayment)}/mo
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-[#026EC4]">
              <div className="text-sm text-gray-600 mb-2">Repayment Period Payment</div>
              <div className="text-sm text-gray-500 mb-3">(Years {drawPeriod + 1}-{drawPeriod + repaymentPeriod} - Principal + Interest)</div>
              <div className="text-4xl text-[#026EC4]" style={{ fontWeight: 800 }}>
                {formatCurrency(fullPayment)}/mo
              </div>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <div className="text-sm text-gray-600 mb-4">Total Interest Over Life of Loan:</div>
              <div className="text-2xl text-gray-900" style={{ fontWeight: 700 }}>
                {formatCurrency((interestOnlyPayment * drawPeriod * 12) + (fullPayment * repaymentPeriod * 12) - loanAmount)}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function SavingsCalculator() {
  const [creditCardDebt, setCreditCardDebt] = useState(30000);
  const [creditCardRate, setCreditCardRate] = useState(19.9);
  const [helocRate, setHelocRate] = useState(7.5);
  
  const creditCardMonthly = creditCardDebt * 0.02; // Minimum payment ~2%
  const helocMonthly = creditCardDebt * (helocRate / 100 / 12);
  const monthlySavings = creditCardMonthly - helocMonthly;
  const annualSavings = monthlySavings * 12;

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="grid lg:grid-cols-2 gap-12">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl mb-8 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent" style={{ fontWeight: 700 }}>
          Calculate Your Savings
        </h2>

        <div className="space-y-8">
          <div>
            <label className="block text-sm text-gray-700 mb-3" style={{ fontWeight: 600 }}>
              Credit Card Debt: {formatCurrency(creditCardDebt)}
            </label>
            <input
              type="range"
              min="5000"
              max="100000"
              step="1000"
              value={creditCardDebt}
              onChange={(e) => setCreditCardDebt(Number(e.target.value))}
              className="w-full h-3 bg-gray-200 rounded-full appearance-none cursor-pointer"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-3" style={{ fontWeight: 600 }}>
              Credit Card APR: {creditCardRate.toFixed(1)}%
            </label>
            <input
              type="range"
              min="15"
              max="30"
              step="0.5"
              value={creditCardRate}
              onChange={(e) => setCreditCardRate(Number(e.target.value))}
              className="w-full h-3 bg-gray-200 rounded-full appearance-none cursor-pointer"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-3" style={{ fontWeight: 600 }}>
              HELOC APR: {helocRate.toFixed(1)}%
            </label>
            <input
              type="range"
              min="5"
              max="12"
              step="0.25"
              value={helocRate}
              onChange={(e) => setHelocRate(Number(e.target.value))}
              className="w-full h-3 bg-gray-200 rounded-full appearance-none cursor-pointer"
            />
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-200 sticky top-24">
          <h3 className="text-2xl mb-6 text-gray-900" style={{ fontWeight: 700 }}>
            Your Potential Savings
          </h3>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-red-50 rounded-xl p-4 border border-red-200">
                <div className="text-xs text-gray-600 mb-1">Credit Card</div>
                <div className="text-xl text-red-600" style={{ fontWeight: 700 }}>
                  {formatCurrency(creditCardMonthly)}
                </div>
                <div className="text-xs text-gray-500">per month</div>
              </div>
              <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                <div className="text-xs text-gray-600 mb-1">With HELOC</div>
                <div className="text-xl text-green-600" style={{ fontWeight: 700 }}>
                  {formatCurrency(helocMonthly)}
                </div>
                <div className="text-xs text-gray-500">per month</div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-green-500">
              <div className="text-sm text-gray-600 mb-2">Monthly Savings</div>
              <div className="text-4xl text-green-600" style={{ fontWeight: 800 }}>
                {formatCurrency(monthlySavings)}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-[#026EC4]">
              <div className="text-sm text-gray-600 mb-2">Annual Savings</div>
              <div className="text-4xl text-[#026EC4]" style={{ fontWeight: 800 }}>
                {formatCurrency(annualSavings)}
              </div>
            </div>

            <motion.button
              className="w-full px-6 py-4 bg-[#026EC4] text-white rounded-xl shadow-lg hover:shadow-xl hover:bg-[#0ECEEO] transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{ fontWeight: 600 }}
            >
              Start Saving Today
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}