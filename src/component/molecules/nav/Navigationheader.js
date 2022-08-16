import React from 'react'
import { NavLink } from 'react-router-dom';
import Logo from '../../atoms/logo/Logo'
import Skiplink from '../../atoms/skiplink/Skiplink';
import Navlinks from './Navlinks';

function Navigationheader() {
  return (
    <header>
      <Skiplink/>
      <nav className ="flex justify-between items-center h-[6rem] bg-white 
      text-black shadow-sm relative font-Redhat font-black px-[10%] mb-8 text-[1.2rem]" role="Navigation">
        <a href='#' aria-label="Go to HellWorld.com"><Logo/></a>
          <div className="px-4 cursor-pointer md:hidden">
            <svg className="w-6 h-6" fill="none" 
            stroke="currentColor" viewBox="0 0 24 24"
             xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round"
              strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          </div>
        
          <div className="pr-8 hidden md:!block">
          <Navlinks/>
          </div>
      </nav>
    </header>
 
  )
}

export default Navigationheader