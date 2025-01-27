import "./Projects.css";

export default function Projects() {
  return (
    <section className="Projects-container">
      <div className="Project-con" id="Lavenda">
        <img className="ImgProject" src="public/Lavenda.png" alt="Lavenda" />
        <div className="Information-project">
          <h1 className="title-project">
            Project 1 <br />
            Lavenda-Art
          </h1>
          <p className="paragraph-project">
            Prosjekte er en konseptbutikk på nett designet i Figma. Siden er
            laget med tanke på salg av lavendelprodukter. Designet har
            harmoniske farger, brukervennlig navigasjon og en moderne struktur
            som fremhever den naturlige karakteren til produktene.
          </p>
          <div className="Icons-container">
            <img className="Icons" src="public/iconFigma.png" alt="Figma" />

            <div className="Links-containerIcons">
              <a href="https://www.figma.com/design/C0ZEPPAKgMSvHtZ3RHsjcN/Assignment-4%3A-Adding-a-Carousel-to-our-site?node-id=0-1&t=XANvlzWFNnBc32YS-1">
                <img className="Icons" src="public/iconFigma.png" alt="Figma" />
              </a>
              <a href="https://www.figma.com/proto/C0ZEPPAKgMSvHtZ3RHsjcN/Assignment-4%3A-Adding-a-Carousel-to-our-site?node-id=1-144&t=x4vijPfQ1caeBFYa-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1">
                <img
                  className="Icons"
                  src="public/iconLivePage.png"
                  alt="LivePage"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="Project-con" id="Countries">
        <img className="ImgProject" src="public/MapApi.png" alt="Countries" />
        <div className="Information-project">
          <h1 className="title-project">
            Project 2 <br />
            Countries - API
          </h1>
          <p className="paragraph-project">
            Prosjektet er en app laget med JavaScript som bruker data fra et
            API. Den lar brukere se informasjon om land, som flagg, befolkning
            og regioner, med responsivt design i HTML og CSS.
          </p>
          <div className="Icons-container">
            <div className="Icons-container-tools">
              <img className="Icons" src="public/iconJS.png" alt="JS" />
              <img className="Icons" src="public/iconHTML.png" alt="HTML" />
              <img className="Icons" src="public/iconCSS.png" alt="CSS" />
            </div>
            <div className="Links-containerIcons">
              <a href="https://github.com/Malgorzata-b/Oppgave-API-">
                <img
                  className="Icons GitHubIcon"
                  src="public/iconGitHub.png"
                  alt="GitHub"
                />
              </a>
              <a href="https://malgorzata-b.github.io/Oppgave-API-/">
                <img
                  className="Icons"
                  src="public/iconLivePage.png"
                  alt="LivePage"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="Project-con" id="Ønskelister">
        <img
          className="ImgProject"
          src="public/ReactJule.png"
          alt="Ønskelister"
        />
        <div className="Information-project">
          <h1 className="title-project">
            Project 3 <br /> Ønskelister
          </h1>
          <p className="paragraph-project">
            Dette prosjektet er en app laget med React. Den lar brukere lage og
            organisere ønskelister. HTML og CSS er brukt for å lage et
            responsivt design.
          </p>
          <div className="Icons-container">
            <div className="Icons-container-tools">
              <img className="Icons" src="public/iconReact.png" alt="React" />
              <img className="Icons" src="public/iconHTML.png" alt="HTML" />
              <img className="Icons" src="public/iconCSS.png" alt="CSS" />
            </div>
            <div className="Links-containerIcons">
              <a href="https://github.com/Malgorzata-b/Jule-React">
                <img
                  className="Icons GitHubIcon"
                  src="public/iconGitHub.png"
                  alt="GitHub"
                />
              </a>
              <a href="https://malgorzata-b.github.io/Jule-React/">
                <img
                  className="Icons"
                  src="public/iconLivePage.png"
                  alt="LivePage"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="Project-con" id="MySQL-Project">
        <img className="ImgProject" src="public/SQL.png" alt="MySQL-Project" />
        <div className="Information-project">
          <h1 className="title-project">
            Project 4 <br />
            MySQL
          </h1>
          <p className="paragraph-project">
            Dette prosjektet bruker MySQL for å analysere Airbnb-data fra New
            York. Det involverer oppretting av flere tabeller og bruk av ulike
            funksjoner for databehandling.
          </p>
          <div className="Icons-container MySQLContainer">
            <img
              className="Icons MySQLIcon"
              src="public/iconMySQL.png"
              alt="MySQL"
            />
            {/* <a href="https://www.canva.com/design/DAF8o1V0x2I/QFddjj07e_9rfAqkED9vXA/edit?utm_content=DAF8o1V0x2I&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"> */}
            <a href="/public/MySQL.pdf">
              <img
                className="Icons"
                src="public/iconLivePage.png"
                alt="LivePage"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="Project-con" id="Chess">
        <img className="ImgProject" src="public/Chess.png" alt="Chess" />
        <div className="Information-project">
          <h1 className="title-project">
            Project 5 <br /> Chess
          </h1>
          <p className="paragraph-project">
            Prosjektet går ut på å lage et sjakkbrett ved hjelp av JavaScript,
            HTML og CSS. DOM-manipulasjon ble brukt. Målet var å presentere de
            grunnleggende reglene i sjakk.
          </p>
          <div className="Icons-container">
            <div className="Icons-container-tools">
              <img className="Icons" src="public/iconJS.png" alt="JS" />
              <img className="Icons" src="public/iconHTML.png" alt="HTML" />
              <img className="Icons" src="public/iconCSS.png" alt="CSS" />
            </div>
            <div className="Links-containerIcons">
              <a href="https://github.com/Malgorzata-b/DOM-Manipulation-Chess">
                <img
                  className="Icons GitHubIcon"
                  src="public/iconGitHub.png"
                  alt="GitHub"
                />
              </a>
              <a href="https://malgorzata-b.github.io/DOM-Manipulation-Chess/">
                <img
                  className="Icons"
                  src="public/iconLivePage.png"
                  alt="LivePage"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
