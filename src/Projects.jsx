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
  gap: 4rem;
  margin: 3vh 0.5vw;
  border: 4px solid var(--black);
  // border: 4px solid red;
  border-radius: 40px;
  max-width: 70rem;
  background: linear-gradient(to right top, var(--dark), var(--green));
  box-shadow: 0px 0px 15px 6px var(--black);
`;

const ContainerProjects = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 3rem;
`;

const ImgProject = styled.img`
  max-width: 20rem;
  height: 23rem;
  border-radius: 20px;
  border: 2px solid var(--black);
  margin: 0.5vh 0.5vw;
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
  text-shadow: 0px 3px 3px var(--ShadowButton);
`;

const ParagraphProject = styled.p`
  font-size: 2rem;
  text-align: center;
  padding-right: 1.2vw;
`;

const IconsContainerProject = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 7rem;
  border-radius: 20px;
  padding: 1vh 2vw;
`;

const IconImageProject = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  border: 2px solid black;
  box-shadow: 0px 0px 15px 3px var(--black);
`;

const LinksContainerIcons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 15rem;
  cursor: pointer;
  width: 11rem;
`;

const IconsContainerTools = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 15rem;
  cursor: pointer;
`;

const IconImageLivePage = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  border: 2px solid black;
  box-shadow: 0px 0px 15px 3px var(--black);
 
   &:hover {
    background-color: var(--ShadowButton);
    color: var(--dark);
    box-shadow: 0px 0px 26px 0px var(--ShadowButton);
`;
const GitHubMySQLIcons = styled.img`
  height: 3.5rem;
  width: 5.5rem;
  border: 2px solid black;
  box-shadow: 0px 0px 15px 3px var(--black);
   
   &:hover {
    background-color: var(--ShadowButton);
    color: var(--dark);
    box-shadow: 0px 0px 26px 0px var(--ShadowButton);
`;

const Link = styled.a``;

const ParagraphIconsLinks = styled.p`
  font-size: 2rem;
  text-align: center;
  text-decoration: underline;
  font-family: "Playfair Display", serif;
  text-shadow: 0px 3px 3px var(--ShadowButton);
`;

const ContainerIconsLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

export default function Projects() {
  return (
    <>
      <ContainerProjects className="Container-Projects">
        <ProjectContainer className="Project-con" id="Lavenda">
          <Link href="https://www.figma.com/proto/C0ZEPPAKgMSvHtZ3RHsjcN/Assignment-4%3A-Adding-a-Carousel-to-our-site?node-id=1-144&t=x4vijPfQ1caeBFYa-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1">
            {" "}
            <ImgProject className="ImgProject" src={Lavenda} alt="Lavenda" />
          </Link>

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
              <LinksContainerIcons className="Links-containerIcons">
                <ParagraphIconsLinks>Laget inn:</ParagraphIconsLinks>
                <ContainerIconsLinks>
                  <IconImageProject
                    className="Icons"
                    src={IconFigma}
                    alt="Figma"
                  />
                </ContainerIconsLinks>
              </LinksContainerIcons>
              <LinksContainerIcons className="Links-containerIcons">
                <ParagraphIconsLinks>Linker til:</ParagraphIconsLinks>
                <ContainerIconsLinks>
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
                </ContainerIconsLinks>
              </LinksContainerIcons>
            </IconsContainerProject>
          </InformationProjectContainer>
        </ProjectContainer>
        <ProjectContainer className="Project-con" id="Countries">
          <Link href="https://malgorzata-b.github.io/Oppgave-API-/">
            <ImgProject className="ImgProject" src={MapApi} alt="Countries" />
          </Link>

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
                <ParagraphIconsLinks>Laget inn:</ParagraphIconsLinks>
                <ContainerIconsLinks>
                  <IconImageProject className="Icons" src={IconJS} alt="JS" />
                  <IconImageProject
                    className="Icons"
                    src={IconHTML}
                    alt="HTML"
                  />
                  <IconImageProject className="Icons" src={IconCSS} alt="CSS" />{" "}
                </ContainerIconsLinks>
              </IconsContainerTools>
              <LinksContainerIcons className="Links-containerIcons">
                <ParagraphIconsLinks>Linker til:</ParagraphIconsLinks>
                <ContainerIconsLinks>
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
                </ContainerIconsLinks>
              </LinksContainerIcons>
            </IconsContainerProject>
          </InformationProjectContainer>
        </ProjectContainer>
      </ContainerProjects>
      <ContainerProjects className="ØnskelisterProject-Container">
        <ProjectContainer className="Project-con" id="Ønskelister">
          <Link href="https://malgorzata-b.github.io/Jule-React/">
            <ImgProject
              className="ImgProject"
              src={ReactJule}
              alt="Ønskelister"
            />
          </Link>

          <InformationProjectContainer className="Information-project">
            <TitleProject className="title-project">
              Project 3 <br /> Ønskelister
            </TitleProject>
            <ParagraphProject className="paragraph-project">
              Dette prosjektet er en app laget med React. Den lar brukere lage
              og organisere ønskelister. HTML og CSS er brukt for å lage et
              responsivt design.
            </ParagraphProject>
            <IconsContainerProject className="Icons-container">
              <IconsContainerTools className="Icons-container-tools">
                <ParagraphIconsLinks>Laget inn:</ParagraphIconsLinks>
                <ContainerIconsLinks>
                  <IconImageProject
                    className="Icons"
                    src={IconReact}
                    alt="React"
                  />
                  <IconImageProject
                    className="Icons"
                    src={IconHTML}
                    alt="HTML"
                  />
                  <IconImageProject className="Icons" src={IconCSS} alt="CSS" />
                </ContainerIconsLinks>
              </IconsContainerTools>
              <LinksContainerIcons className="Links-containerIcons">
                <ParagraphIconsLinks>Linker til:</ParagraphIconsLinks>
                <ContainerIconsLinks>
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
                </ContainerIconsLinks>
              </LinksContainerIcons>
            </IconsContainerProject>
          </InformationProjectContainer>
        </ProjectContainer>
      </ContainerProjects>
      <ContainerProjects className="Container-Projects">
        <ProjectContainer className="Project-con" id="MySQL-Project">
          <Link href={MySQLProject}>
            <ImgProject
              className="ImgProject"
              src={MySQLImage}
              alt="MySQL-Project"
            />
          </Link>
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
              <LinksContainerIcons className="Links-containerIcons">
                <ParagraphIconsLinks>Laget inn:</ParagraphIconsLinks>
                <ContainerIconsLinks>
                  <GitHubMySQLIcons
                    className="Icons MySQLIcon"
                    src={IconMySQL}
                    alt="MySQL"
                  />
                </ContainerIconsLinks>
              </LinksContainerIcons>
              <LinksContainerIcons className="Links-containerIcons">
                <ParagraphIconsLinks>Linker til:</ParagraphIconsLinks>
                <ContainerIconsLinks>
                  <Link href={MySQLProject}>
                    <IconImageLivePage
                      className="Icons"
                      src={IconLivePage}
                      alt="LivePage"
                    />
                  </Link>
                </ContainerIconsLinks>
              </LinksContainerIcons>
            </IconsContainerProject>
          </InformationProjectContainer>
        </ProjectContainer>
        <ProjectContainer className="Project-con" id="Chess">
          <Link href="https://malgorzata-b.github.io/DOM-Manipulation-Chess/">
            <ImgProject className="ImgProject" src={Chess} alt="Chess" />
          </Link>

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
                <ParagraphIconsLinks>Laget inn:</ParagraphIconsLinks>
                <ContainerIconsLinks>
                  <IconImageProject className="Icons" src={IconJS} alt="JS" />
                  <IconImageProject
                    className="Icons"
                    src={IconHTML}
                    alt="HTML"
                  />
                  <IconImageProject className="Icons" src={IconCSS} alt="CSS" />{" "}
                </ContainerIconsLinks>
              </IconsContainerTools>
              <LinksContainerIcons className="Links-containerIcons">
                <ParagraphIconsLinks>Linker til:</ParagraphIconsLinks>
                <ContainerIconsLinks>
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
                </ContainerIconsLinks>
              </LinksContainerIcons>
            </IconsContainerProject>
          </InformationProjectContainer>
        </ProjectContainer>
      </ContainerProjects>
    </>
  );
}
