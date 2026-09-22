import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaGooglePlay,
  FaApple,
} from "react-icons/fa";
import { FiHeart } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="w-full border-t border-slate-200 bg-white">
      {/* ================= MAIN FOOTER ================= */}
      <div className="mx-auto max-w-[1400px] px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* ================= BRAND ================= */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 shadow-md shadow-blue-100 transition group-hover:scale-105">
                <span className="text-2xl text-white">📖</span>
              </div>

              <div className="leading-none">
                <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 group-hover:text-blue-600 transition">
                  BookNest
                </h2>
                <p className="mt-1 text-xs font-medium text-slate-500">
                  Read · Learn · Grow
                </p>
              </div>
            </Link>

            {/* Description */}
            <p className="mt-5 max-w-[280px] text-sm leading-6 text-slate-500">
              Books open minds, build dreams and create a brighter tomorrow. Access thousands of eBooks anywhere.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-white transition-all duration-200 hover:-translate-y-1 hover:bg-blue-600"
              >
                <FaFacebookF className="text-sm" />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-white transition-all duration-200 hover:-translate-y-1 hover:bg-pink-600"
              >
                <FaInstagram className="text-sm" />
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-white transition-all duration-200 hover:-translate-y-1 hover:bg-red-600"
              >
                <FaYoutube className="text-sm" />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-white transition-all duration-200 hover:-translate-y-1 hover:bg-blue-700"
              >
                <FaLinkedinIn className="text-sm" />
              </a>
            </div>
          </div>

          {/* ================= QUICK LINKS ================= */}
          <div>
            <h3 className="text-sm font-bold text-slate-900">Quick Links</h3>
            <ul className="mt-4 space-y-2.5">
              {[
                { name: "Home", to: "/" },
                { name: "Books", to: "/books" },
                { name: "Categories", to: "/categories" },
                { name: "Deals", to: "/books?badge=Bestseller" },
                { name: "About Us", to: "/about" },
                { name: "Cart", to: "/cart" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.to}
                    className="text-sm text-slate-500 transition-colors hover:text-blue-600"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= CATEGORIES ================= */}
          <div>
            <h3 className="text-sm font-bold text-slate-900">Categories</h3>
            <ul className="mt-4 space-y-2.5">
              {[
                "Self-Help",
                "Business",
                "Fiction",
                "Technology",
                "Science",
                "Academic",
              ].map((cat) => (
                <li key={cat}>
                  <Link
                    to={`/books?category=${encodeURIComponent(cat)}`}
                    className="text-sm text-slate-500 transition-colors hover:text-blue-600"
                  >
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= HELP & SUPPORT ================= */}
          <div>
            <h3 className="text-sm font-bold text-slate-900">Help & Support</h3>
            <ul className="mt-4 space-y-2.5">
              {[
                { name: "FAQs", to: "/faqs" },
                { name: "Shipping & Delivery", to: "/shipping" },
                { name: "Returns & Refunds", to: "/return-refund" },
                { name: "Privacy Policy", to: "/privacy" },
                { name: "Customer Support", to: "/about" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.to}
                    className="text-sm text-slate-500 transition-colors hover:text-blue-600"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= DOWNLOAD APP ================= */}
          <div>
            <h3 className="text-sm font-bold text-slate-900">Download Our App</h3>
            <p className="mt-1 text-sm text-slate-500">Read on the go anytime!</p>

            <div className="mt-5 flex flex-col gap-3">
              {/* Google Play */}
              <a
                href="#download-play"
                onClick={(e) => {
                  e.preventDefault();
                  alert("BookNest Android app is coming soon to Google Play Store!");
                }}
                className="flex h-12 w-[165px] items-center gap-3 rounded-lg bg-black px-4 text-white transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <FaGooglePlay className="text-xl" />
                <div className="leading-tight">
                  <span className="block text-[9px] uppercase">Get it on</span>
                  <span className="text-sm font-semibold">Google Play</span>
                </div>
              </a>

              {/* App Store */}
              <a
                href="#download-apple"
                onClick={(e) => {
                  e.preventDefault();
                  alert("BookNest iOS app is coming soon to Apple App Store!");
                }}
                className="flex h-12 w-[165px] items-center gap-3 rounded-lg bg-black px-4 text-white transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <FaApple className="text-2xl" />
                <div className="leading-tight">
                  <span className="block text-[9px]">Download on the</span>
                  <span className="text-sm font-semibold">App Store</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* ================= DIVIDER ================= */}
        <div className="mt-10 border-t border-slate-200" />

        {/* ================= BOTTOM ================= */}
        <div className="flex flex-col items-center justify-between gap-5 pt-5 sm:flex-row text-center sm:text-left">
          {/* Copyright */}
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} BookNest. All rights reserved. Built with love for readers.
          </p>

          {/* Bottom Slogan */}
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium italic text-slate-500">
              Good Books Brighter Lives
            </span>
            <FiHeart className="text-lg text-pink-500" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;