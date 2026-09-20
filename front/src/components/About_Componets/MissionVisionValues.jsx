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
      bg: "bg-pink-50",
      iconBg: "bg-pink-100",
      iconColor: "text-pink-500",
      description:
        "To make knowledge accessible to everyone by providing a seamless and affordable eBook reading experience.",
    },

    {
      title: "Our Vision",
      icon: FaEye,
      bg: "bg-blue-50",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-500",
      description:
        "To become the world's most loved eBook platform, empowering millions of readers to learn, grow and achieve their dreams.",
    },

    {
      title: "Our Values",
      icon: FaHeart,
      bg: "bg-emerald-50",
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-500",
      values: [
        "Readers First",
        "Quality & Trust",
        "Affordability",
        "Continuous Innovation",
        "Positive Impact",
      ],
    },
  ];

  return (
    <section className="w-full bg-white py-6 md:py-8">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">

          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <article
                key={card.title}
                className={`
                  ${card.bg}
                  group
                  min-h-[165px]
                  rounded-2xl
                  border
                  border-white
                  p-6
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-md
                `}
              >
                <div className="flex gap-4">

                  {/* ================= ICON ================= */}
                  <div
                    className={`
                      ${card.iconBg}
                      flex
                      h-14
                      w-14
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      transition-transform
                      duration-300
                      group-hover:scale-105
                    `}
                  >
                    <Icon
                      className={`
                        text-2xl
                        ${card.iconColor}
                      `}
                    />
                  </div>

                  {/* ================= CONTENT ================= */}
                  <div className="min-w-0">

                    <h3 className="text-lg font-extrabold text-slate-900">
                      {card.title}
                    </h3>

                    {/* Mission / Vision */}
                    {card.description && (
                      <p className="mt-2 text-sm leading-5 text-slate-600">
                        {card.description}
                      </p>
                    )}

                    {/* Values */}
                    {card.values && (
                      <ul className="mt-2 space-y-1">

                        {card.values.map((value) => (
                          <li
                            key={value}
                            className="flex items-center gap-2 text-sm text-slate-600"
                          >
                            <FaCheckCircle className="shrink-0 text-xs text-emerald-500" />

                            <span>{value}</span>
                          </li>
                        ))}

                      </ul>
                    )}

                  </div>
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