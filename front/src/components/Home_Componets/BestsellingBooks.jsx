import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { FaCrown, FaStar } from "react-icons/fa";
import { FiArrowRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { ALL_BOOKS } from "../../data/booksData";
import BookCover from "../Common_componts/BookCover";

const BestsellingBooks = () => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const bestsellingBooks = [
    { rank: 1, ...ALL_BOOKS.find((b) => b.title === "Dune") || ALL_BOOKS[11] },
    { rank: 2, ...ALL_BOOKS.find((b) => b.title.startsWith("Sapiens")) || ALL_BOOKS[7] },
    { rank: 3, ...ALL_BOOKS.find((b) => b.title === "The Alchemist") || ALL_BOOKS[6] },
    { rank: 4, ...ALL_BOOKS.find((b) => b.title === "Atomic Habits") || ALL_BOOKS[0] },
    { rank: 5, ...ALL_BOOKS.find((b) => b.title === "The Psychology of Money") || ALL_BOOKS[1] },
    { rank: 6, ...ALL_BOOKS.find((b) => b.title === "Clean Code") || ALL_BOOKS[10] },
  ];

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const amount = 340;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
    setTimeout(checkScroll, 350);
  };

  return (
    <section className="w-full bg-white py-8 sm:py-10">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        {/*         = SECTION CARD         = */}
        <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm">
          {/*         = HEADER         = */}
          <div className="flex items-center justify-between border-b border-slate-100 px-5 sm:px-6 py-4 sm:py-5">
            <div>
              <div className="flex items-center gap-2">
                <FaCrown className="text-xl sm:text-2xl text-amber-400" />
                <h2 className="text-xl font-extrabold tracking-tight text-slate-900 md:text-2xl">
                  Bestselling This Week
                </h2>
              </div>
              <p className="mt-1 text-xs sm:text-sm text-slate-500">
                The most read and top rated books chosen by readers
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Link
                to="/books?badge=Bestseller"
                className="group flex items-center gap-1 text-xs sm:text-sm font-bold text-blue-600 transition hover:text-blue-700 mr-1"
              >
                <span>View All</span>
                <FiArrowRight className="text-base transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              {/* SLEEK ROUND SCROLL BUTTONS BESIDE VIEW ALL (Exact User Reference) */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => scroll("left")}
                  disabled={!canScrollLeft}
                  aria-label="Previous bestsellers"
                  className={`flex h-9 w-9 items-center justify-center rounded-full border bg-white shadow-sm transition-all duration-200 ${
                    canScrollLeft
                      ? "border-slate-200 text-slate-700 hover:border-blue-500 hover:bg-blue-600 hover:text-white active:scale-95 cursor-pointer"
                      : "border-slate-200/60 text-slate-300 cursor-not-allowed opacity-40"
                  }`}
                >
                  <FiChevronLeft className="text-lg" />
                </button>
                <button
                  type="button"
                  onClick={() => scroll("right")}
                  disabled={!canScrollRight}
                  aria-label="Next bestsellers"
                  className={`flex h-9 w-9 items-center justify-center rounded-full border bg-white shadow-sm transition-all duration-200 ${
                    canScrollRight
                      ? "border-slate-200 text-slate-700 hover:border-blue-500 hover:bg-blue-600 hover:text-white active:scale-95 cursor-pointer"
                      : "border-slate-200/60 text-slate-300 cursor-not-allowed opacity-40"
                  }`}
                >
                  <FiChevronRight className="text-lg" />
                </button>
              </div>
            </div>
          </div>

          {/*         = BOOK LIST WITH MATCHED HEIGHTS         = */}
          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex gap-4 overflow-x-auto p-4 sm:p-5 scroll-smooth scrollbar-hide"
          >
            {bestsellingBooks.map((book) => (
              <Link
                key={book.rank}
                to={`/book/${book.id}`}
                className="group flex h-[96px] min-w-[270px] sm:min-w-[290px] shrink-0 items-center gap-3 rounded-2xl p-3 border border-slate-100 bg-slate-50/50 transition-all duration-200 hover:bg-white hover:border-blue-300 hover:shadow-md"
              >
                {/* RANK */}
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-extrabold shadow-sm ${
                    book.rank === 1
                      ? "bg-amber-400 text-amber-950 shadow-amber-200"
                      : book.rank === 2
                      ? "bg-slate-300 text-slate-800"
                      : book.rank === 3
                      ? "bg-amber-700 text-white"
                      : "bg-blue-100 text-blue-800"
                  }`}
                >
                  #{book.rank}
                </div>

                {/* COVER */}
                <div className="h-[72px] w-[50px] shrink-0 overflow-hidden rounded-lg bg-slate-200 shadow-sm">
                  <BookCover
                    src={book.image}
                    alt={book.title}
                    title={book.title}
                    author={book.author}
                    coverColor={book.coverColor}
                    className="h-full w-full object-cover group-hover:scale-105 transition"
                  />
                </div>

                {/* DETAILS */}
                <div className="min-w-0 flex-1">
                  <h3 className="truncate text-sm font-bold text-slate-900 group-hover:text-blue-600 transition" title={book.title}>
                    {book.title}
                  </h3>
                  <p className="truncate text-xs text-slate-500">
                    {book.author}
                  </p>
                  <div className="mt-1 flex items-center justify-between">
                    <div className="flex items-center gap-1 text-xs">
                      <FaStar className="text-amber-400" size={11} />
                      <span className="font-semibold text-slate-700">{book.rating}</span>
                    </div>
                    <span className="text-xs font-bold text-blue-600">₹{book.price}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestsellingBooks;