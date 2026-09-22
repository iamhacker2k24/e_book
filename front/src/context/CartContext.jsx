import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

const INITIAL_CART = [
  {
    id: 1,
    title: "Atomic Habits",
    author: "James Clear",
    format: "Paperback & eBook",
    pages: "320 pages",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=400",
    coverColor: "from-amber-600 to-amber-800",
    price: 599,
    oldPrice: 799,
    quantity: 1,
  },
  {
    id: 2,
    title: "The Psychology of Money",
    author: "Morgan Housel",
    format: "Paperback & eBook",
    pages: "256 pages",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=400",
    coverColor: "from-emerald-700 to-teal-900",
    price: 499,
    oldPrice: 699,
    quantity: 1,
  },
  {
    id: 3,
    title: "Ikigai",
    author: "Héctor García",
    format: "Hardcover & eBook",
    pages: "208 pages",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=400",
    coverColor: "from-sky-600 to-blue-900",
    price: 450,
    oldPrice: 599,
    quantity: 1,
  },
];

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem("booknest_cart");
      return saved ? JSON.parse(saved) : INITIAL_CART;
    } catch {
      return INITIAL_CART;
    }
  });

  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem("booknest_wishlist");
      return saved ? JSON.parse(saved) : [1];
    } catch {
      return [1];
    }
  });

  const [couponCode, setCouponCode] = useState("");
  const [couponDiscount, setCouponDiscount] = useState(150); // Default promo offer

  useEffect(() => {
    try {
      localStorage.setItem("booknest_cart", JSON.stringify(cartItems));
    } catch (e) {
      console.error("Failed to save cart to localStorage", e);
    }
  }, [cartItems]);

  useEffect(() => {
    try {
      localStorage.setItem("booknest_wishlist", JSON.stringify(wishlist));
    } catch (e) {
      console.error("Failed to save wishlist to localStorage", e);
    }
  }, [wishlist]);

  const addToCart = (book, quantity = 1) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find((item) => item.id === book.id);
      if (existing) {
        return prevItems.map((item) =>
          item.id === book.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [
        ...prevItems,
        {
          id: book.id,
          title: book.title || book.name,
          author: book.author || book.Author || "Unknown Author",
          format: book.format || "Paperback & eBook",
          pages: book.pages || "300 pages",
          image: book.image || book.url,
          coverColor: book.coverColor || "from-blue-600 to-indigo-900",
          price: Number(book.price || book.offer_price || 499),
          oldPrice: Number(book.oldPrice || book.origin_price || 699),
          quantity: quantity,
        },
      ];
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(id);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const isWishlisted = (id) => wishlist.includes(id);

  const applyCoupon = (code) => {
    const trimmed = (code || "").trim().toUpperCase();
    if (trimmed === "BOOK20" || trimmed === "SAVE50" || trimmed === "READMORE") {
      setCouponCode(trimmed);
      setCouponDiscount(200);
      return { success: true, message: `Coupon "${trimmed}" applied successfully! (₹200 OFF)` };
    }
    return { success: false, message: "Invalid coupon code. Try 'BOOK20' or 'READMORE'." };
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
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
