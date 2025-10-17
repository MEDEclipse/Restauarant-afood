import Link from "next/link";

interface MenuItem {
  title: string;
  links: {
    text: string;
    url: string;
  }[];
}

interface Footer2Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  tagline?: string;
  menuItems?: MenuItem[];
  copyright?: string;
  bottomLinks?: {
    text: string;
    url: string;
  }[];
}

const CopyrightBar = ({
  
  menuItems = [
    {
      title: "A propos de nous",
      links: [
        { text: "A propos de nous", url: "/about" },
        { text: "Contact", url: "/contact" },
        { text: "Nos restaurants", url: "/restaurants" },
        { text: "Menu", url: "/" },
        { text: "Commander maintenant", url: "https://d2tvomu9ndhyfk.cloudfront.net/" },
      ],
    },
    {
      title: "Nos restaurants",
      links: [
        { text: "AFOOD OULFA", url: "/restaurants" },
        { text: "AFOOD MOROCCO MALL", url: "/restaurants" },
        { text: "AFOOD AREAMALL", url: "/restaurants" },
      ],
    },
    {
      title: "Menu",
      links: [
        { text: "Menu", url: "/" },
        { text: "Commander maintenant", url: "https://d2tvomu9ndhyfk.cloudfront.net/" },
      ],
    },
    {
      title: "reseaux sociaux",
      links: [
        { text: "Facebook", url: "https://www.facebook.com/afood.ma" },
        { text: "Instagram", url: "https://www.instagram.com/restaurant_afood?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" },
        { text: "Twitter", url: "https://www.twitter.com/afood.ma" },
      ],
    },
  ],
  copyright = "© 2025 Medeclipse. All rights reserved.",
  bottomLinks = [
    { text: "Conditions d'utilisation", url: "/legal" },
    { text: "Politique de confidentialité", url: "/legal" },
  ],
}: Footer2Props) => {
  return (
    <section className="p-10">
      <div className="container mx-auto">
        <footer>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 text-sm lg:text-md">
            
            {menuItems.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold">{section.title}</h3>
                <ul className="text-muted-foreground space-y-4">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="hover:text-primary font-medium"
                    >
                      <a href={link.url}>{link.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-muted-foreground mt-24 flex flex-col justify-between gap-4 border-t pt-8 text-sm font-medium md:flex-row md:items-center">
            <p>{copyright}</p>
            <ul className="flex gap-4">
              {bottomLinks.map((link, linkIdx) => (
                <li key={linkIdx} className="hover:text-primary underline">
                  <a href={link.url}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
        </footer>
      </div>
    </section>
  );
};

export { CopyrightBar };
