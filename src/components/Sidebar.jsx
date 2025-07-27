import React from 'react';
import catgroup from '../assets/catgroup.png';

export default function Sidebar() {
  return (
    <div className="flex bg-yellow-50 text-neutral-900 rounded-2xl p-5 shadow-lg flex flex-col items-center min-w-[260px] max-w-[300px]">
      <img src={catgroup} alt="cats" className="w-48 h-32 mb-4" />
      <div className="text-base text-center mb-2">
        We turn locked assets into liquid NFTs, unlocking multi-layered yield through Bribe Mechanisms.<br /><br />
        <b>Still curious, kitty?</b>
      </div>
      <a 
        href="https://discord.com/invite/RZWntTWFrb"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-yellow-200 text-neutral-900 border-none rounded-lg py-3 w-full text-lg font-bold cursor-pointer hover:bg-yellow-300 transition-colors text-center no-underline"
      >
        Join our Discord and let's chat!
      </a>
    </div>
  );
} 