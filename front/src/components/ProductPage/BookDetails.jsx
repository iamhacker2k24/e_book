import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  ChevronRight,
  Heart,
  ShoppingCart,
  Truck,
  ShieldCheck,
  CreditCard,
  BookOpen,
  CalendarDays,
  Globe,
  Star,
  Check,
  ArrowRight,
  AlertCircle,
} from "lucide-react";
import { useBooks } from "../../context/BooksContext";
import { useCart } from "../../context/CartContext";
import BookCover from "../Common_componts/BookCover";

const BookDetails = () => {
  const { id } = useParams();
  const { getBook, error: backendError } = useBooks();
  const { addToCart, toggleWishlist, isWishlisted } = useCart();
  const navigate = useNavigate();

  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    let isMounted = true;

    getBook(id)
      .then((data) => {
        if (isMounted) {
          if (data) {
            setBook(data);
          } else {
            setError("The requested eBook was not found in the catalog.");
          }
          setLoading(false);
        }
      })
      .catch((err) => {
        if (isMounted) {
          setError(err.message || "Failed to load book details from backend.");
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [id, getBook]);

  const isWish = book ? isWishlisted(book.id) : false;

  const handleAddToCart = () => {
    if (!book) return;
    addToCart(book, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleBuyNow = () => {
    if (!book) return;
    addToCart(book, quantity);
    navigate("/cart");
  };

  if (loading) {
    return (
      <section className="min-h-screen bg-[#f5faff] px-4 py-8 sm:px-6 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <div className="h-6 w-64 animate-pulse rounded bg-slate-200 mb-6" />
          <div className="rounded-2xl border border-slate-200 bg-white p-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_1.3fr_1fr]">
              <div className="aspect-[3/4] w-full max-w-[340px] animate-pulse rounded-2xl bg-slate-200 mx-auto" />
              <div className="space-y-4">
                <div className="h-8 w-3/4 animate-pulse rounded bg-slate-200" />
                <div className="h-5 w-1/2 animate-pulse rounded bg-slate-200" />
                <div className="h-24 w-full animate-pulse rounded bg-slate-200 mt-6" />
              </div>
              <div className="h-72 animate-pulse rounded-2xl bg-slate-100 p-6" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error || !book) {
    return (
      <section className="min-h-[70vh] flex items-center justify-center bg-[#f5faff] px-4 py-12">
        <div className="max-w-md w-full rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
          <AlertCircle className="mx-auto text-amber-500 mb-3" size={42} />
          <h2 className="text-xl font-bold text-slate-800">Book Not Available</h2>
          <p className="mt-2 text-xs text-slate-500">
            {error || backendError || "We couldn't retrieve this book from the database."}
          </p>
          <div className="mt-6 flex flex-col gap-2">
            <Link
              to="/books"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-blue-700"
            >
              <span>Browse All Books</span>
              <ArrowRight size={14} />
            </Link>
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-xl border border-slate-200 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-[#f5faff] px-4 py-6 sm:px-6 lg:px-12">
      {/* BREADCRUMB */}
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

      {/* MAIN PRODUCT CARD */}
      <div className="mx-auto max-w-[1400px] rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_1.3fr_1fr]">
          {/* LEFT - BOOK COVER */}
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

              {book.badge && (
                <span className="absolute left-3 top-3 rounded-md bg-blue-600 px-2.5 py-1 text-[11px] font-bold text-white shadow-sm">
                  {book.badge}
                </span>
              )}

              <button
                type="button"
                onClick={() => toggleWishlist(book.id)}
                aria-label="Add to wishlist"
                className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 shadow-md backdrop-blur transition hover:scale-110 active:scale-95"
              >
                <Heart
                  size={18}
                  className={isWish ? "fill-pink-500 text-pink-500" : "text-slate-600"}
                />
              </button>
            </div>

            <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-emerald-600">
              <Check size={16} />
              <span>Available for Instant Download</span>
            </div>
          </div>

          {/* MIDDLE - METADATA */}
          <div className="flex flex-col justify-between">
            <div>
              <span className="inline-block rounded-lg bg-blue-50 px-2.5 py-1 text-xs font-bold text-blue-600 uppercase tracking-wider">
                {book.category}
              </span>

              <h1 className="mt-2.5 text-2xl font-extrabold text-slate-900 sm:text-3xl lg:text-4xl">
                {book.title}
              </h1>

              {book.subtitle && (
                <p className="mt-1 text-sm font-medium text-slate-500">
                  {book.subtitle}
                </p>
              )}

              <p className="mt-2 text-sm text-slate-600">
                By <span className="font-semibold text-slate-900">{book.author}</span>
              </p>

              {/* RATING */}
              <div className="mt-3 flex items-center gap-2">
                <div className="flex items-center gap-1 text-amber-400">
                  <Star size={16} className="fill-amber-400" />
                  <span className="text-sm font-bold text-slate-800">{book.rating}</span>
                </div>
                <span className="text-xs text-slate-400">•</span>
                <span className="text-xs text-slate-500">{book.reviews} reviews</span>
              </div>

              {/* SPEC GRID */}
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 rounded-xl border border-slate-100 bg-slate-50/80 p-3.5 text-xs">
                <div>
                  <span className="flex items-center gap-1 text-slate-400">
                    <BookOpen size={13} /> Format
                  </span>
                  <p className="mt-1 font-semibold text-slate-800">{book.format}</p>
                </div>
                <div>
                  <span className="flex items-center gap-1 text-slate-400">
                    <CalendarDays size={13} /> Pages
                  </span>
                  <p className="mt-1 font-semibold text-slate-800">{book.pages}</p>
                </div>
                <div>
                  <span className="flex items-center gap-1 text-slate-400">
                    <Globe size={13} /> Language
                  </span>
                  <p className="mt-1 font-semibold text-slate-800">{book.language}</p>
                </div>
                <div>
                  <span className="flex items-center gap-1 text-slate-400">Published</span>
                  <p className="mt-1 font-semibold text-slate-800">{book.published || "Recent"}</p>
                </div>
              </div>

              {/* DESCRIPTION */}
              <div className="mt-6">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Synopsis
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {book.description ||
                    "Dive into this insightful eBook loaded with practical strategies, key insights, and timeless wisdom designed to help you succeed and learn effortlessly."}
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT - BUY BOX */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-extrabold text-slate-900">
                  ₹{book.price}
                </span>
                {book.oldPrice > book.price && (
                  <span className="text-base text-slate-400 line-through">
                    ₹{book.oldPrice}
                  </span>
                )}
                {book.discount > 0 && (
                  <span className="rounded-md bg-green-100 px-2 py-0.5 text-xs font-bold text-green-700">
                    {book.discount}% OFF
                  </span>
                )}
              </div>

              <p className="mt-1 text-xs text-slate-500">
                Inclusive of all taxes. Free digital updates included.
              </p>

              {/* Quantity Selector */}
              <div className="mt-6 flex items-center justify-between border-y border-slate-200 py-3.5">
                <span className="text-xs font-bold text-slate-700">Quantity</span>
                <div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-2 py-1">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="h-6 w-6 text-slate-600 hover:text-blue-600 font-bold"
                  >
                    -
                  </button>
                  <span className="text-xs font-bold text-slate-800 w-4 text-center">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    className="h-6 w-6 text-slate-600 hover:text-blue-600 font-bold"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* ACTION BUTTONS */}
            <div className="mt-6 space-y-3">
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