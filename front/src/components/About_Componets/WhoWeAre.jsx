import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const WhoWeAre = () => {
  return (
    <section className="w-full bg-white py-8 md:py-10">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">

        <div className="grid items-center gap-8 lg:grid-cols-[1.6fr_0.9fr]">

          {/* ================= LEFT CONTENT ================= */}
          <div>
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-950 md:text-4xl">
              Who We{" "}
              <span className="text-blue-600">
                Are
              </span>
            </h2>

            <p className="mt-3 max-w-[850px] text-sm leading-6 text-slate-600 md:text-base md:leading-7">
              BookNest is a modern eBook platform built for curious minds,
              lifelong learners, and passionate readers. We bring together a
              vast collection of eBooks across genres — from technology and
              academic to fiction and self-help — all in one place.
            </p>

            <p className="mt-1 max-w-[850px] text-sm leading-6 text-slate-600 md:text-base md:leading-7">
              Our goal is simple: to make reading easier, more affordable,
              and more enjoyable for everyone.
            </p>
          </div>

          {/* ================= QUOTE ================= */}
          <div
            className="
              relative
              overflow-hidden
              rounded-2xl
              border
              border-blue-100
              bg-gradient-to-br
              from-blue-50
              to-indigo-50
              px-7
              py-6
              shadow-sm
            "
          >

            {/* Quote Icon */}
            <FaQuoteLeft
              className="
                absolute
                left-6
                top-5
                text-3xl
                text-blue-400/70
              "
            />

            <div className="relative pl-8 text-center">

              <blockquote
                className="
                  text-lg
                  font-semibold
                  italic
                  leading-7
                  text-blue-900
                  md:text-xl
                "
              >
                “A reader lives a thousand lives before he dies.”
              </blockquote>

              <p className="mt-3 text-sm font-medium text-blue-700">
                — George R.R. Martin
              </p>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;