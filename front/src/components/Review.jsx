import React, { useRef } from "react";
import { FaStar } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Review = () => {
  const scrollRef = useRef(null);

  const img =
    "https://instagram.fixb1-3.fna.fbcdn.net/v/t51.82787-15/713004208_17896845222463970_590389362563801511_n.webp?_nc_cat=105&_nc_map=urlgen_bucketless&ig_cache_key=MzkwOTI3NTk5ODk0ODcxMzEzOA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTA4MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=RQZb_GtDZhIQ7kNvwHg54L2&_nc_oc=Adox-AERP6V56h_Wowby9KSny-sMaKEgAKpPZUzdkrypbNUZ43LAgIQEMajTrL8vixWS9Kk11wCT_I4qSUIujvui&_nc_zt=23&_nc_ht=instagram.fixb1-3.fna&_nc_gid=nJKWEolbdjekb0L0Xi86Ww&_nc_ss=7b689&oh=00_AQKAIpbBn3qaXoyHc3tumLDSfjYnE3Vu59wjdkt9oIaL5A&oe=6AB54EE3";

  const Reviews = [
    {
      name: "Priya Sharma",

      rattings: 5,
      context:
        "BookNest has completely changed the way I learn. Amazing collection and super easy to use!",
      profile_photo: img,
    },

    {
      name: "Amit Verma",
      rattings: 4,
      context:
        "Great prices, instant access, and a beautiful reading experience. Highly recommended!",
      profile_photo: img,
    },

    {
      name: "Sneha Das",
      rattings: 3,
      context:
        "I found so many rare books here. This is a paradise for book lovers!",
      profile_photo: img,
    },

    {
      name: "Rahul Sen",
      rattings: 2,
      context:
        "The collection is excellent and finding the right books is extremely easy.",
      profile_photo: img,
    },

    {
      name: "Ananya Roy",
      rattings: 1,
      context:
        "The interface is clean, fast and the e-book collection is really impressive.",
      profile_photo: img,
    },
  ];

  // ================================
  // SCROLL FUNCTION
  // ================================
  const scroll = (direction) => {
    if (!scrollRef.current) return;

    const amount = 420;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full bg-white py-10  ">
      <div className="mx-auto max-w-[1400px] px-5">
        {/* ================= HEADER ================= */}
        <div className="mb-5 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              What Our Readers Say
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Loved by readers around the world
            </p>
          </div>

          {/* ================= SCROLL BUTTONS ================= */}
          <div className="flex items-center gap-2">
            {/* LEFT */}
            <button
              type="button"
              onClick={() => scroll("left")}
              aria-label="Previous reviews"
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                border
                border-slate-200
                bg-white
                text-slate-500
                shadow-sm
                transition-all
                duration-200
                hover:border-blue-200
                hover:bg-blue-50
                hover:text-blue-600
                active:scale-95
              "
            >
              <FiChevronLeft className="text-xl" />
            </button>

            {/* RIGHT */}
            <button
              type="button"
              onClick={() => scroll("right")}
              aria-label="Next reviews"
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                border
                border-slate-200
                bg-white
                text-slate-700
                shadow-sm
                transition-all
                duration-200
                hover:border-blue-200
                hover:bg-blue-50
                hover:text-blue-600
                active:scale-95
              "
            >
              <FiChevronRight className="text-xl" />
            </button>
          </div>
        </div>

        {/* ================= REVIEWS ================= */}
        <div
          ref={scrollRef}
          className="
            flex
            gap-4
            overflow-x-auto
            scroll-smooth
            pb-3
            scrollbar-hide
          "
        >
          {Reviews.map((review, index) => (
            <article
              key={index}
              className="
                group
                flex
                min-w-[340px]
                max-w-[380px]
                flex-1
                items-center
                gap-4
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-5
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-blue-100
                hover:shadow-md
                md:min-w-[380px]
              "
            >
              {/* ================= PROFILE IMAGE ================= */}
              <div className="shrink-0">
                <div
                  className="
                    h-[72px]
                    w-[72px]
                    overflow-hidden
                    rounded-full
                    border-4
                    border-white
                    bg-slate-100
                    shadow-md
                    ring-1
                    ring-slate-100
                  "
                >
                  <img
                    src={review.profile_photo}
                    alt={review.name}
                    className="
                      h-full
                      w-full
                      object-cover
                    "
                  />
                </div>
              </div>

              {/* ================= REVIEW CONTENT ================= */}
              <div className="min-w-0 flex-1">
                {/* Review */}
                <p
                  className="
                    line-clamp-3
                    text-sm
                    leading-5
                    text-slate-600
                  "
                >
                  "{review.context}"
                </p>

                {/* User */}
                <div className="mt-3">
                  <h3 className="text-sm font-bold text-slate-900">
                    {review.name}
                  </h3>

                  <p className="mt-0.5 text-xs text-slate-500">{review.role}</p>
                </div>

                {/* Stars */}
                <div className="mt-2 flex items-center gap-1">
                  {Array.from({ length: review.rattings }).map(
                
                    (_, starIndex) => (
                      <FaStar
                        key={starIndex}
                        className="text-sm text-amber-400"
                      />
                    ),
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;
