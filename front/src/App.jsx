import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";

// Pages (Preserving all original file and folder names)
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import PrivecyPloicy from "./components/PrivecyPloicy";
import Return_Refund from "./components/Return_Refund";
import Shipping_Delivery from "./components/Shipping_Delivery";
import FAQs from "./components/FAQs";
import Catagories from "./components/Catagories";
import AllBook from "./components/AllBook";
import ProductPage from "./components/ProductPage";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Logout from "./components/Logout";
import BackToTop from "./components/Common_componts/BackToTop";
import RouteLoader from "./components/Common_componts/RouteLoader";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <BackToTop />
          <RouteLoader>
            <Routes>
            {/* Main Store Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<AllBook />} />
            <Route path="/all-books" element={<Navigate to="/books" replace />} />
            <Route path="/book/:id" element={<ProductPage />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/categories" element={<Catagories />} />
            <Route path="/cart" element={<Cart />} />

            {/* Auth Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/signin" element={<Navigate to="/login" replace />} />
            <Route path="/signup" element={<Navigate to="/login" replace />} />

            {/* Information & Policy Routes */}
            <Route path="/about" element={<AboutUs />} />
            <Route path="/about-us" element={<Navigate to="/about" replace />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/faq" element={<Navigate to="/faqs" replace />} />
            <Route path="/shipping" element={<Shipping_Delivery />} />
            <Route path="/shipping-delivery" element={<Navigate to="/shipping" replace />} />
            <Route path="/return-refund" element={<Return_Refund />} />
            <Route path="/returns" element={<Navigate to="/return-refund" replace />} />
            <Route path="/privacy" element={<PrivecyPloicy />} />
            <Route path="/privacy-policy" element={<Navigate to="/privacy" replace />} />

            {/* Catch-all fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          </RouteLoader>
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
