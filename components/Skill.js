import SkillCard from "./SkillCard";

export default function Skill({ skillRef }) {
  return (
    <section>
      <div
        className="py-5 fw-bold mb-0 d-flex flex-column align-items-center bg-warning"
        ref={skillRef}
        style={{ minHeight: "30vh" }}>
        <h1 className="mb-5 border-bottom border-secondary border-2 fw-bold lh-lg">Skills</h1>
        <div className="container-lg d-flex flex-wrap justify-content-evenly">
          <SkillCard
            title="Front-end"
            skills={["html", "css", "sass", "react", "redux", "apollo", "bootstrap"]} />
          <SkillCard
            title="Back-end"
            skills={["javascript", "postgresql", "prisma", "apollo", "graphql"]} />
          <SkillCard
            title="Deployment"
            skills={["aws", "netlify", "heroku", "vercel"]} />
        </div>
      </div>
    </section>
  )
}
