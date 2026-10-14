import React from "react";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="grid-2" style={{ alignItems: "center", gap: 64 }}>

          {/* Image */}
          <div className="about-img-wrap" style={{ paddingRight: 32 }}>
            <img src="img/about-us.png" alt="About Hira Overseas" />
            <div className="about-badge">
              <strong>10+</strong>
              <small>Years of Trust</small>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="pill-label">About Us</div>
            <h2 className="section-title">
              Connecting Skilled Talent<br />With the World
            </h2>
            <p style={{ fontSize: "1rem", marginBottom: 28, lineHeight: 1.8 }}>
              We are a global manpower consultancy specialising in the deployment of healthcare,
              engineering, technical, and skilled blue-collar professionals. With a strong presence
              in India and partnerships across the Middle East and Europe, we deliver workforce
              solutions that meet the highest international standards.
            </p>

            <div className="about-feature">
              <div className="about-icon">
                <i className="fa fa-bullseye" />
              </div>
              <div>
                <h4 style={{ marginBottom: 6 }}>Our Mission</h4>
                <p style={{ margin: 0, fontSize: "0.92rem" }}>
                  To connect exceptional talent with reputable global employers through integrity,
                  quality, and efficiency — with zero hidden charges and full transparency.
                </p>
              </div>
            </div>

            <div className="about-feature">
              <div className="about-icon">
                <i className="fa fa-chart-line" />
              </div>
              <div>
                <h4 style={{ marginBottom: 6 }}>Our Vision</h4>
                <p style={{ margin: 0, fontSize: "0.92rem" }}>
                  To become the leading international manpower partner known for reliability,
                  compliance, and service excellence across every sector we serve.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
