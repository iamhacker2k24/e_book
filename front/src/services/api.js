import axios from "axios";

// In development, use relative URL to leverage Vite's local proxy (/api -> backend)
// This avoids CORS wildcard restrictions with credentials/cookies.
const isDev = import.meta.env.DEV;
const API_BASE_URL = isDev ? "" : (import.meta.env.VITE_API_BACKEND_URL || "");

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * Step 1: Send OTP to user's email
 * @param {Object} payload - { email, name, role }
 */
export const sendOtp = async ({ email, name, role = "user" }) => {
  const response = await api.post("/api/user/login", {
    email: email.trim(),
    name: name.trim(),
    methode: "email",
    role,
  });
  return response.data;
};

/**
 * Step 2: Verify OTP submitted by user
 * @param {Object} payload - { email, name, otp, role }
 */
export const verifyOtp = async ({ email, name, otp, role = "user" }) => {
  const response = await api.post("/api/user/login", {
    email: email.trim(),
    name: name.trim(),
    methode: "otpverify",
    otp: String(otp).trim(),
    role,
  });
  return response.data;
};

export default api;
