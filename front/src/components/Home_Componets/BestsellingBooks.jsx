import React from "react";
import { FaCrown, FaStar } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

const BestsellingBooks = () => {
  const bestsellingBooks = [
    {
      rank: 1,
      name: "Dune",
      author: "Frank Herbert",
      rating: 4.8,
      price: 299,
      image:
        "https://m.media-amazon.com/images/I/81Ua99CURbL._SY466_.jpg",
    },
    {
      rank: 2,
      name: "Sapiens",
      author: "Yuval Noah Harari",
      subtitle: "A Brief History of Humankind",
      rating: 4.7,
      price: 319,
      image:
        "https://m.media-amazon.com/images/I/713jIoMO3UL._SY466_.jpg",
    },
    {
      rank: 3,
      name: "The Alchemist",
      author: "Paulo Coelho",
      rating: 4.8,
      price: 349,
      image:
        "https://m.media-amazon.com/images/I/71aFt4+OTOL._SY466_.jpg",
    },
    {
      rank: 4,
      name: "Thinking, Fast and Slow",
      author: "Daniel Kahneman",
      rating: 4.7,
      price: 349,
      image:
        "https://m.media-amazon.com/images/I/41shZ3J8R6L._SY445_SX342_.jpg",
    },
    {
      rank: 5,
      name: "Start With Why",
      author: "Simon Sinek",
      rating: 4.6,
      price: 299,
      image:
        "https://m.media-amazon.com/images/I/71i7F0R5KkL._SY466_.jpg",
    },
  ];

  return (
    <section className="w-full bg-white py-8">
      <div className="mx-auto max-w-[1400px] px-5">

        {/* ================= SECTION CARD ================= */}
        <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">

          {/* ================= HEADER ================= */}
          <div className="flex items-center justify-between px-6 pt-5">

            <div>
              <div className="flex items-center gap-2">

                <FaCrown className="text-2xl text-amber-400" />

                <h2 className="text-xl font-bold tracking-tight text-slate-900 md:text-2xl">
                  Bestselling This Week
                </h2>

              </div>

              <p className="mt-1 text-sm text-slate-500">
                Most loved by readers
              </p>
            </div>

            {/* View All */}
            <button
              type="button"
              className="group flex items-center gap-1 text-sm font-semibold text-blue-600 transition hover:text-blue-700"
            >
              View All

              <FiArrowRight
                className="text-lg transition-transform duration-200 group-hover:translate-x-1"
              />
            </button>

          </div>

          {/* ================= BOOK LIST ================= */}
          <div
            className="
              flex
              gap-3
              overflow-x-auto
              px-5
              pb-5
              pt-5
              scrollbar-hide
            "
          >

            {bestsellingBooks.map((book) => (

              <article
                key={book.rank}
                className="
                  flex
                  min-w-[260px]
                  flex-1
                  items-center
                  gap-3
                  rounded-xl
                  px-2
                  py-2
                  transition-all
                  duration-200
                  hover:bg-slate-50
                "
              >

                {/* ================= RANK ================= */}
                <div
                  className={`
                    flex
                    h-8
                    w-8
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    text-sm
                    font-bold
                    ${
                      book.rank === 1
                        ? "bg-orange-100 text-orange-600"
                        : "bg-blue-50 text-blue-600"
                    }
                  `}
                >
                  {book.rank}
                </div>

                {/* ================= BOOK IMAGE ================= */}
                <div
                  className="
                    h-[92px]
                    w-[62px]
                    shrink-0
                    overflow-hidden
                    rounded-md
                    bg-slate-100
                    shadow-sm
                  "
                >
                  <img
                    src={book.image}
                    alt={book.name}
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-300
                      hover:scale-105
                    "
                  />
                </div>

                {/* ================= BOOK INFO ================= */}
                <div className="min-w-0 flex-1">

                  <h3
                    className="
                      line-clamp-2
                      text-sm
                      font-bold
                      leading-5
                      text-slate-900
                    "
                  >
                    {book.name}
                  </h3>

                  <p className="mt-0.5 truncate text-xs text-slate-500">
                    {book.author}
                  </p>

                  {book.subtitle && (
                    <p
                      className="
                        mt-0.5
                        line-clamp-2
                        text-[11px]
                        leading-4
                        text-slate-400
                      "
                    >
                      {book.subtitle}
                    </p>
                  )}

                  {/* Rating + Price */}
                  <div className="mt-2 flex items-center gap-3">

                    <div className="flex items-center gap-1">
                      <FaStar className="text-xs text-amber-400" />

                      <span className="text-xs font-medium text-slate-700">
                        {book.rating}
                      </span>
                    </div>

                    <span className="text-sm font-bold text-slate-900">
                      ₹{book.price}
                    </span>

                  </div>

                </div>

              </article>

            ))}

          </div>

        </div>
      </div>
    </section>
  );
};

export default BestsellingBooks;