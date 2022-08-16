import React from 'react'
import { NavLink } from 'react-router-dom';

function Navlinks() {
  return (
    <>
        <NavLink to={'/'} className="p-4">Home</NavLink>
        <NavLink to={'/about'} className="p-4">About</NavLink>
        <NavLink to={'/location'} className="p-4">Locations</NavLink>
    </>
  )
}

export default Navlinks