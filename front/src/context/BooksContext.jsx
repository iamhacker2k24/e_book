import { createContext, useContext, useState, useEffect, useCallback, useMemo } from "react";
import { getAllBooks, getBookById } from "../services/bookService";

const BooksContext = createContext(null);

export const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Initial load from backend
  useEffect(() => {
    let isMounted = true;
    getAllBooks()
      .then((data) => {
        if (isMounted) {
          setBooks(Array.isArray(data) ? data : []);
          setError(null);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (isMounted) {
          setError(
            err.response?.data?.message ||
            err.message ||
            "Failed to connect to backend server. Make sure your backend is running."
          );
          setBooks([]);
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  // Manual refetch trigger
  const refetchBooks = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getAllBooks();
      setBooks(Array.isArray(data) ? data : []);
    } catch (err) {
      console.warn("Unable to fetch books from backend:", err.message);
      setError(
        err.response?.data?.message ||
        err.message ||
        "Failed to connect to backend server. Make sure your backend is running."
      );
      setBooks([]);
    } finally {
      setLoading(false);
    }
  }, []);

  // Derived featured books (either with badge === "Bestseller" / "Trending" / "Popular" or first 8)
  const featuredBooks = useMemo(() => {
    if (!books.length) return [];
    const tagged = books.filter(
      (b) =>
        b.badge?.toLowerCase() === "bestseller" ||
        b.badge?.toLowerCase() === "trending" ||
        b.badge?.toLowerCase() === "popular" ||
        b.badge?.toLowerCase() === "hot"
    );
    return tagged.length >= 4 ? tagged.slice(0, 8) : books.slice(0, 8);
  }, [books]);

  // Derived bestselling books
  const bestsellingBooks = useMemo(() => {
    if (!books.length) return [];
    const sorted = [...books].sort((a, b) => (b.rating || 0) - (a.rating || 0));
    return sorted.slice(0, 6).map((book, idx) => ({
      ...book,
      rank: idx + 1,
    }));
  }, [books]);

  // Derived unique categories with book counts
  const categories = useMemo(() => {
    const counts = { "All Categories": books.length };
    books.forEach((b) => {
      if (b.category) {
        counts[b.category] = (counts[b.category] || 0) + 1;
      }
    });

    return Object.entries(counts).map(([name, count]) => [name, count]);
  }, [books]);

  // Helper to get book by ID (from cache or backend)
  const getBook = useCallback(
    async (id) => {
      if (!id) return null;
      const strId = String(id);
      const cached = books.find((b) => String(b.id) === strId || String(b._id) === strId);
      if (cached) return cached;

      try {
        const fetched = await getBookById(id);
        return fetched;
      } catch (e) {
        console.warn(`Could not load book ${id}:`, e);
        return null;
      }
    },
    [books]
  );

  return (
    <BooksContext.Provider
      value={{
        books,
        loading,
        error,
        categories,
        featuredBooks,
        bestsellingBooks,
        refetchBooks,
        getBook,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
};

export const useBooks = () => {
  const context = useContext(BooksContext);
  if (!context) {
    throw new Error("useBooks must be used within a BooksProvider");
  }
  return context;
};

export default BooksContext;
