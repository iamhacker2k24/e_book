import React from "react";
import SearchBar from "./SearchBar";

const HomePage = () => {
  return (
    <>
      {/* Hero Left Side */}
      <div className="flex flex-col items-start max-w-2xl px-8 py-16 lg:px-16">
        {/* Heading */}
        <div className="mb-5">
          <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
            Discover your
          </h1>

          <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
            next great story
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-lg text-gray-500 mb-9">
          Thousands of books, one beautiful library.
        </p>

        {/* Search */}
        <div className="w-full mb-12">
          <SearchBar button={true} />
        </div>

        {/* Statistics */}
        <div>
          <ul className="flex items-center gap-12">
            <li className="flex flex-col text-2xl font-bold text-gray-900">
              10K+
              <span className="text-sm font-normal text-gray-500 mt-1">
                Books
              </span>
            </li>

            <li className="flex flex-col text-2xl font-bold text-gray-900">
              5K+
              <span className="text-sm font-normal text-gray-500 mt-1">
                Authors
              </span>
            </li>

            <li className="flex flex-col text-2xl font-bold text-gray-900">
              50K+
              <span className="text-sm font-normal text-gray-500 mt-1">
                Readers
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default HomePage;
