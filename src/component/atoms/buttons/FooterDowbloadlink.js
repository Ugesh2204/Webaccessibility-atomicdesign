import React from 'react'

function FooterDowbloadlink() {
  return (
    <>
    <FooterDownloadbtn href="#">Download v1.3</FooterDownloadbtn>
    </>
  )
}

export default FooterDowbloadlink;

const FooterDownloadbtn = tw.a `
  max-w-[55%]
  m-auto
  py-[0.5rem]
  px-[1.5rem]
  rounded-[50px]
  font-black
  font-[1rem]
  bg-violet-custom
  text-white
  hover:bg-lightblue
  hover:bg-lightviolet
  hover:text-dark-custom
  mb-[1rem]
  ease-in duration-300
  md:m-0
  md:mr-2
`;