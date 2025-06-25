import React, { useState } from "react";

const InsightBox = ({ data }) => {
  const [columnIndex, setColumnIndex] = useState(0);
  if (!data || data.length <= 1) return null;

  const headers = data[0];

  const totalRows = data.length - 1;
  const counts = {};

  for (let i = 1; i < data.length; i++) {
    const value = String(data[i][columnIndex] || "N/A");
    counts[value] = (counts[value] || 0) + 1;
  }

  const topEntries = Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3);

  return (
    <div className="mt-6">
      {/* Column Select Dropdown */}
      <div className="mb-4">
        <label className="block mb-1 text-sm font-medium text-indigo-600">
          🔍 Analyze Column:
        </label>
        <select
          value={columnIndex}
          onChange={(e) => setColumnIndex(parseInt(e.target.value))}
          className="w-full sm:w-64 p-2 border rounded dark:bg-gray-700 dark:text-white"
        >
          {headers.map((header, idx) => (
            <option key={idx} value={idx}>
              {header || `Column ${idx + 1}`}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white dark:bg-gray-800 p-4 rounded shadow text-center">
          <h3 className="text-xl font-semibold text-indigo-600">📊 Total Rows</h3>
          <p className="text-2xl mt-2 font-bold">{totalRows}</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded shadow text-center">
          <h3 className="text-xl font-semibold text-indigo-600">
            🔢 Unique {headers[columnIndex] || "Column"}
          </h3>
          <p className="text-2xl mt-2 font-bold">{Object.keys(counts).length}</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded shadow text-center">
          <h3 className="text-xl font-semibold text-indigo-600">🏆 Top Entries</h3>
          <ul className="text-sm mt-2 text-gray-600 dark:text-gray-300 space-y-1">
            {topEntries.length === 0 ? (
              <li className="text-gray-400 italic">No data</li>
            ) : (
              topEntries.map(([value, count]) => (
                <li key={value}>
                  <span className="inline-block bg-indigo-100 dark:bg-indigo-700 text-indigo-700 dark:text-white px-2 py-1 rounded-full mr-2">
                    {value}
                  </span>
                  <span>{count} times</span>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InsightBox;
