import React from "react";
import img from "./image.png"
const Hero_Section = () => {
  return (
    <>
      <section className="relative overflow-hidden bg-white">
        <div className="mx-auto grid min-h-[600px] max-w-[1440px] grid-cols-1 items-center lg:grid-cols-2">
          {/* LEFT — HTML CONTENT */}
          <div className="z-10 px-6 py-16 lg:px-12 xl:px-16">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
              Good Books Brighter Tomorrow
            </p>

            <h1 className="max-w-xl text-5xl font-extrabold leading-[1.05] tracking-tight text-slate-950 md:text-6xl">
              Read More
              <br />
              Live{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
                Better
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-7 text-slate-600">
              Discover thousands of eBooks across technology, fiction,
              academics, self-help and more. Learn, explore and grow with
              BookNest.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-xl bg-blue-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-700">
                Explore Books →
              </button>

              <button className="rounded-xl border-2 border-blue-500 px-7 py-3.5 font-semibold text-blue-600 transition hover:bg-blue-50">
                ▶ Watch Trailer
              </button>
            </div>

            {/* Stats */}
            <div className="mt-10 flex flex-wrap gap-0">
              <div className="border-r border-slate-200 pr-8">
                <p className="text-2xl font-bold text-blue-600">10K+</p>
                <p className="text-sm text-slate-500">E-Books</p>
              </div>

              <div className="border-r border-slate-200 px-8">
                <p className="text-2xl font-bold text-blue-600">500+</p>
                <p className="text-sm text-slate-500">Authors</p>
              </div>

              <div className="border-r border-slate-200 px-8">
                <p className="text-2xl font-bold text-blue-600">50+</p>
                <p className="text-sm text-slate-500">Categories</p>
              </div>

              <div className="pl-8">
                <p className="text-2xl font-bold text-blue-600">1M+</p>
                <p className="text-sm text-slate-500">Happy Readers</p>
              </div>
            </div>
          </div>

          {/* RIGHT — IMAGE ONLY */}
          <div className="relative h-full min-h-[500px] lg:min-h-[600px]">
            <img
              src={img}
              alt="A reader enjoying an ebook"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero_Section;
