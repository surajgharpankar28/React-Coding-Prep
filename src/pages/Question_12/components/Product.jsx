/* eslint-disable react/prop-types */
export default function Product({ product }) {
  return (
    <div
      key={product.id}
      className="border h-60 rounded-lg p-4 shadow-md bg-white"
    >
      <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>
      <img
        className="w-full h-30 object-cover rounded-md mt-2"
        src={product.thumbnail}
        alt={product.title}
        loading="lazy"
      />
    </div>
  );
}
