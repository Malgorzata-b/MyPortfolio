import IconHTML from "/iconHTML.png";
import IconCSS from "/iconCSS.png";
import IconFigma from "/iconFigma.png";
import IconJS from "/iconJS.png";
import IconReact from "/iconReact.png";
import IconMySQL from "/iconMySQL.png";
import IconGitHub from "/iconGitHub.png";
import IconLivePage from "/iconLivePage.png";
import Lavenda from "/Lavenda.png";
import MapApi from "/MapApi.png";
import ReactJule from "/ReactJule.png";
import MySQLImage from "/SQL.png";
import MySQLProject from "/MySQL.pdf";
import Chess from "/Chess.png";

import styled from "styled-components";

const ProjectContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.2rem;
  margin: 3vh 0.5vw;
  border: 4px solid var(--black);
  // border: 4px solid red;
  border-radius: 40px;
  width: 42vw;
  background: linear-gradient(to right top, var(--dark), var(--green));
  box-shadow: 0px 0px 15px 6px var(--black);
`;

const ImgProject = styled.img`
  width: 20rem;
  height: 23rem;
  border-radius: 20px;
  border: 2px solid var(--black);
  margin-left: 0.5rem;
  box-shadow: 0px 0px 15px 6px var(--black);
`;

const InformationProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const TitleProject = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  padding-top: 0.9vh;
`;

const ParagraphProject = styled.p`
  font-size: 2rem;
`;

const IconsContainerProject = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 6rem;
  border-radius: 20px;
  padding: 0.5vh 2vw;
`;

const IconImageProject = styled.img`
  width: 3rem;
  height: 3rem;
  border: 2px solid black;
  box-shadow: 0px 0px 15px 3px var(--black);
`;

const LinksContainerIcons = styled.div`
  display: flex;
  gap: 0.5rem;
  cursor: pointer;
