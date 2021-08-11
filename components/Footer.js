import Link from "next/link";
import { Button, Popover, OverlayTrigger } from "react-bootstrap";
import { GitHubIcon, NotionIcon } from "./Icons";

export default function Footer() {
  const popover = (
    <Popover id="popover-basic">
      <Popover.Body>
        <Link href="https://github.com/Qndtl">
          <a className="fw-bold">
            {"Deploy "}|
          </a>
        </Link>
        <Link href="https://github.com/hyunduk-jo">
          <a className="fw-bold">
            {" Study"}
          </a>
        </Link>
      </Popover.Body>
    </Popover>
  )
  return (
    <section className="bg-dark d-flex flex-column justify-content-center" style={{ minHeight: "200px" }}>
      <div className="d-flex justify-content-center align-items-center" style={{ width: "100%" }}>
        <OverlayTrigger trigger="click" placement="top" overlay={popover}>
          <Button variant="dark" style={{ outline: "none" }}>
            <div style={{ fill: "white" }}>
              <GitHubIcon size={36} />
            </div>
          </Button>
        </OverlayTrigger>
        <Link href="https://crystalline-timbale-606.notion.site/Dashboard-8501f0d9f64d470c9cc19f917bf4a982">
          <a className="m-2" style={{ fill: "white" }}>
            <NotionIcon size={44} />
          </a>
        </Link>
      </div>
      <p className="text-light text-center">&copy; Jo Hyun Duk. All rights reserved.</p>
    </section>
  )
}
