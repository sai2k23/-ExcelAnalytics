import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext.js";
import SidebarLayout from "../components/SidebarLayout.jsx";
import DashboardStats from "../components/DashboardStats.jsx";
import { toast } from "react-toastify";

const Profile = () => {
  const { user, fetchUser } = useContext(UserContext);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    bio: "",
    role: "Reader",
    location: "Detecting...",
  });
  // Detect location using IP API
  const fetchLocation = async () => {
    try {
      const res = await fetch("https://ipapi.co/json/");
      const data = await res.json();
      setFormData((prev) => ({
        ...prev,
        location: `${data.city}, ${data.region}, ${data.country_name}`,
      }));
    } catch (err) {
      console.error("Failed to fetch location", err);
      setFormData((prev) => ({
        ...prev,
        location: "Unknown",
      }));
    }
  };
  useEffect(() => {
    if (!user) {
      fetchUser(); // 🔁 Attempt to refetch user on page load
    }
    toast.success("🎉 Login Successful!");
    // Initialize form data
    setFormData({
      name: user?.name || "No Name",
      bio: "Enthusiastic about visualizing data and building full-stack web applications. Passionate learner in the world of MERN & AI!",
      role: user?.role || "Reader",
      location: "Detecting...",
    });

    fetchLocation(); // Get user location
  }, [user, fetchUser]);
   const handleSave = () => {
    toast.success("✅ Profile Updated!");
    setEditMode(false);
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <SidebarLayout>
      <div className="max-w-xl mx-auto mt-12 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
        <div className="flex flex-col items-center text-center">
          <img
            src={user?.picture || "/default-avatar.png"}
            alt="User Avatar"
            className="w-28 h-28 rounded-full border-4 border-indigo-500 shadow-md"
            referrerPolicy="no-referrer"
          />
          {editMode ? (
            <input
              className="text-xl font-bold mt-4 text-center border p-1 rounded w-1/2"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
            />
          ) : (
            <h2 className="text-2xl font-bold mt-4 text-indigo-700 dark:text-indigo-300">
              {formData.name}
            </h2>
          )}
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            ✉️ {user?.email}
          </p>
        </div>

        {/* 📋 Editable Fields */}
        <div className="mt-6 space-y-4 text-sm text-gray-700 dark:text-gray-300">
          {/* Role */}
          <div className="flex items-center gap-2">
            <span className="font-medium">🎓 Role:</span>
            {editMode ? (
              <select
                value={formData.role}
                onChange={(e) => handleChange("role", e.target.value)}
                className="bg-gray-100 p-1 rounded"
              >
                <option>Reader</option>
                <option>Analyst</option>
                <option>Developer</option>
              </select>
            ) : (
              <span className="bg-indigo-100 text-indigo-700 dark:bg-indigo-700 dark:text-white px-2 py-1 rounded-full text-xs font-semibold">
                {formData.role}
              </span>
            )}
          </div>

          {/* Bio */}
          <div>
            <span className="font-medium">🧾 Bio:</span>
            {editMode ? (
              <textarea
                rows={3}
                className="w-full p-2 mt-1 rounded border"
                value={formData.bio}
                onChange={(e) => handleChange("bio", e.target.value)}
              />
            ) : (
              <p className="mt-1 text-sm">{formData.bio}</p>
            )}
          </div>

          {/* Date Joined */}
          <div className="flex items-center gap-2">
            <span className="font-medium">📆 Joined On:</span>
            <span>
              {user?.createdAt
                ? new Date(user.createdAt).toLocaleDateString("en-IN", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })
                : "N/A"}
            </span>
          </div>

          {/* Location */}
          <div className="flex items-center gap-2">
            <span className="font-medium">📍 Location:</span>
            {editMode ? (
              <input
                type="text"
                className="border px-2 py-1 rounded w-2/3"
                value={formData.location}
                onChange={(e) => handleChange("location", e.target.value)}
              />
            ) : (
              <span>{formData.location}</span>
            )}
          </div>
        </div>

        {/* ✏️ Edit/Save Buttons */}
        <div className="mt-6 text-center">
          {editMode ? (
            <button
              onClick={handleSave}
              className="bg-green-600 text-white px-4 py-2 rounded shadow hover:bg-green-700"
            >
              💾 Save
            </button>
          ) : (
            <button
              onClick={() => setEditMode(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
            >
              ✏️ Edit Profile
            </button>
          )}
        </div>

        {/* 📈 Upload History */}
        <div className="mt-10">
          <DashboardStats />
        </div>
      </div>
    </SidebarLayout>
  );
};

export default Profile;
