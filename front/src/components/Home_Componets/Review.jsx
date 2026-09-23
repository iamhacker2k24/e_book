import React, { useState, useRef } from "react";
import { FaStar } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight, FiCheckCircle } from "react-icons/fi";

const Review = () => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const Reviews = [
    {
      name: "Priya Sharma",
      role: "Literature Enthusiast",
      rattings: 5,
      context:
        "BookNest has completely changed the way I read and learn. The instant digital downloads, reader-friendly UI, and curated catalog are fantastic!",
      profile_photo:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
    },
    {
      name: "Amit Verma",
      role: "Software Engineer",
      rattings: 5,
      context:
        "Great prices, instant access, and crisp formatting. Found technical books that were out of stock elsewhere. Highly recommended for every avid reader!",
      profile_photo:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
    },
    {
      name: "Sneha Das",
      role: "Academic Researcher",
      rattings: 5,
      context:
        "I found rare titles across multiple categories here. Customer support is super quick and the reading experience on tablet is flawless.",
      profile_photo:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
    },
    {
      name: "Rahul Sen",
      role: "Competitive Exam Aspirant",
      rattings: 5,
      context:
        "The collection is top tier and finding specific books by author or genre takes seconds. The affordable pricing helped me build my personal study library.",
      profile_photo:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150",
    },
    {
      name: "Ananya Roy",
      role: "Design Lead & Book Club Host",
      rattings: 5,
      context:
        "The interface is fast, modern, and beautiful. Book recommendations are spot-on. Definitely my go-to eBook platform everyday!",
      profile_photo:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=150",
    },
  ];

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const amount = 380;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
    setTimeout(checkScroll, 350);
  };

  return (
    <section className="w-full bg-white py-8 sm:py-10">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        {/*         = HEADER         = */}
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
              What Our Readers Say
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Trusted by over 100,000+ avid readers and lifelong learners
            </p>
          </div>

          {/*         = ROUND SCROLL BUTTONS (User Reference Style)         = */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              aria-label="Previous reviews"
              className={`flex h-9 w-9 items-center justify-center rounded-full border bg-white shadow-sm transition-all duration-200 ${
                canScrollLeft
                  ? "border-slate-200 text-slate-700 hover:border-blue-500 hover:bg-blue-600 hover:text-white active:scale-95 cursor-pointer"
                  : "border-slate-200/60 text-slate-300 cursor-not-allowed opacity-40"
              }`}
            >
              <FiChevronLeft className="text-lg" />
            </button>

            <button
              type="button"
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              aria-label="Next reviews"
              className={`flex h-9 w-9 items-center justify-center rounded-full border bg-white shadow-sm transition-all duration-200 ${
                canScrollRight
                  ? "border-slate-200 text-slate-700 hover:border-blue-500 hover:bg-blue-600 hover:text-white active:scale-95 cursor-pointer"
                  : "border-slate-200/60 text-slate-300 cursor-not-allowed opacity-40"
              }`}
            >
              <FiChevronRight className="text-lg" />
            </button>
          </div>
        </div>

        {/*         = REVIEWS CAROUSEL WITH UNIFORM HEIGHTS         = */}
        <div>
          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex gap-5 overflow-x-auto pb-4 scroll-smooth scrollbar-hide"
          >
          {Reviews.map((review, index) => (
            <div
              key={index}
              className="flex h-[230px] w-[300px] sm:w-[360px] shrink-0 flex-col justify-between rounded-2xl border border-slate-100 bg-slate-50/70 p-5 sm:p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-lg"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(review.rattings)].map((_, i) => (
                    <FaStar key={i} size={14} />
                  ))}
                </div>

                <p className="mt-3 text-xs sm:text-sm text-slate-700 leading-relaxed italic line-clamp-3">
                  "{review.context}"
                </p>
              </div>

              {/* User Profile */}
              <div className="flex items-center gap-3 border-t border-slate-200/60 pt-3">
                <img
                  src={review.profile_photo}
                  alt={review.name}
                  className="h-10 w-10 rounded-full object-cover ring-2 ring-blue-500/20"
                  loading="lazy"
                />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900 truncate">{review.name}</h3>
                    <FiCheckCircle className="text-xs text-blue-600 shrink-0" title="Verified Reader" />
                  </div>
                  <p className="text-[11px] text-slate-500 truncate">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
