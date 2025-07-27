import React from 'react';
import catgroup from '../assets/catgroup.png';

export default function Sidebar() {
  return (
    <div className="flex bg-yellow-50 text-neutral-900 rounded-2xl p-3 sm:p-5 shadow-lg flex-col items-center w-full max-w-[300px] mx-auto">
      <img src={catgroup} alt="cats" className="w-32 sm:w-48 h-20 sm:h-32 mb-3 sm:mb-4" />
      <div className="text-sm sm:text-base text-center mb-2">
        We turn locked assets into liquid NFTs, unlocking multi-layered yield through Bribe Mechanisms.<br /><br />
        <b>Still curious, kitty?</b>
      </div>
      <a 
        href="https://discord.com/invite/RZWntTWFrb"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-yellow-200 text-neutral-900 border-none rounded-lg py-3 w-full text-base sm:text-lg font-bold cursor-pointer hover:bg-yellow-300 transition-colors text-center no-underline"
      >
        Join our Discord and let's chat!
      </a>
    </div>
  );
} 