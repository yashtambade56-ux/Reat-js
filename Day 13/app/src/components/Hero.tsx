export default function Hero() {
  return (
    <section className="hero">
      <h1>
        Hi, I'm <span>Yash</span> 👋
      </h1>

      <p>
        Frontend Developer building clean and modern websites.
      </p>

      <div className="hero-buttons">
        <a href="#projects" className="btn">
          View Projects
        </a>

        <a href="#contact" className="btn secondary">
          Contact Me
        </a>
      </div>
    </section>
  );
}