import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  Trash2,
  ShoppingCart,
  Lock,
  Tag,
  Truck,
  RotateCcw,
  ShieldCheck,
  Award,
  Star,
} from "lucide-react";

const CartPage = () => {
  /* =========================================================
     CART DATA
  ========================================================= */

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "Atomic Habits",
      author: "James Clear",
      format: "Paperback",
      pages: "320 pages",
      image: "/books/atomic-habits.jpg",
      price: 599,
      oldPrice: 799,
      quantity: 1,
    },
    {
      id: 2,
      title: "Deep Work",
      author: "Cal Newport",
      format: "Paperback",
      pages: "296 pages",
      image: "/books/deep-work.jpg",
      price: 450,
      oldPrice: 599,
      quantity: 1,
    },
    {
      id: 3,
      title: "Ikigai",
      author: "Héctor García",
      format: "Paperback",
      pages: "208 pages",
      image: "/books/ikigai.jpg",
      price: 450,
      oldPrice: 599,
      quantity: 1,
    },
  ]);

  /* =========================================================
     RECOMMENDED BOOKS
  ========================================================= */

  const recommendedBooks = [
    {
      id: 101,
      title: "The Psychology of Money",
      author: "Morgan Housel",
      image: "/books/psychology-of-money.jpg",
      price: 499,
      oldPrice: 699,
      rating: 4.7,
    },
    {
      id: 102,
      title: "Think Like a Monk",
      author: "Jay Shetty",
      image: "/books/think-like-a-monk.jpg",
      price: 550,
      oldPrice: 699,
      rating: 4.7,
    },
    {
      id: 103,
      title: "The Alchemist",
      author: "Paulo Coelho",
      image: "/books/the-alchemist.jpg",
      price: 399,
      oldPrice: 549,
      rating: 4.7,
    },
    {
      id: 104,
      title: "Sapiens",
      author: "Yuval Noah Harari",
      image: "/books/sapiens.jpg",
      price: 620,
      oldPrice: 799,
      rating: 4.8,
    },
  ];

  /* =========================================================
     STATES
  ========================================================= */

  const [coupon, setCoupon] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);

  /* =========================================================
     UPDATE QUANTITY
  ========================================================= */

  const updateQuantity = (id, type) => {
    setCartItems((items) =>
      items.map((item) => {
        if (item.id !== id) return item;

        let newQuantity = item.quantity;

        if (type === "increase") {
          newQuantity += 1;
        }

        if (type === "decrease") {
          newQuantity = Math.max(1, newQuantity - 1);
        }

        return {
          ...item,
          quantity: newQuantity,
        };
      })
    );
  };

  /* =========================================================
     REMOVE ITEM
  ========================================================= */

  const removeItem = (id) => {
    setCartItems((items) =>
      items.filter((item) => item.id !== id)
    );
  };

  /* =========================================================
     CALCULATIONS
  ========================================================= */

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const originalTotal = cartItems.reduce(
    (total, item) => total + item.oldPrice * item.quantity,
    0
  );

  const discount = originalTotal - subtotal;

  const deliveryCharge = subtotal >= 499 ? 0 : 49;

  const total = subtotal + deliveryCharge;

  /* =========================================================
     COUPON
  ========================================================= */

  const applyCoupon = () => {
    if (!coupon.trim()) return;

    setCouponApplied(true);
  };

  /* =========================================================
     ADD RECOMMENDED BOOK
  ========================================================= */

  const addRecommendedBook = (book) => {
    const alreadyExists = cartItems.find(
      (item) => item.title === book.title
    );

    if (alreadyExists) {
      setCartItems((items) =>
        items.map((item) =>
          item.title === book.title
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        )
      );

      return;
    }

    setCartItems((items) => [
      ...items,
      {
        id: Date.now(),
        title: book.title,
        author: book.author,
        format: "Paperback",
        pages: "Available",
        image: book.image,
        price: book.price,
        oldPrice: book.oldPrice,
        quantity: 1,
      },
    ]);
  };

  return (
    <main className="min-h-screen bg-[#f4faff] px-4 py-6 sm:px-6 lg:px-10">

      {/* =====================================================
          PAGE CONTAINER
      ====================================================== */}

      <div className="mx-auto max-w-[1400px]">

        {/* ===================================================
            BREADCRUMB
        ==================================================== */}

        <div className="mb-5 flex items-center gap-2 text-sm text-slate-500">

          <span className="cursor-pointer hover:text-blue-600">
            Home
          </span>

          <ChevronRight size={16} />

          <span className="font-medium text-slate-700">
            Cart
          </span>

        </div>


        {/* ===================================================
            PAGE TITLE
        ==================================================== */}

        <div className="mb-5 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

          <div>

            <div className="flex items-center gap-3">

              <ShoppingCart
                size={38}
                strokeWidth={1.8}
                className="text-[#07144d]"
              />

              <h1 className="text-3xl font-bold text-[#07144d] sm:text-4xl">
                Your Cart
              </h1>

            </div>

            <p className="ml-[51px] mt-1 text-sm text-slate-500 sm:text-base">
              {cartItems.length}{" "}
              {cartItems.length === 1 ? "item" : "items"} in your cart
            </p>

          </div>


          {/* CONTINUE SHOPPING */}

          <button
            className="
              flex
              w-fit
              items-center
              gap-2
              rounded-lg
              border
              border-blue-200
              bg-white
              px-5
              py-3
              font-semibold
              text-blue-600
              transition
              hover:bg-blue-50
            "
          >
            <ChevronLeft size={19} />

            Continue Shopping
          </button>

        </div>


        {/* ===================================================
            MAIN GRID
        ==================================================== */}

        <div className="grid grid-cols-1 gap-5 xl:grid-cols-[1fr_390px]">


          {/* =================================================
              LEFT SIDE
          ================================================= */}

          <div className="min-w-0">


            {/* =================================================
                CART ITEMS
            ================================================= */}

            <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">

              {/* TABLE HEADER */}

              <div className="hidden grid-cols-[1fr_130px_145px_110px_60px] gap-4 bg-[#f6faff] px-6 py-4 text-sm font-semibold text-[#18234f] md:grid">

                <span>Product</span>

                <span>Price</span>

                <span>Quantity</span>

                <span>Total</span>

                <span></span>

              </div>


              {/* PRODUCTS */}

              {cartItems.length === 0 ? (

                <div className="flex min-h-[300px] flex-col items-center justify-center px-5 text-center">

                  <ShoppingCart
                    size={60}
                    className="text-slate-300"
                  />

                  <h2 className="mt-4 text-xl font-bold text-[#07144d]">
                    Your cart is empty
                  </h2>

                  <p className="mt-2 text-slate-500">
                    Add some books to get started.
                  </p>

                </div>

              ) : (

                cartItems.map((item) => (

                  <div
                    key={item.id}
                    className="
                      border-t
                      border-slate-200
                      px-5
                      py-5
                      transition
                      hover:bg-slate-50/50
                      md:px-6
                    "
                  >

                    {/* DESKTOP */}

                    <div className="hidden grid-cols-[1fr_130px_145px_110px_60px] items-center gap-4 md:grid">

                      {/* PRODUCT */}

                      <div className="flex min-w-0 items-center gap-5">

                        <div className="h-[100px] w-[75px] flex-shrink-0 overflow-hidden rounded-md bg-slate-100">

                          <img
                            src={item.image}
                            alt={item.title}
                            className="h-full w-full object-contain"
                          />

                        </div>


                        <div className="min-w-0">

                          <h3 className="truncate text-base font-bold text-[#101b50]">
                            {item.title}
                          </h3>

                          <p className="mt-1 text-sm text-slate-500">
                            {item.author}
                          </p>

                          <p className="mt-1 text-sm text-slate-500">
                            {item.format}
                            <span className="mx-2">|</span>
                            {item.pages}
                          </p>

                          <span className="mt-2 inline-flex rounded-md bg-green-100 px-2 py-1 text-xs font-semibold text-green-600">
                            ✓ In Stock
                          </span>

                        </div>

                      </div>


                      {/* PRICE */}

                      <div>

                        <p className="text-xl font-bold text-blue-600">
                          ₹{item.price}
                        </p>

                        <p className="mt-1 text-sm text-slate-400 line-through">
                          ₹{item.oldPrice}
                        </p>

                      </div>


                      {/* QUANTITY */}

                      <QuantityControl
                        quantity={item.quantity}
                        onDecrease={() =>
                          updateQuantity(item.id, "decrease")
                        }
                        onIncrease={() =>
                          updateQuantity(item.id, "increase")
                        }
                      />


                      {/* TOTAL */}

                      <p className="text-lg font-bold text-[#07144d]">
                        ₹{item.price * item.quantity}
                      </p>


                      {/* ACTIONS */}

                      <div className="flex flex-col items-center gap-4">

                        <button className="text-[#07144d] transition hover:text-red-500">
                          <Heart size={21} />
                        </button>

                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-[#07144d] transition hover:text-red-500"
                        >
                          <Trash2 size={20} />
                        </button>

                      </div>

                    </div>


                    {/* MOBILE */}

                    <div className="flex gap-4 md:hidden">

                      <div className="h-[105px] w-[75px] flex-shrink-0 overflow-hidden rounded-md bg-slate-100">

                        <img
                          src={item.image}
                          alt={item.title}
                          className="h-full w-full object-contain"
                        />

                      </div>


                      <div className="min-w-0 flex-1">

                        <div className="flex justify-between gap-2">

                          <div>

                            <h3 className="font-bold text-[#101b50]">
                              {item.title}
                            </h3>

                            <p className="mt-1 text-sm text-slate-500">
                              {item.author}
                            </p>

                          </div>

                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-slate-500 hover:text-red-500"
                          >
                            <Trash2 size={19} />
                          </button>

                        </div>


                        <div className="mt-2">

                          <span className="text-lg font-bold text-blue-600">
                            ₹{item.price}
                          </span>

                          <span className="ml-2 text-sm text-slate-400 line-through">
                            ₹{item.oldPrice}
                          </span>

                        </div>


                        <div className="mt-3 flex items-center justify-between">

                          <QuantityControl
                            quantity={item.quantity}
                            onDecrease={() =>
                              updateQuantity(
                                item.id,
                                "decrease"
                              )
                            }
                            onIncrease={() =>
                              updateQuantity(
                                item.id,
                                "increase"
                              )
                            }
                          />

                          <span className="font-bold text-[#07144d]">
                            ₹{item.price * item.quantity}
                          </span>

                        </div>

                      </div>

                    </div>

                  </div>

                ))

              )}

            </section>


            {/* =================================================
                YOU MAY ALSO LIKE
            ================================================= */}

            <RecommendedBooks
              books={recommendedBooks}
              onAdd={addRecommendedBook}
            />

          </div>


          {/* =================================================
              RIGHT SIDE
          ================================================= */}

          <aside className="space-y-5">


            {/* =================================================
                ORDER SUMMARY
            ================================================= */}

            <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">

              <h2 className="text-xl font-bold text-[#07144d]">
                Order Summary
              </h2>


              <div className="mt-6 space-y-4">

                {/* SUBTOTAL */}

                <div className="flex justify-between text-base">

                  <span className="text-slate-500">
                    Subtotal ({cartItems.length} items)
                  </span>

                  <span className="font-semibold text-[#07144d]">
                    ₹{subtotal.toLocaleString("en-IN")}
                  </span>

                </div>


                {/* DISCOUNT */}

                <div className="flex justify-between text-base">

                  <span className="text-slate-500">
                    Discount
                  </span>

                  <span className="font-semibold text-green-600">
                    - ₹{discount.toLocaleString("en-IN")}
                  </span>

                </div>


                {/* DELIVERY */}

                <div className="flex justify-between text-base">

                  <span className="text-slate-500">
                    Delivery Charges
                  </span>

                  <span className="font-semibold text-green-600">
                    {deliveryCharge === 0
                      ? "Free"
                      : `₹${deliveryCharge}`}
                  </span>

                </div>

              </div>


              <div className="my-5 h-px bg-slate-200" />


              {/* TOTAL */}

              <div className="flex items-center justify-between">

                <span className="text-xl font-bold text-[#07144d]">
                  Total
                </span>

                <span className="text-3xl font-bold text-blue-600">
                  ₹{total.toLocaleString("en-IN")}
                </span>

              </div>


              {/* SAVING */}

              <p className="mt-3 text-right font-semibold text-green-600">
                You saved ₹{discount.toLocaleString("en-IN")} 🎉
              </p>


              {/* CHECKOUT */}

              <button
                className="
                  mt-5
                  flex
                  h-[52px]
                  w-full
                  items-center
                  justify-center
                  gap-3
                  rounded-lg
                  bg-blue-600
                  font-semibold
                  text-white
                  shadow-sm
                  transition
                  hover:bg-blue-700
                  active:scale-[0.98]
                "
              >

                <Lock size={19} />

                Proceed to Checkout

              </button>

            </section>


            {/* =================================================
                COUPON
            ================================================= */}

            <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">

              <div className="flex items-center gap-3">

                <Tag
                  size={23}
                  className="text-blue-600"
                />

                <h2 className="text-lg font-bold text-[#07144d]">
                  Apply Coupon
                </h2>

              </div>


              <div className="mt-5 flex gap-2">

                <input
                  type="text"
                  value={coupon}
                  onChange={(e) =>
                    setCoupon(e.target.value)
                  }
                  placeholder="Enter coupon code"
                  className="
                    h-[45px]
                    min-w-0
                    flex-1
                    rounded-lg
                    border
                    border-slate-200
                    px-4
                    text-sm
                    outline-none
                    transition
                    focus:border-blue-500
                    focus:ring-2
                    focus:ring-blue-100
                  "
                />

                <button
                  onClick={applyCoupon}
                  className="
                    rounded-lg
                    border
                    border-blue-200
                    bg-blue-50
                    px-5
                    font-semibold
                    text-blue-600
                    transition
                    hover:bg-blue-100
                  "
                >
                  Apply
                </button>

              </div>


              {/* COUPON SUCCESS */}

              <div
                className={`
                  mt-3
                  rounded-lg
                  px-4
                  py-3
                  text-sm
                  font-medium
                  ${
                    couponApplied
                      ? "bg-green-100 text-green-700"
                      : "bg-green-50 text-green-700"
                  }
                `}
              >
                ✓ Get up to 30% off on your first order!
              </div>

            </section>


            {/* =================================================
                BENEFITS
            ================================================= */}

            <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">

              <div className="grid grid-cols-2 gap-x-5 gap-y-6">

                {/* FREE DELIVERY */}

                <Benefit
                  icon={<Truck size={21} />}
                  title="Free Delivery"
                  description="On orders above ₹499"
                />


                {/* EASY RETURNS */}

                <Benefit
                  icon={<RotateCcw size={21} />}
                  title="Easy Returns"
                  description="7 days return policy"
                />


                {/* SECURE PAYMENT */}

                <Benefit
                  icon={<ShieldCheck size={21} />}
                  title="Secure Payment"
                  description="100% secure checkout"
                />


                {/* GENUINE BOOKS */}

                <Benefit
                  icon={<Award size={21} />}
                  title="Genuine Books"
                  description="Original & quality assured"
                />

              </div>

            </section>

          </aside>

        </div>

      </div>

    </main>
  );
};


