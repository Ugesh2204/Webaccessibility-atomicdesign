import React from 'react'
import Header from '../component/organisms/header/Header'

import Footer from '../component/organisms/footer/Footer'
import Mainhome from '../component/organisms/main/Mainhome'

function Home() {
  return (
    <>
     <a href="#main" className='skip font-black
     bg-blue-custom font-[1.5rem] text-white px-4 py-1'>Skip to main content</a>
    <header className='mb-12' role="banner">
       <Header/>
    </header>
    <main className='px-[10%]'>
      <Mainhome/>
    </main>

    <Footer/>
    
    

    </>
  )
}

export default Home