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
    {/* <section className="w-full flex justify-center py-[3rem]">
      <Logo/>
    </section> */}

    <section className='w-full md:flex md:flex-col lg:flex justify-center'>
      <div className='w-full mb-[3rem] block lg:hidden  '>
        <People/>
      </div>
      <div className=' lg:flex xl:flex 2xl:flex justify-center'>
        <div className='w-full hidden lg:!block '>
          <Peopleleftbg/>
        </div>
        <article aria-labelledby="title1" className='px-[2.2rem] mb-[3rem]'>
          <h1 id="title1" className='font-Redhat text-[3rem] text-center leading-[40px] font-black mb-[1.5rem] text-gray-900
          lg:text-[4rem] lg:leading-[4rem] xl:text-[7rem] xl:leading-[7rem]'>
            The Web for Everyone</h1>
          <p className='font-Redhat text-center'>The power of the Web is in its universality.
              Access by everyone regardless of disability is an essential aspect.</p>
        </article>
        <div className='w-full hidden lg:!block'>
          <Peoplerightbg/>
        </div>
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