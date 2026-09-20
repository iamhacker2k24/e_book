import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const FAQSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [openFAQ, setOpenFAQ] = useState(0);

  const categories = [
    "All",
    "Orders",
    "Payments",
    "Shipping",
    "Returns & Refunds",
    "Account",
    "Books & Content",
  ];

  const faqs = [
    {
      id: 1,
      category: "Orders",
      question: "How can I place an order?",
      answer:
        "To place an order, browse or search for the books you want, add them to your cart, and proceed to checkout. Fill in your shipping details, choose a payment method, and confirm your order. You will receive a confirmation email once the order is placed successfully.",
    },
    {
      id: 2,
      category: "Payments",
      question: "What payment methods do you accept?",
      answer:
        "We accept major debit cards, credit cards, UPI, net banking, and other supported payment methods available during checkout.",
    },
    {
      id: 3,
      category: "Shipping",
      question: "How long does delivery take?",
      answer:
        "Standard delivery generally takes 3–7 business days depending on your location. Estimated delivery information is displayed during checkout.",
    },
    {
      id: 4,
      category: "Shipping",
      question: "Do you offer free shipping?",
      answer:
        "Free shipping may be available on selected orders or promotional offers. The applicable shipping charge will be displayed before you confirm your order.",
    },
    {
      id: 5,
      category: "Orders",
      question: "Can I track my order?",
      answer:
        "Yes. Once your order has been shipped, you will receive tracking information through your registered email address or account.",
    },
    {
      id: 6,
      category: "Returns & Refunds",
      question: "What is your return and refund policy?",
      answer:
        "Eligible physical products can be returned according to our return policy. Digital eBooks may not be eligible for return after purchase. Please check our Returns & Refunds page for complete details.",
    },
    {
      id: 7,
      category: "Books & Content",
      question: "Are the books new or used?",
      answer:
        "The availability and condition of a book depends on the specific product listing. Please check the book details before placing your order.",
    },
    {
      id: 8,
      category: "Orders",
      question: "Can I cancel or modify my order?",
      answer:
        "Orders can generally be cancelled or modified before they are processed for shipping. Contact our support team as soon as possible if you need to make a change.",
    },
    {
      id: 9,
      category: "Account",
      question: "How do I create an account?",
      answer:
        "Click the profile or sign-up option in the navigation bar, enter your required information, and follow the verification steps to create your BookNest account.",
    },
    {
      id: 10,
      category: "Account",
      question: "How can I contact customer support?",
      answer:
        "You can contact our support team through the Contact Us page or email us at support@booknest.com.",
    },
  ];

  const filteredFAQs =
    activeCategory === "All"
      ? faqs
      : faqs.filter(
          (faq) => faq.category === activeCategory
        );

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setOpenFAQ(null);
  };

  const toggleFAQ = (id) => {
    setOpenFAQ((current) =>
      current === id ? null : id
    );
  };

  return (
    <section className="w-full bg-white py-8 md:py-10">
      <div className="mx-auto max-w-[1150px] px-5">

        {/* ================================================= */}
        {/* CATEGORY FILTER */}
        {/* ================================================= */}

        <div className="mb-7 flex gap-2 overflow-x-auto pb-2 scrollbar-none">

          {categories.map((category) => {
            const active = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() =>
                  handleCategoryChange(category)
                }
                className={`
                  shrink-0
                  rounded-full
                  px-5
                  py-2.5
                  text-xs
                  font-semibold
                  transition-all
                  duration-200
                  md:text-sm

                  ${
                    active
                      ? "bg-blue-600 text-white shadow-sm"
                      : "bg-slate-50 text-slate-600 hover:bg-blue-50 hover:text-blue-600"
                  }
                `}
              >
                {category}
              </button>
            );
          })}

        </div>


        {/* ================================================= */}
        {/* FAQ CARD */}
        {/* ================================================= */}

        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">

          {filteredFAQs.map((faq, index) => {
            const isOpen = openFAQ === faq.id;

            return (
              <div
                key={faq.id}
                className={`
                  ${
                    index !== filteredFAQs.length - 1
                      ? "border-b border-slate-200"
                      : ""
                  }
                `}
              >

                {/* ========================================= */}
                {/* QUESTION */}
                {/* ========================================= */}

                <button
                  type="button"
                  onClick={() => toggleFAQ(faq.id)}
                  className="
                    flex
                    w-full
                    items-center
                    gap-4
                    px-5
                    py-4
                    text-left
                    transition-colors
                    hover:bg-slate-50
                    md:px-6
                    md:py-5
                  "
                >

                  {/* Number */}
                  <span
                    className="
                      flex
                      h-8
                      w-8
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-blue-50
                      text-xs
                      font-bold
                      text-blue-600
                      md:h-9
                      md:w-9
                      md:text-sm
                    "
                  >
                    {String(faq.id).padStart(2, "0")}
                  </span>


                  {/* Question */}
                  <span
                    className="
                      flex-1
                      text-sm
                      font-bold
                      text-slate-900
                      md:text-base
                    "
                  >
                    {faq.question}
                  </span>


                  {/* Arrow */}
                  <FiChevronDown
                    className={`
                      shrink-0
                      text-lg
                      text-slate-900
                      transition-transform
                      duration-300

                      ${
                        isOpen
                          ? "rotate-180"
                          : "rotate-0"
                      }
                    `}
                  />

                </button>


                {/* ========================================= */}
                {/* ANSWER */}
                {/* ========================================= */}

                <div
                  className={`
                    grid
                    transition-all
                    duration-300
                    ease-in-out

                    ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }
                  `}
                >
                  <div className="overflow-hidden">

                    <div
                      className="
                        mx-5
                        mb-4
                        rounded-xl
                        bg-blue-50
                        px-5
                        py-4
                        md:mx-6
                        md:px-6
                      "
                    >
                      <p
                        className="
                          text-sm
                          leading-6
                          text-slate-600
                          md:text-base
                          md:leading-7
                        "
                      >
                        {faq.answer}
                      </p>
                    </div>

                  </div>
                </div>

              </div>
            );
          })}


          {/* No Results */}
          {filteredFAQs.length === 0 && (
            <div className="px-6 py-12 text-center">
              <p className="text-sm text-slate-500">
                No FAQs found for this category.
              </p>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};

export default FAQSection;