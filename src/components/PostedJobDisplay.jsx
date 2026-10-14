import React, { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

const PostedJobDisplay = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase.from("jobs").select("*");

      if (error) {
        throw error;
      }
      setJobs(data);
    } catch (error) {
      console.error("Error fetching jobs:", error.message);
      setError("Failed to fetch jobs.");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteJob = async (jobId) => {
    if (!window.confirm(`Are you sure you want to delete this job?`)) {
      return;
    }

    try {
      const { error } = await supabase.from("jobs").delete().eq("id", jobId);

      if (error) {
        throw error;
      }

      setJobs(jobs.filter((job) => job.id !== jobId));
      alert("Job deleted successfully!");
    } catch (error) {
      console.error("Error deleting job:", error.message);
      alert("Failed to delete job.");
    }
  };

  if (loading) {
    return <div>Loading jobs...</div>;
  }

  if (error) {
    return <div className="text-danger">{error}</div>;
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Posted Jobs</h2>
      {jobs.length === 0 ? (
        <p>No jobs posted yet.</p>
      ) : (
        <div className="row">
          {jobs.map((job) => (
            <div className="col-md-6 mb-4" key={job.id}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{job.title}</h5>
                  <p className="card-text">
                    <strong>Location:</strong> {job.location}
                  </p>
                  <p className="card-text">
                    <strong>Description:</strong> {job.description}
                  </p>
                  <button
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => handleDeleteJob(job.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostedJobDisplay;
