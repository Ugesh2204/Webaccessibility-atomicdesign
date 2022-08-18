import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import Logo from '../../atoms/logo/Logo'
import HamburgerButton from '../../atoms/mobile/HamburgerButton';
import Skiplink from '../../atoms/skiplink/Skiplink';
import Navlinks from './Navlinks';
import tw from "tailwind-styled-components"
import styled from 'styled-components';
import Mobilenavigation from './Mobilenavigation';




function Navigationheader() {

  const [expanded, setExpanded] = useState(false);
  console.log(expanded)


  let Component;
   if(expanded == true){
      Component = HeaderNav
   } else {
    Component = DefaultNav
   }

  return (
    <header className='w-full relative flex justify-between items-center shadow-sm px-[10%] py-4 mb-8'>
      <Skiplink/>
      {/* <NavLink to={'/'} aria-label="Go to HellWorld.com"><Logo/></NavLink> */}

      {/* <div className="md:hidden">
          <HamburgerButton 
          expanded={expanded}
          setExpanded={setExpanded}/>
       </div>

      <nav className =" flex justify-between items-center  bg-white 
      text-black  font-Redhat font-black  text-[1.2rem] md:items-center" role="Navigation " expanded={expanded}>
          <Component className="">
            <Navlinks    
            expanded={expanded}
            setExpanded={setExpanded}/>
          </Component>
      </nav> */}


      <Mobilenavigation/>
    </header>
 
  )
}

export default Navigationheader

const HeaderNav = tw.div`

${(p) => (p.expanded ? 'left-[-100%]' : 'left-[0]')}
  absolute
  flex
  w-screen
  h-screen
  bg-violet-custom
  flex-col
  top-[117px]

  z-[1000]
  transition 
  duration-1000
  text-white
  
`

const DefaultNav = tw.div `
hidden 
md:!block
md:flex md:items-center
`;



   //${(p) => (p.$primary ? "bg-indigo-600" : "bg-indigo-300")}
  // display: ${p => (p.expanded ? 'block' : 'none')};
