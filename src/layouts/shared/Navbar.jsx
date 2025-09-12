import React, { useState, useMemo, useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import { PiShoppingCartThin } from "react-icons/pi";
import { NavLink } from "react-router-dom";
import Select from "react-select";
import { CgProfile } from "react-icons/cg";
import "../shared/sharedStyles/style.css"
import { Drawer, IconButton, useMediaQuery } from "@mui/material";
import { CiMenuBurger } from "react-icons/ci";



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
      "Beauty",
      "Sports & Outdoors",
      "Kids",
      "Books & Education",
    ],
    []
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

  return (
    <div className="sticky top-0 z-50">
      {/* Top Navbar */}
      <div className="flex flex-col md:space-x-4 md:flex-row justify-between items-center px-2 py-3 bg-gray-900 shadow-md">
        {/* Logo */}
        <div className="flex items-center justify-between  mb-1 md:mb-0  w-full md:w-auto  md:justify-start  py-2 bg-gray-900">



          {/* Brand Logo */}
          <div className="flex flex-row items-center md:gap-2 cursor-pointer md:mx-auto">
            {/* mobile menu */}
            <div className="md:hidden">
              <IconButton onClick={toggleDrawer(true)}>
                <CiMenuBurger className="text-white  text-2xl font-black cursor-pointer hover:text-emerald-400 transition" />
              </IconButton>
              {/*  */}
              <Drawer open={open} onClose={toggleDrawer(false)}>
                {/* menu content */}
                <ul>
                  <li>hello</li>
                  <li>hello</li>
                  <li>hello</li>
                  <li>hello</li>
                  <li>hello</li>
                  <li>hello</li>
                </ul>
              </Drawer>
            </div>

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
            <PiShoppingCartThin className="text-3xl cursor-pointer hover:text-emerald-400 transition" />
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
      {/* <div className="hidden md:flex text-[14px] justify-start gap-4 bg-gray-800 px-8 py-2 text-gray-200 font-medium shadow-sm">
        {(moreCategoriesOpen ? categories : categories.slice(0, 3)).map((cat, i) => (
          <CategoryItem key={i} cat={cat} />
        ))}
        <span
          className="cursor-pointer hover:text-emerald-400 font-semibold"
          onClick={() => setMoreCategoriesOpen(!moreCategoriesOpen)}
        >
          {moreCategoriesOpen ? "Show Less" : "More Categories"}
        </span>
      </div> */}
    </div>



  );
}
