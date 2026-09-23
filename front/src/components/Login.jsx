import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { sendOtp, verifyOtp } from "../services/api";
import Header from "./Common_componts/Header";
import Footer from "./Common_componts/Footer";
import {
  FiMail,
  FiUser,
  FiCheck,
  FiArrowRight,
  FiArrowLeft,
  FiKey,
  FiRefreshCw,
  FiShield,
} from "react-icons/fi";

const Login = () => {
  // Step state: 'email' (Step 1) or 'otp' (Step 2)
  const [step, setStep] = useState("email");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");

  // Loading & Feedback
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  // Resend OTP countdown
  const [resendTimer, setResendTimer] = useState(0);

  const { login } = useAuth();
  const navigate = useNavigate();

  // Handle countdown for resending OTP
  useEffect(() => {
    let interval = null;
    if (resendTimer > 0) {
      interval = setInterval(() => {
        setResendTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [resendTimer]);

  // Step 1: Send OTP to email
  const handleSendOtp = async (e) => {
    if (e) e.preventDefault();
    setError("");
    setSuccessMsg("");

    if (!name.trim()) {
      setError("Please enter your name.");
      return;
    }

    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    // Basic email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    try {
      const response = await sendOtp({
        name: name.trim(),
        email: email.trim(),
        role: "user",
      });

      if (response && (response.sucess || response.success)) {
        setSuccessMsg(response.msg || "OTP sent successfully to your email!");
        setStep("otp");
        setResendTimer(60);
      } else {
        setError(response.msg || "Unable to send verification code. Please try again.");
      }
    } catch (err) {
      const serverMsg =
        err.response?.data?.msg ||
        err.response?.data?.message ||
        err.message ||
        "Failed to send OTP. Please check your connection.";
      setError(serverMsg);
    } finally {
      setLoading(false);
    }
  };

  // Step 2: Verify OTP
  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMsg("");

    if (!otp.trim()) {
      setError("Please enter the verification code sent to your email.");
      return;
    }

    setLoading(true);

    try {
      const response = await verifyOtp({
        name: name.trim(),
        email: email.trim(),
        otp: otp.trim(),
        role: "user",
      });

      // Check success response from backend
      if (
        response &&
        (response.sucess === true ||
          response.success === true ||
          response.status === 200 ||
          response.msg === "Login success" ||
          response.user)
      ) {
        setSuccessMsg(response.msg || "Login successful! Welcome to BookNest.");

        // Extract user data from response or fallback to entered details
        const userData = response.user || {
          name: name.trim(),
          email: email.trim(),
          role: "user",
        };

        login(userData);

        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        setError(response.msg || "Wrong OTP. Please verify and try again.");
      }
    } catch (err) {
      const serverMsg =
        err.response?.data?.msg ||
        err.response?.data?.message ||
        err.message ||
        "Verification failed. Please check the code and try again.";
      setError(serverMsg);
    } finally {
      setLoading(false);
    }
  };

  // Resend OTP handler
  const handleResendOtp = async () => {
    if (resendTimer > 0 || loading) return;
    setOtp("");
    await handleSendOtp();
  };

  // Back to email step
  const handleBackToEmail = () => {
    setStep("email");
    setOtp("");
    setError("");
    setSuccessMsg("");
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#f5f9fd]">
      <Header />

      <main className="flex flex-1 items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-blue-100/50 sm:p-8">
          {/* Logo & Header */}
          <div className="text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 shadow-md shadow-blue-200">
              {step === "email" ? (
                <span className="text-2xl text-white">📖</span>
              ) : (
                <FiShield className="text-2xl text-white" />
              )}
            </div>
            <h1 className="mt-4 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
              {step === "email" ? "Sign In to BookNest" : "Verify Your Email"}
            </h1>
            <p className="mt-2 text-sm text-slate-500">
              {step === "email"
                ? "Enter your details to receive a one-time verification code"
                : `We've sent a one-time passcode to ${email}`}
            </p>
          </div>

          {/* Feedback Messages */}
          {error && (
            <div className="mt-5 rounded-xl border border-red-200 bg-red-50 p-3.5 text-xs font-semibold text-red-600">
              {error}
            </div>
          )}

          {successMsg && (
            <div className="mt-5 flex items-center gap-2 rounded-xl border border-green-200 bg-green-50 p-3.5 text-xs font-semibold text-green-700">
              <FiCheck className="shrink-0 text-base" />
              <span>{successMsg}</span>
            </div>
          )}

          {/* Step 1: Name & Email Form */}
          {step === "email" && (
            <form onSubmit={handleSendOtp} className="mt-6 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700">
                  Full Name
                </label>
                <div className="relative mt-1 flex items-center">
                  <FiUser className="absolute left-3.5 text-slate-400" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Dev"
                    disabled={loading}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-3 text-sm text-slate-800 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100 disabled:opacity-60"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700">
                  Email Address
                </label>
                <div className="relative mt-1 flex items-center">
                  <FiMail className="absolute left-3.5 text-slate-400" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. dev@example.com"
                    disabled={loading}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-3 text-sm text-slate-800 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100 disabled:opacity-60"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 py-3 text-sm font-bold text-white shadow-lg shadow-blue-200 transition hover:from-blue-700 hover:to-indigo-700 active:scale-98 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <FiRefreshCw className="animate-spin text-base" />
                    <span>Sending Code...</span>
                  </>
                ) : (
                  <>
                    <span>Send Verification Code</span>
                    <FiArrowRight />
                  </>
                )}
              </button>
            </form>
          )}

          {/* Step 2: OTP Verification Form */}
          {step === "otp" && (
            <form onSubmit={handleVerifyOtp} className="mt-6 space-y-4">
              {/* Target Email indicator & Change option */}
              <div className="flex items-center justify-between rounded-xl bg-slate-50 px-3.5 py-2.5 border border-slate-200 text-xs">
                <span className="font-medium text-slate-600 truncate max-w-[200px]">
                  {email}
                </span>
                <button
                  type="button"
                  onClick={handleBackToEmail}
                  className="font-semibold text-blue-600 hover:text-blue-700 hover:underline"
                >
                  Change Email
                </button>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700">
                  Verification Code (OTP)
                </label>
                <div className="relative mt-1 flex items-center">
                  <FiKey className="absolute left-3.5 text-slate-400" />
                  <input
                    type="text"
                    required
                    maxLength={10}
                    autoFocus
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    placeholder="Enter OTP"
                    disabled={loading}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-3 text-center text-lg font-bold tracking-widest text-slate-800 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100 disabled:opacity-60"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 py-3 text-sm font-bold text-white shadow-lg shadow-blue-200 transition hover:from-blue-700 hover:to-indigo-700 active:scale-98 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <FiRefreshCw className="animate-spin text-base" />
                    <span>Verifying...</span>
                  </>
                ) : (
                  <>
                    <span>Verify & Continue</span>
                    <FiArrowRight />
                  </>
                )}
              </button>

              {/* Resend & Back controls */}
              <div className="flex items-center justify-between pt-2 text-xs">
                <button
                  type="button"
                  onClick={handleBackToEmail}
                  className="inline-flex items-center gap-1.5 font-medium text-slate-500 hover:text-slate-800"
                >
                  <FiArrowLeft />
                  <span>Back</span>
                </button>

                <button
                  type="button"
                  onClick={handleResendOtp}
                  disabled={resendTimer > 0 || loading}
                  className={`font-semibold ${
                    resendTimer > 0
                      ? "text-slate-400 cursor-not-allowed"
                      : "text-blue-600 hover:underline"
                  }`}
                >
                  {resendTimer > 0
                    ? `Resend code in ${resendTimer}s`
                    : "Resend Code"}
                </button>
              </div>
            </form>
          )}

          {/* Footer note */}
          <div className="mt-8 border-t border-slate-100 pt-4 text-center">
            <p className="text-xs text-slate-400">
              By continuing, you agree to BookNest's{" "}
              <Link to="/privacy" className="text-blue-600 hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Login;
