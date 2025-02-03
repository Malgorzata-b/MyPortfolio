import IconGitHub from "/iconGitHub.png";
import IconLinkedin from "/iconLinkedin.png";

import styled from "styled-components";

const ContactContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 8rem;
`;

const LogoNameContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const CircleContainer = styled.div`
  border-radius: 100%;
  border: 4px solid var(--black);
  background: linear-gradient(to right top, var(--dark), var(--bb));
  box-shadow: 0px 0px 15px 6px var(--black);
  width: 5rem;
  height: 5rem;
  animation: rotate 5s linear infinite;
  animation: shadow 9s infinite;
`;

const ParagraphContact = styled.p`
  font-size: 1.8rem;
`;

const InfocontactContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 1vh 20vw;
  padding: 0.5vh 0.5vw;
`;

const LinksContactContainer = styled.div`
  display: flex;
  gap: 2rem;
  margin: 2vh 50vw;
  cursor: pointer;
`;

const IconImageProject = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border: 2px solid black;
  box-shadow: 0px 0px 15px 3px var(--white);
  &:hover {
    background-color: var(--ShadowButton);
    color: var(--dark);
    cursor: pointer;
    box-shadow: 0px 0px 2px 2px var(--ShadowButton);
  }
`;

const GitHubIcons = styled.img`
  height: 2.5rem;
  width: 3.5rem;
  border: 2px solid black;
  box-shadow: 0px 0px 15px 1px var(--white);
  &:hover {
    background-color: var(--ShadowButton);
    color: var(--dark);
    cursor: pointer;
    box-shadow: 0px 0px 2px 2px var(--ShadowButton);
  }
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
