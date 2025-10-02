import { FocusCards } from "./ui/focus-cards";
export function FocusCardsDemo() {
  const cards = [
    {
      title: "Afood Aeria Mall",
      lien: "https://maps.app.goo.gl/YQhtPXFHqMMhnJPi9",
      src: "/ariamall-casablanca.jpg",
    },
    {
      title: "Afood Morocco Mall",
      lien: "https://maps.app.goo.gl/dvrSNNujcfmDHo3P7",
      src: "/moroccomall-casablanca.webp",
    },
    {
      title: "Afood AL Oulfa ",
      lien: "https://maps.app.goo.gl/jZ19KefCgBkqK9Rx8",
      src: "/afoodoulfa.jpg",
    },
   
  ];

  return <FocusCards cards={cards} />;
}
