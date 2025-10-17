import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavbarComponent } from "@/Components/nav-bar";
import { CopyrightBar } from "@/Components/CopyrightBar";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AFood - Restaurant Authentique Marocain | Saveurs Traditionnelles",
  description: "Découvrez AFood, votre restaurant marocain authentique. Savourez nos plats traditionnels préparés avec des ingrédients frais et des recettes ancestrales. Commandez en ligne ou visitez-nous.",
  keywords: "restaurant marocain, cuisine traditionnelle, plats authentiques, AFood, restaurant halal, couscous, tagine, pastilla",
  openGraph: {
    title: "AFood - Restaurant Authentique Marocain",
    description: "Découvrez nos délicieux plats marocains traditionnels préparés avec passion",
    type: "website",
    locale: "fr_FR",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AFood - Restaurant Marocain Authentique",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AFood - Restaurant Authentique Marocain",
    description: "Découvrez nos délicieux plats marocains traditionnels préparés avec passion",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/logo.png", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavbarComponent >
          {children}
        </NavbarComponent> 

      </body>
    </html>
  );
}

