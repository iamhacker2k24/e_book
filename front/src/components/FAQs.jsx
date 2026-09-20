import React from "react";
import Header from "./Common_componts/Header";
import Footer from "./Common_componts/Footer";
import FAQSection from "./FAQs/FAQSection";
import JoinCommunity from "./Common_componts/JoinCommunity";
import Hero_Section from "./return_refund_com/Hero_Sections";

const FAQs = () => {
  return (
    <>
      <Header />
        <Hero_Section/>
      <FAQSection />
      <JoinCommunity />
      <Footer />
    </>
  );
};

export default FAQs;
