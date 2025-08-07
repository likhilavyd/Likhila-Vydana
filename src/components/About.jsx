import "../styles/About.css";
import image from "../assets/image.png";
import { useState, useEffect } from "react";

function About() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  
  const roles = [
    "Full Stack Developer",
    "React Enthusiast", 
    "Python Developer",
    "UI/UX Designer",
    "Web Developer"
  ];

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = isDeleting ? 500 : 2000;

    const timeout = setTimeout(() => {
      if (!isDeleting && currentText === currentRole) {
        // Finished typing, start deleting after pause
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && currentText === "") {
        // Finished deleting, move to next role
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        // Continue typing or deleting
        setCurrentText(
          isDeleting
            ? currentRole.substring(0, currentText.length - 1)
            : currentRole.substring(0, currentText.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentRoleIndex, roles]);

  return (
    <>
        <div className="about-container">
            {/* About Text */}
            <div className="about">
                <h2 className="title-about">About Me</h2>
                    <p className="content-about">
                        Hi, I'm <span className="highlighted-name">Likhila Vydana</span>
                    </p>
                    <div className="typing-container">
                        <span className="typing-text">
                            {currentText}
                            <span className="cursor">|</span>
                        </span>
                    </div>
                    <p className="content-about description">
                    A student and passionate web developer with a strong interest in 
                    clean UI and interactive design. I focus on building responsive, user-friendly websites that 
                    combine functionality with visual appeal. My journey began with a curiosity about how websites 
                    work behind the scenes, and it has grown into a meaningful path in front-end development. 
                    As I continue to learn and explore new technologies, I'm excited to turn creative ideas into impactful digital experiences.
                    </p>
            </div>

            {/* Image */}
            <div className="image">
                <img src={image} alt="Likhila Vydana" />
                <p className="content">Likhila Vydana</p>
            </div>
        </div>
    </>
  );
}

export default About;