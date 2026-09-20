import React, { useState } from "react";
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
} from "lucide-react";

// ======================================================
// BOOK DATA
// ======================================================

const books = [
  {
    id: 1,
    title: "Atomic Habits",
    author: "James Clear",
    image: "/images/books/atomic-habits.jpg",
    price: 599,
    oldPrice: 799,
    discount: 25,
    rating: 4.8,
    reviews: "12.4K",
    badge: "Bestseller",
    badgeColor: "yellow",
  },
  {
    id: 2,
    title: "The Psychology of Money",
    author: "Morgan Housel",
    image: "/images/books/psychology-money.jpg",
    price: 499,
    oldPrice: 699,
    discount: 29,
    rating: 4.7,
    reviews: "9.2K",
    badge: "Trending",
    badgeColor: "green",
  },
  {
    id: 3,
    title: "Ikigai",
    author: "Héctor García",
    image: "/images/books/ikigai.jpg",
    price: 450,
    oldPrice: 599,
    discount: 25,
    rating: 4.6,
    reviews: "8.1K",
  },
  {
    id: 4,
    title: "Think Like a Monk",
    author: "Jay Shetty",
    image: "/images/books/think-like-a-monk.jpg",
    price: 550,
    oldPrice: 699,
    discount: 21,
    rating: 4.7,
    reviews: "10.5K",
    badge: "New",
    badgeColor: "green",
  },
  {
    id: 5,
    title: "Dopamine Detox",
    author: "Thibaut Meurisse",
    image: "/images/books/dopamine-detox.jpg",
    price: 399,
    oldPrice: 549,
    discount: 27,
    rating: 4.5,
    reviews: "6.2K",
  },
  {
    id: 6,
    title: "Rich Dad Poor Dad",
    author: "Robert T. Kiyosaki",
    image: "/images/books/rich-dad-poor-dad.jpg",
    price: 480,
    oldPrice: 650,
    discount: 26,
    rating: 4.6,
    reviews: "12.1K",
  },
  {
    id: 7,
    title: "The Alchemist",
    author: "Paulo Coelho",
    image: "/images/books/alchemist.jpg",
    price: 499,
    oldPrice: 699,
    discount: 29,
    rating: 4.7,
    reviews: "14.3K",
  },
  {
    id: 8,
    title: "Sapiens: A Brief History...",
    author: "Yuval Noah Harari",
    image: "/images/books/sapiens.jpg",
    price: 620,
    oldPrice: 799,
    discount: 23,
    rating: 4.8,
    reviews: "11.8K",
  },
  {
    id: 9,
    title: "The 5 AM Club",
    author: "Robin Sharma",
    image: "/images/books/5am-club.jpg",
    price: 499,
    oldPrice: 699,
    discount: 29,
    rating: 4.5,
    reviews: "5.9K",
  },
  {
    id: 10,
    title: "Deep Work",
    author: "Cal Newport",
    image: "/images/books/deep-work.jpg",
    price: 520,
    oldPrice: 699,
    discount: 26,
    rating: 4.6,
    reviews: "7.1K",
  },
  {
    id: 11,
    title: "Do Epic Shit",
    author: "Ankur Warikoo",
    image: "/images/books/do-epic-shit.jpg",
    price: 399,
    oldPrice: 549,
    discount: 27,
    rating: 4.5,
    reviews: "9.4K",
  },
  {
    id: 12,
    title: "When Breath Becomes Air",
    author: "Paul Kalanithi",
    image: "/images/books/when-breath-becomes-air.jpg",
    price: 450,
    oldPrice: 599,
    discount: 25,
    rating: 4.8,
    reviews: "6.7K",
  },
];


// ======================================================
// FILTER DATA
// ======================================================

const categories = [
  ["Fiction", 320],
  ["Non-Fiction", 280],
  ["Self-Help", 150],
  ["Technology", 120],
  ["Science", 90],
  ["Biography", 85],
  ["Children", 110],
  ["Academic", 95],
  ["Comics & Graphic Novels", 60],
];

const languages = [
  ["English", 980],
  ["Hindi", 180],
  ["Bengali", 60],
  ["Others", 20],
];

const formats = [
  ["Paperback", 750],
  ["Hardcover", 320],
  ["eBook", 150],
  ["Audiobook", 20],
];


// ======================================================
// FILTER SECTION COMPONENT
// ======================================================

