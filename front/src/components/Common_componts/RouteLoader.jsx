import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PageLoader from "./PageLoader";

const RouteLoader = ({ children }) => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Reset window scroll position on every page change
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    // Trigger loading animation on route transition
    setLoading(true);
    setProgress(20);

    const t1 = setTimeout(() => setProgress(65), 100);
    const t2 = setTimeout(() => setProgress(100), 280);
    const t3 = setTimeout(() => {
      setLoading(false);
      setProgress(0);
    }, 450);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [location.pathname]);

  return (
    <>
      {/* TOP SLIM PROGRESS BAR (like YouTube/GitHub) */}
      {progress > 0 && (
        <div className="fixed top-0 left-0 right-0 z-[9999] h-1 bg-transparent pointer-events-none">
          <div
            className="h-full bg-gradient-to-r from-blue-600 via-indigo-500 to-amber-400 shadow-md shadow-blue-500/50 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          >
            {/* Glowing tip */}
            <div className="absolute right-0 top-0 h-full w-6 bg-white/70 blur-[2px]" />
          </div>
        </div>
      )}

      {/* FULLSCREEN ANIMATED LOADING OVERLAY ON ROUTE TRANSITION */}
      {loading && (
        <div className="fixed inset-0 z-[9990] flex items-center justify-center bg-white/80 backdrop-blur-sm transition-opacity duration-300 animate-in fade-in">
          <PageLoader fullScreen={false} text="Opening page..." />
        </div>
      )}

      {/* PAGE CONTENT WITH SMOOTH MOUNT TRANSITION */}
      <div key={location.pathname} className="min-h-screen animate-in fade-in duration-300">
        {children}
      </div>
    </>
  );
};

export default RouteLoader;
