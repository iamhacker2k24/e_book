import React from "react";
import { CiSaveDown2, CiShoppingCart } from "react-icons/ci";
import {  IoIosNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { FaChevronDown } from "react-icons/fa";
const Header = () => {
return (
  <>
    <header className="w-full h-20 bg-white border-b border-gray-100 flex items-center justify-between px-8 shadow-sm">
      
      {/* Logo */}
      <div className="flex items-center">
        <p className="text-2xl font-bold text-gray-900 tracking-tight">
          <span className="text-violet-600">B</span>ookora
        </p>
      </div>

      {/* Navigation */}
      <nav>
        <ul className="flex items-center gap-10 text-gray-600 font-medium">
          <li className="relative text-violet-600 cursor-pointer">
            Home
            <span className="absolute -bottom-7 left-0 w-full h-0.5 bg-violet-600 rounded-full"></span>
          </li>

          <li className="hover:text-violet-600 transition-colors cursor-pointer">
            Explore
          </li>

          <li className="hover:text-violet-600 transition-colors cursor-pointer">
            Categories
          </li>
        </ul>
      </nav>

      {/* Right Icons */}
      <div>
        <ul className="flex items-center gap-6 text-gray-600">
          <li className="text-2xl hover:text-violet-600 transition-colors cursor-pointer">
            <CiSaveDown2 />
          </li>

          <li className="text-2xl hover:text-violet-600 transition-colors cursor-pointer">
            <IoIosNotificationsOutline />
          </li>

          <li className="text-2xl hover:text-violet-600 transition-colors cursor-pointer">
            <CiShoppingCart />
          </li>

          <li className="text-2xl hover:text-violet-600 transition-colors cursor-pointer">
            <CgProfile />
          </li>

          <li className="text-sm hover:text-violet-600 transition-colors cursor-pointer">
            <FaChevronDown />
          </li>
        </ul>
      </div>

    </header>
  </>
);
};

export default Header;
