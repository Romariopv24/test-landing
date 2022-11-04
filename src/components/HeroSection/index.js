import React, { useState } from 'react'
import { Button } from '../ButtonElement'
import {
    HeroContainer,
    HeroBg,
    BlackBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
} from './HeroElements'

function HeroSection() {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }

  return (
    <HeroContainer >
        <HeroBg>
            <BlackBg  />
        </HeroBg>
        <HeroContent>
        <HeroH1>Lorem ipsum dolor sit amet, consectetur adipiscing elit</HeroH1>
        <HeroP> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  
        </HeroP>
        <HeroBtnWrapper>
            <Button to="singup" 
            onMouseEnter={onHover} 
            onMouseLeave={onHover}
            primary='true'
            dark='true'
            >
                Get started { hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
        </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection