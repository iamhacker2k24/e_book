import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Header from "./Common_componts/Header";
import Footer from "./Common_componts/Footer";
import { FiMail, FiLock, FiUser, FiEye, FiEyeOff, FiCheck, FiArrowRight } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [rememberMe, setRememberMe] = useState(true);
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const { login, register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please fill in all required fields.");
      return;
    }

    if (isSignUp && !name) {
      setError("Please enter your name.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    if (isSignUp) {
      register({ name, email });
      setSuccessMsg("Account created successfully! Welcome to BookNest.");
    } else {
      login({ email, name: email.split("@")[0] });
      setSuccessMsg("Welcome back to BookNest!");
    }

    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  const handleDemoLogin = () => {
    login({
      name: "Dev Sharma",
      email: "dev.sharma@booknest.com",
    });
    setSuccessMsg("Logged in as Demo User!");
    setTimeout(() => {
      navigate("/");
    }, 800);
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#f5f9fd]">
      <Header />

      <main className="flex flex-1 items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
        <div className="w-full max-w-md overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-blue-100/50 sm:p-8">
          {/* Logo & Header */}
          <div className="text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 shadow-md shadow-blue-200">
              <span className="text-2xl text-white">📖</span>
            </div>
            <h1 className="mt-4 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
              {isSignUp ? "Create your account" : "Welcome back"}
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              {isSignUp
                ? "Join BookNest to explore thousands of eBooks"
                : "Sign in to access your library and saved books"}
            </p>
          </div>

          {/* Quick Demo Login Option */}
          <div className="mt-5 rounded-xl border border-blue-100 bg-blue-50/70 p-3 text-center">
            <p className="text-xs text-blue-800">
              Want to test quickly without filling forms?
            </p>
            <button
              type="button"
              onClick={handleDemoLogin}
              className="mt-2 inline-flex items-center gap-1.5 rounded-lg bg-blue-600 px-4 py-1.5 text-xs font-semibold text-white shadow-sm transition hover:bg-blue-700 active:scale-95"
            >
              ⚡ 1-Click Demo Login
            </button>
          </div>

          {/* Tab Switcher */}
          <div className="mt-6 flex rounded-xl bg-slate-100 p-1">
            <button
              type="button"
              onClick={() => {
                setIsSignUp(false);
                setError("");
                setSuccessMsg("");
              }}
              className={`flex-1 rounded-lg py-2 text-xs font-bold transition ${
                !isSignUp
                  ? "bg-white text-blue-600 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={() => {
                setIsSignUp(true);
                setError("");
                setSuccessMsg("");
              }}
              className={`flex-1 rounded-lg py-2 text-xs font-bold transition ${
                isSignUp
                  ? "bg-white text-blue-600 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Create Account
            </button>
          </div>

          {/* Feedback Messages */}
          {error && (
            <div className="mt-4 rounded-lg bg-red-50 p-3 text-xs font-medium text-red-600 border border-red-200">
              {error}
            </div>
          )}
          {successMsg && (
            <div className="mt-4 flex items-center gap-2 rounded-lg bg-green-50 p-3 text-xs font-medium text-green-700 border border-green-200">
              <FiCheck className="text-sm" />
              {successMsg}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            {isSignUp && (
              <div>
                <label className="block text-xs font-semibold text-slate-700">
                  Full Name
                </label>
                <div className="relative mt-1 flex items-center">
                  <FiUser className="absolute left-3 text-slate-400" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-3 text-sm text-slate-800 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold text-slate-700">
                Email Address
              </label>
              <div className="relative mt-1 flex items-center">
                <FiMail className="absolute left-3 text-slate-400" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="reader@booknest.com"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-3 text-sm text-slate-800 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label className="block text-xs font-semibold text-slate-700">
                  Password
                </label>
                {!isSignUp && (
                  <a
                    href="#forgot"
                    onClick={(e) => {
                      e.preventDefault();
                      alert("Password reset instructions will be sent to your email.");
                    }}
                    className="text-xs font-medium text-blue-600 hover:underline"
                  >
                    Forgot password?
                  </a>
                )}
              </div>
              <div className="relative mt-1 flex items-center">
                <FiLock className="absolute left-3 text-slate-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-10 text-sm text-slate-800 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-xs text-slate-600 select-none">
                  {isSignUp ? "I agree to Terms & Conditions" : "Remember me"}
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 py-3 text-sm font-bold text-white shadow-lg shadow-blue-200 transition hover:from-blue-700 hover:to-indigo-700 active:scale-98"
            >
              <span>{isSignUp ? "Create Free Account" : "Sign In to BookNest"}</span>
              <FiArrowRight />
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6 text-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200" />
            </div>
            <span className="relative bg-white px-3 text-xs text-slate-400 uppercase tracking-wider">
              Or continue with
            </span>
          </div>

          {/* Social Sign In */}
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={handleDemoLogin}
              className="flex h-10 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white text-xs font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              <FcGoogle className="text-lg" />
              <span>Google</span>
            </button>

            <button
              type="button"
              onClick={handleDemoLogin}
              className="flex h-10 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white text-xs font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              <FaApple className="text-lg text-slate-900" />
              <span>Apple</span>
            </button>
          </div>

          {/* Bottom toggle */}
          <p className="mt-6 text-center text-xs text-slate-500">
            {isSignUp ? "Already have an account?" : "Don't have an account yet?"}{" "}
            <button
              type="button"
              onClick={() => {
                setIsSignUp(!isSignUp);
                setError("");
                setSuccessMsg("");
              }}
              className="font-bold text-blue-600 hover:underline"
            >
              {isSignUp ? "Sign In" : "Sign up for free"}
            </button>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Login;
