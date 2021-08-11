import { Container, Nav, Navbar } from "react-bootstrap";

export default function Header({ aboutRef, skillRef, studyRef, projectRef }) {
  const onClick = (el) => {
    if (el === "about") {
      window.scrollTo(0, aboutRef.current.offsetTop - 60);
    } else if (el === "skill") {
      window.scrollTo(0, skillRef.current.offsetTop - 60);
    } else if (el === "study") {
      window.scrollTo(0, studyRef.current.offsetTop - 60);
    } else if (el === "project") {
      window.scrollTo(0, projectRef.current.offsetTop - 60);
    } else {
      window.scrollTo(0, 0);
    }
  }
  return (
    <Navbar
      bg="light"
      expand="lg"
      style={{ position: "sticky", top: "0px", zIndex: 1020 }}>
      <Container>
        <Navbar.Brand
          className="fw-bold fs-3"
          onClick={() => onClick("home")}
          style={{ cursor: "pointer" }}>DUKFOLIO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              className="fw-bold"
              style={{ cursor: "pointer" }}
              onClick={() => onClick("about")}>About</Nav.Link>
            <Nav.Link
              className="fw-bold"
              style={{ cursor: "pointer" }}
              onClick={() => onClick("study")}>Study</Nav.Link>
            <Nav.Link
              className="fw-bold"
              style={{ cursor: "pointer" }}
              onClick={() => onClick("skill")}>Skill</Nav.Link>
            <Nav.Link
              className="fw-bold"
              style={{ cursor: "pointer" }}
              onClick={() => onClick("project")}>Project</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
