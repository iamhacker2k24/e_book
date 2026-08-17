import React from "react";

const SearchBar = ({ button }) => {
  function buttonWithSwitch() {
    return (
      <div className="flex items-center w-full max-w-2xl">
        <div className="flex items-center w-full h-14 bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden focus-within:border-violet-500 focus-within:ring-2 focus-within:ring-violet-100 transition">
          {/* Search Icon */}
          <span className="pl-5 text-gray-400 text-xl">🔍</span>

          <input
            type="text"
            placeholder="Search books, authors, genres..."
            className="w-full h-full px-4 text-gray-700 outline-none placeholder:text-gray-400"
          />

          <button className="h-full px-8 bg-violet-600 text-white font-semibold hover:bg-violet-700 transition">
            Search
          </button>
        </div>{" "}

      </div>
    );
  }
  function withOutSwutch() {
    return (
      <div className="flex items-center w-full max-w-md">
        <div className="flex items-center w-full h-12 bg-gray-50 border border-gray-100 rounded-xl focus-within:bg-white focus-within:border-violet-400 focus-within:ring-2 focus-within:ring-violet-100 transition">
          
          {/* Search Icon */}
          <span className="pl-4 text-gray-400 text-lg">
            🔍
          </span>

          <input
            type="text"
            placeholder="Search books, authors, genres..."
            className="w-full h-full px-3 text-sm text-gray-700 outline-none bg-transparent placeholder:text-gray-400"
          />

        </div>
      </div>
    );
  }
  return <>{button ? buttonWithSwitch() : withOutSwutch()}</>;
};

export default SearchBar;
