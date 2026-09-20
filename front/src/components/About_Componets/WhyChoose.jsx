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
    <section className="w-full bg-white py-8 md:py-10">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">

        <div className="grid items-center gap-8 lg:grid-cols-2">

          {/* ================= LEFT ================= */}
          <div>

            <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 md:text-4xl">
              Why Choose{" "}
              <span className="text-blue-600">
                BookNest?
              </span>
            </h2>

            <p className="mt-2 text-sm text-slate-500 md:text-base">
              We're more than just a bookstore. We're a community of learners.
            </p>

            {/* Features */}
            <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2">

              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className="group flex items-center gap-4"
                  >

                    {/* Icon */}
                    <div
                      className={`
                        flex
                        h-14
                        w-14
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        ${feature.iconBg}
                        transition-all
                        duration-300
                        group-hover:scale-105
                      `}
                    >
                      <Icon
                        className={`text-2xl ${feature.iconColor}`}
                      />
                    </div>

                    {/* Text */}
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 md:text-base">
                        {feature.title}
                      </h3>

                      <p className="mt-1 text-xs text-slate-500 md:text-sm">
                        {feature.description}
                      </p>
                    </div>

                  </div>
                );
              })}

            </div>
          </div>

          {/* ================= RIGHT IMAGE ================= */}
          <div className="relative overflow-hidden rounded-2xl">

            <img
              src={whyChooseImage}
              alt="Reader enjoying BookNest"
              className="
                h-[280px]
                w-full
                object-cover
                transition-transform
                duration-500
                hover:scale-[1.02]
                md:h-[330px]
              "
            />

          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChoose;