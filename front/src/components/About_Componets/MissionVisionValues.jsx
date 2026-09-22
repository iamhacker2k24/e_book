import React from "react";
import {
  FaBullseye,
  FaEye,
  FaHeart,
  FaCheckCircle,
} from "react-icons/fa";

const MissionVisionValues = () => {
  const cards = [
    {
      title: "Our Mission",
      icon: FaBullseye,
      bg: "bg-pink-50/80",
      iconBg: "bg-pink-100",
      iconColor: "text-pink-600",
      checkColor: "text-pink-500",
      description:
        "To make knowledge accessible to everyone by providing a seamless, high-speed, and affordable eBook experience.",
      points: [
        "Democratize access to quality literature",
        "Empower learners of all backgrounds",
        "Champion authors and creative voices",
      ],
    },

    {
      title: "Our Vision",
      icon: FaEye,
      bg: "bg-blue-50/80",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      checkColor: "text-blue-500",
      description:
        "To become the world's most loved digital reading platform, empowering millions to learn, grow, and achieve.",
      points: [
        "Build the world's most accessible e-library",
        "Instant cross-device reading ecosystem",
        "Connect global communities of readers",
      ],
    },

    {
      title: "Our Values",
      icon: FaHeart,
      bg: "bg-emerald-50/80",
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600",
      checkColor: "text-emerald-500",
      description:
        "Guided by our core principles to deliver excellence, fairness, and trust to every reader every single day.",
      points: [
        "Readers first in everything we build",
        "Highest editorial quality and trust",
        "Affordable pricing with zero lock-in",
      ],
    },
  ];

  return (
    <section className="w-full bg-white py-8 md:py-10">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 items-stretch">
          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <article
                key={card.title}
                className={`
                  ${card.bg}
                  group
                  flex
                  h-full
                  flex-col
                  justify-between
                  rounded-2xl
                  border
                  border-slate-100
                  p-6
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-md
                `}
              >
                <div>
                  {/* Icon & Title Header */}
                  <div className="flex items-center gap-3.5 mb-4">
                    <div
                      className={`
                        ${card.iconBg}
                        flex
                        h-12
                        w-12
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        transition-transform
                        duration-300
                        group-hover:scale-105
                      `}
                    >
                      <Icon className={`text-xl ${card.iconColor}`} />
                    </div>

                    <h3 className="text-lg font-extrabold text-slate-900">
                      {card.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-600 mb-4">
                    {card.description}
                  </p>
                </div>

                {/* Structured Points */}
                <div className="border-t border-slate-200/50 pt-3.5 mt-2">
                  <ul className="space-y-2">
                    {card.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2.5 text-xs text-slate-700"
                      >
                        <FaCheckCircle className={`shrink-0 mt-0.5 text-xs ${card.checkColor}`} />
                        <span className="font-medium">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MissionVisionValues;