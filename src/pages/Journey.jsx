import React, { useRef } from "react"
import HeaderText from "../components/HeaderText"
import PageIndex from "../components/PageIndex"
import Award1 from "../assets/web-dev-bootcamp-2022.jpg"
import Award2 from "../assets/react-redux.jpg"
import ArrowLeft from "../components/ArrowLeft"
import { AnimatePresence, motion, useTransform } from "framer-motion"
import { useInView } from "react-intersection-observer"

const frontend = [
  { id: "01", name: "HTML" },
  { id: "02", name: "CSS" },
  { id: "03", name: "JavaScript" },
  { id: "04", name: "Bootstrap" },
  { id: "05", name: "React" },
  { id: "06", name: "Tailwind" },
  { id: "07", name: "TypeSript" },
]

const backend = [
  { id: "01", name: "MongoDB" },
  { id: "02", name: "Express" },
  { id: "03", name: "Node.JS" },
  { id: "04", name: "Sanity" },
  { id: "05", name: "Strapi" },
]

const design = [
  { id: "01", name: "UI Design" },
  { id: "02", name: "Figma" },
]

// function ScrollContainer() {
//   const x = useMotionValue(0)
//   const xMax = useTransform(x, [-100, 0, 100], [-2000, 0, 2000])

//   return (
//     <AnimatePresence>
//       <motion.div
//         className="flex flex-row gap-x-3 md:gap-x-8 overflow-x-scroll"
//         style={{ x }}
//       >
//         {[Award1, Award1, Award1, Award1].map((image, index) => (
//           <motion.img
//             src={image}
//             alt=""
//             className="w-[220px] h-auto"
//             key={index}
//             initial={{ opacity: 0, x: 500 }}
//             animate={{ opacity: 1, x: 0, transition: { duration: 1, delay: 0.3 } }}
//             exit={{ opacity: 0, x: 500 }}
//           />
//         ))}
//       </motion.div>

//       <motion.div
//         className="fixed bottom-0 right-0 mb-3 mr-3"
//         whileHover={{ scale: 1.2 }}
//         whileTap={{ x: xMax }}
//       >
//         <motion.svg width="24" height="24" viewBox="0 0 24 24">
//           <motion.path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" />
//         </motion.svg>
//       </motion.div>
//     </AnimatePresence>
//   )
// }

const Journey = () => {
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  })

  return (
    <section
      id="journey"
      className="flex-grow flex items-start lg:w-[800px]  xl:w-[980px] h-screen overflow-hidden py-24 xl:py-48 mx-6 sm:mx-12 md:mx-24  lg:mx-auto  flex-col sm:justify-start text-light-gray border-b border-dark-gray  "
    >
      {/* DESKTOP */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
        variants={{
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0 },
        }}
        className="mb-10 flex w-full"
      >
        <PageIndex>04. </PageIndex>
        <HeaderText>How did I get here</HeaderText>
        <div className="w-full border-t mt-3 border-light-gray"></div>
      </motion.div>

      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, delay: 0.25 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
        className="mb-8 text-sm pb-[499px]"
      >
        Coming Soon
      </motion.p>

      {/* 
      <div className='mb-12 flex flex-col w-full'>
        <motion.div ref={ref} initial={{ opacity: 0, x: 400 }}
            animate={inView ? { opacity: 1, x: 0, transition: { duration: 1.5} } : {}}
            exit={{ opacity: 0, x: 400 }} className='flex flex-row items-center gap-2 text-base font-spacemono font-bold mb-8 whitespace-nowrap overflow-x-scroll '>FRONT END : <div className='font-normal flex flex-row items-center gap-2'>
        {frontend.map((item,index) => (
              <div key={item.name} className='flex flex-row items-center gap-2'>
                    {index !== 0 && <ArrowLeft />}
                    <span
                      key={item.name}
                    >
                    {item.name}
                    </span>

              </div>
                  ))}
              </div>
        </motion.div>

        <motion.div  initial={{ opacity: 0, x: 400 }}
            animate={inView ? { opacity: 1, x: 0, transition: { duration: 1.5, delay: 0.3 } } : {}}
            exit={{ opacity: 0, x: 400 }}
             className='flex flex-row items-center gap-2 text-base font-spacemono font-bold mb-8  whitespace-nowrap overflow-x-scroll'>BACK END : <div className='font-normal flex flex-row items-center gap-2'>
        {backend.map((item,index) => (
              <div key={item.name} className='flex flex-row items-center gap-2'>
                    {index !== 0 && <ArrowLeft />}
                    <span
                      key={item.name}
                    >
                    {item.name}
                    </span>

              </div>
                  ))}
              </div>
        </motion.div>

        <motion.div ref={ref} initial={{ opacity: 0, x: 400 }}
            animate={inView ? { opacity: 1, x: 0, transition: { duration: 1.5, delay: 0.6 } } : {}}
            exit={{ opacity: 0, x: 400 }}  className='flex flex-row items-center gap-2 text-base font-spacemono font-bold mb-8  whitespace-nowrap overflow-x-scroll'>DESIGN : <div className='font-normal flex flex-row items-center gap-2'>
        {design.map((item,index) => (
              <div key={item.name} className='flex flex-row items-center gap-2'>
                    {index !== 0 && <ArrowLeft />}
                    <span
                      key={item.name}
                    >
                    {item.name}
                    </span>

              </div>
                  ))}
              </div>
        </motion.div>
        </div>   

        <AnimatePresence>
      <div className='flex flex-row gap-x-3 md:gap-x-8 overflow-x-scroll' ref={ref}>
        {[Award1, Award2].map((image, index) => (
          <motion.img
            src={image}
            alt=""
            className='w-[220px] h-auto'
            key={index}
            initial={{ opacity: 0, x: 400 }}
            animate={inView ? { opacity: 1, x: 0, transition: { duration: 1.5, delay: 0.9 } } : {}}
            exit={{ opacity: 0, x: 400 }}
          />
        ))}
      </div>
    </AnimatePresence> */}
    </section>
  )
}

export default Journey
