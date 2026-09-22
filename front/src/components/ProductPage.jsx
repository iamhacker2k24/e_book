import React from "react";
import Footer from "./Common_componts/Footer";
import Header from "./Common_componts/Header"
import BookDetails from "./ProductPage/BookDetails";
import BookOverview from "./ProductPage/BookOverview";

const ProductPage = () => {
  return (
    <>
      <Header />
      <BookDetails />
      <BookOverview/>
      <Footer />
    </>
  );
};

export default ProductPage;
