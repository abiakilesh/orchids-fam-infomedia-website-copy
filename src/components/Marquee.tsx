"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const marqueeItems = [
  "1 month intensive",
  "80+ hours of content",
  "Weeks Extended suppy",
  "Blended offline & online Mode",
  "End -to- End Training",
  "Hands -on Learning",
  "21 Modules"
];

const logoUrl = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/65d776f5-1e46-47f1-a887-8560bea4c4d8/image-1767537370934.png?width=200&height=200&resize=contain";

export const Marquee = () => {
  return (
    <div className="relative flex overflow-x-hidden border-y border-[#2a2a2a] bg-[#0d0d0d] py-6">
          <motion.div
            animate={{
              x: [0, -1500],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25, // Slightly faster
                ease: "linear",
              },
            }}
            className="flex whitespace-nowrap will-change-transform transform-gpu"
          >
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex gap-12 px-6 items-center">
                {marqueeItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-6"
                  >
                    <div className="relative w-12 h-6 grayscale hover:grayscale-0 transition-all duration-300 transform-gpu">
                      <Image 
                        src={logoUrl}
                        alt="Logo"
                        fill
                        className="object-contain"
                        sizes="48px"
                        priority={i === 0 && index < 3}
                      />
                    </div>
                    <span className="text-lg font-medium text-[#e8e8e8] flex items-center gap-4">
                      {item}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#9b1c1c]" />
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
    </div>
  );
};
