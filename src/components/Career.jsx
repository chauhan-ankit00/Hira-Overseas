

import React, { useEffect, useMemo, useState } from "react";
import { supabase } from "../supabaseClient";
import "./Career.css";

export default function CareerPage() {
  /* ================= STATES ================= */
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Responsive pagination
  const [jobsPerPage, setJobsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);

  // Modal
  const [showModal, setShowModal] = useState(false);
  const [selectedRole, setSelectedRole] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "",
    experienceYears: "",
    education: "",
    age: "",
    languages: "",
    message: "",
    resume: null,
  });

  /* ================= FETCH JOBS ================= */
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const { data, error } = await supabase
          .from("jobs")
          .select("*")
          .order("created_at", { ascending: false });

        if (error) throw error;

        setJobs(data || []);
        setCurrentPage(1);
      } catch (err) {
        console.error(err);
        setError("Failed to load job openings.");
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  /* ================= RESPONSIVE JOBS PER PAGE ================= */
  useEffect(() => {
    const updateJobsPerPage = () => {
      const width = window.innerWidth;

      if (width < 768) {
        setJobsPerPage(1); // Mobile
      } else if (width < 992) {
        setJobsPerPage(2); // Tablet
      } else {
        setJobsPerPage(6); // Desktop
      }
    };

    updateJobsPerPage();
    window.addEventListener("resize", updateJobsPerPage);

    return () => window.removeEventListener("resize", updateJobsPerPage);
  }, []);

  // Reset page when layout changes
  useEffect(() => {
    setCurrentPage(1);
  }, [jobsPerPage]);

  /* ================= PAGINATION LOGIC ================= */
  const totalPages = Math.ceil(jobs.length / jobsPerPage);

  const paginatedJobs = useMemo(() => {
    const start = (currentPage - 1) * jobsPerPage;
    const end = start + jobsPerPage;
    return jobs.slice(start, end);
  }, [jobs, currentPage, jobsPerPage]);

  const roleOptions = useMemo(() => jobs.map((j) => j.title), [jobs]);

  /* ================= MODAL HANDLERS ================= */
  const openModal = (role = "") => {
    setSelectedRole(role);
    setForm((prev) => ({ ...prev, role }));
    setShowModal(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setShowModal(false);
    document.body.style.overflow = "";
  };

  const onChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === "resume" ? files[0] : value,
    }));
  };

  /* ================= SUBMIT FORM ================= */
  const submitForm = async (e) => {
    e.preventDefault();

    try {
      if (!form.resume) {
        alert("Please upload resume");
        return;
      }

      const ext = form.resume.name.split(".").pop();
      const fileName = `${Date.now()}-${Math.random()}.${ext}`;
      const filePath = `applications/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from("resumes")
        .upload(filePath, form.resume);

      if (uploadError) throw uploadError;

      const { data } = supabase.storage
        .from("resumes")
        .getPublicUrl(filePath);

      await supabase.from("applications").insert([
        {
          name: form.name,
          email: form.email,
          role: form.role || selectedRole,
          experience_years: Number(form.experienceYears),
          education: form.education,
          age: Number(form.age),
          languages: form.languages,
          message: form.message,
          resume_url: data.publicUrl,
        },
      ]);

      alert("Your CV has been submitted successfully!");
      closeModal();
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    }
  };

  /* ================= RENDER ================= */
  return (
    <div className="container-xxl py-6" id="career">
      <div className="container">

        {/* HEADER */}
        <div className="text-center mb-5">
          <div className="d-inline-block border rounded-pill text-primary px-4 mb-3">
            Build Your Global Career
          </div>
          <h2 style={{ fontFamily: "roboto" }}>
            Submit your CV and access international opportunities
          </h2>
        </div>

        {/* STATES */}
        {loading && <div className="text-center py-5">Loading jobs...</div>}
        {error && <div className="alert alert-danger">{error}</div>}

        {!loading && paginatedJobs.length === 0 && (
          <div className="text-center py-5">No jobs available.</div>
        )}

        {/* JOB CARDS */}
        <div className="row g-4">
          {paginatedJobs.map((job) => (
            <div key={job.id} className="col-12 col-md-6 col-lg-4 d-flex">
              <div className="service-item rounded h-100 w-100 p-4 d-flex flex-column">
                <div className="flex-grow-1">
                  <h5 className="fw-bold">{job.title}</h5>
                  <p><strong>Location:</strong> {job.location}</p>
                  <p>
                    <strong>Type:</strong> {job.type} |{" "}
                    <strong>Exp:</strong> {job.experience}
                  </p>

                  <h6 className="fw-bold">Requirements</h6>
                  <ul>
                    {job.requirements?.map((req, i) => (
                      <li key={i}>{req}</li>
                    ))}
                  </ul>
                </div>

                <button
                  className="btn btn-outline-primary rounded-pill mt-auto"
                  onClick={() => openModal(job.title)}
                >
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* PAGINATION */}
        {totalPages > 1 && (
          <div className="d-flex justify-content-center mt-5 gap-2 flex-wrap">
            <button
              className="btn btn-outline-primary rounded-pill"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => p - 1)}
            >
              Prev
            </button>

            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                className={`btn rounded-pill ${currentPage === i + 1
                    ? "btn-primary"
                    : "btn-outline-primary"
                  }`}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}

            <button
              className="btn btn-outline-primary rounded-pill"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => p + 1)}
            >
              Next
            </button>
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-5">
          <button
            className="btn btn-outline-primary rounded-pill px-4"
            onClick={() => openModal("")}
          >
            Submit CV →
          </button>
        </div>
      </div>

      {/* MODAL */}


      {showModal && (
        <div
          className="cv-modal-backdrop"
          onClick={(e) =>
            e.target.classList.contains("cv-modal-backdrop") && closeModal()
          }
        >
          <div className="cv-modal-card">
            <div className="d-flex justify-content-between mb-3">
              <h4 className="fw-bold">Submit Your CV</h4>
              <button
                className="btn btn-sm btn-outline-secondary rounded-pill"
                onClick={closeModal}
              >
                Close
              </button>
            </div>

            <form onSubmit={submitForm}>
              <div className="row g-3">

                <div className="col-md-6">
                  <div className="form-floating">
                    <input className="form-control" name="name" onChange={onChange} required />
                    <label>Your Name</label>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-floating">
                    <input type="email" className="form-control" name="email" onChange={onChange} required />
                    <label>Your Email</label>
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-floating">
                    <select
                      className="form-select"
                      name="role"
                      value={form.role || selectedRole}
                      onChange={onChange}
                      required
                    >
                      <option value="" disabled>Select a role</option>
                      {roleOptions.map((r) => (
                        <option key={r} value={r}>{r}</option>
                      ))}
                    </select>
                    <label>Job Role</label>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-floating">
                    <input type="number" className="form-control" name="experienceYears" onChange={onChange} required />
                    <label>Experience (Years)</label>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-floating">
                    <input type="number" className="form-control" name="age" min="18" onChange={onChange} required />
                    <label>Age (Years)</label>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-floating">
                    <input className="form-control" name="education" onChange={onChange} required />
                    <label>Education</label>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-floating">
                    <input className="form-control" name="languages" onChange={onChange} required />
                    <label>Languages Known</label>
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-floating">
                    <textarea className="form-control" style={{ height: 100 }} name="message" onChange={onChange} />
                    <label>Message (Optional)</label>
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-floating">
                    <input type="file" className="form-control" name="resume" accept=".pdf,.doc,.docx" onChange={onChange} required />
                    <label>Upload Resume</label>
                  </div>
                </div>

                <div className="col-12 d-flex gap-2">
                  <button className="btn btn-primary rounded-pill px-4" type="submit">
                    Submit
                  </button>
                  <button className="btn btn-outline-secondary rounded-pill px-4" type="button" onClick={closeModal}>
                    Cancel
                  </button>
                </div>

              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
