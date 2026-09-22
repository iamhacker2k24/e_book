import React from "react";
import { Link } from "react-router-dom";
import { Flame, ArrowRight } from "lucide-react";

const popularCategories = [
  {
    name: "Fiction",
    books: "1,240 books",
    image: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?auto=format&fit=crop&q=80&w=300",
  },
  {
    name: "Self-Help",
    books: "560 books",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=300",
  },
  {
    name: "Technology",
    books: "420 books",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=300",
  },
  {
    name: "Science",
    books: "310 books",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=300",
  },
  {
    name: "Business",
    books: "510 books",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=300",
  },
  {
    name: "Academic",
    books: "450 books",
    image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&q=80&w=300",
  },
];

const PopularCategories = () => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-10 py-8 bg-white">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        {/* Left */}
        <div className="flex items-center gap-2">
          <Flame size={24} className="text-orange-500 fill-orange-500" />
          <h2 className="text-xl sm:text-2xl font-bold text-[#07164b]">
            Popular Categories
          </h2>
        </div>

        {/* View All */}
        <Link
          to="/books"
          className="flex items-center gap-1.5 text-[#0878f9] text-xs sm:text-sm font-semibold hover:gap-2.5 transition-all"
        >
          <span>View All</span>
          <ArrowRight size={16} />
        </Link>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
        {popularCategories.map((category) => (
          <Link
            key={category.name}
            to={`/books?category=${encodeURIComponent(category.name)}`}
            className="group bg-white border border-[#e5eaf2] rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#cbd8ed]"
          >
            {/* Image */}
            <div className="w-full h-[100px] sm:h-[115px] overflow-hidden bg-slate-100">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>

            {/* Content */}
            <div className="p-3">
              <h3
                className="text-xs sm:text-sm font-bold text-[#07164b] leading-tight truncate group-hover:text-blue-600 transition"
                title={category.name}
              >
                {category.name}
              </h3>
              <p className="mt-1 text-xs text-[#7180a5]">{category.books}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default PopularCategories;