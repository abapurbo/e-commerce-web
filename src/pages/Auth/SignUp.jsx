import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserAlt, FaEnvelope, FaLock } from "react-icons/fa";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import { useAuth } from "../../Hooks/useAuth";

export default function SignUp() {
  const { signInWithGoogle, createUser, profileUpdate, verifyEmail } = useAuth()
  const [error, setError] = useState('')
  const [show, setShow] = useState(false)
  // handle create user
  const handleCreateUser = (e) => {
    e.preventDefault();
    const fromData = e.target;
    const name = fromData.name.value;
    const email = fromData.email.value;
    const password = fromData.password.value;
    console.log(name, email, password)
    // create user
    createUser(email, password)
      .then((result) => {
        console.log(result?.user)
        const profile = {
          displayName: name,
        }
        profileUpdate(profile)
        // verify email
        verifyEmail()
      })
      .catch((err) => {
        console.log('Error', err)
      })
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-emerald-900 to-gray-800 p-6">

      <div className="w-full max-w-5xl bg-white/10 backdrop-blur-2xl rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden border border-white/10 transition-all duration-500 hover:shadow-emerald-900/40 hover:scale-[1.01]">

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
              Join Shopfinity
            </h2>
            <p className="text-emerald-100 text-sm leading-relaxed max-w-xs mx-auto">
              Create your account to explore thousands of products across multiple categories.
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 bg-white/80 backdrop-blur-xl p-10 md:p-14 flex flex-col justify-center animate-fade-in">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8 text-center md:text-left">
            Create your account
          </h2>

          <form onSubmit={handleCreateUser} className="space-y-6">
            {/* Full Name Field */}
            <div>
              <label className="block mb-2 text-gray-700 font-semibold">
                Full Name
              </label>
              <div className="relative">
                <FaUserAlt className="absolute left-3 top-3 text-emerald-500" />
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl shadow-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label className="block mb-2 text-gray-700 font-semibold">
                Email Address
              </label>
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-3 text-emerald-500" />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl shadow-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block mb-2 text-gray-700 font-semibold">
                Password
              </label>
              <div className="relative">
                <FaLock className="absolute left-3 top-3 text-emerald-500" />
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl shadow-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Sign Up Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 active:scale-[0.98] text-white py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-emerald-800/50"
            >
              Sign Up
            </button>

            {/* Divider */}
            <div className="flex items-center justify-center my-6">
              <div className="border-t border-gray-300 w-1/3"></div>
              <span className="text-gray-400 text-sm mx-3">OR</span>
              <div className="border-t border-gray-300 w-1/3"></div>
            </div>

            {/* Google Button */}
            <button
              onClick={signInWithGoogle}
              type="button"
              className="w-full bg-white hover:bg-gray-50 text-gray-800 py-3 rounded-xl font-medium border border-gray-300 flex items-center justify-center gap-3 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="w-5 h-5"
              />
              Continue with Google
            </button>

            {/* Login Link */}
            <p className="text-center text-gray-700 text-sm mt-6">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-emerald-600 font-semibold hover:underline"
              >
                Sign in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
