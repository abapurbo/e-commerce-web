import React, { useState } from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { PiShoppingCartThin } from "react-icons/pi";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import Select from "react-select";

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: "Become a Seller", path: "/seller", dropdown: ["Start Selling", "Seller Guide"] },
        { name: "Help & Support", path: "/help", dropdown: ["FAQ", "Contact Us"] },
        { name: "Login", path: "/login" },
        { name: "Sign Up", path: "/signup" },
    ];

    const categories = [
        "Electronics & Gadgets",
        "Computers & Accessories",
        "Fashion & Lifestyle",
        "Home & Living",
        "Beauty",
        "Sports & Outdoors",
        "Kids",
        "Books & Education",
    ];

    const options = categories.map((c) => ({ value: c, label: c }));

    return (
        <div className="sticky top-0 z-50">
            {/* Top Navbar */}
            <div className="flex justify-between items-center px-6 py-3 bg-white shadow-md">
                {/* Logo */}
                <div className="text-2xl font-extrabold text-blue-600 tracking-wide cursor-pointer">
                    Shopfinity
                </div>

                {/* Search with Category */}
                <div className="hidden md:flex items-center w-1/2  ">
                    <Select
                        options={options}
                        placeholder="All"
                      
                        styles={{
                            container: (provided) => ({ ...provided, width: 70,fontSize:14,color:'black',fontWeight:'semibold' }),
                            menu: (provided) => ({ ...provided, minWidth: 200 }),
                        }}
                     
                    />
                    <input
                        type="text"
                        placeholder="Search for products..."
                        className="flex-1 border-t border-b border-gray-300 px-4 py-2 rounded-sm  f focus:outline-blue-400"
                    />
                    <button className="bg-blue-600 text-white px-5 py-2 rounded-r-full hover:bg-blue-700 transition">
                        <IoSearch className="text-xl" />
                    </button>
                </div>

                {/* Right Links & Icons */}
                <div className="hidden md:flex items-center space-x-6">
                    {navLinks.map((link, i) => (
                        <div key={i} className="relative group">
                            <NavLink
                                to={link.path}
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-blue-600 font-semibold"
                                        : "text-gray-700 hover:text-blue-600 transition"
                                }
                            >
                                {link.name}
                            </NavLink>
                            {/* Dropdown */}
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
                    ))}

                    {/* Notification */}
                    <div className="relative">
                        <IoMdNotificationsOutline className="text-2xl cursor-pointer hover:text-blue-600 transition" />
                        <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5">
                            5
                        </span>
                    </div>

                    {/* Cart */}
                    <div className="relative">
                        <PiShoppingCartThin className="text-3xl cursor-pointer hover:text-blue-600 transition" />
                        <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5">
                            3
                        </span>
                    </div>
                </div>

                {/* Mobile Hamburger */}
                <div className="md:hidden flex items-center">
                    <GiHamburgerMenu
                        className="text-2xl cursor-pointer"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    />
                </div>
            </div>

            {/* Secondary Navbar (Categories) */}
            <div className="hidden md:flex justify-center gap-8 bg-gray-50 px-8 py-2 text-gray-700 font-medium shadow-sm">
                {categories.map((cat, i) => (
                    <NavLink
                        key={i}
                        to="#"
                        className="hover:text-blue-600 transition"
                    >
                        {cat}
                    </NavLink>
                ))}
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4">
                    {navLinks.map((link, i) => (
                        <div key={i}>
                            <NavLink
                                to={link.path}
                                className="block text-gray-700 font-medium py-1"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.name}
                            </NavLink>
                            {link.dropdown && (
                                <div className="pl-4">
                                    {link.dropdown.map((item, idx) => (
                                        <NavLink
                                            key={idx}
                                            to="#"
                                            className="block text-gray-500 py-1"
                                        >
                                            {item}
                                        </NavLink>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                    <div className="flex items-center gap-6 pt-3">
                        <IoMdNotificationsOutline className="text-2xl" />
                        <PiShoppingCartThin className="text-3xl" />
                    </div>
                </div>
            )}
        </div>
    );
}
