import React, { useState } from 'react';

export default function RiskMeter() {
  const [risk, setRisk] = useState('Low');

  return (
    <div className="flex items-center justify-center gap-2 mt-5 text-lg text-yellow-50">
      <span>Risk Meter:</span>
      <button 
        className={`px-4 py-1 font-semibold text-base rounded-lg transition-all ${
          risk === 'Low' 
            ? 'bg-yellow-200 text-neutral-900 opacity-100' 
            : 'bg-yellow-50 text-neutral-900 opacity-70 hover:opacity-100'
        }`}
        onClick={() => setRisk('Low')}
      >
        Low
      </button>
      <button 
        className={`px-4 py-1 font-semibold text-base rounded-lg transition-all ${
          risk === 'Medium' 
            ? 'bg-yellow-200 text-neutral-900 opacity-100' 
            : 'bg-yellow-50 text-neutral-900 opacity-70 hover:opacity-100'
        }`}
        onClick={() => setRisk('Medium')}
      >
        Medium
      </button>
      <button 
        className={`px-4 py-1 font-semibold text-base rounded-lg transition-all ${
          risk === 'High' 
            ? 'bg-yellow-200 text-neutral-900 opacity-100' 
            : 'bg-yellow-50 text-neutral-900 opacity-70 hover:opacity-100'
        }`}
        onClick={() => setRisk('High')}
      >
        High
      </button>
    </div>
  );
} 