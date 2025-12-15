import React from 'react';
import { Navigation } from '../components/Navigation';
import { Hero } from '../components/Hero';
import { ProblemSection } from '../components/ProblemSection';
import { ProductSection } from '../components/ProductSection';
import { BenefitsSection } from '../components/BenefitsSection';
import { MemberProfile } from '../components/MemberProfile';
import { ApplicationProcess } from '../components/ApplicationProcess';
import { Footer } from '../components/Footer';
export function SecondAct() {
  return <div className="min-h-screen bg-sa-beige text-sa-brown font-sans selection:bg-sa-terracotta/30">
      <Navigation />
      <main>
        <Hero />
        <ProblemSection />
        <ProductSection />
        <BenefitsSection />
        <MemberProfile />
        <ApplicationProcess />
      </main>
      <Footer />
    </div>;
}