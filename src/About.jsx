import Image3 from "/Image1.jpg";
import Image2 from "/Image2.jpg";
import Image1 from "/Image3.jpg";
import Image4 from "/Image4.jpg";
import IconHTML from "/iconHTML.png";
import IconCSS from "/iconCSS.png";
import IconFigma from "/iconFigma.png";
import IconJS from "/iconJS.png";
import IconReact from "/iconReact.png";
import IconPython from "/iconPython.png";
import IconMySQL from "/iconMySQL.png";

import styled from "styled-components";

const ImagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
`;

const ImageContainerProfil = styled.div``;

const ImageAurora = styled.img`
  width: 18rem;
  height: 25rem;
  border: 3px solid var(--black);
  border-radius: 5%;
  box-shadow: 0px 4px 4px 2px var(--black);
`;

const CaruselContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
  border-radius: 20px;
  box-shadow: 4px 4px 8px var(--CaruselColorShadowLight);
  margin-top: 2rem;
  padding: 1.5rem 1.5rem;
  height: 15rem;
  width: 25rem;
  // border: 2px solid red;
`;

const ImageContainerImg = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  width: 15rem;
  height: 10.5rem;
  // border: 2px solid yellow;
  border-radius: 20px;
  scroll-behavior: smooth;
  overflow: hidden;
`;

const Image = styled.img`
  width: 16rem;
  height: 10.5rem;
  border-radius: 5%;
  box-shadow: 4px 4px 8px var(--CaruselColorShadowLight);
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  background-color: transparent;
  width: 5rem;
  margin-top: 1.5rem;
`;

const LinkButton = styled.a`
  display: inline-block;
  width: 0.8rem;
  height: 0.8rem;
  margin-bottom: 0.5rem;
  border-radius: 50%;
  box-shadow: 0 1px 5px var(--CaruselColorShadowDark),
    inset 1px 1px 2px var(--CaruselColorShadowLightSecond);
  background-color: var(--CaruselColorBackground);
  background-image: linear-gradient(
    var(--CaruselColorBackgroundImageLight),
    var(--CaruselColorBackgroundImageDark)
  );
`;

const CompetencesContainer = styled.div`
  display: flex;
  gap: 1.2rem;
  margin-top: 1.5rem;
  padding-top: 3.5rem;
`;

const Paragraph = styled.p`
  font-weight: 700;
  font-size: 2rem;
`;

const IconContainer = styled.div``;

const IconImage = styled.img`
  width: 3.5rem;
  height: 3.5rem;
`;

const IconTitle = styled.p`
  font-weight: 300;
  font-size: 1.5rem;
`;

const AboutMeContainer = styled.div`
  display: flex;
  max-width: 100vw;
  background: linear-gradient(to right top, var(--dark), var(--green));
  border-radius: 20px;
  box-shadow: 0px 0px 15px 6px var(--black);
`;

const Description = styled.p`
  font-weight: 400;
  line-height: 1.5;
  text-align: justify;
  width: 95%;
  text-indent: 4rem;
  padding-left: 2vw;
  font-size: 1.8rem;
`;

export default function About() {
  return (
    <>
      <ImagesContainer className="Images-Container">
        <ImageContainerProfil className="Image">
          <ImageAurora className="Profil" src={Image4} alt="Aurora" />
        </ImageContainerProfil>
        <CaruselContainer class="carousel-container">
          <ImageContainerImg className="Image-Gallery">
            <Image className="Photo" id="photo-1" src={Image1} alt="Image3" />
            <Image className="Photo" id="photo-2" src={Image2} alt="Image2" />
            <Image className="Photo" id="photo-3" src={Image3} alt="Image1" />
          </ImageContainerImg>
          <ButtonContainer class="button-container">
            <LinkButton class="button" href="#photo-1"></LinkButton>
            <LinkButton class="button" href="#photo-2"></LinkButton>
            <LinkButton class="button" href="#photo-3"></LinkButton>
          </ButtonContainer>
        </CaruselContainer>
        <CompetencesContainer className="Competences">
          <Paragraph>Jeg Kan: </Paragraph>
          <IconContainer className="HTML">
            <IconImage className="Icon" src={IconHTML} alt="HTML" />
            <IconTitle id="Title-competences">HTML</IconTitle>
          </IconContainer>
          <IconContainer className="CSS">
            <IconImage className="Icon" src={IconCSS} alt="CSS" />
            <IconTitle id="Title-competences">CSS</IconTitle>
          </IconContainer>
          <IconContainer className="FIGMA">
            <IconImage className="Icon" src={IconFigma} alt="FIGMA" />
            <IconTitle id="Title-competences">Figma</IconTitle>
          </IconContainer>
          <IconContainer className="JS">
            <IconImage className="Icon" src={IconJS} alt="JS" />
            <IconTitle id="Title-competences">JavaScript</IconTitle>
          </IconContainer>
          <IconContainer className="REACT">
            <IconImage className="Icon" src={IconReact} alt="REACT" />
            <IconTitle id="Title-competences">React</IconTitle>
          </IconContainer>
          <IconContainer className="Python ">
            <IconImage className="Icon" src={IconPython} alt="Python" />
            <IconTitle id="Title-competences">Python</IconTitle>
          </IconContainer>
          <IconContainer className="MySQL">
            <IconImage className="Icon" src={IconMySQL} alt="MySQL" />
            <IconTitle id="Title-competences">MySQL</IconTitle>
          </IconContainer>
        </CompetencesContainer>
      </ImagesContainer>
      <AboutMeContainer className="AboutMe">
        <Description className="Description">
          Hei!
          <br />
          Jeg er Malgorzata og jeg er veldig spent på å starte min reise som
          frontend-utvikler. Med en positiv holdning og lærevillighet trives jeg
          med å takle nye utfordringer og finne analytiske løsninger på
          oppgaver. De siste seks månedene har jeg studert frontend-utvikling
          gjennom et kurs på IT-Utvikler AMO/Kodehode, hvor jeg har fått
          praktisk erfaring med HTML, CSS, JavaScript, React og Figma.
          <br />
          <br /> Nå ser jeg aktivt etter en praksisplass hvor jeg kan anvende
          disse ferdighetene i en reell arbeidssituasjon. For tiden jobber jeg
          som assistentlærer ved Johannes Learning Center, hvor jeg støtter
          undervisningen i norsk, engelsk, programmering og matematikk. Denne
          rollen har styrket min evne til samarbeid og tilpasning i ulike
          læringsmiljøer.
          <br />
          <br /> På fritiden liker jeg å spille sjakk, tilbringe tid med familie
          og venner, og forfølge min lidenskap for musikk og reising. Jeg er
          klar for nye utfordringer som dataanalytiker eller programmerer. Jeg
          er ivrig etter å bidra med mine analytiske og
          programmeringsferdigheter til et dynamisk team og skape en meningsfull
          påvirkning.
        </Description>
      </AboutMeContainer>
    </>
  );
}
