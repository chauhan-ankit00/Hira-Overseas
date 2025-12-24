// import React, { useMemo, useState } from "react";

// export default function CareerPage() {
//   const jobs = [
//     {
//       role: "Registered Nurse (ICU)",
//       location: "Dubai, United Arab Emirates",
//       type: "Full-Time",
//       experience: "2+ years ICU",
//       requirements: [
//         "Valid DHA/MOH/HAAD eligibility or willing to process",
//         "B.Sc. Nursing + Registration",
//         "BLS/ACLS preferred",
//       ],
//     },
//     {
//       role: "Mechanical Engineer",
//       location: "Dammam, Saudi Arabia",
//       type: "Full-Time",
//       experience: "3–5 years",
//       requirements: [
//         "Degree in Mechanical Engineering",
//         "Maintenance & commissioning exposure",
//         "Gulf experience preferred",
//       ],
//     },
//     {
//       role: "Radiology Technician",
//       location: "Doha, Qatar",
//       type: "Full-Time",
//       experience: "2+ years",
//       requirements: [
//         "Diploma/Degree in Radiography",
//         "MRI/CT handling experience",
//         "Prometric/Dataflow (or ready to process)",
//       ],
//     },
//     {
//       role: "HVAC Technician",
//       location: "Muscat, Oman",
//       type: "Full-Time",
//       experience: "2–4 years",
//       requirements: [
//         "Installation & troubleshooting",
//         "Chillers/Package units exposure",
//         "Trade test clearance",
//       ],
//     },
//     {
//       role: "Staff Nurse (General Ward)",
//       location: "Kuwait City, Kuwait",
//       type: "Full-Time",
//       experience: "1–3 years",
//       requirements: [
//         "GNM/B.Sc. Nursing",
//         "Prometric/Dataflow in progress or completed",
//         "Immediate joiners preferred",
//       ],
//     },
//     {
//       role: "Electrician",
//       location: "Manama, Bahrain",
//       type: "Full-Time",
//       experience: "3+ years",
//       requirements: [
//         "Industrial/site experience",
//         "Panel wiring & safety knowledge",
//         "Trade certificate preferred",
//       ],
//     },
//   ];

//   const roleOptions = useMemo(() => jobs.map(j => j.role), [jobs]);

//   // Modal state
//   const [showModal, setShowModal] = useState(false);
//   const [selectedRole, setSelectedRole] = useState("");
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     role: "",
//     message: "",
//     resume: null,
//   });

//   const openModal = (role = "") => {
//     setSelectedRole(role);
//     setForm(prev => ({ ...prev, role }));
//     setShowModal(true);
//     // Prevent body scroll
//     if (typeof document !== "undefined") document.body.style.overflow = "hidden";
//   };

//   const closeModal = () => {
//     setShowModal(false);
//     if (typeof document !== "undefined") document.body.style.overflow = "";
//   };

//   const onChange = (e) => {
//     const { name, value, files } = e.target;
//     if (name === "resume") {
//       setForm(prev => ({ ...prev, resume: files?.[0] || null }));
//     } else {
//       setForm(prev => ({ ...prev, [name]: value }));
//     }
//   };

//   const submitForm = (e) => {
//     e.preventDefault();
//     // TODO: hook up to your API / Supabase / email service
//     console.log("Submitting CV:", form);
//     // simple UX
//     alert("Thanks! Your CV has been submitted.");
//     closeModal();
//   };

//   return (
//     <div className="container-xxl py-6" id="career">
//       <div className="container">
//         {/* Header */}
//         <div
//           className="mx-auto text-center wow fadeInUp"
//           data-wow-delay="0.1s"
//           style={{ maxWidth: "780px" }}
//         >
//           <div className="d-inline-block border rounded-pill text-primary px-4 mb-3">
//             Build Your Global Career
//           </div>
//           <h2 className="mb-3" style={{ fontFamily: "roboto" }}>
//             Submit your CV and access international opportunities in healthcare, engineering,
//             technical, and skilled trades.
//           </h2>

//         </div>

        

//         {/* Available Opportunities */}
//         <div className="mt-5 pt-4">
//           <h3
//             className="mb-4 text-center"
//             style={{ fontFamily: "roboto", fontWeight: 700, color: "#13203B" }}
//           >
//             Available Opportunities
//           </h3>

