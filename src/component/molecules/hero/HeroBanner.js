import React from 'react'
import Downloadlink from '../../atoms/buttons/Downloadlink'
import Logo from '../../atoms/logo/Logo'
import People from '../../atoms/people/People'


function HeroBanner() {
  return (
    <>
    <div className="w-full flex justify-center py-[3rem]">
      <Logo/>
    </div>
    <div className='w-full mb-[3rem]'>
      <People/>
    </div>
    <div className='px-[2.2rem] mb-[3rem]'>
      <h1 className='font-Redhat text-[3rem] text-center leading-[40px] font-black mb-[1.5rem] text-gray-900'>Web for Everyone</h1>
      <p className='font-Redhat text-center'>The power of the Web is in its universality.
          Access by everyone regardless of disability is an essential aspect.</p>
    </div>
    <div className="w-full flex justify-center">
      <Downloadlink/>
    </div>
    </>
   
  )
}

export default HeroBanner