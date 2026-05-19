import React, { useEffect, useMemo, useState } from "react";
import { supabase } from "../supabaseClient";

const JOBS_PER_PAGE_DESKTOP = 6;

export default function Career() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [jobsPerPage, setJobsPerPage] = useState(JOBS_PER_PAGE_DESKTOP);
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [selectedRole, setSelectedRole] = useState("");
  const [form, setForm] = useState({ name: "", email: "", role: "", experienceYears: "", education: "", age: "", languages: "", message: "", resume: null });

  useEffect(() => {
    supabase.from("jobs").select("*").order("created_at", { ascending: false })
      .then(({ data, error }) => {
        if (error) setError("Failed to load job openings.");
        else setJobs(data || []);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setJobsPerPage(w < 768 ? 1 : w < 992 ? 2 : JOBS_PER_PAGE_DESKTOP);
      setCurrentPage(1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const totalPages = Math.ceil(jobs.length / jobsPerPage);
  const paginated = useMemo(() => {
    const s = (currentPage - 1) * jobsPerPage;
    return jobs.slice(s, s + jobsPerPage);
  }, [jobs, currentPage, jobsPerPage]);

  const roleOptions = useMemo(() => jobs.map((j) => j.title), [jobs]);

  const openModal = (role = "") => {
    setSelectedRole(role);
    setForm((p) => ({ ...p, role }));
    setShowModal(true);
    document.body.style.overflow = "hidden";
  };
  const closeModal = () => { setShowModal(false); document.body.style.overflow = ""; };

  const onChange = (e) => {
    const { name, value, files } = e.target;
    setForm((p) => ({ ...p, [name]: name === "resume" ? files[0] : value }));
  };

  const submitForm = async (e) => {
    e.preventDefault();
    if (!form.resume) { alert("Please upload your resume"); return; }
    try {
      const ext = form.resume.name.split(".").pop();
      const filePath = `applications/${Date.now()}-${Math.random()}.${ext}`;
      const { error: upErr } = await supabase.storage.from("resumes").upload(filePath, form.resume);
      if (upErr) throw upErr;
      const { data } = supabase.storage.from("resumes").getPublicUrl(filePath);
      await supabase.from("applications").insert([{
        name: form.name, email: form.email, role: form.role || selectedRole,
        experience_years: Number(form.experienceYears), education: form.education,
        age: Number(form.age), languages: form.languages, message: form.message,
        resume_url: data.publicUrl,
      }]);
      alert("Your CV has been submitted successfully!");
      closeModal();
    } catch (err) {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="section services-bg" id="career">
      <div className="container">
        <div className="text-center" style={{ marginBottom: 56 }}>
          <div className="pill-label">Career Opportunities</div>
          <h2 className="section-title">Build Your Global Career</h2>
          <p className="section-sub">
            Explore international opportunities across healthcare, engineering, and skilled trades.
            Submit your CV and our team will match you with the right role.
          </p>
        </div>

        {loading && <p className="text-center" style={{ padding: "48px 0", color: "var(--muted)" }}>Loading opportunities...</p>}
        {error && <div style={{ background: "#fef2f2", border: "1px solid #fecaca", borderRadius: "var(--radius-sm)", padding: "16px 20px", color: "#dc2626", marginBottom: 24 }}>{error}</div>}

        {!loading && paginated.length === 0 && !error && (
          <div style={{ textAlign: "center", padding: "64px 0" }}>
            <p style={{ color: "var(--muted)", marginBottom: 24 }}>No job listings at the moment.</p>
            <button className="btn btn-primary" onClick={() => openModal("")}>Submit Your CV Anyway →</button>
          </div>
        )}

        <div className="grid-3">
          {paginated.map((job) => (
            <div className="job-card" key={job.id}>
              <span className="job-tag">{job.type || "Full Time"}</span>
              <h3>{job.title}</h3>
              <p className="job-meta">
                📍 {job.location} &nbsp;·&nbsp; 💼 {job.experience}
              </p>
              {job.requirements?.length > 0 && (
                <>
                  <p style={{ fontSize: "0.82rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--muted)", marginBottom: 8 }}>Requirements</p>
                  <ul className="job-reqs">
                    {job.requirements.map((r, i) => <li key={i}>{r}</li>)}
                  </ul>
                </>
              )}
              <button className="btn btn-outline" style={{ width: "100%" }} onClick={() => openModal(job.title)}>
                Apply Now →
              </button>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="pagination">
            <button className="page-btn wide" disabled={currentPage === 1} onClick={() => setCurrentPage(p => p - 1)}>← Prev</button>
            {Array.from({ length: totalPages }).map((_, i) => (
              <button key={i} className={`page-btn ${currentPage === i + 1 ? "active" : ""}`} onClick={() => setCurrentPage(i + 1)}>{i + 1}</button>
            ))}
            <button className="page-btn wide" disabled={currentPage === totalPages} onClick={() => setCurrentPage(p => p + 1)}>Next →</button>
          </div>
        )}

        <div className="text-center" style={{ marginTop: 48 }}>
          <p style={{ color: "var(--muted)", marginBottom: 16 }}>Don't see your role listed? We're always looking for great talent.</p>
          <button className="btn btn-primary" onClick={() => openModal("")}>Submit Your CV →</button>
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={(e) => e.target.classList.contains("modal-overlay") && closeModal()}>
          <div className="modal-card">
            <div className="modal-header">
              <div>
                <h2>Submit Your CV</h2>
                {selectedRole && <p style={{ fontSize: "0.9rem", color: "var(--muted)", marginTop: 4 }}>Applying for: <strong>{selectedRole}</strong></p>}
              </div>
              <button className="modal-close" onClick={closeModal}>✕</button>
            </div>

            <form onSubmit={submitForm}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                {[
                  { name: "name", label: "Full Name", type: "text", required: true, full: false },
                  { name: "email", label: "Email Address", type: "email", required: true, full: false },
                  { name: "experienceYears", label: "Experience (Years)", type: "number", required: true, full: false },
                  { name: "age", label: "Age", type: "number", required: true, full: false },
                  { name: "education", label: "Education", type: "text", required: true, full: false },
                  { name: "languages", label: "Languages Known", type: "text", required: true, full: false },
                ].map((f) => (
                  <div key={f.name} className="form-group" style={f.full ? { gridColumn: "1 / -1" } : {}}>
                    <label>{f.label}</label>
                    <input type={f.type} name={f.name} onChange={onChange} required={f.required} min={f.name === "age" ? 18 : undefined} />
                  </div>
                ))}

                <div className="form-group" style={{ gridColumn: "1 / -1" }}>
                  <label>Job Role</label>
                  <select name="role" value={form.role || selectedRole} onChange={onChange} required>
                    <option value="" disabled>Select a role</option>
                    {roleOptions.map((r) => <option key={r} value={r}>{r}</option>)}
                  </select>
                </div>

                <div className="form-group" style={{ gridColumn: "1 / -1" }}>
                  <label>Message (Optional)</label>
                  <textarea name="message" onChange={onChange} style={{ minHeight: 90 }} />
                </div>

                <div className="form-group" style={{ gridColumn: "1 / -1" }}>
                  <label>Upload Resume (PDF, DOC)</label>
                  <input type="file" name="resume" accept=".pdf,.doc,.docx" onChange={onChange} required />
                </div>

                <div style={{ gridColumn: "1 / -1", display: "flex", gap: 12 }}>
                  <button className="btn btn-primary" type="submit">Submit Application →</button>
                  <button className="btn btn-outline" type="button" onClick={closeModal}>Cancel</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
