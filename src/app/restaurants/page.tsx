// src/app/restaurants/page.tsx

"use client";
import React from "react";
import { StickyScroll } from "@/Components/ui/sticky-scroll-reveal";


const content = [
  {
    title: "AFOOD OULFA",
    description:
      "Retrouvez Afood à Oulfa, Casablanca. Un endroit idéal pour déguster des plats savoureux et partager des moments inoubliables avec vos proches.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="/afoodoulfa.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "AFOOD MOROCCO MALL",
    description:
      "Retrouvez Afood à Morocco Mall, Casablanca. Un endroit idéal pour déguster des plats savoureux et partager des moments inoubliables avec vos proches.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="/moroccomall-casablanca.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "AFOOD AREAMALL",
    description:
      "Retrouvez Afood à Areamall, Casablanca. Un endroit idéal pour déguster des plats savoureux et partager des moments inoubliables avec vos proches.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="/ariamall-casablanca.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  
];
export default function Page() {
  return (
    <div className="w-full py-4 h-screen  p-10">
      <StickyScroll content={content} />
    </div>
  );
}
