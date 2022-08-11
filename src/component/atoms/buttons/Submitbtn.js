import React from 'react'
import tw from "tailwind-styled-components"

function Submitbtn() {
  return (
    <SubmitButton type='submit' id='submit'>Send Message</SubmitButton>
  )
}

export default Submitbtn


const SubmitButton = tw.button `

  m-auto
  bg-violet-custom
  text-white
  py-[0.5rem]
  px-[1.5rem]
  rounded-[50px]
  font-black
  font-[1rem]
  hover:bg-lightviolet
  hover:text-dark-custom
  ease-in duration-300
  md:m-0
  md:ml-2
`;
