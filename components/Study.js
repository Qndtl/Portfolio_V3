import StudyCard from "./StudyCard";

export default function Skill({ studyRef }) {
  return (
    <section>
      <div
        className="py-5 fw-bold mb-0 d-flex flex-column align-items-center bg-dark"
        ref={studyRef}
        style={{ minHeight: "30vh" }}>
        <h1 className="border-bottom border-light border-2 fw-bold lh-lg text-light">Study</h1>
        <div className="container-lg d-flex justify-content-evenly flex-wrap">
          <StudyCard
            title="GitHub"
            body1="배포용 코드 저장소"
            body2="개인 공부용 코드 저장소"
            link1="https://github.com/Qndtl"
            link2="https://github.com/hyunduk-jo"
            description={["개인 프로젝트 배포한 코드", "튜토리얼등 연습을 위한 코드"]} />
          <StudyCard
            title="Notion"
            body1="공부 기록을 위한 메모"
            link1="https://crystalline-timbale-606.notion.site/Dashboard-8501f0d9f64d470c9cc19f917bf4a982"
            description={["프론트엔드 관련 내용", "백엔드 관련 내용", "프로그래밍 언어 관련 내용", "AWS 관련 내용", "블록체인 관련 내용"]} />
        </div>
      </div>
    </section>
  )
}
