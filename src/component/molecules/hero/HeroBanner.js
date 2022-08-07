import React from 'react'
import Downloadlink from '../../atoms/buttons/Downloadlink'
import WhatIsIt from '../../atoms/buttons/WhatIsIt'
import Logo from '../../atoms/logo/Logo'
import People from '../../atoms/people/People'
import Peopleleftbg from '../../atoms/people/Peopleleftbg'
import Peoplerightbg from '../../atoms/people/Peoplerightbg'



function HeroBanner() {
  return (
    <>
    <div className="w-full flex justify-center py-[3rem]">
      <Logo/>
    </div>

    <section className='w-full md:flex'>
      <div className='w-full mb-[3rem] block md:hidden '>
        <People/>
      </div>
      <div className='hidden md:block'>
        <Peopleleftbg/>
      </div>
      <div className='px-[2.2rem] mb-[3rem]'>
        <h1 className='font-Redhat text-[3rem] text-center leading-[40px] font-black mb-[1.5rem] text-gray-900
        lg:text-[4rem] lg:leading-[4rem]'>
          The Web for Everyone</h1>
        <p className='font-Redhat text-center'>The power of the Web is in its universality.
            Access by everyone regardless of disability is an essential aspect.</p>
      </div>
      <div className='hidden md:block'>
        <Peoplerightbg/>
      </div>
    </section>

    <section className="w-full flex justify-center flex-col md:flex-row">
      <Downloadlink/>
      <WhatIsIt/>
    </section>
    </>
   
  )
}

export default HeroBanner