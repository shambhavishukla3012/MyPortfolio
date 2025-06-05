import React, { useState, useEffect, useContext } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { ThemeContext } from "../context/ThemeContext";

const Navigation = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Check which section is currently visible
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY + 500; // Add offset for better detection

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute("id");

        if (
          scrollPosition >= sectionTop &&
          scrollPosition <= sectionTop + sectionHeight
        ) {
          setActiveLink(sectionId || "home"); // Default to home if no id
        }
      });

      // Special case for Hero section (home)
      if (scrollPosition < 300) {
        setActiveLink("home");
      }
    };

    window.addEventListener("scroll", onScroll);

    // Initial check
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar
      expand="lg"
      className={scrolled ? "scrolled" : ""}
      fixed="top"
      style={{
        backgroundColor: scrolled ? "var(--navbar-bg)" : "var(--background)",
        transition: "all 0.3s ease-in-out",
        boxShadow: scrolled ? "0 2px 10px rgba(0,0,0,0.1)" : "none",
        backdropFilter: scrolled ? "blur(10px)" : "none",
      }}
    >
      <Container style={{ maxWidth: "1200px" }}>
        {/* <Navbar.Brand
          href="#home"
          style={{
            color: "var(--blue)",
            fontWeight: "700",
            fontSize: "22px",
          }}
        >
                        SS
        </Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
              style={{
                color:
                  activeLink === "home"
                    ? "var(--active-nav)"
                    : "var(--primary-text)",
                fontWeight: activeLink === "home" ? "600" : "500",
                marginLeft: "20px",
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#about"
              className={
                activeLink === "about" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("about")}
              style={{
                color:
                  activeLink === "about"
                    ? "var(--active-nav)"
                    : "var(--primary-text)",
                fontWeight: activeLink === "about" ? "600" : "500",
                marginLeft: "20px",
              }}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="#education-experience"
              className={
                activeLink === "education-experience"
                  ? "active navbar-link"
                  : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("education-experience")}
              style={{
                color:
                  activeLink === "education-experience"
                    ? "var(--active-nav)"
                    : "var(--primary-text)",
                fontWeight:
                  activeLink === "education-experience" ? "600" : "500",
                marginLeft: "20px",
              }}
            >
              Education & Experience
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
              style={{
                color:
                  activeLink === "skills"
                    ? "var(--active-nav)"
                    : "var(--primary-text)",
                fontWeight: activeLink === "skills" ? "600" : "500",
                marginLeft: "20px",
              }}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
              style={{
                color:
                  activeLink === "projects"
                    ? "var(--active-nav)"
                    : "var(--primary-text)",
                fontWeight: activeLink === "projects" ? "600" : "500",
                marginLeft: "20px",
              }}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="#contact"
              className={
                activeLink === "contact" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("contact")}
              style={{
                color:
                  activeLink === "contact"
                    ? "var(--active-nav)"
                    : "var(--primary-text)",
                fontWeight: activeLink === "contact" ? "600" : "500",
                marginLeft: "20px",
              }}
            >
              Contact
            </Nav.Link>

            <div
              style={{
                marginLeft: "20px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <button
                onClick={toggleTheme}
                className="theme-toggle-btn"
                aria-label="Toggle theme"
                style={{
                  background: "transparent",
                  border: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "38px",
                  height: "38px",
                  borderRadius: "50%",
                  padding: "8px",
                  cursor: "pointer",
                  color: "var(--primary-text)",
                  transition: "all 0.3s ease",
                }}
              >
                {isDarkTheme ? (
                  <i
                    className="fas fa-sun"
                    style={{ fontSize: "18px", color: "var(--golden)" }}
                  ></i>
                ) : (
                  <i
                    className="fas fa-moon"
                    style={{ fontSize: "18px", color: "var(--dark-silver)" }}
                  ></i>
                )}
              </button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
