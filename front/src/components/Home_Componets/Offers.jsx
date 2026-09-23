import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const Offers = () => {
  const offers = [
    {
      type: "sale",
      label: "LIMITED TIME OFFER",
      title: "Get Up to 50% OFF",
      description: "On selected bestselling eBooks and top category bundles.",
      button: "Shop Sale Now",
      image:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=600",
      textColor: "text-red-600",
      buttonColor: "bg-red-600 hover:bg-red-700 shadow-red-200",
    },
    {
      type: "student",
      label: "STUDENT SPECIAL",
      title: "Extra 20% OFF",
      description: "Special learning discounts on academic & technology guides.",
      button: "Explore Academic",
      image:
        "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=600",
      textColor: "text-blue-600",
      buttonColor: "bg-blue-600 hover:bg-blue-700 shadow-blue-200",
    },
  ];

  return (
    <section className="w-full bg-white py-6">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        {/*         = OFFERS WITH UNIFORM HEIGHTS         = */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {offers.map((offer) => (
            <article
              key={offer.type}
              className="group relative h-[210px] sm:h-[220px] overflow-hidden rounded-2xl border border-slate-200/90 bg-slate-50 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* BACKGROUND IMAGE */}
              <img
                src={offer.image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />

              {/* GRADIENT OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-transparent" />

              {/* CONTENT WITH BALANCED HEIGHT */}
              <div className="relative z-10 flex h-full max-w-[65%] sm:max-w-[55%] flex-col justify-center px-6 py-5 sm:px-8">
                <p
                  className={`text-[11px] font-extrabold uppercase tracking-wider ${offer.textColor}`}
                >
                  {offer.label}
                </p>

                <h2 className="mt-1.5 text-xl sm:text-2xl font-extrabold leading-tight tracking-tight text-slate-950">
                  {offer.title}
                </h2>

                <p className="mt-1.5 text-xs sm:text-sm leading-5 text-slate-600 line-clamp-2">
                  {offer.description}
                </p>

                <Link
                  to="/books"
                  className={`mt-4 inline-flex w-fit items-center gap-2 rounded-xl px-5 py-2 text-xs font-bold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 active:scale-95 ${offer.buttonColor}`}
                >
                  <span>{offer.button}</span>
                  <FiArrowRight className="text-sm" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offers;