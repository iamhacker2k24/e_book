import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiTag, FiCheck, FiArrowRight, FiZap } from "react-icons/fi";

const Offers_Section = () => {
  const [copied, setCopied] = useState(false);

  const copyCoupon = () => {
    navigator.clipboard?.writeText("BOOK20");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="w-full bg-white py-6">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-800 p-6 sm:p-8 text-white shadow-xl shadow-blue-200/50">
          {/* Subtle Background Glow */}
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-2xl pointer-events-none" />
          <div className="absolute -left-16 -bottom-16 h-64 w-64 rounded-full bg-purple-500/20 blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3.5 py-1 text-xs font-semibold backdrop-blur-sm">
                <FiZap className="text-amber-300" />
                <span>Special Spring Reading Bonus</span>
              </div>
              <h2 className="mt-3 text-2xl font-extrabold sm:text-3xl lg:text-4xl tracking-tight">
                Get an Extra ₹200 OFF Today
              </h2>
              <p className="mt-2 text-sm text-blue-100 max-w-xl">
                Use code <span className="font-bold underline text-amber-300">BOOK20</span> at checkout on any order. Instant discount applied across all eBooks!
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={copyCoupon}
                className="flex items-center gap-2 rounded-xl bg-white/10 px-4 py-3 text-xs font-bold text-white backdrop-blur-md border border-white/20 transition hover:bg-white/20 active:scale-95"
              >
                <FiTag />
                <span>{copied ? "Copied: BOOK20!" : "Code: BOOK20"}</span>
                {copied && <FiCheck className="text-green-300" />}
              </button>

              <Link
                to="/books"
                className="flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-xs font-bold text-blue-700 shadow-md transition hover:bg-blue-50 active:scale-95"
              >
                <span>Browse Deals</span>
                <FiArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offers_Section;