//           <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center">
//             {jobs.map((job, idx) => (
//               <div key={idx} className="col d-flex">
//                 <div
//                   className="service-item rounded h-100 d-flex flex-column w-100"
//                   style={{ padding: "20px" }}
//                 >
//                   <div className="p-4 flex-grow-1">
//                     <h5
//                       className="mb-2"
//                       style={{ fontFamily: "roboto", fontWeight: 700, color: "#13203B" }}
//                     >
//                       {job.role}
//                     </h5>

//                     <p className="mb-2" style={{ fontSize: 15, color: "#6c757d" }}>
//                       <strong>Location:</strong> {job.location}
//                     </p>
//                     <p className="mb-3" style={{ fontSize: 15, color: "#6c757d" }}>
//                       <strong>Type:</strong> {job.type} &nbsp; | &nbsp; <strong>Experience:</strong>{" "}
//                       {job.experience}
//                     </p>

//                     <h6 className="mb-2" style={{ fontWeight: 700 }}>Requirements</h6>
//                     <ul style={{ fontSize: 15, marginBottom: 0 }}>
//                       {job.requirements.map((req, i) => (
//                         <li key={i}>{req}</li>
//                       ))}
//                     </ul>
//                   </div>

                  
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Bottom Submit CV CTA */}
//           <div className="text-center mt-5">
//             <button
//               type="button"
//               onClick={() => openModal("")}
//               className="btn btn-primary rounded-pill px-4 py-2"
//               style={{ fontWeight: 600 }}
//             >
//               Submit CV →
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* ===== Modal (custom, no external JS) ===== */}
//       {showModal && (
//         <div
//           role="dialog"
//           aria-modal="true"
//           className="cv-modal-backdrop"
//           onClick={(e) => {
//             // close if backdrop clicked
//             if (e.target.classList.contains("cv-modal-backdrop")) closeModal();
//           }}
//           style={{
//             position: "fixed",
//             inset: 0,
//             background: "rgba(0,0,0,0.5)",
//             zIndex: 1050,
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             padding: "16px",
//           }}
//         >
//           <div
//             className="service-item rounded"
//             style={{
//               width: "100%",
//               maxWidth: 640,
//               padding: 20,
//               background: "var(--bs-body-bg, #fff)",
//             }}
//           >
//             <div className="p-4">
//               <div className="d-flex justify-content-between align-items-center mb-3">
//                 <h4 className="m-0" style={{ fontFamily: "roboto", fontWeight: 700 }}>
//                   Submit Your CV
//                 </h4>
//                 <button
//                   type="button"
//                   aria-label="Close"
//                   className="btn btn-sm btn-outline-secondary rounded-pill"
//                   onClick={closeModal}
//                 >
//                   Close
//                 </button>
//               </div>

//               <form onSubmit={submitForm}>
//                 <div className="row g-3">
//                   {/* Name */}
//                   <div className="col-md-6">
//                     <div className="form-floating">
//                       <input
//                         type="text"
//                         className="form-control"
//                         id="cv-name"
//                         name="name"
//                         placeholder="Your Name"
//                         value={form.name}
//                         onChange={onChange}
//                         required
//                       />
//                       <label htmlFor="cv-name">Your Name</label>
//                     </div>
//                   </div>

//                   {/* Email */}
//                   <div className="col-md-6">
//                     <div className="form-floating">
//                       <input
//                         type="email"
//                         className="form-control"
//                         id="cv-email"
//                         name="email"
//                         placeholder="Your Email"
//                         value={form.email}
//                         onChange={onChange}
//                         required
//                       />
//                       <label htmlFor="cv-email">Your Email</label>
//                     </div>
//                   </div>

//                   {/* Job Role */}
//                   <div className="col-12">
//                     <div className="form-floating">
//                       <select
//                         className="form-select"
//                         id="cv-role"
//                         name="role"
//                         value={form.role || selectedRole}
//                         onChange={onChange}
//                         required
//                       >
//                         <option value="" disabled>
//                           Select a role
//                         </option>
//                         {roleOptions.map((r) => (
//                           <option key={r} value={r}>
//                             {r}
//                           </option>
//                         ))}
//                       </select>
//                       <label htmlFor="cv-role">Job Role</label>
//                     </div>
//                   </div>

