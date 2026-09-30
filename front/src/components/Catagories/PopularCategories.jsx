import React from "react";
import { Link } from "react-router-dom";
import {
  Flame,
  ArrowRight,
  BookOpen,
  Sparkles,
  Cpu,
  TrendingUp,
  Atom,
  GraduationCap,
} from "lucide-react";
import { useBooks } from "../../context/BooksContext";

const popularCategoriesConfig = [
  {
    name: "Fiction",
    badge: "Most Loved",
    subtitle: "Novels, Fantasy & Stories",
    icon: BookOpen,
    gradient: "from-purple-600 via-indigo-600 to-blue-700",
    bgLight: "bg-purple-50/40",
    borderHover: "hover:border-purple-300",
    accentText: "text-purple-600",
  },
  {
    name: "Self-Help",
    badge: "Trending",
    subtitle: "Mindset, Habits & Growth",
    icon: Sparkles,
    gradient: "from-amber-500 via-orange-500 to-rose-600",
    bgLight: "bg-orange-50/40",
    borderHover: "hover:border-orange-300",
    accentText: "text-orange-600",
  },
  {
    name: "Technology",
    badge: "In Demand",
    subtitle: "Coding, AI & Systems",
    icon: Cpu,
    gradient: "from-sky-500 via-blue-600 to-indigo-700",
    bgLight: "bg-sky-50/40",
    borderHover: "hover:border-sky-300",
    accentText: "text-sky-600",
  },
  {
    name: "Business",
    badge: "Bestseller",
    subtitle: "Finance, Startups & Wealth",
    icon: TrendingUp,
    gradient: "from-emerald-600 via-teal-600 to-cyan-700",
    bgLight: "bg-emerald-50/40",
    borderHover: "hover:border-emerald-300",
    accentText: "text-emerald-600",
  },
  {
    name: "Science",
    badge: "Explore",
    subtitle: "Cosmos, Nature & Discovery",
    icon: Atom,
    gradient: "from-violet-600 via-purple-600 to-pink-600",
    bgLight: "bg-violet-50/40",
    borderHover: "hover:border-violet-300",
    accentText: "text-violet-600",
  },
  {
    name: "Academic",
    badge: "Curated",
    subtitle: "Higher Learning & Prep",
    icon: GraduationCap,
    gradient: "from-blue-600 via-indigo-700 to-slate-900",
    bgLight: "bg-blue-50/40",
    borderHover: "hover:border-blue-300",
    accentText: "text-blue-600",
  },
];

const PopularCategories = () => {
  const { categories: contextCategories } = useBooks();

  const getCategoryCount = (catName) => {
    if (!contextCategories || !contextCategories.length) return null;
    const match = contextCategories.find(
      ([name]) => name.toLowerCase() === catName.toLowerCase()
    );
    return match ? match[1] : null;
  };

  return (
    <section className="w-full bg-white dark:bg-slate-950 py-8 md:py-10 transition-colors duration-200">
      {/* MATCHED CONTAINER WIDTH - EXACTLY 1400px WITH CONSISTENT HORIZONTAL PADDING */}
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        {/* Header */}
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 mb-1">
              <Flame size={15} className="fill-orange-500 text-orange-500" />
              <span>Top Reader Choices</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#07164b] dark:text-white">
              Popular Categories
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              Hand-picked genres with top-rated titles and digital editions
            </p>
          </div>

          {/* View All */}
          <Link
            to="/books"
            className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition"
          >
            <span>View All Books</span>
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Categories Cards Grid - No Dummy Stock Photos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {popularCategoriesConfig.map((category) => {
            const Icon = category.icon;
            const count = getCategoryCount(category.name);

            return (
              <Link
                key={category.name}
                to={`/books?category=${encodeURIComponent(category.name)}`}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:hover:border-slate-700 ${category.borderHover}`}
              >
                {/* TOP ARTWORK BANNER WITH VIBRANT GRADIENT & ICON */}
                <div
                  className={`relative flex h-[110px] w-full flex-col justify-between bg-gradient-to-br ${category.gradient} p-3 text-white overflow-hidden`}
                >
                  {/* Subtle Background Glow */}
                  <div className="absolute -right-6 -bottom-6 h-20 w-20 rounded-full bg-white/10 blur-xl pointer-events-none" />

                  {/* Top Row: Pill Badge + Icon */}
                  <div className="flex items-center justify-between z-10">
                    <span className="rounded-full bg-black/25 px-2 py-0.5 text-[9px] font-bold tracking-wide text-white/95 backdrop-blur-sm">
                      {category.badge}
                    </span>

                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/20 backdrop-blur-md text-white transition-transform duration-300 group-hover:scale-110">
                      <Icon size={14} strokeWidth={2.2} />
                    </div>
                  </div>

                  {/* Subtitle / Genre Tagline */}
                  <div className="z-10 mt-auto">
                    <p className="line-clamp-2 text-[10px] font-medium leading-tight text-white/90">
                      {category.subtitle}
                    </p>
                  </div>
                </div>

                {/* BOTTOM CONTENT */}
                <div className="flex flex-1 flex-col justify-between p-3.5 bg-white dark:bg-slate-900">
                  <div>
                    <h3
                      className="text-sm font-bold text-[#07164b] dark:text-white leading-tight truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition"
                      title={category.name}
                    >
                      {category.name}
                    </h3>

                    <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                      {count !== null && count > 0
                        ? `${count} ${count === 1 ? "book" : "books"}`
                        : "Explore Collection"}
                    </p>
                  </div>

                  {/* Hover Arrow Link */}
                  <div className="mt-3 flex items-center justify-between border-t border-slate-100 dark:border-slate-800 pt-2 text-[10px] font-bold text-slate-400 dark:text-slate-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                    <span>Browse</span>
                    <ArrowRight
                      size={12}
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PopularCategories;