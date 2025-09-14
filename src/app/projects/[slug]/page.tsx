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
    retrospective?: string;
    extra?: { label: string; href: string }[];
  };
};

const data: Record<string, Project> = {
  "rolling-paper": {
    title: "Rolling",
    skills: ["HTML", "CSS", "JavaScript", "React", "ESLint", "Prettier"],
    description: {
      problem: `리액트 숙련도를 높이기 위해 팀원들이 서로 익명으로 편지를 주고받을 수 있는 서비스를 만들어보자는 아이디어에서 시작했습니다.
        \n 개발 도중 다음과 같은 문제에 직면했습니다.
        - 기존 카드를 넘길 때 기본 스크롤로 인한 부자연스러운 움직임
        - 로딩 구간에서의 레이아웃 쉬프트 및 사용자 피드백 부족
        - 여러 화면에서 공통으로 사용되는 UI 컴포넌트의 부재
        `,
      implementation: [
        "PC 환경에서는 transform으로 양방향 캐러셀을, 태블릿 / 모바일에서는 CSS scroll-snap 적용으로 스크롤 시 카드 단위로 자연스러운 정렬이 되도록 구현했습니다.",
        "로딩 시 스켈레톤으로 레이아웃을 잡아 CLS를 방지하고, 카드 단위에는 로딩 스피너를 추가해 사용자 피드백 제공하였습니다.",
        "ToggleButton / Dropdown / Modal / Options 등 공통 컴포넌트 설계 및 구현했습니다.",
      ],
      results: [
        "로딩 구간의 레이아웃 쉬프트 최소화로 사용성 향상",
        "공통 컴포넌트 도입으로 화면 추가/변경 시 개발·수정 비용 감소",
      ],
      learnings: [
        "리액트를 다루는 데 있어 컴포넌트 재사용성과 유지보수성의 중요성을 깨달았습니다.",
        "로딩 시 스켈레톤/스피너의 중요성을 체감했습니다.",
        "코드로 기능 구현 시, 왜 이렇게 구현해야하는지 고민이 필요한 이유를 깨달았습니다.",
      ],
      role: `공통 컴포넌트(ToggleButton, Dropdown, Modal, Options), 리스트 페이지(/list), 404 페이지(/404)
      양방향 캐러셀, CSS scroll-snap, 로딩 스피너 적용`,
    },
    hero: "/rolling-cover.png",
    links: {
      github: "https://github.com/cozy-ito/rolling-paper",
      deployed: "https://rolling-paper-five.vercel.app/",
      retrospective: "https://kwon-jin2-development.tistory.com/31",
    },
  },

  winedoojan: {
    title: "WineDooJan",
    skills: ["Next.js", "Tailwind CSS", "TypeScript"],
    description: {
      problem: `국내에 와인에 대한 리뷰를 쉽게 볼 수 있는 플랫폼이 부족하다는 점에 착안해, 
        와인을 처음 접하는 사람도 다른 사람들의 평가를 참고할 수 있는 서비스가 있으면 좋겠다는 아이디어에서 시작했습니다.
        \n 개발 도중 다음과 같은 문제에 직면했습니다.
        - 리뷰 작성/수정 후 최신 데이터가 보이지 않는 문제
        - 좋아요(하트) 클릭 시 서버 응답 지연으로 인한 문제 발생 우려
        - 리뷰가 많아질수록 탐색이 어려워지는 문제
        - API 예외 상황에 대한 대응 미흡
        `,
      implementation: [
        `리뷰 작성·수정 후 최신 데이터가 보이지 않는 문제가 발생했고, 
        문제 발생 원인을 Tanstack query를 사용하지 않고 useState만으로 상태관리를 하였기에 
        백엔드에는 반영됐지만 프론트에서는 즉시 반영되지 않고 새로고침을 해야지 데이터가 최신화 된다고 판단했습니다. 
        당시에는 전체 데이터 일관성을 서버 응답 기준으로 보장하는 것이 우선이라고 생각해, 간단하게 데이터를 한 번 더 요청하는 refetch 호출로 문제를 해결했습니다.`,
        "댓글에 좋아요 기능이 서버 응답 속도에 따라 반영되어서 UX가 좋지 않았습니다. 이를 해결하기 위해 좋아요(하트)에 Optimistic UI 적용을 해야겠다고 판단했고 Tanstack Query를 사용하지 않아 직접 상태 기반으로 구현했습니다.",
        "댓글이 많을 경우 원하는 댓글을 찾기 힘들어졌습니다. 이를 해결하기 위해 조건별 리뷰 정렬/필터(최신순/높은 별점/낮은 별점) 기능을 구현했습니다.",
        "API 요청이 실패할 경우 사용자 경험이 저하되는 문제를 해결하기 위해 React의 ErrorBoundary를 활용하여 예외 상황에 대한 방어적 UI를 제공했습니다.",
      ],
      results: [
        "에러 발생 시 ErrorBoundary로 부분 오류만 표시해 전체 서비스 중단 없이 안정성 유지",
        "리뷰 수가 많아질수록 탐색이 어려웠던 문제를 정렬·필터 기능으로 해결하여 탐색 효율 개선",
      ],
      learnings: [
        "당시엔 TanStack Query를 쓰지 않아 refetch를 직접 호출했는데, 돌이켜보면 부모 컴포넌트(WineDetail)가 리뷰 리스트를 상태로 갖고 있고 자식 모달에서 콜백으로 갱신했다면 useState만으로도 최신화를 보장할 수 있었습니다.",
        "Optimistic UI가 사용자 경험에 미치는 긍정적인 영향과 상태 기반으로 직접 구현해봤습니다.",
        "ErrorBoundary를 활용한 방어적 UI 제공의 중요하다는 것을 깨달았습니다.",
      ],
      role: `상세 페이지(/wines/:id)를 전담하여 리뷰 CRUD, 좋아요(Optimistic UI), 리뷰 정렬/필터, ErrorBoundary 기반 예외 처리, 로딩 스켈레톤 등을 구현했습니다.`,
    },
    hero: "/wine-cover.png",
    links: {
      github: "https://github.com/FE14-Part3-Team2/winedoojan",
      deployed: "https://winedoojan-project.vercel.app/",
      retrospective: "https://kwon-jin2-development.tistory.com/32",
    },
  },

  "reser-on-do": {
    title: "Reser On Do",
    skills: [
      "React",
      "TypeScript",
      "React Query",
      "React Hook Form",
      "Zod",
      "카카오 우편검색 SDK",
    ],
    description: {
      problem: `이미 여기어때, 야놀자 같은 대형 플랫폼이 존재하지만, 실제 서비스 맥락에서 이미지 최적화, 무한 스크롤, 폼 검증, 주소 검색 같은 실무적 문제들을 직접 경험, 해결해보기 위해 체험 플랫폼을 주제로 삼았습니다.
        \n 개발 도중 다음과 같은 문제에 직면했습니다.
        - 폼 검증 시 로직이 분산되어 상태관리와 유효성 검증을 동시에 처리하기 어려워지는 문제
        - 등록된 체험 데이터가 많을수록 데이터를 가져오는 시간이 길어지는 문제
        - 주소 입력 시 오타·잘못된 주소 입력으로 인한 문제 발생 우려
        - 체험 이미지 용량이 커서 페이지 로딩 속도가 느려지는 문제
        - 사용자가 입력 중인 상태에서 실수로 뒤로 가기/새로고침 시 입력 데이터 유실 문제
        `,
      implementation: [
        `폼 검증 시 상태와 유효성 로직이 컴포넌트 곳곳에 분산되어 유지보수가 어렵다고 판단했습니다. 
        기존에는 제어 컴포넌트 방식으로 입력값을 모두 useState로 관리했기 때문에, 입력할 때마다 리렌더링이 발생하고 상태·검증 로직이 뒤섞이는 문제가 있었습니다. 
        이를 해결하기 위해 비제어 컴포넌트 기반의 React Hook Form을 도입하여 최소 리렌더링 구조로 입력 상태를 일관되게 관리했고, 
        검증은 Zod 스키마를 통해 단일화하여 폼 검증의 안정성과 확장성을 높였습니다.`,
        `체험 데이터가 많아질수록 한 번에 모든 데이터를 불러오면 초기 로딩 시간이 길어지는 문제가 있었습니다. \
        이를 개선하기 위해 Intersection Observer API를 활용해 무한 스크롤을 구현하여, 
        필요한 시점에만 데이터를 점진적으로 불러오도록 하여 로딩 성능과 탐색 경험을 동시에 개선했습니다.`,
        `주소 입력 시 오타나 잘못된 주소 입력으로 인한 문제를 해결하기 위해 카카오 우편검색 SDK를 도입하여,
        사용자가 주소를 쉽게 검색하고 선택할 수 있도록 하여 정확성을 높였습니다.`,
        `체험 이미지 용량이 평균 2MB 이상으로 페이지 로딩 속도를 크게 저하시켰습니다. 
        이를 개선하기 위해 canvas 기반 resizeImage 함수를 구현하여 클라이언트에서 이미지를 리사이즈하고,
        WebP 포맷으로 변환해 용량을 줄여 LCP와 Speed Index를 크게 개선했습니다.`,
        `사용자가 입력 중인 상태에서 실수로 뒤로 가기/새로고침을 시도하면 입력 데이터가 유실되는 문제가 있었습니다. 
        이를 방지하기 위해 뒤로가기 이벤트를 감지하여 경고 모달을 띄우고, 사용자가 의도적으로 행동을 확인하도록 하여 
        데이터 유실로 인한 사용성 저하를 예방했습니다.`,
      ],
      results: [
        "이미지 평균 용량 3.2MB → 47.5KB, LCP 25s → 5.2s(80%개선), Speed Index 13.3s → 5.5s(59%개선)로 초기 로딩 체감 개선",
        "Intersection Observer 기반 무한 스크롤로 스크롤만으로 연속 탐색이 가능해지고, 초기 페이로드를 줄여 첫 진입 로딩 부담을 완화",
        "카카오 주소 검색 SDK로 주소 오입력 문제를 차단하여 입력 정확성 강화",
        "React Hook Form + Zod 도입으로 폼 검증 일관성과 안정성 확보, 유지보수성과 사용자 경험 개선",
        "뒤로가기 경고 모달로 입력 데이터 유실을 방지하여 사용자 편의성 향상",
      ],
      learnings: [
        "제어 컴포넌트 기반 상태관리의 한계를 체감하고, React Hook Form + Zod로 최소 리렌더링과 검증 단일화를 적용하면서 비제어 컴포넌트 설계의 장점을 학습했습니다.",
        "Intersection Observer를 단순 스크롤 탐색 개선뿐 아니라 초기 페이로드 축소와 성능 최적화 관점에서 활용할 수 있다는 점을 배웠습니다.",
        "Canvas 기반 이미지 리사이즈와 WebP 변환을 통해 브라우저 렌더링 성능과 LCP 개선에 직결되는 최적화 경험을 쌓았습니다.",
        "카카오 주소 검색 SDK와 뒤로가기 경고 모달 같은 예방적 UX 설계의 중요성을 배웠습니다.",
      ],
      role: `공통 컴포넌트(<a href="https://github.com/FE14-Part4-Team5/reser-on-do/wiki/Card" target="_blank" rel="noopener noreferrer">Card</a>, <a href="https://github.com/FE14-Part4-Team5/reser-on-do/wiki/StateBadge" target="_blank" rel="noopener noreferrer">StateBadge</a>, <a href="https://github.com/FE14-Part4-Team5/reser-on-do/wiki/SideNavigation" target="_blank" rel="noopener noreferrer">SideNavigation</a> 가이드)와 내 체험 관리(/my-experiences), 내 체험 등록(/add-experiences), 내 체험 수정(/edit-experiences/:id)를 담당했습니다.
Intersection Observer로 무한 스크롤, React Hook Form + Zod 기반 폼 검증, 카카오 주소 검색 API 연동, canvas 기반 <a href="https://github.com/FE14-Part4-Team5/reser-on-do/wiki/%EC%9D%B4%EB%AF%B8%EC%A7%80%20%ED%81%AC%EA%B8%B0%EB%A5%BC%20%EC%A4%84%EC%9D%B4%EA%B3%A0%20%EC%8B%B6%EC%96%B4%EC%9A%94" target="_blank" rel="noopener noreferrer">이미지 최적화(리사이즈 · WebP 변환)</a>을 구현했습니다.
`,
    },
    hero: "/reser-on-do-cover.png",
    links: {
      github: "https://github.com/FE14-Part4-Team5/reser-on-do",
      deployed: "https://team5-reser-on-do-cuq1.vercel.app/",
      retrospective: "https://kwon-jin2-development.tistory.com/33",
    },
  },
};
