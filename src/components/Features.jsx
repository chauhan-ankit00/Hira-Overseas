import React from "react";

const FEATURES = [
  {
    icon: "fa fa-shield-alt",
    title: "Licensed & Ethical Recruitment",
    desc: "Full legal compliance and strict ethical standards — transparent processes with zero hidden charges.",
  },
  {
    icon: "fa fa-microscope",
    title: "Rigorous Screening Standards",
    desc: "Multi-stage evaluation including skill verification, background checks, and role-specific assessments.",
  },
  {
    icon: "fa fa-rocket",
    title: "Accelerated Visa & Deployment",
    desc: "Dedicated documentation team ensures fast, hassle-free visa approvals and timely international deployment.",
  },
  {
    icon: "fa fa-globe",
    title: "Worldwide Employer Network",
    desc: "Partnerships with leading organisations across the Middle East, Europe, and global regions.",
  },
];

const STATS = [
  { num: "10+", label: "Years Experience" },
  { num: "90%+", label: "Success Ratio" },
  { num: "1000+", label: "Placements" },
  { num: "50+", label: "Trusted Employers" },
];

export default function Features() {
  return (
    <section className="section" id="features">
      <div className="container">
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      marginBottom: 24,
    }}
  >
    <div className="pill-label">
      Why Choose Us
    </div>
  </div>
        <div className="grid-2" style={{ gap: 72, alignItems: "center" }}>


          {/* Left */}
          <div>

            <h2 className="section-title">
              Trusted &amp; Award-Winning Recruitment Agency
            </h2>
            <p style={{ fontSize: "1rem", lineHeight: 1.8, marginBottom: 36 }}>
              With 10+ years of recruitment experience, we have successfully delivered
              workforce solutions across healthcare, engineering, and skilled trade sectors.
              Our market-focused hiring practices and rigorous compliance standards set us apart.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 16 }}>
              {STATS.map((s) => (
                <div key={s.label} style={{
                  background: "var(--light-bg)",
                  borderRadius: "var(--radius-md)",
                  padding: "20px",
                  border: "1px solid var(--border)"
                }}>
                  <div style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.9rem",
                    fontWeight: 700,
                    color: "var(--primary)",
                    lineHeight: 1
                  }}>{s.num}</div>
                  <div style={{ fontSize: "0.8rem", color: "var(--muted)", marginTop: 6, textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: 600 }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="features-grid">
            {FEATURES.map((f, i) => (
              <div className="feature-card" key={i}>
                <div className="feature-icon">
                  <i className={f.icon} />
                </div>
                <h4>{f.title}</h4>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
