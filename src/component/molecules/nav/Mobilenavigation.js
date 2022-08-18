
import React, { useState } from "react"
import { motion } from "framer-motion"
import { NavLink } from 'react-router-dom';
import Navlinks from './Navlinks';
import Logo from '../../atoms/logo/Logo'
import HamburgerButton from '../../atoms/mobile/HamburgerButton';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";




function Mobilenavigation() {

    const [mobileNavOpen, setMobileNavOpen] = useState(false)

    const hideNavItemsVariant = {
      opened: {
        opacity: 0,
        y: "-100%",
        transition: {
          duration: 0.5,
          ease: "easeInOut"
        }
      },
      closed: {
        opacity: 1,
        y: "0%",
        transition: {
          delay: 1.1,
          duration: 0.5,
          ease: "easeInOut"
        }
      }
    }
  
    const mobileMenuVariant = {
      opened: {
        y: "0%",
        transition: {
          delay: 0.15,
          duration: 1.1,
          ease: [0.74, 0, 0.19, 1.02]
        }
      },
      closed: {
        y: "-100%",
        transition: {
          delay: 0.35,
          duration: 0.63,
          ease: [0.74, 0, 0.19, 1.02]
        }
      }
    }
  
    const fadeInVariant = {
      opened: {
        opacity: 1,
        transition: {
          delay: 1.2
        }
      },
      closed: { opacity: 0 }
    }
  
    const ulVariant = {
      opened: {
        transition: {
          delayChildren: 1,
          staggerChildren: 0.18
        }
      },
      closed: {
        transition: {
          staggerChildren: 0.06,
          staggerDirection: -1
        }
      }
    }
  
    const liVariant = {
      opened: {
        opacity: 1,
        y: "0%",
        transition: {
          duration: 0.65,
          ease: "easeOut"
        }
      },
      closed: {
        opacity: 0,
        y: "100%",
        transition: {
          duration: 0.25,
          ease: "easeInOut"
        }
      }
    }
  return (
    <> 
      <motion.nav
        initial="closed"
        animate={mobileNavOpen ? "opened" : "closed"}
        className=" w-full flex justify-between items-center p-2"
      >
      <div className="overflow-y-hidden">
        <motion.div variants={hideNavItemsVariant}> 
          <NavLink to={'/'} aria-label="Go to HelloWorld.com"><Logo/></NavLink>
        </motion.div>
      </div>

      <div className="hidden md:!block">
        <ul className="flex justify-between items-center"><Navlinks/></ul>
      </div>

      <div className="overflow-y-hidden hover:cursor-pointer md:hidden">
        <motion.div
          variants={hideNavItemsVariant}
          onClick={() => setMobileNavOpen(true)}
        >
          <HamburgerButton
            expanded={mobileNavOpen}
            setExpanded={setMobileNavOpen} />
        </motion.div>
      </div>
      
      <motion.div variants={mobileMenuVariant} className="fixed top-0 left-0 h-screen w-[100%] 
      flex flex-col items-center   bg-violet-custom text-white">
        <motion.button
          variants={fadeInVariant}
          onClick={() => setMobileNavOpen(false)}
        >
        <div className="mt-8 p-6 w-4 h-4 rounded-[50px] flex items-center justify-center text-[1.5rem]
         bg-blue-custom">
          <FontAwesomeIcon className="" aria-hidden="true"  aria-label="Close Mobile Menu" icon={faTimes} />
        </div>  
      
        </motion.button>

        <motion.ul variants={ulVariant} className="flex flex-col list-none mt-[40px]">
          <Navlinks 
          expanded={mobileNavOpen}
          setExpanded={setMobileNavOpen}
          variants={liVariant}
          />  
      
          {/* {MOBILE_NAV_ITEMS.map(navItem => (
            <motion.li whileTap={{ scale: 0.95 }} 
            key={navItem.id} className="mt-[20px] mb-[20px] ml-0 mr-0 overflow-y-hidden select-none text-white hover:cursor-pointer">
              <motion.div variants={liVariant} className="text-center text-[34px]">{navItem.navTitle}</motion.div>
            </motion.li>
          ))} */}


        </motion.ul>
    
      </motion.div>

    </motion.nav>
</>
  )
}

export default Mobilenavigation