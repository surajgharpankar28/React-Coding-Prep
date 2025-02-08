import { useEffect, useState } from "react";
import { SearchIcon } from "lucide-react";

const App = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [allCategories, setAllCategories] = useState([]);
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(true); // ✅ Loading state
  const [search, setSearchValue] = useState(""); // ✅ Loading state

  // Fetch products with loading animation
  const getProducts = async () => {
    setLoading(true); // ✅ Start loading
    const baseUrl = "https://fakestoreapi.com/products";
    const url = category ? `${baseUrl}/category/${category}` : baseUrl;
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Failed to fetch data");

      const categoriesResponse = await fetch(
        "https://fakestoreapi.com/products/categories/"
      );
      if (!categoriesResponse.ok) throw new Error("Failed to fetch data");

      const data = await response.json();
      const categoriesData = await categoriesResponse.json();
      setProducts(data);
      setFilteredProducts(data);
      setAllCategories(categoriesData);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false); // ✅ Stop loading
    }
  };

  //Search products
  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchValue(searchTerm); // Update state immediately

    if (searchTerm.trim() === "") {
      setFilteredProducts(products); // Reset if search is empty
      return;
    }

    const searchedProducts = products.filter(
      (product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredProducts(searchedProducts);
  };

  const handleClear = () => {
    setSearchValue("");
    setFilteredProducts(products);
  };

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  const handleSort = (sortType) => {
    if (sortType === "default") {
      setFilteredProducts(products); // Reset to original products list
      return; // Exit the function early
    }

    let sortedProducts = [...filteredProducts]; // Create a copy to avoid mutating the original array

    if (sortType === "lowToHigh") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortType === "highToLow") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(sortedProducts);
  };

  const handleClearFilter = () => {
    setCategory("");
  };

  return (
    <div className="min-h-screen mt-10 bg-gray-100 py-10 px-4">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Featured Products
      </h2>
      <div className="flex justify-center my-4">
        <input
          type="text"
          className="border border-gray-400 rounded-lg w-80 min-w-40 px-4 py-1"
          placeholder="Search Products"
          value={search}
          onChange={handleSearch}
        />
        <button onClick={handleSearch}>
          <SearchIcon size={24} className="text-black m-2" />
        </button>
        {search && (
          <button onClick={handleClear} className="text-red-500 font-bold">
            Clear
          </button>
        )}
      </div>
      <div className="flex justify-center flex-wrap gap-2 my-4">
        <div className="flex justify-start ">
          {category && (
            <button
              onClick={handleClearFilter}
              className="text-red-500 font-bold"
            >
              Clear Filter
            </button>
          )}
        </div>
        {allCategories.map((item, index) => (
          <button
            key={index}
            className={`px-4 py-2 ${
              category == item ? "bg-green-400" : "bg-green-100"
            } text-green-600 rounded-full shadow-sm border border-green-300 
                 hover:bg-green-300 hover:text-green-700 transition-all`}
            onClick={() =>
              category == item ? setCategory("") : setCategory(item)
            }
          >
            {item}
          </button>
        ))}

        <div className="flex justify-end items-center gap-2 ">
          <span className="text-gray-700 font-medium">Sort by:</span>
          <select
            className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm bg-white text-gray-700 
               hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all"
            onChange={(e) => handleSort(e.target.value)}
          >
            <option value="default">Default</option>
            <option value="lowToHigh">Price: Low to High</option>
            <option value="highToLow">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Product Grid / Loading State */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {loading ? (
          Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-2xl p-4 animate-pulse"
            >
              <div className="w-full h-48 bg-gray-300 rounded-md"></div>
              <div className="h-4 bg-gray-300 rounded-md mt-4 w-3/4"></div>
              <div className="h-3 bg-gray-300 rounded-md mt-2 w-1/2"></div>
              <div className="h-4 bg-gray-300 rounded-md mt-4 w-1/3"></div>
              <div className="mt-4 h-8 bg-gray-300 rounded-md"></div>
            </div>
          ))
        ) : filteredProducts.length === 0 ? (
          <div className="col-span-full text-center text-gray-600 text-lg font-semibold py-10">
            🚫 No products found. Try a different search.
          </div>
        ) : (
          filteredProducts.map((product) => (
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
          ))
        )}
      </div>
    </div>
  );
};

export default App;
