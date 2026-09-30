import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { FaCrown, FaStar } from "react-icons/fa";
import { FiArrowRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useBooks } from "../../context/BooksContext";
import BookCover from "../Common_componts/BookCover";

const BestsellingBooks = () => {
  const scrollRef = useRef(null);
  const { bestsellingBooks, loading } = useBooks();
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

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
    <section className="w-full bg-white dark:bg-slate-950 py-8 sm:py-10 transition-colors duration-200">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        {/* SECTION CARD */}
        <div className="overflow-hidden rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
          {/* HEADER */}
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 px-5 sm:px-6 py-4 sm:py-5">
            <div>
              <div className="flex items-center gap-2">
                <FaCrown className="text-xl sm:text-2xl text-amber-400" />
                <h2 className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white md:text-2xl">
                  Bestselling This Week
                </h2>
              </div>
              <p className="mt-1 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                The most read and top rated books chosen by readers
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Link
                to="/books?badge=Bestseller"
                className="group flex items-center gap-1 text-xs sm:text-sm font-bold text-blue-600 dark:text-blue-400 transition hover:text-blue-700 dark:hover:text-blue-300 mr-1"
              >
                <span>View All</span>
                <FiArrowRight className="text-base transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              {/* ROUND SCROLL BUTTONS */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => scroll("left")}
                  disabled={!canScrollLeft}
                  aria-label="Previous bestsellers"
                  className={`flex h-9 w-9 items-center justify-center rounded-full border bg-white dark:bg-slate-800 shadow-sm transition-all duration-200 ${
                    canScrollLeft
                      ? "border-slate-200 text-slate-700 hover:border-blue-500 hover:bg-blue-600 hover:text-white dark:border-slate-700 dark:text-slate-200 dark:hover:bg-blue-600 active:scale-95 cursor-pointer"
                      : "border-slate-200/60 dark:border-slate-800 text-slate-300 dark:text-slate-700 cursor-not-allowed opacity-40"
                  }`}
                >
                  <FiChevronLeft className="text-lg" />
                </button>
                <button
                  type="button"
                  onClick={() => scroll("right")}
                  disabled={!canScrollRight}
                  aria-label="Next bestsellers"
                  className={`flex h-9 w-9 items-center justify-center rounded-full border bg-white dark:bg-slate-800 shadow-sm transition-all duration-200 ${
                    canScrollRight
                      ? "border-slate-200 text-slate-700 hover:border-blue-500 hover:bg-blue-600 hover:text-white dark:border-slate-700 dark:text-slate-200 dark:hover:bg-blue-600 active:scale-95 cursor-pointer"
                      : "border-slate-200/60 dark:border-slate-800 text-slate-300 dark:text-slate-700 cursor-not-allowed opacity-40"
                  }`}
                >
                  <FiChevronRight className="text-lg" />
                </button>
              </div>
            </div>
          </div>

          {/* SKELETON LOADING STATE */}
          {loading && (
            <div className="flex gap-4 p-5 sm:p-6 overflow-x-auto scrollbar-hide">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="h-[120px] w-[260px] sm:w-[290px] shrink-0 animate-pulse rounded-xl border border-slate-100 bg-slate-50 p-3"
                >
                  <div className="flex gap-3">
                    <div className="h-20 w-16 rounded-lg bg-slate-200" />
                    <div className="flex-1 space-y-2 py-1">
                      <div className="h-4 w-3/4 rounded bg-slate-200" />
                      <div className="h-3 w-1/2 rounded bg-slate-200" />
                      <div className="h-4 w-1/3 rounded bg-slate-200" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* EMPTY STATE */}
          {!loading && bestsellingBooks.length === 0 && (
            <div className="p-8 text-center text-xs text-slate-400">
              No bestsellers recorded yet. Books will appear here once loaded from the backend.
            </div>
          )}

          {/* BOOK LIST */}
          {!loading && bestsellingBooks.length > 0 && (
            <div
              ref={scrollRef}
              onScroll={checkScroll}
              className="flex gap-4 overflow-x-auto p-5 sm:p-6 scroll-smooth scrollbar-hide"
            >
              {bestsellingBooks.map((book) => (
                <Link
                  key={book.id}
                  to={`/book/${book.id}`}
                  className="group relative flex h-[126px] w-[260px] sm:w-[290px] shrink-0 items-center gap-3.5 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400 dark:hover:border-slate-700 hover:shadow-md"
                >
                  {/* RANK BADGE */}
                  <div className="absolute -left-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 dark:bg-blue-600 text-[11px] font-extrabold text-white shadow-sm">
                    #{book.rank}
                  </div>

                  {/* THUMBNAIL */}
                  <div className="h-[102px] w-[72px] shrink-0 overflow-hidden rounded-lg bg-slate-100 dark:bg-slate-800 shadow-sm">
                    <BookCover
                      src={book.image}
                      alt={book.title}
                      title={book.title}
                      author={book.author}
                      coverColor={book.coverColor}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* DETAILS */}
                  <div className="flex min-w-0 flex-1 flex-col justify-center">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 truncate">
                      {book.category}
                    </span>

                    <h3 className="line-clamp-1 text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition" title={book.title}>
                      {book.title}
                    </h3>

                    <p className="truncate text-xs text-slate-500 dark:text-slate-400">
                      {book.author}
                    </p>

                    <div className="mt-1 flex items-center gap-1 text-[11px] text-slate-600 dark:text-slate-300">
                      <FaStar className="text-amber-400 text-xs" />
                      <span className="font-bold">{book.rating}</span>
                      <span className="text-slate-400 dark:text-slate-500 text-[10px]">({book.reviews})</span>
                    </div>

                    <div className="mt-1 flex items-center gap-2">
                      <span className="text-sm font-extrabold text-slate-900 dark:text-white">
                        ₹{book.price}
                      </span>
                      {book.oldPrice > book.price && (
                        <span className="text-[10px] text-slate-400 dark:text-slate-500 line-through">
                          ₹{book.oldPrice}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BestsellingBooks;