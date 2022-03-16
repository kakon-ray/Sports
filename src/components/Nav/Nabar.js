/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
} from "react-bootstrap";
import { Link, useHistory, useLocation } from "react-router-dom";

import SearchResult from "../SearchResult/SearchResult";
import "./Navbar.css";

export default function Nabar(props) {
  const [show, setShow] = useState(false);
  const [searchValue, setInputValue] = useState("");

  function handleshow(e) {
    e.preventDefault();
    if (show === false) {
      setShow(true);
    } else {
      setShow(false);
    }
  }

  // Handle navbar input value
  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const history = useHistory();
  const location = useLocation();
  const handleSearch = (e) => {
    e.preventDefault();

    history.push(`/search`);
    if (location.pathname === "/search") {
      props.func(searchValue);
    }
  };
  return (
    <>
      <Navbar sticky="top" bg="light" expand="lg" className={`navbar py-0`}>
        <Container>
          <div className="logo">
            <Link
              to="/"
              style={{ textDecoration: "none" }}
              className="logo-style"
            >
              Sports
            </Link>
          </div>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto m-5 my-2 my-lg-0" navbarScroll>
              <Link to="/" style={{ textDecoration: "none" }}>
                <a className="nav-link">Home</a>
              </Link>
              <Link to="/allsports" style={{ textDecoration: "none" }}>
                <a className="nav-link"> All Sports</a>
              </Link>

              <NavDropdown title="Other" id="navbarScrollingDropdown">
                <Link to="/appointment" style={{ textDecoration: "none" }}>
                  <a className="nav-link">All Sports</a>
                </Link>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <a className="nav-link">Home</a>
                </Link>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <a className="nav-link">Appointment</a>
                </Link>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <a className="nav-link">Contact</a>
                </Link>
              </NavDropdown>

              <Nav.Link to="/" disabled>
                Actiion
              </Nav.Link>

              <Link to="/" style={{ textDecoration: "none" }}>
                <a className="nav-link">Contact</a>
              </Link>
            </Nav>
            <Form className="d-flex nav-form justify-content-center">
              {show ? (
                <FormControl
                  type="search"
                  id="formInput"
                  placeholder="Search Sports"
                  className="me-2 form-control-navbar"
                  aria-label="Search"
                  onChange={handleInput}
                />
              ) : null}

              {show ? (
                <button
                  id="formInput"
                  className="btn btn-outline-info me-2 mt-1"
                  // type="submit"
                  onClick={handleSearch}
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
    </>
  );
}
