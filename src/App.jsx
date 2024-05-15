import { useEffect, useState } from "react"

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./layout/Layout"
import HomePage from "./pages/HomePage"
import ProjectDetail from "./pages/ProjectDetail"
function App() {
  const [selectedPage, setSelectedPage] = useState("home")
  const [isTopOfPage, setIsTopOfPage] = useState(true)

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY === 0) {
  //       setIsTopOfPage(true)
  //       setSelectedPage("home")
  //     }
  //     if (window.scrollY < 100) setIsTopOfPage(false)
  //   }

  //   const sections = [
  //     { id: "home", elem: document.querySelector("#home") },
  //     { id: "about", elem: document.querySelector("#about") },
  //     { id: "experience", elem: document.querySelector("#experience") },
  //     { id: "projects", elem: document.querySelector("#projects") },
  //     { id: "journey", elem: document.querySelector("#journey") },
  //     { id: "contact", elem: document.querySelector("#contact") },
  //   ]

  //   let observer

  //   if (window) {
  //     observer = new IntersectionObserver(
  //       (entries) => {
  //         entries.forEach((entry) => {
  //           if (entry.isIntersecting) {
  //             setSelectedPage(
  //               sections.find((section) => section.elem === entry.target).id
  //             )
  //           }
  //         })
  //       },
  //       { threshold: 0.1 }
  //     )

  //     sections.forEach((section) => {
  //       console.log(section)
  //       observer.observe(section.elem)
  //     })
  //   }

  //   window.addEventListener("scroll", handleScroll)

  //   // Reset scroll position on component mount and unmount
  //   window.scrollTo(0, 0)

  //   const handleBeforeUnload = () => {
  //     window.scrollTo(0, 0)
  //   }

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll)
  //     if (observer) observer.disconnect()
  //     window.removeEventListener("beforeunload", handleBeforeUnload)
  //   }
  // }, [])
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true)
        setSelectedPage("home")
      }
      if (window.scrollY > 100) setIsTopOfPage(false)
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
        { threshold: 0.15 }
      )

      sections.forEach((section) => {
        if (section.elem) {
          observer.observe(section.elem)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)

    // Reset scroll position on component mount
    window.scrollTo(0, 0)

    const handleBeforeUnload = () => {
      window.scrollTo(0, 0)
    }

    window.addEventListener("beforeunload", handleBeforeUnload)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (observer) observer.disconnect()
      window.removeEventListener("beforeunload", handleBeforeUnload)
    }
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <Layout
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          }
        >
          <Route path="/" element={<HomePage />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
