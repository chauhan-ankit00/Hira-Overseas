import React from "react";
import { supabase } from "../supabaseClient";
import { useNavigate } from "react-router-dom";

const AdminSidebar = ({ setActiveTab, activeTab }) => {
  const tabs = [
    { id: "uploadJob", name: "Upload Job" },
    { id: "viewApplications", name: "View Applications" },
    { id: "uploadVideo", name: "Upload Video" },
    { id: "uploadedVideoDisplay", name: "Uploaded video" },
    { id: "postedJobDisplay", name: "Posted Job" },
  ];

  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setActiveTab("uploadJob"); // optional reset
    navigate("/");
  };

  return (
    <div className="bg-light rounded p-4 h-100">
      <h4 className="mb-4">Admin Panel</h4>

      <ul className="nav flex-column">
        {tabs.map((tab) => (
          <li className="nav-item" key={tab.id}>
            <button
              type="button"
              className={`nav-link text-start btn btn-link w-100 ${
                activeTab === tab.id
                  ? "fw-bold text-primary"
                  : "text-dark"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.name}
            </button>
          </li>
        ))}
      </ul>

      {/* ✅ LOGOUT BUTTON */}
      <div className="mt-4">
        <button
          className="btn btn-outline-danger w-100"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default AdminSidebar;
