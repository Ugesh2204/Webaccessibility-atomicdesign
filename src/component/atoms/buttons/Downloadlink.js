import React from 'react'
import tw from "tailwind-styled-components"

function Downloadlink() {
  return (
    <>
    <Downloadbtn className="" href="#">Download v1.3</Downloadbtn>
    </>
   
  )
}

export default Downloadlink


const Downloadbtn = tw.a `
  max-w-[55%]
  m-auto
  bg-blue-custom
  text-white
  py-[0.5rem]
  px-[1.5rem]
  rounded-[50px]
  font-black
  font-[1rem]
  hover:bg-lightblue
  hover:underline 
  hover:text-dark-custom
  mb-[1rem]
  ease-in duration-300
  md:m-0
  md:mr-2
 

`;