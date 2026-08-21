export default function Navbar() {
  return (
    <header className="navbar">

      <a href="#" className="nav-logo">
        <img
          src="/R.png"
          alt="Street Rats"
          className="nav-logo-image"
        />
      </a>

      <nav className="nav-links">
        <a href="#about">About</a>
        <a href="#gallery">Gallery</a>
        <a href="#community">Community</a>
      </nav>

      <a
        href="https://discord.gg/78hsD7jwnY"
        className="discord-btn"
        target="_blank"
        rel="noreferrer"
      >
        Discord
      </a>

    </header>
  );
}