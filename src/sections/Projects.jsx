import React from "react"
import HeaderText from "../components/HeaderText"
import PageIndex from "../components/PageIndex"
import site1 from "../assets/site1.png"
import teckhong from "../assets/teck-hong.png"
import erp from "../assets/erp.png"
import nota from "../assets/nota-website.png"
import ctc from "../assets/ctc.png"
import ctccms from "../assets/ctc-cms.png"
import scm from "../assets/scm.png"
import hrms from "../assets/hrms.png"
import pd from "../assets/pd.png"
import KyzenBina from "../assets/kyzen-bina.png"
import AppleRedesign from "../assets/apple-redesign.png"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import DesktopCard from "../components/projects/DesktopCard"
import MobileCard from "../components/projects/MobileCard"

const items = [
  {
    id: 1,
    job: "Business Management System",
    title: " Enterprise Resource Planning (ERP)",
    desc1:
      "Streamlines business operations with asset and task management features, secure authentication, and an intuitive admin dashboard for real-time insights and control. ",
    desc2:
      "Aims to revolutionize the construction industry by improving project oversight and resource allocation, ultimately driving increased productivity and cost savings across construction projects.",
    img: erp,
    link: "",
    technologies: [
      "React.js",
      "Typescript",
      "Redux Toolkit",
      "Vite",
      "TailwindCSS",
      "Ant Design",
    ],
  },
  {
    id: 2,
    job: "E-Commerce",
    title: "Changi Travel Circle",
    desc1:
      "Changi Airport Group's B2B program connecting global travel trade partners with Changi Airport.  Offering an array of features catering to both B2B and B2C users such as personalized favorites, convenient downloads, and efficient account management, alongside a comprehensive global search function. ",
    desc2:
      "Leveraging a fully customized CMS, content is dynamically tailored to each user's preferences and demographics, ensuring an engaging and personalized experience for all users.",
    img: ctc,
    link: "https://travelcircle.changiairport.com/",
    technologies: [
      "Nuxt.js",
      "Vue",
      "Element UI",
      "SCSS",
      "Google Tag Manager",
    ],
    actions: [
      {
        name: "View Website",
        link: "https://travelcircle.changiairport.com/",
      },
    ],
  },
  {
    id: 3,
    job: "Content Management System",
    title: "Changi Travel Circle CMS",
    desc1:
      "Equips administrators with powerful features for effective user data management while maintaining high security standards. Automated scheduling promptly eliminates expired promotions, ensuring continuous user engagement.",
    desc2:
      "A key highlight is dynamic content segmentation, delivering personalized content based on user demographics and behavior, distinguishing our CMS as a pioneer in travel industry content management.",
    img: ctccms,
    link: "",
    technologies: ["Vue.js", "Vuex", "Typescript", "Element UI", "SCSS"],
  },
  {
    id: 4,
    job: "Business Management System",
    title: "Supply Chain Management Platform",
    desc1:
      "With key features including Inventory Management, Supplier Management, Procurement, and Store Stock Management, this platform offers comprehensive tools to streamline operations and enhance efficiency.",
    desc2:
      "From tracking inventory levels to managing supplier relationships and procurement processes, this platform handles complex functionality with ease, empowering businesses to stay competitive in today's fast-paced market.",
    img: scm,
    link: "",
    technologies: ["Vue.js", "Vuex", "Typescript", "Element UI", "SCSS"],
  },
  {
    id: 5,
    job: "Human Resource Management System",
    title: "Retail HRMS System",
    desc1:
      "Comprehensive solution tailored to streamline HR processes. With features including hierarchy management, employee payslip generation, staff and shift management, duty planning, and appraisal document management, this system optimizes HR operations.",
    desc2:
      "From organizing employee hierarchies to efficiently handling payslips and appraisal documents, our platform simplifies complex HR tasks, empowering businesses to manage their workforce effectively and enhance productivity.",
    img: hrms,
    link: "",
    technologies: ["Angular", "Typescript", "Bootstrap", "Rxjs"],
  },
  {
    id: 6,
    job: "Reservation System",
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
    id: 6,
    job: "E-Commerce",
    title: "Teck Hong Cold Storage",
    desc1:
      "Built a fully function E-commerce website for Teck Hong Cold Storage, a locally operated Fresh Mart at Sri Aman, Sarawak.",
    desc2:
      "This project is built with the driving force to lead the digital initiative within Sri Aman and with customer experience as the main priority.",
    img: teckhong,
    link: "",
    technologies: ["React", "Redux", "Strapi", "TailwindCSS"],
  },
]
const Projects = () => {
  const ref = useRef()

  const { scrollYProgress } = useScroll({ target: ref })
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-90%"])

  return (
    <section
      id="projects"
      className="pt-24 xl:pt-48 sm:mx-12 mx-6 md:mx-24 text-light-gray"
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
        className="h-full hidden sm:block "
        initial={{ y: "-200vh" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1 }}
      >
        <div className="h-[1500vh] relative hidden sm:block" ref={ref}>
          <div className="sticky top-0  h-screen gap-4 items-center overflow-hidden flex">
            <motion.div style={{ x }} className="flex ">
              {items.map((item) => (
                <DesktopCard item={item} />
              ))}
              <div className="flex items-center w-96 ml-48 font-bold  text-xl  text-gray-50">
                ...and many more!
              </div>
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
