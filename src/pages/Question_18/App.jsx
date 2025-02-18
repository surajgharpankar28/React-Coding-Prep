/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import json from "./data.json";
import { FaChevronDown, FaChevronRight } from "react-icons/fa"; // Importing icons

export default function App() {
  const [data, setData] = useState(json);

  const List = ({ list }) => {
    const [isExpanded, setIsExpanded] = useState({});

    const handleToggle = (nodeName) => {
      setIsExpanded((prev) => ({
        ...prev,
        [nodeName]: !prev[nodeName],
      }));
    };

    return (
      <div className="pl-4">
        {list.map((node) => (
          <div key={node.id}>
            <div className="flex align-middle items-center">
              {node.isFolder && (
                <span
                  onClick={() => handleToggle(node.name)}
                  className="mr-2 cursor-pointer"
                >
                  {isExpanded?.[node.name] ? (
                    <FaChevronDown className="text-gray-700" />
                  ) : (
                    <FaChevronRight className="text-gray-700" />
                  )}
                </span>
              )}
              <span
                className={`font-semibold ${
                  node.isFolder ? "text-blue-600" : ""
                }`}
              >
                {node.name}
              </span>
            </div>
            {isExpanded?.[node.name] && node?.children && (
              <List list={node.children} />
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl text-left font-bold  text-gray-800 mb-4 mt-18">
        File Folder Explorer
      </h1>
      <div className="flex justify-left text-left">
        <List list={data} />
      </div>
    </div>
  );
}
