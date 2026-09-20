import React from "react";
import { FiSend, FiArrowRight } from "react-icons/fi";

const JoinCommunity = () => {
  return (
    <section className="w-full bg-white py-8">
      <div className="mx-auto max-w-[1400px] px-5">

        <div
          className="
            relative
            flex
            flex-col
            items-center
            gap-6
            overflow-hidden
            rounded-2xl
            border
            border-blue-100
            bg-gradient-to-r
            from-blue-50
            via-indigo-50
            to-purple-50
            px-6
            py-7
            shadow-sm
            md:flex-row
            md:px-8
            lg:gap-8
          "
        >

          {/* Decorative background */}
          <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-200/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-10 left-20 h-32 w-32 rounded-full bg-purple-200/30 blur-3xl" />

          {/* ================= ICON ================= */}
          <div
            className="
              relative
              flex
              h-14
              w-14
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-white
              shadow-md
              ring-1
              ring-blue-100
            "
          >
            <FiSend className="text-2xl text-blue-600" />
          </div>

          {/* ================= TEXT ================= */}
          <div className="relative min-w-0 flex-1 text-center md:text-left">

            <h2 className="text-xl font-bold tracking-tight text-slate-900 md:text-2xl">
              Join Our Reading Community
            </h2>

            <p className="mt-1 text-sm leading-6 text-slate-600">
              Get the latest updates, new arrivals and exclusive offers.
            </p>

          </div>

          {/* ================= SUBSCRIBE FORM ================= */}
          <form
            className="
              relative
              flex
              w-full
              max-w-[430px]
              items-center
              rounded-xl
              border
              border-slate-200
              bg-white
              p-1
              shadow-sm
              focus-within:border-blue-400
              focus-within:ring-4
              focus-within:ring-blue-100
              md:w-[430px]
            "
          >

            <input
              type="email"
              placeholder="Enter your email address"
              required
              className="
                h-11
                min-w-0
                flex-1
                bg-transparent
                px-4
                text-sm
                text-slate-700
                outline-none
                placeholder:text-slate-400
              "
            />

            <button
              type="submit"
              className="
                flex
                h-11
                shrink-0
                items-center
                gap-2
                rounded-lg
                bg-blue-600
                px-5
                text-sm
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
              <span className="hidden sm:inline">
                Subscribe
              </span>

              <FiArrowRight className="text-lg" />
            </button>

          </form>

        </div>
      </div>
    </section>
  );
};

export default JoinCommunity;