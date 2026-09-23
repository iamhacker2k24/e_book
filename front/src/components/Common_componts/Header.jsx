import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { CiSearch, CiShoppingCart } from "react-icons/ci";
import { GiSelfLove } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FiMenu, FiX, FiLogOut, FiUser, FiShoppingBag, FiLogIn } from "react-icons/fi";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";

const Header = () => {
  const { cartCount, wishlist } = useCart();
  const { user, isAuthenticated } = useAuth();
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/books?search=${encodeURIComponent(searchQuery.trim())}`);
      setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "Books", to: "/books" },
    { name: "Categories", to: "/categories" },
    { name: "About", to: "/about" },
    { name: "FAQs", to: "/faqs" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur-md transition-all">
      <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between gap-4 px-4 sm:px-6">
        {/*         = LOGO         = */}
        <div className="flex shrink-0 items-center gap-3">
          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 hover:bg-slate-100 lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>

          <Link to="/" className="flex items-center gap-3 group">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 shadow-md shadow-blue-200 transition group-hover:scale-105">
              <span className="text-2xl text-white">📖</span>
            </div>

            <div className="leading-none">
              <h1 className="text-[20px] font-extrabold tracking-tight text-slate-900 group-hover:text-blue-600 transition">
                BookNest
              </h1>
              <p className="mt-1 text-[10px] font-medium tracking-wide text-slate-500">
                Read · Learn · Grow
              </p>
            </div>
          </Link>
        </div>

        {/*         = DESKTOP NAVIGATION         = */}
        <nav className="hidden lg:flex items-center gap-7 ml-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.to}
              className={({ isActive }) =>
                `relative py-6 text-sm font-semibold transition ${
                  isActive
                    ? "text-blue-600 font-bold"
                    : "text-slate-700 hover:text-blue-600"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 h-[2.5px] w-full rounded-full bg-blue-600" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/*         = SEARCH         = */}
        <form
          onSubmit={handleSearchSubmit}
          className="hidden sm:flex min-w-0 flex-1 max-w-[360px] mx-2"
        >
          <div className="flex h-11 w-full items-center overflow-hidden rounded-full border border-slate-200 bg-slate-50 transition focus-within:border-blue-500 focus-within:bg-white focus-within:ring-4 focus-within:ring-blue-100">
            <CiSearch className="ml-4 shrink-0 text-[22px] text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search books, authors..."
              className="h-full min-w-0 flex-1 bg-transparent px-3 text-sm text-slate-700 outline-none placeholder:text-slate-400"
            />
            <button
              type="submit"
              className="mr-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white transition hover:bg-blue-700 active:scale-95"
              aria-label="Search"
            >
              <CiSearch className="text-[20px]" />
            </button>
          </div>
        </form>

        {/*         = ACTIONS         = */}
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          {/* Wishlist */}
          <Link
            to="/books"
            title="Wishlist"
            className="group relative flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-blue-50"
          >
            <GiSelfLove className="text-[23px] text-slate-700 transition group-hover:text-blue-600" />
            {wishlist && wishlist.length > 0 && (
              <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-pink-500 text-[9px] font-bold text-white">
                {wishlist.length}
              </span>
            )}
          </Link>

          {/* Cart */}
          <Link
            to="/cart"
            title="View Cart"
            className="group relative flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-blue-50"
          >
            <CiShoppingCart className="text-[26px] text-slate-700 transition group-hover:text-blue-600" />
            {cartCount > 0 && (
              <span className="absolute right-0 top-0 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-blue-600 px-1 text-[10px] font-bold text-white shadow-sm">
                {cartCount}
              </span>
            )}
          </Link>

          {/* User Profile / Auth State */}
          {isAuthenticated && user ? (
            <div className="relative">
              <button
                type="button"
                onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                className="flex items-center gap-2 rounded-full py-1 pl-1 pr-2 transition hover:bg-slate-100"
              >
                {user.avatar ? (
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="h-9 w-9 rounded-full object-cover ring-2 ring-blue-500/20"
                  />
                ) : (
                  <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 text-white font-bold text-sm">
                    {user.name ? user.name[0].toUpperCase() : "U"}
                  </div>
                )}

                <div className="hidden xl:block text-left">
                  <p className="text-xs font-semibold text-slate-800 line-clamp-1 max-w-[100px]">
                    Hi, {user.name.split(" ")[0]}
                  </p>
                  <p className="text-[10px] text-slate-400">My Account</p>
                </div>

                <MdKeyboardArrowDown
                  className={`text-xl text-slate-500 transition-transform ${
                    profileDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Profile Dropdown Menu */}
              {profileDropdownOpen && (
                <div
                  className="absolute right-0 mt-2 w-52 overflow-hidden rounded-2xl border border-slate-100 bg-white p-2 shadow-xl shadow-slate-200/50 z-50 animate-in fade-in slide-in-from-top-2"
                  onClick={() => setProfileDropdownOpen(false)}
                >
                  <div className="border-b border-slate-100 px-3 py-2">
                    <p className="text-xs font-bold text-slate-900">{user.name}</p>
                    <p className="text-[11px] text-slate-400 truncate">{user.email}</p>
                  </div>

                  <div className="mt-1 space-y-1">
                    <Link
                      to="/cart"
                      className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      <FiShoppingBag className="text-sm" />
                      <span>My Cart ({cartCount})</span>
                    </Link>

                    <Link
                      to="/books"
                      className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      <GiSelfLove className="text-sm" />
                      <span>My Wishlist ({wishlist?.length || 0})</span>
                    </Link>

                    <Link
                      to="/logout"
                      className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-medium text-red-600 hover:bg-red-50"
                    >
                      <FiLogOut className="text-sm" />
                      <span>Log Out</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <Link
              to="/login"
              className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-blue-700 active:scale-95"
            >
              <FiLogIn className="text-sm" />
              <span>Sign In</span>
            </Link>
          )}
        </div>
      </div>

      {/*         = MOBILE SEARCH BAR         = */}
      <div className="border-t border-slate-100 px-4 py-2 sm:hidden bg-slate-50/70">
        <form onSubmit={handleSearchSubmit} className="flex h-10 w-full items-center overflow-hidden rounded-full border border-slate-200 bg-white">
          <CiSearch className="ml-3 shrink-0 text-xl text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search books..."
            className="h-full flex-1 bg-transparent px-2 text-xs text-slate-700 outline-none"
          />
          <button
            type="submit"
            className="mr-1 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white"
          >
            <CiSearch className="text-base" />
          </button>
        </form>
      </div>

      {/*         = MOBILE NAVIGATION DRAWER         = */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 top-[72px] bottom-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden">
          <div className="h-full w-4/5 max-w-xs bg-white p-6 shadow-2xl overflow-y-auto">
            <div className="mb-6 flex items-center justify-between border-b border-slate-100 pb-4">
              <span className="text-sm font-bold text-slate-800">Navigation Menu</span>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg p-1 text-slate-500 hover:bg-slate-100"
              >
                <FiX size={20} />
              </button>
            </div>

            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
                      isActive
                        ? "bg-blue-50 text-blue-600 font-bold"
                        : "text-slate-700 hover:bg-slate-50"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}

              <div className="my-2 border-t border-slate-100 pt-2">
                <p className="px-4 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Help & Info
                </p>
                <Link
                  to="/shipping"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block rounded-xl px-4 py-2 text-sm text-slate-600 hover:bg-slate-50"
                >
                  Shipping & Delivery
                </Link>
                <Link
                  to="/return-refund"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block rounded-xl px-4 py-2 text-sm text-slate-600 hover:bg-slate-50"
                >
                  Returns & Refunds
                </Link>
                <Link
                  to="/privacy"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block rounded-xl px-4 py-2 text-sm text-slate-600 hover:bg-slate-50"
                >
                  Privacy Policy
                </Link>
              </div>

              <div className="pt-4 border-t border-slate-100">
                {isAuthenticated && user ? (
                  <Link
                    to="/logout"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2 rounded-xl bg-red-50 px-4 py-2.5 text-sm font-semibold text-red-600"
                  >
                    <FiLogOut />
                    <span>Sign Out ({user.name})</span>
                  </Link>
                ) : (
                  <Link
                    to="/login"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-200"
                  >
                    <FiLogIn />
                    <span>Sign In to BookNest</span>
                  </Link>
                )}
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
