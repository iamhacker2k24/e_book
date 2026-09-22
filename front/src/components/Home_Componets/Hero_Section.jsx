import React from "react";
import { Link } from "react-router-dom";
import img from "./image.png";

const Hero_Section = () => {
  return (
    <section className="relative overflow-hidden bg-white border-b border-slate-100">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-stretch lg:grid-cols-2 lg:min-h-[520px]">
        {/* LEFT — CONTENT */}
        <div className="z-10 flex flex-col justify-center px-4 py-10 sm:px-8 sm:py-14 lg:px-12 xl:px-16">
          <p className="mb-3 text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
            Good Books Brighter Tomorrow
          </p>

          <h1 className="max-w-xl text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.12] tracking-tight text-slate-950">
            Read More,
            <br />
            Live{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
              Better
            </span>
          </h1>

          <p className="mt-4 max-w-lg text-sm sm:text-base leading-relaxed text-slate-600">
            Discover thousands of eBooks across technology, fiction,
            academics, self-help and more. Learn, explore and grow with
            BookNest anytime, on any device.
          </p>

          {/* Buttons */}
          <div className="mt-7 flex flex-wrap items-center gap-3.5">
            <Link
              to="/books"
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 sm:px-7 py-3 text-sm sm:text-base font-semibold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-700 active:scale-95"
            >
              Explore Books →
            </Link>

            <Link
              to="/about"
              className="inline-flex items-center justify-center rounded-xl border-2 border-slate-200 px-6 sm:px-7 py-3 text-sm sm:text-base font-semibold text-slate-700 transition hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 active:scale-95"
            >
              Learn More
            </Link>
          </div>

          {/* Stats - Balanced Grid */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-slate-100 pt-5">
            <div className="border-r border-slate-200 pr-3">
              <p className="text-lg sm:text-xl font-extrabold text-blue-600">10K+</p>
              <p className="text-xs text-slate-500">eBooks</p>
            </div>

            <div className="sm:border-r border-slate-200 sm:px-3">
              <p className="text-lg sm:text-xl font-extrabold text-blue-600">500+</p>
              <p className="text-xs text-slate-500">Authors</p>
            </div>

            <div className="border-r border-slate-200 pr-3 sm:px-3">
              <p className="text-lg sm:text-xl font-extrabold text-blue-600">50+</p>
              <p className="text-xs text-slate-500">Categories</p>
            </div>

            <div className="sm:pl-3">
              <p className="text-lg sm:text-xl font-extrabold text-blue-600">1M+</p>
              <p className="text-xs text-slate-500">Happy Readers</p>
            </div>
          </div>
        </div>

        {/* RIGHT — HERO IMAGE WITH MATCHED HEIGHT */}
        <div className="relative min-h-[300px] sm:min-h-[380px] lg:min-h-full h-full overflow-hidden bg-slate-50">
          <img
            src={img}
            alt="A reader enjoying an ebook"
            className="absolute inset-0 h-full w-full object-cover object-center"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero_Section;
