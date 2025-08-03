import './App.css'
import About from './components/About'
import Header from './components/Header'
import Overview from './components/Overview'
import Resume from './components/Resume'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'

function App() {
  return (
    <>
      {/* Header */}
      <Header />

      {/* About Section */}
      <div id="about">
        <About />
      </div>

      {/* Overview Section - Personal Details */}
      <div id="overview">
        <Overview />
      </div>

      {/* Resume Section */}
      <div id="resume">
        <Resume />
      </div>

      {/* Skills Section */}
      <div id="skills">
        <Skills />
      </div>

      {/* Projects Section */}
      <div id="projects">
        <Projects />
      </div>

      {/* Experience Section */}
      <div id="experience">
        <Experience />
      </div>

      {/* Contact Section */}
      <div id="contact">
        <Contact />
      </div>
    </>
  )
}

export default App;
