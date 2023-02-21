import React,{useState,useEffect,useRef} from 'react'
import AnchorLink from "react-anchor-link-smooth-scroll";
import Logo from '../assets/logo.svg'
import { HiMenuAlt3 } from "react-icons/hi";
import { HiOutlineX } from "react-icons/hi";
import {motion, spring} from 'framer-motion'
import Line10px from '../components/Line10px';


const Link = ({ page,id, selectedPage, setSelectedPage}) => {
    const lowerCasePage = page.toLowerCase();
    return (
      <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "text-primary" : ""
      } hover:text-primary transition duration-500 text-light-gray`}
          href={`#${lowerCasePage}`}
          onClick={() => setSelectedPage(lowerCasePage)}
        >
           <span className='mr-1 text-primary'>{id}.</span>
          {page}
        </AnchorLink>
      );
  };

  const MenuLink = ({ page,id, link, selectedPage, setSelectedPage,setOpen }) => {
    const lowerCasePage = page.toLowerCase();
    return (
      <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "" : ""
      } hover:text-primary transition duration-500 text-light-gray`}
          href={`#${link}`}
          onClick={()=>{setOpen(false);setSelectedPage(lowerCasePage);}}
     
        >
          {page}
        </AnchorLink>
      );
  };


const Navbar = ({navlinks, selectedPage, setSelectedPage }) => {
    const [open, setOpen] = useState(false);
    

    let menuRef = useRef();

    useEffect(() => {
      
      let handler = (e)=>{
        if(!menuRef.current.contains(e.target)){
          setOpen(false);
        }      
      };
  
      document.addEventListener("mousedown", handler);
      
  
      return() =>{
        document.removeEventListener("mousedown", handler);
      }
  
    });

    
  return (
    <nav className="z-50 w-full fixed md:static px-6 py-4 lg:px-12 top-0 bg-black-100/10 backdrop-blur-sm border-b border-light-gray/20 ">
        <div className="flex items-center justify-between mx-auto ">
            
        <motion.img  initial="hidden"
               whileInView="visible"
               viewport={{ once: true, amount: 0.5 }}
               transition={{ duration: 0.5 }}
               variants={{
                 hidden: { opacity: 0, y: -25 },
                 visible: { opacity: 1, y: 0 },
               }} src={Logo} alt="logo" />

        {/* DESKTOP NAV */}
       <div className='text-sm md:flex sticky space-x-6 hidden'>
        {navlinks.slice(1).map(({ id, name, link }) => (
             <motion.div   
             key={id}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, amount: 0.5 }}
               transition={{ duration: 0.5, delay: id* 0.1 }}
               variants={{
                 hidden: { opacity: 0, y: -25 },
                 visible: { opacity: 1, y: 0 },
               }}
            >
                      <Link
                        key={id}
                        id={id}
                        page={name} 
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                      />
                      </motion.div>
                    ))}
            </div>
        
        <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -25 },
          visible: { opacity: 1, y: 0 },
        }}
        className=" flex items-center  md:hidden  " >
              <motion.div 
              animate={{ rotate:open? 180:0}}
          transition={{ type: "spring" }}
              onClick={() => setOpen(!open)} className="inline-flex items-center justify-center rounded-md p-2 text-primary   focus:outline-none focusfill-white">
                {open ? (
                  <HiOutlineX className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <HiMenuAlt3 className="block h-6 w-6" aria-hidden="true" />
                )}
              </motion.div>
        </motion.div>
        </div>
    
      {open && (
    <div  style={{position: 'fixed'}} className=" md:hidden border-red-600 absolute right-0 top-[70px] overflow-hidden" ref={menuRef} >
    <div className="space-y-1 pr-6 pl-12 py-6 flex flex-col bg-white/5 backdrop-blur-sm w-[160px] h-[712px]">
      <div className='flex flex-col items-end'>
      {navlinks.map(({ id, name, link, index }) => (
             <motion.div   
             key={id}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, amount: 0.5 }}
               transition={{ duration: 0.5, delay: id* 0.1}}
               variants={{
                 hidden: { opacity: 0, y: -25 },
                 visible: { opacity: 1, y: 0 },
               }}
            >
            {id!= "00" && (
              <div className='flex flex-col items-end gap-y-4 stroke-light-gray my-1 text-sm text-light-gray'>
              <Line10px/>
              <Line10px/>
              <Line10px/>
              <Line10px/>
              </div>
              )
            }
         
                      <MenuLink
                        key={id}
                        id={id}
                        page={name === "Home" ? id : name}
                        link={link}
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                        setOpen={setOpen}
                      />
          
                      </motion.div>
                    ))}
      </div>
     
    </div>
  </div>
  
  )}
    </nav>
  )
}

export default Navbar
