import React, { useState, useEffect } from "react";
import { FiBookOpen } from "react-icons/fi";

const QUOTES = [
  "“A reader lives a thousand lives before he dies.”",
  "“There is no friend as loyal as a book.”",
  "“Today a reader, tomorrow a leader.”",
  "“A book is a dream you hold in your hands.”",
  "“Reading is to the mind what exercise is to the body.”",
];

const PageLoader = ({ text = "Loading your reading experience...", fullScreen = true }) => {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [progress, setProgress] = useState(15);

  useEffect(() => {
    // Quote rotation
    const quoteInterval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % QUOTES.length);
    }, 2400);

    // Smooth progress simulation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 95) return 95;
        const jump = Math.floor(Math.random() * 15) + 5;
        return Math.min(prev + jump, 95);
      });
    }, 200);

    return () => {
      clearInterval(quoteInterval);
      clearInterval(progressInterval);
    };
  }, []);

  const content = (
    <div className="flex flex-col items-center justify-center p-6 text-center select-none">
      {/* GLOWING AMBIENT BACKGROUND */}
      <div className="relative mb-6">
        <div className="absolute -inset-4 rounded-full bg-blue-500/20 blur-2xl animate-pulse" />
        <div className="absolute -inset-8 rounded-full bg-indigo-500/15 blur-3xl animate-pulse delay-300" />

        {/* ANIMATED BOOK CONTAINER */}
        <div className="relative flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-tr from-blue-600 to-indigo-600 shadow-2xl shadow-blue-500/40 ring-4 ring-white">
          <FiBookOpen className="text-4xl text-white animate-bounce" />

          {/* Orbiting Sparkles */}
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-4 w-4 bg-amber-400" />
          </span>
        </div>
      </div>

      {/* BRANDING */}
      <h2 className="text-2xl font-extrabold tracking-tight">
        <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
          BookNest
        </span>
      </h2>
      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 mt-0.5">
        Read • Learn • Grow
      </p>

      {/* DYNAMIC LOADING TEXT */}
      <p className="mt-4 text-xs font-semibold text-slate-600 animate-pulse">
        {text}
      </p>

      {/* PROGRESS BAR */}
      <div className="mt-4 h-1.5 w-48 overflow-hidden rounded-full bg-slate-100 ring-1 ring-slate-200">
        <div
          className="h-full rounded-full bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 transition-all duration-300 ease-out shadow-sm shadow-blue-500/50"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* ROTATING QUOTE */}
      <div className="mt-5 max-w-xs h-8 flex items-center justify-center">
        <p className="text-xs italic text-slate-400 transition-opacity duration-500">
          {QUOTES[quoteIndex]}
        </p>
      </div>
    </div>
  );

  if (!fullScreen) {
    return (
      <div className="flex min-h-[350px] w-full items-center justify-center rounded-2xl bg-white/70 backdrop-blur-sm">
        {content}
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/95 backdrop-blur-md transition-all duration-500">
      {content}
    </div>
  );
};

export default PageLoader;
