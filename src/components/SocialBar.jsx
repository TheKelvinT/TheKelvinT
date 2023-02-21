import React from 'react'
import { motion } from "framer-motion";
const Socialbar = () => {
  return (
    <div className=' hidden md:flex fixed justify-end bg-transparent z-40 right-0 '>
      <motion.div  initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 1.7 }}
          variants={{

            hidden: { opacity: 0, x:25 },
            visible: { opacity: 1, x: 0 },
          }}
          className='flex flex-col gap-y-3.5  items-center pr-10 pt-12
       text-social-gray'>
      <motion.a 
      target="_blank"
      href="https://github.com/TheKelvinT"
      whileHover={{scale:1.5}}
      whileTap={{scale:0.9}}
      transition={{ duration: 0.3}}
>
      <svg 
          className='hover:text-primary transition duration-500 fill-current' width="16" height="16" viewBox="0 0 16 16"  xmlns="http://www.w3.org/2000/svg">
<path d="M8 0C3.58267 0 0 3.582 0 8C0 11.5347 2.292 14.5333 5.47133 15.5913C5.87067 15.6653 6 15.4173 6 15.2067V13.7173C3.77467 14.2013 3.31133 12.7733 3.31133 12.7733C2.94733 11.8487 2.42267 11.6027 2.42267 11.6027C1.69667 11.106 2.478 11.1167 2.478 11.1167C3.28133 11.1727 3.704 11.9413 3.704 11.9413C4.41733 13.164 5.57533 12.8107 6.032 12.606C6.10333 12.0893 6.31067 11.736 6.54 11.5367C4.76333 11.3333 2.89533 10.6473 2.89533 7.58267C2.89533 6.70867 3.208 5.99533 3.71933 5.43533C3.63667 5.23333 3.36267 4.41933 3.79733 3.318C3.79733 3.318 4.46933 3.10333 5.998 4.138C6.636 3.96067 7.32 3.872 8 3.86867C8.68 3.872 9.36467 3.96067 10.004 4.138C11.5313 3.10333 12.202 3.318 12.202 3.318C12.6373 4.42 12.3633 5.234 12.2807 5.43533C12.794 5.99533 13.104 6.70933 13.104 7.58267C13.104 10.6553 11.2327 11.332 9.45133 11.53C9.738 11.778 10 12.2647 10 13.0113V15.2067C10 15.4193 10.128 15.6693 10.534 15.5907C13.7107 14.5313 16 11.5333 16 8C16 3.582 12.418 0 8 0Z"/>
</svg>
</motion.a>
<svg  width="1" height="23" viewBox="0 0 1 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="0.5" y1="2.18557e-08" x2="0.499999" y2="23" stroke="#C6D1F1"/>
</svg>
<motion.a target="_blank"
href="https://www.linkedin.com/in/kelvint95/"
whileHover={{scale:1.5}}
whileTap={{scale:0.9}}
transition={{ duration: 0.3}}
>
<svg className='hover:text-primary transition duration-500 fill-current' width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
<path d="M12.6667 0H3.33333C1.49267 0 0 1.49267 0 3.33333V12.6667C0 14.5073 1.49267 16 3.33333 16H12.6667C14.508 16 16 14.5073 16 12.6667V3.33333C16 1.49267 14.508 0 12.6667 0ZM5.33333 12.6667H3.33333V5.33333H5.33333V12.6667ZM4.33333 4.488C3.68933 4.488 3.16667 3.96133 3.16667 3.312C3.16667 2.66267 3.68933 2.136 4.33333 2.136C4.97733 2.136 5.5 2.66267 5.5 3.312C5.5 3.96133 4.978 4.488 4.33333 4.488ZM13.3333 12.6667H11.3333V8.93067C11.3333 6.68533 8.66667 6.85533 8.66667 8.93067V12.6667H6.66667V5.33333H8.66667V6.51C9.59733 4.786 13.3333 4.65867 13.3333 8.16067V12.6667Z" />
</svg>
</motion.a>

