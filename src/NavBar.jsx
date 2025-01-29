import Header from "./Header.jsx";
import About from "./About.jsx";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";
import React, { useRef } from "react";

import styled from "styled-components";

const HeaderSection = styled.header`
  height: 38rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: end;
  padding: 2rem;
  justify-content: space-between;
`;

const NavBarSection = styled.section`
  display: flex;
  justify-content: end;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1;
  height: 2.8rem;

  background: linear-gradient(to right top, var(--dark), var(--green));
`;

const NavBarNavigation = styled.nav`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 1.5rem;
  height: 2rem;
  width: 100%;
  padding: 2rem;
  background: linear-gradient(to right top, var(--dark), var(--green));
`;

const NavBarButton = styled.button`
  color: var(--white);
  background-color: var(--NavBarButtonBackgroundColor);
  width: 3.5rem;
  height: 1.7rem;
  border-radius: 5rem;
  box-shadow: 1px 4px 4px 0px var(--NavBarButtonShadowColor);
  cursor: pointer;
  border: 4px solid var(--NavBarButtonBorderColor);
  width: 6rem;
  height: 2rem;
  &:hover {
    background-color: var(--ShadowButton);
    color: var(--dark);
    cursor: pointer;
    box-shadow: 0px 0px 2px 2px var(--ShadowButton);
  }
`;

const MainSection = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  height: 120rem;
  width: 100%;
`;

const AboutSection = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  width: 85%;
  height: 33rem;
  border-radius: 5%;
  backdrop-filter: blur(5px);
`;

const ProjectsSection = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  padding-top: 5rem;
  padding-left: 2.1rem;
  width: 85%;
  height: 85rem;
  border-radius: 5%;
  backdrop-filter: blur(5px);
`;

const FooterSection = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  width: 100%;
  height: 15rem;
  background: linear-gradient(to right top, var(--dark), var(--green));
  backdrop-filter: blur(10px);
`;

export default function Navbar() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };
  return (
    <>
      <HeaderSection id="HomePage" ref={homeRef}>
        <Header />
      </HeaderSection>

      <NavBarSection id="Navbar">
        <NavBarNavigation className="Navbar-container">
          <NavBarButton onClick={() => scrollToSection(homeRef)}>
            Hjem
          </NavBarButton>

          <NavBarButton onClick={() => scrollToSection(aboutRef)}>
            Om meg
          </NavBarButton>

          <NavBarButton onClick={() => scrollToSection(projectsRef)}>
            Prosjekter
          </NavBarButton>

          <NavBarButton onClick={() => scrollToSection(contactRef)}>
            Kontakt
          </NavBarButton>
        </NavBarNavigation>
      </NavBarSection>

      <MainSection id="Information-container">
        <AboutSection ref={aboutRef} className="About-container">
          <About />
        </AboutSection>

        <ProjectsSection ref={projectsRef} className="Projects-container">
          <Projects />
        </ProjectsSection>
      </MainSection>

      <FooterSection id="Contact" ref={contactRef}>
        <Contact />
      </FooterSection>
    </>
  );
}
