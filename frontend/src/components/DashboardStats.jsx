// components/DashboardStats.jsx
import { useEffect, useState } from "react";
import * as XLSX from "xlsx";

const DashboardStats = () => {
  const [history, setHistory] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [previewData, setPreviewData] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    const uploadHistory =
      JSON.parse(localStorage.getItem("uploadHistory")) || [];
    setHistory(uploadHistory.reverse()); // Show latest first
  }, []);
  const handleDelete = (index) => {
    const updated = [...history];
    const removed = updated.splice(index, 1);
    localStorage.setItem(
      "uploadHistory",
      JSON.stringify([...updated].reverse())
    );
    setHistory(updated);
    console.log(`🗑 Deleted: ${removed[0]?.name}`);
  };

  const handlePreview = async (fileName) => {
    const file = history.find((f) => f.name === fileName);
    if (!file?.data) return alert("Preview not available.");

    const wb = XLSX.read(file.data, { type: "base64" });
    const ws = wb.Sheets[wb.SheetNames[0]];
    const jsonData = XLSX.utils.sheet_to_json(ws, { header: 1 });
    setPreviewData(jsonData.slice(0, 5)); // Show top 5 rows
    setSelectedFile(file.name);
  };

  const filteredHistory = history.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
   <>

      {/* Upload History */}
      <div className="bg-white dark:bg-gray-800 max-w-3xl mx-auto mt-8 p-6 rounded-lg shadow-md text-left">
        <h2 className="text-xl font-bold text-indigo-600 dark:text-indigo-300 mb-4">
          📜 Upload History
        </h2>

        {/* 🔍 Search Bar */}
        <input
          type="text"
          placeholder="🔍 Search by file name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full mb-4 px-4 py-2 border rounded-md focus:outline-none"
        />

        {filteredHistory.length === 0 ? (
          <p className="text-sm text-gray-500 dark:text-gray-400">No uploads match your search.</p>
        ) : (
          <ul className="space-y-4 text-sm text-gray-700 dark:text-gray-300">
            {filteredHistory.map((entry, index) => (
              <li key={index} className="border-b pb-2 flex justify-between items-center">
                <div>
                  <strong>📁 {entry.name}</strong><br />
                  <span className="text-xs">
                    {new Date(entry.timestamp).toLocaleString("en-IN")}
                  </span>
                </div>
                <div className="space-x-2">
                  <button
                    onClick={() => handlePreview(entry.name)}
                    className="text-blue-600 hover:underline text-sm"
                  >
                    🔍 Preview
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="text-red-500 hover:underline text-sm"
                  >
                    🗑 Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* 📊 Modal Preview */}
      {previewData && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg max-w-2xl w-full shadow-xl">
            <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300 mb-4">
              Preview: {selectedFile}
            </h3>
            <table className="w-full text-xs text-left border">
              <tbody>
                {previewData.map((row, i) => (
                  <tr key={i}>
                    {row.map((cell, j) => (
                      <td key={j} className="border px-2 py-1">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            <button
              onClick={() => setPreviewData(null)}
              className="mt-4 px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default DashboardStats;
