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
import Projects from "./pages/Projects"
import Sidebar from "./components/Sidebar"
import { motion } from "framer-motion"

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
      if (window.scrollY !== 0) setIsTopOfPage(false)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="App bg-black-100">
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

        <Hero />
      </div>

      <motion.div
        margin="200px 0 -1500px  0"
        amount="all"
        onViewportEnter={() => setSelectedPage("about")}
      >
        <About />
      </motion.div>
      <motion.div
        margin="0 0 200px 0"
        amount="all"
        onViewportEnter={() => setSelectedPage("experience")}
      >
        <Experience />
      </motion.div>

      <motion.div
        margin="0 0 -200px 0"
        amount="all"
        onViewportEnter={() => setSelectedPage("projects")}
      >
        <Projects />
      </motion.div>

      <motion.div
        margin="0 0 -200px 0"
        amount="all"
        onViewportEnter={() => setSelectedPage("journey")}
      >
        <Journey />
      </motion.div>

      <motion.div
        margin="0 0 -200px 0"
        amount="all"
        onViewportEnter={() => setSelectedPage("contact")}
      >
        <Contact />
      </motion.div>

      <Footer />
    </div>
  )
}

export default App
