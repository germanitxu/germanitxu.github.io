import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-scroll";
import "./header.css";
import LanguageSwitch from "../LanguageSwitch/LanguageSwitch";

export function Header(props) {
  return (
    <Navbar expand="lg" className="header-navbar" fixed="top">
      <Container>
        <Navbar.Brand href="#">
          <h1 className="secondary">Germán Muñoz</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {props.headers.map((header, i) => (
              <Link
                className="header-link"
                key={`nav-link-${i}`}
                to={header.anchor}
                smooth={true}
                duration={100}
                delay={0}
                offset={-100}
                href={`#${header.anchor}`}
              >
                {header.name}
              </Link>
            ))}
            <LanguageSwitch />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
