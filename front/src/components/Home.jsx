import React from "react";
import Header from "./Common_componts/Header";
import Footer from "./Common_componts/Footer";
import JoinCommunity from "./Common_componts/JoinCommunity";
import BestsellingBooks from "./Home_Componets/BestsellingBooks";
import Category from "./Home_Componets/Category";
import Featured_Books from "./Home_Componets/Featured_Books";
import Features from "./Home_Componets/Features";
import Hero_Section from "./Home_Componets/Hero_Section";
import Offers_Section from "./Home_Componets/Offers_Section";
import Offers from "./Home_Componets/Offers";

import Review from "./Home_Componets/Review";
const Home = () => {
  return (
    <>
      <Header />
      <Hero_Section />
      <Category />
      <Featured_Books />
      <BestsellingBooks />
      <Features />
      <Offers />
      <Offers_Section />
      <Review />
      <JoinCommunity />
      <Footer />
    </>
  );
};

export default Home;
