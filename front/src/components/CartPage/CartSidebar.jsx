import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Lock,
  Tag,
  Truck,
  ShieldCheck,
  Award,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { useCart } from "../../context/CartContext";

const CartSidebar = (props) => {
  const cartContext = useCart();
  const navigate = useNavigate();

  const subtotal = props.subtotal !== undefined ? props.subtotal : cartContext.subtotal;
  const discount = props.discount !== undefined ? props.discount : cartContext.discount;
  const itemCount = props.itemCount !== undefined ? props.itemCount : cartContext.cartCount;
  const deliveryCharge =
    props.deliveryCharge !== undefined ? props.deliveryCharge : cartContext.deliveryCharge;
  const total = props.total !== undefined ? props.total : cartContext.total;

  const [couponInput, setCouponInput] = useState("");
  const [couponFeedback, setCouponFeedback] = useState(null);
  const [checkingOut, setCheckingOut] = useState(false);

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (!couponInput.trim()) return;
    const res = cartContext.applyCoupon(couponInput);
    setCouponFeedback(res);
  };

  const handleCheckout = async () => {
    if (itemCount === 0) {
      alert("Your cart is empty. Add some eBooks first!");
      return;
    }
    setCheckingOut(true);
    try {
      const result = await cartContext.submitCheckout();
      if (result.success) {
        alert(result.simulated ? "Order placed successfully! (Ready for backend order processing)" : "Order placed successfully!");
        navigate("/");
      }
    } catch (e) {
      alert("Checkout failed: " + e.message);
    } finally {
      setCheckingOut(false);
    }
  };

  return (
    <aside className="w-full space-y-4">
      {/*         = ORDER SUMMARY         = */}
      <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-sm">
        <h2 className="text-lg font-bold text-[#07144d] dark:text-white">Order Summary</h2>

        <div className="mt-5 space-y-3 text-sm">
          {/* Subtotal */}
          <div className="flex items-center justify-between">
            <span className="text-slate-500 dark:text-slate-400">
              Subtotal ({itemCount} {itemCount === 1 ? "item" : "items"})
            </span>
            <span className="font-semibold text-slate-800 dark:text-white">
              ₹{subtotal.toLocaleString("en-IN")}
            </span>
          </div>

          {/* Discount */}
          {discount > 0 && (
            <div className="flex items-center justify-between">
              <span className="text-slate-500 dark:text-slate-400">Discount</span>
              <span className="font-semibold text-green-600 dark:text-green-400">
                - ₹{discount.toLocaleString("en-IN")}
              </span>
            </div>
          )}

          {/* Delivery */}
          <div className="flex items-center justify-between">
            <span className="text-slate-500 dark:text-slate-400">Delivery Fee</span>
            <span className="font-semibold text-green-600 dark:text-green-400">
              {deliveryCharge === 0 ? "FREE (Instant Download)" : `₹${deliveryCharge}`}
            </span>
          </div>
        </div>

        <div className="my-4 h-px bg-slate-200 dark:bg-slate-800" />

        {/* Total */}
        <div className="flex items-center justify-between">
          <span className="text-base font-bold text-slate-900 dark:text-white">Total Amount</span>
          <span className="text-2xl font-extrabold text-blue-600 dark:text-blue-400">
            ₹{total.toLocaleString("en-IN")}
          </span>
        </div>

        {discount > 0 && (
          <p className="mt-2 text-right text-xs font-semibold text-green-600 dark:text-green-400">
            You saved ₹{discount.toLocaleString("en-IN")} on this order 🎉
          </p>
        )}

        {/* Checkout Button */}
        <button
          type="button"
          disabled={itemCount === 0 || checkingOut}
          onClick={handleCheckout}
          className="mt-5 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-sm font-bold text-white shadow-lg shadow-blue-200 dark:shadow-none transition hover:from-blue-700 hover:to-indigo-700 active:scale-98 disabled:opacity-50 disabled:pointer-events-none"
        >
          <Lock size={16} />
          <span>{checkingOut ? "Processing Payment..." : "Proceed to Checkout"}</span>
        </button>
      </section>

      {/*         = APPLY COUPON         = */}
      <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-sm">
        <div className="flex items-center gap-2">
          <Tag size={18} className="text-blue-600 dark:text-blue-400" />
          <h2 className="text-sm font-bold text-[#07144d] dark:text-white">Promo / Coupon Code</h2>
        </div>

        <form onSubmit={handleApplyCoupon} className="mt-3 flex gap-2">
          <input
            type="text"
            value={couponInput}
            onChange={(e) => setCouponInput(e.target.value)}
            placeholder="e.g. BOOK20"
            className="h-10 flex-1 uppercase rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-3 text-xs font-semibold text-slate-800 dark:text-white outline-none transition focus:border-blue-500 focus:bg-white dark:focus:bg-slate-800"
          />
          <button
            type="submit"
            className="rounded-xl bg-slate-900 dark:bg-blue-600 px-4 text-xs font-bold text-white transition hover:bg-blue-600 dark:hover:bg-blue-700 active:scale-95"
          >
            Apply
          </button>
        </form>

        {couponFeedback && (
          <div
            className={`mt-2 flex items-center gap-1.5 text-xs font-medium ${
              couponFeedback.success ? "text-green-600 dark:text-green-400" : "text-red-500 dark:text-red-400"
            }`}
          >
            {couponFeedback.success ? (
              <CheckCircle size={14} />
            ) : (
              <AlertCircle size={14} />
            )}
            <span>{couponFeedback.message}</span>
          </div>
        )}

        <p className="mt-3 text-[11px] text-slate-400 dark:text-slate-500">
          Try promo code <span className="font-bold text-blue-600 dark:text-blue-400">BOOK20</span> or{" "}
          <span className="font-bold text-blue-600 dark:text-blue-400">READMORE</span> for discounts.
        </p>
      </section>

      {/*         = GUARANTEES         = */}
      <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-sm space-y-3 text-xs text-slate-600 dark:text-slate-300">
        <div className="flex items-center gap-2.5">
          <Truck size={16} className="text-blue-600 dark:text-blue-400" />
          <span>Instant cloud delivery & reading on any device</span>
        </div>
        <div className="flex items-center gap-2.5">
          <ShieldCheck size={16} className="text-blue-600 dark:text-blue-400" />
          <span>Guaranteed DRM safe & verified publisher files</span>
        </div>
        <div className="flex items-center gap-2.5">
          <Award size={16} className="text-blue-600 dark:text-blue-400" />
          <span>7-day money-back satisfaction guarantee</span>
        </div>
      </section>
    </aside>
  );
};

export default CartSidebar;