import React from 'react'
import Icon1 from '../images/vehicle.png' 
import Icon2 from '../images/three.png'
import Icon3 from '../images/piggy.png' 
import { 
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP
 } from './ServicesElements'
const Services = () => {
  return (
    <ServicesContainer id='services'>
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1} />
                <ServicesH2>Lorem Ipsum</ServicesH2>
                <ServicesP>Lorem ipsum dolor sit amet, consectetur adipiscing elit</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2} />
                <ServicesH2>Lorem Ipsum</ServicesH2>
                <ServicesP>Lorem ipsum dolor sit amet, consectetur adipiscing elit</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3} />
                <ServicesH2>Lorem Ipsum</ServicesH2>
                <ServicesP>Lorem ipsum dolor sit amet, consectetur adipiscing elit</ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services