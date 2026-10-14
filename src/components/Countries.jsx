import React from "react";

const COUNTRIES = [
  { flag: "🇸🇦", name: "Saudi Arabia" },
  { flag: "🇦🇪", name: "UAE" },
  { flag: "🇶🇦", name: "Qatar" },
  { flag: "🇰🇼", name: "Kuwait" },
  { flag: "🇧🇭", name: "Bahrain" },
  { flag: "🇴🇲", name: "Oman" },
  { flag: "🇩🇪", name: "Germany" },
  { flag: "🇬🇧", name: "United Kingdom" },
  { flag: "🇳🇱", name: "Netherlands" },
  { flag: "🇦🇺", name: "Australia" },
  { flag: "🇲🇾", name: "Malaysia" },
  { flag: "🇲🇻", name: "Maldives" },
];

export default function Countries() {
  return (
    <section className="section services-bg" id="countries">
      <div className="container">
        <div className="text-center" style={{ marginBottom: 56 }}>
          <div className="pill-label">Global Reach</div>
          <h2 className="section-title">Countries We Deploy To</h2>
          <p className="section-sub">
            Our workforce solutions span across the Middle East, Europe, Asia-Pacific,
            and beyond — placing talent where it's needed most.
          </p>
        </div>

        <div className="grid-auto">
          {COUNTRIES.map((c) => (
            <div className="country-chip" key={c.name}>
              <span className="country-flag">{c.flag}</span>
              <span>{c.name}</span>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 48 }}>
          <p style={{ color: "var(--muted)", marginBottom: 20 }}>
            Don't see your country? We handle custom deployments worldwide.
          </p>
          <a href="/contact" className="btn btn-primary">Enquire Now →</a>
        </div>
      </div>
    </section>
  );
}
