import { useState } from 'react'
import Navbar from './component/navbar'
import Hero from './component/hero'
import Contact from './component/contact'
import Footer from './component/Footer'
import Blog from './component/blog'
import Portfolio from './component/portfolio'

import './App.css'

function App() {
 

  return (
    <>
      <Navbar />
      <Hero />
      <Portfolio />
      <Blog />
      <Contact />
      <Footer />
    </>
  )
}

export default App
