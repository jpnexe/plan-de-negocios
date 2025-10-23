
import React from 'react';
import type { Section } from '../types';

interface ContentPanelProps {
  section: Section;
}

export const ContentPanel: React.FC<ContentPanelProps> = ({ section }) => {
  return (
    <div className="bg-white/70 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-lg border border-pink-200/50">
      <div className="flex items-center mb-6">
        <div className="p-3 bg-pink-100 rounded-full mr-4">
            <section.icon className="w-8 h-8 text-pink-600" />
        </div>
        <h2 className="text-3xl font-bold text-gray-800 font-serif">{section.title}</h2>
      </div>
      <div className="prose prose-pink max-w-none text-gray-700">
        {section.content}
      </div>
    </div>
  );
};