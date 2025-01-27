import "./Header.css";

export default function Header() {
  return (
    <>
      <div className="Button-container">
        <button id="Button-header">
          <a href="https://github.com/Malgorzata-b">GitHub</a>
        </button>
        <button id="Button-header">
          <a href="/public/CV-M.Bugajska.pdf">CV</a>
        </button>
      </div>
      <img className="img-dots" src="/public/dots.png" alt="Dots" />
      <div className="Welcome-container">
        <h1 id="Title">Velkommen</h1>
        <div id="Name">
          <p>Jeg heter</p>
          <p>Malgorzata Bugajska</p>
          <p>Fullstack</p>
        </div>
      </div>
    </>
  );
}
