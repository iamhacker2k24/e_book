import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Header from "./Common_componts/Header";
import Footer from "./Common_componts/Footer";
import { FiLogOut, FiArrowLeft, FiCheckCircle } from "react-icons/fi";

const Logout = () => {
  const { user, logout } = useAuth();
  const [loggedOut, setLoggedOut] = useState(!user);
  const navigate = useNavigate();

  const handleConfirmLogout = () => {
    logout();
    setLoggedOut(true);
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#f5f9fd]">
      <Header />

      <main className="flex flex-1 items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-xl shadow-blue-100/50 sm:p-8">
          {!loggedOut && user ? (
            <>
              {/* Logout Prompt Icon */}
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50 text-red-600 shadow-inner">
                <FiLogOut className="text-3xl" />
              </div>

              <h1 className="mt-5 text-2xl font-extrabold text-slate-900">
                Sign out of BookNest?
              </h1>

              <p className="mt-2 text-sm text-slate-500">
                You are currently signed in as{" "}
                <span className="font-semibold text-slate-800">
                  {user.name || user.email}
                </span>
                . Are you sure you want to log out?
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => navigate(-1)}
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  <FiArrowLeft />
                  Stay Signed In
                </button>

                <button
                  type="button"
                  onClick={handleConfirmLogout}
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-red-600 py-2.5 text-sm font-semibold text-white shadow-md shadow-red-200 transition hover:bg-red-700 active:scale-98"
                >
                  <FiLogOut />
                  Yes, Sign Out
                </button>
              </div>
            </>
          ) : (
            <>
              {/* Success Sign Out State */}
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-green-50 text-green-600 shadow-inner">
                <FiCheckCircle className="text-3xl" />
              </div>

              <h1 className="mt-5 text-2xl font-extrabold text-slate-900">
                You have been signed out
              </h1>

              <p className="mt-2 text-sm text-slate-500">
                Thank you for reading with BookNest. We hope to see you again soon!
              </p>

              <p className="mt-4 text-xs text-slate-400">
                Redirecting you to the home page...
              </p>

              <div className="mt-6 flex flex-col gap-3">
                <Link
                  to="/"
                  className="rounded-xl bg-blue-600 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-200 transition hover:bg-blue-700"
                >
                  Return to Home
                </Link>

                <Link
                  to="/login"
                  className="rounded-xl border border-slate-200 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  Sign In Again
                </Link>
              </div>
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Logout;
