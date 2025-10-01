import { FocusCards } from "./ui/focus-cards";
export function FocusCardsDemo() {
  const cards = [
    {
      title: "Afood Aeria Mall",
      lien: "https://maps.app.goo.gl/YQhtPXFHqMMhnJPi9",
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/509251349.jpg?k=625ce63f644253ee94b5d616c79d7f729a7c289bad92b8a8d2f2991f5db84b63&o=&hp=1",
    },
    {
      title: "Afood Morocco Mall",
      lien: "https://maps.app.goo.gl/dvrSNNujcfmDHo3P7",
      src: "https://media.gettyimages.com/id/137594163/fr/photo/the-entrance-to-the-newly-opened-morocco-mall-left-stands-beside-an-imax-cinema-complex-right.jpg?s=1024x1024&w=gi&k=20&c=WG5Bybygsawl6sRFGxBP0cbM9DbWzNlZEX4U1GiTC18=",
    },
    {
      title: "Afood AL Oulfa ",
      lien: "https://maps.app.goo.gl/jZ19KefCgBkqK9Rx8",
      src: "https://afood.ma/wp-content/uploads/elementor/thumbs/afood-0033-scaled-1-qwpr075fjjcfngvfxckl9xp8vr5rco0zatxlo0zpq8.jpg",
    },
   
  ];

  return <FocusCards cards={cards} />;
}
