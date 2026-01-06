"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Team", href: "/team" },
  { name: "Courses", href: "/courses" },
    { name: "Pricing", href: "/pricing" },
    { name: "Plan", href: "/plan" },
    { name: "Clients", href: "/clients" },
  { name: "Career", href: "/career" },
  { name: "Contact", href: "/contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#2a2a2a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-40 h-12">
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/65d776f5-1e46-47f1-a887-8560bea4c4d8/image-1767537370934.png?width=400&height=400&resize=contain"
                  alt="Fam Infomedia"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[#e8e8e8] hover:text-[#9b1c1c] transition-colors duration-300 text-sm font-medium tracking-wide"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://wa.me/919655519922"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-[#1a3d2e] hover:bg-[#245a42] text-white rounded-lg transition-all duration-300"
            >
              <MessageCircle size={18} />
              <span className="text-sm font-medium">WhatsApp</span>
            </a>
            <Link
              href="/speak-us-now"
              className="flex items-center gap-2 px-4 py-2 bg-[#9b1c1c] hover:bg-[#b91c1c] text-white rounded-lg transition-all duration-300 shadow-lg shadow-red-900/20"
            >
              <Phone size={18} />
              <span className="text-sm font-medium">Speak Us Now</span>
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-[#e8e8e8] hover:text-[#9b1c1c] transition-colors"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#0a0a0a] border-t border-[#2a2a2a]"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-2 text-[#e8e8e8] hover:text-[#9b1c1c] transition-colors text-lg font-medium"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <a
                  href="https://wa.me/919655519922"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-[#1a3d2e] hover:bg-[#245a42] text-white rounded-lg transition-all duration-300"
                >
                  <MessageCircle size={18} />
                  <span className="font-medium">Message on WhatsApp</span>
                </a>
                <Link
                  href="/speak-us-now"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-[#9b1c1c] hover:bg-[#b91c1c] text-white rounded-lg transition-all duration-300"
                >
                  <Phone size={18} />
                  <span className="font-medium">Speak Us Now</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
