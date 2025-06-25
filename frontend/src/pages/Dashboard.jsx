import { useContext, useEffect,useState } from "react";
import { UserContext } from "../context/UserContext.js";
import SidebarLayout from "../components/SidebarLayout.jsx";
const Dashboard = () => {
  const { user, fetchUser } = useContext(UserContext);
    const [uploadCount, setUploadCount] = useState(0);
    const [lastUpload, setLastUpload] = useState(null);

    useEffect(() => {
    const uploadHistory =
      JSON.parse(localStorage.getItem("uploadHistory")) || [];
    setUploadCount(uploadHistory.length);
    setLastUpload(uploadHistory[uploadHistory.length - 1]);
    }, []);

  useEffect(() => {
    if (!user) {
      fetchUser(); // 🔁 Attempt to refetch user on page load
    }
  }, [user, fetchUser]);

  return (
    <SidebarLayout>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-center relative px-4">
        <div className="w-full max-w-4xl mx-auto px-2 sm:px-4">
         {/* 🎯 Dashboard Welcome */}
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-indigo-700 dark:text-white">
              🚀 Welcome to ExcelAnalytics Dashboard!
            </h1>
            <p className="text-sm mt-2 text-gray-500 dark:text-gray-400">
              Manage your Excel uploads, previews, and activity history all in one place.
            </p>
          </div>
          {/* Upload Stats */}
      {uploadCount > 0 && (
        <div className="bg-white dark:bg-gray-800 max-w-lg mx-auto mt-10 p-6 rounded-lg shadow-md text-left">
          <h2 className="text-xl font-semibold text-indigo-600 dark:text-indigo-300 mb-4">
            📊 Upload Stats
          </h2>
          <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
            <li>📁 <strong>Total Uploads:</strong> {uploadCount}</li>
            <li>📝 <strong>Last File:</strong> {lastUpload?.name}</li>
            <li>🕒 <strong>Last Upload:</strong> {new Date(lastUpload?.timestamp).toLocaleString("en-IN")}</li>
          </ul>
        </div>
      )}
        </div>
      </div>
    </SidebarLayout>
  );
};

export default Dashboard;
