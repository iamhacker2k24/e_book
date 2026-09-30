import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { CiSearch, CiShoppingCart } from "react-icons/ci";
import { GiSelfLove } from "react-icons/gi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FiMenu, FiX, FiLogOut, FiShoppingBag, FiLogIn } from "react-icons/fi";
import { Sun, Moon } from "lucide-react";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";
import { useTheme } from "../../context/ThemeContext";

const Header = () => {
  const { cartCount, wishlist } = useCart();
  const { user, isAuthenticated } = useAuth();
  const { isDark, toggleTheme } = useTheme();
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
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur-md transition-colors duration-200 dark:border-slate-800 dark:bg-slate-900/95">
      <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between gap-4 px-4 sm:px-6">
        {/*         = LOGO         = */}
        <div className="flex shrink-0 items-center gap-3">
          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800 lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>

          <Link to="/" className="flex items-center gap-3 group">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 shadow-md shadow-blue-200 dark:shadow-none transition group-hover:scale-105">
              <span className="text-2xl text-white">📖</span>
            </div>

            <div className="leading-none">
              <h1 className="text-[20px] font-extrabold tracking-tight text-slate-900 transition group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                BookNest
              </h1>
              <p className="mt-1 text-[10px] font-medium tracking-wide text-slate-500 dark:text-slate-400">
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
                    ? "text-blue-600 font-bold dark:text-blue-400"
                    : "text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 h-[2.5px] w-full rounded-full bg-blue-600 dark:bg-blue-400" />
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
          <div className="flex h-11 w-full items-center overflow-hidden rounded-full border border-slate-200 bg-slate-50 transition focus-within:border-blue-500 focus-within:bg-white focus-within:ring-4 focus-within:ring-blue-100 dark:border-slate-700 dark:bg-slate-800/80 dark:focus-within:bg-slate-800 dark:focus-within:border-blue-500 dark:focus-within:ring-blue-900/30">
            <CiSearch className="ml-4 shrink-0 text-[22px] text-slate-400 dark:text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search books, authors..."
              className="h-full min-w-0 flex-1 bg-transparent px-3 text-sm text-slate-700 outline-none placeholder:text-slate-400 dark:text-slate-100 dark:placeholder:text-slate-500"
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
        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2.5">
          {/* Dark Mode Toggle Button */}
          <button
            type="button"
            onClick={toggleTheme}
            title={isDark ? "Switch to light mode" : "Switch to dark mode"}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="group relative flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/80 bg-slate-100/80 text-slate-700 transition-all duration-200 hover:scale-105 hover:bg-slate-200/80 hover:text-blue-600 active:scale-95 dark:border-slate-700/80 dark:bg-slate-800/90 dark:text-amber-400 dark:hover:bg-slate-700 dark:hover:text-amber-300"
          >
            {isDark ? (
              <Sun className="h-5 w-5 transition-transform duration-300 rotate-0 group-hover:rotate-45" />
            ) : (
              <Moon className="h-5 w-5 transition-transform duration-300 -rotate-12 group-hover:rotate-0" />
            )}
          </button>

          {/* Wishlist */}
          <Link
            to="/books"
            title="Wishlist"
            className="group relative flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-blue-50 dark:hover:bg-slate-800"
          >
            <GiSelfLove className="text-[23px] text-slate-700 transition group-hover:text-blue-600 dark:text-slate-200 dark:group-hover:text-blue-400" />
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
            className="group relative flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-blue-50 dark:hover:bg-slate-800"
          >
            <CiShoppingCart className="text-[26px] text-slate-700 transition group-hover:text-blue-600 dark:text-slate-200 dark:group-hover:text-blue-400" />
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
                className="flex items-center gap-2 rounded-full py-1 pl-1 pr-2 transition hover:bg-slate-100 dark:hover:bg-slate-800"
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
                  <p className="text-xs font-semibold text-slate-800 line-clamp-1 max-w-[100px] dark:text-slate-200">
                    Hi, {user.name.split(" ")[0]}
                  </p>
                  <p className="text-[10px] text-slate-400">My Account</p>
                </div>

                <MdKeyboardArrowDown
                  className={`text-xl text-slate-500 transition-transform dark:text-slate-400 ${
                    profileDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Profile Dropdown Menu */}
              {profileDropdownOpen && (
                <div
                  className="absolute right-0 mt-2 w-52 overflow-hidden rounded-2xl border border-slate-100 bg-white p-2 shadow-xl shadow-slate-200/50 z-50 animate-in fade-in slide-in-from-top-2 dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/50"
                  onClick={() => setProfileDropdownOpen(false)}
                >
                  <div className="border-b border-slate-100 px-3 py-2 dark:border-slate-800">
                    <p className="text-xs font-bold text-slate-900 dark:text-slate-100">{user.name}</p>
                    <p className="text-[11px] text-slate-400 truncate">{user.email}</p>
                  </div>

                  <div className="mt-1 space-y-1">
                    <Link
                      to="/cart"
                      className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-blue-400"
                    >
                      <FiShoppingBag className="text-sm" />
                      <span>My Cart ({cartCount})</span>
                    </Link>

                    <Link
                      to="/books"
                      className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-blue-400"
                    >
                      <GiSelfLove className="text-sm" />
                      <span>My Wishlist ({wishlist?.length || 0})</span>
                    </Link>

                    <Link
                      to="/logout"
                      className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-medium text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-950/40"
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
      <div className="border-t border-slate-100 px-4 py-2 sm:hidden bg-slate-50/70 dark:border-slate-800 dark:bg-slate-900/90">
        <form onSubmit={handleSearchSubmit} className="flex h-10 w-full items-center overflow-hidden rounded-full border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800">
          <CiSearch className="ml-3 shrink-0 text-xl text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search books..."
            className="h-full flex-1 bg-transparent px-2 text-xs text-slate-700 outline-none dark:text-slate-100 dark:placeholder:text-slate-500"
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
          <div className="h-full w-4/5 max-w-xs bg-white p-6 shadow-2xl overflow-y-auto dark:bg-slate-900">
            <div className="mb-4 flex items-center justify-between border-b border-slate-100 pb-4 dark:border-slate-800">
              <span className="text-sm font-bold text-slate-800 dark:text-white">Navigation Menu</span>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg p-1 text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
              >
                <FiX size={20} />
              </button>
            </div>

            {/* Dark mode switcher in mobile drawer */}
            <div className="mb-4 flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-800/70">
              <div className="flex items-center gap-2.5">
                {isDark ? (
                  <Sun className="h-5 w-5 text-amber-400" />
                ) : (
                  <Moon className="h-5 w-5 text-slate-600 dark:text-slate-300" />
                )}
                <div>
                  <p className="text-xs font-bold text-slate-800 dark:text-slate-100">
                    {isDark ? "Dark Mode" : "Light Mode"}
                  </p>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400">
                    {isDark ? "Tap switch to disable" : "Tap switch to enable"}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={toggleTheme}
                className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                  isDark ? "bg-blue-600" : "bg-slate-300"
                }`}
                aria-label="Toggle dark mode"
              >
                <span
                  className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                    isDark ? "translate-x-5" : "translate-x-0"
                  }`}
                />
              </button>
            </div>

            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
                      isActive
                        ? "bg-blue-50 text-blue-600 font-bold dark:bg-blue-900/30 dark:text-blue-400"
                        : "text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}

              <div className="my-2 border-t border-slate-100 pt-2 dark:border-slate-800">
                <p className="px-4 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Help & Info
                </p>
                <Link
                  to="/shipping"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block rounded-xl px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800"
                >
                  Shipping & Delivery
                </Link>
                <Link
                  to="/return-refund"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block rounded-xl px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800"
                >
                  Returns & Refunds
                </Link>
                <Link
                  to="/privacy"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block rounded-xl px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800"
                >
                  Privacy Policy
                </Link>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
                {isAuthenticated && user ? (
                  <Link
                    to="/logout"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2 rounded-xl bg-red-50 px-4 py-2.5 text-sm font-semibold text-red-600 dark:bg-red-950/40 dark:text-red-400"
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
