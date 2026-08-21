export default function Community() {
  return (
    <section id="community" className="community">

      <div className="community-container">

        <span className="community-kicker">
          THE CITY IS WAITING
        </span>

        <h2>
          JOIN THE STREET RATS
        </h2>

        <div className="community-divider"></div>

        <p>
          The city is dangerous. It’s better with a crew.
        </p>

        <p>
          Join our community, follow the development, share your ideas,
          and be the first to hear about playtests, updates and new heists.
        </p>

        <p className="community-final">
          Choose your side of the city. Join us on Discord or follow
          Street Rats on X.
        </p>

        <div className="community-buttons">

          <a
            href="https://discord.gg/78hsD7jwnY"
            target="_blank"
            rel="noreferrer"
            className="community-btn gold"
          >
            JOIN DISCORD
          </a>

          <a
            href="https://x.com/toonsquadstudio?s=11"
            target="_blank"
            rel="noreferrer"
            className="community-btn outline"
          >
            FOLLOW ON X
          </a>

        </div>

      </div>

    </section>
  );
}