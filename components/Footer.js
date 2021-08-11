import Link from "next/link";
import { GitHubIcon, NotionIcon } from "./Icons";

export default function Footer() {
  return (
    <section className="bg-dark d-flex justify-content-center align-items-center" style={{ minHeight: "200px" }}>
      <Link href="https://github.com/Qndtl">
        <a className="m-2" style={{ fill: "white" }}>
          <GitHubIcon size={36} />
        </a>
      </Link>
      <Link href="https://crystalline-timbale-606.notion.site/Dashboard-8501f0d9f64d470c9cc19f917bf4a982">
        <a className="m-2" style={{ fill: "white" }}>
          <NotionIcon size={42} />
        </a>
      </Link>
    </section>
  )
}
