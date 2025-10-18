// src/components/ContactBubbles.tsx

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquareText, Phone, X, MessageCircleCode, ShoppingCart   } from "lucide-react";
import Link from "next/link";
import {cn} from "../lib/utils";


export function ContactBubbles() {
  const [isOpen, setIsOpen] = useState(false);

  // Remplacez par vos numéros de téléphone
  const phoneNumber = "+0660600602"; // Format international
  const whatsappLink = `https://wa.me/${phoneNumber.replace('+', '')}`;
  const cartLink = "https://d2tvomu9ndhyfk.cloudfront.net";

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