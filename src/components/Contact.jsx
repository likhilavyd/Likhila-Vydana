import "../styles/Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Contact Me</h2>
      <div className="contact-content">
        <p className="contact-item">
          <span className="contact-label">Email:</span> 
          <a href="mailto:likhilavyd.work@gmail.com" target="_blank" rel="noopener noreferrer" className="contact-link">
            likhilavyd.work@gmail.com
          </a>
        </p>
        <p className="contact-item">
          <span className="contact-label">LinkedIn:</span> 
          <a href="https://www.linkedin.com/in/likhila-vydana-aab074325" rel="noopener noreferrer" target="_blank" className="contact-link">
            linkedin.com/in/likhilavydana
          </a>
        </p>
      </div>
    </section>
  );
}

export default Contact;