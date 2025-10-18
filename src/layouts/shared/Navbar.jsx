import React, { useState, useMemo, useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import { PiShoppingCartThin } from "react-icons/pi";
import { NavLink } from "react-router-dom";
import Select from "react-select";
import { CgProfile, CgMenu } from "react-icons/cg";
import { Drawer, IconButton, useMediaQuery } from "@mui/material";
import { CiMenuBurger } from "react-icons/ci";
import { FiChevronRight } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import "../shared/sharedStyles/style.css";

// 🔹 Reusable NavItem
function NavItem({ link, onClick }) {
  return (
    <div className="relative group">
      <NavLink
        to={link.path}
        onClick={onClick}
        className={({ isActive }) =>
          isActive
            ? "text-blue-600 font-semibold"
            : "text-white text-[14px] hover:text-emerald-400 transition"
        }
      >
        {link.name}
      </NavLink>

      {link.dropdown && (
        <div className="absolute hidden group-hover:block bg-white shadow-lg mt-2 py-2 rounded-lg w-44">
          {link.dropdown.map((item, idx) => (
            <NavLink
              key={idx}
              to="#"
              className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-700"
            >
              {item}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
}

// 🔹 Main Navbar Component
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [inputFocus, setInputFocus] = useState(false);
  const isDesktop = useMediaQuery("(min-width:576px)");

  // 🔹 Navigation Links
  const navLinks = useMemo(
    () => [
      { name: "Become a Seller", path: "/seller", dropdown: ["Start Selling", "Seller Guide"] },
      { name: "Help & Support", path: "/help", dropdown: ["FAQ", "Contact Us"] },
      { name: "Login", path: "login" },
      { name: "Sign Up", path: "signup" },
    ],
    []
  );

  // 🔹 Categories
  const categories = useMemo(
    () => [
      "Electronics & Gadgets",
      "Computers & Accessories",
      "Fashion & Lifestyle",
      "Home & Living",
      "Beauty & Personal Care",
      "Sports & Outdoors",
      "Kids & Toys",
      "Books & Education",
      "Groceries & Essentials",
      "Appliances",
      "Health & Wellness",
    ],
    []
  );

  const categoryNames = [
    "Anti-theft Backpacks",
    "Sleep Tech & Bedroom Wellness",
    "Home Fitness & Compact Gym",
    "Pet Tech & Health",
    "Fashion (Men’s, Women’s, Kids’)",
    "Beauty & Personal Care",
    "Groceries & Daily Essentials",
    "Electronics & Gadgets",
    "Computers & Accessories",
    "Kitchen & Home Essentials",
    "Footwear",
    "Bags & Travel Essentials",
    "Health & Wellness",
    "Baby Products",
  ];

  // 🔹 React-Select Options & Styles
  const options = useMemo(() => categories.map((c) => ({ value: c, label: c })), [categories]);
  const selectStyles = useMemo(
    () => ({
      container: (provided) => ({ ...provided, width: 80, fontSize: 14 }),
      control: (provided, state) => ({
        ...provided,
        border: state.isFocused ? "2px solid #10B981" : "2px solid transparent",
        boxShadow: "none",
        "&:hover": { border: state.isFocused ? "2px solid #10B981" : "2px solid transparent" },
        borderRadius: "8px 0 0 8px",
        height: 40,
        backgroundColor: "white",
        cursor: "pointer",
      }),
      menu: (provided) => ({ ...provided, minWidth: 200 }),
    }),
    []
  );

  // 🔹 Drawer Handlers
  const toggleDrawer = (newOpen) => () => setOpen(newOpen);
  useEffect(() => {
    if (isDesktop && open) setOpen(false);
  }, [isDesktop, open]);

  return (
    <div className="sticky top-0 z-50">
      {/* 🔸 Top Navbar */}
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-md">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-2 py-3 md:space-x-4">
          
          {/* 🔹 Brand Section */}
          <div className="flex items-center justify-between w-full md:w-auto bg-gray-900 md:justify-start py-2 mb-1 md:mb-0">
            {/* Mobile Menu */}
            <div className="md:hidden">
              <IconButton onClick={toggleDrawer(true)}>
                <CiMenuBurger className="text-white text-2xl hover:text-emerald-400 transition" />
              </IconButton>

              {/* Drawer */}
              <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
                <div className="w-80 h-full bg-white text-gray-900 flex flex-col shadow-xl font-sans">
                  
                  {/* Drawer Header */}
                  <div className="bg-gray-900 p-6 flex items-center gap-4 shadow-md">
                    <FaUserCircle className="text-5xl text-white" />
                    <div>
                      <h1 className="text-xl font-bold text-white">Welcome to Shopfinity</h1>
                      <p className="text-sm text-indigo-200 hover:underline cursor-pointer mt-1">
                        Sign in or Create Account
                      </p>
                    </div>
                  </div>

                  {/* Drawer Categories */}
                  <div className="flex-1 overflow-y-auto p-6">
                    <h2 className="text-lg font-semibold mb-4 border-b pb-2">Explore Categories</h2>
                    <ul className="space-y-3">
                      {categoryNames.map((item, index) => (
                        <li
                          key={index}
                          className="group flex justify-between items-center px-3 py-2 rounded-md hover:bg-indigo-50 transition"
                        >
                          <span className="text-black group-hover:text-indigo-700 font-medium">
                            {item}
                          </span>
                          <FiChevronRight className="text-black group-hover:text-indigo-600" />
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Drawer Footer */}
                  <div className="px-6 py-4 border-t bg-gray-50 text-center text-xs text-gray-500">
                    <p className="font-medium">© 2025 Shopfinity</p>
                    <p>Empowering your shopping experience</p>
                  </div>
                </div>
              </Drawer>
            </div>

            {/* Brand Logo */}
            <div className="flex items-center gap-2 cursor-pointer md:mx-auto">
              <img
                className="h-10 w-auto hidden md:block object-cover"
                src="https://i.ibb.co.com/YF4HprZS/Screenshot-2025-09-10-112627-removebg-preview.png"
                alt="Shopfinity Logo"
              />
              <span className="text-white font-semibold text-xl md:text-2xl">
                <i>Shopfinity</i>
              </span>
            </div>

            {/* Mobile Icons */}
            <div className="md:hidden flex items-center gap-4">
              <div className="relative">
                <PiShoppingCartThin className="text-white text-3xl hover:text-emerald-400 transition" />
                <span className="absolute -top-1 -right-2 bg-blue-50 text-black text-xs rounded-full px-1.5">3</span>
              </div>
              <CgProfile className="text-white text-3xl hover:text-emerald-400 transition" />
            </div>
          </div>

          {/* 🔹 Search Bar */}
          <div
            id="input-container"
            className={`flex-1 order-2 flex w-full md:min-w-[450px] mx-auto rounded-[8px] ${
              inputFocus ? "ring-2 ring-emerald-500" : "border-none"
            }`}
          >
            <Select options={options} placeholder="All" styles={selectStyles} className="hidden md:block text-black" />
            <input
              type="text"
              onFocus={() => setInputFocus(true)}
              onBlur={() => setInputFocus(false)}
              placeholder="Search Shopfinity"
              className="flex-1 px-2 py-2 bg-white focus:outline-none text-gray-800"
            />
            <button
              className="bg-emerald-500 hover:bg-emerald-600 md:px-3 md:py-2 text-white md:rounded-r-md transition focus:ring-2 focus:ring-emerald-500"
            >
              <IoSearch className="text-[15px]" />
            </button>
          </div>

          {/* 🔹 Right NavLinks & Icons */}
          <div className="hidden md:flex items-center ml-4 space-x-6 text-white text-[14px] order-3">
            {navLinks.map((link, i) => (
              <NavItem key={i} link={link} />
            ))}
          </div>

          {/* 🔹 Cart & Profile */}
          <div className="hidden md:flex items-center gap-5 ml-4 order-4">
            <div className="relative">
              <PiShoppingCartThin className="text-3xl text-white hover:text-emerald-400 transition cursor-pointer" />
              <span className="absolute -top-1 -right-2 bg-blue-50 text-black text-xs rounded-full px-1.5">3</span>
            </div>
            <CgProfile className="text-4xl text-white cursor-pointer hover:text-emerald-400 transition" />
          </div>
        </div>
      </div>

      {/* 🔸 Secondary Navbar */}
      <div className="bg-gray-800 hidden md:flex justify-start items-center gap-4 px-3 py-2 text-gray-200 font-medium text-[14px] shadow-sm">
        <div className="flex items-center gap-2">
          <CgMenu className="text-2xl" />
          <p>All Categories</p>
        </div>
      </div>
    </div>
  );
}
