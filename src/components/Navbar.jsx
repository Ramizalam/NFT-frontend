import React, { useState } from 'react';
import companylogo from '../assets/companylogo.png';

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="flex items-center justify-between pt-5 px-4 sm:px-8 mb-10 bg-transparent">
      <div className="flex items-center">
        <img src={companylogo} alt="Company Logo" className="h-13 mr-3" />
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
            className="bg-yellow-50 text-neutral-900 rounded-lg px-3 py-1 transition hover:bg-yellow-200 text-sm"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            More ▼
          </button>
          
          {/* Mobile Dropdown */}
          {isDropdownOpen && (
            <div className="absolute top-full left-0 mt-2 bg-neutral-800 rounded-lg shadow-lg z-50 min-w-[200px] border border-yellow-200/30">
              <div className="py-2">
                <button className="w-full text-left px-4 py-2 text-yellow-50 hover:bg-neutral-700 transition-colors text-sm">
                  pawUSDC
                </button>
                <button className="w-full text-left px-4 py-2 text-yellow-50 hover:bg-neutral-700 transition-colors text-sm">
                  Vaults
                </button>
                <button className="w-full text-left px-4 py-2 text-yellow-50 hover:bg-neutral-700 transition-colors text-sm">
                  Meow Pools
                </button>
                <button className="w-full text-left px-4 py-2 text-yellow-50 hover:bg-neutral-700 transition-colors text-sm">
                  Aggregator
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <div className="flex gap-2 sm:gap-3">
        <button className="bg-yellow-50 text-neutral-900 rounded-lg px-2 py-1 font-semibold text-sm sm:text-base">Monad</button>
        <button className="bg-yellow-200 text-neutral-900 rounded-lg px-2 py-1 font-semibold text-sm sm:text-base">Connect Wallet</button>
      </div>
    </header>
  );
} 