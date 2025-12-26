import React, { useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import JobUploadForm from "../components/JobUploadForm";
import ApplicationsDisplay from "../components/ApplicationsDisplay";
import VideoUpload from "../components/VideoUpload";
import UploadedVideoDisplay from "../components/UploadedVideoDisplay";
import PostedJobDisplay from "../components/PostedJobDisplay";
import "../components/Admin.css";

const AdminPage = () => {
  const [activeTab, setActiveTab] = useState("uploadJob");

  const renderContent = () => {
    switch (activeTab) {
      case "uploadJob":
        return <JobUploadForm />;
      case "viewApplications":
        return <ApplicationsDisplay />;
      case "uploadVideo":
        return <VideoUpload />;
      case "uploadedVideoDisplay":
        return <UploadedVideoDisplay />;
      case "postedJobDisplay":
        return <PostedJobDisplay />;
      default:
        return <JobUploadForm />;
    }
  };

  return (
    <div className="container-fluid py-5 admin-panel-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <AdminSidebar
              setActiveTab={setActiveTab}
              activeTab={activeTab}
            />
          </div>

          <div className="col-lg-9 admin-content-area">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
