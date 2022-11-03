import React, { useState } from 'react'
import HeroSection from '../HeroSection';
import InfoSection from '../infoSection';
import { homeObjOne } from '../infoSection/Data';
import Navbar from '../Navbar'
import SideBar from '../Sidebar'

export const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

  return (
    <>
        <SideBar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <HeroSection />
        <InfoSection {...homeObjOne}/>
    </>
  )
}
