import "./NavBar.css";
import Header from "./Header";
import About from "./About";
import Projects from "./Projects";
import Contact from "./contact";
import React, { useRef } from "react";

export default function Navbar() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <>
      <header id="HomePage" ref={homeRef}>
        <Header />
      </header>
      <section id="Navbar">
        <nav className="Navbar-container">
          <button onClick={() => scrollToSection(homeRef)}>Hjem</button>
          <button onClick={() => scrollToSection(aboutRef)}>Om meg</button>
          <button onClick={() => scrollToSection(projectsRef)}>
            Prosjekter
          </button>
          <button onClick={() => scrollToSection(contactRef)}>Kontakt</button>
        </nav>
      </section>

      <main id="Information-container">
        <div ref={aboutRef}>
          <About />
        </div>
        <section ref={projectsRef} className="Projects-container">
          <Projects />
        </section>
      </main>
      <footer id="Contact" ref={contactRef}>
        <Contact />
      </footer>
    </>
  );
}
