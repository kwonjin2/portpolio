"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

const Intro = ({ onFinish }: { onFinish?: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish?.();
    }, 4000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <motion.section
      className="min-h-screen flex flex-col justify-center items-center text-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1 className="text-4xl md:text-6xl font-bold flex flex-col items-center space-y-2">
        <div className="relative w-72 h-72 flex items-center justify-center">
          <motion.div
            className="absolute inset-0 rounded-full p-[15px] shadow-[0_0_20px_rgba(255,255,255,0.6)]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.8, duration: 0.6 }}
            style={{
              background: "linear-gradient(135deg,#f9f9f9,#d1d1d1,#f9f9f9)",
              WebkitMask:
                "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
              pointerEvents: "none",
            }}
          />
          <motion.div
            className="relative z-10 flex flex-col items-center space-y-2"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.6,
                },
              },
            }}
          >
            <motion.div className="flex space-x-2">
              <motion.span
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="text-[#C41230]"
              >
                F
              </motion.span>
              <motion.span
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="text-[#C41230]"
              >
                E
              </motion.span>
            </motion.div>
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-2xl md:text-4xl text-[#1A3D8A]"
            >
              Kwonjin
            </motion.span>
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className="text-sm md:text-lg text-[#4C4C4C] italic"
            >
              It’s in the code.
            </motion.span>
          </motion.div>
        </div>
      </motion.h1>
    </motion.section>
  );
};

export default Intro;
