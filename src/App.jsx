import { useState, useEffect } from "react"
import Socialbar from "./components/SocialBar"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Experience from "./pages/Experience"
import Footer from "./pages/Footer"
import Hero from "./pages/Hero"
import Journey from "./pages/Journey"
import Layout from "./pages/Layout"
import Navbar from "./pages/Navbar"
import Sidebar from "./components/Sidebar"
Projects
import { motion } from "framer-motion"
import Projects from "./pages/Projects"

const navlinks = [
  { id: "00", name: "Home", link: "home" },
  { id: "01", name: "About", link: "about" },
  { id: "02", name: "Experience", link: "experience" },
  { id: "03", name: "Projects", link: "projects" },
  { id: "04", name: "Journey", link: "journey" },
  { id: "05", name: "Contact", link: "contact" },
]

function App() {
  const [selectedPage, setSelectedPage] = useState("home")
  const [isTopOfPage, setIsTopOfPage] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true)
        setSelectedPage("home")
      }
      if (window.scrollY < 100) setIsTopOfPage(false)
    }

    const sections = [
      { id: "home", elem: document.querySelector("#home") },
      { id: "about", elem: document.querySelector("#about") },
      { id: "experience", elem: document.querySelector("#experience") },
      { id: "projects", elem: document.querySelector("#projects") },
      { id: "journey", elem: document.querySelector("#journey") },
      { id: "contact", elem: document.querySelector("#contact") },
    ]

    let observer

    if (window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setSelectedPage(
                sections.find((section) => section.elem === entry.target).id
              )
            }
          })
        },
        { threshold: 0.1 }
      )

      sections.forEach((section) => {
        console.log(section)
        observer.observe(section.elem)
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (observer) observer.disconnect()
    }
  }, [])

  return (
    <div className="App bg-black-100 ">
      <div className="h-screen md:h-full">
        <Navbar
          navlinks={navlinks}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <Sidebar
          navlinks={navlinks}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />

        <Socialbar />
        {/* <ScrollDownButton
      isTopOfPage={isTopOfPage}/> */}
        <Hero />
      </div>

      <About />

      <Experience />

      <Projects />

      <Journey />

      <Contact />

      <Footer />
    </div>
  )
}

export default App
