import React from "react";
import {
  FaBolt,
  FaShieldAlt,
  FaBookOpen,
  FaHeadphones,
} from "react-icons/fa";

import whyChooseImage from "../booknest.jpg";

const WhyChoose = () => {
  const features = [
    {
      title: "Instant Access",
      description: "Read anytime, anywhere",
      icon: FaBolt,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      title: "Safe & Secure",
      description: "100% trusted payments",
      icon: FaShieldAlt,
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-500",
    },
    {
      title: "Wide Collection",
      description: "10K+ eBooks across genres",
      icon: FaBookOpen,
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      title: "24/7 Support",
      description: "We're always here for you",
      icon: FaHeadphones,
      iconBg: "bg-sky-100",
      iconColor: "text-sky-600",
    },
  ];

  return (
    <section className="w-full bg-white dark:bg-slate-950 py-8 md:py-10 transition-colors duration-200">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">

        <div className="grid items-stretch gap-8 lg:grid-cols-2">

          {/*         = LEFT         = */}
          <div className="flex flex-col justify-center">

            <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white md:text-4xl">
              Why Choose{" "}
              <span className="text-blue-600 dark:text-blue-400">
                BookNest?
              </span>
            </h2>

            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 md:text-base">
              We're more than just a bookstore. We're a community of learners.
            </p>

            {/* Features */}
            <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2">

              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className="group flex items-center gap-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/60 p-3.5 transition hover:bg-white dark:hover:bg-slate-900 hover:border-blue-100 dark:hover:border-slate-700 hover:shadow-sm"
                  >

                    {/* Icon */}
                    <div
                      className={`
                        flex
                        h-12
                        w-12
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        ${feature.iconBg}
                        dark:!bg-slate-800
                        transition-all
                        duration-300
                        group-hover:scale-105
                      `}
                    >
                      <Icon
                        className={`text-xl ${feature.iconColor}`}
                      />
                    </div>

                    {/* Text */}
                    <div className="min-w-0">
                      <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                        {feature.title}
                      </h3>

                      <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                        {feature.description}
                      </p>
                    </div>

                  </div>
                );
              })}

            </div>
          </div>

          {/*         = RIGHT IMAGE WITH MATCHED HEIGHT         = */}
          <div className="relative min-h-[300px] sm:min-h-[340px] h-full overflow-hidden rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">

            <img
              src={whyChooseImage}
              alt="Reader enjoying BookNest"
              className="
                h-full
                w-full
                object-cover
                transition-transform
                duration-500
                hover:scale-105
              "
            />

          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChoose;