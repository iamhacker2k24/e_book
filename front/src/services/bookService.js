import api from "./api";

/**
 * Normalizes book objects from any backend schema into a consistent frontend format.
 * Accommodates MongoDB (_id), SQL (id), and variations in naming (name vs title, coverImage vs image, etc.)
 */
export const normalizeBook = (raw) => {
  if (!raw || typeof raw !== "object") return null;

  const id = raw._id || raw.id || String(Math.random());
  const title = raw.title || raw.name || "Untitled Book";
  const subtitle = raw.subtitle || raw.tagline || "";
  const author = raw.author || raw.author_name || raw.writer || "Unknown Author";
  const category = raw.category || raw.genre || "General";

  const price = Number(raw.price ?? raw.offer_price ?? raw.sale_price ?? 0);
  const oldPrice = Number(raw.oldPrice ?? raw.origin_price ?? raw.original_price ?? raw.mrp ?? 0);

  const discount =
    raw.discount !== undefined
      ? Number(raw.discount)
      : oldPrice > price && oldPrice > 0
      ? Math.round(((oldPrice - price) / oldPrice) * 100)
      : 0;

  const rating = Number(raw.rating ?? raw.avgRating ?? raw.stars ?? 4.5);
  const reviews = String(raw.reviews ?? raw.reviewCount ?? raw.totalReviews ?? "0");
  const badge = raw.badge || raw.tag || "";
  const format = raw.format || "Paperback & eBook";
  const pages = raw.pages || (raw.pageCount ? `${raw.pageCount} pages` : "300 pages");
  const published = raw.published || raw.publicationDate || raw.releaseDate || "";
  const language = raw.language || "English";
  const inStock = raw.inStock !== undefined ? Boolean(raw.inStock) : raw.is_available !== undefined ? Boolean(raw.is_available) : true;
  const image = raw.image || raw.cover_image || raw.coverImage || raw.imageUrl || raw.thumbnail || raw.url || "";
  const coverColor = raw.coverColor || "from-blue-600 to-indigo-900";
  const description = raw.description || raw.summary || raw.details || "";

  return {
    id,
    _id: id,
    title,
    subtitle,
    author,
    category,
    price,
    oldPrice: oldPrice > 0 ? oldPrice : Math.round(price * 1.3),
    discount,
    rating,
    reviews,
    badge,
    format,
    pages,
    published,
    language,
    inStock,
    image,
    coverColor,
    description,
    raw,
  };
};

/**
 * Extracts book array from common backend response envelopes:
 * e.g., res.data, res.data.books, res.data.data, res.data.items
 */
const extractBooksArray = (data) => {
  if (Array.isArray(data)) return data;
  if (data && typeof data === "object") {
    if (Array.isArray(data.books)) return data.books;
    if (Array.isArray(data.data)) return data.data;
    if (Array.isArray(data.items)) return data.items;
    if (Array.isArray(data.results)) return data.results;
  }
  return [];
};

/**
 * Fetch all books from backend API with optional filters
 * Matches: GET /api/books or GET /api/books/search
 * @param {Object} params - { search, category, sort, page, limit, minPrice, maxPrice }
 */
export const getAllBooks = async (params = {}) => {
  try {
    const endpoint = params.search ? "/api/books/search" : "/api/books";
    const response = await api.get(endpoint, { params });
    const rawList = extractBooksArray(response.data);
    return rawList.map(normalizeBook).filter(Boolean);
  } catch (error) {
    if (error.response?.status === 404 && params.search) {
      // Fallback to standard /api/books with query params
      try {
        const fallback = await api.get("/api/books", { params });
        const rawList = extractBooksArray(fallback.data);
        return rawList.map(normalizeBook).filter(Boolean);
      } catch {
        // pass to outer
      }
    }
    console.warn("Backend /api/books not reachable or returned an error:", error.message);
    throw error;
  }
};

/**
 * Fetch single book by ID
 * Matches: GET /api/books/:id
 * @param {string|number} id
 */
