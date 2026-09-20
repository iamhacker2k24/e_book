import React from 'react'
import Header from './Common_componts/Header'
import Footer from './Common_componts/Footer'
import AboutHero from './About_Componets/AboutHero'
import JoinCommunity from './Common_componts/JoinCommunity'
import WhoWeAre from './About_Componets/WhoWeAre'
import MissionVisionValues from './About_Componets/MissionVisionValues'
import AboutStats from './About_Componets/AboutStats'
import WhyChoose from './About_Componets/WhyChoose'

const AboutUs = () => {
  return (
    <>
    <Header/>
    <AboutHero/>
    <WhoWeAre/>
    <MissionVisionValues/>
    <AboutStats/>
    <WhyChoose/>
    <JoinCommunity/>
    <Footer/>
    </>
  )
}

export default AboutUs