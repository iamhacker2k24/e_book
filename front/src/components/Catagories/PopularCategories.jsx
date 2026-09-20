import React from "react";
import { Flame, ArrowRight } from "lucide-react";
const img ="https://images-platform.99static.com//k9SmlWfF9vou0-2-oO5rFKbYAoU=/1080x0:3777x2697/fit-in/590x590/projects-files/37/3758/375817/6ee72999-2e33-404a-b745-aa1280603179.jpg"
const popularCategories = [
  {
    name: "Fiction",
    books: "1,240 books",
    image: img,
  },
  {
    name: "Self-Help",
    books: "560 books",
    image: img,
  },
  {
    name: "Technology",
    books: "420 books",
    image: img,
  },
  {
    name: "Children",
    books: "680 books",
    image: img,
  },
  {
    name: "Business & Finance",
    books: "510 books",
    image:img,
  },
  {
    name: "Comics & Graphic Novels",
    books: "450 books",
    image: img,
  },
];

const PopularCategories = () => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-10 py-8 bg-white">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        
        {/* Left */}
        <div className="flex items-center gap-2">
          <Flame
            size={25}
            className="text-orange-500 fill-orange-500"
          />

          <h2 className="text-[20px] sm:text-[22px] font-bold text-[#07164b]">
            Popular Categories
          </h2>
        </div>

        {/* View All */}
        <button
          className="
            flex items-center gap-1.5
            text-[#0878f9]
            text-sm
            font-semibold
            hover:gap-2.5
            transition-all
          "
        >
          View All
          <ArrowRight size={17} />
        </button>
      </div>


      {/* Cards */}
      <div
        className="
          grid
          grid-cols-2
          sm:grid-cols-3
          lg:grid-cols-6
          gap-4
        "
      >
        {popularCategories.map((category) => (
          <div
            key={category.name}
            className="
              group
              bg-white
              border
              border-[#e5eaf2]
              rounded-xl
              overflow-hidden
              cursor-pointer
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-lg
              hover:border-[#cbd8ed]
            "
          >

            {/* Image */}
            <div className="w-full h-[105px] sm:h-[115px] overflow-hidden">
              <img
                src={category.image}
                alt={category.name}
                className="
                  w-full
                  h-full
                  object-cover
                  transition-transform
                  duration-500
                  group-hover:scale-105
                "
              />
            </div>


            {/* Content */}
            <div className="px-3 py-3">
              
              <h3
                className="
                  text-[13px]
                  sm:text-[14px]
                  font-bold
                  text-[#07164b]
                  leading-tight
                  truncate
                "
                title={category.name}
              >
                {category.name}
              </h3>

              <p
                className="
                  mt-1
                  text-[12px]
                  sm:text-[13px]
                  text-[#7180a5]
                "
              >
                {category.books}
              </p>

            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default PopularCategories;