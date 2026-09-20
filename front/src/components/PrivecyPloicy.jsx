import React from 'react'
import Footer from './Common_componts/Footer'
import PrivacyHero from './privecyPolicy_components/HeroSections'
import Header from './Common_componts/Header'
import PrivacyContent from './privecyPolicy_components/PrivacyContent'
import ReturnRefundPolicy from './return_refund_com/ReturnRefundPolicy'

const PrivecyPloicy = () => {
  return (
    <>
    <Header/>
    <PrivacyHero/>
    <PrivacyContent/>
    <ReturnRefundPolicy/>
    <Footer/>
    </>
  )
}

export default PrivecyPloicy