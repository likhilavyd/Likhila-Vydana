import "../styles/Resume.css";
function Resume() {
  return (
    <div className="resume">
      <h2 className="title-resume">Resume</h2>
      <p className="content-resume">
        You can view or download my resume using the button below:
      </p>
      <a href="/Likhila Vydana Resume.pdf" className="btn-resume" download>📄 Download Resume</a>
      <a href="/Likhila Vydana Resume.pdf" className="btn-resume" target="_blank" rel="noopener noreferrer">👁️ View Online</a>
    </div>
  );
}

export default Resume;
