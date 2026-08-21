import logo from "../assets/logo.png";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>

      <div className="hero-content">

        <img
          src={logo}
          alt="Street Rats"
          className="hero-logo"
        />

        <p className="hero-subtitle">
          RULE THE STREETS.<br />
          BUILD YOUR GANG.<br />
          SURVIVE.
        </p>

        <div className="release-info">
          <div className="coming-soon">COMING SOON</div>
          <div className="release-date">RELEASE DATE: TBA</div>
        </div>

        <div className="hero-buttons">

          <a href="#" className="btn gold">
            PLAY NOW
          </a>

          <a
            href="https://discord.gg/78hsD7jwnY"
            className="btn outline"
            target="_blank"
            rel="noopener noreferrer"
          >
            JOIN DISCORD
          </a>

        </div>

      </div>
    </section>
  );
}