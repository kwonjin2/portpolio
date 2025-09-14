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
          <h2 className="text-xl font-semibold">어떻게 구현했는가</h2>
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
          <h2 className="text-xl font-semibold">성과 (수치화)</h2>
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
      </section>
    </main>
  );
}

type Props = { params: Promise<{ slug: string }> };

type Project = {
  title: string;
  skills: string[];
  hero?: string;
  description: {
    problem: string;
    implementation: string[];
    results: string[];
    learnings: string[];
    role: string; // ✅ 내가 맡은 영역
  };
  links?: {
    github?: string;
    deployed?: string;
    extra?: { label: string; href: string }[];
  };
};

const data: Record<string, Project> = {
  "rolling-paper": {
    title: "Rolling",
    skills: ["HTML", "CSS", "JavaScript", "React", "ESLint", "Prettier"],
    description: {
      problem:
        "리액트 숙련도를 높이고 팀원들이 서로 익명으로 감사·응원의 메시지를 주고받을 수 있는 재미있는 서비스를 만들어보자는 아이디어에서 시작했습니다.\n개발 도중 다양한 디바이스 환경에서 캐러셀과 스크롤 UX가 끊기거나 어색하게 보이는 문제가 발생했습니다.",
      implementation: [
        "GPU 가속 기반 transform으로 부드러운 양방향 캐러셀 구현",
        "모바일에 최적화된 CSS scroll-snap 적용으로 카드 단위 자연스러운 정렬",
        "스켈레톤 UI와 SVG 로딩 스피너로 로딩 구간의 시각적 피드백 제공",
        "ToggleButton / Dropdown / Modal / Options 등 공통 컴포넌트 설계 및 구현",
      ],
      results: [
        "모바일 및 소형 화면에서 스크롤과 캐러셀 동작 안정성 개선",
        "로딩 구간의 레이아웃 쉬프트 최소화로 사용성 향상",
        "공통 컴포넌트 도입으로 화면 추가/변경 시 개발·수정 비용 감소",
      ],
      learnings: [
        "반응형 UI 설계와 렌더링 퍼포먼스 고려의 중요성",
        "재사용 가능한 컴포넌트 설계가 유지보수성에 미치는 영향",
        "로딩 전략(스켈레톤/스피너)이 사용자 인지에 미치는 효과",
      ],
      role: `공통 컴포넌트(ToggleButton, Dropdown, Modal, Options)와 리스트 페이지(/list)를 담당했습니다.
특히 양방향 캐러셀, CSS scroll-snap, 스켈레톤 UI/SVG 로딩 스피너를 직접 구현했습니다.`,
    },
    hero: "/rolling-cover.png",
    links: {
      github: "https://github.com/cozy-ito/rolling-paper",
      deployed: "https://rolling-paper-five.vercel.app/",
    },
  },
  winedoojan: {
    title: "WineDooJan",
    skills: ["Next.js", "Tailwind CSS", "Zustand", "TypeScript"],
    description: {
      problem:
        "와인 리뷰/평가 데이터를 빠르게 확인하고 상호작용해야 하지만, 리뷰 반영 지연과 좋아요(하트) 인터랙션의 응답성이 떨어질 수 있는 문제가 있었습니다.",
      implementation: [
        "와인 상세 페이지를 중심으로 세분화된 컴포넌트 구조 설계(상세 카드/리뷰 목록/평점 컴포넌트)",
        "좋아요(하트)에 Optimistic UI 적용(상태 기반)",
        "리뷰 작성·수정 후 최신 데이터가 보이지 않는 문제를 refetch 호출 구조로 해결",
        "조건별 리뷰 정렬/필터(최신순/높은 별점/낮은 별점) 제공",
        "ErrorBoundary로 API 예외 대응, Suspense 기반 로딩 스켈레톤 도입",
      ],
      results: [
        "리뷰 작성/수정/삭제/좋아요 기능의 반응성 및 안정성 확보",
        "에러 발생 시 사용자 경험 저하를 최소화하는 방어적 UI 제공",
        "필터/정렬로 탐색 효율 개선",
      ],
      learnings: [
        "상태 관리 전략(직접 구현 vs 라이브러리)의 선택 기준 정립",
        "Optimistic UI가 사용자 체감 속도에 미치는 영향",
        "발표/문서에서 기능 중심 vs 감성 중심 구성의 트레이드오프 인식",
      ],
      role: `상세 페이지(/wines/:id)를 전담하여 리뷰 CRUD, 좋아요(Optimistic UI), 리뷰 정렬/필터, ErrorBoundary 기반 예외 처리, Suspense 로딩 스켈레톤 등을 구현했습니다.`,
    },
    hero: "/wine-cover.png",
    links: {
      github: "https://github.com/FE14-Part3-Team2/winedoojan",
      deployed: "https://winedoojan-project.vercel.app/",
    },
  },
  "reser-on-do": {
    title: "Reser On Do",
    skills: [
      "React",
      "TypeScript",
      "React Query",
      "Zustand",
      "React Hook Form",
      "Zod",
      "카카오 우편검색 SDK",
    ],
    description: {
      problem:
        "대용량 이미지 업로드로 인해 페이지 로딩이 지연되고, 입력 중 브라우저 뒤로 가기 시 데이터 유실 가능성, 주소 입력 오타로 인한 사용성 저하 문제가 있었습니다.",
      implementation: [
        "canvas 기반 resizeImage 함수 구현으로 이미지 크기 리사이즈 후 .webp 변환(품질 0.7)",
        "beforeunload/route change 감지 시 경고 모달로 입력 데이터 유실 방지",
        "React Hook Form + Zod로 스키마 기반 폼 검증 및 최소 리렌더링 구조",
        "Intersection Observer API로 무한 스크롤 구현(탐색 성능 개선)",
        "Card(Main/MyExperience/Reservation), StateBadge, SideNavigation 등 공통 컴포넌트 설계",
        "카카오 주소 검색 SDK 연동으로 오타·잘못된 주소 입력 사전 방지",
      ],
      results: [
        "이미지 용량 3.2MB → 47.5KB",
        "LCP 25s → 5.2s (약 80% 개선)",
        "Speed Index 13.3s → 5.5s (약 59% 개선)",
        "입력 중 뒤로 가기 시 데이터 유실 방지로 사용성 개선",
      ],
      learnings: [
        "데이터 기반 성능 최적화(측정→원인 분석→해결)의 반복 사이클 확립",
        "예방적 UX 설계가 사용자 이탈을 줄이는 데 미치는 효과",
        "단일 책임 원칙(SRP)을 반영한 컴포넌트 분리가 확장성에 주는 이점",
      ],
      role: `공통 컴포넌트(<a href="https://github.com/FE14-Part4-Team5/reser-on-do/wiki/Card" target="_blank" rel="noopener noreferrer">Card</a>, <a href="https://github.com/FE14-Part4-Team5/reser-on-do/wiki/StateBadge" target="_blank" rel="noopener noreferrer">StateBadge</a>, <a href="https://github.com/FE14-Part4-Team5/reser-on-do/wiki/SideNavigation" target="_blank" rel="noopener noreferrer">SideNavigation</a> 가이드)와 내 체험 관리(/my-experiences), 내 체험 등록(/add-experiences), 내 체험 수정(/edit-experiences/:id)를 담당했습니다.
Intersection Observer로 무한 스크롤, React Hook Form + Zod 기반 폼 검증, 카카오 주소 검색 API 연동, canvas 기반 <a href="https://github.com/FE14-Part4-Team5/reser-on-do/wiki/%EC%9D%B4%EB%AF%B8%EC%A7%80%20%ED%81%AC%EA%B8%B0%EB%A5%BC%20%EC%A4%84%EC%9D%B4%EA%B3%A0%20%EC%8B%B6%EC%96%B4%EC%9A%94" target="_blank" rel="noopener noreferrer">이미지 최적화(리사이즈 · WebP 변환)</a>을 구현했습니다.
`,
    },
    hero: "/reser-on-do-cover.png",
    links: {
      github: "https://github.com/FE14-Part4-Team5/reser-on-do",
      deployed: "https://team5-reser-on-do-cuq1.vercel.app/",
    },
  },
};
