import React from 'react'
import HeaderText from '../components/HeaderText'
import PageIndex from '../components/PageIndex'
import SubArrowIcon from '../components/SubArrowIcon'
import {motion} from 'framer-motion'
import ReactIcon from '../assets/techstack/react.svg'
import TSIcon from '../assets/techstack/typescript-icon.svg'
import JSIcon from '../assets/techstack/javascript.svg'
import NodeIcon from '../assets/techstack/nodejs-icon.svg'
import NextIcon from '../assets/techstack/nextjs-icon.svg'
import FigmaIcon from '../assets/techstack/figma.svg'
import ExpressIcon from '../assets/techstack/express.svg'
import TailwindIcon from '../assets/techstack/tailwindcss-icon.svg'
import BootstrapIcon from '../assets/techstack/bootstrap.svg'
import SassIcon from '../assets/techstack/sass.svg'
import CssIcon from '../assets/techstack/css-3.svg'
import ReduxIcon from '../assets/techstack/redux.svg'
import MongoIcon from '../assets/techstack/mongodb-icon.svg'
import StrapiIcon from '../assets/techstack/strapi.svg'
import MUIIcon from '../assets/techstack/material-ui.svg'
import SanityIcon from '../assets/techstack/sanity.svg'
import HTMLIcon from '../assets/techstack/html-5.svg'
import GitIcon from '../assets/techstack/git-icon.svg'
import GitHubIcon from '../assets/techstack/github-icon.svg'
import PythonIcon from '../assets/techstack/python.svg'
import StripeIcon from '../assets/techstack/stripe.svg'

const techstack = [
    { id:"01", name: 'JavaScript (ES6+)',icon:JSIcon},
    { id:"02", name: 'TypeScript',icon:TSIcon },
    { id:"03", name: 'React',icon:ReactIcon },
    { id:"04", name: 'Next.Js',icon:NextIcon },
    { id:"05", name: 'Node.js',icon:NodeIcon },
    { id:"06", name: 'Figma', icon:FigmaIcon },  
    { id:"07", name: 'Express',icon:ExpressIcon },  
    { id:"08", name: 'Tailwind',icon:TailwindIcon },  
    { id:"09", name: 'Bootstrap',icon:BootstrapIcon },  
    { id:"10", name: 'MaterialUI',icon:MUIIcon },  
    { id:"11", name: 'Sass',icon:SassIcon },  
    { id:"12", name: 'Css',icon:CssIcon },  
    { id:"13", name: 'Redux',icon:ReduxIcon },  
    { id:"14", name: 'MongoDB',icon:MongoIcon},    
    { id:"15", name: 'HTML',icon:HTMLIcon },  
    { id:"16", name: 'Git',icon:GitIcon },  
    { id:"17", name: 'GitHub',icon:GitHubIcon },  
    { id:"18", name: 'Stripe',icon:StripeIcon },  
    { id:"19", name: 'Strapi',icon:StrapiIcon },  
    { id:"20", name: 'Sanity',icon:SanityIcon }, 
  ]
const About = () => {
  return (
    <section
    id="about"
    className="flex-grow flex items-start lg:w-[800px]  xl:w-[980px]  py-24 md:py-36 xl:py-48 mx-6 sm:mx-12 md:mx-24  lg:mx-auto  flex-col sm:justify-start text-light-gray  "
    >
    
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5}}
      variants={{hidden: { opacity: 0, x: -100 },visible: { opacity: 1 , x: 0 }}} 
      className='mb-10 flex w-full'>
      <PageIndex>01. </PageIndex>
      <HeaderText>About Me</HeaderText>
      <div className="w-full border-t mt-3 border-light-gray">
      </div>       
    </motion.div>
        
    <motion.h4 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, delay:0.25}}
      variants={{hidden: { opacity: 0, x: -50 },visible: { opacity: 1, x: 0 }}} 
      className='  font-bold text-xl mb-2'>Who am I </motion.h4>
      <motion.p 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay:0.25}}
        variants={{hidden: { opacity: 0, x: -50 },visible: { opacity: 1, x: 0 }}} 
        className=' leading-6 text-sm mb-7 '>Hi there! I'm a frontend developer with a team-driven mindset and an unwavering passion for building user-friendly and visually captivating websites. I've sharpened my skills in HTML, CSS, and JavaScript through my rigorous attention to detail and exceptional problem-solving abilities. I'm constantly seeking out new challenges and opportunities to enhance my knowledge and expertise.  I'm excited to collaborate and join forces with fellow creators to develop outstanding digital experiences that leave a lasting impression.</motion.p>
        <div className='flex flex-row gap-x-12 gap-y-6 lg:gap-y-6 flex-wrap font-spacemono text-xs mb-8'>
          {techstack.map((item,index) => (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.5+(index* 0.05)}}
            variants={{hidden: { opacity: 0, x: -50 },visible: { opacity: 1, x: 0 }}} 
            key={item.name} 
            className='flex flex-row items-center gap-2'>
                    <span key={item.name}>
                    <img src={item.icon} alt={item.name} className="h-8 w-auto"/>
                    </span>
          </motion.div>
          ))}
        </div>
     
      <motion.a
        href='https://www.linkedin.com/in/kelvint95/'
        target="_blank"
        whileHover={{scale:1.1, transition: { duration: 0.2 }}}
        whileTap={{scale:0.9, transition: { duration: 0.2 }}}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.7 }},
        }}
        className='flex gap-4 items-center py-2 px-4 hover:border-primary border rounded hover:text-primary  text-sm transition duration-500'>
          Linkedin 
          <span>
            <svg className='fill-current' width="15" height="7" viewBox="0 0 15 7" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.5 7L10.438 5.938L12.125 4.25H0V2.75H12.125L10.438 1.062L11.5 0L15 3.5L11.5 7Z"/>
            </svg>
          </span>
        </motion.a>

  </section>
  )
}

export default About
