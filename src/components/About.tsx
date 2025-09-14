import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center px-6 border-b border-gray-300"
    >
      <motion.div
        className="relative w-[263px] h-[368px]"
        initial={{ rotateY: 90, opacity: 0 }}
        animate={{ rotateY: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Image src="/kwonjin-card.png" alt="profile" fill />
      </motion.div>

      <p className="mt-3 text-[15px] md:text-[20px] lg:text-[25px] 2xl:text-[40px] text-slate-400 text-center">
        안녕하세요. 재사용성과 성능을 고려해 React로 웹 서비스를 만들고, <br />
        사용자 경험을 고민하는 프론트엔드 개발자입니다.
      </p>
    </section>
  );
}
