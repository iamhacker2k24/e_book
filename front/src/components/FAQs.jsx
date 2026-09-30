import React from "react";
import { Link } from "react-router-dom";
import Header from "./Common_componts/Header";
import Footer from "./Common_componts/Footer";
import FAQSection from "./FAQs/FAQSection";
import JoinCommunity from "./Common_componts/JoinCommunity";
import { FiChevronRight, FiHelpCircle } from "react-icons/fi";

const FAQs = () => {
  return (
    <>
      <Header />
      
      {/* FAQ Hero Section */}
      <section className="w-full bg-gradient-to-b from-blue-50/60 to-white dark:from-slate-950 dark:to-slate-900 py-12 border-b border-slate-100 dark:border-slate-800 transition-colors duration-200">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mb-4">
            <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
            <FiChevronRight size={14} className="text-slate-400 dark:text-slate-600" />
            <span className="font-medium text-slate-800 dark:text-white">FAQs</span>
          </div>

          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-100/80 dark:bg-blue-950/60 px-3 py-1 text-xs font-bold text-blue-700 dark:text-blue-300 mb-3">
              <FiHelpCircle />
              <span>Help Center</span>
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Frequently Asked <span className="text-blue-600 dark:text-blue-400">Questions</span>
            </h1>
            <p className="mt-3 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Find answers to common questions about your account, purchasing eBooks, digital formats, payment options, and delivery.
            </p>
          </div>
        </div>
      </section>

      <FAQSection />
      <JoinCommunity />
      <Footer />
    </>
  );
};

export default FAQs;