/* =============================================================
   QUANTITY CONTROL
============================================================= */

const QuantityControl = ({
  quantity,
  onDecrease,
  onIncrease,
}) => {
  return (
    <div className="flex h-[38px] w-fit items-center overflow-hidden rounded-lg border border-slate-200">

      <button
        onClick={onDecrease}
        className="
          flex
          h-full
          w-[36px]
          items-center
          justify-center
          text-lg
          text-[#07144d]
          transition
          hover:bg-blue-50
        "
      >
        −
      </button>

      <span className="flex h-full min-w-[40px] items-center justify-center border-x border-slate-200 px-2 font-semibold text-[#07144d]">
        {quantity}
      </span>

      <button
        onClick={onIncrease}
        className="
          flex
          h-full
          w-[36px]
          items-center
          justify-center
          text-lg
          text-[#07144d]
          transition
          hover:bg-blue-50
        "
      >
        +
      </button>

    </div>
  );
};


/* =============================================================
   RECOMMENDED BOOKS
============================================================= */

const RecommendedBooks = ({ books, onAdd }) => {
  return (
    <section className="mt-5 rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">

      {/* HEADER */}

      <div className="mb-5 flex items-center justify-between">

        <h2 className="text-xl font-bold text-[#07144d]">
          You May Also Like
        </h2>

        <button className="flex items-center gap-1 text-sm font-semibold text-blue-600 hover:underline">

          View All

          <ChevronRight size={17} />

        </button>

      </div>


      {/* BOOK GRID */}

      <div className="relative">

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {books.map((book) => (

            <div
              key={book.id}
              className="min-w-0"
            >

              {/* BOOK IMAGE */}

              <div className="flex h-[125px] justify-center">

                <img
                  src={book.image}
                  alt={book.title}
                  className="
                    h-full
                    w-[90px]
                    rounded-md
                    object-contain
                    drop-shadow-sm
                  "
                />

              </div>


              {/* BOOK DETAILS */}

              <div className="mt-3">

                <h3 className="line-clamp-2 min-h-[40px] text-sm font-bold leading-5 text-[#07144d]">
                  {book.title}
                </h3>

                <p className="mt-1 truncate text-xs text-slate-500">
                  {book.author}
                </p>


                {/* RATING */}

                <div className="mt-2 flex items-center gap-1">

                  <Star
                    size={14}
                    fill="#ffb000"
                    className="text-[#ffb000]"
                  />

                  <span className="text-xs font-medium text-slate-600">
                    {book.rating}
                  </span>

                </div>


                {/* PRICE */}

                <div className="mt-1 flex items-center gap-2">

                  <span className="font-bold text-blue-600">
                    ₹{book.price}
                  </span>

                  <span className="text-xs text-slate-400 line-through">
                    ₹{book.oldPrice}
                  </span>

                </div>


                {/* ADD TO CART */}

                <button
                  onClick={() => onAdd(book)}
                  className="
                    mt-3
                    flex
                    h-[38px]
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-lg
                    border
                    border-blue-500
                    bg-white
                    text-sm
                    font-semibold
                    text-blue-600
                    transition
                    hover:bg-blue-600
                    hover:text-white
                  "
                >

                  <ShoppingCart size={16} />

                  Add to Cart

                </button>

              </div>

            </div>

          ))}

        </div>


        {/* LEFT ARROW */}

        <button
          className="
            absolute
            -left-4
            top-[42%]
            hidden
            h-10
            w-10
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            border
            border-slate-200
            bg-white
            text-blue-600
            shadow-md
            transition
            hover:bg-blue-50
            lg:flex
          "
        >
          <ChevronLeft size={21} />
        </button>


        {/* RIGHT ARROW */}

        <button
          className="
            absolute
            -right-4
            top-[42%]
            hidden
            h-10
            w-10
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            border
            border-slate-200
            bg-white
            text-blue-600
            shadow-md
            transition
            hover:bg-blue-50
            lg:flex
          "
        >
          <ChevronRight size={21} />
        </button>

      </div>

    </section>
  );
};


/* =============================================================
   BENEFIT COMPONENT
============================================================= */

const Benefit = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="flex gap-3">

      <div className="
        flex
        h-10
        w-10
        flex-shrink-0
        items-center
        justify-center
        rounded-full
        bg-blue-50
        text-blue-600
      ">
        {icon}
      </div>

      <div className="min-w-0">

        <h3 className="text-sm font-bold text-[#07144d]">
          {title}
        </h3>

        <p className="mt-1 text-xs leading-5 text-slate-500">
          {description}
        </p>

      </div>

    </div>
  );
};

export default CartPage;