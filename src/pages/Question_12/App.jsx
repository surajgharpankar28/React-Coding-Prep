import { useEffect, useState } from "react";
import "./styles.css";
import Product from "./components/Product";
export default function App() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const fetchData = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products?limit=200");
      const data = await response.json();
      setProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const productsPerPage = 10;
  const totalPages = Math.ceil(products.length / productsPerPage);
  const start = currentPage * productsPerPage;
  const end = start + productsPerPage;

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
  };

  const handleSelect = (index) => {
    setCurrentPage(index);
  };

  return (
    <div className="min-h-[100vh] flex flex-col items-center justify-center bg-gray-100 px-4">
      <h1 className="text-2xl mt-9 font-bold mb-4">
        Pagination
      </h1>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        {products.slice(start, end).map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex items-center gap-2 mt-6">
        <button
          onClick={handlePrev}
          disabled={currentPage === 0}
          className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-700 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Prev
        </button>

        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => handleSelect(index)}
            className={`px-4 py-2 border rounded-md ${
              currentPage === index
                ? "bg-blue-500 text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-700 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </div>
  );
}
