import React from "react";
import { FiArrowRight } from "react-icons/fi";

const Offers = () => {
  const offers = [
    {
      type: "sale",
      label: "LIMITED TIME OFFER",
      title: "Get Up to 50% OFF",
      description: "On selected eBooks",
      button: "Shop Now",
      image: "/images/sale-banner.webp",
      textColor: "text-red-600",
      buttonColor: "bg-red-500 hover:bg-red-600",
    },
    {
      type: "student",
      label: "Students Special",
      title: "Extra 20% OFF",
      description: "Verify your student status and unlock more deals.",
      button: "Verify Student",
      image: "/images/student-banner.webp",
      textColor: "text-slate-900",
      buttonColor: "bg-blue-600 hover:bg-blue-700",
    },
  ];

  return (
    <section className="w-full bg-white py-8">
      <div className="mx-auto max-w-[1400px] px-5">

        {/* ================= OFFERS ================= */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">

          {offers.map((offer) => (
            <article
              key={offer.type}
              className="
                group
                relative
                min-h-[235px]
                overflow-hidden
                rounded-2xl
                border
                border-slate-100
                bg-slate-50
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-lg
              "
            >

              {/* ================= BACKGROUND IMAGE ================= */}
              <img
                src={offer.image}
                alt=""
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-[1.02]
                "
              />

              {/* ================= SOFT OVERLAY ================= */}
              <div
                className={`
                  absolute
                  inset-0
                  ${
                    offer.type === "sale"
                      ? "bg-gradient-to-r from-white/95 via-white/75 to-transparent"
                      : "bg-gradient-to-r from-white/95 via-white/75 to-transparent"
                  }
                `}
              />

              {/* ================= CONTENT ================= */}
              <div className="relative z-10 flex min-h-[235px] max-w-[55%] flex-col justify-center px-7 py-6 md:px-8">

                {/* Label */}
                <p
                  className={`
                    text-xs
                    font-extrabold
                    uppercase
                    tracking-wide
                    ${offer.textColor}
                  `}
                >
                  {offer.label}
                </p>

                {/* Heading */}
                <h2 className="mt-2 text-2xl font-extrabold leading-tight tracking-tight text-slate-950 md:text-3xl">
                  {offer.title}
                </h2>

                {/* Description */}
                <p className="mt-2 max-w-[300px] text-sm leading-5 text-slate-600">
                  {offer.description}
                </p>

                {/* Button */}
                <button
                  type="button"
                  className={`
                    mt-5
                    flex
                    w-fit
                    items-center
                    gap-2
                    rounded-full
                    px-6
                    py-2.5
                    text-sm
                    font-bold
                    text-white
                    shadow-md
                    transition-all
                    duration-200
                    hover:-translate-y-0.5
                    hover:shadow-lg
                    active:scale-95
                    ${offer.buttonColor}
                  `}
                >
                  {offer.button}

                  <FiArrowRight className="text-lg" />
                </button>

              </div>
            </article>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Offers;