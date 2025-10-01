import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Instagram, Twitter, MessageCircle } from 'lucide-react';

// 🔥 Importer la font Cormorant Garamond
import { Cormorant_Garamond } from 'next/font/google';
const garamond = Cormorant_Garamond({ subsets: ['latin'], weight: ['700'] });

import { SideInfoPanel } from './SideInfoPanel';

export const MainHero: React.FC = () => {
  return (
    <section className="min-h-screen bg-black p-4">
      {/* Grille principale qui divise l'écran en 5 colonnes sur desktop */}
      <div className="grid h-[calc(100vh-2rem)] grid-cols-1 gap-4 md:grid-cols-5">

        {/* --- PARTIE GAUCHE (4 colonnes sur 5) --- */}
        <div className="relative col-span-1 overflow-hidden rounded-md md:col-span-4">
          <Image
            src=""
            alt="Table garnie de plats du restaurant AFOOD"
            fill
            className="object-cover"
            priority
          />
          {/* Dégradé pour la lisibilité du texte */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

          {/* Contenu superposé */}
          <div className="relative z-10 flex h-full flex-col justify-between p-8">
            {/* Logo en haut à gauche */}
            <div className="self-start">
              {<Image
                src=""
                alt="Logo AFOOD"
                width={100}
                height={100}
              />}
            </div>
            
            <div className="flex items-end justify-between">
              {/* Titre en bas à gauche */}
              <h1
                className={`${garamond.className} text-4xl font-bold text-white md:text-6xl leading-tight`}
              >
                CHEZ <br /> RESTAURANT AFOOD
              </h1>

              {/* Icônes sociales (cachées sur mobile) */}
              <div className="hidden items-center gap-2 md:flex">
                <Link href="#" className="rounded-full border border-white/30 p-2 text-white/70 transition-colors hover:bg-white/10 hover:text-white">
                  <Instagram size={18} />
                </Link>
                <Link href="#" className="rounded-full border border-white/30 p-2 text-white/70 transition-colors hover:bg-white/10 hover:text-white">
                  <Twitter size={18} />
                </Link>
                <Link href="#" className="rounded-full border border-white/30 p-2 text-white/70 transition-colors hover:bg-white/10 hover:text-white">
                  <MessageCircle size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* --- PARTIE DROITE (1 colonne sur 5, cachée sur mobile) --- */}
        <div className="hidden md:block">
          <SideInfoPanel />
        </div>
      </div>
    </section>
  );
};
