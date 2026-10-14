import React from "react";

const TEAM = [
  { img: "img/team-2.jpeg", name: "Full Name", role: "Founder & CEO", desc: "10+ years of leadership experience in international talent acquisition and workforce solutions, driving strategic global recruitment." },
  { img: "img/team-1.jpeg", name: "MD Adam Younus", role: "Overseas Manager", desc: "Leverages data-driven sourcing and behavioral competency frameworks to deliver high-performing talent for cross-border placements." },
  { img: "img/team-1.jpeg", name: "Full Name", role: "Operations Head", desc: "Oversees seamless deployment logistics, visa processing, and compliance for every candidate placed internationally." },
  { img: "img/team-1.jpeg", name: "Full Name", role: "Recruitment Lead", desc: "Specialist in healthcare and engineering recruitment with a deep network of qualified professionals ready for international roles." },
];

export default function Team() {
  return (
    <section className="section" id="team">
      <div className="container">
        <div className="text-center" style={{ marginBottom: 56 }}>
          <div className="pill-label">Our Team</div>
          <h2 className="section-title">Meet the People Behind Our Success</h2>
          <p className="section-sub">
            Experienced professionals committed to connecting the world's best talent with leading global employers.
          </p>
        </div>

        <div className="grid-4">
          {TEAM.map((m, i) => (
            <div className="team-card" key={i}>
              <div className="team-img-wrap">
                <img src={m.img} alt={m.name} />
              </div>
              <div className="team-card-body">
                <h4>{m.name}</h4>
                <p className="team-role">{m.role}</p>
                <p>{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
