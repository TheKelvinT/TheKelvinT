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
import DesktopCard from "../components/DesktopCard"

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
        <div className="h-[600vh] relative" ref={ref}>
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
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -24 },
          visible: { opacity: 1, x: 0 },
        }}
        className="sm:hidden mb-6"
        style={{
          backgroundImage: `url(${nota})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="h-full w-full relative border-dark-gray border-[0.5px] p-6 bg-black-70 bg-opacity-70">
          <div className=" text-base ">
            <p className=" text-sm font-spacemono mb-1 text-primary">
              Freelance
            </p>
            <h3 className=" font-bold text-2xl  text-gray-50 mb-6">
              NOTA Cafe Website
            </h3>
            <div className="  mb-6 space-y-2">
              <p className="italic text-xs">Official Launch In Apr 2023</p>
              <p>
                Cafe with great food and top notch customer service deserve a
                website with high quality customer experience.
              </p>
              <p>
                Nota Cafe Website uses technologies such as Next.JS for SEO
                enhancement and navigation through different pages such as Menu,
                Career, Blog and Reservation{" "}
              </p>
            </div>
            <hr className="pt-6 border-dark-gray border-t-[0.5px] " />

            <ul className="flex gap-x-6 gap-y-4 flex-wrap text-xs font-spacemono whitespace-nowrap mb-6">
              <li>Next.Js</li>
              <li>TypeScript</li>
              <li>Sanity</li>
              <li>TailwindCSS</li>
            </ul>

            <div className="flex space-x-5 item-center">
              <a href="" className="text-end">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 0C3.58267 0 0 3.582 0 8C0 11.5347 2.292 14.5333 5.47133 15.5913C5.87067 15.6653 6 15.4173 6 15.2067V13.7173C3.77467 14.2013 3.31133 12.7733 3.31133 12.7733C2.94733 11.8487 2.42267 11.6027 2.42267 11.6027C1.69667 11.106 2.478 11.1167 2.478 11.1167C3.28133 11.1727 3.704 11.9413 3.704 11.9413C4.41733 13.164 5.57533 12.8107 6.032 12.606C6.10333 12.0893 6.31067 11.736 6.54 11.5367C4.76333 11.3333 2.89533 10.6473 2.89533 7.58267C2.89533 6.70867 3.208 5.99533 3.71933 5.43533C3.63667 5.23333 3.36267 4.41933 3.79733 3.318C3.79733 3.318 4.46933 3.10333 5.998 4.138C6.636 3.96067 7.32 3.872 8 3.86867C8.68 3.872 9.36467 3.96067 10.004 4.138C11.5313 3.10333 12.202 3.318 12.202 3.318C12.6373 4.42 12.3633 5.234 12.2807 5.43533C12.794 5.99533 13.104 6.70933 13.104 7.58267C13.104 10.6553 11.2327 11.332 9.45133 11.53C9.738 11.778 10 12.2647 10 13.0113V15.2067C10 15.4193 10.128 15.6693 10.534 15.5907C13.7107 14.5313 16 11.5333 16 8C16 3.582 12.418 0 8 0Z"
                    fill="#C6D1F1"
                  />
                </svg>
              </a>
              <a href="">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.04995 13.3C1.67495 13.3 1.35635 13.1686 1.09415 12.9058C0.831351 12.6436 0.699951 12.325 0.699951 11.95V2.04995C0.699951 1.67495 0.831351 1.35635 1.09415 1.09415C1.35635 0.831351 1.67495 0.699951 2.04995 0.699951H6.99995V2.04995H2.04995V11.95H11.95V6.99995H13.3V11.95C13.3 12.325 13.1686 12.6436 12.9058 12.9058C12.6436 13.1686 12.325 13.3 11.95 13.3H2.04995ZM5.25575 9.69995L4.29995 8.74415L10.9942 2.04995H8.79995V0.699951H13.3V5.19995H11.95V3.00575L5.25575 9.69995Z"
                    fill="#C6D1F1"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 24 },
          visible: { opacity: 1, x: 0 },
        }}
        className="sm:hidden mb-6"
        style={{
          backgroundImage: `url(${teckhong})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="h-full w-full relative border-dark-gray border-[0.5px] p-6 bg-black-70 bg-opacity-80">
          <div className=" text-base ">
            <p className=" text-sm font-spacemono mb-1 text-primary">
              Freelance
            </p>
            <h3 className=" font-bold text-2xl  text-gray-50 mb-6">
              E-Commerce Website
            </h3>
            <div className="  mb-6 space-y-2">
              <p>
                Built a fully function E-commerce website for{" "}
                <span className="font-bold">Teck Hong Cold Storage</span>, a
                locally operated Fresh Mart at Sri Aman, Sarawak.{" "}
              </p>
              <p>
                This project is built with the driving force to lead the digital
                initiative within Sri Aman and with customer experience as the
                main priority.{" "}
              </p>
            </div>
            <hr className="pt-6 border-dark-gray border-t-[0.5px] " />

            <ul className="flex gap-x-6 gap-y-4 flex-wrap text-xs font-spacemono whitespace-nowrap mb-6">
              <li>React</li>
              <li>Redux</li>
              <li>JavaScript</li>
              <li>Strapi</li>
              <li>TailwindCSS</li>
            </ul>

            <div className="flex space-x-5 item-center">
              <a href="" className="text-end">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 0C3.58267 0 0 3.582 0 8C0 11.5347 2.292 14.5333 5.47133 15.5913C5.87067 15.6653 6 15.4173 6 15.2067V13.7173C3.77467 14.2013 3.31133 12.7733 3.31133 12.7733C2.94733 11.8487 2.42267 11.6027 2.42267 11.6027C1.69667 11.106 2.478 11.1167 2.478 11.1167C3.28133 11.1727 3.704 11.9413 3.704 11.9413C4.41733 13.164 5.57533 12.8107 6.032 12.606C6.10333 12.0893 6.31067 11.736 6.54 11.5367C4.76333 11.3333 2.89533 10.6473 2.89533 7.58267C2.89533 6.70867 3.208 5.99533 3.71933 5.43533C3.63667 5.23333 3.36267 4.41933 3.79733 3.318C3.79733 3.318 4.46933 3.10333 5.998 4.138C6.636 3.96067 7.32 3.872 8 3.86867C8.68 3.872 9.36467 3.96067 10.004 4.138C11.5313 3.10333 12.202 3.318 12.202 3.318C12.6373 4.42 12.3633 5.234 12.2807 5.43533C12.794 5.99533 13.104 6.70933 13.104 7.58267C13.104 10.6553 11.2327 11.332 9.45133 11.53C9.738 11.778 10 12.2647 10 13.0113V15.2067C10 15.4193 10.128 15.6693 10.534 15.5907C13.7107 14.5313 16 11.5333 16 8C16 3.582 12.418 0 8 0Z"
                    fill="#C6D1F1"
                  />
                </svg>
              </a>
              <a href="https://teckhongcoldstorage.com/" target="_blank">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.04995 13.3C1.67495 13.3 1.35635 13.1686 1.09415 12.9058C0.831351 12.6436 0.699951 12.325 0.699951 11.95V2.04995C0.699951 1.67495 0.831351 1.35635 1.09415 1.09415C1.35635 0.831351 1.67495 0.699951 2.04995 0.699951H6.99995V2.04995H2.04995V11.95H11.95V6.99995H13.3V11.95C13.3 12.325 13.1686 12.6436 12.9058 12.9058C12.6436 13.1686 12.325 13.3 11.95 13.3H2.04995ZM5.25575 9.69995L4.29995 8.74415L10.9942 2.04995H8.79995V0.699951H13.3V5.19995H11.95V3.00575L5.25575 9.69995Z"
                    fill="#C6D1F1"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -24 },
          visible: { opacity: 1, x: 0 },
        }}
        className="sm:hidden mb-6"
        style={{
          backgroundImage: `url(${AppleRedesign})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="h-full w-full relative border-dark-gray border-[0.5px] p-6 bg-black-70 bg-opacity-90">
          <div className=" text-base ">
            <p className=" text-sm font-spacemono mb-1 text-primary">
              Exercise
            </p>
            <h3 className=" font-bold text-2xl  text-gray-50 mb-6">
              Clone Apple Website
            </h3>
            <div className="  mb-6 ">
              <p>
                The main objective of this exercise is to enhance the following
                skillsets such as Typescript, Redux Toolkit, Stripe Payment API,
                Sanity Studio as the headless CMS(backend) and Next.JS Auth .
              </p>
            </div>
            <hr className="pt-6 border-dark-gray border-t-[0.5px] " />

            <ul className="flex gap-x-6 gap-y-4 flex-wrap text-xs font-spacemono whitespace-nowrap mb-6">
              <li>NextJS</li>
              <li>Typescript</li>
              <li>Sanity</li>
              <li>Stripe</li>
              <li>Redux</li>
            </ul>

            <div className="flex space-x-5 item-center">
              <a
                href="https://github.com/TheKelvinT/Apple-Redesign"
                target="_blank"
                className="text-end"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 0C3.58267 0 0 3.582 0 8C0 11.5347 2.292 14.5333 5.47133 15.5913C5.87067 15.6653 6 15.4173 6 15.2067V13.7173C3.77467 14.2013 3.31133 12.7733 3.31133 12.7733C2.94733 11.8487 2.42267 11.6027 2.42267 11.6027C1.69667 11.106 2.478 11.1167 2.478 11.1167C3.28133 11.1727 3.704 11.9413 3.704 11.9413C4.41733 13.164 5.57533 12.8107 6.032 12.606C6.10333 12.0893 6.31067 11.736 6.54 11.5367C4.76333 11.3333 2.89533 10.6473 2.89533 7.58267C2.89533 6.70867 3.208 5.99533 3.71933 5.43533C3.63667 5.23333 3.36267 4.41933 3.79733 3.318C3.79733 3.318 4.46933 3.10333 5.998 4.138C6.636 3.96067 7.32 3.872 8 3.86867C8.68 3.872 9.36467 3.96067 10.004 4.138C11.5313 3.10333 12.202 3.318 12.202 3.318C12.6373 4.42 12.3633 5.234 12.2807 5.43533C12.794 5.99533 13.104 6.70933 13.104 7.58267C13.104 10.6553 11.2327 11.332 9.45133 11.53C9.738 11.778 10 12.2647 10 13.0113V15.2067C10 15.4193 10.128 15.6693 10.534 15.5907C13.7107 14.5313 16 11.5333 16 8C16 3.582 12.418 0 8 0Z"
                    fill="#C6D1F1"
                  />
                </svg>
              </a>
              <a href="https://apple-redesign-two.vercel.app/" target="_blank">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.04995 13.3C1.67495 13.3 1.35635 13.1686 1.09415 12.9058C0.831351 12.6436 0.699951 12.325 0.699951 11.95V2.04995C0.699951 1.67495 0.831351 1.35635 1.09415 1.09415C1.35635 0.831351 1.67495 0.699951 2.04995 0.699951H6.99995V2.04995H2.04995V11.95H11.95V6.99995H13.3V11.95C13.3 12.325 13.1686 12.6436 12.9058 12.9058C12.6436 13.1686 12.325 13.3 11.95 13.3H2.04995ZM5.25575 9.69995L4.29995 8.74415L10.9942 2.04995H8.79995V0.699951H13.3V5.19995H11.95V3.00575L5.25575 9.69995Z"
                    fill="#C6D1F1"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 24 },
          visible: { opacity: 1, x: 0 },
        }}
        className="sm:hidden mb-6"
        style={{
          backgroundImage: `url(${KyzenBina})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="h-full w-full relative border-dark-gray border-[0.5px] p-6 bg-black-70 bg-opacity-80">
          <div className=" text-base ">
            <p className=" text-sm font-spacemono mb-1 text-primary">
              Freelance
            </p>
            <h3 className=" font-bold text-2xl  text-gray-50 mb-6">
              Interior Design Website
            </h3>
            <div className="  mb-6 space-y-2">
              <p>
                My first ever freelance project. A simple landing page for the
                Kyzen Bina to showcase some of the past projects.
              </p>
            </div>
            <hr className="pt-6 border-dark-gray border-t-[0.5px] " />

            <ul className="flex gap-x-6 gap-y-4 flex-wrap text-xs font-spacemono whitespace-nowrap mb-6">
              <li>Vanilla JS</li>
              <li>CSS 3</li>
              <li>HTML 5</li>
              <li>Bootstrap</li>
              <li>Figma</li>
            </ul>

            <div className="flex space-x-5 item-center">
              <a
                href="https://github.com/TheKelvinT/kyzen-v2"
                target="_blank"
                className="text-end"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 0C3.58267 0 0 3.582 0 8C0 11.5347 2.292 14.5333 5.47133 15.5913C5.87067 15.6653 6 15.4173 6 15.2067V13.7173C3.77467 14.2013 3.31133 12.7733 3.31133 12.7733C2.94733 11.8487 2.42267 11.6027 2.42267 11.6027C1.69667 11.106 2.478 11.1167 2.478 11.1167C3.28133 11.1727 3.704 11.9413 3.704 11.9413C4.41733 13.164 5.57533 12.8107 6.032 12.606C6.10333 12.0893 6.31067 11.736 6.54 11.5367C4.76333 11.3333 2.89533 10.6473 2.89533 7.58267C2.89533 6.70867 3.208 5.99533 3.71933 5.43533C3.63667 5.23333 3.36267 4.41933 3.79733 3.318C3.79733 3.318 4.46933 3.10333 5.998 4.138C6.636 3.96067 7.32 3.872 8 3.86867C8.68 3.872 9.36467 3.96067 10.004 4.138C11.5313 3.10333 12.202 3.318 12.202 3.318C12.6373 4.42 12.3633 5.234 12.2807 5.43533C12.794 5.99533 13.104 6.70933 13.104 7.58267C13.104 10.6553 11.2327 11.332 9.45133 11.53C9.738 11.778 10 12.2647 10 13.0113V15.2067C10 15.4193 10.128 15.6693 10.534 15.5907C13.7107 14.5313 16 11.5333 16 8C16 3.582 12.418 0 8 0Z"
                    fill="#C6D1F1"
                  />
                </svg>
              </a>
              <a href="https://kyzenbina.com.my/" target="_blank">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.04995 13.3C1.67495 13.3 1.35635 13.1686 1.09415 12.9058C0.831351 12.6436 0.699951 12.325 0.699951 11.95V2.04995C0.699951 1.67495 0.831351 1.35635 1.09415 1.09415C1.35635 0.831351 1.67495 0.699951 2.04995 0.699951H6.99995V2.04995H2.04995V11.95H11.95V6.99995H13.3V11.95C13.3 12.325 13.1686 12.6436 12.9058 12.9058C12.6436 13.1686 12.325 13.3 11.95 13.3H2.04995ZM5.25575 9.69995L4.29995 8.74415L10.9942 2.04995H8.79995V0.699951H13.3V5.19995H11.95V3.00575L5.25575 9.69995Z"
                    fill="#C6D1F1"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Projects
