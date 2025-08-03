import "../styles/Projects.css";
import Card from "./Card";
import myhealthmateIcon from "../assets/projects/myhealthmate.png";

function Projects() {
  return (
    <section className="projects">
      <h2 className="projects-title">Projects</h2>
      <p className="projects-description">Here are some of my recent projects:</p>
      <div className="projects-list">
        <Card
          title="MyHealthMate"
          description="A web-based personal health record and appointment management portal. Features secure authentication, digital medical records, appointment booking, and health reminders."
          icon={<img src={myhealthmateIcon} alt="MyHealthMate Icon" />}
          techStack={["HTML", "CSS", "Bootstrap", "JavaScript", "Firebase"]}
          link="https://likhilavyd.github.io/HackOrbit_HackIt/"
        />
      </div>
    </section>
  );
}

export default Projects;