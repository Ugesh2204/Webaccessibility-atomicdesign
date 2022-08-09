import React from 'react'
import Gallery from '../../molecules/GalleryImages/Gallery'
import IconNumber from '../../atoms/icons/IconNumber'
import Webaccessibilitytxt from '../../molecules/webaccessibilitytxt/Webaccessibilitytxt'
import Accordion from '../../molecules/accordion/Accordion'
import {accordionData} from '../../../utils/accordioData'


function Main() {
  return (
  <main id='main' className='px-[10%]'>
    <section className='flex justify-center mb-12'>
      <IconNumber/>
    </section>
    <section className='md:flex justify-center'>
      <Gallery/>
    </section>
    <section className='mt-12 mb-[2rem] px-[2rem]'>
      <Webaccessibilitytxt/>
    </section>

    <section className='mt-12 mb-[8rem] px-[2rem]'>
      {accordionData.map(({title,content}) => (
          <Accordion title={title} content={content}/>
      ))}
   
    </section>
   
  </main>
  
  )
}

export default Main