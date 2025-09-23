import React, { useState, useMemo, useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import { PiShoppingCartThin } from "react-icons/pi";
import { NavLink } from "react-router-dom";
import Select from "react-select";
import { CgProfile } from "react-icons/cg";
import "../shared/sharedStyles/style.css"
import { Drawer, IconButton, useMediaQuery } from "@mui/material";
import { CiMenuBurger } from "react-icons/ci";
import { FiChevronRight } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { CgMenu } from "react-icons/cg";
// Reusable NavItem
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

// Reusable CategoryItem
function CategoryItem({ cat }) {
  return (
    <NavLink to="#" className="hover:text-blue-600 transition">
      {cat}
    </NavLink>
  );
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreCategoriesOpen, setMoreCategoriesOpen] = useState(false);
  const [inputFocus, setInputFocus] = useState(false);
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery('(min-width:576px)')
  // navlinks
  const navLinks = useMemo(
    () => [
      { name: "Become a Seller", path: "/seller", dropdown: ["Start Selling", "Seller Guide"] },
      { name: "Help & Support", path: "/help", dropdown: ["FAQ", "Contact Us"] },
      { name: "Login", path: "/login" },
      { name: "Sign Up", path: "/signup" },
    ],
    []
  );
  // product categories
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
  );

  // headless ui menu item 
  const options = useMemo(() => categories.map((c) => ({ value: c, label: c })), [categories]);

  // React-Select styles
  const selectStyles = useMemo(
    () => ({
      container: (provided) => ({ ...provided, width: 80, fontSize: 14, }),
      control: (provided, state) => ({
        ...provided,
        border: state.isFocused ? '2px solid #10B981' : '2px solid transparent', // focus only
        boxShadow: state.isFocused ? ' #10B981' : 'none', // optional ring effect
        '&:hover': {
          border: state.isFocused ? '2px solid #10B981' : '2px solid transparent', // hover এ color change হবে না
        },
        borderRadius: '8px 0 0 8px',
        height: '40px',
        backgroundColor: "white",
        display: 'flex',
        cursor: "pointer"
      }),
      menu: (provided) => ({ ...provided, minWidth: 200 }),
    }),
    []
  );

  // Drawer setup
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  // Auto close on desktop
  useEffect(() => {
    if (isDesktop && open) {
      setOpen(false);
    }
  }, [isDesktop, open]);
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
    "Baby Products"
  ];

  return (
    <div className="sticky top-0 z-50">
      {/* Top Navbar */}
      <div className="flex flex-col md:space-x-4 md:flex-row justify-between items-center px-2 py-3 bg-gray-900 shadow-md">
        {/* Logo */}
        <div className="flex items-center justify-between  mb-1 md:mb-0  w-full md:w-auto  md:justify-start  py-2 bg-gray-900">



          {/* Brand Logo */}
          <div className="flex flex-row items-center md:gap-2 cursor-pointer md:mx-auto">
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <IconButton onClick={toggleDrawer(true)}>
                <CiMenuBurger className="text-white text-2xl cursor-pointer hover:text-emerald-400 transition" />
              </IconButton>

              {/* Drawer */}
              <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
                <div className="w-80 h-full bg-white text-gray-900 flex flex-col shadow-xl font-sans">

                  {/* Header Section */}
                  <div className="bg-gray-900 p-6 flex items-center gap-4 shadow-md ">
                    <FaUserCircle className="text-5xl text-white drop-shadow-lg" />
                    <div>
                      <h1 className="text-xl font-bold text-white tracking-wide">Welcome to Shopfinity</h1>
                      <p className="text-sm text-indigo-200 hover:underline cursor-pointer mt-1">
                        {/* react router setup */}
                        Sign in or Create Account
                      </p>
                    </div>
                  </div>

                  {/* Department Menu */}
                  <div className="flex-1 overflow-y-auto p-6">
                    <h2 className="text-lg font-semibold text-black  mb-4 border-b pb-2 tracking-wider">
                      Explore Categories
                    </h2>

                    <ul className="space-y-3">
                      {categoryNames.map((item, index) => (
                        <li
                          key={index}
                          className="group flex justify-between items-center px-3 py-2 rounded-md hover:bg-indigo-50 transition-all duration-200 cursor-pointer"
                        >
                          <span className="text-black group-hover:text-indigo-700 font-medium tracking-tight">
                            {item}
                          </span>
                          <FiChevronRight className="text-black group-hover:text-indigo-600 transition duration-150" />
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Footer */}
                  <div className="px-6 py-4 border-t bg-gray-50 text-center text-xs text-gray-500">
                    <p className="font-medium">© 2025 Shopfinity</p>
                    <p className="mt-1">Empowering your shopping experience</p>
                  </div>
                </div>
              </Drawer>


            </div>

            {/* Brand Logo */}
            <img
              className="h-10 w-auto hidden md:block object-cover"
              src="https://i.ibb.co.com/YF4HprZS/Screenshot-2025-09-10-112627-removebg-preview.png"
              alt="logo"
            />
            <span className="text-white font-semibold md:text-2xl text-xl relative md:top-1 top-0">
              <i>Shopfinity</i>
            </span>
          </div>

          {/* Mobile Icons (Cart & Profile) */}
          <div className="md:hidden  flex  items-center gap-4">
            {/* Cart */}
            <div className="relative">
              <PiShoppingCartThin className="text-white text-3xl cursor-pointer hover:text-emerald-400 transition" />
              <span className="absolute -top-1 -right-2 bg-blue-50 text-black text-xs rounded-full px-1.5">
                3
              </span>
            </div>

            {/* Profile */}
            <CgProfile className="text-white text-3xl cursor-pointer hover:text-emerald-400 transition" />
          </div>
        </div>


        {/* Search Section */}
        <div id="input-container" className={`flex-1 order-2 flex  w-full md:min-w-[450px] mx-auto   rounded-[8px] ${inputFocus ? "ring-2 ring-emerald-500" : "border-none"
          }`}>
          {/* Category Select */}
          <Select
            options={options}
            placeholder="All"
            styles={selectStyles}
            className="text-black hidden md:block"
          />

          {/* Search Input */}
          <input
            id="input-filed"
            type="text"
            onFocus={() => setInputFocus(true)}
            onBlur={() => setInputFocus(false)}
            placeholder="Search Shopfinity"
            className="flex-1 px-2 py-2 bg-white focus:outline-none text-gray-800"
          />

          {/* Search Button */}
          <button id="search" className="bg-emerald-500 border-0 focus:ring-2 focus:ring-emerald-500 focus:outline-none hover:bg-emerald-600 md:px-3 text-white md:py-2  md:rounded-r-md transition">
            <IoSearch className="text-[15px] text-center" />
          </button>
        </div>


        {/* Right Links & Icons */}
        <div className="hidden ml-4 order-3 md:flex items-center  text-[14px] space-x-6 text-white">
          {navLinks.map((link, i) => (
            <NavItem key={i} link={link} />
          ))}


        </div>

        {/* user profile & shopping card */}
        <div className="order-4 hidden md:flex  items-center gap-5 ml-4">
          <div className="relative">
            <PiShoppingCartThin className="text-3xl cursor-pointer text-white hover:text-emerald-400 transition" />
            <span className="absolute -top-1 -right-2 bg-blue-50 text-black text-xs rounded-full px-1.5">
              3
            </span>
          </div>
          {/* user profile icon */}
          <div >
            <CgProfile className="text-4xl text-white cursor-pointer hover:text-emerald-400 transition" />
          </div>
        </div>


      </div>


      {/* drawer */}



      {/* Secondary Navbar */}
      <div className="hidden md:flex text-[14px] justify-start items-center gap-4 bg-gray-800 px-8 py-2 text-gray-200 font-medium shadow-sm">
       <CgMenu className="text-2xl"/>
       
        <span
          className="cursor-pointer hover:text-emerald-400 font-semibold"
          onClick={() => setMoreCategoriesOpen(!moreCategoriesOpen)}
        >
          {moreCategoriesOpen ? "Show Less" : "More Categories"}
        </span>
      </div>
    </div>



  );
}
