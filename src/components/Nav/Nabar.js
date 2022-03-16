import { useState } from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
} from "react-bootstrap";
import "./Navbar.css";

export default function Nabar() {
  const [show, setShow] = useState(false);

  function handleshow(e) {
    e.preventDefault();
    if (show === false) {
      setShow(true);
    } else {
      setShow(false);
    }
  }
  return (
    <Navbar sticky="top" bg="light" expand="lg" className={`navbar py-0`}>
      <Container>
        <div className="logo">
          <a href="/" className="logo-style">
            Sports
          </a>
        </div>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto m-5 my-2 my-lg-0" navbarScroll>
            <Nav.Link href="/">Home</Nav.Link>

            <Nav.Link href="/appointment">Appointment</Nav.Link>

            <NavDropdown title="Other" id="navbarScrollingDropdown">
              <Nav.Link href="/">Actiion</Nav.Link>

              <Nav.Link href="/appointment">Appointment</Nav.Link>

              <Nav.Link href="/contact">Contact</Nav.Link>
            </NavDropdown>

            <Nav.Link href="/" disabled>
              Actiion
            </Nav.Link>

            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
          <Form className="d-flex nav-form justify-content-center">
            {show ? (
              <FormControl
                type="search"
                id="formInput"
                placeholder="Search Doctor"
                className="me-2 form-control-navbar"
                aria-label="Search"
              />
            ) : null}

            {show ? (
              <button
                id="formInput"
                className="btn btn-outline-info me-2 mt-1"
                type="submit"
              >
                Search
              </button>
            ) : null}

            <i
              className={`fas fa-search me-4 ${show ? "pt-3" : ""} pt-2 pe-2`}
              onClick={(e) => handleshow(e)}
            ></i>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
