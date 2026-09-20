import React from "react";
import {
  Truck,
  PackageCheck,
  ShieldCheck,
  Headphones,
} from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "On orders above ₹499",
  },
  {
    icon: PackageCheck,
    title: "Easy Returns",
    description: "Hassle-free returns",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payments",
    description: "100% secure checkout",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "We’re here to help",
  },
];

const FeaturesBar = () => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-10 py-6">
      <div
        className="
          w-full
          rounded-2xl
          bg-[#eef8ff]
          border border-[#e0f0fc]
          px-6
          sm:px-8
          lg:px-10
          py-6
        "
      >
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className={`
                  flex
                  items-center
                  gap-5
                  px-4
                  lg:px-6
                  py-4
                  ${
                    index !== features.length - 1
                      ? "lg:border-r lg:border-[#cbdff0]"
                      : ""
                  }
                  ${
                    index < 2
                      ? "sm:border-b sm:border-[#cbdff0] lg:border-b-0"
                      : ""
                  }
                `}
              >
                {/* Icon */}
                <div
                  className="
                    flex
                    h-16
                    w-16
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#e2f3ff]
                  "
                >
                  <Icon
                    size={30}
                    strokeWidth={2}
                    className="text-[#0878f9]"
                  />
                </div>

                {/* Text */}
                <div>
                  <h3
                    className="
                      text-[15px]
                      font-bold
                      text-[#07164b]
                      whitespace-nowrap
                    "
                  >
                    {feature.title}
                  </h3>

                  <p
                    className="
                      mt-1
                      text-[13px]
                      text-[#65769e]
                      whitespace-nowrap
                    "
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesBar;