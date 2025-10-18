// src/app/contact/page.tsx

import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { CopyrightBar } from "@/Components/CopyrightBar";

interface Contact7Props {
  title?: string;
  description?: string;
  emailLabel?: string;
  emailDescription?: string;
  email?: string;
  officeLabel?: string;
  officeDescription?: string;
  officeAddress?: string;
  phoneLabel?: string;
  phoneDescription?: string;
  phone?: string;
  chatLabel?: string;
  chatDescription?: string;
  chatLink?: string;
}

const Contact = ({
  title = "Contact Us",
  description = "contactez-nous", 
  emailLabel = "Email",
  emailDescription = "nous répondons à tous les emails dans les 24 heures.",
  email = "contact@afood.ma",
  officeLabel = "Office",
  officeDescription = "visitez nos restaurants",
  officeAddress = "Oulfa, Morocco Mall, Areamall",
  phoneLabel = "Phone",
  phoneDescription = "nous sommes disponibles tout les jours et la semaine",
  phone = "Tel: 0660600602 / 0520012220 ",
  chatLabel = "Live Chat",
  chatDescription = "communiquez avec notre équipe de support",
  chatLink = "Tel: 0660600602 / 0520012220 ",
}: Contact7Props) => {
  return (
    <section className="bg-background p-10 lg:p-32 ">
      <div className="container">
        <div className="mb-14">
          <h1 className="mb-3 mt-2 text-balance text-3xl font-semibold md:text-4xl">
            {title}
          </h1>
          <p className="text-muted-foreground max-w-xl text-lg">
            {description}
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-1">
          <div className="bg-muted rounded-lg p-6">
            <span className="bg-accent mb-3 flex size-12 flex-col items-center justify-center rounded-full">
              <Mail className="h-6 w-auto" />
            </span>
            <p className="mb-2 text-lg font-semibold">{emailLabel}</p>
            <p className="text-muted-foreground mb-3">{emailDescription}</p>
            <a
              href={`mailto:${email}`}
              className="font-semibold hover:underline"
            >
              {email}
            </a>
          </div>
          <div className="bg-muted rounded-lg p-6">
            <span className="bg-accent mb-3 flex size-12 flex-col items-center justify-center rounded-full">
              <MapPin className="h-6 w-auto" />
            </span>
            <p className="mb-2 text-lg font-semibold">{officeLabel}</p>
            <p className="text-muted-foreground mb-3">{officeDescription}</p>
            <a href="#" className="font-semibold hover:underline">
              {officeAddress}
            </a>
          </div>
          <div className="bg-muted rounded-lg p-6">
            <span className="bg-accent mb-3 flex size-12 flex-col items-center justify-center rounded-full">
              <Phone className="h-6 w-auto" />
            </span>
            <p className="mb-2 text-lg font-semibold">{phoneLabel}</p>
            <p className="text-muted-foreground mb-3">{phoneDescription}</p>
            <a href={`tel:${phone}`} className="font-semibold hover:underline">
              {phone}
            </a>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default function Page() {
  return <div>
    <Contact /> 
     <CopyrightBar />
  </div>;
}
