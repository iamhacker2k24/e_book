import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Star, Check } from "lucide-react";
import { useBooks } from "../../context/BooksContext";
import { useCart } from "../../context/CartContext";
import BookCover from "../Common_componts/BookCover";

const YouMayAlsoLike = () => {
  const sliderRef = useRef(null);
  const { books: allBooks, loading } = useBooks();
  const { cartItems, addToCart } = useCart();
  const [addedId, setAddedId] = useState(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Exclude books already in cart
  const books = allBooks
    .filter((b) => !cartItems.some((c) => String(c.id) === String(b.id)))
    .slice(0, 6);

  const checkScroll = () => {
    if (!sliderRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({
      left: -320,
      behavior: "smooth",
    });
    setTimeout(checkScroll, 350);
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({
      left: 320,
      behavior: "smooth",
    });
    setTimeout(checkScroll, 350);
  };

  const handleAddToCart = (book) => {
    addToCart(book);
    setAddedId(book.id);
    setTimeout(() => setAddedId(null), 1800);
  };

  if (!loading && books.length === 0) {
    return null;
  }

  return (
    <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-sm">
      {/* HEADER */}
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-[#07144d] dark:text-white">
            You May Also Like
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Recommended based on your reading list
          </p>
        </div>

        {/* CONTROLS */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            className={`flex h-9 w-9 items-center justify-center rounded-full border bg-white dark:bg-slate-800 shadow-sm transition-all duration-200 ${
              canScrollLeft
                ? "border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-blue-500 hover:bg-blue-600 hover:text-white active:scale-95 cursor-pointer"
                : "border-slate-200/60 dark:border-slate-800 text-slate-300 dark:text-slate-600 cursor-not-allowed opacity-40"
            }`}
            aria-label="Previous recommendations"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={scrollRight}
            disabled={!canScrollRight}
            className={`flex h-9 w-9 items-center justify-center rounded-full border bg-white dark:bg-slate-800 shadow-sm transition-all duration-200 ${
              canScrollRight
                ? "border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-blue-500 hover:bg-blue-600 hover:text-white active:scale-95 cursor-pointer"
                : "border-slate-200/60 dark:border-slate-800 text-slate-300 dark:text-slate-600 cursor-not-allowed opacity-40"
            }`}
            aria-label="Next recommendations"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* SKELETON OR SLIDER */}
      {loading ? (
        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="h-[320px] w-[190px] sm:w-[200px] shrink-0 animate-pulse rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 p-3"
            >
              <div className="h-[160px] w-full rounded-lg bg-slate-200 dark:bg-slate-700 mb-3" />
              <div className="h-4 w-3/4 rounded bg-slate-200 dark:bg-slate-700 mb-2" />
              <div className="h-3 w-1/2 rounded bg-slate-200 dark:bg-slate-700 mb-4" />
              <div className="h-7 w-full rounded-lg bg-slate-200 dark:bg-slate-700 mt-6" />
            </div>
          ))}
        </div>
      ) : (
        <div>
          <div
            ref={sliderRef}
            onScroll={checkScroll}
            className="flex gap-4 overflow-x-auto pb-2 scroll-smooth scrollbar-hide"
          >
            {books.map((book) => {
              const isAdded = addedId === book.id;

              return (
                <div
                  key={book.id}
                  className="flex h-[320px] w-[190px] sm:w-[200px] shrink-0 flex-col justify-between rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50 p-3 transition hover:bg-white dark:hover:bg-slate-800 hover:border-blue-200 dark:hover:border-slate-700 hover:shadow-md"
                >
                  <div>
                    <Link
                      to={`/book/${book.id}`}
                      className="block h-[160px] w-full overflow-hidden rounded-lg bg-slate-100 dark:bg-slate-800 shadow-sm"
                    >
                      <BookCover
                        src={book.image}
                        alt={book.title}
                        title={book.title}
                        author={book.author}
                        coverColor={book.coverColor}
                        className="h-full w-full object-cover transition duration-300 hover:scale-105"
                      />
                    </Link>

                    <div className="mt-2.5">
                      <Link to={`/book/${book.id}`}>
                        <h3 className="line-clamp-1 text-xs font-bold text-[#07144d] dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition" title={book.title}>
                          {book.title}
                        </h3>
                      </Link>

                      <p className="mt-0.5 truncate text-[11px] text-slate-500 dark:text-slate-400">
                        {book.author}
                      </p>

                      <div className="mt-1 flex items-center gap-1 text-[11px]">
                        <Star size={12} className="fill-amber-400 text-amber-400" />
                        <span className="font-semibold text-slate-700 dark:text-slate-300">{book.rating}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-2 border-t border-slate-100 dark:border-slate-800 pt-2">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-bold text-slate-900 dark:text-white">
                        ₹{book.price}
                      </span>
                      {book.oldPrice > book.price && (
                        <span className="text-[10px] text-slate-400 dark:text-slate-500 line-through">
                          ₹{book.oldPrice}
                        </span>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={() => handleAddToCart(book)}
                      className={`flex w-full items-center justify-center gap-1.5 rounded-lg py-1.5 text-xs font-bold text-white transition active:scale-95 ${
                        isAdded
                          ? "bg-green-600 shadow-green-200 dark:shadow-none"
                          : "bg-blue-600 hover:bg-blue-700 shadow-sm"
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check size={12} />
                          <span>Added</span>
                        </>
                      ) : (
                        <span>Add</span>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
};

export default YouMayAlsoLike;