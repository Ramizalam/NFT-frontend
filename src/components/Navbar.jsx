import React, { useState } from 'react';
import companylogo from '../assets/companylogo.png';

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="flex items-center justify-between pt-3 sm:pt-5 px-3 sm:px-8 mb-6 sm:mb-10 bg-transparent">
      <div className="flex items-center">
        <img src={companylogo} alt="Company Logo" className="h-10 sm:h-13 mr-2 sm:mr-3" />
        {/* Desktop Navigation */}
        <nav className="hidden sm:flex gap-3">
          <button className="bg-yellow-50 text-neutral-900 rounded-lg px-5 py-1 transition hover:bg-yellow-200">pawUSDC</button>
          <button className="bg-yellow-50 text-neutral-900 rounded-lg px-5 py-1 transition hover:bg-yellow-200">Vaults</button>
          <button className="bg-yellow-50 text-neutral-900 rounded-lg px-5 py-1 transition hover:bg-yellow-200">Meow Pools</button>
          <button className="bg-yellow-50 text-neutral-900 rounded-lg px-5 py-1 transition hover:bg-yellow-200">Aggregator</button>
          <button className="bg-yellow-50 text-neutral-900 rounded-lg px-5 py-1 transition hover:bg-yellow-200">More</button>
        </nav>
        
        {/* Mobile Navigation */}
        <div className="sm:hidden relative">
          <button 
            className="bg-yellow-50 text-neutral-900 rounded-lg px-3 py-2 transition hover:bg-yellow-200 text-sm font-medium"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            Menu ▼
          </button>
          
          {/* Mobile Dropdown */}
          {isDropdownOpen && (
            <div className="absolute top-full left-0 mt-1 bg-neutral-800 rounded-lg shadow-xl z-50 min-w-[180px] border border-yellow-200/30">
              <div className="py-1">
                <button className="w-full text-left px-4 py-3 text-yellow-50 hover:bg-neutral-700 transition-colors text-sm border-b border-neutral-700">
                  pawUSDC
                </button>
                <button className="w-full text-left px-4 py-3 text-yellow-50 hover:bg-neutral-700 transition-colors text-sm border-b border-neutral-700">
                  Vaults
                </button>
                <button className="w-full text-left px-4 py-3 text-yellow-50 hover:bg-neutral-700 transition-colors text-sm border-b border-neutral-700">
                  Meow Pools
                </button>
                <button className="w-full text-left px-4 py-3 text-yellow-50 hover:bg-neutral-700 transition-colors text-sm">
                  Aggregator
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <div className="flex gap-1 sm:gap-3">
        <button className="bg-yellow-50 text-neutral-900 rounded-lg px-2 py-2 sm:py-1 font-semibold text-xs sm:text-base">Monad</button>
        <button className="bg-yellow-200 text-neutral-900 rounded-lg px-2 py-2 sm:py-1 font-semibold text-xs sm:text-base">Connect</button>
      </div>
    </header>
  );
} 