import React from "react";
import Header from "./Common_componts/Header";
import Footer from "./Common_componts/Footer";
import CategoriesGrid from "./Catagories/CategoriesGrid";
import CategoryCTA from "./Catagories/CategoryCTA";
import PopularCategories from "./Catagories/PopularCategories";
import FeaturesBar from "./Catagories/FeaturesBar";

const Catagories = () => {
  return (
    <>
      <Header />
      <CategoriesGrid />
      <CategoryCTA/>
      <PopularCategories/>
      <FeaturesBar/>
      <Footer />
    </>
  );
};

export default Catagories;