//                   {/* Message */}
//                   <div className="col-12">
//                     <div className="form-floating">
//                       <textarea
//                         className="form-control"
//                         id="cv-message"
//                         name="message"
//                         placeholder="Message"
//                         style={{ height: 120 }}
//                         value={form.message}
//                         onChange={onChange}
//                       />
//                       <label htmlFor="cv-message">Message</label>
//                     </div>
//                   </div>

//                   {/* Resume Upload */}
//                   <div className="col-12">
//                     <div className="form-floating">
//                       <input
//                         type="file"
//                         className="form-control"
//                         id="cv-resume"
//                         name="resume"
//                         accept=".pdf,.doc,.docx"
//                         onChange={onChange}
//                         required
//                       />
//                       <label htmlFor="cv-resume">Upload Resume / CV</label>
//                     </div>
//                     <small className="text-muted">
//                       Accepted: PDF, DOC, DOCX. Max ~10MB (configure on backend).
//                     </small>
//                   </div>

//                   <div className="col-12 d-flex gap-2">
//                     <button className="btn btn-primary rounded-pill px-4" type="submit">
//                       Submit
//                     </button>
//                     <button
//                       type="button"
//                       className="btn btn-outline-secondary rounded-pill px-4"
//                       onClick={closeModal}
//                     >
//                       Cancel
//                     </button>
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       )}
//       {/* ===== /Modal ===== */}
//     </div>
//   );
// }


import React, { useMemo, useState } from "react";

