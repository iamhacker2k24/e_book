import React, { useState, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  Heart,
  ShoppingCart,
  ChevronDown,
  ChevronUp,
  Grid2X2,
  List,
  ChevronLeft,
  ChevronRight,
  SlidersHorizontal,
  Star,
  Check,
  Search,
} from "lucide-react";
import { ALL_BOOKS } from "../../data/booksData";
import { useCart } from "../../context/CartContext";
import BookCover from "../Common_componts/BookCover";

const categories = [
  ["All Categories", ALL_BOOKS.length],
  ["Self-Help", ALL_BOOKS.filter((b) => b.category === "Self-Help").length],
  ["Business", ALL_BOOKS.filter((b) => b.category === "Business").length],
  ["Technology", ALL_BOOKS.filter((b) => b.category === "Technology").length],
  ["Fiction", ALL_BOOKS.filter((b) => b.category === "Fiction").length],
  ["Science", ALL_BOOKS.filter((b) => b.category === "Science").length],
];

export default function BooksListing() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") || "All Categories";
  const initialSearch = searchParams.get("search") || "";
  const initialBadge = searchParams.get("badge") || "";

  const [view, setView] = useState("grid");
  const [mobileFilters, setMobileFilters] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [minRating, setMinRating] = useState(0);
  const [sortBy, setSortBy] = useState("featured");
  const [searchQuery, setSearchQuery] = useState(initialSearch);

  // Sync state if URL search parameters change
  React.useEffect(() => {
    const cat = searchParams.get("category");
    if (cat) setSelectedCategory(cat);
    const q = searchParams.get("search");
    if (q !== null) setSearchQuery(q);
  }, [searchParams]);

  // Filtered & Sorted books
  const filteredBooks = useMemo(() => {
    return ALL_BOOKS.filter((book) => {
      // Category filter
      if (
        selectedCategory !== "All Categories" &&
        book.category.toLowerCase() !== selectedCategory.toLowerCase()
      ) {
        return false;
      }

      // Search query filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = book.title.toLowerCase().includes(query);
        const matchesAuthor = book.author.toLowerCase().includes(query);
        const matchesCat = book.category.toLowerCase().includes(query);
        if (!matchesTitle && !matchesAuthor && !matchesCat) return false;
      }

      // Badge filter
      if (initialBadge && book.badge?.toLowerCase() !== initialBadge.toLowerCase()) {
        return false;
      }

      // Price filter
      if (book.price > maxPrice) return false;

      // Rating filter
      if (book.rating < minRating) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      return a.id - b.id; // default featured
    });
  }, [selectedCategory, searchQuery, initialBadge, maxPrice, minRating, sortBy]);

  const clearAllFilters = () => {
    setSelectedCategory("All Categories");
    setMaxPrice(1000);
    setMinRating(0);
    setSearchQuery("");
    setSearchParams({});
  };

  return (
    <section className="w-full bg-[#f4faff] px-4 py-8 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[1400px]">
        {/*         = BAR: Search, Total & View Toggle         = */}
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setMobileFilters(true)}
              className="flex items-center gap-2 rounded-xl border border-blue-200 bg-white px-4 py-2 text-xs font-bold text-blue-600 shadow-sm transition hover:bg-blue-50 lg:hidden"
            >
              <SlidersHorizontal size={16} />
              <span>Filters</span>
            </button>

            <div>
              <h1 className="text-xl sm:text-2xl font-extrabold text-[#07164b]">
                All Books
              </h1>
              <p className="text-xs text-slate-500">
                Showing {filteredBooks.length} of {ALL_BOOKS.length} books
                {selectedCategory !== "All Categories" && (
                  <span className="font-semibold text-blue-600"> • {selectedCategory}</span>
                )}
                {searchQuery && (
                  <span className="font-semibold text-slate-700"> • Matching "{searchQuery}"</span>
                )}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Sort By */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-500 hidden sm:inline">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                aria-label="Sort books"
                className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 outline-none transition focus:border-blue-500"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>

            {/* View Mode */}
            <div className="flex items-center rounded-xl border border-slate-200 bg-white p-1">
              <button
                type="button"
                onClick={() => setView("grid")}
                className={`flex h-8 w-8 items-center justify-center rounded-lg transition ${
                  view === "grid"
                    ? "bg-blue-600 text-white shadow-sm"
                    : "text-slate-500 hover:text-slate-900"
                }`}
                aria-label="Grid view"
              >
                <Grid2X2 size={16} />
              </button>
              <button
                type="button"
                onClick={() => setView("list")}
                className={`flex h-8 w-8 items-center justify-center rounded-lg transition ${
                  view === "list"
                    ? "bg-blue-600 text-white shadow-sm"
                    : "text-slate-500 hover:text-slate-900"
                }`}
                aria-label="List view"
              >
                <List size={16} />
              </button>
            </div>
          </div>
        </div>

        {/*         = MAIN CONTENT         = */}
        <div className="flex items-start gap-6">
          {/* DESKTOP SIDEBAR */}
          <aside className="hidden w-[240px] shrink-0 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm lg:block">
            <div className="mb-4 flex items-center justify-between border-b border-slate-100 pb-3">
              <h2 className="text-sm font-bold text-[#07164b]">Filters</h2>
              <button
                type="button"
                onClick={clearAllFilters}
                className="text-xs font-semibold text-blue-600 hover:underline"
              >
                Reset All
              </button>
            </div>

            {/* Categories */}
            <div className="py-3 border-b border-slate-100">
              <h3 className="mb-2.5 text-xs font-bold uppercase tracking-wider text-slate-500">
                Categories
              </h3>
              <div className="space-y-1">
                {categories.map(([name, count]) => (
                  <button
                    key={name}
                    type="button"
                    onClick={() => setSelectedCategory(name)}
                    className={`flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-xs font-medium transition ${
                      selectedCategory === name
                        ? "bg-blue-50 text-blue-600 font-bold"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                  >
                    <span>{name}</span>
                    <span className="text-[11px] text-slate-400">({count})</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div className="py-4 border-b border-slate-100">
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="font-bold uppercase tracking-wider text-slate-500">
                  Max Price
                </span>
                <span className="font-bold text-blue-600">₹{maxPrice}</span>
              </div>
              <input
                type="range"
                min="200"
                max="1000"
                step="50"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                aria-label="Max price filter"
                className="w-full accent-blue-600 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                <span>₹200</span>
                <span>₹1000</span>
              </div>
            </div>

            {/* Rating Filter */}
            <div className="py-4">
              <h3 className="mb-2.5 text-xs font-bold uppercase tracking-wider text-slate-500">
                Minimum Rating
              </h3>
              <div className="space-y-1">
                {[4.5, 4.0, 0].map((rating) => (
                  <button
                    key={rating}
                    type="button"
                    onClick={() => setMinRating(rating)}
                    className={`flex w-full items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs transition ${
                      minRating === rating
                        ? "bg-blue-50 text-blue-600 font-bold"
                        : "text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    {rating > 0 ? (
                      <>
                        <Star size={13} className="fill-amber-400 text-amber-400" />
                        <span>{rating}★ & above</span>
                      </>
                    ) : (
                      <span>All Ratings</span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* MOBILE FILTER MODAL / DRAWER */}
          {mobileFilters && (
            <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm lg:hidden">
              <div className="absolute left-0 top-0 h-full w-[300px] overflow-y-auto bg-white p-5 shadow-2xl">
                <div className="mb-4 flex items-center justify-between border-b border-slate-100 pb-3">
                  <h2 className="text-base font-bold text-[#07164b]">Filters</h2>
                  <button
                    type="button"
                    onClick={() => setMobileFilters(false)}
                    className="rounded-lg p-1.5 text-slate-500 hover:bg-slate-100"
                  >
                    ✕
                  </button>
                </div>

                {/* Categories */}
                <div className="py-3 border-b border-slate-100">
                  <h3 className="mb-2 text-xs font-bold text-slate-500 uppercase">
                    Categories
                  </h3>
                  <div className="space-y-1">
                    {categories.map(([name, count]) => (
                      <button
                        key={name}
                        type="button"
                        onClick={() => {
                          setSelectedCategory(name);
                          setMobileFilters(false);
                        }}
                        className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-xs transition ${
                          selectedCategory === name
                            ? "bg-blue-50 text-blue-600 font-bold"
                            : "text-slate-600 hover:bg-slate-50"
                        }`}
                      >
                        <span>{name}</span>
                        <span>({count})</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price */}
                <div className="py-4 border-b border-slate-100">
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="font-bold text-slate-500">Max Price:</span>
                    <span className="font-bold text-blue-600">₹{maxPrice}</span>
                  </div>
                  <input
                    type="range"
                    min="200"
                    max="1000"
                    step="50"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                    aria-label="Max price filter"
                    className="w-full accent-blue-600"
                  />
                </div>

                <div className="mt-6">
                  <button
                    type="button"
                    onClick={() => setMobileFilters(false)}
                    className="w-full rounded-xl bg-blue-600 py-2.5 text-xs font-bold text-white shadow-md shadow-blue-200"
                  >
                    Apply Filters
                  </button>
                </div>
              </div>
            </div>
          )}

          {/*         = BOOK CARDS         = */}
          <div className="min-w-0 flex-1">
            {filteredBooks.length === 0 ? (
              <div className="rounded-2xl border border-slate-200 bg-white p-12 text-center shadow-sm">
                <p className="text-4xl">🔍</p>
                <h3 className="mt-3 text-lg font-bold text-slate-800">
                  No eBooks found
                </h3>
                <p className="mt-1 text-xs text-slate-500">
                  Try adjusting your filters or search terms.
                </p>
                <button
                  type="button"
                  onClick={clearAllFilters}
                  className="mt-4 rounded-xl bg-blue-600 px-5 py-2 text-xs font-bold text-white shadow-sm hover:bg-blue-700"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div
                className={
                  view === "grid"
                    ? "grid grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 sm:gap-4"
                    : "grid grid-cols-1 gap-4"
                }
              >
                {filteredBooks.map((book) => (
                  <ListingBookCard key={book.id} book={book} view={view} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function ListingBookCard({ book, view }) {
  const { addToCart, toggleWishlist, isWishlisted } = useCart();
  const [added, setAdded] = useState(false);
  const liked = isWishlisted(book.id);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(book);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  if (view === "list") {
    return (
      <div className="group flex flex-col sm:flex-row items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-blue-200 hover:shadow-md">
        <Link to={`/book/${book.id}`} className="h-32 w-24 shrink-0 overflow-hidden rounded-xl bg-slate-100">
          <BookCover
            src={book.image}
            alt={book.title}
            title={book.title}
            author={book.author}
            coverColor={book.coverColor}
            className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
          />
        </Link>

        <div className="flex flex-1 flex-col justify-between w-full">
          <div>
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">
                  {book.category}
                </span>
                <Link to={`/book/${book.id}`}>
                  <h3 className="text-base font-bold text-[#07164b] hover:text-blue-600 transition">
                    {book.title}
                  </h3>
                </Link>
                <p className="text-xs text-slate-500">by {book.author}</p>
              </div>

              <button
                type="button"
                onClick={() => toggleWishlist(book.id)}
                className="text-slate-400 hover:text-red-500 transition"
              >
                <Heart
                  size={18}
                  className={liked ? "fill-red-500 text-red-500" : ""}
                />
              </button>
            </div>

            <p className="mt-2 text-xs text-slate-600 line-clamp-2">
              {book.description}
            </p>
          </div>

          <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-slate-900">₹{book.price}</span>
              <span className="text-xs text-slate-400 line-through">₹{book.oldPrice}</span>
            </div>

            <button
              type="button"
              onClick={handleAddToCart}
              className={`flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-bold text-white transition ${
                added
                  ? "bg-green-600 shadow-green-200"
                  : "bg-blue-600 hover:bg-blue-700 shadow-blue-200"
              }`}
            >
              {added ? <Check size={14} /> : <ShoppingCart size={14} />}
              <span>{added ? "Added!" : "Add to Cart"}</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-slate-200 bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg">
      <div>
        {/* Image Area */}
        <div className="relative mb-2.5 aspect-[3/4] w-full overflow-hidden rounded-lg bg-slate-100">
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

          {/* Badge */}
          {book.badge && (
            <span className="absolute left-2 top-2 z-10 rounded-md bg-blue-600 px-2 py-0.5 text-[10px] font-bold text-white shadow-sm">
              {book.badge}
            </span>
          )}

          {/* Wishlist */}
          <button
            type="button"
            onClick={() => toggleWishlist(book.id)}
            className="absolute right-2 top-2 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-white/95 shadow-sm transition hover:scale-110"
          >
            <Heart
              size={15}
              className={liked ? "fill-red-500 text-red-500" : "text-slate-600"}
            />
          </button>
        </div>

        {/* Info */}
        <div>
          <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wide">
            {book.category}
          </span>
          <Link to={`/book/${book.id}`}>
            <h3 className="line-clamp-1 text-xs sm:text-sm font-bold text-[#07164b] hover:text-blue-600 transition">
              {book.title}
            </h3>
          </Link>
          <p className="line-clamp-1 text-[11px] text-slate-500">{book.author}</p>

          <div className="mt-1 flex items-center gap-1 text-[11px]">
            <Star size={11} className="fill-amber-400 text-amber-400" />
            <span className="font-semibold text-slate-700">{book.rating}</span>
            <span className="text-slate-400">({book.reviews})</span>
          </div>
        </div>
      </div>

      {/* Pricing & Cart Button */}
      <div className="mt-3 border-t border-slate-100 pt-2.5">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm sm:text-base font-extrabold text-slate-900">
            ₹{book.price}
          </span>
          {book.oldPrice && (
            <span className="text-[11px] text-slate-400 line-through">
              ₹{book.oldPrice}
            </span>
          )}
        </div>

        <button
          type="button"
          onClick={handleAddToCart}
          className={`flex w-full items-center justify-center gap-1 rounded-lg py-1.5 text-xs font-bold text-white transition active:scale-95 ${
            added
              ? "bg-green-600 shadow-green-200"
              : "bg-blue-600 hover:bg-blue-700 shadow-blue-200"
          }`}
        >
          {added ? <Check size={13} /> : <ShoppingCart size={13} />}
          <span>{added ? "Added!" : "Add to Cart"}</span>
        </button>
      </div>
    </div>
  );
}