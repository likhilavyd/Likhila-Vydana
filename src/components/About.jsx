import "../styles/About.css";
import image from "../assets/image.png"
function About() {
  return (
    <>
        <div className="about-container">
            {/* About Text */}
            <div className="about">
                <h2 className="title">About Me</h2>
                    <p className="content">
                    Hi, I'm Likhila Vydana
                    </p>
                    <p className="content">
                    A student and passionate web developer with a strong interest in 
                    clean UI and interactive design. I focus on building responsive, user-friendly websites that 
                    combine functionality with visual appeal. My journey began with a curiosity about how websites 
                    work behind the scenes, and it has grown into a meaningful path in front-end development. 
                    As I continue to learn and explore new technologies, I’m excited to turn creative ideas into impactful digital experiences.
                    </p>
            </div>

            {/* Image */}
            <div className="image">
                <img src={image} alt="Likhila Vydana" />
                <p className="content">Likhila Vydana</p>
            </div>
        </div>
    </>
  )
}
export default About;