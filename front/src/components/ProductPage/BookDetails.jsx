import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  ChevronRight,
  Heart,
  ShoppingCart,
  Truck,
  ShieldCheck,
  PackageCheck,
  CreditCard,
  BookOpen,
  CalendarDays,
  Globe,
  Star,
  Check,
  ArrowRight,
} from "lucide-react";
import { getBookById } from "../../data/booksData";
import { useCart } from "../../context/CartContext";
import BookCover from "../Common_componts/BookCover";

const BookDetails = () => {
  const { id } = useParams();
  const book = getBookById(id);
  const { addToCart, toggleWishlist, isWishlisted } = useCart();
  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const isWish = isWishlisted(book.id);

  const handleAddToCart = () => {
    addToCart(book, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleBuyNow = () => {
    addToCart(book, quantity);
    navigate("/cart");
  };

  return (
    <section className="min-h-screen bg-[#f5faff] px-4 py-6 sm:px-6 lg:px-12">
      {/*         = BREADCRUMB         = */}
      <div className="mx-auto mb-6 max-w-[1400px]">
        <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-500">
          <Link to="/" className="hover:text-blue-600 transition">
            Home
          </Link>
          <ChevronRight size={14} />

          <Link to="/books" className="hover:text-blue-600 transition">
            Books
          </Link>
          <ChevronRight size={14} />

          <Link
            to={`/books?category=${encodeURIComponent(book.category)}`}
            className="hover:text-blue-600 transition"
          >
            {book.category}
          </Link>
          <ChevronRight size={14} />

          <span className="font-semibold text-slate-800 line-clamp-1 max-w-[200px] sm:max-w-none">
            {book.title}
          </span>
        </div>
      </div>

      {/*         = MAIN PRODUCT CARD         = */}
      <div className="mx-auto max-w-[1400px] rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_1.3fr_1fr]">
          {/*                         = */}
          {/* LEFT - BOOK COVER & PREVIEWS */}
          {/*                         = */}
          <div className="flex flex-col items-center">
            <div className="relative aspect-[3/4] w-full max-w-[340px] overflow-hidden rounded-2xl bg-slate-100 shadow-md">
              <BookCover
                src={book.image}
                alt={book.title}
                title={book.title}
                author={book.author}
                coverColor={book.coverColor}
                className="h-full w-full object-cover"
              />

              {/* Wishlist Button */}
              <button
                type="button"
                onClick={() => toggleWishlist(book.id)}
                aria-label="Wishlist"
                className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 shadow-md backdrop-blur transition hover:scale-110 active:scale-95"
              >
                <Heart
                  size={20}
                  className={isWish ? "fill-red-500 text-red-500" : "text-slate-700"}
                />
              </button>

              {book.badge && (
                <span className="absolute left-3 top-3 z-10 rounded-lg bg-blue-600 px-3 py-1 text-xs font-bold text-white shadow-md">
                  {book.badge}
                </span>
              )}
            </div>

            <p className="mt-3 text-center text-xs text-slate-400">
              ⚡ Instant Digital Download + DRM-free formats (EPUB, PDF, MOBI)
            </p>
          </div>

          {/*                         = */}
          {/* MIDDLE - BOOK METADATA */}
          {/*                         = */}
          <div className="flex flex-col justify-between">
            <div>
              <span className="inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-600">
                {book.category}
              </span>

              <h1 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#07144d] leading-tight">
                {book.title}
              </h1>

              {book.subtitle && (
                <p className="mt-2 text-sm sm:text-base text-slate-600">
                  {book.subtitle}
                </p>
              )}

              <p className="mt-2 text-sm text-slate-700">
                By <span className="font-bold text-blue-600">{book.author}</span>
              </p>

              {/* Rating */}
              <div className="mt-4 flex items-center gap-2">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={
                        i < Math.floor(book.rating)
                          ? "fill-amber-400 text-amber-400"
                          : "text-slate-200"
                      }
                    />
                  ))}
                </div>
                <span className="text-sm font-bold text-slate-800">
                  {book.rating}
                </span>
                <span className="text-xs text-slate-500">
                  ({book.reviews} customer reviews)
                </span>
              </div>

              {/* Description */}
              <div className="mt-5 border-t border-slate-100 pt-4">
                <h2 className="text-sm font-bold text-slate-900">Overview</h2>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {book.description}
                </p>
              </div>

              {/* Book Specs */}
              <div className="mt-6 grid grid-cols-3 gap-2 rounded-xl border border-slate-100 bg-slate-50/70 p-3 text-center">
                <div>
                  <BookOpen size={20} className="mx-auto text-blue-600" />
                  <p className="mt-1 text-xs font-bold text-slate-800">{book.format}</p>
                  <p className="text-[10px] text-slate-500">{book.pages}</p>
                </div>

                <div className="border-x border-slate-200">
                  <CalendarDays size={20} className="mx-auto text-blue-600" />
                  <p className="mt-1 text-xs font-bold text-slate-800">{book.published}</p>
                  <p className="text-[10px] text-slate-500">Publication</p>
                </div>

                <div>
                  <Globe size={20} className="mx-auto text-blue-600" />
                  <p className="mt-1 text-xs font-bold text-slate-800">{book.language}</p>
                  <p className="text-[10px] text-slate-500">Language</p>
                </div>
              </div>
            </div>
          </div>

          {/*                         = */}
          {/* RIGHT - PURCHASE CARD */}
          {/*                         = */}
          <div className="h-fit rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm">
            {/* Price */}
            <div className="flex flex-wrap items-baseline gap-3">
              <span className="text-3xl font-extrabold text-blue-600">
                ₹{book.price}
              </span>
              {book.oldPrice && (
                <span className="text-base text-slate-400 line-through">
                  ₹{book.oldPrice}
                </span>
              )}
              {book.discount && (
                <span className="rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-bold text-green-700">
                  {book.discount}% OFF
                </span>
              )}
            </div>

            {/* In Stock Notice */}
            <div className="mt-4 flex items-center gap-2 text-xs font-bold text-green-600">
              <div className="flex h-4 w-4 items-center justify-center rounded-full bg-green-600 text-white text-[10px]">
                ✓
              </div>
              <span>Available for Instant Download</span>
            </div>

            {/* Quantity Selector */}
            <div className="mt-5">
              <label className="text-xs font-semibold text-slate-700">Quantity</label>
              <div className="mt-1.5 flex h-10 w-32 items-center rounded-xl border border-slate-200 bg-slate-50">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="flex h-full w-10 items-center justify-center text-base font-bold text-slate-600 hover:bg-slate-200 rounded-l-xl transition"
                >
                  -
                </button>
                <span className="flex-1 text-center text-sm font-bold text-slate-800">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="flex h-full w-10 items-center justify-center text-base font-bold text-slate-600 hover:bg-slate-200 rounded-r-xl transition"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex flex-col gap-3">
              <button
                type="button"
                onClick={handleAddToCart}
                className={`flex h-12 w-full items-center justify-center gap-2 rounded-xl text-sm font-bold text-white shadow-md transition-all active:scale-98 ${
                  added
                    ? "bg-green-600 shadow-green-200"
                    : "bg-blue-600 hover:bg-blue-700 shadow-blue-200"
                }`}
              >
                {added ? (
                  <>
                    <Check size={18} />
                    <span>Added to Cart!</span>
                  </>
                ) : (
                  <>
                    <ShoppingCart size={18} />
                    <span>Add to Cart</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={handleBuyNow}
                className="flex h-12 w-full items-center justify-center gap-2 rounded-xl border-2 border-blue-600 bg-blue-50/50 text-sm font-bold text-blue-700 transition hover:bg-blue-600 hover:text-white active:scale-98"
              >
                <span>Buy Now</span>
                <ArrowRight size={16} />
              </button>
            </div>

            {/* Trust Badges */}
            <div className="mt-6 space-y-2.5 border-t border-slate-100 pt-5 text-xs text-slate-600">
              <div className="flex items-center gap-2.5">
                <Truck size={16} className="text-blue-600" />
                <span>Immediate eBook access after payment</span>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck size={16} className="text-blue-600" />
                <span>100% Genuine and verified eBook file</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CreditCard size={16} className="text-blue-600" />
                <span>Secure SSL checkout & UPI support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetails;