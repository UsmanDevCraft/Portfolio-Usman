import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Work from './components/Work'
import Skills from './components/Skills'
import Aboutme from './components/Aboutme'
import Hireme from './components/Hireme'
import Blog from './components/Blog'

const App = () => {
  return (
    <div>
      <Navbar />
      <section id='home'>
        <Home />
      </section>
      <section id='work'>
        <Work />
      </section>
      <section id='skills'>
        <Skills />
      </section>
      <section id='aboutme'>
        <Aboutme />
      </section>
      <section id='blog'>
        <Blog />
      </section>
      <section id='hireme'>
        <Hireme />
      </section>
    </div>
  )
}

export default App
