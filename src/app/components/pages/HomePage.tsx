import React from 'react';
import { HeroSection } from '../HeroSection';
import { HowItWorks } from '../HowItWorks';
import { BenefitsSection } from '../BenefitsSection';
import { TrustSection } from '../TrustSection';
import { FinalCTA } from '../FinalCTA';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <>
      <HeroSection onNavigate={onNavigate} />
      <HowItWorks />
      <BenefitsSection />
      <TrustSection />
      <FinalCTA onNavigate={onNavigate} />
    </>
  );
}