import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Rolling Paper",
    slug: "rolling-paper",
    frontImage: "/rolling_front.png",
    backImage: "/rolling_back.png",
  },
  {
    title: "WineDooJan",
    slug: "winedoojan",
    frontImage: "/winedoojan_front.png",
    backImage: "/winedoojan_back.png",
  },
  {
    title: "Reser On Do",
    slug: "reser-on-do",
    frontImage: "/reser-on-do_front.png",
    backImage: "/reser-on-do_back.png",
  },
];

export default function ProjectList() {
  return (
    <section
      id="projects"
      className="min-h-screen mx-auto px-4 flex flex-col justify-center items-center border-b border-gray-300"
    >
      <h2 className="text-3xl 2xl:text-[50px] text-[#1F2937] font-bold mb-6 pt-[80px] lg:pt-[0px]">
        Projects
      </h2>
      <div className="flex flex-wrap justify-center gap-12">
        {projects.map((p) => (
          <ProjectCard
            key={p.slug}
            title={p.title}
            slug={p.slug}
            frontImage={p.frontImage}
            backImage={p.backImage}
          />
        ))}
      </div>
    </section>
  );
}
