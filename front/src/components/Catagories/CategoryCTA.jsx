import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

import categoryBanner from "../Catagories/assets/image.png";

const CategoryCTA = () => {
  return (
    <section className="w-full bg-white py-6 md:py-8">
      <div className="mx-auto max-w-[1250px] px-5">

        <div
          className="
            relative
            min-h-[150px]
            overflow-hidden
            rounded-2xl
            border
            border-blue-100
            bg-[#eef7ff]
            shadow-sm
            md:min-h-[170px]
          "
        >

          {/* ================= RIGHT IMAGE ================= */}

          <div
            className="
              absolute
              inset-y-0
              right-0
              w-[45%]
              md:w-[42%]
            "
          >
            <img
              src={categoryBanner}
              alt="Book collection"
              className="
                h-full
                w-full
                object-cover
                object-center
              "
            />

            {/* Soft fade into text area */}
            <div
              className="
                absolute
                inset-y-0
                left-0
                w-1/3
                bg-gradient-to-r
                from-[#eef7ff]
                to-transparent
              "
            />
          </div>


          {/* ================= TEXT ================= */}

          <div
            className="
              relative
              z-10
              flex
              min-h-[150px]
              w-[65%]
              flex-col
              justify-center
              px-5
              py-5

              md:min-h-[170px]
              md:w-[62%]
              md:px-8
            "
          >

            <h2
              className="
                text-xl
                font-extrabold
                leading-tight
                text-[#07194f]

                sm:text-2xl
                md:text-3xl
              "
            >
              Not sure what to read?
            </h2>

            <p
              className="
                mt-1
                max-w-[520px]
                text-xs
                leading-5
                text-slate-500

                sm:text-sm
              "
            >
              Explore our curated collections and bestsellers
              across all categories.
            </p>

            {/* ================= BUTTON ================= */}

            <div className="mt-4">
              <Link
                to="/books"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-lg
                  bg-blue-600
                  px-4
                  py-2
                  text-xs
                  font-bold
                  text-white
                  shadow-sm
                  transition-all
                  duration-200
                  hover:bg-blue-700
                  hover:shadow-md
                  active:scale-95
                  sm:px-5
                  sm:py-2.5
                  sm:text-sm
                "
              >
                <span>View All Books</span>
                <FiArrowRight className="text-sm" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default CategoryCTA;