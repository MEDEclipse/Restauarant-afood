"use client";

import React from "react";
import Image from "next/image";
import { Star } from "lucide-react"; // Pour les étoiles des récompenses
import { Cormorant_Garamond } from 'next/font/google';
const garamond = Cormorant_Garamond({ subsets: ['latin'], weight: ['700'] });

export function AboutSection() {
  return (
    <section className="relative w-full h-auto p-0 lg:p-10">
      <div className="mx-auto max-w-7xl px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8">
          {/* Bloc de Gauche: Image avec texte */}
          <div className="relative h-[600px] md:h-[700px] lg:h-[800px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/1-2-1.png" // Remplacez par votre image de plat
              alt="L&apos;univers AFOOD"
              layout="fill"
              objectFit="cover"
              className="brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent flex items-end p-8">
              <h2 className="font-serif text-5xl md:text-6xl font-bold text-white tracking-tight">
                L&apos;UNIVERS AFOOD
              </h2>
            </div>
          </div>

          {/* Bloc de Droite: Contenu */}
          <div className="flex flex-col gap-12">
            {/* Section A PROPOS DE NOUS */}
            <div className="p-4 rounded-lg shadow-xl">
              <h3 className="text-xl font-bold mb-4">
                <span className={garamond.className}>
                  À PROPOS DE NOUS
                </span>
              </h3>
              <p className={`${garamond.className} text-lg leading-relaxed`}>
                CHEZ AFOOD, LA PASSION DE LA BONNE CUISINE SE MONTRE DANS CHAQUE PLAT. NOUS MARIONS DES PRODUITS DE PREMIÈRE QUALITÉ À UN SAVOIR-FAIRE UNIQUE POUR VOUS OFFRIR UNE EXPÉRIENCE GOURMANDE DANS UNE AMBIANCE FAMILIALE CHALEUREUSE. RETROUVEZ-NOUS À OULFA, MOROCCO MALL ET AERIAMALL.
              </p>
              {/* Image d'illustration à droite du texte */}
              <div className="relative h-72 w-full mt-6 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/3-1-1-afoodmenu.png" // Remplacez par votre image d'intérieur
                  alt="Intérieur du restaurant"
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
            </div>

            {/* Section Récompenses */}
            <div className={`${garamond.className} grid grid-cols-1 md:grid-cols-3 gap-6`}>
              {/* Carte Trip Advisor */}
              <div className="p-6 rounded-lg shadow-xl text-center flex flex-col items-center justify-center">
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} fill="currentColor" className="text-yellow-500" />
                  ))}
                </div>
                <p className="text-sm font-semibold">TRIP ADVISOR CASABLANCA</p>
                <p className="text-xs">BEST STEAK HOUSE</p>
                <p className="text-xs">PRAGUE</p>
              </div>
              {/* Carte Michelin Guide */}
              <div className="p-6 rounded-lg shadow-xl text-center flex flex-col items-center justify-center">
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} fill="currentColor" className="text-yellow-500" />
                  ))}
                </div>
                <p className="text-sm font-semibold">MICHELIN GUIDE</p>
                <p className="text-xs">BEST STEAK HOUSE</p>
                <p className="text-xs">PRAGUE</p>
              </div>
              {/* Carte Star Dining */}
              <div className="p-6 rounded-lg shadow-xl text-center flex flex-col items-center justify-center">
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} fill="currentColor" className="text-yellow-500" />
                  ))}
                </div>
                <p className="text-sm font-semibold">STAR DINING</p>
                <p className="text-xs">BEST STEAK HOUSE</p>
                <p className="text-xs">PRAGUE</p>
              </div>
            </div>

            {/* Section NOTRE HISTOIRE */}
            {/* <div className={`${garamond.className} bg-neutral-950 p-8 rounded-lg shadow-xl`}>
              <h3 className="text-xl font-bold tracking-wide text-neutral-400 mb-4 text-center">
              </h3>
              
              <div className="relative h-60 w-full rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/5-afoodmenu.png" // Remplacez par votre image de boisson
                  alt="Boisson rafraîchissante"
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="mt-6 flex gap-3 flex-wrap">
                <span className="bg-neutral-800 text-neutral-300 text-xs px-3 py-1 rounded-full">salades</span>
                <span className="bg-neutral-800 text-neutral-300 text-xs px-3 py-1 rounded-full">burgers</span>
                <span className="bg-neutral-800 text-neutral-300 text-xs px-3 py-1 rounded-full">pizza</span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
