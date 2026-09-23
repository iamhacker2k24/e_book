import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, ShoppingCart, Star, Check } from "lucide-react";
import { ALL_BOOKS } from "../../data/booksData";
import { useCart } from "../../context/CartContext";
import BookCover from "../Common_componts/BookCover";

const YouMayAlsoLike = () => {
  const sliderRef = useRef(null);
  const { addToCart } = useCart();
  const [addedId, setAddedId] = useState(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const books = ALL_BOOKS.slice(3, 8);

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

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      {/*         = HEADER         = */}
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-[#07144d]">
            You May Also Like
          </h2>
          <p className="text-xs text-slate-500">
            Recommended based on your reading list
          </p>
        </div>

        {/* SLEEK CONTROLS BESIDE TITLE (User Reference Style) */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            className={`flex h-9 w-9 items-center justify-center rounded-full border bg-white shadow-sm transition-all duration-200 ${
              canScrollLeft
                ? "border-slate-200 text-slate-700 hover:border-blue-500 hover:bg-blue-600 hover:text-white active:scale-95 cursor-pointer"
                : "border-slate-200/60 text-slate-300 cursor-not-allowed opacity-40"
            }`}
            aria-label="Previous recommendations"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={scrollRight}
            disabled={!canScrollRight}
            className={`flex h-9 w-9 items-center justify-center rounded-full border bg-white shadow-sm transition-all duration-200 ${
              canScrollRight
                ? "border-slate-200 text-slate-700 hover:border-blue-500 hover:bg-blue-600 hover:text-white active:scale-95 cursor-pointer"
                : "border-slate-200/60 text-slate-300 cursor-not-allowed opacity-40"
            }`}
            aria-label="Next recommendations"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/*         = SLIDER WITH UNIFORM HEIGHTS         = */}
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
              className="flex h-[320px] w-[190px] sm:w-[200px] shrink-0 flex-col justify-between rounded-xl border border-slate-100 bg-slate-50/50 p-3 transition hover:bg-white hover:border-blue-200 hover:shadow-md"
            >
              <div>
                <Link
                  to={`/book/${book.id}`}
                  className="block h-[160px] w-full overflow-hidden rounded-lg bg-slate-100 shadow-sm"
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
                    <h3 className="line-clamp-1 text-xs font-bold text-slate-900 hover:text-blue-600 transition" title={book.title}>
                      {book.title}
                    </h3>
                  </Link>
                  <p className="truncate text-[11px] text-slate-500">
                    {book.author}
                  </p>

                  <div className="mt-1 flex items-center gap-1">
                    <Star size={11} className="fill-amber-400 text-amber-400" />
                    <span className="text-xs font-semibold text-slate-700">
                      {book.rating}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-2 border-t border-slate-200/60 pt-2">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-blue-600">
                    ₹{book.price}
                  </span>
                  {book.oldPrice && (
                    <span className="text-[10px] text-slate-400 line-through">
                      ₹{book.oldPrice}
                    </span>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => handleAddToCart(book)}
                  className={`flex w-full items-center justify-center gap-1 rounded-lg py-1.5 text-xs font-bold text-white transition active:scale-95 ${
                    isAdded
                      ? "bg-green-600"
                      : "bg-blue-600 hover:bg-blue-700"
                  }`}
                >
                  {isAdded ? <Check size={13} /> : <ShoppingCart size={13} />}
                  <span>{isAdded ? "Added!" : "Add to Cart"}</span>
                </button>
              </div>
            </div>
          );
        })}
          </div>
        </div>
      </section>
    );
  };

export default YouMayAlsoLike;