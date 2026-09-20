import React from "react";
import img_1 from "./Category_icon/image_1.png"

import img_2 from "./Category_icon/image_2.png"
import img_3 from "./Category_icon/image_3.png"
const categories = [
  {
    name: "All",
    image: img_1,
    bg: "bg-blue-50",
    hover: "group-hover:bg-blue-100",
  },
  {
    name: "Technology",
    image: img_2,
    bg: "bg-purple-50",
    hover: "group-hover:bg-purple-100",
  },
  {
    name: "Academic",
    image: img_3,
    bg: "bg-emerald-50",
    hover: "group-hover:bg-emerald-100",
  },
  {
    name: "Fiction",
    image: img_1,
    bg: "bg-pink-50",
    hover: "group-hover:bg-pink-100",
  },
  {
    name: "Self-Help",
    image: img_2,
    bg: "bg-amber-50",
    hover: "group-hover:bg-amber-100",
  },
  {
    name: "Business",
    image: img_3,
    bg: "bg-indigo-50",
    hover: "group-hover:bg-indigo-100",
  },
  {
    name: "Health",
    image: img_1,
    bg: "bg-rose-50",
    hover: "group-hover:bg-rose-100",
  },
  {
    name: "Art & Design",
    image: img_2,
    bg: "bg-orange-50",
    hover: "group-hover:bg-orange-100",
  },
  {
    name: "Science",
    image: img_3,
    bg: "bg-sky-50",
    hover: "group-hover:bg-sky-100",
  },
  {
    name: "Competitive",
    image: img_1,
    bg: "bg-green-50",
    hover: "group-hover:bg-green-100",
  },
  {
    name: "More",
    image: img_2,
    bg: "bg-slate-100",
    hover: "group-hover:bg-slate-200",
  },
];

const Category = () => {
  return (
    <section className="w-full bg-white py-6">
      <div className="mx-auto max-w-[1400px] px-5">

        <ul className="flex items-center justify-between gap-4 overflow-x-auto rounded-2xl border border-slate-100 bg-white px-5 py-4 shadow-sm scrollbar-hide">

          {categories.map((category) => (
            <li
              key={category.name}
              className="group flex min-w-[90px] cursor-pointer flex-col items-center gap-2"
            >
              <div
                className={`
                  flex h-14 w-14 items-center justify-center
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
                  className="h-9 w-9 object-contain"
                />
              </div>

              <span className="whitespace-nowrap text-xs font-semibold text-slate-700 transition-colors group-hover:text-blue-600">
                {category.name}
              </span>
            </li>
          ))}

        </ul>

      </div>
    </section>
  );
};


export default Category;
