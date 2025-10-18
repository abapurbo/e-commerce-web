import React from "react";
import { Link } from "react-router-dom";
import { FaLock, FaUserAlt } from "react-icons/fa";
import '../Auth/social.css'
export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-900 via-emerald-900 to-gray-800 p-6 overflow-hidden">

      {/* Floating Animated Blobs */}
      <div className="absolute w-72 h-72 bg-emerald-600/30 rounded-full blur-3xl top-10 left-10 animate-blob"></div>
      <div className="absolute w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl bottom-0 right-0 animate-blob animation-delay-2000"></div>
      <div className="absolute w-64 h-64 bg-emerald-700/30 rounded-full blur-3xl top-1/2 left-1/2 animate-blob animation-delay-4000"></div>

      <div className="w-full max-w-5xl bg-white/10 backdrop-blur-2xl rounded-3xl shadow-[0_0_40px_rgba(16,185,129,0.15)] flex flex-col md:flex-row overflow-hidden border border-white/10 transition-all duration-500 hover:shadow-[0_0_50px_rgba(16,185,129,0.3)] hover:scale-[1.015]">

        {/* Left Section */}
        <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-emerald-600 to-emerald-800 items-center justify-center text-center text-white p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
          <div className="relative z-10 animate-fade-in-up">
            <img
              src="https://i.ibb.co.com/YF4HprZS/Screenshot-2025-09-10-112627-removebg-preview.png"
              alt="Shopfinity Logo"
              className="w-32 mx-auto mb-6 drop-shadow-[0_0_20px_rgba(16,185,129,0.7)] transition-transform duration-500 hover:scale-110"
            />
            <h2 className="text-4xl font-extrabold mb-3 tracking-wide drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
              Welcome Back
            </h2>
            <p className="text-emerald-100 text-sm leading-relaxed max-w-xs mx-auto">
              Explore a world of products at your fingertips. From the latest electronics and trending fashion to everyday essentials, <span className="font-semibold text-white">Shopfinity</span> brings everything you love, all in one place.
            </p>
          </div>

        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 bg-white/90 backdrop-blur-xl p-10 md:p-14 flex flex-col justify-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center md:text-left">
            Sign in to your account
          </h2>

          <form className="space-y-6">
            {/* Email Field */}
            <div>
              <label className="block mb-2 text-gray-700 font-semibold">
                Email Address
              </label>
              <div className="relative group">
                <FaUserAlt className="absolute left-3 top-3 text-emerald-500 group-hover:scale-110 transition-transform" />
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl shadow-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all group-hover:shadow-[0_0_10px_rgba(16,185,129,0.3)]"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block mb-2 text-gray-700 font-semibold">
                Password
              </label>
              <div className="relative group">
                <FaLock className="absolute left-3 top-3 text-emerald-500 group-hover:scale-110 transition-transform" />
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl shadow-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all group-hover:shadow-[0_0_10px_rgba(16,185,129,0.3)]"
                />
              </div>
              <div className="text-right mt-2">
                <Link
                  to="/forgot-password"
                  className="text-emerald-600 hover:text-emerald-700 text-sm font-medium transition-colors"
                >
                  Forgot password?
                </Link>
              </div>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 active:scale-[0.98] text-white py-3 rounded-xl font-semibold transition-all duration-300 shadow-[0_8px_20px_rgba(16,185,129,0.4)] hover:shadow-[0_10px_30px_rgba(16,185,129,0.6)]"
            >
              Sign In
            </button>

            {/* Divider */}
            <div className="flex items-center justify-center my-6">
              <div className="border-t border-gray-300 w-1/3"></div>
              <span className="text-gray-400 text-sm mx-3">OR</span>
              <div className="border-t border-gray-300 w-1/3"></div>
            </div>

            {/* Google Button */}
            <button
              type="button"
              className="w-full bg-white hover:bg-gray-50 text-gray-800 py-3 rounded-xl font-medium border border-gray-300 flex items-center justify-center gap-3 shadow-sm hover:shadow-[0_0_15px_rgba(0,0,0,0.1)] transition-all duration-300"
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="w-5 h-5"
              />
              Continue with Google
            </button>

            {/* Signup Link */}
            <p className="text-center text-gray-700 text-sm mt-6">
              Don’t have an account?{" "}
              <Link
                to="/signup"
                className="text-emerald-600 font-semibold hover:underline hover:text-emerald-700 transition-colors"
              >
                Create one
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

/* ✨ Add this in your Tailwind CSS file (e.g., index.css or tailwind.css) */

