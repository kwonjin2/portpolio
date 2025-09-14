import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Rolling Paper",
    slug: "rolling-paper",
    coverImage: "/rolling-cover.png",
  },
  {
    title: "WineDooJan",
    slug: "winedoojan",
    coverImage: "/wine-cover.png",
  },
  {
    title: "Reser On Do",
    slug: "reser-on-do",
    coverImage: "/reser-on-do-cover.png",
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 2xl:gap-10 justify-items-center ">
        {projects.map((p) => (
          <ProjectCard
            key={p.slug}
            title={p.title}
            slug={p.slug}
            coverImage={p.coverImage}
          />
        ))}
      </div>
    </section>
  );
}
