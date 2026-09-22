import React, { useState } from "react";
import { BookOpen } from "lucide-react";

export const BookCover = ({
  src,
  alt = "Book Cover",
  className = "",
  title = "Book Title",
  author = "Author",
  coverColor = "from-blue-600 to-indigo-900",
}) => {
  const [hasError, setHasError] = useState(false);

  if (!src || hasError) {
    return (
      <div
        className={`relative flex flex-col justify-between overflow-hidden rounded-md bg-gradient-to-br ${coverColor} p-3 text-white shadow-md select-none ${className}`}
      >
        <div className="flex items-center justify-between opacity-80">
          <BookOpen size={16} />
          <span className="text-[9px] font-bold uppercase tracking-wider">BookNest</span>
        </div>

        <div className="my-auto py-2">
          <p className="line-clamp-2 text-center text-xs font-bold leading-tight">
            {title}
          </p>
          <p className="mt-1 line-clamp-1 text-center text-[10px] text-white/80">
            {author}
          </p>
        </div>

        <div className="border-t border-white/20 pt-1 text-center">
          <span className="text-[8px] tracking-widest text-white/70 uppercase">eBook Edition</span>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setHasError(true)}
      className={className}
      loading="lazy"
    />
  );
};

export default BookCover;
