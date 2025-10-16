import React from "react";
import { Heart, ShoppingCart, Eye } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
    discount: "-20%",
    rating: 4,
  },
  {
    id: 2,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-02.jpg",
    imageAlt: "Front of men's Basic Tee in white.",
    price: "$35",
    color: "Aspen White",
    rating: 5,
  },
  {
    id: 3,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-03.jpg",
    imageAlt: "Front of men's Basic Tee in dark gray.",
    price: "$35",
    color: "Charcoal",
    rating: 3,
  },
  {
    id: 4,
    name: "Artwork Tee",
    href: "#",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-04.jpg",
    imageAlt:
      "Front of men's Artwork Tee in peach with white and brown dots forming an isometric cube.",
    price: "$35",
    color: "Iso Dots",
    rating: 4,
    discount: "-15%",
  },
];

function Rating({ value }) {
  return (
    <div className="flex gap-1">
      {Array(5)
        .fill(0)
        .map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 ${i < value ? "text-yellow-400" : "text-gray-300"}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.357 2.44a1 1 0 00-.364 1.118l1.286 3.955c.3.921-.755 1.688-1.54 1.118l-3.357-2.44a1 1 0 00-1.176 0l-3.357 2.44c-.784.57-1.838-.197-1.539-1.118l1.286-3.955a1 1 0 00-.364-1.118L2.975 9.382c-.783-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.955z" />
          </svg>
        ))}
    </div>
  );
}

export default function ProductGrid() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Featured Products</h2>
          <p className="text-gray-600 mt-2">
            Discover our latest collection of tees & artwork designed for everyone.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 relative group"
            >
              {product.discount && (
                <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded z-10">
                  {product.discount}
                </span>
              )}
              <div className="relative overflow-hidden">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-25 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-2 transition-opacity duration-300">
                  <button className="bg-white p-2 rounded-full hover:bg-gray-100 transition">
                    <ShoppingCart className="w-5 h-5 text-gray-800" />
                  </button>
                  <button className="bg-white p-2 rounded-full hover:bg-gray-100 transition">
                    <Heart className="w-5 h-5 text-gray-800" />
                  </button>
                  <button className="bg-white p-2 rounded-full hover:bg-gray-100 transition">
                    <Eye className="w-5 h-5 text-gray-800" />
                  </button>
                </div>
              </div>
              <div className="p-4 flex flex-col gap-1">
                <h3 className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition">
                  {product.name}
                </h3>
                <p className="text-gray-500 text-sm">{product.color}</p>
                <Rating value={product.rating} />
                <p className="text-gray-900 font-bold mt-1">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
