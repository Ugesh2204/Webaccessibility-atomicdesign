import React, { useState } from 'react';
import arrowup from '../../assets/images/arrowup.png'
import arrowdown from '../../assets/images/arrowdown.png'
import { motion, AnimatePresence } from "framer-motion";



function Accordion({id, title, content}) {
    const [isActive, setisActive] = useState(false);
    console.log(isActive);

    const mountedStyle = { animation: "inAnimation 250ms ease-in" };
    const unmountedStyle = {
      animation: "outAnimation 270ms ease-out",
      animationFillMode: "forwards"
    };
  
  return (
    <>
  
    
        <li>
            <button 
                id={`accordion-header-${id}`}
                aria-expanded={isActive}
                aria-controls= {`section_${id}`}
                onClick = {()=> setisActive(!isActive)} 
                className={`accordion-button
                w-full flex justify-between px-3 py-2 
              bg-blue-custom text-white font-black   mb-1 rounded-[50px] text-[0.8rem] items-center`}>
                    {title} 
                    <span className='p-1 transition-all'>
                      {
                        isActive ? <img src={arrowup} alt="Open accordion"/> : <img src={arrowdown} alt="Close accordion"/>
                      }
                  </span>
            </button>

            {isActive && 

            <div id={`section_${id}`}  aria-labelledby={`accordion-header-${id}`}  
            className={` px-5  transition-[height]  duration-1000 ease-in-out transform  ${isActive ? 'h-[auto]':'h-0'} `}
           >
                <p className='p-2 '>{content}</p>
           
            </div>
            } 
          

           
        </li>



        
 
    
    </>
  )
}

export default Accordion