import React from "react";
import {
  FaBolt,
  FaLock,
  FaBookOpen,
  FaHeadphones,
} from "react-icons/fa";

const Features = () => {
  const features = [
    {
      title: "Instant Access",
      description: "Read anytime, anywhere",
      icon: FaBolt,
      iconColor: "text-indigo-600",
      iconBg: "bg-indigo-100",
    },
    {
      title: "Secure Payments",
      description: "100% safe & trusted",
      icon: FaLock,
      iconColor: "text-emerald-500",
      iconBg: "bg-emerald-100",
    },
    {
      title: "Wide Collection",
      description: "10K+ eBooks",
      icon: FaBookOpen,
      iconColor: "text-purple-600",
      iconBg: "bg-purple-100",
    },
    {
      title: "24/7 Support",
      description: "We're here for you",
      icon: FaHeadphones,
      iconColor: "text-sky-600",
      iconBg: "bg-sky-100",
    },
  ];

  return (
    <section className="w-full bg-white py-8 sm:py-10">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group flex h-full min-h-[96px] items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50/60 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-md"
              >
                {/* Icon */}
                <div
                  className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${feature.iconBg} transition-transform duration-300 group-hover:scale-105`}
                >
                  <Icon className={`text-2xl ${feature.iconColor}`} />
                </div>

                {/* Text */}
                <div className="min-w-0">
                  <h3 className="text-sm sm:text-base font-bold text-slate-900">
                    {feature.title}
                  </h3>
                  <p className="mt-0.5 text-xs text-slate-500">
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

export default Features;