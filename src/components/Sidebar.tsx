
import React from 'react';
import type { Section } from '../types';

interface SidebarProps {
  sections: Section[];
  activeSectionId: string;
  setActiveSectionId: (id: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ sections, activeSectionId, setActiveSectionId }) => {
  return (
    <aside className="w-full md:w-64 flex-shrink-0">
      <div className="sticky top-28">
        <h2 className="text-lg font-semibold text-pink-700 mb-4 px-4">Sections</h2>
        <nav className="space-y-1">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSectionId(section.id)}
              className={`w-full text-left flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-all duration-150 ${
                activeSectionId === section.id
                  ? 'bg-pink-600 text-white shadow-md'
                  : 'text-gray-700 hover:bg-pink-100 hover:text-pink-800'
              }`}
            >
              <section.icon className={`w-5 h-5 mr-3 ${activeSectionId === section.id ? 'text-white' : 'text-pink-400'}`} />
              {section.title}
            </button>
          ))}
        </nav>
      </div>
    </aside>
  );
};