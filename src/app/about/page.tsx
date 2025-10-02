// src/app/about/page.tsx
"use client";
import React from "react";


// import { calsans } from "@/Components/fonts/calsans";    // changer please  a importer les font de next js


// import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/Components/ui/tracing-beam";  // à changer le fichier de tracing-beam
import Image from "next/image";

export default function Page() {
  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>

            <p className={"text-xl mb-4"}>
              {item.title}
            </p>

            <div className="text-sm  prose prose-sm dark:prose-invert">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                height={1000}
                  width={1000}
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const dummyContent = [
  {
    title: "À PROPOS DE NOUS",
    description: (
      <>
        <p>
        Découvrez l’expérience Afood : des plats raffinés, une ambiance conviviale, et des saveurs authentiques pour des instants partagés en famille ou entre amis. Retrouvez-nous à Oulafa, Morocco Mall, et Areamall pour un moment culinaire unique, où qualité et fraîcheur sont toujours au rendez-vous.
        </p>
        <p>
        Chez Afood, nous sommes passionnés par la gastronomie et nous nous engageons à offrir une expérience culinaire unique. Notre menu varié et saisonnier met en valeur les produits de qualité et la fraîcheur des ingrédients.
        </p>
        <p>
        Que vous soyez à la recherche d’un dîner romantique, d’un repas familial ou d’un moment convivial, Afood est l’endroit idéal pour partager des plats savoureux et des moments inoubliables.
        </p>
      </>
    ),
    badge: "À PROPOS DE NOUS",
    image: "/3-1-1-afoodmenu.png",
  },
  {
    title: "NOTRE HISTOIRE",
    description: (
      <>
        <p>
        Fondée avec une passion pour la cuisine , Afood a commencé son aventure au cœur de Casablanca. Au fil des années, elle est devenue un lieu de référence pour les amateurs de cuisine marocaine, connue pour son savoir-faire unique et sa délicieuse plats.
        </p>
        <p>
        Nos chefs talentueux préparent chaque plat avec soin, en utilisant des ingrédients frais et de qualité pour vous offrir des plats savoureux et authentiques.
        </p>
      </>
    ),
    badge: "NOTRE HISTOIRE",
    image: "/5-afoodmenu.png",
  },
  {
    title: "NOS RESTAURANTS",
    description: (
      <>
        <p>
        Retrouvez Afood dans trois emplacements différents à Casablanca : Oulafa, Morocco Mall, et Areamall. Chaque restaurant offre une ambiance chaleureuse et un service attentif, où vous pouvez profiter de plats savoureux et partager des moments inoubliables avec vos proches.
        </p>
      </>
    ),
    badge: "NOS RESTAURANTS",
    image: "/ariamall-casablanca.jpg",
  },
];
