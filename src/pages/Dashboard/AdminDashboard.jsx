import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart, AiOutlineSetting, AiOutlineStar } from "react-icons/ai";
import { FiPackage } from "react-icons/fi";
import { MdPayment, MdLogout, MdPeople } from "react-icons/md";
import { BsFillGiftFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

/* ---------------- Professional Admin Dashboard ---------------- */
export default function AdminDashboard() {
  return (
    <div className="flex bg-gray-100 min-h-screen text-gray-900">
      {/* Sidebar */}
      <aside className="fixed top-0 left-0 h-screen w-[260px] bg-gradient-to-b from-gray-800 to-gray-900 text-white shadow-lg p-6 flex flex-col justify-between z-20">
        <Sidebar />
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-[260px] p-8 space-y-8">
        <Header />
        <SummaryCards />
        <RevenueChart />
        <UsersSection />
        <SellersSection />
        <ProductsSection />
        <OrdersSection />
        <PaymentsSection />
        <ReviewsSection />
        <PromotionsSection />
        <RecentActivity />
      </main>
    </div>
  );
}

/* ---------------- Header ---------------- */
function Header() {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between bg-white shadow rounded-2xl p-6 sticky top-0 z-10 space-y-4 md:space-y-0">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">Welcome, Admin 👋</h1>
        <p className="text-gray-500 mt-1">Here’s your platform overview</p>
      </div>
      <div className="flex gap-3">
        <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-xl shadow">
          Add Product
        </button>
        <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-xl shadow">
          Platform Settings
        </button>
      </div>
    </div>
  );
}

/* ---------------- Sidebar ---------------- */
function Sidebar() {
  const handleLogout = () => console.log("Logged out");
  return (
    <>
      <div>
        <div className="flex items-center gap-3 mb-10">
          <img
            className="h-10 w-auto object-cover rounded-md shadow-md"
            src="https://i.ibb.co.com/YF4HprZS/Screenshot-2025-09-10-112627-removebg-preview.png"
            alt="Logo"
          />
          <h1 className="text-2xl font-semibold tracking-wide">Shopfinity Admin</h1>
        </div>

        <nav className="space-y-2">
          <SidebarItem icon={<MdPeople />} text="Users" to="/users" />
          <SidebarItem icon={<CgProfile />} text="Sellers" to="/sellers" />
          <SidebarItem icon={<FiPackage />} text="Products" to="/products" />
          <SidebarItem icon={<AiOutlineShoppingCart />} text="Orders" to="/orders" />
          <SidebarItem icon={<MdPayment />} text="Payments" to="/payments" />
          <SidebarItem icon={<AiOutlineStar />} text="Reviews" to="/reviews" />
          <SidebarItem icon={<BsFillGiftFill />} text="Promotions" to="/promotions" />
          <SidebarItem icon={<AiOutlineSetting />} text="Settings" to="/settings" />
        </nav>
      </div>

      <button
        onClick={handleLogout}
        className="flex items-center gap-3 mt-8 px-4 py-3 rounded-xl border border-red-500 hover:bg-red-600 hover:text-white text-red-400 transition-all"
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
        `flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-200 cursor-pointer ${
          isActive ? "bg-teal-600 shadow-md text-white" : "hover:bg-gray-700 text-gray-200"
        }`
      }
    >
      <span className="text-lg">{icon}</span>
      <span>{text}</span>
    </NavLink>
  );
}

