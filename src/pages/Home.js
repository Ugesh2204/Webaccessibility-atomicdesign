import React from 'react'
import Header from '../component/organisms/header/Header'

import Footer from '../component/organisms/footer/Footer'
import Mainhome from '../component/organisms/main/Mainhome'
import HeroBanner from '../component/molecules/hero/HeroBanner'
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faBars,faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Home() {
  return (
    <>
      <section>
        <HeroBanner/>
      </section>
      <main id="main" className='px-[10%] mt-8'>
        <Mainhome/>
        {/* <button>
          Test
          <FontAwesomeIcon icon={faHome} />
          <FontAwesomeIcon icon={faBars} />
          <FontAwesomeIcon className='text-[5rem]' icon={faCaretDown} />
         
       
        </button> */}
       
      </main>
    </>
  )
}

export default Home