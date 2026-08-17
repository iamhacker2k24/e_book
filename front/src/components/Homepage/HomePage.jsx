import React from "react";
import SearchBar from "./SearchBar";

const HomePage = () => {

  return (
  <section className="w-full bg-white overflow-hidden">
    <div className="mx-auto max-w-[1600px] min-h-[500px] grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr]">

      {/* =====================================================
          LEFT SIDE
      ===================================================== */}
      <div className="flex items-center">
        <div className="w-full px-6 py-14 sm:px-10 md:px-14 lg:px-16 xl:px-20">

          {/* Heading */}
          <div className="mb-6">
            <h1 className="text-[42px] sm:text-[48px] md:text-[54px] lg:text-[56px] xl:text-[60px] font-bold leading-[1.08] tracking-[-1.5px] text-gray-900">
              Discover your
            </h1>

            <h1 className="text-[42px] sm:text-[48px] md:text-[54px] lg:text-[56px] xl:text-[60px] font-bold leading-[1.08] tracking-[-1.5px] text-gray-900">
              next great story
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-gray-500 mb-9">
            Thousands of books, one beautiful library.
          </p>

          {/* Search */}
          <div className="w-full max-w-[640px] mb-12">
            <SearchBar button={true} />
          </div>

          {/* Statistics */}
          <div>
            <ul className="flex flex-wrap items-center gap-8 sm:gap-12 lg:gap-14">

              {/* Books */}
              <li className="flex items-center gap-3">
                <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-orange-50 text-orange-500">
                  <span className="text-xl sm:text-2xl">♧</span>
                </div>

                <div>
                  <p className="text-xl sm:text-2xl font-bold text-gray-900">
                    10K+
                  </p>

                  <p className="text-sm text-gray-500">
                    Books
                  </p>
                </div>
              </li>

              {/* Authors */}
              <li className="flex items-center gap-3">
                <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-amber-50 text-amber-500">
                  <span className="text-xl sm:text-2xl">♧</span>
                </div>

                <div>
                  <p className="text-xl sm:text-2xl font-bold text-gray-900">
                    5K+
                  </p>

                  <p className="text-sm text-gray-500">
                    Authors
                  </p>
                </div>
              </li>

              {/* Readers */}
              <li className="flex items-center gap-3">
                <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-green-50 text-green-500">
                  <span className="text-xl sm:text-2xl">☻</span>
                </div>

                <div>
                  <p className="text-xl sm:text-2xl font-bold text-gray-900">
                    50K+
                  </p>

                  <p className="text-sm text-gray-500">
                    Readers
                  </p>
                </div>
              </li>

            </ul>
          </div>

        </div>
      </div>


      {/* =====================================================
          RIGHT SIDE - FEATURED BOOK
      ===================================================== */}
      <div className="relative min-h-[520px] lg:min-h-[500px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-violet-50 via-white to-indigo-50">

        {/* Large soft background */}
        <div
          className="
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-[320px]
            h-[320px]
            sm:w-[400px]
            sm:h-[400px]
            lg:w-[460px]
            lg:h-[460px]
            rounded-full
            bg-violet-100/70
            blur-[1px]
          "
        />

        {/* Decorative circles */}
        <div className="absolute top-[70px] right-[25%] w-8 h-8 rounded-full bg-violet-200/80" />

        <div className="absolute top-[125px] left-[18%] w-7 h-7 rounded-full bg-indigo-300/70" />

        <div className="absolute top-[105px] left-[28%] w-4 h-4 rounded-full bg-violet-200" />

        <div className="absolute top-[180px] right-[18%] w-7 h-7 rounded-full bg-indigo-300/60" />

        <div className="absolute bottom-[105px] right-[20%] w-6 h-6 rounded-full bg-violet-300/70" />

        {/* Featured book */}
        <div className="relative z-10 flex flex-col items-start w-[220px] sm:w-[235px] lg:w-[255px]">

          {/* Cover */}
          <div
            className="
              w-[220px]
              h-[315px]
              sm:w-[235px]
              sm:h-[335px]
              lg:w-[255px]
              lg:h-[365px]
              overflow-hidden
              rounded-[14px]
              shadow-[0_18px_40px_rgba(0,0,0,0.18)]
              bg-white
            "
          >
            <img
              src="/books/midnight-library.jpg"
              alt="The Midnight Library"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Book information */}
          <div className="w-full mt-4">

            <h2 className="text-lg sm:text-xl font-bold text-gray-900 leading-tight">
              The Midnight Library
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Matt Haig
            </p>

            {/* Bottom row */}
            <div className="flex items-center justify-between mt-4">

              <p className="text-lg font-bold text-gray-900">
                ₹299
              </p>

              <button
                className="
                  px-4
                  py-2
                  text-sm
                  font-medium
                  text-violet-600
                  border
                  border-violet-300
                  rounded-lg
                  bg-white
                  hover:bg-violet-600
                  hover:text-white
                  hover:border-violet-600
                  transition-all
                  duration-200
                "
              >
                View Details
              </button>

            </div>

          </div>
        </div>
      </div>

    </div>
  </section>
);
};

export default HomePage;
