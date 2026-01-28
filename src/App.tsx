import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// New Helix pages
import { LandingPage } from './pages/LandingPage';
import { LeaderApplyPage } from './pages/LeaderApplyPage';

// Archived Second Act pages (accessible at /old/*)
import { HomePage } from './pages/HomePage';
import { GroupPage } from './pages/GroupPage';
import { TasteTalentPage } from './pages/TasteTalentPage';
import { BlueprintPage } from './pages/BlueprintPage';
import { LecturesPage } from './pages/LecturesPage';
import { HelpUsBuildPage } from './pages/HelpUsBuildPage';

export function App() {
  return (
    <BrowserRouter basename="/helix">
      <Routes>
        {/* New Helix routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/apply" element={<LeaderApplyPage />} />

        {/* Archived Second Act routes */}
        <Route path="/old" element={<HomePage />} />
        <Route path="/old/taste-talent" element={<TasteTalentPage />} />
        <Route path="/old/blueprint" element={<BlueprintPage />} />
        <Route path="/old/group" element={<GroupPage />} />
        <Route path="/old/lectures" element={<LecturesPage />} />
        <Route path="/old/helpusbuild" element={<HelpUsBuildPage />} />
      </Routes>
    </BrowserRouter>
  );
}
