import React from 'react'
import { motion } from "framer-motion";


  
const Hero = () => {
  return (
    <section
      id="home"
      className=" h-screen flex items-center lg:w-[800px]  xl:w-[980px]  py-24 xl:py-36 mx-6 sm:mx-12 md:mx-24  lg:mx-auto lg:flex sm:items-center sm:justify-start   "
    >
      <div>
    
      <motion.p initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay:1 }}
        variants={{hidden: { opacity: 0, y: 50, x:20 },visible: { opacity: 1, y: 0, x:0 }}} 
        className='text-primary font-spacemono text-sm md:text-base leading-tight'>
          Hi, my name is 
      </motion.p>
        <motion.h1  initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay:1.1  }}
          variants={{hidden: { opacity: 0, y: -0,x:2 },visible: { opacity: 1, y: 0, x:0 }}} 
          className='text-4xl md:text-6xl md:leading-normal lg:text-7xl lg:leading-normal font-bold text-light-gray leading-normal'>
            Kelvin Tan
        </motion.h1>
        <motion.h2 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1 }}
          transition={{ duration: 0.5, delay:1.2  }}
          variants={{hidden: { opacity: 0, y: 50,x:2 },visible: { opacity: 1, y: 0, x:0 }}} 
          className='text-3xl md:text-5xl  md:leading-normal lg:text-7xl lg:leading-tight font-bold leading-tight mb-2'>
            Transforming web design into reality.
        </motion.h2>
        <motion.p 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay:1.3 }}
          variants={{hidden: { opacity: 0, y: 50,x:2 },visible: { opacity: 1, y: 0, x:0 }}} 
          className=' text-sm md:text-base max-w-[580px] md:leading-normal leading-normal'>
            I'm a front-end web developer with a passion for building great online experiences. With a solid foundation in HTML, CSS, JavaScript, and other relevant technologies, I enjoy bringing ideas to life and creating functional and visually appealing websites. Let's make something awesome together!
            </motion.p>
      </div>

    </section>
  )
}

export default Hero
