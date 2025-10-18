import React from "react";
import { NavLink } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { MdLogout, MdOutlineLocationOn, MdPayment } from "react-icons/md";
import { AiOutlineShoppingCart, AiOutlineStar, AiOutlineSetting } from "react-icons/ai";
import { FiPackage } from "react-icons/fi";
import { BsFillGiftFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

/* ---------------- Full Professional Seller Dashboard ---------------- */
export default function SellerDashboard() {
    return (
        <div className="flex bg-gray-100 text-gray-900 min-h-screen">
            {/* Sidebar */}
            <aside className="fixed top-0 left-0 h-screen w-[260px] bg-gradient-to-b from-teal-700 to-teal-800 text-white shadow-lg p-6 flex flex-col justify-between z-20">
                <Sidebar />
            </aside>

            {/* Main Content */}
            <main className="flex-1 ml-[260px] p-8 space-y-8">
                <Header />
                <SummaryCards />
                <RevenueChart />
                <LowStockAlerts />
                <RecentOrders />
                <ProductsList />
                <TopSellingProducts />
                <PaymentsSummary />
                <ReviewsSection />
                <CustomersList />
                <PromotionsSection />
                <NotificationsPanel />
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
                <h1 className="text-3xl font-bold text-gray-800">Welcome, Seller 👋</h1>
                <p className="text-gray-500 mt-1">Here’s your store overview</p>
            </div>
            <div className="flex gap-3">
                <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-xl shadow">Add Product</button>
                <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-xl shadow">View Store</button>
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
                    <h1 className="text-2xl font-semibold tracking-wide">Shopfinity</h1>
                </div>

                <nav className="space-y-2">
                    <SidebarItem icon={<AiOutlineShoppingCart />} text="Orders" to="/orders" />
                    <SidebarItem icon={<FiPackage />} text="Products" to="/products" />
                    <SidebarItem icon={<MdPayment />} text="Payments" to="/payments" />
                    <SidebarItem icon={<AiOutlineStar />} text="Reviews" to="/reviews" />
                    <SidebarItem icon={<CgProfile />} text="Profile" to="/profile" />
                    <SidebarItem icon={<AiOutlineSetting />} text="Settings" to="/settings" />
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
                `flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-200 cursor-pointer ${isActive ? "bg-white/20 text-white shadow-sm" : "hover:bg-white/10 text-white/80"
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
        { icon: <AiOutlineShoppingCart />, title: "Total Orders", value: "120", color: "from-teal-400 to-teal-600" },
        { icon: <FiPackage />, title: "Products", value: "45", color: "from-indigo-400 to-indigo-600" },
        { icon: <MdPayment />, title: "Revenue", value: "$12.3K", color: "from-yellow-400 to-yellow-500" },
        { icon: <AiOutlineStar />, title: "Reviews", value: "85", color: "from-pink-400 to-pink-500" },
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

/* ---------------- Low Stock Alerts ---------------- */
function LowStockAlerts() {
    const lowStock = [
        { product: "iPhone 15", stock: 3 },
        { product: "Smart Watch", stock: 5 },
    ];
    return (
        <div className="bg-red-50 rounded-2xl shadow-lg p-6 border border-red-200">
            <h3 className="text-xl font-semibold mb-4 text-red-700">Low Stock Alerts</h3>
            <ul className="space-y-2">
                {lowStock.map((p, i) => (
                    <li key={i} className="flex justify-between bg-red-100/30 p-3 rounded-lg border border-red-200">
                        {p.product} | Remaining: {p.stock}
                    </li>
                ))}
            </ul>
        </div>
    );
}

/* ---------------- Recent Orders ---------------- */
function RecentOrders() {
    const orders = [
        { id: "ORD-001", product: "iPhone 15", date: "Oct 2, 2025", price: "$999", status: "Delivered" },
        { id: "ORD-002", product: "Smart Watch", date: "Oct 3, 2025", price: "$249", status: "Pending" },
        { id: "ORD-003", product: "Wireless Earbuds", date: "Oct 5, 2025", price: "$129", status: "Cancelled" },
    ];

    return (
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 flex items-center gap-2">
                <AiOutlineShoppingCart /> Recent Orders
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
                        {orders.map((o) => (
                            <tr key={o.id} className="border-b hover:bg-gray-50 transition">
                                <td className="py-3 px-4">{o.id}</td>
                                <td className="py-3 px-4 font-medium">{o.product}</td>
                                <td className="py-3 px-4">{o.date}</td>
                                <td className="py-3 px-4 font-medium text-gray-700">{o.price}</td>
                                <td className="py-3 px-4">
                                    <span
                                        className={`px-3 py-1 text-xs font-medium rounded-full ${o.status === "Delivered"
                                                ? "bg-green-100 text-green-700"
                                                : o.status === "Pending"
                                                    ? "bg-yellow-100 text-yellow-700"
                                                    : "bg-red-100 text-red-700"
                                            }`}
                                    >
                                        {o.status}
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

/* ---------------- Products List ---------------- */
function ProductsList() {
    const products = [
        { id: 1, name: "iPhone 15", stock: 20, price: "$999" },
        { id: 2, name: "Smart Watch", stock: 50, price: "$249" },
    ];
    return (
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 flex items-center gap-2"><FiPackage /> Products</h3>
            <ul className="space-y-2">
                {products.map((p) => (
                    <li key={p.id} className="flex justify-between bg-gray-50 p-3 rounded-lg border border-gray-100 hover:shadow-sm transition">
                        <span>{p.name}</span>
                        <span>{p.stock} in stock | {p.price}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

/* ---------------- Top Selling Products ---------------- */
function TopSellingProducts() {
    const topProducts = [
        { name: "iPhone 15", sold: 120 },
        { name: "Smart Watch", sold: 80 },
    ];
    return (
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Top Selling Products</h3>
            <ul className="space-y-2">
                {topProducts.map((p, i) => (
                    <li key={i} className="flex justify-between bg-gray-50 p-3 rounded-lg border border-gray-100">
                        {p.name} | Sold: {p.sold}
                    </li>
                ))}
            </ul>
        </div>
    );
}

/* ---------------- Payments Summary ---------------- */
function PaymentsSummary() {
    return (
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
            <h3 className="text-xl font-semibold mb-4 text-gray-900"><MdPayment /> Payments</h3>
            <p className="text-gray-600">Total Revenue: $12.3K | Pending Payouts: $2.5K</p>
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
            <h3 className="text-xl font-semibold mb-4 text-gray-900"><AiOutlineStar /> Reviews</h3>
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

/* ---------------- Customers List ---------------- */
function CustomersList() {
    const customers = [
        { name: "John Doe", orders: 5 },
        { name: "Jane Smith", orders: 3 },
    ];
    return (
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
            <h3 className="text-xl font-semibold mb-4 text-gray-900"><CgProfile /> Customers</h3>
            <ul className="space-y-2">
                {customers.map((c, i) => (
                    <li key={i} className="bg-gray-50 p-3 rounded-lg border border-gray-100 hover:shadow-sm transition">
                        {c.name} | Orders: {c.orders}
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
            <h3 className="text-xl font-semibold mb-4 text-gray-900"><BsFillGiftFill /> Promotions</h3>
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

/* ---------------- Notifications Panel ---------------- */
function NotificationsPanel() {
    const notifications = [
        "New order received: ORD-005",
        "Payment of $499 completed",
        "5-star review for iPhone 15",
    ];
    return (
        <div className="bg-blue-50 rounded-2xl shadow-lg p-6 border border-blue-200">
            <h3 className="text-xl font-semibold mb-4 text-blue-700">Notifications</h3>
            <ul className="space-y-2">
                {notifications.map((n, i) => (
                    <li key={i} className="flex items-center bg-blue-100/30 p-3 rounded-lg border border-blue-200">
                        {n}
                    </li>
                ))}
            </ul>
        </div>
    );
}

/* ---------------- Recent Activity ---------------- */
function RecentActivity() {
    const activities = [
        "Added new product: iPhone 15",
        "Order ORD-002 marked as paid",
        "Received 5-star review for Wireless Earbuds",
    ];

    return (
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 flex items-center gap-2">
                <BsFillGiftFill /> Recent Activity
            </h3>
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
