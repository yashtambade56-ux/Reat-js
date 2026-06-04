export default function Projects() {
  return (
    <section className="section" id="projects">
      <h2>Projects</h2>

      <div className="projects">
        <div className="project-card">
          <h3>Portfolio Website</h3>

          <p>
            A modern portfolio website built using React and TypeScript.
          </p>

          <div className="project-links">
            <a href="/">Live</a>
            <a href="/">GitHub</a>
          </div>
        </div>

        <div className="project-card">
          <h3>Spotify Clone</h3>

          <p>
            Responsive streaming UI with modern design.
          </p>

          <div className="project-links">
            <a href="/">Live</a>
            <a href="/">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
}