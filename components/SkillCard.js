import { Apollo, AWS, Bootstrap, Css, Graphql, Heroku, Html, Javascript, Netlify, Postgresql, Prisma, ReactIcon, Redux, Sass, Vercel } from "./Icons";

export default function SkillCard({ studyTitle, skills }) {
  return (
    <div className="card p-3 m-3" style={{ width: "250px", minHeight: "100px" }}>
      <h2 className="mb-0 text-danger">{studyTitle}</h2>
      <hr />
      <div className="d-flex flex-wrap justify-content-evenly align-items-center">
        {
          skills.includes("html") && <Html />
        }
        {
          skills.includes("css") && <Css />
        }
        {
          skills.includes("sass") && <Sass />
        }
        {
          skills.includes("react") && <ReactIcon />
        }
        {
          skills.includes("redux") && <Redux />
        }
        {
          skills.includes("javascript") && <Javascript />
        }
        {
          skills.includes("apollo") && <Apollo />
        }
        {
          skills.includes("bootstrap") && <Bootstrap />
        }

        {
          skills.includes("postgresql") && <Postgresql />
        }
        {
          skills.includes("prisma") && <Prisma />
        }
        {
          skills.includes("graphql") && <Graphql />
        }
        {
          skills.includes("aws") && <AWS />
        }
        {
          skills.includes("netlify") && <Netlify />
        }
        {
          skills.includes("heroku") && <Heroku />
        }
        {
          skills.includes("vercel") && <Vercel />
        }
      </div>
    </div>
  )
}