export const getBookById = async (id) => {
  if (!id) return null;
  try {
    const response = await api.get(`/api/books/${id}`);
    const data = response.data?.book || response.data?.data || response.data;
    return normalizeBook(data);
  } catch (error) {
    console.warn(`Backend /api/books/${id} not reachable:`, error.message);
    throw error;
  }
};

/**
 * Fetch featured books
 * Matches: GET /api/books/featured
 * @param {number} limit
 */
export const getFeaturedBooks = async (limit = 8) => {
  try {
    const response = await api.get("/api/books/featured", { params: { limit } });
    const rawList = extractBooksArray(response.data);
    return rawList.map(normalizeBook).filter(Boolean);
  } catch {
    try {
      const response = await api.get("/api/books", { params: { featured: true, limit } });
      const rawList = extractBooksArray(response.data);
      return rawList.map(normalizeBook).filter(Boolean);
    } catch (e) {
      console.warn("Failed to fetch featured books from backend:", e.message);
      throw e;
    }
  }
};

/**
 * Fetch bestselling / popular books
 * Matches: GET /api/books/popular or /api/books/bestseller
 * @param {number} limit
 */
export const getBestsellerBooks = async (limit = 6) => {
  try {
    const response = await api.get("/api/books/popular", { params: { limit } });
    const rawList = extractBooksArray(response.data);
    return rawList.map(normalizeBook).filter(Boolean);
  } catch {
    try {
      const response = await api.get("/api/books/bestseller", { params: { limit } });
      const rawList = extractBooksArray(response.data);
      return rawList.map(normalizeBook).filter(Boolean);
    } catch (e) {
      console.warn("Failed to fetch popular books from backend:", e.message);
      throw e;
    }
  }
};

/**
 * Fetch related books by ID
 * Matches: GET /api/books/related/:id
 * @param {string|number} id
 */
export const getRelatedBooks = async (id, limit = 4) => {
  if (!id) return [];
  try {
    const response = await api.get(`/api/books/related/${id}`, { params: { limit } });
    const rawList = extractBooksArray(response.data);
    return rawList.map(normalizeBook).filter(Boolean);
  } catch (error) {
    console.warn(`Backend /api/books/related/${id} not reachable:`, error.message);
    return [];
  }
};

/**
 * Fetch distinct categories from backend
 * Matches: GET /api/categories
 */
export const getCategories = async () => {
  try {
    const response = await api.get("/api/categories");
    if (Array.isArray(response.data)) return response.data;
    if (Array.isArray(response.data?.categories)) return response.data.categories;
    if (Array.isArray(response.data?.data)) return response.data.data;
    return [];
  } catch (error) {
    console.warn("Backend /api/categories not reachable:", error.message);
    return [];
  }
};

/**
 * Place an order / checkout
 * Matches: POST /api/orders
 * @param {Object} orderPayload
 */
export const checkoutOrder = async (orderPayload) => {
  const response = await api.post("/api/orders", orderPayload);
  return response.data;
};

/**
 * Fetch user wishlist from backend
 * Matches: GET /api/wishlist
 */
export const getWishlist = async () => {
  try {
    const response = await api.get("/api/wishlist");
    return extractBooksArray(response.data);
  } catch (error) {
    console.warn("Backend /api/wishlist not reachable:", error.message);
    return [];
  }
};

/**
 * Add book to wishlist
 * Matches: POST /api/wishlist/:bookId
 */
export const addToWishlistApi = async (bookId) => {
  const response = await api.post(`/api/wishlist/${bookId}`);
  return response.data;
};

/**
 * Remove book from wishlist
 * Matches: DELETE /api/wishlist/:bookId
 */
export const removeFromWishlistApi = async (bookId) => {
  const response = await api.delete(`/api/wishlist/${bookId}`);
  return response.data;
};

export default {
  normalizeBook,
  getAllBooks,
  getBookById,
  getFeaturedBooks,
  getBestsellerBooks,
  getRelatedBooks,
  getCategories,
  checkoutOrder,
  getWishlist,
  addToWishlistApi,
  removeFromWishlistApi,
};
