
import { MainHero } from "../Components/MainHero";
import { AboutSection } from "../Components/AboutSection";
import {ContactBubbles} from "../Components/Contactbulle";
import { CopyrightBar } from "../Components/CopyrightBar";
//import {InfiniteMovingCards} from "../Components/ui/infinite-moving-cards";
import { FocusCardsDemo } from "@/Components/focus-cards";
import ImagesFoodPresenation from "@/Components/imagesFoodPresenation";
import { Comments } from "@/Components/Reviews";
//import { testimonials } from "@/Components/Reviews";
import { Hero47 } from "@/Components/hero";
export default function Home() {
  return (
    
    <main className="flex min-h-screen">
      
      {/* Contenu principal */}
      <div className="flex-1 relative">
      <Hero47 
        heading="AFood - Restaurant Authentique Marocain"
        subheading="Découvrez nos délicieux plats marocains traditionnels préparés avec passion"
        description="AFood est un restaurant marocain authentique qui vous propose des plats traditionnels préparés avec des ingrédients frais et des recettes ancestrales. Commandez en ligne ou visitez-nous."
        image={
          {
            src: "/commandapp.png",
            alt: "AFood - Restaurant Marocain Authentique"
          }
        }
      />
        <MainHero />
        <ContactBubbles />
        <AboutSection />
        {/* <Comments /> */}
        <FocusCardsDemo />
        <img
          src="/logo.png"
          alt="Footer Background"
          className="w-20 mt-10 mx-auto"
        />
       
       <CopyrightBar />
      </div>

      
    </main>
  );
}
