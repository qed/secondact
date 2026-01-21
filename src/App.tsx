import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { GroupPage } from './pages/GroupPage';
import { TasteTalentPage } from './pages/TasteTalentPage';
import { BlueprintPage } from './pages/BlueprintPage';
import { LecturesPage } from './pages/LecturesPage';
import { HelpUsBuildPage } from './pages/HelpUsBuildPage';

export function App() {
  return (
    <BrowserRouter basename="/secondact">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/group" element={<GroupPage />} />
        <Route path="/taste-talent" element={<TasteTalentPage />} />
        <Route path="/blueprint" element={<BlueprintPage />} />
        <Route path="/lectures" element={<LecturesPage />} />
        <Route path="/helpusbuild" element={<HelpUsBuildPage />} />
      </Routes>
    </BrowserRouter>
  );
}
