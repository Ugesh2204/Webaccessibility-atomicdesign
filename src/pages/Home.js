import React from 'react'
import Header from '../component/organisms/header/Header'

import Footer from '../component/organisms/footer/Footer'
import Mainhome from '../component/organisms/main/Mainhome'
import HeroBanner from '../component/molecules/hero/HeroBanner'

function Home() {
  return (
    <>
      <section>
        <HeroBanner/>
      </section>
      <main className='px-[10%]'>
        <Mainhome/>
      </main>
    </>
  )
}

export default Home