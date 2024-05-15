import React from "react"
import { Outlet } from "react-router-dom"
import Navbar from "../sections/Navbar"
import Sidebar from "../components/Sidebar"
import Socialbar from "../components/SocialBar"
import Footer from "../sections/Footer"
const navlinks = [
  { id: "00", name: "Home", link: "home" },
  { id: "01", name: "About", link: "about" },
  { id: "02", name: "Experience", link: "experience" },
  { id: "03", name: "Projects", link: "projects" },
  //   { id: "04", name: "Journey", link: "journey" },
  { id: "04", name: "Contact", link: "contact" },
]
const Layout = ({ selectedPage, setSelectedPage }) => {
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
      </div>
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
