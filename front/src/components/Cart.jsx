import React from "react";
import Header from "./Common_componts/Header";
import Footer from "./Common_componts/Footer";
import CartItems from "./CartPage/CartItems";
import YouMayAlsoLike from "./CartPage/YouMayAlsoLike";
import CartSidebar from "./CartPage/CartSidebar";

const Cart = () => {
  return (
    <>
      {/*         = HEADER         = */}
      <Header />

      {/*         = CART PAGE         = */}
      <main className="min-h-screen bg-[#f4faff] px-4 py-8 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-[1400px]">
          {/*         = MAIN CART AREA         = */}
          <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1fr_390px]">
            {/*         = LEFT SIDE         = */}
            <div className="min-w-0">
              {/* Cart Products */}
              <CartItems />

              {/* Recommended Books */}
              <div className="mt-6">
                <YouMayAlsoLike />
              </div>
            </div>

            {/*         = RIGHT SIDE         = */}
            <div className="min-w-0">
              <CartSidebar />
            </div>
          </div>
        </div>
      </main>

      {/*         = FOOTER         = */}
      <Footer />
    </>
  );
};

export default Cart;