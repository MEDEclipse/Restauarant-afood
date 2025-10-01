// src/components/AboutSection.tsx

"use client";

import React from "react";
import Image from "next/image";
import { Star } from "lucide-react"; // Pour les étoiles des récompenses
import { Cormorant_Garamond } from 'next/font/google';
const garamond = Cormorant_Garamond({ subsets: ['latin'], weight: ['300'] });

export function AboutSection() {
  return (
    <section className="relative w-full h-auto bg-black text-white py-16">
      <div className="mx-auto max-w-7xl px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8">
          {/* Bloc de Gauche: Image avec texte */}
          <div className="relative h-[600px] md:h-[700px] lg:h-[800px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="" // Remplacez par votre image de plat
              alt="L'univers AFOOD"
              layout="fill"
              objectFit="cover"
              className="brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8">
              <h2 className="font-serif text-5xl md:text-6xl font-bold text-white tracking-tight">
                L'UNIVERS AFOOD
              </h2>
            </div>
          </div>

          {/* Bloc de Droite: Contenu */}
          <div className="flex flex-col gap-12">
            {/* Section A PROPOS DE NOUS */}
            <div className="bg-neutral-950 p-8 rounded-lg shadow-xl">
              <h3 className="text-xl font-bold uppercase tracking-wide text-neutral-400 mb-4">
                <span className={garamond.className}>
                  À PROPOS DE NOUS
                </span>
              </h3>
              <p className={`${garamond.className} text-lg leading-relaxed text-neutral-200`}>
                CHEZ AFOOD, LA PASSION DE LA BONNE CUISINE SE MONTRE DANS CHAQUE PLAT. NOUS MARIONS DES PRODUITS DE PREMIÈRE QUALITÉ À UN SAVOIR-FAIRE UNIQUE POUR VOUS OFFRIR UNE EXPÉRIENCE GOURMANDE DANS UNE AMBIANCE FAMILIALE CHALEUREUSE. RETROUVEZ-NOUS À OULFA, MOROCCO MALL ET AERIAMALL.
              </p>
              {/* Image d'illustration à droite du texte */}
              <div className="relative h-48 w-full mt-6 rounded-lg overflow-hidden shadow-md">
                <Image
                  src="" // Remplacez par votre image d'intérieur
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
              <div className="bg-neutral-950 p-6 rounded-lg shadow-xl text-center flex flex-col items-center justify-center">
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} fill="currentColor" className="text-yellow-500" />
                  ))}
                </div>
                <p className="text-sm font-semibold text-neutral-100">TRIP ADVISOR</p>
                <p className="text-xs text-neutral-400">BEST STEAK HOUSE</p>
                <p className="text-xs text-neutral-500">PRAGUE</p>
              </div>
              {/* Carte Michelin Guide */}
              <div className="bg-neutral-950 p-6 rounded-lg shadow-xl text-center flex flex-col items-center justify-center">
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} fill="currentColor" className="text-yellow-500" />
                  ))}
                </div>
                <p className="text-sm font-semibold text-neutral-100">MICHELIN GUIDE</p>
                <p className="text-xs text-neutral-400">BEST STEAK HOUSE</p>
                <p className="text-xs text-neutral-500">PRAGUE</p>
              </div>
              {/* Carte Star Dining */}
              <div className="bg-neutral-950 p-6 rounded-lg shadow-xl text-center flex flex-col items-center justify-center">
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} fill="currentColor" className="text-yellow-500" />
                  ))}
                </div>
                <p className="text-sm font-semibold text-neutral-100">STAR DINING</p>
                <p className="text-xs text-neutral-400">BEST STEAK HOUSE</p>
                <p className="text-xs text-neutral-500">PRAGUE</p>
              </div>
            </div>

            {/* Section NOTRE HISTOIRE */}
            <div className={`${garamond.className} bg-neutral-950 p-8 rounded-lg shadow-xl`}>
              <h3 className="text-xl font-bold tracking-wide text-neutral-400 mb-4 text-center">
                <span className="text-neutral-600 mr-2">---</span> NOTRE HISTOIRE <span className="text-neutral-600 mr-2">---</span>
              </h3>
              <p className="text-base leading-relaxed text-neutral-300 mb-6">
                Founded with a passion for culinary excellence, Qitchen&apos;s journey began in the heart of Prague. Over years, it evolved into a haven for sushi enthusiasts, celebrated for its artful mastery and devotion to redefining gastronomy.
              </p>
              {/* Image de boisson */}
              <div className="relative h-60 w-full rounded-lg overflow-hidden shadow-md">
                <Image
                  src="" // Remplacez par votre image de boisson
                  alt="Boisson rafraîchissante"
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              {/* Catégories / tags sous l'image de boisson */}
              <div className="mt-6 flex gap-3 flex-wrap">
                <span className="bg-neutral-800 text-neutral-300 text-xs px-3 py-1 rounded-full">Authentiques</span>
                <span className="bg-neutral-800 text-neutral-300 text-xs px-3 py-1 rounded-full">Chaleureux</span>
                <span className="bg-neutral-800 text-neutral-300 text-xs px-3 py-1 rounded-full">Gourmands</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}