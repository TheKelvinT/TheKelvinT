import React from "react"
import HeaderText from "../components/HeaderText"
import PageIndex from "../components/PageIndex"
import { motion } from "framer-motion"
const Contact = () => {
  return (
    <section id="contact" className=" py-48 flex justify-center  ">
      <div className="lg:max-w-[980px] mx-6 md:mx-12 lg:mx-24 xl:mx-40 text-light-gray">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, y: -100 },
            visible: { opacity: 1, y: 0 },
          }}
          className="mb-8 flex flex-col items-center gap-4"
        >
          <PageIndex>05. Get in Touch</PageIndex>
          <HeaderText>Reach out to me</HeaderText>
        </motion.div>

        <div className="flex flex-col items-center gap-y-6 text-dark-gray font-spacemono text-base ">
          <motion.a
            href="https://www.linkedin.com/in/the-kelvin-tan/"
            target="_blank"
            whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.9, transition: { duration: 0.2 } }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            className="flex justify-center items-center gap-4 sm:gap-8 py-3 px-6 border border-dark-gray rounded transition duration-500 hover:text-primary hover:border-primary"
          >
            <span>Message me on Linkedin</span>
            <span>
              <svg
                className="fill-current"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2.04995 13.3C1.67495 13.3 1.35635 13.1686 1.09415 12.9058C0.831351 12.6436 0.699951 12.325 0.699951 11.95V2.04995C0.699951 1.67495 0.831351 1.35635 1.09415 1.09415C1.35635 0.831351 1.67495 0.699951 2.04995 0.699951H6.99995V2.04995H2.04995V11.95H11.95V6.99995H13.3V11.95C13.3 12.325 13.1686 12.6436 12.9058 12.9058C12.6436 13.1686 12.325 13.3 11.95 13.3H2.04995ZM5.25575 9.69995L4.29995 8.74415L10.9942 2.04995H8.79995V0.699951H13.3V5.19995H11.95V3.00575L5.25575 9.69995Z" />
              </svg>
            </span>
          </motion.a>

          <motion.a
            href="mailto: tnchnkit@hotmail.com"
            target="_blank"
            whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.9, transition: { duration: 0.2 } }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.25 },
              },
            }}
            className="flex justify-center items-center gap-4 sm:gap-8 py-3 px-6 border border-dark-gray rounded transition duration-500 hover:text-primary hover:border-primary"
          >
            <span>Send Me An Email</span>
            <span>
              <svg
                className="fill-current"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2.04995 13.3C1.67495 13.3 1.35635 13.1686 1.09415 12.9058C0.831351 12.6436 0.699951 12.325 0.699951 11.95V2.04995C0.699951 1.67495 0.831351 1.35635 1.09415 1.09415C1.35635 0.831351 1.67495 0.699951 2.04995 0.699951H6.99995V2.04995H2.04995V11.95H11.95V6.99995H13.3V11.95C13.3 12.325 13.1686 12.6436 12.9058 12.9058C12.6436 13.1686 12.325 13.3 11.95 13.3H2.04995ZM5.25575 9.69995L4.29995 8.74415L10.9942 2.04995H8.79995V0.699951H13.3V5.19995H11.95V3.00575L5.25575 9.69995Z" />
              </svg>
            </span>
          </motion.a>

          <motion.a
            href="https://github.com/TheKelvinT"
            target="_blank"
            whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.9, transition: { duration: 0.2 } }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.5 },
              },
            }}
            className="flex justify-center items-center gap-4 sm:gap-8 py-3 px-6 border border-dark-gray rounded transition duration-500 hover:text-primary hover:border-primary"
          >
            <span>Stalk Me On Github</span>
            <span>
              <svg
                className="fill-current"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2.04995 13.3C1.67495 13.3 1.35635 13.1686 1.09415 12.9058C0.831351 12.6436 0.699951 12.325 0.699951 11.95V2.04995C0.699951 1.67495 0.831351 1.35635 1.09415 1.09415C1.35635 0.831351 1.67495 0.699951 2.04995 0.699951H6.99995V2.04995H2.04995V11.95H11.95V6.99995H13.3V11.95C13.3 12.325 13.1686 12.6436 12.9058 12.9058C12.6436 13.1686 12.325 13.3 11.95 13.3H2.04995ZM5.25575 9.69995L4.29995 8.74415L10.9942 2.04995H8.79995V0.699951H13.3V5.19995H11.95V3.00575L5.25575 9.69995Z" />
              </svg>
            </span>
          </motion.a>
        </div>
      </div>
    </section>
  )
}

export default Contact
