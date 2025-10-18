import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaRegHeart,
} from "react-icons/fa";
import {
  MdLogout,
  MdOutlineLocationOn,
  MdPayment,
} from "react-icons/md";
import {
  AiOutlineShoppingCart,
  AiOutlineStar,
  AiOutlineSetting,
} from "react-icons/ai";
import { FiPackage } from "react-icons/fi";
import { BsFillGiftFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

/* ---------------- Dashboard Layout ---------------- */
export default function userDashboard() {
  return (
    <div className="flex bg-gray-50 text-gray-900 overflow-hidden min-h-screen">
      {/* Sidebar (Fixed) */}
      <aside className="fixed top-0 left-0 h-screen w-[270px] bg-gradient-to-b from-teal-700 to-teal-800 text-white shadow-2xl p-6 flex flex-col justify-between z-20">
        <Sidebar />
      </aside>

      {/* Main Content (Scrollable) */}
      <main className="flex-1 ml-[270px] h-screen overflow-y-auto px-8 py-10 space-y-8">
        <Header />
        <SummaryCards />
        <RecentOrders />
        <RecentActivity />
      </main>
    </div>
  );
}

/* ---------------- Header ---------------- */
function Header() {
  return (
    <div className="flex items-center justify-between bg-white/90 backdrop-blur-lg border border-gray-200 rounded-2xl p-5 shadow-sm sticky top-0 z-10">
      <h1 className="text-3xl font-semibold text-gray-800 tracking-tight">
        Welcome Back 👋
      </h1>
      <p className="text-gray-600 text-sm">Have a great shopping day!</p>
    </div>
  );
}

/* ---------------- Sidebar Component ---------------- */
function Sidebar() {
  const handleLogout = () => {
    console.log("Logged out");
  };

  return (
    <>
      {/* Logo */}
      <div>
        <div className="flex items-center gap-2 mb-8">
          <img
            className="h-10 w-auto object-cover drop-shadow-md"
            src="https://i.ibb.co.com/YF4HprZS/Screenshot-2025-09-10-112627-removebg-preview.png"
            alt="Shopfinity Logo"
          />
          <h1 className="text-2xl font-semibold tracking-wide">Shopfinity</h1>
        </div>

        {/* Navigation */}
        <nav className="space-y-1">
          <SidebarItem icon={<AiOutlineShoppingCart />} text="My Orders" to="/orders" />
          <SidebarItem icon={<FaRegHeart />} text="Wishlist" to="/wishlist" />
          <SidebarItem icon={<MdOutlineLocationOn />} text="Address Book" to="/address" />
          <SidebarItem icon={<MdPayment />} text="Payment Methods" to="/payments" />
          <SidebarItem icon={<AiOutlineStar />} text="My Reviews" to="/reviews" />
          <SidebarItem icon={<CgProfile />} text="My Profile" to="/profile" />
          <SidebarItem icon={<AiOutlineSetting />} text="Account Settings" to="/settings" />
        </nav>
      </div>

      {/* Logout */}
      <button
        onClick={handleLogout}
        className="flex items-center gap-3 px-4 py-3 mt-8 rounded-xl border border-red-400 
        bg-white/10 hover:bg-red-600/20 text-red-100 hover:text-white transition-all duration-300"
      >
        <MdLogout className="text-xl" /> Logout
      </button>
    </>
  );
}

/* ---------------- Sidebar Item ---------------- */
function SidebarItem({ icon, text, to }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-3 w-full px-4 py-3 rounded-xl font-medium transition-all duration-200 ease-in-out cursor-pointer ${
          isActive
            ? "bg-white/20 text-white shadow-sm"
            : "hover:bg-white/10 text-white/80"
        }`
      }
    >
      <span className="text-xl">{icon}</span>
      <span>{text}</span>
    </NavLink>
  );
}

/* ---------------- Summary Cards ---------------- */
function SummaryCards() {
  const cards = [
    { icon: <AiOutlineShoppingCart />, title: "Total Orders", value: "12", color: "from-teal-400 to-teal-600" },
    { icon: <FaRegHeart />, title: "Wishlist", value: "8", color: "from-pink-400 to-pink-600" },
    { icon: <FiPackage />, title: "Delivered", value: "9", color: "from-indigo-400 to-indigo-600" },
    { icon: <AiOutlineStar />, title: "Reviews", value: "5", color: "from-yellow-400 to-yellow-600" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card, i) => (
        <div
          key={i}
          className={`p-6 rounded-2xl shadow-md border border-gray-200 bg-gradient-to-br ${card.color} text-white flex items-center gap-4 hover:scale-[1.03] transition-transform duration-200`}
        >
          <div className="text-3xl bg-white/20 p-3 rounded-xl">{card.icon}</div>
          <div>
            <p className="text-sm opacity-90">{card.title}</p>
            <h3 className="text-2xl font-bold">{card.value}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ---------------- Recent Orders ---------------- */
function RecentOrders() {
  const orders = [
    { id: "ORD-123", product: "iPhone 15", date: "Sep 5, 2025", price: "$999", status: "Delivered" },
    { id: "ORD-456", product: "Smart Watch", date: "Sep 15, 2025", price: "$249", status: "Pending" },
    { id: "ORD-789", product: "Wireless Earbuds", date: "Oct 2, 2025", price: "$129", status: "Cancelled" },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-200">
      <h3 className="text-xl font-semibold mb-5 flex items-center gap-2 text-gray-900">
        <AiOutlineShoppingCart /> My Recent Orders
      </h3>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="py-3 px-4 text-left">Order ID</th>
              <th className="py-3 px-4 text-left">Product</th>
              <th className="py-3 px-4 text-left">Date</th>
              <th className="py-3 px-4 text-left">Price</th>
              <th className="py-3 px-4 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b hover:bg-gray-50 transition">
                <td className="py-3 px-4">{order.id}</td>
                <td className="py-3 px-4 font-medium">{order.product}</td>
                <td className="py-3 px-4">{order.date}</td>
                <td className="py-3 px-4 font-medium text-gray-700">{order.price}</td>
                <td className="py-3 px-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      order.status === "Delivered"
                        ? "bg-green-100 text-green-700"
                        : order.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ---------------- Recent Activity ---------------- */
function RecentActivity() {
  const activities = [
    "🎁 Added “iPhone 15” to Wishlist",
    "💳 Completed payment for “Smart Watch”",
    "⭐ Gave 5 stars to “Wireless Earbuds”",
  ];

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-200 mb-10">
      <h3 className="text-xl font-semibold mb-4 text-gray-900 flex items-center gap-2">
        <BsFillGiftFill /> Recent Activity
      </h3>
      <ul className="space-y-3 text-gray-700">
        {activities.map((activity, index) => (
          <li
            key={index}
            className="bg-gray-50 p-3 rounded-lg border border-gray-100 hover:shadow-sm transition"
          >
            {activity}
          </li>
        ))}
      </ul>
    </div>
  );
}
