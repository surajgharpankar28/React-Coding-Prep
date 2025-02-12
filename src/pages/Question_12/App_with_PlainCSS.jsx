import { useEffect, useState } from "react";
import "./styles.css";
import Product from "./components/Product";
export default function App() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

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
    <div className="App">
      <h1>Pagination</h1>
      <div className="all-products">
        {products.slice(start, end).map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      <div className="pagination">
        <button onClick={() => handlePrev()} disabled={currentPage === 0}>
          Prev
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            className={`pageNo ${currentPage === index ? "active" : ""}`}
            key={index}
            onClick={() => handleSelect(index)}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => handleNext()}
          disabled={currentPage === totalPages - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
}