`;

const IconsContainerTools = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const IconImageLivePage = styled.img`
  width: 3rem;
  height: 3rem;
  border: 2px solid black;
  box-shadow: 0px 0px 15px 3px var(--black);
   &:hover {
    background-color: var(--ShadowButton);
    color: var(--dark);
    cursor: pointer;
    box-shadow: 0px 0px 26px 0px var(--ShadowButton);
`;
const GitHubMySQLIcons = styled.img`
  height: 3rem;
  width: 3.5rem;
  border: 2px solid black;
  box-shadow: 0px 0px 15px 3px var(--black);
   &:hover {
    background-color: var(--ShadowButton);
    color: var(--dark);
    cursor: pointer;
    box-shadow: 0px 0px 26px 0px var(--ShadowButton);
`;

const Link = styled.a``;

export default function Projects() {
  return (
    <>
      <ProjectContainer className="Project-con" id="Lavenda">
        <ImgProject className="ImgProject" src={Lavenda} alt="Lavenda" />
        <InformationProjectContainer className="Information-project">
          <TitleProject className="title-project">
            Project 1 <br />
            Lavenda-Art
          </TitleProject>
          <ParagraphProject className="paragraph-project">
            Prosjekte er en konseptbutikk på nett designet i Figma. Siden er
            laget med tanke på salg av lavendelprodukter. Designet har
            harmoniske farger, brukervennlig navigasjon og en moderne struktur
            som fremhever den naturlige karakteren til produktene.
          </ParagraphProject>
          <IconsContainerProject className="Icons-container">
            <IconImageProject className="Icons" src={IconFigma} alt="Figma" />

            <LinksContainerIcons className="Links-containerIcons">
              <Link href="https://www.figma.com/design/C0ZEPPAKgMSvHtZ3RHsjcN/Assignment-4%3A-Adding-a-Carousel-to-our-site?node-id=0-1&t=XANvlzWFNnBc32YS-1">
                <IconImageLivePage
                  className="Icons"
                  src={IconFigma}
                  alt="Figma"
                />
              </Link>
              <Link href="https://www.figma.com/proto/C0ZEPPAKgMSvHtZ3RHsjcN/Assignment-4%3A-Adding-a-Carousel-to-our-site?node-id=1-144&t=x4vijPfQ1caeBFYa-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1">
                <IconImageLivePage
                  className="Icons"
                  src={IconLivePage}
                  alt="LivePage"
                />
              </Link>
            </LinksContainerIcons>
          </IconsContainerProject>
        </InformationProjectContainer>
      </ProjectContainer>
      <ProjectContainer className="Project-con" id="Countries">
        <ImgProject className="ImgProject" src={MapApi} alt="Countries" />
        <InformationProjectContainer className="Information-project">
          <TitleProject className="title-project">
            Project 2 <br />
            Countries - API
          </TitleProject>
          <ParagraphProject className="paragraph-project">
            Prosjektet er en app laget med JavaScript som bruker data fra et
            API. Den lar brukere se informasjon om land, som flagg, befolkning
            og regioner, med responsivt design i HTML og CSS.
          </ParagraphProject>
          <IconsContainerProject className="Icons-container">
            <IconsContainerTools className="Icons-container-tools">
              <IconImageProject className="Icons" src={IconJS} alt="JS" />
              <IconImageProject className="Icons" src={IconHTML} alt="HTML" />
              <IconImageProject className="Icons" src={IconCSS} alt="CSS" />
            </IconsContainerTools>
            <LinksContainerIcons className="Links-containerIcons">
              <Link href="https://github.com/Malgorzata-b/Oppgave-API-">
                <GitHubMySQLIcons
                  className="Icons GitHubIcon"
                  src={IconGitHub}
                  alt="GitHub"
                />
              </Link>
              <Link href="https://malgorzata-b.github.io/Oppgave-API-/">
                <IconImageLivePage
                  className="Icons"
                  src={IconLivePage}
                  alt="LivePage"
                />
              </Link>
            </LinksContainerIcons>
          </IconsContainerProject>
        </InformationProjectContainer>
      </ProjectContainer>
      <ProjectContainer className="Project-con" id="Ønskelister">
        <ImgProject className="ImgProject" src={ReactJule} alt="Ønskelister" />
        <InformationProjectContainer className="Information-project">
          <TitleProject className="title-project">
            Project 3 <br /> Ønskelister
          </TitleProject>
          <ParagraphProject className="paragraph-project">
            Dette prosjektet er en app laget med React. Den lar brukere lage og
            organisere ønskelister. HTML og CSS er brukt for å lage et
            responsivt design.
          </ParagraphProject>
          <IconsContainerProject className="Icons-container">
            <IconsContainerTools className="Icons-container-tools">
              <IconImageProject className="Icons" src={IconReact} alt="React" />
              <IconImageProject className="Icons" src={IconHTML} alt="HTML" />
              <IconImageProject className="Icons" src={IconCSS} alt="CSS" />
            </IconsContainerTools>
            <LinksContainerIcons className="Links-containerIcons">
              <Link href="https://github.com/Malgorzata-b/Jule-React">
                <GitHubMySQLIcons
                  className="Icons GitHubIcon"
                  src={IconGitHub}
                  alt="GitHub"
                />
              </Link>
              <Link href="https://malgorzata-b.github.io/Jule-React/">
                <IconImageLivePage
                  className="Icons"
                  src={IconLivePage}
                  alt="LivePage"
                />
              </Link>
            </LinksContainerIcons>
          </IconsContainerProject>
        </InformationProjectContainer>
      </ProjectContainer>
      <ProjectContainer className="Project-con" id="MySQL-Project">
        <ImgProject
          className="ImgProject"
          src={MySQLImage}
          alt="MySQL-Project"
        />
        <InformationProjectContainer className="Information-project">
          <TitleProject className="title-project">
            Project 4 <br />
            MySQL
          </TitleProject>
          <ParagraphProject className="paragraph-project">
            Dette prosjektet bruker MySQL for å analysere Airbnb-data fra New
            York. Det involverer oppretting av flere tabeller og bruk av ulike
            funksjoner for databehandling.
          </ParagraphProject>
          <IconsContainerProject className="Icons-container MySQLContainer">
            <GitHubMySQLIcons
              className="Icons MySQLIcon"
              src={IconMySQL}
              alt="MySQL"
            />
            {/* <a href="https://www.canva.com/design/DAF8o1V0x2I/QFddjj07e_9rfAqkED9vXA/edit?utm_content=DAF8o1V0x2I&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"> */}
            <Link href={MySQLProject}>
              <IconImageLivePage
                className="Icons"
                src={IconLivePage}
                alt="LivePage"
              />
            </Link>
          </IconsContainerProject>
        </InformationProjectContainer>
      </ProjectContainer>
      <ProjectContainer className="Project-con" id="Chess">
        <ImgProject className="ImgProject" src={Chess} alt="Chess" />
        <InformationProjectContainer className="Information-project">
          <TitleProject className="title-project">
            Project 5 <br /> Chess
          </TitleProject>
          <ParagraphProject className="paragraph-project">
            Prosjektet går ut på å lage et sjakkbrett ved hjelp av JavaScript,
            HTML og CSS. DOM-manipulasjon ble brukt. Målet var å presentere de
            grunnleggende reglene i sjakk.
          </ParagraphProject>
          <IconsContainerProject className="Icons-container">
            <IconsContainerTools className="Icons-container-tools">
              <IconImageProject className="Icons" src={IconJS} alt="JS" />
              <IconImageProject className="Icons" src={IconHTML} alt="HTML" />
              <IconImageProject className="Icons" src={IconCSS} alt="CSS" />
            </IconsContainerTools>
            <LinksContainerIcons className="Links-containerIcons">
              <Link href="https://github.com/Malgorzata-b/DOM-Manipulation-Chess">
                <GitHubMySQLIcons
                  className="Icons GitHubIcon"
                  src={IconGitHub}
                  alt="GitHub"
                />
              </Link>
              <Link href="https://malgorzata-b.github.io/DOM-Manipulation-Chess/">
                <IconImageLivePage
                  className="Icons"
                  src={IconLivePage}
                  alt="LivePage"
                />
              </Link>
            </LinksContainerIcons>
          </IconsContainerProject>
        </InformationProjectContainer>
      </ProjectContainer>
    </>
  );
}
