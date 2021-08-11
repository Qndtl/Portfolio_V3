import Image from "next/image"
import Link from "next/link"
import { list } from "postcss"

export default function StudyCard({ studyTitle, studyBody1, studyBody2, link1, link2, description }) {
  return (
    <div
      className="card p-4 bg-light d-flex flex-column mt-5"
      style={{ width: "450px", minHeight: "320px", zIndex: 1000 }}>
      <div className="d-flex align-items-center">
        {
          studyTitle === "GitHub" ?
            <Image src="/github.png" width={50} height={50} alt="github" /> :
            <Image src="/notion.png" width={48} height={48} alt="notion" />
        }
        <h1 className="ms-2 fw-bold">{studyTitle}</h1>
      </div>
      <Link href={link1}>
        <a className="my-2 text-primary">{studyTitle} Link &#10132;</a>
      </Link>
      <h6>{studyBody1}</h6>
      {
        studyBody2 && (
          <>
            <Link href={link2}>
              <a className="my-2 text-primary">{studyTitle} Link &#10132;</a>
            </Link>
            <h6>{studyBody2}</h6>
          </>
        )
      }
      <ul>
        {
          description.map((text, idx) => (
            <li key={idx} className="fw-normal my-1">{text}</li>
          ))
        }
      </ul>
    </div>
  )
}