{/* <svg width="1" height="23" viewBox="0 0 1 23" fill="none" xmlns="http://www.w3.org/2000/motion.svg">
<line x1="0.5" y1="2.18557e-08" x2="0.499999" y2="23" stroke="#C6D1F1"/>
</svg>
<motion.a 

whileHover={{scale:1.5}}
whileTap={{scale:0.9}}
transition={{ duration: 0.3}}
>
<svg className='hover:text-primary transition duration-500 fill-current' width="16" height="16" viewBox="0 0 16 16"  xmlns="http://www.w3.org/2000/motion.svg">
<path d="M8 1.442C10.136 1.442 10.3893 1.45 11.2333 1.48867C13.4013 1.58733 14.414 2.616 14.5127 4.768C14.5513 5.61133 14.5587 5.86467 14.5587 8.00067C14.5587 10.1373 14.5507 10.39 14.5127 11.2333C14.4133 13.3833 13.4033 14.414 11.2333 14.5127C10.3893 14.5513 10.1373 14.5593 8 14.5593C5.864 14.5593 5.61067 14.5513 4.76733 14.5127C2.594 14.4133 1.58667 13.38 1.488 11.2327C1.44933 10.3893 1.44133 10.1367 1.44133 8C1.44133 5.864 1.45 5.61133 1.488 4.76733C1.58733 2.616 2.59733 1.58667 4.76733 1.488C5.61133 1.45 5.864 1.442 8 1.442ZM8 0C5.82733 0 5.55533 0.00933333 4.702 0.048C1.79667 0.181333 0.182 1.79333 0.0486667 4.70133C0.00933333 5.55533 0 5.82733 0 8C0 10.1727 0.00933333 10.4453 0.048 11.2987C0.181333 14.204 1.79333 15.8187 4.70133 15.952C5.55533 15.9907 5.82733 16 8 16C10.1727 16 10.4453 15.9907 11.2987 15.952C14.2013 15.8187 15.82 14.2067 15.9513 11.2987C15.9907 10.4453 16 10.1727 16 8C16 5.82733 15.9907 5.55533 15.952 4.702C15.8213 1.79933 14.2073 0.182 11.2993 0.0486667C10.4453 0.00933333 10.1727 0 8 0ZM8 3.892C5.73133 3.892 3.892 5.73133 3.892 8C3.892 10.2687 5.73133 12.1087 8 12.1087C10.2687 12.1087 12.108 10.2693 12.108 8C12.108 5.73133 10.2687 3.892 8 3.892ZM8 10.6667C6.52733 10.6667 5.33333 9.47333 5.33333 8C5.33333 6.52733 6.52733 5.33333 8 5.33333C9.47267 5.33333 10.6667 6.52733 10.6667 8C10.6667 9.47333 9.47267 10.6667 8 10.6667ZM12.2707 2.77C11.74 2.77 11.31 3.2 11.31 3.73C11.31 4.26 11.74 4.69 12.2707 4.69C12.8007 4.69 13.23 4.26 13.23 3.73C13.23 3.2 12.8007 2.77 12.2707 2.77Z" />
</svg>
</motion.a>

<svg width="1" height="23" viewBox="0 0 1 23" fill="none" xmlns="http://www.w3.org/2000/motion.svg">
<line x1="0.5" y1="2.18557e-08" x2="0.499999" y2="23" stroke="#C6D1F1"/>
</svg>

<motion.a 

whileHover={{scale:1.5}}
whileTap={{scale:0.9}}
transition={{ duration: 0.3}}
>
<svg className='hover:text-primary transition duration-500 fill-current' width="16" height="14" viewBox="0 0 16 14"  xmlns="http://www.w3.org/2000/motion.svg">
<path d="M16 2.03799C15.4113 2.29932 14.7787 2.47532 14.1147 2.55466C14.7927 2.14866 15.3133 1.50532 15.558 0.738657C14.924 1.11466 14.2213 1.38799 13.4733 1.53532C12.8753 0.897324 12.0213 0.498657 11.0773 0.498657C8.958 0.498657 7.40067 2.47599 7.87933 4.52866C5.152 4.39199 2.73333 3.08532 1.114 1.09932C0.254 2.57466 0.668 4.50466 2.12933 5.48199C1.592 5.46466 1.08533 5.31732 0.643333 5.07132C0.607333 6.59199 1.69733 8.01466 3.276 8.33132C2.814 8.45666 2.308 8.48599 1.79333 8.38732C2.21067 9.69132 3.42267 10.64 4.86 10.6667C3.48 11.7487 1.74133 12.232 0 12.0267C1.45267 12.958 3.17867 13.5013 5.032 13.5013C11.1267 13.5013 14.57 8.35399 14.362 3.73732C15.0033 3.27399 15.56 2.69599 16 2.03799Z"/>
</svg>
</motion.a> */}
</motion.div>

    </div>
  )
}

export default Socialbar