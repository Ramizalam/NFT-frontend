import React, { useState } from 'react';
import './AssetsPanel.css';
import Vector from '../assets/Vector.svg';

const assets = [
  { name: 'shMON Curvance Liquid NFT', apr: '28.91%' },
  { name: 'shMON Pingu Liquid NFT', apr: '28.91%' },
  { name: 'MON–USDC (Bean Exchange)', apr: '28.91%' },
  { name: 'gMON–MON Kuru Liquid NFT', apr: '28.91%' },
  { name: 'USDT–USDC (PancakeSwap)', apr: '28.91%' },
  { name: 'MON–USDC (Bean Exchange)', apr: '28.91%' },
  { name: 'sMON–gMON (Bean Exchange)', apr: '28.91%' },
  { name: 'MON–WUSDC (Bean Exchange)', apr: '28.91%' },
  { name: 'USDm–USDC (Bean Exchange)', apr: '28.91%' },
  { name: 'pawUSDC–USDC (Bean Exchange)', apr: '28.91%' },
];

export default function AssetsPanel() {
  const [activeTab, setActiveTab] = useState('Borrowing Rate');
  const [searchTerm, setSearchTerm] = useState('');

  // Filter assets based on search term
  const filteredAssets = assets.filter(asset =>
    asset.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="bg-neutral-800 rounded-2xl  py-1 min-w-[320px] max-w-[360px] shadow-lg">
      {/* Main Tabs */}
      <div className="flex  ">
        <button 
          className={`px-4 py-2 text-base  rounded-xl transition-all w-full mr-2 border-1 border-white ${
            activeTab === 'Borrowing Rate' 
              ? 'bg-black text-white' 
              : 'bg-neutral-700 text-white'
          }`}
          onClick={() => setActiveTab('Borrowing Rate')}
        >
          Borrowing Rate
        </button>
        <button 
          className={`px-4 py-2 text-base  rounded-xl transition-all w-full border-1 border-white ${
            activeTab === 'Your Assets' 
              ? 'bg-black text-white' 
              : 'bg-neutral-700 text-white'
          }`}
          onClick={() => setActiveTab('Your Assets')}
        >
          Your Assets
        </button>
      </div>

      {/* Filter and Search Section */}
      <div className="mb-4 bg-white w-full p-1">
        {/* Choose Product Row */}
        <div className="flex justify-between items-center mb-2 bg-black rounded-3xl px-4 py-2 border border-gray-300">
          <span className="text-white font-semibold text-sm">Choose Prod.</span>
          <button className="bg-yellow-200 text-black rounded-2xl w-40 py-1 text-sm font-semibold flex items-center justify-center gap-1">
            All <span>▼</span>
          </button>
        </div>
        
        {/* Search and Filter Row */}
        <div className="flex gap-2 px-1">
          <div className="flex-1 relative">
            <input 
              placeholder="Search by token or protocol" 
              className="w-full bg-white text-black rounded-lg px-3 py-1 text-sm pl-8 border border-black"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white">🔍</span>
          </div>
          <div className="flex gap-1 bg-black rounded-3xl px-2  items-center">
            <button className="text-white px-2 py-1 text-xs flex items-center gap-1">
              Filter by 
            </button>
            <button className="bg-white text-black rounded-2xl px-3 py-1 text-xs font-semibold flex items-center gap-1">
              Protocol <span>▼</span>
            </button>
          </div>
        </div>

        {/* Asset List Header */}
        <div className="flex justify-between py-2 text-sm font-semibold text-black ">
          <span>Asset</span>
          <span className="flex items-center gap-1">
            Borrow APR <span> <img src={Vector} alt="Vector" className="w-4 h-4" /> </span>
          </span>
        </div>
      </div>

      {/* Asset List */}
      <div className="max-h-[220px] overflow-y-auto scrollbar-hide px-2">
        {filteredAssets.length > 0 ? (
          filteredAssets.map((asset, i) => (
            <div className="flex justify-between py-2 border-b border-neutral-700 text-sm text-white last:border-b-0 hover:bg-neutral-700 transition-colors" key={i}>
              <span>{asset.name}</span>
              <span>{asset.apr}</span>
            </div>
          ))
        ) : (
          <div className="text-center py-4 text-neutral-400 text-sm">
            No assets found matching "{searchTerm}"
          </div>
        )}
      </div>
    </section>
  );
} 