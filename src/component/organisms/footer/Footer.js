import React from 'react'
import styled from 'styled-components'
import {BREAKPOINTS} from '../../../Responsive';
import tw from "tailwind-styled-components"
import FooterMobileBg from '../../assets/images/footer_Mobile_bg.png';
import FooterTableBg from '../../assets/images/footer_Tablet_bg.png';
import FooterDeskstopBg from '../../assets/images/footer_Deskstop_bg.png';
import IconFooterNumber from '../../atoms/icons/IconFooterNumber';
import Downloadlink from '../../atoms/buttons/Downloadlink';


const ModifiedDownloadlinkBtn = tw(Downloadlink)`
  bg-violet-custom
  hover:lightviolet
`;


function footer() {
  return (
    <Footerbg>

        <IconFooterNumber/>
        <div className='w-full h-full flex justify-center items-center'>
          <ModifiedDownloadlinkBtn></ModifiedDownloadlinkBtn>
        </div>
        
    </Footerbg>
  )
}

export default footer;

const Footerbg = styled.footer `
  position:relative;
  width:100%;
  background-image:url(${FooterMobileBg});
  height:428px;
  background-repeat: no-repeat;
  background-size:cover;

  @media ${BREAKPOINTS.tablet} {
    background-image:url(${FooterTableBg});
    height:428px;
  }

  @media ${BREAKPOINTS.desktop} {
    background-image:url(${FooterDeskstopBg});
    height:308px;
  }

`;


