import React from 'react'
import Hombre from '../../img/desktop/image-interactive.jpg'
import {StylesBanner,Informacion, H1, Span, BannerImage} from './StyledMainBanner'

const MainBanner = () => {
  return (
    <StylesBanner>
      
        <BannerImage>
          <img src={Hombre} alt="hombre" />
        </BannerImage>
      <Informacion>
      <H1>THE LEADER IN INTERACTIVE VR</H1>
      <Span>Founded in 2011, loopstudios hos been produccing worlf-class virtual reality projects for some of the best companies around the globe. our award-winning creations have transformed bussinesses through digital experiences tha bind to their brand</Span>
      </Informacion>

    </StylesBanner>
  )
}

export default MainBanner
