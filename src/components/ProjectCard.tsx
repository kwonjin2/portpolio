"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

type ProjectCardProps = {
  title: string;
  slug: string;
  frontImage: string;
  backImage: string;
};

export default function ProjectCard({
  title,
  slug,
  frontImage,
  backImage,
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
      className="group relative w-[250px] h-[370px] 2xl:w-[300px] 2xl:h-[420px] rounded-2xl cursor-pointer"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200, damping: 18 }}
    >
      <div
        className={`absolute inset-0 [transform-style:preserve-3d] transition-transform duration-700`}
        style={{ transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
      >
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden [backface-visibility:hidden]"
          style={{ transform: "rotateY(0deg)" }}
        >
          <Image
            src={backImage}
            alt={`${title} back`}
            fill
            className="object-fill rounded-2xl"
            priority={false}
          />
        </div>

        <div
          className="absolute inset-0 rounded-2xl overflow-hidden [backface-visibility:hidden]"
          style={{ transform: "rotateY(180deg)" }}
        >
          <Image
            src={frontImage}
            alt={`${title} front`}
            fill
            className="object-fill rounded-2xl"
            priority={false}
          />
        </div>
      </div>
    </motion.button>
  );
}
