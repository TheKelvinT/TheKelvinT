import React from "react"
import About from "../sections/About"
import Contact from "../sections/Contact"
import Experience from "../sections/Experience"
import Journey from "../sections/Journey"
import Projects from "../sections/Projects"
import Hero from "../sections/Hero"

const HomePage = () => {
  return (
    <div>
      <Hero />
      <About />
      <Experience />
      <Projects />
      {/* <Journey /> */}
      <Contact />
    </div>
  )
}

export default HomePage
