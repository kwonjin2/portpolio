import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen pt-[100px] flex flex-col items-center justify-center px-6 border-b border-gray-300"
    >
      <div className="relative w-25 h-25 md:w-30 md:h-30 lg:w-40 lg:h-40 2xl:w-70 2xl:h-70 rounded-full overflow-hidden ring-4 ring-slate-600">
        <Image src="/profile.jpeg" alt="profile" fill />
      </div>

      <div className="mt-8 text-[#1F2937] text-[25px] md:text-[30px] lg:text-[35px] 2xl:text-[50px] font-extrabold tracking-tight">
        최권진
      </div>

      <p className="mt-3 text-[15px] md:text-[20px] lg:text-[25px] 2xl:text-[40px] text-slate-400 text-center">
        안녕하세요. 재사용성과 성능을 고려해 React로 웹 서비스를 만들고, <br />
        사용자 경험을 고민하는 프론트엔드 개발자입니다.
      </p>
    </section>
  );
}
