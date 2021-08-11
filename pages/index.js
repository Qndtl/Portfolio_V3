import { useRef } from "react";
import About from "../components/About";
import BackImage from "../components/BackImage";
import Header from "../components/Header";
import Project from "../components/Project";
import Skill from "../components/Skill";
import Study from "../components/Study";
import Footer from "../components/Footer";

export default function Home() {
  const aboutRef = useRef();
  const skillRef = useRef();
  const studyRef = useRef();
  const projectRef = useRef();

  return (
    <>
      <Header aboutRef={aboutRef} skillRef={skillRef} studyRef={studyRef} projectRef={projectRef} />
      <BackImage aboutRef={aboutRef} />
      <About aboutRef={aboutRef} />
      <Study studyRef={studyRef} />
      <Skill skillRef={skillRef} />
      <Project projectRef={projectRef} />
      <Footer />
    </>
  )
}
