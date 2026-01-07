import Image from "next/image";
import { motion } from "framer-motion";

export default function About({ isVisible }: { isVisible: boolean }) {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center px-6 border-b border-gray-300"
    >
      <motion.div
        className="relative w-[180px] h-[250px] md:w-[220px] md:h-[310px] lg:w-[263px] lg:h-[368px] xl:w-[300px] xl:h-[420px] 2xl:w-[360px] 2xl:h-[500px]"
        initial={{ rotateY: 90, opacity: 0 }}
        animate={
          isVisible ? { rotateY: 0, opacity: 1 } : { rotateY: 90, opacity: 0 }
        }
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="rounded-4xl">
          <Image
            src="/profile.jpeg"
            alt="profile"
            fill
            sizes="(max-width: 768px) 180px,
                 (max-width: 1024px) 220px,
                 (max-width: 1280px) 263px,
                 (max-width: 1536px) 300px,
                 360px"
            className="object-contain"
            priority
          />
        </div>
      </motion.div>

      <p className="mt-3 text-[15px] md:text-[20px] lg:text-[25px] 2xl:text-[40px] text-slate-400 text-center">
        안녕하세요. 재사용성과 성능을 고려해 React로 웹 서비스를 만들고, <br />
        사용자 경험을 고민하는 프론트엔드 개발자입니다.
      </p>
    </section>
  );
}
