import "../styles/Resume.css";
function Resume() {
  return (
    <div className="resume">
      <h2 className="title-resume">Resume</h2>
      <p className="content-resume">
        View my professional experience, education, and skills in detail.
      </p>
      <p className="resume-highlights">
        📌 <strong>Full Stack Developer</strong> | 📌 <strong>React Specialist</strong> | 📌 <strong>Python Enthusiast</strong>
      </p>
      
      <div className="resume-actions">
        <a 
          href="/Likhila Vydana Resume.pdf" 
          className="btn-resume btn-primary" 
          download
          aria-label="Download resume as PDF"
        >
          📄 Download Resume
        </a>
        <a 
          href="/Likhila Vydana Resume.pdf" 
          className="btn-resume btn-secondary" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="View resume online"
        >
          👁️ View Online
        </a>
      </div>
      
      <div className="resume-stats">
        <div className="stat-item">
          <span className="stat-number">2+</span>
          <span className="stat-label">Years Learning</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">10+</span>
          <span className="stat-label">Technologies</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">5+</span>
          <span className="stat-label">Projects</span>
        </div>
      </div>
    </div>
  );
}

export default Resume;
