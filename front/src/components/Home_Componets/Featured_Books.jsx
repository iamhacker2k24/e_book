import React from "react";
import { CiHeart } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

const Featured_Books = () => {
  const img_1 =
    "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQGlyaOCmYgOopePOCarkQ6FV-Lyu4BN7aDfqW_OsTIgnOw7I6FiXhHeRFeWyuGPHnuDfu5lw6m73YqFoDs7G8xtXQVOsBN";

  const img_2 =
    "https://m.media-amazon.com/images/I/81Rnac2Fq+L._SY385_.jpg";

  const img_3 =
    "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1581527774i/41881472.jpg";

  const Feature_Books = [
    {
      name: "Atomic Habits",
      Author: "James Clear",
      ratting: 4.8,
      ratting_given_user: "12K",
      origin_price: 499,
      offer_price: 249,
      url: img_1,
    },

    {
      name: "Clean Code",
      Author: "Robert C. Martin",
      ratting: 4.7,
      ratting_given_user: "8.1K",
      origin_price: 599,
      offer_price: 299,
      url: img_2,
    },

    {
      name: "The Psychology of Money",
      Author: "Morgan Housel",
      ratting: 4.8,
      ratting_given_user: "9.4K",
      origin_price: 449,
      offer_price: 279,
      url: img_3,
    },

    {
      name: "Deep Work",
      Author: "Cal Newport",
      ratting: 4.6,
      ratting_given_user: "6.1K",
      origin_price: 599,
      offer_price: 279,
      url: img_2,
    },

    {
      name: "Ikigai",
      Author: "Héctor García",
      ratting: 4.7,
      ratting_given_user: "5.6K",
      origin_price: 399,
      offer_price: 249,
      url: img_1,
    },

    {
      name: "Rich Dad Poor Dad",
      Author: "Robert T. Kiyosaki",
      ratting: 4.6,
      ratting_given_user: "7.9K",
      origin_price: 499,
      offer_price: 299,
      url: img_3,
    }, {
      name: "Rich Dad Poor Dad",
      Author: "Robert T. Kiyosaki",
      ratting: 4.6,
      ratting_given_user: "7.9K",
      origin_price: 499,
      offer_price: 299,
      url: img_3,
    }, {
      name: "Rich Dad Poor Dad",
      Author: "Robert T. Kiyosaki",
      ratting: 4.6,
      ratting_given_user: "7.9K",
      origin_price: 499,
      offer_price: 299,
      url: img_3,
    }, {
      name: "Rich Dad Poor Dad",
      Author: "Robert T. Kiyosaki",
      ratting: 4.6,
      ratting_given_user: "7.9K",
      origin_price: 499,
      offer_price: 299,
      url: img_3,
    }, {
      name: "Rich Dad Poor Dad",
      Author: "Robert T. Kiyosaki",
      ratting: 4.6,
      ratting_given_user: "7.9K",
      origin_price: 499,
      offer_price: 299,
      url: img_3,
    }, {
      name: "Rich Dad Poor Dad",
      Author: "Robert T. Kiyosaki",
      ratting: 4.6,
      ratting_given_user: "7.9K",
      origin_price: 499,
      offer_price: 299,
      url: img_3,
    }, {
      name: "Rich Dad Poor Dad",
      Author: "Robert T. Kiyosaki",
      ratting: 4.6,
      ratting_given_user: "7.9K",
      origin_price: 499,
      offer_price: 299,
      url: img_3,
    }, {
      name: "Rich Dad Poor Dad",
      Author: "Robert T. Kiyosaki",
      ratting: 4.6,
      ratting_given_user: "7.9K",
      origin_price: 499,
      offer_price: 299,
      url: img_3,
    }, {
      name: "Rich Dad Poor Dad",
      Author: "Robert T. Kiyosaki",
      ratting: 4.6,
      ratting_given_user: "7.9K",
      origin_price: 499,
      offer_price: 299,
      url: img_3,
    }, {
      name: "Rich Dad Poor Dad",
      Author: "Robert T. Kiyosaki",
      ratting: 4.6,
      ratting_given_user: "7.9K",
      origin_price: 499,
      offer_price: 299,
      url: img_3,
    },
  ];

  return (
    <section className="w-full bg-white py-8">
      <div className="mx-auto max-w-[1400px] px-5">

        {/* ================= HEADER ================= */}
        <div className="mb-5 flex items-center justify-between">

          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl">🔥</span>

              <h2 className="text-xl font-bold tracking-tight text-slate-900 md:text-2xl">
                Featured E-Books
              </h2>
            </div>

            <p className="mt-1 text-sm text-slate-500">
              Handpicked just for you
            </p>
          </div>

          {/* View All */}
          <button
            type="button"
            className="group flex items-center gap-1 text-sm font-semibold text-blue-600 transition hover:text-blue-700"
          >
            View All

            <FiArrowRight
              className="text-lg transition-transform duration-200 group-hover:translate-x-1"
            />
          </button>

        </div>

        {/* ================= BOOK LIST ================= */}
        <div className="relative">

          <div
            className="
              flex
              gap-4
              overflow-x-auto
              pb-4
              scrollbar-hide
            "
          >

            {Feature_Books.map((Feature_Book, index) => (
              <article
                key={index}
                className="
                  group
                  relative
                  flex
                  min-w-[185px]
                  max-w-[185px]
                  flex-col
                  overflow-hidden
                  rounded-xl
                  border
                  border-slate-200
                  bg-white
                  p-3
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-blue-200
                  hover:shadow-lg
                  sm:min-w-[200px]
                  sm:max-w-[200px]
                  md:min-w-[210px]
                  md:max-w-[210px]
                "
              >

                {/* ================= BOOK IMAGE ================= */}
                <div className="relative mb-3 aspect-[3/4] w-full overflow-hidden rounded-lg bg-slate-100">

                  <img
                    src={Feature_Book.url}
                    alt={Feature_Book.name}
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-500
                      group-hover:scale-105
                    "
                  />

                  {/* Wishlist */}
                  <button
                    type="button"
                    aria-label={`Add ${Feature_Book.name} to wishlist`}
                    className="
                      absolute
                      right-2
                      top-2
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-full
                      bg-white/95
                      shadow-md
                      backdrop-blur
                      transition-all
                      hover:scale-110
                      hover:bg-white
                    "
                  >
                    <CiHeart className="text-xl text-slate-700" />
                  </button>

                </div>

                {/* ================= BOOK INFO ================= */}
                <div className="flex flex-1 flex-col">

                  {/* Book Name */}
                  <h3
                    className="
                      line-clamp-2
                      min-h-[40px]
                      text-sm
                      font-bold
                      leading-5
                      text-slate-900
                    "
                  >
                    {Feature_Book.name}
                  </h3>

                  {/* Author */}
                  <p className="mt-1 truncate text-xs text-slate-500">
                    {Feature_Book.Author}
                  </p>

                  {/* Rating */}
                  <div className="mt-2 flex items-center gap-1">

                    <FaStar className="text-[13px] text-amber-400" />

                    <span className="text-xs font-semibold text-slate-700">
                      {Feature_Book.ratting}
                    </span>

                    <span className="text-xs text-slate-400">
                      ({Feature_Book.ratting_given_user})
                    </span>

                  </div>

                  {/* ================= PRICE ================= */}
                  <div className="mt-2 flex items-center gap-2">

                    <span className="text-base font-bold text-slate-900">
                      ₹{Feature_Book.offer_price}
                    </span>

                    <span className="text-xs text-slate-400 line-through">
                      ₹{Feature_Book.origin_price}
                    </span>

                  </div>

                  {/* ================= CART BUTTON ================= */}
                  <button
                    type="button"
                    className="
                      mt-3
                      w-full
                      rounded-lg
                      bg-blue-600
                      py-2
                      text-xs
                      font-semibold
                      text-white
                      shadow-sm
                      shadow-blue-200
                      transition-all
                      duration-200
                      hover:bg-blue-700
                      hover:shadow-md
                      active:scale-[0.98]
                    "
                  >
                    Add to Cart
                  </button>

                </div>

              </article>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
};

export default Featured_Books;