import React from 'react'
import iconClose from '../../assets/images/icon-close.svg'
import iconHamburger from '../../assets/images/icon-hamburger.svg'
import tw from "tailwind-styled-components"

function HamburgerButton({expanded,setExpanded}) {
    console.log(expanded)
  return (
    <div>
      
         <Wrapper
            onClick = {()=>setExpanded(!expanded)}
            expanded={expanded}
            aria-expanded={expanded}
            aria-label="Mobile Navigation Open Menu Button">
            <img className='' 
            src={iconHamburger} alt={`${expanded ? 'Close' : 'Open'} Menu`}/>
         </Wrapper>
    </div>
  )
}

export default HamburgerButton

const Wrapper = tw.button `
  bg-violet-custom
  text-white
  p-4
  rounded-[50px]
  ease-in duration-300
`;
