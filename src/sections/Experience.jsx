import React, { useState } from "react"
import HeaderText from "../components/HeaderText"
import PageIndex from "../components/PageIndex"
import SubArrowIcon from "../components/SubArrowIcon"
import { Tab } from "@headlessui/react"
import { easeOut, motion } from "framer-motion"
function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

const Experience = () => {
  let [categories] = useState([
    {
      id: 0,
      company: "West Point Transit",
      header: "West Point Transit",
      title: "Frontend Lead",
      location: "",
      descriptions: [
        "Design and develop responsive and mobile friendly webpages for business clients using the latest technologies out there.",
        "Utilized Figma to create website mockups and prototypes for pre-development.",
        "Provide ongoing website maintenance and support, including regular backups, security updates and bug fixes.",
      ],
    },
    {
      id: 1,
      company: "Flex Solver",
      header: "Flex Solver",
      title: "Frontend Developer",
      location: "",
      descriptions: [
        "Engineered responsive websites optimized for various devices, leveraging the latest web development technologies to enhance user experience.",
        "Collaborated with clients to implement complex business tech solutions, translating their requirements into detailed project plans for effective development and deployment.",
        "Implemented comprehensive website maintenance strategies, including regular updates, security enhancements, and proactive bug resolution to ensure continuous optimal performance.",
      ],
    },
    {
      id: 2,
      company: "Freelance",
      header: "Freelance",
      title: "Web Developer",
      location: "",
      descriptions: [
        "Design and develop responsive and mobile friendly webpages for business clients using the latest technologies out there.",
        "Utilized Figma to create website mockups and prototypes for pre-development.",
        "Provide ongoing website maintenance and support, including regular backups, security updates and bug fixes.",
        ,
      ],
    },
    {
      id: 3,
      company: "GAMUDA",
      header: "Gamuda Engineering",
      title: "Project Engineer",
      location: "",
      descriptions: [
        "Achieved up to a 30% reduction in overall package costs by implementing value engineering techniques to analyze various engineering solutions.",
        "Contributed to the project manager's efforts in preparing a master implementation roadmap, conducting risk analyses, and allocating resources, resulting in a more defined execution strategy.",
        "Utilized cutting-edge tools like MS Project and Primavera to develop highly effective Gantt Charts and Time-Location Charts, paving the way for successful project planning and execution.",
      ],
    },
    {
      id: 4,
      company: "University College London",
      header: "University College London",
      title: "MEng Civil Engineering",
      location: "@ UK",
      descriptions: [
        "Selected as a recipient of the prestigious Yayasan Gamuda Scholarship for my university education in the United Kingdom.",
        "Qualified for the overseas exchange program and continued my 3rd year studies in Hong Kong for a year.",
        "Graduated with Second-upper class honors.",
      ],
    },
  ])

  const tabStyles = ({ selected }) =>
    classNames(
      "w-full rounded-lg py-2.5 px-4 whitespace-nowrap outline-none text-md  text-gray-50",
      "",
      selected
        ? "bg-white/[0.22] font-bold"
        : " hover:bg-white/[0.22] hover:text-gray-50"
    )

  return (
    <section
      id="experience"
      className="flex-grow overflow-hidden flex items-start lg:w-[800px]  xl:w-[980px]  py-24 xl:py-48 mx-6 sm:mx-12 md:mx-24  lg:mx-auto  flex-col sm:justify-start text-light-gray  "
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
        className="mb-10 flex w-full"
      >
        <PageIndex>02. </PageIndex>
        <HeaderText>Where I've Been</HeaderText>
        <div className="w-full border-t mt-3 border-light-gray"></div>
      </motion.div>

      <div className="  flex flex-col w-full">
        <Tab.Group>
          <div className="sm:flex sm:flex-row">
            <Tab.List>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="flex sm:flex-col gap text-sm sm:overflow-visible overflow-x-scroll"
              >
                {categories.map((category, index) => (
                  <Tab
                    key={category.company}
                    className={({ selected }) =>
                      classNames(
                        "py-3 px-4 border-r-0 w-full border-b-[1px] sm:border-b-0 sm:border-r-[1px] whitespace-nowrap  text-right",
                        selected
                          ? "text-primary border-primary focus:outline-none"
                          : "hover:bg-white/[0.12]"
                      )
                    }
                  >
                    {category.company}
                  </Tab>
                ))}
              </motion.div>
            </Tab.List>
            <Tab.Panels className="">
              {categories.map((category) => (
                <Tab.Panel
                  key={category.id}
                  className={classNames("sm:py-0 py-9 sm:px-9")}
                >
                  <ul>
                    <motion.li
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
                      variants={{
                        hidden: { opacity: 0, x: 50 },
                        visible: {
                          opacity: 1,
                          x: 0,
                          transition: { duration: 1, delay: 0.3 },
                        },
                      }}
                      key={category.id}
                    >
                      <h3 className="text-xl font-bold mb-1">
                        <span>{category.header} </span>
                        <span className="text-primary">
                          {category.location}
                        </span>
                      </h3>
                      <p className="font-spacemono text-xs">{category.title}</p>
                      <ul className="mt-7 flex flex-col gap-y-4 text-sm leading-4">
                        {category.descriptions.map((desc, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <SubArrowIcon />
                            {desc}
                          </li>
                        ))}
                      </ul>
                    </motion.li>
                  </ul>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </div>
        </Tab.Group>
      </div>
    </section>
  )
}

export default Experience
