import React from 'react'
import GalleryImgOne from '../../atoms/gallery/GalleryImgOne'
import GalleryImgTwo from '../../atoms/gallery/GalleryImgTwo'
import GalleryImgThree from '../../atoms/gallery/GalleryImgThree'
import GalleryImgFour from '../../atoms/gallery/GalleryImgFour'


function Gallery() {
  return (
   <>

    <figure className='grid grid-rows-2 grid-flow-col gap-2 md:mr-1
    md:grid md:grid-rows-1 md:grid-flow-col'>
        <GalleryImgOne/>
        <GalleryImgTwo/>
        <GalleryImgThree/>
        <GalleryImgFour/>
    </figure>

 
   </>
  )
}

export default Gallery