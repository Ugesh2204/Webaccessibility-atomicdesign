import React from 'react'
import Gallery from '../../molecules/GalleryImages/Gallery'
import IconNumber from '../../atoms/icons/IconNumber'
import Webaccessibilitytxt from '../../molecules/webaccessibilitytxt/Webaccessibilitytxt'
import Accordion from '../../molecules/accordion/Accordion'
import {accordionData} from '../../../utils/accordioData'
import Contact from '../../molecules/contactform/Contact'
import Accordionframermotion from '../../molecules/accordion/Accordionframermotion'


function Mainhome() {
  return (
    <>
   
    <section className='flex justify-center mb-12'>
      <IconNumber/>
    </section>
    <section className='md:flex justify-center'>
      <Gallery/>
    </section>
    <section className='mt-12 mb-[2rem] px-[2rem]'>
      <Webaccessibilitytxt/>
    </section>

    {/* <section className='mt-12 mb-[2rem] px-[2rem]'>
      <ul>
        {accordionData.map(({id,title,content}) => (
            <Accordion key={id} id={id} title={title} content={content}/>
        ))}
      </ul>
    </section> */}

    <section className='mt-12 mb-[2rem] px-[1rem]'>
      
      {accordionData.map(({id,title,content}) => (
            <Accordionframermotion key={id} id={id} title={title} content={content}/>
      ))}
     
    
 
    </section>

    <section className="mb-[10rem] px-[2rem]">
      <Contact/>
    </section>

    </>
  
  
  )
}

export default Mainhome