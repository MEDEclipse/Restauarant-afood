import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

// 🔥 Import de la font Cormorant Garamond
import { Cormorant_Garamond } from 'next/font/google';
const garamond = Cormorant_Garamond({ subsets: ['latin'], weight: ['300'] });

// --- Types TypeScript pour nos données (bonne pratique) ---
type PanelItem = {
  href: string;
  imageUrl: string;
  text: string;
};

// --- Données pour les 3 cartes ---
const panelItems: PanelItem[] = [
  {
    href: "https://d2tvomu9ndhyfk.cloudfront.net/",
    imageUrl: '/5-afoodmenu.png',
    text: 'COMMANDER MAINTENANT',
  },
  {
    href: '/about',
    imageUrl: '/3-1-1-afoodmenu.png',
    text: "L'UNIVERS AFOOD",
  },
  {
    href: '/restaurants',
    imageUrl: '/3-8-afoodmenu.png',
    text: 'NOS RESTAURANTS',
  },
];

// --- Sous-composant pour une seule carte ---
const InfoCard = ({ href, imageUrl, text }: PanelItem) => {
  return (
    <Link
      href={href}
      className="group relative block h-full w-full overflow-hidden rounded-md"
    >
      <Image
        src={imageUrl}
        alt={text}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/50 transition-colors group-hover:bg-black/60" />

      {/* Texte + Icone */}
    <div className="absolute inset-0 flex items-end right-0">
      <div className="flex items-center space-x-2">
        <div className="absolute top-53 right-0 flex items-center rounded-tl-sm bg-black px-4 py-2">
            <span
                className={`${garamond.className} text-lg font-semibold text-white`}
            >
                {text}
            </span>
            <span className="ml-2 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 transition-colors group-hover:bg-white/30">
                <ArrowRight className="h-5 w-5 text-white transition-transform duration-300 group-hover:translate-x-1" />
            </span>
        </div>
      </div>
    </div>
    </Link>
  );
};

// --- Composant Principal ---
export const SideInfoPanel: React.FC = () => {
  return (
    <div className="flex h-full w-full flex-col gap-1">
      {panelItems.map((item) => (
        <InfoCard
          key={item.text}
          href={item.href}
          imageUrl={item.imageUrl}
          text={item.text}
        />
      ))}
    </div>
  );
};
