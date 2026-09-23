import React from "react";
import { Link } from "react-router-dom";
import { Heart, Trash2, ShoppingCart, ArrowLeft, ArrowRight } from "lucide-react";
import { useCart } from "../../context/CartContext";
import BookCover from "../Common_componts/BookCover";

const CartItems = () => {
  const { cartItems, updateQuantity, removeFromCart, toggleWishlist, isWishlisted } = useCart();

  const increaseQuantity = (id) => {
    const item = cartItems.find((i) => i.id === id);
    if (item) updateQuantity(id, item.quantity + 1);
  };

  const decreaseQuantity = (id) => {
    const item = cartItems.find((i) => i.id === id);
    if (item) updateQuantity(id, item.quantity - 1);
  };

  const deleteItem = (id) => {
    removeFromCart(id);
  };

  return (
    <section className="w-full">
      {/*         = CART HEADER         = */}
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100/80 text-blue-600">
            <ShoppingCart size={24} strokeWidth={2} />
          </div>

          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#07144d]">
              Your Cart
            </h1>
            <p className="mt-0.5 text-xs sm:text-sm text-slate-500">
              {cartItems.length} {cartItems.length === 1 ? "eBook" : "eBooks"} in your bag
            </p>
          </div>
        </div>

        <Link
          to="/books"
          className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:underline"
        >
          <ArrowLeft size={14} />
          <span>Continue Shopping</span>
        </Link>
      </div>

      {/*         = CART CONTAINER         = */}
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        {/* Empty State */}
        {cartItems.length === 0 ? (
          <div className="flex min-h-[350px] flex-col items-center justify-center p-8 text-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-50 text-blue-400 mb-4">
              <ShoppingCart size={38} strokeWidth={1.5} />
            </div>

            <h2 className="text-xl font-bold text-slate-900">
              Your cart is empty
            </h2>

            <p className="mt-1.5 max-w-sm text-sm text-slate-500">
              Explore thousands of bestselling eBooks across technology, self-help, business and fiction.
            </p>

            <Link
              to="/books"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-xs font-bold text-white shadow-md shadow-blue-200 transition hover:bg-blue-700 active:scale-95"
            >
              <span>Browse All eBooks</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        ) : (
          <>
            {/* Table Header (Desktop) */}
            <div className="hidden grid-cols-[1fr_110px_140px_100px_70px] items-center gap-4 bg-slate-50/80 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-500 md:grid border-b border-slate-100">
              <div>Product</div>
              <div>Price</div>
              <div className="text-center">Quantity</div>
              <div className="text-right">Total</div>
              <div></div>
            </div>

            {/* Cart Items List */}
            <div className="divide-y divide-slate-100">
              {cartItems.map((item) => {
                const isWish = isWishlisted(item.id);
                const title = item.title || item.name;

                return (
                  <div key={item.id} className="p-4 sm:p-5">
                    {/* Desktop Row */}
                    <div className="hidden grid-cols-[1fr_110px_140px_100px_70px] items-center gap-4 md:grid">
                      {/* Product */}
                      <div className="flex items-center gap-4 min-w-0">
                        <Link
                          to={`/book/${item.id}`}
                          className="h-24 w-16 shrink-0 overflow-hidden rounded-lg bg-slate-100 shadow-sm"
                        >
                          <BookCover
                            src={item.image}
                            alt={title}
                            title={title}
                            author={item.author}
                            coverColor={item.coverColor}
                            className="h-full w-full object-cover"
                          />
                        </Link>

                        <div className="min-w-0 flex-1">
                          <Link to={`/book/${item.id}`}>
                            <h3 className="truncate text-sm font-bold text-slate-900 hover:text-blue-600 transition">
                              {title}
                            </h3>
                          </Link>
                          <p className="text-xs text-slate-500 mt-0.5 truncate">
                            {item.author}
                          </p>
                          <span className="mt-1 inline-block rounded-md bg-green-50 px-2 py-0.5 text-[10px] font-bold text-green-700">
                            Instant Access
                          </span>
                        </div>
                      </div>

                      {/* Price */}
                      <div>
                        <span className="text-sm font-bold text-slate-900">
                          ₹{item.price}
                        </span>
                        {item.oldPrice && (
                          <p className="text-xs text-slate-400 line-through">
                            ₹{item.oldPrice}
                          </p>
                        )}
                      </div>

                      {/* Quantity */}
                      <div className="flex justify-center">
                        <div className="flex h-9 items-center rounded-xl border border-slate-200 bg-slate-50">
                          <button
                            type="button"
                            onClick={() => decreaseQuantity(item.id)}
                            className="flex h-full w-8 items-center justify-center text-sm font-bold text-slate-600 hover:bg-slate-200 rounded-l-xl transition"
                          >
                            -
                          </button>
                          <span className="w-9 text-center text-xs font-bold text-slate-800">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => increaseQuantity(item.id)}
                            className="flex h-full w-8 items-center justify-center text-sm font-bold text-slate-600 hover:bg-slate-200 rounded-r-xl transition"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      {/* Line Total */}
                      <div className="text-right">
                        <span className="text-sm font-extrabold text-blue-600">
                          ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                        </span>
                      </div>

                      {/* Actions */}
                      <div className="flex items-center justify-end gap-2">
                        <button
                          type="button"
                          onClick={() => toggleWishlist(item.id)}
                          title="Wishlist"
                          className="rounded-lg p-1.5 text-slate-400 hover:text-pink-500 transition"
                        >
                          <Heart
                            size={18}
                            className={isWish ? "fill-pink-500 text-pink-500" : ""}
                          />
                        </button>
                        <button
                          type="button"
                          onClick={() => deleteItem(item.id)}
                          title="Remove"
                          className="rounded-lg p-1.5 text-slate-400 hover:text-red-600 transition"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>

                    {/* Mobile Card Row */}
                    <div className="flex gap-3 md:hidden">
                      <Link
                        to={`/book/${item.id}`}
                        className="h-24 w-16 shrink-0 overflow-hidden rounded-lg bg-slate-100 shadow-sm"
                      >
                        <BookCover
                          src={item.image}
                          alt={title}
                          title={title}
                          author={item.author}
                          coverColor={item.coverColor}
                          className="h-full w-full object-cover"
                        />
                      </Link>

                      <div className="flex flex-1 flex-col justify-between min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <Link to={`/book/${item.id}`}>
                              <h3 className="line-clamp-1 text-sm font-bold text-slate-900">
                                {title}
                              </h3>
                            </Link>
                            <p className="text-xs text-slate-500 truncate">{item.author}</p>
                          </div>
                          <button
                            type="button"
                            onClick={() => deleteItem(item.id)}
                            className="text-slate-400 hover:text-red-500"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>

                        <div className="mt-3 flex items-center justify-between">
                          <div className="flex items-center gap-1.5">
                            <span className="text-sm font-bold text-blue-600">
                              ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                            </span>
                            <span className="text-[11px] text-slate-400">
                              (₹{item.price} ea)
                            </span>
                          </div>

                          <div className="flex h-8 items-center rounded-lg border border-slate-200 bg-slate-50">
                            <button
                              type="button"
                              onClick={() => decreaseQuantity(item.id)}
                              className="w-7 text-xs font-bold text-slate-600 hover:bg-slate-200 h-full rounded-l-lg"
                            >
                              -
                            </button>
                            <span className="w-7 text-center text-xs font-bold text-slate-800">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() => increaseQuantity(item.id)}
                              className="w-7 text-xs font-bold text-slate-600 hover:bg-slate-200 h-full rounded-r-lg"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default CartItems;