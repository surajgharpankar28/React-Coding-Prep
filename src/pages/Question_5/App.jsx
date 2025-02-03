import { useEffect, useState } from "react";
import CartSidebar from "./CartSidebar";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const addToCart = (product) => {
    setCartItems((prevCart) => {
      const isItemInCart = prevCart.some((item) => item.id === product.id);

      if (!isItemInCart) {
        return [...prevCart, { ...product, quantity: 1 }];
      } else {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
    });
  };

  const updateQuantity = (id, type) => {
    setCartItems((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                type === "increase"
                  ? item.quantity + 1
                  : Math.max(1, item.quantity - 1),
            }
          : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCartItems((prevCart) => prevCart.filter((item) => item.id != id));
  };

  useEffect(() => {
    const savedCartItems = localStorage.getItem("cartItem");
    if (savedCartItems) {
      setCartItems(JSON.parse(savedCartItems));
    }
  }, []); // ✅ Runs only once when the component mounts

  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem("cartItem", JSON.stringify(cartItems));
    } else {
      localStorage.removeItem("cartItem"); // ✅ Removes empty cart from storage
    }
  }, [cartItems]); // ✅ Runs only when cart changes

  // Fetch products from API
  const getProducts = async () => {
    console.log("Fetching products...");
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) throw new Error("Failed to fetch data");

      const data = await response.json();
      setProducts(data);
      console.log("Fetched products:", data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="min-h-screen mt-10 bg-gray-100 py-10 px-4">
      {/* Cart Button */}
      <button
        onClick={toggleCart}
        className="fixed top-18 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg z-50"
      >
        Cart ({cartItems.length})
      </button>

      {/* Title */}
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Featured Products
      </h2>

      {/* Grid Container */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-2xl overflow-hidden transition-transform transform hover:scale-105"
          >
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
                <span className="text-lg font-bold text-blue-600">
                  ${product.price}
                </span>
                <span className="text-yellow-500 text-sm flex items-center">
                  ⭐ {product.rating.rate} ({product.rating.count})
                </span>
              </div>

              <button
                onClick={() => addToCart(product)}
                className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Sidebar */}
      <CartSidebar
        cartItems={cartItems}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
        isOpen={isCartOpen}
        toggleCart={toggleCart}
      />
    </div>
  );
};

export default App;
