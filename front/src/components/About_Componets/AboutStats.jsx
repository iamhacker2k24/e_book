import React from "react";
import {
  FaBookOpen,
  FaUsers,
  FaGlobe,
  FaStar,
} from "react-icons/fa";

const AboutStats = () => {
  const stats = [
    {
      value: "10K+",
      label: "eBooks Available",
      icon: FaBookOpen,
    },
    {
      value: "50K+",
      label: "Happy Readers",
      icon: FaUsers,
    },
    {
      value: "100+",
      label: "Categories",
      icon: FaGlobe,
    },
    {
      value: "4.8/5",
      label: "Average Rating",
      icon: FaStar,
    },
  ];

  return (
    <section className="w-full bg-white py-6 md:py-8">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">

        <div
          className="
            grid
            grid-cols-2
            overflow-hidden
            rounded-2xl
            border
            border-blue-50
            bg-gradient-to-r
            from-blue-50
            via-indigo-50
            to-blue-50
            shadow-sm
            md:grid-cols-4
          "
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className={`
                  group
                  flex
                  min-h-[135px]
                  flex-col
                  items-center
                  justify-center
                  px-4
                  py-6
                  text-center
                  transition-all
                  duration-300
                  hover:bg-white/50

                  ${
                    index !== stats.length - 1
                      ? "border-r border-blue-100"
                      : ""
                  }

                  ${
                    index === 1
                      ? "md:border-r md:border-blue-100"
                      : ""
                  }

                  ${
                    index === 0 || index === 1
                      ? "border-b border-blue-100 md:border-b-0"
                      : ""
                  }
                `}
              >

                {/* Icon */}
                <div
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    bg-blue-100
                    transition-all
                    duration-300
                    group-hover:-translate-y-1
                    group-hover:bg-blue-200
                  "
                >
                  <Icon className="text-xl text-blue-600" />
                </div>

                {/* Number */}
                <h3
                  className="
                    mt-2
                    text-2xl
                    font-extrabold
                    tracking-tight
                    text-slate-950
                    md:text-3xl
                  "
                >
                  {stat.value}
                </h3>

                {/* Label */}
                <p className="mt-0.5 text-xs font-medium text-slate-500 md:text-sm">
                  {stat.label}
                </p>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default AboutStats;