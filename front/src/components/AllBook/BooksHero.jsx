import React from "react";
import {
  ChevronRight,
  BookOpen,
  Tag,
  Users,
} from "lucide-react";

const BooksHero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-r from-[#f2f9ff] via-[#edf7ff] to-[#eaf6ff]">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-14">
        <div className="grid min-h-[300px] grid-cols-1 items-center lg:grid-cols-2">

          {/* ================= LEFT CONTENT ================= */}
          <div className="relative z-10 py-10 lg:py-12">

            {/* Breadcrumb */}
            <div className="mb-4 flex items-center gap-2 text-sm text-[#61739d]">
              <span>Home</span>

              <ChevronRight
                size={15}
                className="text-[#8da0c4]"
              />

              <span>Books</span>
            </div>


            {/* Heading */}
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-[#07164b] sm:text-5xl lg:text-[48px]">
              Explore Our{" "}
              <span className="text-[#0878f9]">
                Books
              </span>
            </h1>


            {/* Description */}
            <p className="mt-3 max-w-[600px] text-[15px] leading-6 text-[#63759e] sm:text-base">
              Discover a world of stories, knowledge, and inspiration.
              Find your next favorite book from our wide collection.
            </p>


            {/* ================= STATS ================= */}
            <div className="mt-7 flex flex-wrap items-center gap-y-5">

              {/* Stat 1 */}
              <div className="flex items-center gap-3 pr-6 sm:pr-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-sm">
                  <BookOpen
                    size={22}
                    strokeWidth={2}
                    className="text-[#0878f9]"
                  />
                </div>

                <div>
                  <p className="text-[17px] font-bold leading-5 text-[#07164b]">
                    10,000+
                  </p>

                  <p className="mt-1 text-[12px] text-[#63759e]">
                    Books Available
                  </p>
                </div>
              </div>


              {/* Divider */}
              <div className="hidden h-10 w-px bg-[#cbdcf0] sm:block" />


              {/* Stat 2 */}
              <div className="flex items-center gap-3 px-0 sm:px-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-sm">
                  <Tag
                    size={22}
                    strokeWidth={2}
                    className="text-[#0878f9]"
                  />
                </div>

                <div>
                  <p className="text-[17px] font-bold leading-5 text-[#07164b]">
                    50+
                  </p>

                  <p className="mt-1 text-[12px] text-[#63759e]">
                    Categories
                  </p>
                </div>
              </div>


              {/* Divider */}
              <div className="hidden h-10 w-px bg-[#cbdcf0] sm:block" />


              {/* Stat 3 */}
              <div className="flex items-center gap-3 pl-0 sm:pl-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-sm">
                  <Users
                    size={22}
                    strokeWidth={2}
                    className="text-[#0878f9]"
                  />
                </div>

                <div>
                  <p className="text-[17px] font-bold leading-5 text-[#07164b]">
                    100K+
                  </p>

                  <p className="mt-1 text-[12px] text-[#63759e]">
                    Happy Readers
                  </p>
                </div>
              </div>

            </div>
          </div>


          {/* ================= RIGHT IMAGE ================= */}
          <div className="relative flex h-full min-h-[280px] items-end justify-center lg:justify-end">

            {/* Soft background glow */}
            <div className="absolute right-[15%] top-[15%] h-64 w-64 rounded-full bg-[#d9efff] blur-3xl" />

            <img
              src="/images/books/books-hero.png"
              alt="Stack of books"
              className="
                relative
                z-10
                w-full
                max-w-[570px]
                object-contain
                object-right
                lg:max-w-[620px]
              "
            />

          </div>

        </div>
      </div>
    </section>
  );
};

export default BooksHero;