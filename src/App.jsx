import { useState } from 'react'
import './App.css'
import About from './components/About'
import Header from './components/Header'

function App() {
  return (
    <>
    {/* Header */}
    <Header />

    {/* About Section */}
    <div className="About">
      <About />
    </div>
    </>
  )
}

export default App;