export default function CareerPage() {
  const jobs = [
    {
      role: "Registered Nurse (ICU)",
      location: "Dubai, United Arab Emirates",
      type: "Full-Time",
      experience: "2+ years ICU",
      requirements: [
        "Valid DHA/MOH/HAAD eligibility or willing to process",
        "B.Sc. Nursing + Registration",
        "BLS/ACLS preferred",
      ],
    },
    {
      role: "Mechanical Engineer",
      location: "Dammam, Saudi Arabia",
      type: "Full-Time",
      experience: "3–5 years",
      requirements: [
        "Degree in Mechanical Engineering",
        "Maintenance & commissioning exposure",
        "Gulf experience preferred",
      ],
    },
    {
      role: "Radiology Technician",
      location: "Doha, Qatar",
      type: "Full-Time",
      experience: "2+ years",
      requirements: [
        "Diploma/Degree in Radiography",
        "MRI/CT handling experience",
        "Prometric/Dataflow (or ready to process)",
      ],
    },
    {
      role: "HVAC Technician",
      location: "Muscat, Oman",
      type: "Full-Time",
      experience: "2–4 years",
      requirements: [
        "Installation & troubleshooting",
        "Chillers/Package units exposure",
        "Trade test clearance",
      ],
    },
    {
      role: "Staff Nurse (General Ward)",
      location: "Kuwait City, Kuwait",
      type: "Full-Time",
      experience: "1–3 years",
      requirements: [
        "GNM/B.Sc. Nursing",
        "Prometric/Dataflow in progress or completed",
        "Immediate joiners preferred",
      ],
    },
    {
      role: "Electrician",
      location: "Manama, Bahrain",
      type: "Full-Time",
      experience: "3+ years",
      requirements: [
        "Industrial/site experience",
        "Panel wiring & safety knowledge",
        "Trade certificate preferred",
      ],
    },
  ];

  const roleOptions = useMemo(() => jobs.map(j => j.role), [jobs]);

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

  const openModal = (role = "") => {
    setSelectedRole(role);
    setForm(prev => ({ ...prev, role }));
    setShowModal(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setShowModal(false);
    document.body.style.overflow = "";
  };

  const onChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "resume") {
      setForm(prev => ({ ...prev, resume: files[0] }));
    } else {
      setForm(prev => ({ ...prev, [name]: value }));
    }
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log("Submitting CV:", form);
    alert("Thanks! Your CV has been submitted.");
    closeModal();
  };

  return (
    <div className="container-xxl py-6" id="career">
      <div className="container">

        {/* ===== Header ===== */}
        <div className="mx-auto text-center mb-5" style={{ maxWidth: 780 }}>
          <div className="d-inline-block border rounded-pill text-primary px-4 mb-3">
            Build Your Global Career
          </div>
          <h2 style={{ fontFamily: "roboto" }}>
            Submit your CV and access international opportunities in healthcare,
            engineering, technical, and skilled trades.
          </h2>
        </div>

        {/* ===== JOB CARDS ===== */}
        <div className="mt-5 pt-4">
          <h3
            className="mb-4 text-center"
            style={{ fontFamily: "roboto", fontWeight: 700, color: "#13203B" }}
          >
            Available Opportunities
          </h3>

          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {jobs.map((job, idx) => (
              <div key={idx} className="col d-flex">
                <div
                  className="service-item rounded h-100 d-flex flex-column w-100"
                  style={{ padding: 20 }}
                >
                  <div className="flex-grow-1">
                    <h5
                      style={{
                        fontFamily: "roboto",
                        fontWeight: 700,
                        color: "#13203B",
                      }}
                    >
                      {job.role}
                    </h5>

                    <p className="mb-2 text-muted">
                      <strong>Location:</strong> {job.location}
                    </p>
                    <p className="mb-3 text-muted">
                      <strong>Type:</strong> {job.type} |{" "}
                      <strong>Experience:</strong> {job.experience}
                    </p>

                    <h6 style={{ fontWeight: 700 }}>Requirements</h6>
                    <ul className="mb-3">
                      {job.requirements.map((req, i) => (
                        <li key={i}>{req}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Apply Button */}
                  <button
                    className="btn btn-outline-primary rounded-pill mt-auto"
                    onClick={() => openModal(job.role)}
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-5">
            <button
              className="btn btn-primary rounded-pill px-4 py-2"
              onClick={() => openModal("")}
            >
              Submit CV →
            </button>
          </div>
        </div>
      </div>

      {/* ===== MODAL ===== */}
      {showModal && (
        <div
          className="cv-modal-backdrop"
          onClick={(e) =>
            e.target.classList.contains("cv-modal-backdrop") && closeModal()
          }
          style={{
            position: "fixed",
            inset: 0,
            background: "white",
            zIndex: 1050,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 16,
          }}
        >
          <div className="service-item rounded" style={{ maxWidth: 680, width: "100%" }}>
            <div className="p-4">

              <div className="d-flex justify-content-between mb-3">
                <h4 style={{ fontFamily: "roboto", fontWeight: 700 }}>
                  Submit Your CV
                </h4>
                <button
                  className="btn btn-sm btn-outline-secondary rounded-pill"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>

              <form onSubmit={submitForm}>
                <div className="row g-3">

                  {/* Name */}
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={form.name}
                        onChange={onChange}
                        required
                      />
                      <label>Your Name</label>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={form.email}
                        onChange={onChange}
                        required
                      />
                      <label>Your Email</label>
                    </div>
                  </div>

                  {/* Job Role */}
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
                        {roleOptions.map(r => (
                          <option key={r} value={r}>{r}</option>
                        ))}
                      </select>
                      <label>Job Role</label>
                    </div>
                  </div>

                  {/* Experience */}
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="number"
                        className="form-control"
                        name="experienceYears"
                        value={form.experienceYears}
                        onChange={onChange}
                        min="0"
                        required
                      />
                      <label>Experience (Years)</label>
                    </div>
                  </div>

                  {/* Age */}
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="number"
                        className="form-control"
                        name="age"
                        value={form.age}
                        onChange={onChange}
                        min="18"
                        required
                      />
                      <label>Age (Years)</label>
                    </div>
                  </div>

                  {/* Education */}
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        name="education"
                        value={form.education}
                        onChange={onChange}
                        required
                      />
                      <label>Education</label>
                    </div>
                  </div>

                  {/* Languages */}
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        name="languages"
                        value={form.languages}
                        onChange={onChange}
                        placeholder="English, Arabic"
                        required
                      />
                      <label>Languages Known</label>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        name="message"
                        style={{ height: 120 }}
                        value={form.message}
                        onChange={onChange}
                      />
                      <label>Message (Optional)</label>
                    </div>
                  </div>

                  {/* Resume */}
                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        type="file"
                        className="form-control"
                        name="resume"
                        accept=".pdf,.doc,.docx"
                        onChange={onChange}
                        required
                      />
                      <label>Upload Resume / CV</label>
                    </div>
                  </div>

                  <div className="col-12 d-flex gap-2">
                    <button className="btn btn-primary rounded-pill px-4" type="submit">
                      Submit
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-secondary rounded-pill px-4"
                      onClick={closeModal}
                    >
                      Cancel
                    </button>
                  </div>

                </div>
              </form>

            </div>
          </div>
        </div>
      )}
      {/* ===== /MODAL ===== */}
    </div>
  );
}
