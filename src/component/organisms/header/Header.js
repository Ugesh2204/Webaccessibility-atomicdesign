import React from 'react'
import Gallery from '../../molecules/GalleryImages/Gallery'
import HeroBanner from '../../molecules/hero/HeroBanner'

function Header() {
  return (
    <>
    <header className='mb-12'>
    <a href="#main" className='skip font-black
     bg-blue-custom font-[1.5rem] text-white px-4 py-1'>Skip to main content</a>
      <HeroBanner/>
    </header>
    </>

  )
}

export default Header