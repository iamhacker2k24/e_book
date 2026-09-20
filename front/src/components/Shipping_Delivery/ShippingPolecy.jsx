import React from "react";
import {
  FiPackage,
  FiTruck,
  FiMapPin,
  FiGlobe,
  FiFileText,
  FiAlertTriangle,
  FiMessageSquare,
  FiMail,
} from "react-icons/fi";

const ShippingPolecy = () => {
  const shippingData = [
    {
      number: 1,
      title: "Processing Time",
      description:
        "We typically process and dispatch orders within 1–2 business days. You will receive a confirmation email with tracking details once your order has shipped.",
      icon: FiPackage,
    },
    {
      number: 2,
      title: "Shipping Methods",
      description:
        "We partner with trusted courier services to ensure safe and reliable delivery. Depending on your location, we offer standard and express shipping options at checkout.",
      icon: FiTruck,
    },
    {
      number: 3,
      title: "Delivery Times",
      description:
        "Delivery times vary based on your location and the shipping method selected. Estimated delivery times are shown at checkout, but typically range from 3–7 business days for standard shipping and 1–3 business days for express shipping.",
      icon: FiMapPin,
    },
    {
      number: 4,
      title: "Shipping Locations",
      description:
        "We currently ship to most locations within the country. If your location is not available at checkout, please contact our support team to confirm shipping availability.",
      icon: FiGlobe,
    },
    {
      number: 5,
      title: "Tracking Your Order",
      description:
        "Once your order is shipped, you will receive a tracking number via email. You can use this number to track your package on the courier's website.",
      icon: FiFileText,
    },
    {
      number: 6,
      title: "Delays",
      description:
        "While we do our best to deliver on time, delays may occur due to factors beyond our control, such as weather conditions, high order volumes, or courier issues. We appreciate your patience and understanding.",
      icon: FiAlertTriangle,
    },
    {
      number: 7,
      title: "Need Help?",
      description:
        "If you have any questions about shipping or delivery, feel free to reach out to our support team.",
      icon: FiMessageSquare,
      email: "support@booknest.com",
    },
  ];

  return (
    <section className="w-full bg-white py-8 md:py-10">
      <div className="mx-auto max-w-[1150px] px-5">

        {/* Main Container */}
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">

          {shippingData.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.number}
                className={`
                  flex
                  gap-4
                  px-5
                  py-5
                  md:px-7
                  md:py-6
                  ${
                    index !== shippingData.length - 1
                      ? "border-b border-slate-200"
                      : ""
                  }
                `}
              >

                {/* ================= ICON ================= */}
                <div
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-blue-50
                    md:h-14
                    md:w-14
                  "
                >
                  <Icon
                    className="
                      text-xl
                      text-blue-600
                      md:text-2xl
                    "
                  />
                </div>

                {/* ================= CONTENT ================= */}
                <div className="min-w-0 flex-1">

                  {/* Title */}
                  <h3
                    className="
                      text-sm
                      font-extrabold
                      leading-5
                      text-slate-900
                      md:text-base
                    "
                  >
                    {item.number}. {item.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="
                      mt-1
                      max-w-[950px]
                      text-[11px]
                      leading-4
                      text-slate-500
                      md:text-xs
                      md:leading-5
                    "
                  >
                    {item.description}
                  </p>

                  {/* Email */}
                  {item.email && (
                    <a
                      href={`mailto:${item.email}`}
                      className="
                        mt-2
                        inline-flex
                        items-center
                        gap-2
                        rounded-md
                        bg-blue-50
                        px-3
                        py-1.5
                        text-[11px]
                        font-semibold
                        text-blue-600
                        transition
                        hover:bg-blue-100
                      "
                    >
                      <FiMail className="text-xs" />
                      {item.email}
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

export default ShippingPolecy;