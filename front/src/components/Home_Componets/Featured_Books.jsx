import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { FaStar, FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FiArrowRight, FiCheck, FiChevronLeft, FiChevronRight, FiAlertCircle } from "react-icons/fi";
import { useBooks } from "../../context/BooksContext";
import { useCart } from "../../context/CartContext";
import BookCover from "../Common_componts/BookCover";

const Featured_Books = () => {
  const scrollRef = useRef(null);
  const { featuredBooks, loading, error } = useBooks();
  const { addToCart, toggleWishlist, isWishlisted } = useCart();
  const [addedId, setAddedId] = useState(null);
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
    const amount = 380;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
    setTimeout(checkScroll, 350);
  };

  const handleAddToCart = (book, e) => {
    e.stopPropagation();
    addToCart(book);
    setAddedId(book.id);
    setTimeout(() => setAddedId(null), 1800);
  };

  return (
    <section className="w-full bg-slate-50/60 dark:bg-slate-950 py-8 sm:py-10 transition-colors duration-200">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        {/* SECTION HEADER */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Curated Selection
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Featured eBooks
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/books"
              className="group flex items-center gap-1 text-xs sm:text-sm font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mr-1"
            >
              <span>View All</span>
              <FiArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>

            {/* ROUND SCROLL BUTTONS */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                aria-label="Previous books"
                className={`flex h-9 w-9 items-center justify-center rounded-full border bg-white dark:bg-slate-900 shadow-sm transition-all duration-200 ${
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
                aria-label="Next books"
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

        {/* LOADING SKELETON */}
        {loading && (
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {[1, 2, 3, 4, 5].map((idx) => (
              <div
                key={idx}
                className="h-[380px] w-[200px] sm:w-[220px] shrink-0 animate-pulse rounded-2xl border border-slate-200 bg-white p-3.5"
              >
                <div className="h-[190px] w-full rounded-xl bg-slate-200 mb-3" />
                <div className="h-4 w-3/4 rounded bg-slate-200 mb-2" />
                <div className="h-3 w-1/2 rounded bg-slate-200 mb-4" />
                <div className="h-8 w-full rounded-xl bg-slate-200 mt-12" />
              </div>
            ))}
          </div>
        )}

        {/* EMPTY OR BACKEND PENDING STATE */}
        {!loading && featuredBooks.length === 0 && (
          <div className="rounded-2xl border border-dashed border-slate-200 bg-white p-8 text-center">
            <FiAlertCircle className="mx-auto text-3xl text-slate-400 mb-2" />
            <h3 className="text-base font-bold text-slate-800">
              No featured books found
            </h3>
            <p className="mt-1 text-xs text-slate-500 max-w-md mx-auto">
              {error
                ? "Connecting to backend... Ensure your backend server is running on http://localhost:3000 to display catalog books."
                : "Add books to your database with the 'Bestseller' or 'Trending' badge to feature them here."}
            </p>
          </div>
        )}

        {/* BOOK CAROUSEL */}
        {!loading && featuredBooks.length > 0 && (
          <div>
            <div
              ref={scrollRef}
              onScroll={checkScroll}
              className="flex gap-4 overflow-x-auto pb-4 scroll-smooth scrollbar-hide"
            >
              {featuredBooks.map((book) => {
                const inWishlist = isWishlisted(book.id);
                const isAdded = addedId === book.id;

                return (
                  <article
                    key={book.id}
                    className="group relative flex h-[380px] w-[200px] sm:w-[220px] shrink-0 flex-col justify-between rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-3.5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl dark:hover:border-slate-700"
                  >
                    {/* TOP SECTION */}
                    <div>
                      {/* BOOK COVER */}
                      <div className="relative mb-3 h-[190px] w-full overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800">
                        <Link to={`/book/${book.id}`} className="block h-full w-full">
                          <BookCover
                            src={book.image}
                            alt={book.title}
                            title={book.title}
                            author={book.author}
                            coverColor={book.coverColor}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </Link>

                        {/* Wishlist Button */}
                        <button
                          type="button"
                          onClick={() => toggleWishlist(book.id)}
                          aria-label="Add to wishlist"
                          className="absolute right-2 top-2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/95 dark:bg-slate-800/95 shadow-md backdrop-blur transition hover:scale-110 active:scale-95"
                        >
                          {inWishlist ? (
                            <FaHeart className="text-sm text-pink-500" />
                          ) : (
                            <CiHeart className="text-lg text-slate-700 dark:text-slate-300 hover:text-pink-500" />
                          )}
                        </button>

                        {/* Badge */}
                        {book.badge && (
                          <span className="absolute left-2 top-2 z-10 rounded-md bg-blue-600/95 px-2 py-0.5 text-[10px] font-bold text-white shadow-sm">
                            {book.badge}
                          </span>
                        )}
                      </div>

                      {/* BOOK INFO */}
                      <div>
                        <Link to={`/book/${book.id}`}>
                          <h3
                            className="line-clamp-1 text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition"
                            title={book.title}
                          >
                            {book.title}
                          </h3>
                        </Link>

                        <p className="mt-0.5 truncate text-xs text-slate-500 dark:text-slate-400">
                          {book.author}
                        </p>

                        {/* Rating */}
                        <div className="mt-1.5 flex items-center gap-1">
                          <FaStar className="text-[12px] text-amber-400" />
                          <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                            {book.rating}
                          </span>
                          <span className="text-[10px] text-slate-400 dark:text-slate-500">
                            ({book.reviews})
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* BOTTOM SECTION */}
                    <div className="border-t border-slate-100 dark:border-slate-800 pt-2.5">
                      {/* Price */}
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-base font-extrabold text-slate-900 dark:text-white">
                          ₹{book.price}
                        </span>
                        {book.oldPrice > book.price && (
                          <span className="text-xs text-slate-400 dark:text-slate-500 line-through">
                            ₹{book.oldPrice}
                          </span>
                        )}
                      </div>

                      {/* Cart Button */}
                      <button
                        type="button"
                        onClick={(e) => handleAddToCart(book, e)}
                        className={`flex w-full items-center justify-center gap-1.5 rounded-xl py-2 text-xs font-bold text-white shadow-sm transition-all duration-200 active:scale-[0.98] ${
                          isAdded
                            ? "bg-green-600 shadow-green-200"
                            : "bg-blue-600 hover:bg-blue-700 shadow-blue-200"
                        }`}
                      >
                        {isAdded ? (
                          <>
                            <FiCheck size={14} />
                            <span>Added to Cart!</span>
                          </>
                        ) : (
                          <span>Add to Cart</span>
                        )}
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Featured_Books;