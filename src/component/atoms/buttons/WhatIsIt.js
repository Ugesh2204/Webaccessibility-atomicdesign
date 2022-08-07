import React from 'react'
import tw from "tailwind-styled-components"

function WhatIsIt() {
  return (
  <>
  <WhatisBtn>What is It</WhatisBtn>
  </>
  )
}

export default WhatIsIt;

const WhatisBtn = tw.button `
  max-w-[50%]
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


