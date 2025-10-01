// src/components/ContactBubbles.tsx

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquareText, Phone, X, MessageCircleCode, ShoppingCart   } from "lucide-react";
import Link from "next/link";
import {cn} from "../lib/utils";

// L'icône WhatsApp (copiée en SVG pour ne pas ajouter de dépendance)
const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    height="24"
    width="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M16.75 13.96c.25.13.43.2.5.25.13.06.16.19.13.38-.03.19-.25.44-.5.69-.25.25-.5.44-.75.56-.25.13-.5.19-.81.13-.31-.06-1.06-.31-2-1.06-.94-.75-1.56-1.56-1.94-2.19-.38-.63-.69-1.31-.69-2s.31-1.19.56-1.44c.25-.25.56-.31.81-.31s.44.06.63.13c.19.06.31.13.44.38.13.25.19.56.25.88.06.31.06.63.03.81-.03.19-.06.31-.13.44-.06.13-.13.19-.25.25-.13.06-.25.06-.38 0-.13-.06-.25-.13-.31-.19-.06-.06-.13-.13-.25-.31-.13-.19-.19-.31-.25-.38-.06-.06-.13-.06-.19-.03s-.13.13-.06.25c.06.13.25.38.5.63.25.25.56.5.94.75.38.25.69.44.94.56zM12 2a10 10 0 1 0 10 10 10 10 0 0 0-10-10zM12 21.19A9.19 9.19 0 1 1 21.19 12 9.19 9.19 0 0 1 12 21.19z" />
  </svg>
);

export function ContactBubbles() {
  const [isOpen, setIsOpen] = useState(false);

  // Remplacez par vos numéros de téléphone
  const phoneNumber = "+212600000000"; // Format international
  const whatsappLink = `https://wa.me/${phoneNumber.replace('+', '')}`;
  const cartLink = "https://d2tvomu9ndhyfk.cloudfront.net/";

  const bubbles = [
    {
      href: `tel:${phoneNumber}`,
      icon: <Phone size={24} />,
      label: "Appel",
      bgColor: "bg-green-500",
    },
    {
      href: whatsappLink,
      icon: <MessageCircleCode size={24} />,
      label: "WhatsApp",
      bgColor: "bg-emerald-500",
    },
    {
      href: cartLink,
      icon: <ShoppingCart size={24} />,
      label: "Commander",
      bgColor: "bg-blue-500",
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* --- Bulles Secondaires (Téléphone et WhatsApp) --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0, transition: { staggerChildren: 0.1 } }}
            exit={{ opacity: 0, y: 10 }}
            className="flex flex-col items-end gap-3 mb-4"
          >
            {bubbles.map((bubble) => (
              <motion.div
                key={bubble.label}
                initial={{ opacity: 0, scale: 0.5, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.5, x: 20 }}
                className="flex items-center gap-3"
              >
                <span className="rounded-md bg-neutral-900/80 px-3 py-1 text-sm text-white shadow-lg backdrop-blur-sm">
                  {bubble.label}
                </span>
                <Link
                  href={bubble.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "flex h-14 w-14 items-center justify-center rounded-full text-white shadow-xl transition-transform duration-300 hover:scale-110",
                    bubble.bgColor
                  )}
                >
                  {bubble.icon}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- Bulle Principale --- */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-16 w-16 items-center justify-center rounded-full bg-yellow-400 text-white shadow-2xl transition-transform duration-300 hover:scale-110"
        whileTap={{ scale: 0.9 }}
        aria-label="Ouvrir les options de contact"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={isOpen ? "x" : "message"}
            initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
            transition={{ duration: 0.2 }}
          >
            {isOpen ? <X size={32} /> : <MessageSquareText size={32} />}
          </motion.div>
        </AnimatePresence>
      </motion.button>
    </div>
  );
}