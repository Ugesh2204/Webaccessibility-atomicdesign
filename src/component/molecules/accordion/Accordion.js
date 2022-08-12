import React, { useState } from 'react';

function Accordion({id, title, content}) {
    const [isActive, setisActive] = useState(false);
    console.log(isActive);
  return (
    <>
    
        <li>
            <button 
                id={`accordion-header-${id}`}
                aria-expanded={isActive}
                aria-controls= {`section_${id}`}
                onClick = {()=> setisActive(!isActive)} 
                className={`w-full flex justify-between px-3 py-2 
              bg-blue-custom text-white font-black font-[1rem] mb-1 rounded-[50px]`}>
                    {title} 
                    <span>{isActive ? '-' : '+'}</span>
            </button>

            {isActive && 

            <div id={`section_${id}`} aria-labelledby={`accordion-header-${id}`} className={`accordion-content px-5 mb-1 ${isActive ? 'h-full':'h-0'} `}>
                <p className='p-2'>{content}</p>
            </div>
            } 
          

           
        </li>
 
    
    </>
  )
}

export default Accordion