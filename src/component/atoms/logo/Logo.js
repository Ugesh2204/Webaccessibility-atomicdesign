import React from 'react'
import helloworldlogo from '../../assets/images/HelloWorld-logo.png'
import tw from "tailwind-styled-components"

function Logo() {
  return (
    <>
    <ImageLogo  src={helloworldlogo} alt="Home of Helloworld"/>
    </>
  )
}

export default Logo


const ImageLogo = tw.img`
`;