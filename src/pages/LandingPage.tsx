import React from 'react';
import { Navigation } from '../components/layout/Navigation';
import { Footer } from '../components/layout/Footer';
import { HeroSection } from '../components/sections/HeroSection';
import { RealitySection } from '../components/sections/RealitySection';
import { AnswerSection } from '../components/sections/AnswerSection';
import { TasteTalentSection } from '../components/sections/TasteTalentSection';
import { TalentSection } from '../components/sections/TalentSection';
import { BottomLineSection } from '../components/sections/BottomLineSection';

export function LandingPage() {
  return (
    <div className="min-h-screen bg-helix-beige text-helix-brown font-sans selection:bg-helix-terracotta/30">
      <Navigation />
      <main>
        <HeroSection />
        <RealitySection />
        <AnswerSection />
        <TasteTalentSection />
        <TalentSection />
        <BottomLineSection />
      </main>
      <Footer />
    </div>
  );
}
