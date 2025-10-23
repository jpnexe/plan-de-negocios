
import React from 'react';

const Logo: React.FC = () => (
  <div className="flex items-center justify-center w-24 h-24 bg-white rounded-full border-4 border-pink-200 shadow-md">
    <div className="text-center">
      <div className="text-xs text-pink-400">♡</div>
      <div className="font-serif font-bold text-pink-800 text-sm tracking-tighter">ZIBÁ CLOTHES</div>
      <div className="text-xs text-pink-500 tracking-widest" style={{ fontSize: '0.5rem' }}>TIENDA EXCLUSIVA</div>
    </div>
  </div>
);

export const Header: React.FC = () => {
  return (
    <header className="py-6 bg-white/50 backdrop-blur-sm border-b border-pink-200/50 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between">
        <div className="flex items-center space-x-4">
          <Logo />
          <h1 className="text-2xl sm:text-3xl font-bold text-pink-800 tracking-tight font-serif">
            Business Plan
          </h1>
        </div>
      </div>
    </header>
  );
};