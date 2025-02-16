/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaCircle } from "react-icons/fa";

export default function App() {
  const [images, setImages] = useState([]);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchImages = async () => {
    try {
      setLoading(true);
      const res = await fetch("https://www.reddit.com/r/aww/top/.json?t=all");
      if (!res.ok) throw new Error("Failed to fetch images");
      const jsonRes = await res.json();
      const listImages = jsonRes.data.children
        .map((item) => item.data.url_overridden_by_dest)
        .filter((url) => url && url.includes(".jpg"));
      setImages(listImages);
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleClick = (direction) => {
    const lastIdx = images.length - 1;
    setIndex((prev) =>
      direction === "left"
        ? prev === 0
          ? lastIdx
          : prev - 1
        : prev === lastIdx
        ? 0
        : prev + 1
    );
  };

  useEffect(() => {
    fetchImages();
  }, []);

  useEffect(() => {
    const tid = setInterval(() => {
      handleClick("right");
    }, 3000);
    return () => clearInterval(tid);
  }, [index]);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-900">
      {loading ? (
        <div className="text-white text-2xl font-semibold">Loading...</div>
      ) : (
        <>
          <button
            className="absolute left-5 z-10 bg-white bg-opacity-50 hover:bg-opacity-80 p-3 rounded-full text-gray-900 shadow-md"
            onClick={() => handleClick("left")}
          >
            <FaChevronLeft size={24} />
          </button>
          <img
            src={images[index]}
            className="w-full h-screen object-cover rounded-lg shadow-lg"
            alt="Images"
          />
          <button
            className="absolute right-5 z-10 bg-white bg-opacity-50 hover:bg-opacity-80 p-3 rounded-full text-gray-900 shadow-md"
            onClick={() => handleClick("right")}
          >
            <FaChevronRight size={24} />
          </button>
          <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-3">
            {images.map((_, idx) => (
              <FaCircle
                key={idx}
                size={14}
                className={`cursor-pointer transition-colors duration-300 ${
                  idx === index
                    ? "text-white scale-110"
                    : "text-gray-500 hover:text-gray-300"
                }`}
                onClick={() => setIndex(idx)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
