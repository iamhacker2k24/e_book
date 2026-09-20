import React from "react";
import Header from "./Common_componts/Header";
import Footer from "./Common_componts/Footer";
import CategoriesGrid from "./Catagories/CategoriesGrid";
import CategoryCTA from "./Catagories/CategoryCTA";

const Catagories = () => {
  return (
    <>
      <Header />
      <CategoriesGrid />
      <CategoryCTA/>
      <Footer />
    </>
  );
};

export default Catagories;
