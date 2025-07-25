import React, { useEffect, useState } from "react";
import Scrollspy from "react-scrollspy";
import "./Navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // add class after 50px scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top shadow-sm py-4 ${
        scrolled ? "scrolled" : ""
      }`}
    >
      <div className="container">
        <a className="navbar-brand fw-bold text-primary" href="#home">
          VidyaSagar
        </a>

        <button
          className="navbar-toggler text-white border-0 "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon text-white "></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <Scrollspy
            items={["home", "about", "skills", "projects", "contact"]}
            currentClassName="active"
            className="navbar-nav ms-auto mb-2 mb-lg-0"
            offset={-100}
          >
            <li className="nav-item">
              <a className="nav-link" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </Scrollspy>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
