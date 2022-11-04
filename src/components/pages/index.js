import React, { useState } from 'react'
import { Outlet } from 'react-router-dom';
import HeroSection from '../HeroSection';
import InfoSection from '../infoSection';
import { homeObjOne, homeObjThree, homeObjTwo } from '../infoSection/Data';
import Navbar from '../Navbar'
import Services from '../Services';
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
        <InfoSection {...homeObjTwo}/>
        <Services />
        <InfoSection {...homeObjThree}/>
        
    </>
  )
}
