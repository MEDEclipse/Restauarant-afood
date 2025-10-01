
import { MainHero } from "../Components/MainHero";
import { AboutSection } from "../Components/AboutSection";
import {ContactBubbles} from "../Components/Contactbulle";
import { CopyrightBar } from "../Components/CopyrightBar";
//import {InfiniteMovingCards} from "../Components/ui/infinite-moving-cards";
import { FocusCardsDemo } from "@/Components/focus-cards";
//import { testimonials } from "@/Components/Reviews";
export default function Home() {
  return (
    
    <main className="flex min-h-screen bg-black text-white">
      
      {/* Contenu principal */}
      <div className="flex-1 relative">
        
        <MainHero />
        <ContactBubbles />
        <AboutSection />
        <FocusCardsDemo />
       {/* <InfiniteMovingCards items={testimonials} />}*/}
        
        <img
          src=""
          alt="Footer Background"
          className="w-20 mt-10 mx-auto"
        />
       
        <CopyrightBar />
      </div>

      
    </main>
  );
}
