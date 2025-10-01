"use client";

import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { Cormorant_Garamond } from 'next/font/google';

// Initialisation de la police
const garamond = Cormorant_Garamond({ subsets: ['latin'], weight: ['400', '600'] });

export function AboutSection() {
  return (
    <section className="relative w-full h-auto bg-black text-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Bloc de Gauche: Image Principale */}
          <div className="relative h-[600px] md:h-[700px] lg:h-full min-h-[600px] rounded-lg overflow-hidden shadow-2xl group">
            <Image
              src="" // Assurez-vous que ce chemin est correct dans votre dossier /public
              alt="Plat traditionnel marocain Rfissa servi par AFOOD"
              fill
              className="object-cover brightness-90 group-hover:brightness-100 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8 md:p-10">
              <h2 className={`${garamond.className} text-5xl md:text-6xl font-semibold text-white tracking-tight`}>
                L&apos;Univers AFOOD
              </h2>
            </div>
          </div>

          {/* Bloc de Droite: Contenu Textuel */}
          <div className="flex flex-col gap-10">

            {/* Section A PROPOS DE NOUS */}
            <div className="bg-neutral-950 p-8 rounded-lg shadow-xl border border-neutral-800">
              <h3 className={`${garamond.className} text-2xl font-semibold uppercase tracking-wide text-neutral-300 mb-4`}>
                À Propos de Nous
              </h3>
              <p className="text-base md:text-lg leading-relaxed text-neutral-300">
                Chez AFOOD, la passion de la bonne cuisine se révèle dans chaque plat. Nous marions des produits de première qualité à un savoir-faire unique pour vous offrir une expérience gourmande dans une ambiance familiale et chaleureuse. Retrouvez-nous à Oulfa, Morocco Mall et Aeriamall.
              </p>
            </div>

            {/* Section Récompenses */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-neutral-950 p-6 rounded-lg shadow-xl text-center flex flex-col items-center justify-center border border-neutral-800">
                <div className="flex mb-2 text-yellow-500">
                  {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                <p className="text-sm font-semibold text-neutral-100">TRIP ADVISOR</p>
                <p className="text-xs text-neutral-400">Excellence Culinaire</p>
                <p className="text-xs text-neutral-500">CASABLANCA</p>
              </div>
              <div className="bg-neutral-950 p-6 rounded-lg shadow-xl text-center flex flex-col items-center justify-center border border-neutral-800">
                <div className="flex mb-2 text-yellow-500">
                  {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                <p className="text-sm font-semibold text-neutral-100">GUIDE GOURMAND</p>
                <p className="text-xs text-neutral-400">Saveurs Authentiques</p>
                <p className="text-xs text-neutral-500">MAROC</p>
              </div>
              <div className="bg-neutral-950 p-6 rounded-lg shadow-xl text-center flex flex-col items-center justify-center border border-neutral-800">
                <div className="flex mb-2 text-yellow-500">
                  {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                <p className="text-sm font-semibold text-neutral-100">STAR DINING</p>
                <p className="text-xs text-neutral-400">Meilleur Service</p>
                <p className="text-xs text-neutral-500">CASABLANCA</p>
              </div>
            </div>

            {/* Section NOTRE HISTOIRE */}
            <div className="bg-neutral-950 p-8 rounded-lg shadow-xl border border-neutral-800">
              <h3 className={`${garamond.className} text-2xl font-semibold tracking-wide text-neutral-300 mb-4 text-center`}>
                Notre Histoire
              </h3>
              <p className="text-base leading-relaxed text-neutral-300 mb-6 text-center">
                Né d&apos;une passion pour l&apos;excellence culinaire, le voyage d&apos;AFOOD a commencé au cœur de Casablanca. Au fil des ans, notre restaurant est devenu un havre pour les amateurs de cuisine marocaine, célébré pour sa maîtrise et son dévouement à redéfinir la gastronomie locale.
              </p>
              <div className="mt-6 flex justify-center gap-3 flex-wrap">
                <span className="bg-neutral-800 text-neutral-300 text-xs px-3 py-1 rounded-full">Authentique</span>
                <span className="bg-neutral-800 text-neutral-300 text-xs px-3 py-1 rounded-full">Chaleureux</span>
                <span className="bg-neutral-800 text-neutral-300 text-xs px-3 py-1 rounded-full">Gourmand</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
