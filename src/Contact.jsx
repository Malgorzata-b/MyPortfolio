import IconGitHub from "/iconGitHub.png";
import IconLinkedin from "/iconLinkedin.png";

import styled from "styled-components";

const ContactContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 8rem;
  width: 80%;
  height: 80%;
`;

const LogoNameContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const CircleContainer = styled.div`
  border-radius: 100%;
  border: 2px solid var(--black);
  background: linear-gradient(to right top, var(--dark), var(--bb));
  box-shadow: 0px 0px 15px 6px var(--black);
  width: 3rem;
  height: 3rem;
  animation: rotate 5s linear infinite;
  animation: shadow 9s infinite;
`;

const ParagraphContact = styled.p``;

const InfocontactContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 20rem;
  height: 4rem;
  margin: 1rem 20rem;
  padding: 0.5rem;
`;

const LinksContactContainer = styled.div`
  display: flex;
  gap: 1rem;
  position: relative;
  left: 80%;
`;

const IconImageProject = styled.img`
  width: 1.4rem;
  height: 1.4rem;
  border: 2px solid black;
  box-shadow: 0px 0px 15px 3px var(--white);
`;

const GitHubIcons = styled.img`
  height: 1.4rem;
  width: 2.5rem;
  border: 2px solid black;
  box-shadow: 0px 0px 15px 1px var(--white);
`;

const Link = styled.a``;

export default function Contact() {
  return (
    <ContactContainer className="Contact-container">
      <LogoNameContainer className="Logo-name">
        <CircleContainer id="Circle"></CircleContainer>
        <ParagraphContact>Malgorzata Bugajska</ParagraphContact>
      </LogoNameContainer>
      <InfocontactContainer className="Info-Contact">
        <ParagraphContact>
          e - post: <strong>bugajska.malgorzat5@gmail.com</strong>
        </ParagraphContact>
        <ParagraphContact>
          mobiltelefon: <strong>(+47) 486 53 587</strong>
        </ParagraphContact>
      </InfocontactContainer>

      <LinksContactContainer className="Links-Contact">
        <Link href="https://github.com/Malgorzata-b">
          <GitHubIcons
            className="Icons GitHubIcon"
            src={IconGitHub}
            alt="GitHub"
          />
        </Link>
        <Link href="https://www.linkedin.com/in/malgorzata-bugajska/">
          <IconImageProject
            className="Icons"
            src={IconLinkedin}
            alt="Linkedin"
          />
        </Link>
      </LinksContactContainer>
    </ContactContainer>
  );
}
