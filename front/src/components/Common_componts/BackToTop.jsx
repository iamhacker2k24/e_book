import React, { useState, useEffect } from "react";
import { FiArrowUp } from "react-icons/fi";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      title="Scroll back to top"
      className="group fixed bottom-6 right-6 z-40 flex h-11 items-center justify-center rounded-full bg-slate-900/90 px-3 text-white shadow-xl shadow-slate-950/25 backdrop-blur-md border border-white/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:shadow-blue-600/30 active:scale-95"
    >
      <FiArrowUp className="text-lg transition-transform duration-300 group-hover:-translate-y-0.5" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-xs font-bold opacity-0 transition-all duration-300 group-hover:max-w-xs group-hover:opacity-100 group-hover:ml-1.5">
        Back to Top
      </span>
    </button>
  );
};

export default BackToTop;
