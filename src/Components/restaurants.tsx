import { Cog, Lightbulb, ListChecks } from "lucide-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs";

interface Feature {
  id: string;
  icon: React.ReactNode;
  heading: string;
  description: string;
  image: string;
  url: string;
  isDefault: boolean;
}

interface Feature51Props {
  features: Feature[];
}

const Restaurants = () => {
  const features = [
    {
    id: "AFOOD OULFA",
    heading: "AFOOD OULFA",
    icon: <img src="/afoodoulfa.jpg" alt="AFOOD OULFA" className="size-4" />,

    description:
        "Retrouvez Afood à Oulfa, Casablanca. Un endroit idéal pour déguster des plats savoureux et partager des moments inoubliables avec vos proches.",
    image: "/afoodoulfa.jpg",
    url: "/afoodoulfa.jpg",
    isDefault: true,
    },
    {
    id: "AFOOD MOROCCO MALL",
    icon: <img src="/moroccomall-casablanca.webp" alt="AFOOD MOROCCO MALL" className="size-4" />,

    heading: "AFOOD MOROCCO MALL",
    description:
        "Retrouvez Afood à Morocco Mall, Casablanca. Un endroit idéal pour déguster des plats savoureux et partager des moments inoubliables avec vos proches.",
    image: "/moroccomall-casablanca.webp",
    url: "/moroccomall-casablanca.webp",
    isDefault: false,
    },
    {
    id: "AFOOD AREAMALL",
    icon: <img src="/ariamall-casablanca.jpg" alt="AFOOD AREAMALL" className="size-4" />,
    heading: "AFOOD AREAMALL",
    description:
        "Retrouvez Afood à Areamall, Casablanca. Un endroit idéal pour déguster des plats savoureux et partager des moments inoubliables avec vos proches.",
    image: "/ariamall-casablanca.jpg",
    url: "/ariamall-casablanca.jpg",
    isDefault: false,
    },
  ];
  return (
    <section className="p-32">
      <div className="container">
        <Tabs defaultValue={features[0].id} className="p-1">
          <TabsList className="bg-background flex h-auto w-full flex-col gap-2 p-0 md:flex-row">
            {features.map((tab) => {
              return (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className={`hover:border-muted data-[state=active]:bg-muted group flex w-full flex-col items-start justify-start gap-1 whitespace-normal rounded-md border p-4 text-left shadow-none transition-opacity duration-200 hover:opacity-80 data-[state=active]:shadow-none ${
                    tab.isDefault ? "" : ""
                  }`}
                >
                  <div className="flex items-center gap-2 md:flex-col md:items-start lg:gap-4">
                    {tab.icon && (
                      <span className="bg-muted text-muted-foreground group-data-[state=active]:bg-primary group-data-[state=active]:text-primary-foreground flex size-8 items-center justify-center rounded-full transition-opacity duration-200 lg:size-10">
                        {tab.icon}
                      </span>
                    )}
                    <p className="text-lg font-semibold transition-opacity duration-200 md:text-2xl lg:text-xl">
                      {tab.heading}
                    </p>
                  </div>
                  <p className="text-muted-foreground font-normal transition-opacity duration-200 md:block">
                    {tab.description}
                  </p>
                </TabsTrigger>
              );
            })}
          </TabsList>
          {features.map((tab) => (
            <TabsContent
              key={tab.id}
              value={tab.id}
              className=" duration-300"
            >
              <img
                src={tab.image}
                alt={tab.heading}
                className="aspect-video w-full rounded-md object-cover  duration-300"
              />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export { Restaurants };
