import React from "react";
import {
  FiBookOpen,
  FiSun,
  FiFeather,
  FiMonitor,
  FiDroplet,
  FiUser,
  FiHeart,
  FiAward,
  FiZap,
  FiActivity,
  FiBarChart2,
  FiHome,
  FiImage,
  FiGlobe,
  FiCoffee,
  FiStar,
  FiMessageCircle,
  FiClipboard,
  FiArrowRight,
} from "react-icons/fi";

const CategoriesGrid = () => {
  const categories = [
    {
      name: "Fiction",
      books: "1,240 books",
      icon: FiBookOpen,
      bg: "bg-blue-50",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-500",
    },
    {
      name: "Non-Fiction",
      books: "980 books",
      icon: FiSun,
      bg: "bg-amber-50",
      iconBg: "bg-amber-100",
      iconColor: "text-amber-500",
    },
    {
      name: "Self-Help",
      books: "560 books",
      icon: FiFeather,
      bg: "bg-green-50",
      iconBg: "bg-green-100",
      iconColor: "text-green-500",
    },
    {
      name: "Technology",
      books: "420 books",
      icon: FiMonitor,
      bg: "bg-purple-50",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-500",
    },
    {
      name: "Science",
      books: "310 books",
      icon: FiDroplet,
      bg: "bg-indigo-50",
      iconBg: "bg-indigo-100",
      iconColor: "text-indigo-500",
    },
    {
      name: "Biography",
      books: "290 books",
      icon: FiUser,
      bg: "bg-rose-50",
      iconBg: "bg-rose-100",
      iconColor: "text-blue-500",
    },

    {
      name: "Children",
      books: "680 books",
      icon: FiHeart,
      bg: "bg-orange-50",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-500",
    },
    {
      name: "Academic",
      books: "920 books",
      icon: FiAward,
      bg: "bg-sky-50",
      iconBg: "bg-sky-100",
      iconColor: "text-blue-600",
    },
    {
      name: "Comics & Graphic Novels",
      books: "450 books",
      icon: FiZap,
      bg: "bg-pink-50",
      iconBg: "bg-pink-100",
      iconColor: "text-red-500",
    },
    {
      name: "Health & Wellness",
      books: "320 books",
      icon: FiActivity,
      bg: "bg-red-50",
      iconBg: "bg-red-100",
      iconColor: "text-red-500",
    },
    {
      name: "Business & Finance",
      books: "510 books",
      icon: FiBarChart2,
      bg: "bg-emerald-50",
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600",
    },
    {
      name: "History",
      books: "380 books",
      icon: FiHome,
      bg: "bg-slate-50",
      iconBg: "bg-slate-100",
      iconColor: "text-slate-500",
    },

    {
      name: "Arts & Culture",
      books: "280 books",
      icon: FiImage,
      bg: "bg-orange-50",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-500",
    },
    {
      name: "Travel",
      books: "240 books",
      icon: FiGlobe,
      bg: "bg-cyan-50",
      iconBg: "bg-cyan-100",
      iconColor: "text-blue-500",
    },
    {
      name: "Cooking",
      books: "190 books",
      icon: FiCoffee,
      bg: "bg-orange-50",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-400",
    },
    {
      name: "Religion & Spirituality",
      books: "360 books",
      icon: FiStar,
      bg: "bg-violet-50",
      iconBg: "bg-violet-100",
      iconColor: "text-purple-500",
    },
    {
      name: "Language Learning",
      books: "210 books",
      icon: FiMessageCircle,
      bg: "bg-blue-50",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-500",
    },
    {
      name: "Exam Preparation",
      books: "460 books",
      icon: FiClipboard,
      bg: "bg-emerald-50",
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-500",
    },
  ];

  const handleCategoryClick = (category) => {
    console.log("Selected category:", category.name);

    // Later you can navigate:
    // navigate(`/categories/${category.name.toLowerCase()}`);
  };

  return (
    <section className="w-full bg-white py-8 md:py-12">
      <div className="mx-auto max-w-[1250px] px-5">

        {/* ================= SECTION HEADER ================= */}

        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight text-[#07194f] md:text-3xl">
              Explore Categories
            </h2>

            <p className="mt-1 text-sm text-slate-500 md:text-base">
              Find your next great read by category.
            </p>
          </div>

          <button
            type="button"
            className="
              hidden
              items-center
              gap-1
              text-sm
              font-semibold
              text-blue-600
              transition
              hover:text-blue-700
              sm:flex
            "
          >
            View All
            <FiArrowRight />
          </button>
        </div>

        {/* ================= CATEGORY GRID ================= */}

        <div
          className="
            grid
            grid-cols-2
            gap-3
            sm:grid-cols-3
            md:grid-cols-4
            lg:grid-cols-6
            md:gap-4
          "
        >
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <button
                key={category.name}
                type="button"
                onClick={() => handleCategoryClick(category)}
                className={`
                  group
                  relative
                  min-h-[155px]
                  overflow-hidden
                  rounded-xl
                  border
                  border-white
                  ${category.bg}
                  p-4
                  text-left
                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:border-slate-200
                  hover:shadow-md

                  md:min-h-[165px]
                  md:p-5
                `}
              >
                {/* ================= ICON ================= */}

                <div
                  className={`
                    mx-auto
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    ${category.iconBg}
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  `}
                >
                  <Icon
                    className={`
                      text-3xl
                      ${category.iconColor}
                    `}
                  />
                </div>

                {/* ================= TEXT ================= */}

                <div className="mt-5 pr-7">
                  <h3
                    className="
                      line-clamp-2
                      min-h-[40px]
                      text-sm
                      font-extrabold
                      leading-5
                      text-[#07194f]
                      md:text-[15px]
                    "
                  >
                    {category.name}
                  </h3>

                  <p
                    className="
                      mt-1
                      text-xs
                      font-medium
                      text-slate-400
                    "
                  >
                    {category.books}
                  </p>
                </div>

                {/* ================= ARROW ================= */}

                <span
                  className="
                    absolute
                    bottom-4
                    right-4
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    bg-white
                    text-blue-600
                    shadow-sm
                    transition-all
                    duration-300
                    group-hover:bg-blue-600
                    group-hover:text-white
                  "
                >
                  <FiArrowRight className="text-sm" />
                </span>
              </button>
            );
          })}
        </div>

        {/* ================= MOBILE VIEW ALL ================= */}

        <button
          type="button"
          className="
            mx-auto
            mt-6
            flex
            items-center
            gap-2
            rounded-full
            bg-blue-50
            px-5
            py-2.5
            text-sm
            font-semibold
            text-blue-600
            sm:hidden
          "
        >
          View All Categories
          <FiArrowRight />
        </button>

      </div>
    </section>
  );
};

export default CategoriesGrid;