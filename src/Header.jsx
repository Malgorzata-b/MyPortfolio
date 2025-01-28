import CV from "/CV-M.Bugajska.pdf";
import Dots from "/dots.png";

import styled from "styled-components";

const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem;
`;

const ButtonHeader = styled.button`
  background-color: transparent;
  width: 4rem;
  height: 2rem;
  border-radius: 5rem;
  cursor: pointer;

  &:hover {
    background-color: var(--ShadowButton);
    color: var(--dark);
    cursor: pointer;
    box-shadow: 0px 0px 2px 2px var(--ShadowButton);
  }
`;

const LinkGitCV = styled.a`
  color: white;
  font-weight: 600;
  text-decoration: none;
  &:hover {
    color: var(--dark);
    cursor: pointer;
  }
`;

const ImageDots = styled.img`
  position: relative;
  height: 20rem;
  top: 25%;
  left: -3%;
  animation: rotate 19s infinite linear;
`;

const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 25rem;
  gap: 2rem;
  margin-bottom: 3.5rem;
  backdrop-filter: blur(2px);
  position: relative;
  top: -25%;
`;

const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  font-size: 34px;
  font-weight: 600;
`;

const Title = styled.h1`
  font-size: 60px;
`;

const NameParagraph = styled.p``;

export default function Header() {
  return (
    <>
      <ButtonContainer className="Button-container">
        <ButtonHeader id="Button-header">
          <LinkGitCV href="https://github.com/Malgorzata-b">GitHub</LinkGitCV>
        </ButtonHeader>
        <ButtonHeader id="Button-header">
          <LinkGitCV href={CV}>CV</LinkGitCV>
        </ButtonHeader>
      </ButtonContainer>
      <ImageDots className="img-dots" src={Dots} alt="Dots" />
      <WelcomeContainer className="Welcome-container">
        <Title id="Title">Velkommen</Title>
        <NameContainer id="Name">
          <NameParagraph>Jeg heter</NameParagraph>
          <NameParagraph>Malgorzata Bugajska</NameParagraph>
          <NameParagraph>Fullstack</NameParagraph>
        </NameContainer>
      </WelcomeContainer>
    </>
  );
}
