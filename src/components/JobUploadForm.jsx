import React, { useState } from "react";
import { supabase } from "../supabaseClient";

const JobUploadForm = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [experience, setExperience] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");
  const [requirements, setRequirements] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(""); // ✅ FIXED
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      setLoading(true);

      const requirementsArray = requirements
        .split(",")
        .map((req) => req.trim())
        .filter(Boolean);

      const { error: supabaseError } = await supabase
        .from("jobs")
        .insert([
          {
            title: jobTitle,
            experience,
            location,
            type: jobType,
            requirements: requirementsArray,
          },
        ]);

      if (supabaseError) {
        throw supabaseError;
      }

      setMessage("Job uploaded successfully!");
      setJobTitle("");
      setExperience("");
      setLocation("");
      setJobType("");
      setRequirements("");
    } catch (err) {
      setError(`Error uploading job: ${err.message}`);
      console.error("Error uploading job:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-light rounded p-4">
      <h4 className="mb-4">Upload New Job</h4>

      {message && <div className="alert alert-success">{message}</div>}
      {error && <div className="alert alert-danger">{error}</div>}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Job Title</label>
          <input
            type="text"
            className="form-control"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Experience</label>
          <input
            type="text"
            className="form-control"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Location</label>
          <input
            type="text"
            className="form-control"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Job Type</label>
          <input
            type="text"
            className="form-control"
            value={jobType}
            onChange={(e) => setJobType(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Requirements (comma separated)</label>
          <textarea
            className="form-control"
            rows="4"
            value={requirements}
            onChange={(e) => setRequirements(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="btn btn-outline-primary"
          disabled={loading}
        >
          {loading ? "Uploading..." : "Upload Job"}
        </button>
      </form>
    </div>
  );
};

export default JobUploadForm;
