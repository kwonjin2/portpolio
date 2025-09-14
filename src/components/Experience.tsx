export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen mx-auto px-4 py-12 flex flex-col justify-center items-center border-b border-gray-300"
    >
      <h2 className="text-3xl font-bold mb-10 text-[#1F2937] pt-[30px] md:pt-[40px] lg:pt-[0px] 2xl:text-4xl">
        Experience
      </h2>

      <div className="space-y-1 w-full max-w-3xl flex flex-col gap-[10px] md:gap-[20px] lg:gap-[40px]">
        <div>
          <h3 className="text-xl font-semibold text-[#1F2937] 2xl:text-2xl">
            코드잇 프론트엔드 엔지니어 과정
          </h3>
          <p className="text-gray-600 2xl:text-2xl">Frontend Trainee</p>
          <p className="text-gray-500 text-sm 2xl:text-2xl">
            2024.12.30 – 2025.06.26
          </p>
          <ul className="list-disc list-inside mt-3 text-gray-700 space-y-1 2xl:text-2xl">
            <li>React, Next.js 기반의 웹 서비스 개발 역량 습득</li>
            <li>컴포넌트 재사용성, 성능 최적화, UI/UX 설계 경험</li>
            <li>Git/GitHub 협업, 배포 경험</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-[#1F2937] 2xl:text-2xl">
            US:Code 의성
          </h3>
          <p className="text-gray-600 2xl:text-2xl">Frontend Developer</p>
          <p className="text-gray-500 text-sm 2xl:text-2xl">
            2025.08.18 – 2025.08.29
          </p>
          <ul className="list-disc list-inside mt-3 text-gray-700 space-y-1 2xl:text-2xl">
            <li>의성 “2주 살기” 프로그램 참여, 팀 단위 바이브 코딩 진행</li>
            <li>지역·전국 단위 문제 해결을 위한 서비스 MVP 설계 및 구현</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-[#1F2937] 2xl:text-2xl">
            Algorithm Study
          </h3>
          <p className="text-gray-600 2xl:text-2xl">Frontend Developer</p>
          <p className="text-gray-500 text-sm 2xl:text-2xl">2025.09.01 ~</p>
          <ul className="list-disc list-inside mt-3 text-gray-700 space-y-1 2xl:text-2xl">
            <li>Programmers 중심으로 알고리즘 문제 풀이</li>
            <li>
              soving.md 파일로 풀이 과정(접근법, 복잡도, 대안) 체계적으로 기록
            </li>
            <li>GitHub에 학습 히스토리를 관리하며 꾸준한 학습 습관 형성</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
