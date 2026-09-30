import React from "react";
import { FiChevronRight } from "react-icons/fi";

import privacyHero from "../privecyPolicy_components/assets/herophoto.png";

const PrivacyHero = () => {
  return (
    <section className="w-full bg-white dark:bg-slate-950 transition-colors duration-200">
      <div className="mx-auto max-w-[1400px]">

        {/* Hero */}
        <div className="relative min-h-[250px] overflow-hidden">

          {/* Local Hero Image */}
          <img
            src={privacyHero}
            alt="Privacy and data security"
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
              object-center
            "
          />

          {/* Left Content Overlay */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-r
              from-[#eef5ff]
              via-[#eef5ff]/95
              via-45%
              to-transparent
              dark:from-slate-950
              dark:via-slate-950/95
            "
          />

          {/* Content */}
          <div
            className="
              relative
              z-10
              flex
              min-h-[250px]
              items-center
              px-6
              py-8
              md:px-10
              lg:px-14
            "
          >
            <div className="max-w-[570px]">

              {/* Breadcrumb */}
              <div className="mb-4 flex items-center gap-1.5 text-xs">

                <span className="font-medium text-slate-500 dark:text-slate-400">
                  Home
                </span>

                <FiChevronRight className="text-slate-400 dark:text-slate-500" />

                <span className="font-medium text-slate-700 dark:text-slate-200">
                  Privacy Policy
                </span>

              </div>

              {/* Heading */}
              <h1
                className="
                  text-4xl
                  font-extrabold
                  leading-none
                  tracking-tight
                  text-slate-950
                  dark:text-white
                  md:text-5xl
                "
              >
                Privacy{" "}
                <span className="text-blue-600 dark:text-blue-400">
                  Policy
                </span>
              </h1>

              {/* Description */}
              <p
                className="
                  mt-4
                  max-w-[520px]
                  text-sm
                  leading-5
                  text-slate-600
                  dark:text-slate-300
                  md:text-base
                  md:leading-6
                "
              >
                Your privacy matters to us. Learn how we collect, use,
                and protect your information at BookNest.
              </p>

              {/* Updated Date */}
              <p className="mt-3 text-xs font-medium text-slate-500 dark:text-slate-400">
                Last updated: September 19, 2026
              </p>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PrivacyHero;