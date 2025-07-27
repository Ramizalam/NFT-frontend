import React from 'react';
import companylogo from '../assets/companylogo.png';

export default function Navbar() {
  return (
    <header className="flex items-center justify-between pt-5 px-8 mb-10 bg-transparent">
      <div className="flex items-center">
        <img src={companylogo} alt="Company Logo" className="h-13 mr-3" />
        <nav className="flex gap-3">
          <button className="bg-yellow-50 text-neutral-900 rounded-lg px-5 py-1 transition hover:bg-yellow-200">pawUSDC</button>
          <button className="bg-yellow-50 text-neutral-900 rounded-lg px-5 py-1 transition hover:bg-yellow-200">Vaults</button>
          <button className="bg-yellow-50 text-neutral-900 rounded-lg px-5 py-1 transition hover:bg-yellow-200">Meow Pools</button>
          <button className="bg-yellow-50 text-neutral-900 rounded-lg px-5 py-1 transition hover:bg-yellow-200">Aggregator</button>
          <button className="bg-yellow-50 text-neutral-900 rounded-lg px-5 py-1 transition hover:bg-yellow-200">More</button>
        </nav>
      </div>
      <div className="flex gap-3">
        <button className="bg-yellow-50 text-neutral-900 rounded-lg px-2 py-1 font-semibold">Monad</button>
        <button className="bg-yellow-200 text-neutral-900 rounded-lg px-2 py-1 font-semibold">Connect Wallet</button>
      </div>
    </header>
  );
} 