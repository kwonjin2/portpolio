import {
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiReactquery,
  SiTailwindcss,
  SiVite,
  SiReacthookform,
  SiZod,
} from "react-icons/si";

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen mx-auto px-4 py-12 flex flex-col justify-center items-center border-b border-gray-300"
    >
      <h2 className="text-3xl text-[#1F2937] font-bold mb-10 2xl:text-[50px]">
        Skills
      </h2>

      <div className="flex flex-col gap-[30px] space-y-8 w-full max-w-4xl">
        <div className="flex flex-col gap-3">
          <h3 className="text-xl text-[#1F2937] font-semibold mb-4">
            💻 Language
          </h3>
          <div className="flex flex-wrap gap-3">
            <span className="flex items-center gap-2 px-3 py-1 rounded-md bg-gray-100 text-gray-800 text-[14px] md:text-[18px] lg:text-[22px] 2xl:text-[26px] font-medium;">
              <SiTypescript className="text-[16px] md:text-[20px] lg:text-[26px] 2xl:text-[32px]" />
              TypeScript
            </span>
            <span className="flex items-center gap-2 px-3 py-1 rounded-md bg-gray-100 text-gray-800 text-[14px] md:text-[18px] lg:text-[22px] 2xl:text-[26px] font-medium;">
              <SiJavascript className="text-[16px] md:text-[20px] lg:text-[26px] 2xl:text-[32px]" />
              JavaScript
            </span>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-[#1F2937]">
            🎨 Frontend
          </h3>
          <div className="flex flex-wrap gap-3">
            <span className="flex items-center gap-2 px-3 py-1 rounded-md bg-gray-100 text-gray-800 text-[14px] md:text-[18px] lg:text-[22px] 2xl:text-[26px] font-medium;">
              <SiNextdotjs className="text-[16px] md:text-[20px] lg:text-[26px] 2xl:text-[32px]" />
              Next.js / React
            </span>
            <span className="flex items-center gap-2 px-3 py-1 rounded-md bg-gray-100 text-gray-800 text-[14px] md:text-[18px] lg:text-[22px] 2xl:text-[26px] font-medium;">
              Zustand
            </span>
            <span className="flex items-center gap-2 px-3 py-1 rounded-md bg-gray-100 text-gray-800 text-[14px] md:text-[18px] lg:text-[22px] 2xl:text-[26px] font-medium;">
              <SiReactquery className="text-[16px] md:text-[20px] lg:text-[26px] 2xl:text-[32px]" />
              React Query
            </span>
            <span className="flex items-center gap-2 px-3 py-1 rounded-md bg-gray-100 text-gray-800 text-[14px] md:text-[18px] lg:text-[22px] 2xl:text-[26px] font-medium;">
              <SiReacthookform className="text-[16px] md:text-[20px] lg:text-[26px] 2xl:text-[32px]" />
              React Hook Form
            </span>
            <span className="flex items-center gap-2 px-3 py-1 rounded-md bg-gray-100 text-gray-800 text-[14px] md:text-[18px] lg:text-[22px] 2xl:text-[26px] font-medium;">
              <SiZod className="text-[16px] md:text-[20px] lg:text-[26px] 2xl:text-[32px]" />
              Zod
            </span>
            <span className="flex items-center gap-2 px-3 py-1 rounded-md bg-gray-100 text-gray-800 text-[14px] md:text-[18px] lg:text-[22px] 2xl:text-[26px] font-medium;">
              <SiTailwindcss className="text-[16px] md:text-[20px] lg:text-[26px] 2xl:text-[32px]" />
              Tailwind CSS
            </span>
            <span className="flex items-center gap-2 px-3 py-1 rounded-md bg-gray-100 text-gray-800 text-[14px] md:text-[18px] lg:text-[22px] 2xl:text-[26px] font-medium;">
              <SiVite className="text-[16px] md:text-[20px] lg:text-[26px] 2xl:text-[32px]" />
              Vite
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
