import { AnimatePresence, delay, MotionConfig } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import Line10px from "./Line10px"
import { motion } from "framer-motion"

const Sidebar = ({ navlinks, selectedPage, setSelectedPage }) => {
  console.log(navlinks)
  console.log(selectedPage)
  const selectedStyles = `text-primary`
  console.log(selectedPage)

  return (
    <div className="hidden md:flex flex-col  fixed bottom-[5%] z-50 left-7">
      {navlinks.map(({ id, name, link, index }) => (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 1.7 }}
          variants={{
            hidden: { opacity: 0, x: -45 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          {id !== "00" && (
            <div className="flex flex-col items-start gap-y-2.5 stroke-light-gray my-[2px] text-sm text-light-gray">
              <Line10px />
              <Line10px />
              <Line10px />
              <Line10px />
            </div>
          )}
          <div className="flex items-center gap-x-2">
            <AnimatePresence>
              <motion.span
                key={id}
                initial={{ opacity: 0, x: 0 }}
                animate={{
                  opacity: 1,
                  x: selectedPage === name.toLowerCase() ? 0 : -10,
                }}
                exit={{
                  opacity: 0,
                  x: selectedPage !== name.toLowerCase() ? -20 : 10,
                }}
                transition={{ duration: 0.5 }}
                className={
                  selectedPage === name.toLowerCase()
                    ? "stroke-primary"
                    : "hidden"
                }
              >
                <Line10px />
              </motion.span>
            </AnimatePresence>
            <AnimatePresence>
              <motion.div
                initial={{ x: 0 }}
                animate={{ x: selectedPage === name.toLowerCase() ? 2 : 0 }}
                exit={{
                  opacity: 0,
                  x: selectedPage !== name.toLowerCase() ? -10 : 5,
                }}
                transition={{ duration: 0.7 }}
              >
                <AnchorLink
                  key={id}
                  href={`#${link}`}
                  className={`${
                    selectedPage === name.toLowerCase() ? selectedStyles : ""
                  } font-spacemono hover:text-primary text-sm`}
                  onClick={() => setSelectedPage(name)}
                >
                  {id}
                </AnchorLink>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default Sidebar
