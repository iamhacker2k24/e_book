import React from "react";
import { FiArrowRight, FiChevronRight } from "react-icons/fi";

import aboutHero from "../About_hero.png";

const AboutHero = () => {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1400px]">

        {/* Hero Container */}
        <div className="relative min-h-[330px] overflow-hidden bg-gradient-to-r from-blue-50 via-white to-white">

          {/*         = BACKGROUND IMAGE         = */}
          <img
            src={aboutHero}
            alt="Books Brighter Lives"
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
              object-center
            "
          />

          {/*         = LEFT WHITE GRADIENT         = */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-r
              from-white
              via-white/95
              via-45%
              to-transparent
            "
          />

          {/*         = CONTENT         = */}
          <div
            className="
              relative
              z-10
              flex
              min-h-[330px]
              items-center
              px-6
              py-10
              md:px-10
              lg:px-14
            "
          >
            <div className="max-w-[500px]">

              {/* Breadcrumb */}
              <div className="mb-5 flex items-center gap-1 text-xs text-slate-500">

                <span
                  className="
                    rounded-full
                    bg-blue-50
                    px-3
                    py-1.5
                    font-medium
                    text-blue-600
                  "
                >
                  Home
                </span>

                <FiChevronRight className="text-slate-400" />

                <span
                  className="
                    rounded-full
                    bg-blue-50
                    px-3
                    py-1.5
                    font-medium
                    text-blue-600
                  "
                >
                  About
                </span>

              </div>

              {/* Heading */}
              <h1
                className="
                  text-4xl
                  font-extrabold
                  leading-tight
                  tracking-tight
                  text-slate-950
                  md:text-5xl
                "
              >
                Our{" "}
                <span
                  className="
                    bg-gradient-to-r
                    from-blue-600
                    to-indigo-500
                    bg-clip-text
                    text-transparent
                  "
                >
                  Story
                </span>
              </h1>

              {/* Description */}
              <p
                className="
                  mt-4
                  max-w-[450px]
                  text-sm
                  leading-6
                  text-slate-600
                  md:text-base
                "
              >
                At BookNest, we believe that books have the power to
                change lives. We're on a mission to make knowledge
                accessible to everyone, everywhere.
              </p>

              {/* Button */}
              <button
                type="button"
                className="
                  mt-6
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-blue-600
                  px-6
                  py-3
                  text-sm
                  font-bold
                  text-white
                  shadow-lg
                  shadow-blue-200
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:bg-blue-700
                  hover:shadow-xl
                  active:scale-95
                "
              >
                Explore Books

                <FiArrowRight className="text-lg" />
              </button>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutHero;