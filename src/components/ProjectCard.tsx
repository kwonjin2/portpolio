"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

type ProjectCardProps = {
  title: string;
  subtitle?: string;
  slug: string;
  coverImage: string;
};

export default function ProjectCard({
  title,
  subtitle = "Click to Reveal",
  slug,
  coverImage,
}: ProjectCardProps) {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    if (!flipped) {
      setFlipped(true);
      return;
    }

    window.open(`/projects/${slug}`, "_blank");
  };

  return (
    <motion.button
      onClick={handleClick}
      className="group relative w-[250px] h-[370px] 2xl:w-[300px] 2xl:h-[420px] rounded-2xl bg-[#1b2735] cursor-pointer
                 shadow-[0_8px_30px_rgba(0,0,0,0.35)] overflow-hidden
                 [perspective:1200px] border border-white/10"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200, damping: 18 }}
    >
      <div
        className={`absolute inset-0 [transform-style:preserve-3d] transition-transform duration-700`}
        style={{ transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
      >
        <div
          className="absolute inset-0 flex flex-col items-center justify-center p-6
                     bg-gradient-to-br from-white/6 via-white/4 to-white/10
                     rounded-2xl [backface-visibility:hidden]"
        >
          <div className="text-center">
            <h3 className="text-2xl font-extrabold text-white drop-shadow">
              {title}
            </h3>
            <p className="text-white/60 mt-2">{subtitle}</p>
          </div>
          <div
            className="absolute inset-0 pointer-events-none 
                          bg-gradient-to-br from-white/15 via-transparent to-white/5
                          opacity-70 group-hover:opacity-90 transition-opacity"
          />
        </div>

        <div
          className="absolute inset-0 rounded-2xl overflow-hidden [backface-visibility:hidden]"
          style={{ transform: "rotateY(180deg)" }}
        >
          <Image
            src={coverImage}
            alt={`${title} cover`}
            fill
            className="object-fill"
            priority={false}
          />

          <div
            className="absolute bottom-0 left-0 right-0 p-4
                          bg-gradient-to-t from-black/70 to-transparent"
          >
            <h4 className="text-white font-semibold">{title}</h4>
            <p className="text-white/60 text-sm">Click again to open detail</p>
          </div>

          <div
            className="absolute inset-0 rounded-2xl pointer-events-none 
                          ring-1 ring-white/20 group-hover:ring-white/40 transition-all"
          />
        </div>
      </div>
    </motion.button>
  );
}
