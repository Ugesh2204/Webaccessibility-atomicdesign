import React from 'react'
import styled from 'styled-components'
import {BREAKPOINTS} from '../../../Responsive';
import tw from "tailwind-styled-components"
import PeopleMobilebg from '../../assets/images/peopleMobile-bg.png'
import PeopleTabletbg from '../../assets/images/peopleTablet-bg.png'

function People() {
  return (
    <>
    {/* <img className =" md:hidden" src={PeopleMobilebg} alt="Background Images"/>
    */}

    <Imagebg role='img' aria-label="Happy people faces" alt="Happy people faces"></Imagebg>

    </>
   
  )
}

export default People;


const Imagebg = styled.div`

  background-image:url(${PeopleMobilebg});
  height:153px;
  background-repeat: no-repeat;
  background-size:cover;


  @media ${BREAKPOINTS.tablet} {
    background-image:url(${PeopleTabletbg});
    height:303px;
  
  }
`;




