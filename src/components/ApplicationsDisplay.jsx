import React, { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

const ApplicationsDisplay = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  /* ================= FETCH APPLICATIONS ================= */
  useEffect(() => {
    const fetchApplications = async () => {
      try {
        setLoading(true);

        const { data, error } = await supabase
          .from("applications")
          .select("*")
          .order("created_at", { ascending: false });

        if (error) throw error;

        setApplications(data || []);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch applications.");
      } finally {
        setLoading(false);
      }
    };

    fetchApplications();
  }, []);

  /* ================= DELETE APPLICATION ================= */
  const deleteApplication = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this application?"
    );
    if (!confirmDelete) return;

    try {
      const { error } = await supabase
        .from("applications")
        .delete()
        .eq("id", id);

      if (error) throw error;

      // Remove from UI
      setApplications((prev) =>
        prev.filter((app) => app.id !== id)
      );
    } catch (err) {
      console.error(err);
      alert("Failed to delete application.");
    }
  };

  if (loading) {
    return <div className="bg-light rounded p-4">Loading applications...</div>;
  }

  if (error) {
    return (
      <div className="bg-light rounded p-4 text-danger">
        {error}
      </div>
    );
  }

  return (
    <div className="bg-light rounded p-4">
      <h4 className="mb-4">Job Applications</h4>

      {applications.length === 0 ? (
        <p>No applications found.</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-striped align-middle">
            <thead>
              <tr>
                <th>Job Role</th>
                <th>Applicant</th>
                <th>Email</th>
                <th>Experience</th>
                <th>Resume</th>
                <th>Applied On</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {applications.map((app) => (
                <tr key={app.id}>
                  <td>{app.role}</td>
                  <td>{app.name}</td>
                  <td>{app.email}</td>
                  <td>{app.experience_years} yrs</td>
                  <td>
                    <a
                      href={app.resume_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-outline-primary"
                    >
                      View Resume
                    </a>
                  </td>
                  <td>
                    {new Date(app.created_at).toLocaleDateString()}
                  </td>
                  <td>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => deleteApplication(app.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      )}
    </div>
  );
};

export default ApplicationsDisplay;
