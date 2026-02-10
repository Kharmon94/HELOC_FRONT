import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/pages/HomePage';
import { WhyHELOCsPage } from './components/pages/WhyHELOCsPage';
import { AboutPage } from './components/pages/AboutPage';
import { ContactPage } from './components/pages/ContactPage';
import { CalculatorsPage } from './components/pages/CalculatorsPage';
import { PartnersPage } from './components/pages/PartnersPage';
import { SurveyPage } from './components/pages/SurveyPage';
import { ResultsPage } from './components/pages/ResultsPage';
import { HowWeSelectPage } from './components/pages/HowWeSelectPage';
import { AdminDashboard } from '@/components/admin-dashboard';
import { apiService } from '@/services/api';
import { canViewAdmin } from '@/utils/permissions';
import type { User } from '@/types';
import favicon from '@/assets/8a4e280046d55d21a284fa4e9c51b8b4377d13e6.png';

type Page = 'home' | 'why-helocs' | 'about' | 'contact' | 'calculators' | 'partners' | 'how-we-select' | 'survey' | 'results' | 'admin';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [surveyData, setSurveyData] = useState<unknown>(null);
  const [user, setUser] = useState<User | null>(null);
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    apiService.getCurrentUser().then((u) => {
      setUser(u);
      setAuthChecked(true);
    });
  }, []);

  const onNavigate = (page: Page) => {
    if (page === 'admin' && !canViewAdmin(user)) return;
    setCurrentPage(page);
  };

  // Set favicon and page title
  useEffect(() => {
    // Set favicon
    const link = document.querySelector("link[rel~='icon']") as HTMLLinkElement || document.createElement('link');
    link.type = 'image/png';
    link.rel = 'icon';
    link.href = favicon;
    if (!document.querySelector("link[rel~='icon']")) {
      document.head.appendChild(link);
    }

    // Set page title
    document.title = 'HELOC Guru - Unlock Your Home Equity';
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={onNavigate} />;
      case 'why-helocs':
        return <WhyHELOCsPage onNavigate={onNavigate} />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      case 'calculators':
        return <CalculatorsPage />;
      case 'partners':
        return <PartnersPage onNavigate={onNavigate} />;
      case 'how-we-select':
        return <HowWeSelectPage />;
      case 'survey':
        return <SurveyPage onNavigate={onNavigate} onSubmit={(data) => {
          setSurveyData(data);
          setCurrentPage('results');
        }} />;
      case 'results':
        return surveyData ? <ResultsPage onNavigate={onNavigate} surveyData={surveyData} /> : <HomePage onNavigate={onNavigate} />;
      case 'admin':
        return canViewAdmin(user) ? <AdminDashboard onNavigate={onNavigate} /> : <HomePage onNavigate={onNavigate} />;
      default:
        return <HomePage onNavigate={onNavigate} />;
    }
  };

  if (!authChecked) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cyan-50">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cyan-50 flex flex-col">
      <Header currentPage={currentPage} onNavigate={onNavigate} user={user} />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer onNavigate={onNavigate} />
    </div>
  );
}