/* eslint-disable react/prop-types */

const Accordion = ({ id, title, info, toggleAccordion, isActive }) => {
  return (
    <div className="">
      {/* Accordion Header */}
      <div
        className="flex justify-between items-center bg-white border p-2 rounded-xl shadow-md 
                     hover:bg-gray-50 transition-all duration-200 cursor-pointer"
        onClick={() => toggleAccordion(id)}
      >
        <h1 className="text-lg font-semibold text-gray-800">{title}</h1>
        <button
          aria-expanded={isActive}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 
                      hover:bg-gray-300 transition-all duration-200 text-xl font-bold"
        >
          {isActive ? "-" : "+"}
        </button>
      </div>

      {/* Accordion Content */}
      <div
        className={`bg-gray-50 border p-2 rounded-xl shadow-md transition-all duration-300 overflow-hidden ${
          isActive
            ? "max-h-60 opacity-100 py-2"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <p className="text-gray-700 leading-relaxed">{info}</p>
      </div>
    </div>
  );
};

export default Accordion;
