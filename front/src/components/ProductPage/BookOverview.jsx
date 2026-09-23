import React, { useState } from "react";
import {
  Heart,
  Star,
} from "lucide-react";

import { Link } from "react-router-dom";
import { ALL_BOOKS } from "../../data/booksData";
import BookCover from "../Common_componts/BookCover";

const BookOverview = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  const tabs = [
    "Overview",
    "Product Details",
    "Reviews (12.4K)",
    "About the Author",
    "Shipping & Returns",
  ];

  const relatedBooks = ALL_BOOKS.slice(1, 4);

  return (
    <section className="w-full bg-[#f4faff] px-4 py-6 sm:px-6 lg:px-10">

      {/*                           = */}
      {/* MAIN CONTAINER */}
      {/*                           = */}

      <div className="mx-auto max-w-[1400px] overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">

        {/*                         = */}
        {/* TABS */}
        {/*                         = */}

        <div className="border-b border-slate-200">

          <div className="flex w-full overflow-x-auto">

            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`
                  relative
                  whitespace-nowrap
                  px-7
                  py-5
                  text-sm
                  font-semibold
                  transition
                  sm:px-8
                  md:text-base
                  ${
                    activeTab === tab
                      ? "text-blue-600"
                      : "text-[#18234f] hover:text-blue-600"
                  }
                `}
              >
                {tab}

                {/* ACTIVE BLUE LINE */}
                {activeTab === tab && (
                  <span className="absolute bottom-0 left-0 h-[3px] w-full rounded-t-full bg-blue-600" />
                )}
              </button>
            ))}

          </div>

        </div>


        {/*                         = */}
        {/* CONTENT */}
        {/*                         = */}

        <div className="grid grid-cols-1 gap-7 p-5 sm:p-7 lg:grid-cols-[1fr_350px] lg:p-8">

          {/*                         = */}
          {/* LEFT CONTENT */}
          {/*                         = */}

          <div className="min-w-0">

            {/*         = BOOK DESCRIPTION         = */}

            <div>

              <h2 className="text-xl font-bold text-[#101b50] sm:text-2xl">
                Book Description
              </h2>


              {/* FIRST PARAGRAPH */}

              <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
                <span className="font-semibold text-[#101b50]">
                  Atomic Habits
                </span>{" "}
                offers a proven framework for improving every day. James
                Clear, one of the world's leading experts on habit
                formation, reveals practical strategies that will teach
                you exactly how to form good habits, break bad ones, and
                master the tiny behaviors that lead to remarkable results.
              </p>


              {/* SECOND PARAGRAPH */}

              <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
                Learn how to make time for new habits, overcome a lack of
                motivation, and design an environment that makes success
                easier. Whether you want to get in shape, advance your
                career, build better relationships, or simply become a
                little bit better each day, this book gives you the tools
                and tactics to make it happen.
              </p>

            </div>


            {/*                         = */}
            {/* QUOTE BOX */}
            {/*                         = */}

            <div className="mt-7 rounded-lg bg-[#edf7ff] px-6 py-6 sm:px-8">

              <div className="flex gap-4">

                {/* QUOTE ICON */}

                <div className="flex-shrink-0">

                  <span className="text-5xl font-bold leading-none text-blue-600">
                    “
                  </span>

                </div>


                {/* QUOTE CONTENT */}

                <div>

                  <p className="font-serif text-lg italic leading-8 text-[#263258] sm:text-xl">
                    “A supremely practical and useful book.”
                  </p>

                  <p className="mt-4 text-sm font-semibold text-[#18234f] sm:text-base">
                    — Mark Manson, author of The Subtle Art of Not Giving
                    a F*ck
                  </p>

                </div>

              </div>

            </div>

          </div>


          {/*                         = */}
          {/* RIGHT - YOU MAY ALSO LIKE */}
          {/*                         = */}

          <aside className="h-fit rounded-xl border border-slate-200 bg-white p-5">

            {/* HEADER */}

            <div className="mb-5 flex items-center justify-between">

              <h2 className="text-lg font-bold text-[#101b50] sm:text-xl">
                You May Also Like
              </h2>

              <button className="text-sm font-semibold text-blue-600 hover:underline">
                View All
              </button>

            </div>


            {/*                         = */}
            {/* RELATED BOOKS */}
            {/*                         = */}

            <div className="space-y-5">

              {relatedBooks.map((book) => (

                <div
                  key={book.id}
                  className="group flex gap-4 items-center"
                >

                  {/* BOOK IMAGE */}

                  <Link to={`/book/${book.id}`} className="h-[105px] w-[72px] flex-shrink-0 overflow-hidden rounded-md bg-slate-100 shadow-sm">

                    <BookCover
                      src={book.image}
                      alt={book.title}
                      title={book.title}
                      author={book.author}
                      coverColor={book.coverColor}
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                    />

                  </Link>


                  {/* BOOK INFO */}

                  <div className="min-w-0 flex-1">

                    {/* TITLE + HEART */}

                    <div className="flex items-start justify-between gap-2">

                      <Link to={`/book/${book.id}`}>
                        <h3 className="line-clamp-2 text-sm font-bold leading-5 text-[#101b50] hover:text-blue-600 transition">
                          {book.title}
                        </h3>
                      </Link>

                      <button
                        className="
                          flex-shrink-0
                          text-[#101b50]
                          transition
                          hover:text-red-500
                        "
                      >
                        <Heart size={20} strokeWidth={1.8} />
                      </button>

                    </div>


                    {/* AUTHOR */}

                    <p className="mt-1 truncate text-sm text-slate-500">
                      {book.author}
                    </p>


                    {/* RATING */}

                    <div className="mt-2 flex items-center gap-1">

                      <Star
                        size={16}
                        fill="#ffb000"
                        className="text-[#ffb000]"
                      />

                      <span className="text-sm font-medium text-slate-600">
                        {book.rating}
                      </span>

                    </div>


                    {/* PRICE */}

                    <div className="mt-1 flex items-center gap-3">

                      <span className="text-base font-bold text-blue-600">
                        {book.price}
                      </span>

                      <span className="text-sm text-slate-400 line-through">
                        {book.oldPrice}
                      </span>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </aside>

        </div>

      </div>

    </section>
  );
};

export default BookOverview;