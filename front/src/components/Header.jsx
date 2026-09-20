import React from "react";
import { CiSearch, CiShoppingCart } from "react-icons/ci";
import { GiSelfLove } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { MdKeyboardArrowDown } from "react-icons/md";

const Header = () => {
  return (
    <header className="w-full bg-white border-b border-slate-200">
      <div className="mx-auto flex h-[72px] max-w-[1440px] items-center gap-6 px-6">
        {/* ================= LOGO ================= */}
        <div className="flex shrink-0 items-center gap-3">
          {/* Logo Icon */}
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 shadow-md shadow-blue-200">
            <span className="text-2xl text-white">📖</span>
          </div>

          {/* Brand Name */}
          <div className="leading-none">
            <h1 className="text-[20px] font-extrabold tracking-tight text-slate-900">
              BookNest
            </h1>

            <p className="mt-1 text-[10px] font-medium tracking-wide text-slate-500">
              Read · Learn · Grow
            </p>
          </div>
        </div>

        {/* ================= NAVIGATION ================= */}
        <nav className="hidden lg:flex items-center gap-8 ml-8">
          <a
            href="#"
            className="relative py-6 text-sm font-semibold text-blue-600"
          >
            Home
            {/* Active underline */}
            <span className="absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-blue-600" />
          </a>

          <a
            href="#"
            className="py-6 text-sm font-medium text-slate-700 transition hover:text-blue-600"
          >
            Books
          </a>

          <a
            href="#"
            className="py-6 text-sm font-medium text-slate-700 transition hover:text-blue-600"
          >
            Categories
          </a>

          <a
            href="#"
            className="py-6 text-sm font-medium text-slate-700 transition hover:text-blue-600"
          >
            Deals
          </a>

          <a
            href="#"
            className="py-6 text-sm font-medium text-slate-700 transition hover:text-blue-600"
          >
            About
          </a>
        </nav>

        {/* ================= SEARCH ================= */}
        <div className="ml-auto flex min-w-0 flex-1 justify-end">
          <div className="flex h-11 w-full max-w-[360px] items-center overflow-hidden rounded-full border border-slate-200 bg-slate-50 transition focus-within:border-blue-500 focus-within:bg-white focus-within:ring-4 focus-within:ring-blue-100">
            <CiSearch className="ml-4 shrink-0 text-[22px] text-slate-400" />

            <input
              type="text"
              placeholder="Search books, authors, topics..."
              className="h-full min-w-0 flex-1 bg-transparent px-3 text-sm text-slate-700 outline-none placeholder:text-slate-400"
            />

            <button
              type="button"
              className="mr-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white transition hover:bg-blue-700"
            >
              <CiSearch className="text-[20px]" />
            </button>
          </div>
        </div>

        {/* ================= ACTIONS ================= */}
        <div className="flex shrink-0 items-center gap-4">
          {/* Wishlist */}
          <button
            type="button"
            className="group flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-blue-50"
          >
            <GiSelfLove className="text-[23px] text-slate-700 transition group-hover:text-blue-600" />
          </button>

          {/* Cart */}
          <button
            type="button"
            className="group relative flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-blue-50"
          >
            <CiShoppingCart className="text-[26px] text-slate-700 transition group-hover:text-blue-600" />

            {/* Cart count */}
            <span className="absolute right-0 top-0 flex h-[17px] min-w-[17px] items-center justify-center rounded-full bg-red-500 px-1 text-[9px] font-bold text-white">
              2
            </span>
          </button>

          {/* Profile */}
          <button
            type="button"
            className="flex items-center gap-2 rounded-full py-1 pl-1 pr-2 transition hover:bg-slate-100"
          >
            {/* Profile image */}
            <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-blue-500 to-indigo-500">
              <CgProfile className="text-[24px] text-white" />
            </div>

            <div className="hidden xl:block text-left">
              <p className="text-xs font-semibold text-slate-800">Hi, Dev</p>

              <p className="text-[10px] text-slate-400">My Account</p>
            </div>

            <MdKeyboardArrowDown className="text-xl text-slate-500" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
