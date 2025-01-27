import "./Contact.css";
export default function Contact() {
  return (
    <section className="Contact-container">
      <div className="Logo-name">
        <div id="Circle"></div>
        <p>Malgorzata Bugajska</p>
      </div>
      <div className="Info-Contact">
        <p>
          e - post: <strong>bugajska.malgorzat5@gmail.com</strong>
        </p>
        <p>
          mobiltelefon: <strong>(+47) 486 53 587</strong>
        </p>
      </div>
      <div className="Link-Button">
        {/* <button>
         Hjem
        </button> */}
        <div className="Links-Contact">
          <a href="https://github.com/Malgorzata-b">
            <img
              className="Icons GitHubIcon"
              src="public/iconGitHub.png"
              alt="GitHub"
            />
          </a>
          <a href="https://www.linkedin.com/in/malgorzata-bugajska/">
            <img
              className="Icons"
              src="public/iconLinkedin.png"
              alt="LivePage"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
