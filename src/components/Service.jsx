import React from "react";

const SERVICES = [
  {
    icon: "fa fa-user-md",
    title: "Medical & Healthcare",
    desc: "We supply qualified and licensed professionals:",
    items: ["Doctors & Specialists", "Registered & Specialist Nurses", "Clinical Technologists & Allied Health"],
    note: "Clinical competence, global compliance, and employer-focused matching.",
  },
  {
    icon: "fa fa-cogs",
    title: "Engineering & Technical",
    desc: "Certified technical professionals including:",
    items: ["Mechanical, Electrical & Civil Engineers", "IT & Software Engineers", "Plant, Maintenance & Technical Technicians"],
    note: "Each candidate undergoes skill verification and background evaluation.",
  },
  {
    icon: "fa fa-hard-hat",
    title: "Skilled & Non-Skilled Workforce",
    desc: "Trained manpower across construction, manufacturing, and facility management:",
    items: ["Electricians, Plumbers, Masons", "Welders, Steel Fixers", "AC & HVAC Technicians", "Heavy Vehicle Drivers & General Labour"],
    note: "Trade-tested and mobilised quickly for urgent project demands.",
  },
  {
    icon: "fa fa-heartbeat",
    title: "Paramedical & Support Staff",
    desc: "Trained professionals for essential healthcare services:",
    items: ["Laboratory Technicians & Radiographers", "Operation Theatre (OT) Technicians", "Emergency Medical Staff", "Physiotherapy Assistants"],
    note: "Ensuring dependable assistance and skilled clinical support.",
  },
];

const PROCESS = [
  { step: 1, title: "Requirement Analysis", desc: "Understanding your workforce needs in detail" },
  { step: 2, title: "Candidate Sourcing & Screening", desc: "Targeted search across our extensive network" },
  { step: 3, title: "Trade Test & Skills Evaluation", desc: "Rigorous multi-stage competency assessment" },
  { step: 4, title: "Employer Interview Coordination", desc: "Seamless scheduling and interview management" },
  { step: 5, title: "Medical & Document Clearance", desc: "Comprehensive health checks and paperwork" },
  { step: 6, title: "Visa Processing & Compliance", desc: "End-to-end visa and legal compliance support" },
  { step: 7, title: "Deployment & Travel Management", desc: "Coordinated logistics for smooth mobilisation" },
  { step: 8, title: "Post-Placement Support", desc: "Ongoing support after successful deployment" },
];

export default function Service() {
  return (
    <>
      {/* Services */}
      <section className="section services-bg" id="service">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 56 }}>
            <div className="pill-label">Our Services</div>
            <h2 className="section-title">Reliable Manpower Across Key Sectors</h2>
            <p className="section-sub">
              From healthcare to construction, we deliver pre-screened, deployment-ready talent worldwide.
            </p>
          </div>

          <div className="grid-2">
            {SERVICES.map((s, i) => (
              <div className="service-card" key={i}>
                <div className="service-icon-wrap">
                  <i className={s.icon} />
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <ul className="service-list">
                  {s.items.map((item, j) => <li key={j}>{item}</li>)}
                </ul>
                <p style={{ fontSize: "0.85rem", color: "var(--muted)", marginTop: 12, marginBottom: 0, fontStyle: "italic" }}>
                  {s.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recruitment Process */}
      <section className="section process-bg" id="process">
        <div className="container">
          <div className="grid-2" style={{ gap: 64, alignItems: "center" }}>
            <div>
              <div className="pill-label" style={{ background: "rgba(212,168,67,0.15)", color: "var(--accent-light)", borderColor: "rgba(212,168,67,0.25)" }}>
                How We Work
              </div>
              <h2 style={{ color: "var(--white)", marginBottom: 16 }}>
                Our Recruitment Process
              </h2>
              <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: 36, fontSize: "1rem" }}>
                A streamlined, 8-step process that ensures accuracy, speed, and compliance
                for every international placement.
              </p>
              <a href="/contact" className="btn btn-accent">Start Hiring Today →</a>
            </div>

            <div>
              {PROCESS.map((p) => (
                <div className="process-step" key={p.step}>
                  <div className="step-num">{p.step}</div>
                  <div>
                    <h4>{p.title}</h4>
                    <p>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
