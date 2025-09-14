import { data } from "@/data/projects";

export default async function ProjectDetail({ params }: Props) {
  const { slug } = await params;
  const project = data[slug];

  if (!project) {
    return <div className="p-8 text-white">Not Found</div>;
  }

  return (
    <main className="max-w-4xl mx-auto px-4 py-12 text-neutral-900">
      <h1 className="text-3xl md:text-4xl font-extrabold">{project.title}</h1>

      {project.hero && (
        <img
          src={project.hero}
          alt={`${project.title} hero`}
          className="mt-6 w-full rounded-lg border border-black/10"
        />
      )}

      {project.skills?.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2">
          {project.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-black/10 px-3 py-1 text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      )}

      {project.links && (
        <div className="mt-6 flex flex-wrap gap-4">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              GitHub
            </a>
          )}
          {project.links.deployed && (
            <a
              href={project.links.deployed}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Deployed Site
            </a>
          )}
        </div>
      )}

      {(slug === "winedoojan" || slug === "reser-on-do") && (
        <div className="mt-6 p-4 bg-gray-100 rounded">
          <h2>테스트 계정</h2>
          <p>ID: ckj@naver.com</p>
          <p>Password: 11111111</p>
        </div>
      )}

      <section className="mt-10 space-y-6">
        <div>
          <h2 className="text-xl font-semibold">문제 상황</h2>
          <p className="mt-2 leading-7 whitespace-pre-line">
            {project.description.problem}
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">
            문제 해결을 위해 어떤 Action을 취했는가
          </h2>
          <ul className="mt-2 list-disc pl-6 leading-7">
            {project.description.implementation.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold">내 역할</h2>
          {slug === "reser-on-do" ? (
            <div
              className="mt-2 leading-7 whitespace-pre-line [&_a]:text-blue-600 [&_a]:underline"
              dangerouslySetInnerHTML={{ __html: project.description.role }}
            />
          ) : (
            <div
              className="mt-2 leading-7 whitespace-pre-line"
              dangerouslySetInnerHTML={{ __html: project.description.role }}
            />
          )}
        </div>

        <div>
          <h2 className="text-xl font-semibold">성과</h2>
          <ul
            className={`mt-2 list-disc pl-6 leading-7 ${
              slug === "reser-on-do"
                ? "[&_a]:text-blue-600 [&_a]:underline"
                : ""
            }`}
          >
            {project.description.results.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold">배운 점</h2>
          <ul className="mt-2 list-disc pl-6 leading-7">
            {project.description.learnings.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
        {project.links?.retrospective && (
          <div>
            <h2 className="text-xl font-semibold">회고</h2>
            <a
              href={project.links.retrospective}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block
            text-blue-600 underline"
            >
              회고 글 보러가기
            </a>
          </div>
        )}
      </section>
    </main>
  );
}

type Props = { params: Promise<{ slug: string }> };
