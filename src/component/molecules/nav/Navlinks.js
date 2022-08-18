import React from 'react'
import { NavLink } from 'react-router-dom';
import { motion } from "framer-motion"


function Navlinks({ expanded, setExpanded }) {
  const closeMobileMenu = () => {
		if (expanded == true) {
			setExpanded(false);
		}
	};

 
  return (
    
    <>
        {/* <NavLink to={'/'} onClick={closeMobileMenu} className="p-4">Home</NavLink>
        <NavLink to={'/about'} onClick={closeMobileMenu} className="p-4">About</NavLink>
        <NavLink to={'/location'} onClick={closeMobileMenu} className="p-4">Locations</NavLink> */}
        <motion.li whileTap={{ scale: 0.95 }} className=" list-none ml-0 mr-0 overflow-y-hidden select-none 
         text-white hover:cursor-pointer md:text-black md:overflow-y-visible md:px-4 md:font-semibold" >
          <NavLink to={'/'} onClick={closeMobileMenu}  className="p-4"  > 
            <motion.div  className="text-center text-[1.5rem]">Home</motion.div>
          </NavLink>
         </motion.li>
         <motion.li whileTap={{ scale: 0.95 }} className="list-none ml-0 mr-0 overflow-y-hidden select-none 
         text-white hover:cursor-pointer md:text-black md:overflow-y-visible md:px-4 md:font-semibold" >
          <NavLink to={'/about'}   onClick={closeMobileMenu}  className="p-4" whileTap={{ scale: 0.95 }} >
            <motion.div  className="text-center text-[1.5rem]">About</motion.div>
          </NavLink>
        </motion.li>

        <motion.li whileTap={{ scale: 0.95 }} className="list-none  ml-0 mr-0 overflow-y-hidden select-none
         text-white hover:cursor-pointer md:text-black md:overflow-y-visible md:px-4 md:font-semibold" >
          <NavLink to={'/location'}  onClick={closeMobileMenu}  className="p-4" whileTap={{ scale: 0.95 }} >
          <motion.div  className="text-center text-[1.5rem]">Location</motion.div>
          </NavLink>
        </motion.li>
    </>
  )
}

export default Navlinks