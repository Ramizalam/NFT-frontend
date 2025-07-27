import React, { useState } from 'react';

export default function PositionsPanel() {
  // Dynamic data state
  const [positionData, setPositionData] = useState({
    collateral: 'shMON Curvance Liquid NFT',
    collateralValue: 10219.29,
    positionHealth: 1.23,
    borrowing: 7219.29,
    liquidationValue: 12.31,
    relativeAPR: 12.12
  });

  // Function to update position data (can be called from external sources)
  const updatePositionData = (newData) => {
    setPositionData(prev => ({ ...prev, ...newData }));
  };

  // Format currency values
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(value);
  };

  return (
    <section className="bg-neutral-100 rounded-2xl min-w-[320px] max-w-[360px] shadow-lg overflow-hidden">
      {/* Header on black rounded rectangle */}
      <div className="bg-black text-white rounded-xl w-full px-2 py-2 text-center">
        <div className="text-lg font-bold">Your Borrowing Positions</div>
      </div>
      
      {/* Main Content */}
      <div className="bg-white px-4 py-1">
        {/* Collateral Label */}
        <div className="bg-black text-white rounded-lg px-3 py-2 text-sm  text-center mb-1">
          Collateral: {positionData.collateral}
        </div>
        
        {/* Key Metrics */}
        <div className="grid grid-cols-3 gap-1 text-black">
          <div className="text-center">
            <div className="text-xs text-black mb-1">Collateral Value</div>
            <div className="text-lg   ">{formatCurrency(positionData.collateralValue)}</div>
          </div>
          <div className="text-center">
            <div className="text-xs text-black mb-1">Position Health</div>
            <div className="text-lg ">{positionData.positionHealth}</div>
          </div>
          <div className="text-center">
            <div className="text-xs text-black mb-1">Borrowing</div>
            <div className="text-lg">{formatCurrency(positionData.borrowing)}</div>
          </div>
        </div>
        
        {/* Additional Details */}
        <div className="flex gap-2 mb-2 text-black justify-center items-center ">
          <div className="bg-yellow-200  rounded-lg px-2 py-1 text-sm  flex-1 text-center">
            Liquidation Collateral Value: {formatCurrency(positionData.liquidationValue)}
          </div>
          <div className="text-sm ">
            Relative APR: +{positionData.relativeAPR}%
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex gap-2">
          <button 
            className="bg-yellow-200 text-black font-['Source_Sans_Pro'] rounded-lg px-3  text-sm  flex-1"
            onClick={() => console.log('Add Collateral clicked')}
          >
            Add Collateral
          </button>
          <button 
            className="bg-white text-black border border-black rounded-lg px-3  text-sm  flex-1"
            onClick={() => console.log('Repay clicked')}
          >
            Repay
          </button>
          <button 
            className="bg-black text-white rounded-lg px-3  text-sm  flex items-center justify-center gap-1"
            onClick={() => console.log('More clicked')}
          >
            More
            <span className="text-yellow-200 text-xs">▲</span>
          </button>
        </div>
      </div>
      
      {/* Bottom Empty Panel - takes up more space */}
      <div className="bg-neutral-100 border-t border-black h-48 flex items-center justify-center">
        {/* Empty placeholder area */}
      </div>
    </section>
  );
} 