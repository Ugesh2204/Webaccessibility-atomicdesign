import React from 'react'
import { NavLink } from 'react-router-dom';

function Navlinks({ expanded, setExpanded }) {
  const closeMobileMenu = () => {
		if (expanded == true) {
			setExpanded(false);
      console.log("yesy")
		}
	};
  return (
    
    <>
        <NavLink to={'/'} onClick={closeMobileMenu} className="p-4">Home</NavLink>
        <NavLink to={'/about'} onClick={closeMobileMenu} className="p-4">About</NavLink>
        <NavLink to={'/location'} onClick={closeMobileMenu} className="p-4">Locations</NavLink>
    </>
  )
}

export default Navlinks