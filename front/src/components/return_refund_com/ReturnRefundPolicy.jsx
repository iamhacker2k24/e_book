import React from "react";
import {
  FiShoppingCart,
  FiRotateCcw,
  FiPackage,
  FiCreditCard,
  FiAlertTriangle,
  FiHeadphones,
  FiMail,
} from "react-icons/fi";

const ReturnRefundPolicy = () => {
  const policies = [
    {
      number: "1",
      title: "Eligibility for Returns",
      description:
        "You can request a return within 14 days of receiving your order. To be eligible, the item must be in its original condition, unused, and with all tags and packaging intact.",
      icon: FiShoppingCart,
    },

    {
      number: "2",
      title: "How to Request a Return",
      description:
        "To start a return, please contact our support team with your order number and reason for the return. We will provide you with further instructions.",
      icon: FiRotateCcw,
    },

    {
      number: "3",
      title: "Return Shipping",
      description:
        "Customers are responsible for return shipping costs unless the item is defective or we made an error. We recommend using a trackable shipping service.",
      icon: FiPackage,
    },

    {
      number: "4",
      title: "Refund Process",
      description:
        "Once we receive and inspect your returned item, we will notify you of the approval status. If approved, your refund will be processed to your original payment method within 5–7 business days.",
      icon: FiCreditCard,
    },

    {
      number: "5",
      title: "Non-Returnable Items",
      description:
        "Certain items cannot be returned, including digital products (eBooks), gift cards, and items marked as final sale. If you are unsure, please contact us before purchasing.",
      icon: FiAlertTriangle,
    },

    {
      number: "6",
      title: "Need Help?",
      description:
        "If you have any questions about returns or refunds, feel free to reach out to our support team.",
      icon: FiHeadphones,
      email: "support@booknest.com",
    },
  ];

  return (
    <section className="w-full bg-white py-8 md:py-12">
      <div className="mx-auto max-w-[1150px] px-5">

        {/* Main Card */}
        <div
          className="
            overflow-hidden
            rounded-2xl
            border
            border-slate-200
            bg-white
            shadow-sm
          "
        >
          {policies.map((policy, index) => {
            const Icon = policy.icon;

            return (
              <div
                key={policy.number}
                className={`
                  flex
                  gap-5
                  px-6
                  py-7
                  transition-colors
                  duration-200
                  hover:bg-slate-50/70
                  md:px-8
                  md:py-8

                  ${
                    index !== policies.length - 1
                      ? "border-b border-slate-200"
                      : ""
                  }
                `}
              >
                {/* ================= ICON ================= */}
                <div
                  className="
                    flex
                    h-14
                    w-14
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-blue-50
                  "
                >
                  <Icon className="text-2xl text-blue-600" />
                </div>

                {/* ================= CONTENT ================= */}
                <div className="min-w-0 flex-1">

                  {/* Number + Title */}
                  <h2
                    className="
                      text-base
                      font-extrabold
                      text-slate-900
                      md:text-lg
                    "
                  >
                    {policy.number}. {policy.title}
                  </h2>

                  {/* Description */}
                  <p
                    className="
                      mt-2
                      max-w-[900px]
                      text-sm
                      leading-6
                      text-slate-600
                      md:text-base
                      md:leading-7
                    "
                  >
                    {policy.description}
                  </p>

                  {/* ================= EMAIL ================= */}
                  {policy.email && (
                    <a
                      href={`mailto:${policy.email}`}
                      className="
                        mt-3
                        inline-flex
                        items-center
                        gap-2
                        rounded-lg
                        bg-blue-50
                        px-4
                        py-2
                        text-sm
                        font-semibold
                        text-blue-600
                        transition
                        hover:bg-blue-100
                      "
                    >
                      <FiMail className="text-base" />
                      {policy.email}
                    </a>
                  )}

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ReturnRefundPolicy;