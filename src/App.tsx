
import React, { useState, useMemo } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { ContentPanel } from './components/ContentPanel';
import type { Section } from './types';
import { BusinessPlanData } from './constants';

const App: React.FC = () => {
  const [activeSectionId, setActiveSectionId] = useState<string>('nombre');

  const sections: Section[] = BusinessPlanData;

  const activeSection = useMemo(() => {
    return sections.find(section => section.id === activeSectionId) || sections[0];
  }, [activeSectionId, sections]);

  return (
    <div className="min-h-screen font-sans text-gray-800 bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100">
      <Header />
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto p-4 md:p-8 gap-8">
        <Sidebar sections={sections} activeSectionId={activeSectionId} setActiveSectionId={setActiveSectionId} />
        <main className="flex-1">
          <ContentPanel section={activeSection} />
        </main>
      </div>
       <footer className="text-center p-4 text-pink-400 text-sm">
          <p>Zibá Clothes Business Plan &copy; 2024</p>
        </footer>
    </div>
  );
};

export default App;