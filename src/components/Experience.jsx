import "../styles/Experience.css";
import innovortexCert from "../assets/certifications/Innovortex 2.0 CoP.png";
import ideaGenCert from "../assets/certifications/IdeaGen CoP.png";
import gdscCert from "../assets/certifications/GDSC CoA.png";
import agentAICert from "../assets/certifications/Agent AI.png";
import leanInCert from "../assets/certifications/Lean In CoR.png";
import gdgcCert from "../assets/certifications/GDGC CoA.png";

function Experience() {
  return (
    <section id="experience" className="section">
      <h2 className="experience-title">Experience</h2>
      <p className="experience-description">During my college, I've volunteered to take part in many societies, programs, cohorts and internships.</p>
      <p className="experience-description">You can view them here along with the certifications:</p>
      
      <section className="scroll-section">
        <br />
        <div className="scroll-container">

          {/* Societies Section */}
          <div className="card">
            <h3>Societies</h3>
            <p>I played the following roles:</p>
            <ul className="card-list">
              <li>IEEE Event Management Junior Executive Coordinator (2024-25)</li>
              <li>Technoliterati Public Relations Coordinator (2024-25)</li>
            </ul>
          </div>
          
          {/* Hackathons Section */}
          <div className="card">
            <h3>Hackathons</h3>
            <p>I participated in the following hackathons:</p>
            <ul className="card-list">
              <li><a href={innovortexCert} target="_blank" rel="noopener noreferrer">Innovortex 2.0 Hackathon</a></li>
              <li><a href={ideaGenCert} target="_blank" rel="noopener noreferrer">IdeaGen Hackathon</a></li>
            </ul>
          </div>

          {/* Programs Section */}
          <div className="card">
            <h3>Programs</h3>
            <p>I took part in the following programs:</p>
            <ul className="card-list">
              <li><a href={gdscCert} target="_blank" rel="noopener noreferrer">GDSC - Gen AI 2024</a></li>
              <li><a href={agentAICert} target="_blank" rel="noopener noreferrer">Agent AI</a></li>
            </ul>
          </div>

          {/* Cohorts Section */}
          <div className="card">
            <h3>Cohorts</h3>
            <p>I was a mentee in the following cohorts:</p>
            <ul className="card-list">
              <li><a href={leanInCert} target="_blank" rel="noopener noreferrer">Lean In - Basic Coding & DSA (C++)</a></li>
              <li><a href={gdgcCert} target="_blank" rel="noopener noreferrer">Google Developer Groups on Campus - Web Development</a></li>
            </ul>
          </div>
          
          {/* Open Sourcing Section */}
          <div className="card">
            <h3>Open Sourcing</h3>
            <p>I did Open Sourcing in the following:</p>
            <ul className="card-list">
              <li><a href={gdscCert} target="_blank" rel="noopener noreferrer">GDSC - Gen AI 2024</a></li>
              <li><a href={agentAICert} target="_blank" rel="noopener noreferrer">Agent AI</a></li>
            </ul>
          </div>
        
          {/* Internships Section */}
          <div className="card">
            <h3>Internships</h3>
            <p>I did internships at the following communities in various domains:</p>
            <ul className="card-list">
              <li><a href="#" target="_blank" rel="noopener noreferrer">NA</a></li>
            </ul>
          </div>
        </div> 
      </section>
    </section>
  );
}

export default Experience;