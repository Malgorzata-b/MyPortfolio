import "./About.css";

export default function About() {
  return (
    <section className="About-container">
      <div className="Images-Container">
        <div className="Image">
          <img className="Profil" src="public/Image4.jpg" alt="Aurora" />
        </div>
        <div class="carousel-container">
          <div className="Image-Gallery">
            <img
              className="Photo"
              id="photo-1"
              src="public/Image3.jpg"
              alt="Image3"
            />
            <img
              className="Photo"
              id="photo-2"
              src="public/Image2.jpg"
              alt="Image2"
            />
            <img
              className="Photo"
              id="photo-3"
              src="public/Image1.jpg"
              alt="Image1"
            />
          </div>
          <div class="button-container">
            <a class="button" href="#photo-1"></a>
            <a class="button" href="#photo-2"></a>
            <a class="button" href="#photo-3"></a>
          </div>
        </div>
        <div className="Competences">
          <p>Jeg Kan: </p>
          <div className="HTML">
            <img className="Icon" src="public/iconHTML.png" alt="HTML" />
            <p id="Title-competences">HTML</p>
          </div>
          <div className="CSS ">
            <img className="Icon" src="public/iconCSS.png" alt="CSS" />
            <p id="Title-competences">CSS</p>
          </div>
          <div className="FIGMA">
            <img className="Icon" src="public/iconFigma.png" alt="FIGMA" />
            <p id="Title-competences">Figma</p>
          </div>
          <div className="JS">
            <img className="Icon" src="public/iconJS.png" alt="JS" />
            <p id="Title-competences">JavaScript</p>
          </div>
          <div className="REACT">
            <img className="Icon" src="public/iconReact.png" alt="REACT" />
            <p id="Title-competences">React</p>
          </div>
          <div className="Python ">
            <img className="Icon" src="public/iconPython.png" alt="Python" />
            <p id="Title-competences">Python</p>
          </div>
          <div className="MySQL">
            <img className="Icon" src="public/iconMySQL.png" alt="MySQL" />
            <p id="Title-competences">MySQL</p>
          </div>
        </div>
      </div>
      <div className="AboutMe">
        <p className="Description">
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
        </p>
      </div>
    </section>
  );
}