/* ---------------- Summary Cards ---------------- */
function SummaryCards() {
  const cards = [
    { icon: <MdPeople />, title: "Total Users", value: "1.2K", color: "from-teal-400 to-teal-600" },
    { icon: <CgProfile />, title: "Total Sellers", value: "150", color: "from-indigo-400 to-indigo-600" },
    { icon: <AiOutlineShoppingCart />, title: "Total Orders", value: "3.2K", color: "from-yellow-400 to-yellow-500" },
    { icon: <MdPayment />, title: "Revenue", value: "$120K", color: "from-pink-400 to-pink-500" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card, i) => (
        <div
          key={i}
          className={`flex items-center gap-4 p-6 bg-gradient-to-br ${card.color} text-white rounded-2xl shadow-lg transform hover:scale-105 transition-transform`}
        >
          <div className="text-3xl p-3 bg-white/20 rounded-xl">{card.icon}</div>
          <div>
            <p className="text-sm opacity-90">{card.title}</p>
            <h2 className="text-2xl font-bold">{card.value}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ---------------- Revenue Chart ---------------- */
function RevenueChart() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
      <h3 className="text-xl font-semibold mb-4 text-gray-900">Revenue Overview</h3>
      <div className="h-48 flex items-center justify-center text-gray-400">[Chart Placeholder]</div>
    </div>
  );
}

/* ---------------- Users Section ---------------- */
function UsersSection() {
  const users = [
    { name: "John Doe", email: "john@example.com", role: "Customer" },
    { name: "Jane Smith", email: "jane@example.com", role: "Customer" },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
      <h3 className="text-xl font-semibold mb-4 text-gray-900">Users</h3>
      <ul className="space-y-2">
        {users.map((u, i) => (
          <li key={i} className="flex justify-between bg-gray-50 p-3 rounded-lg border border-gray-100 hover:shadow-sm transition">
            {u.name} | {u.email} | Role: {u.role}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------------- Sellers Section ---------------- */
function SellersSection() {
  const sellers = [
    { name: "TechStore", products: 25 },
    { name: "GadgetWorld", products: 50 },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
      <h3 className="text-xl font-semibold mb-4 text-gray-900">Sellers</h3>
      <ul className="space-y-2">
        {sellers.map((s, i) => (
          <li key={i} className="flex justify-between bg-gray-50 p-3 rounded-lg border border-gray-100 hover:shadow-sm transition">
            {s.name} | Products: {s.products}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------------- Products Section ---------------- */
function ProductsSection() {
  const products = [
    { name: "iPhone 15", stock: 20, price: "$999" },
    { name: "Smart Watch", stock: 50, price: "$249" },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
      <h3 className="text-xl font-semibold mb-4 text-gray-900">Products</h3>
      <ul className="space-y-2">
        {products.map((p, i) => (
          <li key={i} className="flex justify-between bg-gray-50 p-3 rounded-lg border border-gray-100 hover:shadow-sm transition">
            {p.name} | {p.stock} in stock | {p.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------------- Orders Section ---------------- */
function OrdersSection() {
  const orders = [
    { id: "ORD-001", user: "John Doe", total: "$999", status: "Delivered" },
    { id: "ORD-002", user: "Jane Smith", total: "$249", status: "Pending" },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
      <h3 className="text-xl font-semibold mb-4 text-gray-900">Orders</h3>
      <ul className="space-y-2">
        {orders.map((o, i) => (
          <li key={i} className="flex justify-between bg-gray-50 p-3 rounded-lg border border-gray-100 hover:shadow-sm transition">
            {o.id} | {o.user} | {o.total} | {o.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------------- Payments Section ---------------- */
function PaymentsSection() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
      <h3 className="text-xl font-semibold mb-4 text-gray-900">Payments</h3>
      <p>Total Revenue: $120K | Pending Payouts: $15K</p>
    </div>
  );
}

/* ---------------- Reviews Section ---------------- */
function ReviewsSection() {
  const reviews = [
    { user: "John Doe", product: "iPhone 15", rating: 5 },
    { user: "Jane Smith", product: "Smart Watch", rating: 4 },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
      <h3 className="text-xl font-semibold mb-4 text-gray-900">Reviews</h3>
      <ul className="space-y-2">
        {reviews.map((r, i) => (
          <li key={i} className="bg-gray-50 p-3 rounded-lg border border-gray-100 hover:shadow-sm transition">
            {r.user} rated {r.product} {r.rating} ⭐
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------------- Promotions Section ---------------- */
function PromotionsSection() {
  const promos = [
    { code: "SUMMER20", discount: "20%" },
    { code: "WELCOME10", discount: "10%" },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
      <h3 className="text-xl font-semibold mb-4 text-gray-900">Promotions</h3>
      <ul className="space-y-2">
        {promos.map((p, i) => (
          <li key={i} className="bg-gray-50 p-3 rounded-lg border border-gray-100 hover:shadow-sm transition">
            Code: {p.code} | Discount: {p.discount}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------------- Recent Activity ---------------- */
function RecentActivity() {
  const activities = [
    "New seller registered: GadgetWorld",
    "Order ORD-002 marked as paid",
    "Product iPhone 15 added by TechStore",
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
      <h3 className="text-xl font-semibold mb-4 text-gray-900">Recent Activity</h3>
      <ul className="space-y-3">
        {activities.map((act, i) => (
          <li key={i} className="bg-gray-50 p-3 rounded-lg border border-gray-100 hover:shadow-sm transition">
            {act}
          </li>
        ))}
      </ul>
    </div>
  );
}
