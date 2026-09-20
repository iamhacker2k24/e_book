import React from "react";

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
      <div className="mx-auto max-w-[1400px] px-6 py-10">

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">

          {/* ================= BRAND ================= */}
          <div className="lg:col-span-1">

            {/* Logo */}
            <div className="flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 shadow-md shadow-blue-100">
                <span className="text-2xl text-white">
                  📖
                </span>
              </div>

              <div className="leading-none">
                <h2 className="text-2xl font-extrabold tracking-tight text-slate-900">
                  BookNest
                </h2>

                <p className="mt-1 text-xs font-medium text-slate-500">
                  Read · Learn · Grow
                </p>
              </div>

            </div>

            {/* Description */}
            <p className="mt-5 max-w-[280px] text-sm leading-6 text-slate-500">
              Books open minds, build dreams and create a brighter tomorrow.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex items-center gap-3">

              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-white transition-all duration-200 hover:-translate-y-1 hover:bg-blue-600"
              >
                <FaFacebookF className="text-sm" />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-white transition-all duration-200 hover:-translate-y-1 hover:bg-pink-600"
              >
                <FaInstagram className="text-sm" />
              </a>

              <a
                href="#"
                aria-label="YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-white transition-all duration-200 hover:-translate-y-1 hover:bg-red-600"
              >
                <FaYoutube className="text-sm" />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-white transition-all duration-200 hover:-translate-y-1 hover:bg-blue-700"
              >
                <FaLinkedinIn className="text-sm" />
              </a>

            </div>
          </div>

          {/* ================= QUICK LINKS ================= */}
          <div>
            <h3 className="text-sm font-bold text-slate-900">
              Quick Links
            </h3>

            <ul className="mt-4 space-y-2.5">

              {[
                "Home",
                "Books",
                "Categories",
                "Deals",
                "Blog",
                "About",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-slate-500 transition-colors hover:text-blue-600"
                  >
                    {item}
                  </a>
                </li>
              ))}

            </ul>
          </div>

          {/* ================= CATEGORIES ================= */}
          <div>
            <h3 className="text-sm font-bold text-slate-900">
              Categories
            </h3>

            <ul className="mt-4 space-y-2.5">

              {[
                "Technology",
                "Academic",
                "Fiction",
                "Self-Help",
                "Business",
                "Science",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-slate-500 transition-colors hover:text-blue-600"
                  >
                    {item}
                  </a>
                </li>
              ))}

            </ul>
          </div>

          {/* ================= HELP ================= */}
          <div>
            <h3 className="text-sm font-bold text-slate-900">
              Help & Support
            </h3>

            <ul className="mt-4 space-y-2.5">

              {[
                "FAQs",
                "Shipping & Delivery",
                "Returns & Refunds",
                "Privacy Policy",
                "Terms & Conditions",
                "Contact Us",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-slate-500 transition-colors hover:text-blue-600"
                  >
                    {item}
                  </a>
                </li>
              ))}

            </ul>
          </div>

          {/* ================= DOWNLOAD APP ================= */}
          <div>
            <h3 className="text-sm font-bold text-slate-900">
              Download Our App
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Read on the go!
            </p>

            <div className="mt-5 flex flex-col gap-3">

              {/* Google Play */}
              <a
                href="#"
                className="
                  flex
                  h-12
                  w-[165px]
                  items-center
                  gap-3
                  rounded-lg
                  bg-black
                  px-4
                  text-white
                  transition-all
                  hover:-translate-y-1
                  hover:shadow-lg
                "
              >
                <FaGooglePlay className="text-xl" />

                <div className="leading-tight">
                  <span className="block text-[9px] uppercase">
                    Get it on
                  </span>

                  <span className="text-sm font-semibold">
                    Google Play
                  </span>
                </div>
              </a>

              {/* App Store */}
              <a
                href="#"
                className="
                  flex
                  h-12
                  w-[165px]
                  items-center
                  gap-3
                  rounded-lg
                  bg-black
                  px-4
                  text-white
                  transition-all
                  hover:-translate-y-1
                  hover:shadow-lg
                "
              >
                <FaApple className="text-2xl" />

                <div className="leading-tight">
                  <span className="block text-[9px]">
                    Download on the
                  </span>

                  <span className="text-sm font-semibold">
                    App Store
                  </span>
                </div>
              </a>

            </div>
          </div>

        </div>

        {/* ================= DIVIDER ================= */}
        <div className="mt-10 border-t border-slate-200" />

        {/* ================= BOTTOM ================= */}
        <div className="flex flex-col items-center justify-between gap-5 pt-5 md:flex-row">

          {/* Copyright */}
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} BookNest. All rights reserved.
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