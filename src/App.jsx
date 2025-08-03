import './App.css'
import About from './components/About'
import Header from './components/Header'
import Overview from './components/Overview'
import Resume from './components/Resume'
import Skills from './components/Skills'

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
        {/* Add your Projects component here when you create it */}
      </div>

      {/* Experience Section */}
      <div id="experience">
        {/* Add your Experience component here when you create it */}
      </div>

      {/* Contact Section */}
      <div id="contact">
        {/* Add your Contact component here when you create it */}
      </div>
    </>
  )
}

export default App;
