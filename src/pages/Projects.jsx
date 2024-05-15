import React from "react"
import HeaderText from "../components/HeaderText"
import PageIndex from "../components/PageIndex"
import site1 from "../assets/site1.png"
import teckhong from "../assets/teck-hong.png"
import nota from "../assets/nota-website.png"
import KyzenBina from "../assets/kyzen-bina.png"
import AppleRedesign from "../assets/apple-redesign.png"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import DesktopCard from "../components/projects/DesktopCard"
import MobileCard from "../components/projects/MobileCard"

const items = [
  {
    id: 1,
    job: "Freelance",
    title: "NOTA Restaurant & Cafe Website",
    desc1:
      "Cafe with great food and top notch customer service deserve a website with high quality customer experience.",
    desc2:
      "Nota Cafe Website uses technologies such as Next.JS for SEO enhancement and navigation through different pages such as Menu, Career, Blog and Reservation",
    img: nota,
    link: "https://www.notakl.com",
    technologies: [
      "Next.js",
      "Typescript",
      "Sanity",
      "TailwindCSS",
      "Ant Design",
    ],
  },
  {
    id: 2,
    job: "Freelance",
    title: "NOTA Restaurant & Cafe Website",
    desc1:
      "Cafe with great food and top notch customer service deserve a website with high quality customer experience.",
    desc2:
      "Nota Cafe Website uses technologies such as Next.JS for SEO enhancement and navigation through different pages such as Menu, Career, Blog and Reservation",
    img: nota,
    link: "https://www.notakl.com",
    technologies: [
      "Next.js",
      "Typescript",
      "Sanity",
      "TailwindCSS",
      "Ant Design",
    ],
  },
  {
    id: 3,
    job: "Freelance",
    title: "NOTA Restaurant & Cafe Website",
    desc1:
      "Cafe with great food and top notch customer service deserve a website with high quality customer experience.",
    desc2:
      "Nota Cafe Website uses technologies such as Next.JS for SEO enhancement and navigation through different pages such as Menu, Career, Blog and Reservation",
    img: nota,
    link: "https://www.notakl.com",
    technologies: [
      "Next.js",
      "Typescript",
      "Sanity",
      "TailwindCSS",
      "Ant Design",
    ],
  },
  {
    id: 4,
    job: "Freelance",
    title: "NOTA Restaurant & Cafe Website",
    desc1:
      "Cafe with great food and top notch customer service deserve a website with high quality customer experience.",
    desc2:
      "Nota Cafe Website uses technologies such as Next.JS for SEO enhancement and navigation through different pages such as Menu, Career, Blog and Reservation",
    img: nota,
    link: "https://www.notakl.com",
    technologies: [
      "Next.js",
      "Typescript",
      "Sanity",
      "TailwindCSS",
      "Ant Design",
    ],
  },
]
const Projects = () => {
  const ref = useRef()

  const { scrollYProgress } = useScroll({ target: ref })
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"])

  return (
    <section
      id="projects"
      className="py-24 xl:py-48 sm:mx-12 mx-6 md:mx-24 text-light-gray"
      // className="flex-grow flex items-start lg:w-[800px]  xl:w-[980px]  py-24 xl:py-48 mx-6 sm:mx-12 md:mx-24  lg:mx-auto  flex-col sm:justify-start text-light-gray  "
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0 },
        }}
        className="mb-10 flex  w-full justify-center  lg:w-[800px]  xl:w-[980px]    lg:mx-auto lg:flex sm:items-center sm:justify-start text-light-gray"
      >
        <PageIndex>03. </PageIndex>
        <HeaderText>What I've built</HeaderText>
        <div className="w-full border-t mt-3 border-light-gray"></div>
      </motion.div>
      {/* DESKTOP */}

      <motion.div
        className="h-full hidden sm:block"
        initial={{ y: "-200vh" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1 }}
      >
        <div className="h-[600vh] relative hidden sm:block" ref={ref}>
          <div className="sticky top-0  h-screen gap-4 items-center overflow-hidden flex">
            <motion.div style={{ x }} className="flex ">
              {items.map((item) => (
                <DesktopCard item={item} />
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* MOBILE CARDS */}
      {items.map((item) => (
        <MobileCard item={item} />
      ))}
    </section>
  )
}

export default Projects
