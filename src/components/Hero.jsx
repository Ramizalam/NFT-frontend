import React, { useState } from 'react';
import catImg from '../assets/cat.png';

export default function Hero() {
  const [activeTab, setActiveTab] = useState('Borrow');

  return (
    <main className="flex flex-col items-center mt-5 relative">
       <div className="text-4xl font-bold text-center mb-2 tracking-wide text-yellow-50">Unified Borrowing</div>
       <div className="text-center mb-5 text-lg text-yellow-50">Powered by <span className="bg-yellow-200 text-neutral-900 rounded-lg px-2 py-1 font-bold ml-2">pawUSDC</span></div>
      <div className="bg-black from-amber-800/60 via-neutral-800 to-neutral-900  rounded-3xl shadow-2xl p-3 min-w-[420px] max-w-[480px] mb-0 relative blurry-dots-bg">
        {/* Main Tabs */}
        <div className="flex w-full justify-center bg-black rounded-full   mb-2 border1">
          <button 
            className={`px-8 py-2 text-lg font-semibold w-full rounded-full transition-all ${
              activeTab === 'Borrow' 
                ? 'bg-white text-neutral-900' 
                : ' text-yellow-50'
            }`}
            onClick={() => setActiveTab('Borrow')}
          >
            Borrow
          </button>
          <button 
            className={`px-8 py-2 text-lg font-semibold rounded-full w-full transition-all ${
              activeTab === 'Repay' 
                ? 'bg-white text-neutral-900' 
                : ' text-yellow-50'
            }`}
            onClick={() => setActiveTab('Repay')}
          >
            Repay
          </button>
        </div>

        {/* Collateral Section */}
        <div className="mb-3 flex flex-col items-center">
          <div className="flex items-center gap-1 mb-4 text-yellow-50">
            <span className="text-lg">Collateral</span>
            <span>→</span>
            <button className="bg-yellow-200 text-neutral-900 rounded-full px-9 py-1 font-semibold text-base">Liquid NFT</button>
            <button className="bg-neutral-700 text-yellow-50 rounded-full px-9 py-1 font-semibold text-base">LP Token</button>
          </div>
          
          {/* Collateral Input Field */}
          <div className="bg-black w-full rounded-2xl border-1 border-yellow-50   p-6 shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-3">
                <button className="bg-neutral-800 text-white rounded-2xl px-4 py-2 font-semibold flex items-center gap-2">
                  <span>◆</span> WMON <span>▼</span>
                </button>
              </div>
              <div className="text-2xl  bg-neutral-800 px-13 py-1 rounded-2xl ">
                <span>
                49.13
                </span>
                </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="text-sm ">Collateral Value: $717.21</div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-yellow">Balance: 54.321</span>
                <button className="bg-yellow-200 text-neutral-900 rounded-lg px-3 py-1 text-sm font-semibold">Max</button>
              </div>
            </div>
          </div>
          
          {/* Down Arrow */}
          {/* <div className="text-center text-white absolute bg-neutral-800  w-7 h-7 rounded flex items-center justify-center transform -translate-y-1/2 top-   ">↓</div> */}
        </div>

        {/* Borrowing Section */}
        <div className="mb-6">
          {/* Borrowing Input Field */}
          <div className="bg-neutral-800 rounded-2xl p-6 shadow-lg mb-4">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-3">
                <button className="bg-blue-500 text-white rounded-lg px-4 py-2 font-semibold flex items-center gap-2">
                  <span>$</span> USDC <span>▼</span>
                </button>
              </div>
              <div className="text-2xl font-bold text-yellow-50">51.24</div>
            </div>
            <div className="flex justify-between items-center">
              <div className="text-sm text-yellow-200">Max LTV: 70%</div>
              <div className="text-sm text-yellow-200">LTV: 57.192%</div>
            </div>
          </div>
        </div>

        {/* Financial Metrics */}
        <div className="grid grid-cols-2 gap-2 mb-4  text-sm pl-7 py-2 border-1 border-yellow-20 rounded-2xl">
          <div ><span className='text-yellow-200'>Borrowing Interest: </span> 12.31%</div>
          <div><span className='text-yellow-200'>Relative APY: </span> +12.23%</div>
          <div><span className='text-yellow-200'>Position Health: </span> 1.234</div>
          <div><span className='text-yellow-200'>Liquidation Price: </span> $12.31</div>
        </div>

        {/* Connect Wallet Button */}
        <button className="w-full bg-white text-neutral-900 rounded-xl py-2 text-lg font-bold cursor-pointer hover:bg-gray-100 transition-colors">
          Connect Wallet
        </button>
      </div>
      {/* Cat image on top */}
    </main>
  );
} 