import { createContext, useContext, useState, useEffect } from "react";
import { checkoutOrder } from "../services/bookService";

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem("booknest_cart");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem("booknest_wishlist");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [couponCode, setCouponCode] = useState("");
  const [couponDiscount, setCouponDiscount] = useState(0);

  // Sync cart to local storage
  useEffect(() => {
    try {
      localStorage.setItem("booknest_cart", JSON.stringify(cartItems));
    } catch (e) {
      console.error("Failed to save cart to localStorage", e);
    }
  }, [cartItems]);

  // Sync wishlist to local storage
  useEffect(() => {
    try {
      localStorage.setItem("booknest_wishlist", JSON.stringify(wishlist));
    } catch (e) {
      console.error("Failed to save wishlist to localStorage", e);
    }
  }, [wishlist]);

  const addToCart = (book, quantity = 1) => {
    if (!book) return;
    const bookId = book.id || book._id;

    setCartItems((prevItems) => {
      const existing = prevItems.find((item) => item.id === bookId);
      if (existing) {
        return prevItems.map((item) =>
          item.id === bookId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [
        ...prevItems,
        {
          id: bookId,
          _id: bookId,
          title: book.title || book.name || "Untitled Book",
          author: book.author || "Unknown Author",
          format: book.format || "Paperback & eBook",
          pages: book.pages || "300 pages",
          image: book.image || book.cover_image || "",
          coverColor: book.coverColor || "from-blue-600 to-indigo-900",
          price: Number(book.price || 0),
          oldPrice: Number(book.oldPrice || book.price || 0),
          quantity: quantity,
        },
      ];
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => String(item.id) !== String(id)));
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(id);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        String(item.id) === String(id) ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
    setCouponCode("");
    setCouponDiscount(0);
  };

  const toggleWishlist = (id) => {
    const strId = String(id);
    setWishlist((prev) =>
      prev.map(String).includes(strId)
        ? prev.filter((x) => String(x) !== strId)
        : [...prev, id]
    );
  };

  const isWishlisted = (id) => wishlist.map(String).includes(String(id));

  const applyCoupon = (code) => {
    const trimmed = (code || "").trim().toUpperCase();
    if (trimmed === "BOOK20" || trimmed === "SAVE50" || trimmed === "READMORE") {
      setCouponCode(trimmed);
      setCouponDiscount(200);
      return { success: true, message: `Coupon "${trimmed}" applied successfully! (₹200 OFF)` };
    }
    return { success: false, message: "Invalid coupon code. Try 'BOOK20' or 'READMORE'." };
  };

  const submitCheckout = async (customerData = {}) => {
    const payload = {
      items: cartItems,
      couponCode,
      discount,
      deliveryCharge,
      subtotal,
      total,
      customer: customerData,
    };
    try {
      const response = await checkoutOrder(payload);
      clearCart();
      return { success: true, data: response };
    } catch (err) {
      // In case backend is not connected yet, allow graceful fallback
      console.warn("Backend checkout order API not available, simulating successful local checkout:", err.message);
      clearCart();
      return {
        success: true,
        simulated: true,
        message: "Order placed locally (backend integration pending).",
      };
    }
  };

  const cartCount = cartItems.reduce((acc, item) => acc + (item.quantity || 0), 0);
  const subtotal = cartItems.reduce(
    (acc, item) => acc + (item.price || 0) * (item.quantity || 0),
    0
  );
  const deliveryCharge = subtotal > 499 || cartItems.length === 0 ? 0 : 49;
  const discount = Math.min(couponDiscount, subtotal > 0 ? subtotal : 0);
  const total = Math.max(0, subtotal - discount + deliveryCharge);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartCount,
        subtotal,
        discount,
        deliveryCharge,
        total,
        couponCode,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        applyCoupon,
        wishlist,
        toggleWishlist,
        isWishlisted,
        submitCheckout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export default CartContext;
