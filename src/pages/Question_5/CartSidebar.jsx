/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { X } from "lucide-react"; // Using lucide-react for icons

const CartSidebar = ({
  cartItems,
  removeFromCart,
  updateQuantity,
  isOpen,
  toggleCart,
}) => {
  const totalPrice = cartItems
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <div
      className={`fixed top-30 right-0 overflow-auto h-[80%] w-80 bg-white shadow-lg transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out p-4`}
    >
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-2 mb-4">
        <h2 className="text-xl font-bold">Shopping Cart</h2>
        <button
          onClick={toggleCart}
          className="text-gray-600 hover:text-gray-800"
        >
          <X size={24} />
        </button>
      </div>

      {/* Cart Items */}
      {cartItems.length > 0 ? (
        <div className="space-y-4 overflow-y-auto max-h-[70vh]">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center border-b pb-2">
              <img
                src={item.image}
                alt={item.title}
                className="w-12 h-12 object-contain mr-3"
              />
              <div className="flex-1">
                <h3 className="text-sm font-semibold line-clamp-1">
                  {item.title}
                </h3>
                <p className=" font-bold">
                  <span className="text-blue-600">${item.price}</span>
                </p>
              </div>
              <div className="flex items-center space-x-2 mt-1">
                <button
                  onClick={() => updateQuantity(item.id, "decrease")}
                  className="px-2 py-1 bg-gray-200 rounded-md hover:bg-gray-300"
                >
                  -
                </button>
                <span className="text-lg font-semibold">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, "increase")}
                  className="px-2 py-1 bg-gray-200 rounded-md hover:bg-gray-300"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 text-sm"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-center mt-10">Your cart is empty.</p>
      )}

      {/* Footer */}
      {cartItems.length > 0 && (
        <div className="absolute bottom-0 left-0 w-full p-4 bg-white shadow-md">
          <div className="flex justify-between font-semibold text-lg mb-3">
            <span>Total:</span>
            <span>${totalPrice}</span>
          </div>
          <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default CartSidebar;
