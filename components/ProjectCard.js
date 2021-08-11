import { Carousel } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";

export default function ProjectCard({ title, images, description, datas }) {
  return (
    <div className="m-3 container d-flex flex-column align-items-center bg-light" style={{ minHeight: "500px", borderRadius: "20px" }}>
      <h1 className="my-5 fw-bold">{title}</h1>
      <div className="mb-5" style={{ width: "85%" }}>
        <Carousel fade>
          {
            images.map((image, idx) => (
              <Carousel.Item interval={1500} key={idx}>
                <Image
                  className="d-block w-100"
                  src={image}
                  alt="First slide"
                  width={1000}
                  height={500}
                  objectFit="contain"
                />
              </Carousel.Item>
            ))
          }
        </Carousel>
        <div className="mt-4">
          {
            description.split('\n').map((text, idx) => <p key={idx}>{text}</p>)
          }
        </div>
        <hr />
        {
          datas.map((data, idx) => (
            <div className="m-1 d-flex justify-content-start align-items-start" style={{ width: "100%" }} key={idx}>
              <div style={{ minWidth: "110px" }}>
                <span>&#10004; {Object.keys(data)}</span>
              </div>
              <div style={{ maxWidth: "100%" }}>
                {
                  idx === 1 || idx === 2 ? (
                    <Link href={data[Object.keys(data)]}>
                      <a className="text-primary">방문하기</a>
                    </Link>
                  ) : (
                    <p className="m-0">{data[Object.keys(data)]}</p>
                  )
                }
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