function FilterSection({
  title,
  children,
  defaultOpen = true,
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-[#e7edf5] py-4">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between"
      >
        <span className="text-[13px] font-bold text-[#07164b]">
          {title}
        </span>

        {open ? (
          <ChevronUp size={16} className="text-[#07164b]" />
        ) : (
          <ChevronDown size={16} className="text-[#07164b]" />
        )}
      </button>

      {open && (
        <div className="mt-3">
          {children}
        </div>
      )}
    </div>
  );
}


// ======================================================
// CHECKBOX ROW
// ======================================================

function CheckboxRow({
  label,
  count,
  checked = false,
  onChange,
}) {
  return (
    <label className="flex cursor-pointer items-center justify-between py-[5px]">
      <div className="flex items-center gap-2">

        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="
            h-4
            w-4
            cursor-pointer
            rounded
            border-[#b9c7db]
            accent-[#0878f9]
          "
        />

        <span className="text-[12px] text-[#60729b]">
          {label}
        </span>
      </div>

      <span className="text-[11px] text-[#7182a5]">
        ({count})
      </span>
    </label>
  );
}


// ======================================================
// FILTER SIDEBAR
// ======================================================

function FiltersSidebar() {
  const [selectedCategory, setSelectedCategory] =
    useState("All Categories");

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(2000);

  return (
    <aside
      className="
        w-full
        rounded-xl
        border
        border-[#e2e9f2]
        bg-white
        p-4
        lg:w-[205px]
        lg:shrink-0
      "
    >

      {/* Header */}
      <div className="mb-2 flex items-center justify-between">
        <h2 className="text-[15px] font-bold text-[#07164b]">
          Filters
        </h2>

        <button
          onClick={() => {
            setSelectedCategory("All Categories");
            setMinPrice(0);
            setMaxPrice(2000);
          }}
          className="text-[11px] font-medium text-[#0878f9] hover:underline"
        >
          Clear All
        </button>
      </div>


      {/* Categories */}
      <FilterSection title="Categories">

        <CheckboxRow
          label="All Categories"
          count="1240"
          checked={selectedCategory === "All Categories"}
          onChange={() =>
            setSelectedCategory("All Categories")
          }
        />

        {categories.map(([name, count]) => (
          <CheckboxRow
            key={name}
            label={name}
            count={count}
            checked={selectedCategory === name}
            onChange={() =>
              setSelectedCategory(name)
            }
          />
        ))}

      </FilterSection>


      {/* Price */}
      <FilterSection title="Price Range">

        <div className="space-y-3">

          {/* Slider */}
          <div className="relative pt-1">

            <input
              type="range"
              min="0"
              max="2000"
              value={maxPrice}
              onChange={(e) =>
                setMaxPrice(Number(e.target.value))
              }
              className="
                w-full
                accent-[#0878f9]
              "
            />

          </div>


          <div className="flex justify-between text-[11px] font-medium text-[#53678f]">
            <span>₹0</span>
            <span>₹2,000</span>
          </div>


          {/* Inputs */}
          <div className="flex items-center gap-2">

            <input
              type="number"
              value={minPrice}
              onChange={(e) =>
                setMinPrice(Number(e.target.value))
              }
              className="
                w-full
                rounded-lg
                border
                border-[#d8e1ed]
                px-2
                py-2
                text-[11px]
                outline-none
                focus:border-[#0878f9]
              "
            />

            <span className="text-[11px] text-[#7182a5]">
              to
            </span>

            <input
              type="number"
              value={maxPrice}
              onChange={(e) =>
                setMaxPrice(Number(e.target.value))
              }
              className="
                w-full
                rounded-lg
                border
                border-[#d8e1ed]
                px-2
                py-2
                text-[11px]
                outline-none
                focus:border-[#0878f9]
              "
            />

          </div>

        </div>

      </FilterSection>


      {/* Language */}
      <FilterSection title="Language">

        {languages.map(([name, count]) => (
          <CheckboxRow
            key={name}
            label={name}
            count={count}
          />
        ))}

      </FilterSection>


      {/* Format */}
      <FilterSection title="Book Format">

        {formats.map(([name, count]) => (
          <CheckboxRow
            key={name}
            label={name}
            count={count}
          />
        ))}

      </FilterSection>


      {/* Rating */}
      <FilterSection title="Rating">

        {[5, 4, 3].map((rating) => (
          <label
            key={rating}
            className="flex cursor-pointer items-center gap-2 py-[5px]"
          >

            <input
              type="checkbox"
              className="
                h-4
                w-4
                accent-[#0878f9]
              "
            />

            <div className="flex items-center">

              {Array.from({ length: 5 }).map(
                (_, index) => (
                  <Star
                    key={index}
                    size={12}
                    className={
                      index < rating
                        ? "fill-[#ffb400] text-[#ffb400]"
                        : "text-[#cbd4e2]"
                    }
                  />
                )
              )}

            </div>

            <span className="text-[11px] text-[#65769a]">
              & up
            </span>

          </label>
        ))}

      </FilterSection>


      {/* Availability */}
      <FilterSection title="Availability">

        <CheckboxRow
          label="In Stock"
          count="1100"
        />

        <CheckboxRow
          label="Out of Stock"
          count="140"
        />

      </FilterSection>

    </aside>
  );
}


// ======================================================
// BOOK CARD
// ======================================================

function BookCard({ book }) {

  const [liked, setLiked] = useState(false);

  return (
    <div
      className="
        group
        relative
        flex
        min-w-0
        flex-col
        overflow-hidden
        rounded-xl
        border
        border-[#e0e8f2]
        bg-white
        transition
        duration-300
        hover:-translate-y-1
        hover:border-[#bcd4f3]
        hover:shadow-lg
      "
    >

      {/* Image area */}
      <div
        className="
          relative
          flex
          h-[185px]
          items-center
          justify-center
          bg-[#f5f9fd]
          p-4
        "
      >

        {/* Badge */}
        {book.badge && (
          <span
            className={`
              absolute
              left-3
              top-3
              z-10
              rounded-md
              px-3
              py-1
              text-[10px]
              font-bold
              text-white

              ${
                book.badge === "Bestseller"
                  ? "bg-[#ffb400]"
                  : "bg-[#08a86b]"
              }
            `}
          >
            {book.badge}
          </span>
        )}


        {/* Wishlist */}
        <button
          onClick={() => setLiked(!liked)}
          className="
            absolute
            right-3
            top-3
            z-10
            flex
            h-8
            w-8
            items-center
            justify-center
            rounded-full
            bg-white
            shadow-sm
            transition
            hover:scale-110
          "
        >
          <Heart
            size={17}
            className={
              liked
                ? "fill-red-500 text-red-500"
                : "text-[#07164b]"
            }
          />
        </button>


        {/* Book Image */}
        <img
          src={book.image}
          alt={book.title}
          className="
            h-full
            max-h-[150px]
            w-auto
            max-w-[125px]
            object-contain
            transition
            duration-300
            group-hover:scale-105
          "
        />

      </div>


      {/* Content */}
      <div className="flex flex-1 flex-col p-3">

        {/* Title */}
        <h3
          className="
            line-clamp-1
            text-[13px]
            font-bold
            text-[#07164b]
          "
        >
          {book.title}
        </h3>


        {/* Author */}
        <p className="mt-1 line-clamp-1 text-[11px] text-[#63759e]">
          {book.author}
        </p>


        {/* Rating */}
        <div className="mt-2 flex items-center gap-1">

          <div className="flex">
            {Array.from({ length: 5 }).map(
              (_, index) => (
                <Star
                  key={index}
                  size={13}
                  className={
                    index < Math.round(book.rating)
                      ? "fill-[#ffb400] text-[#ffb400]"
                      : "text-[#d6dce5]"
                  }
                />
              )
            )}
          </div>

          <span className="text-[10px] text-[#70809e]">
            {book.rating} ({book.reviews})
          </span>

        </div>


        {/* Price */}
        <div className="mt-2 flex items-center gap-2">

          <span className="text-[15px] font-bold text-[#0878f9]">
            ₹{book.price}
          </span>

          <span className="text-[10px] text-[#9aa5b8] line-through">
            ₹{book.oldPrice}
          </span>

          <span className="text-[10px] font-bold text-[#08a86b]">
            {book.discount}% off
          </span>

        </div>


        {/* Add to cart */}
        <button
          className="
            mt-3
            flex
            h-9
            w-full
            items-center
            justify-center
            gap-2
            rounded-lg
            bg-[#0878f9]
            text-[12px]
            font-semibold
            text-white
            transition
            hover:bg-[#0568dc]
            active:scale-[0.98]
          "
        >
          <ShoppingCart size={15} />

          Add to Cart
        </button>

      </div>

    </div>
  );
}


// ======================================================
// PAGINATION
// ======================================================

function Pagination() {

  const [page, setPage] = useState(1);

  return (
    <div className="mt-7 flex items-center justify-center gap-2">

      {/* Previous */}
      <button
        onClick={() =>
          setPage(Math.max(1, page - 1))
        }
        className="
          flex
          h-9
          w-9
          items-center
          justify-center
          rounded-lg
          border
          border-[#dce4ef]
          bg-white
          text-[#60729a]
          hover:border-[#0878f9]
          hover:text-[#0878f9]
        "
      >
        <ChevronLeft size={17} />
      </button>


      {/* Pages */}
      {[1, 2, 3, 4, 5].map((number) => (
        <button
          key={number}
          onClick={() => setPage(number)}
          className={`
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-lg
            text-[12px]
            font-medium
            transition

            ${
              page === number
                ? "bg-[#0878f9] text-white"
                : "border border-[#dce4ef] bg-white text-[#52658b] hover:border-[#0878f9] hover:text-[#0878f9]"
            }
          `}
        >
          {number}
        </button>
      ))}


      <span className="px-1 text-[#71809d]">
        ...
      </span>


      <button
        onClick={() => setPage(62)}
        className="
          flex
          h-9
          w-9
          items-center
          justify-center
          rounded-lg
          border
          border-[#dce4ef]
          bg-white
          text-[12px]
          text-[#52658b]
          hover:border-[#0878f9]
        "
      >
        62
      </button>


      {/* Next */}
      <button
        onClick={() => setPage(page + 1)}
        className="
          flex
          h-9
          w-9
          items-center
          justify-center
          rounded-lg
          border
          border-[#dce4ef]
          bg-white
          text-[#60729a]
          hover:border-[#0878f9]
          hover:text-[#0878f9]
        "
      >
        <ChevronRight size={17} />
      </button>

    </div>
  );
}


// ======================================================
// MAIN COMPONENT
// ======================================================

export default function BooksListing() {

  const [mobileFilters, setMobileFilters] =
    useState(false);

  const [view, setView] = useState("grid");

  const [sort, setSort] =
    useState("Popularity");

  return (
    <section className="w-full bg-white">

      <div className="mx-auto max-w-[1400px] px-4 py-6 sm:px-6 lg:px-10">

        {/* ============================================
            TOP BAR
        ============================================ */}

        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">

          {/* Mobile filter button */}
          <button
            onClick={() =>
              setMobileFilters(!mobileFilters)
            }
            className="
              flex
              items-center
              gap-2
              rounded-lg
              border
              border-[#dce4ef]
              px-4
              py-2
              text-sm
              font-medium
              text-[#07164b]
              lg:hidden
            "
          >
            <SlidersHorizontal size={17} />

            Filters
          </button>


          {/* Books found */}
          <p className="text-[13px] text-[#60729b]">
            <span className="font-medium">
              1,240
            </span>{" "}
            books found
          </p>


          {/* Right controls */}
          <div className="ml-auto flex items-center gap-2">

            {/* Sort */}
            <div className="relative">

              <select
                value={sort}
                onChange={(e) =>
                  setSort(e.target.value)
                }
                className="
                  h-10
                  appearance-none
                  rounded-lg
                  border
                  border-[#dce4ef]
                  bg-white
                  py-0
                  pl-4
                  pr-9
                  text-[12px]
                  text-[#60729b]
                  outline-none
                  focus:border-[#0878f9]
                "
              >
                <option>Popularity</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest</option>
                <option>Rating</option>
              </select>

              <ChevronDown
                size={15}
                className="
                  pointer-events-none
                  absolute
                  right-3
                  top-1/2
                  -translate-y-1/2
                  text-[#60729b]
                "
              />

            </div>


            {/* Grid button */}
            <button
              onClick={() => setView("grid")}
              className={`
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-lg
                border
                ${
                  view === "grid"
                    ? "border-[#0878f9] bg-[#0878f9] text-white"
                    : "border-[#dce4ef] bg-white text-[#60729b]"
                }
              `}
            >
              <Grid2X2 size={17} />
            </button>


            {/* List button */}
            <button
              onClick={() => setView("list")}
              className={`
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-lg
                border
                ${
                  view === "list"
                    ? "border-[#0878f9] bg-[#0878f9] text-white"
                    : "border-[#dce4ef] bg-white text-[#60729b]"
                }
              `}
            >
              <List size={18} />
            </button>

          </div>

        </div>


        {/* ============================================
            MAIN CONTENT
        ============================================ */}

        <div className="flex items-start gap-5">

          {/* DESKTOP SIDEBAR */}
          <div className="hidden lg:block">
            <FiltersSidebar />
          </div>


          {/* MOBILE SIDEBAR */}
          {mobileFilters && (
            <div className="fixed inset-0 z-50 bg-black/30 lg:hidden">

              <div className="absolute left-0 top-0 h-full w-[290px] overflow-y-auto bg-white p-4 shadow-xl">

                <div className="mb-4 flex items-center justify-between">

                  <h2 className="font-bold text-[#07164b]">
                    Filters
                  </h2>

                  <button
                    onClick={() =>
                      setMobileFilters(false)
                    }
                    className="text-xl text-[#07164b]"
                  >
                    ×
                  </button>

                </div>

                <FiltersSidebar />

              </div>

            </div>
          )}


          {/* ==========================================
              BOOK GRID
          ========================================== */}

          <div className="min-w-0 flex-1">

            <div
              className={
                view === "grid"
                  ? `
                    grid
                    grid-cols-2
                    gap-3
                    sm:grid-cols-2
                    md:grid-cols-3
                    lg:grid-cols-4
                    xl:gap-4
                  `
                  : `
                    grid
                    grid-cols-1
                    gap-4
                  `
              }
            >

              {books.map((book) => (
                <BookCard
                  key={book.id}
                  book={book}
                />
              ))}

            </div>


            {/* Pagination */}
            <Pagination />

          </div>

        </div>

      </div>

    </section>
  );
}