import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import img_1 from "./Category_icon/image_1.png";
import img_2 from "./Category_icon/image_2.png";
import img_3 from "./Category_icon/image_3.png";

const categories = [
  {
    name: "All",
    path: "/books",
    image: img_1,
    bg: "bg-blue-50",
    hover: "group-hover:bg-blue-100",
  },
  {
    name: "Technology",
    path: "/books?category=Technology",
    image: img_2,
    bg: "bg-purple-50",
    hover: "group-hover:bg-purple-100",
  },
  {
    name: "Academic",
    path: "/books?category=Academic",
    image: img_3,
    bg: "bg-emerald-50",
    hover: "group-hover:bg-emerald-100",
  },
  {
    name: "Fiction",
    path: "/books?category=Fiction",
    image: img_1,
    bg: "bg-pink-50",
    hover: "group-hover:bg-pink-100",
  },
  {
    name: "Self-Help",
    path: "/books?category=Self-Help",
    image: img_2,
    bg: "bg-amber-50",
    hover: "group-hover:bg-amber-100",
  },
  {
    name: "Business",
    path: "/books?category=Business",
    image: img_3,
    bg: "bg-indigo-50",
    hover: "group-hover:bg-indigo-100",
  },
  {
    name: "Health",
    path: "/books?category=Health",
    image: img_1,
    bg: "bg-rose-50",
    hover: "group-hover:bg-rose-100",
  },
  {
    name: "Art & Design",
    path: "/books?category=Art%20%26%20Design",
    image: img_2,
    bg: "bg-orange-50",
    hover: "group-hover:bg-orange-100",
  },
  {
    name: "Science",
    path: "/books?category=Science",
    image: img_3,
    bg: "bg-sky-50",
    hover: "group-hover:bg-sky-100",
  },
  {
    name: "Competitive",
    path: "/books?category=Competitive",
    image: img_1,
    bg: "bg-green-50",
    hover: "group-hover:bg-green-100",
  },
  {
    name: "More",
    path: "/categories",
    image: img_2,
    bg: "bg-slate-100",
    hover: "group-hover:bg-slate-200",
  },
];

const Category = () => {
  const scrollRef = useRef(null);
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
    scrollRef.current.scrollBy({
      left: direction === "left" ? -240 : 240,
      behavior: "smooth",
    });
    setTimeout(checkScroll, 300);
  };

  return (
    <section className="w-full bg-white py-6 sm:py-8">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        <div className="relative group/category">
          {canScrollLeft && (
            <button
              type="button"
              onClick={() => scroll("left")}
              aria-label="Scroll categories left"
              className="hidden md:flex absolute -left-3 top-1/2 -translate-y-1/2 z-20 h-9 w-9 items-center justify-center rounded-full bg-white/95 text-slate-700 shadow-md border border-slate-200 backdrop-blur-sm transition hover:scale-110 hover:bg-blue-600 hover:text-white active:scale-95 cursor-pointer"
            >
              <FiChevronLeft className="text-lg" />
            </button>
          )}

          {canScrollRight && (
            <button
              type="button"
              onClick={() => scroll("right")}
              aria-label="Scroll categories right"
              className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 h-9 w-9 items-center justify-center rounded-full bg-white/95 text-slate-700 shadow-md border border-slate-200 backdrop-blur-sm transition hover:scale-110 hover:bg-blue-600 hover:text-white active:scale-95 cursor-pointer"
            >
              <FiChevronRight className="text-lg" />
            </button>
          )}

          <ul
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex items-center justify-between gap-3 overflow-x-auto rounded-2xl border border-slate-100 bg-white px-4 py-4 shadow-sm scrollbar-hide scroll-smooth"
          >
            {categories.map((category) => (
              <li key={category.name}>
                <Link
                  to={category.path}
                  className="group flex min-w-[85px] cursor-pointer flex-col items-center gap-2 transition"
                >
                  <div
                    className={`
                      flex h-13 w-13 sm:h-14 sm:w-14 items-center justify-center
                      rounded-full
                      ${category.bg}
                      ${category.hover}
                      transition-all duration-300
                      group-hover:-translate-y-1
                      group-hover:shadow-md
                    `}
                  >
                    <img
                      src={category.image}
                      alt={category.name}
                      className="h-8 w-8 sm:h-9 sm:w-9 object-contain"
                    />
                  </div>

                  <span className="whitespace-nowrap text-xs font-semibold text-slate-700 transition-colors group-hover:text-blue-600">
                    {category.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Category;
