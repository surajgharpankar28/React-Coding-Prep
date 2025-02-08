/* eslint-disable react/prop-types */
import { Heart } from "lucide-react";

export const Product = ({ product, toggleWishlist, wishlist }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl overflow-hidden transition-transform transform hover:scale-105 relative p-4">
      {/* Wishlist Heart Icon */}
      <button
        onClick={() => toggleWishlist(product.id)}
        className="absolute top-4 right-4"
      >
        <Heart
          size={24}
          className={`transition-all ${
            wishlist.includes(product.id)
              ? "fill-red-500 text-red-500"
              : "text-gray-400"
          }`}
        />
      </button>

      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-contain p-4"
      />

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 truncate">
          {product.title}
        </h3>
        <p className="text-gray-600 text-sm mt-1 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between mt-3">
          <span className="text-lg font-bold text-green-600">
            ${product.price}
          </span>
          <span className="text-yellow-500 text-sm flex items-center">
            ⭐ {product.rating.rate} ({product.rating.count})
          </span>
        </div>

        <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
};
