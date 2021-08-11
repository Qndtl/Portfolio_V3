import { Calendar, Email, Location, Pencil, Phone, User } from "../components/Icons";
import AboutCard from "./AboutCard";

export default function About({ aboutRef }) {
  return (
    <section>
      <div className="py-5 fw-bold mb-0 d-flex flex-column align-items-center" ref={aboutRef}>
        <h1 className="mb-5 border-bottom border-secondary border-2 fw-bold lh-lg">About Me</h1>
        <div className="container-lg d-flex justify-content-evenly align-items-center flex-wrap">
          <AboutCard Icon={User} title="이름" body="조현덕" />
          <AboutCard Icon={Calendar} title="생년월일" body="95.07.03" />
          <AboutCard Icon={Location} title="주소지" body="세종시 나성동" />
          <AboutCard Icon={Phone} title="연락처" body="010-2901-1610" />
          <AboutCard Icon={Email} title="이메일" body="johd321@naver.com" />
          <AboutCard Icon={Pencil} title="학력" body="한국기술교육대학교" body2="&#40;컴퓨터공학부&#41;" />
        </div>
      </div>
    </section>
  )
}
