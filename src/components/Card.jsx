import "../styles/Card.css";
function Card({ title, description, icon, link, techStack }) {
  return (
    <div className="project-card">
      <div className="project-icon">{icon}</div>
      <h3 className="project-name">{title}</h3>
      <p className="project-description">{description}</p>
      {techStack && (
        <div className="project-tech-stack">
          <h4 className="tech-stack-title">Tech Stack:</h4>
          <div className="tech-stack-list">
            {techStack.map((tech, index) => (
              <span key={index} className="tech-badge">{tech}</span>
            ))}
          </div>
        </div>
      )}
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          View Project
        </a>
      )}
    </div>
  );
}

export default Card;