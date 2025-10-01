// src/components/CopyrightBar.tsx

import React from 'react';

export const CopyrightBar: React.FC = () => {
  return (
    <div className="bg-black px-4 py-8">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-full bg-[#1C1C1E] px-4 py-3">
          <p className="text-center text-xs text-neutral-400 sm:text-sm">
            COPYRIGHT © {new Date().getFullYear()} AFOOD | SITE DÉVELOPPÉ PAR <a href="https://www.medeclipse.ma/" target="_blank" rel="noopener noreferrer" className='font-bold text-amber-100 italic hover:underline'>MEDECLIPSE</a>
          </p>
        </div>
      </div>
    </div>
  );
};