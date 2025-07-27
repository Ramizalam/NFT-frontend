import React, { useState } from 'react';

export default function RiskMeter() {
  const [risk, setRisk] = useState('Low');

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mt-3 sm:mt-5 text-base sm:text-lg text-yellow-50">
      <span className="text-center sm:text-left mb-1 sm:mb-0">Risk Meter:</span>
      <div className="flex gap-1 sm:gap-2">
        <button 
          className={`px-3 sm:px-4 py-2 sm:py-1 font-semibold text-sm sm:text-base rounded-lg transition-all ${
            risk === 'Low' 
              ? 'bg-yellow-200 text-neutral-900 opacity-100' 
              : 'bg-yellow-50 text-neutral-900 opacity-70 hover:opacity-100'
          }`}
          onClick={() => setRisk('Low')}
        >
          Low
        </button>
        <button 
          className={`px-3 sm:px-4 py-2 sm:py-1 font-semibold text-sm sm:text-base rounded-lg transition-all ${
            risk === 'Medium' 
              ? 'bg-yellow-200 text-neutral-900 opacity-100' 
              : 'bg-yellow-50 text-neutral-900 opacity-70 hover:opacity-100'
          }`}
          onClick={() => setRisk('Medium')}
        >
          Medium
        </button>
        <button 
          className={`px-3 sm:px-4 py-2 sm:py-1 font-semibold text-sm sm:text-base rounded-lg transition-all ${
            risk === 'High' 
              ? 'bg-yellow-200 text-neutral-900 opacity-100' 
              : 'bg-yellow-50 text-neutral-900 opacity-70 hover:opacity-100'
          }`}
          onClick={() => setRisk('High')}
        >
          High
        </button>
      </div>
    </div>
  );
} 