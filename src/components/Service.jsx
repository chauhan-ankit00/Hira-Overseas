import React from "react";

export default function Service() {
  const services = [
    {
      icon: "fa fa-user-tie fa-2x",
      delay: "0.1s",
      title: "Nursing Recruitment & Placement",
      text:
        "We connect hospitals, clinics, and care centers with qualified nursing professionals. Our team ensures each candidate is assessed, verified, and matched to the right role for maximum efficiency and patient care impact.",
    },
    {
      icon: "fa fa-chart-pie fa-2x",
      delay: "0.3s",
      title: "Workforce Planning & Scheduling",
      text:
        "We help healthcare organizations forecast staffing needs, optimize shift structures, and maintain adequate nurse-to-patient ratios—ensuring smooth workflow and improved care delivery.",
    },
    {
      icon: "fa fa-chart-line fa-2x",
      delay: "0.6s",
      title: "HR & Legal Advisory for Healthcare Staffing",
      text:
        "Our experts provide guidance on contract management, documentation, labor regulations, and healthcare staffing policies—ensuring smooth onboarding and legally compliant recruitment.",
    },
  ];

  const countries = [
    {
      title: "OMAN",
      text:
        "Why not start a successful Nursing career in Oman? Explore a multitude of amazing opportunities to enrich your life and career.",
    },
    {
      title: "QATAR",
      text:
        "Our extensive connections with leading healthcare institutions in Qatar provide exclusive access to a wide range of nursing opportunities.",
    },
    {
      title: "BAHRAIN",
      text:
        "Join our vibrant community of expat nurses in Bahrain, where camaraderie and professional growth flourish.",
    },
    {
      title: "DUBAI",
      text:
        "Dubai Nursing vacancies are waiting for you! If you are a qualified nurse, you can start your nursing career in Dubai.",
    },
    {
      title: "SAUDI",
      text:
        "Saudi Arabia provides various exciting Nursing vacancies to help you grow in your career. Enjoy excellent salary and living benefits.",
    },
  ];

  return (
    <div className="container-xxl py-6" id="service">
      <div className="container">

        {/* SECTION 1: SERVICES */}
        <div
          className="mx-auto text-center wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: "600px" }}
        >
          <div className="d-inline-block border rounded-pill text-primary px-4 mb-3">
            Our Services
          </div>
          <h2 className="mb-5" style={{ fontFamily: "roboto" }}>
            We Provide Reliable Staffing & Consulting Solutions for Healthcare Organizations
          </h2>
        </div>

        {/* Services Grid */}
        <div className="row g-4">
          {services.map((s, idx) => (
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay={s.delay}
              key={idx}
            >
              <div className="service-item rounded h-100">
                <div className="d-flex justify-content-between">
                  <div className="service-icon">
                    <i className={s.icon}></i>
                  </div>
                  <a className="service-btn" href="#">
                    <i className="fa fa-link fa-2x"></i>
                  </a>
                </div>
                <div className="p-5">
                  <h5 className="mb-3" style={{ fontFamily: "roboto" }}>
                    {s.title}
                  </h5>
                  <span style={{ fontSize: "18px" }}>{s.text}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* SECTION 2: WHERE YOU CAN START */}
        <div className="mt-5 pt-5">
          <h2
            className="text-center mb-5"
            style={{
              fontFamily: "roboto",
              fontSize: "46px",
              fontWeight: "700",
              color: "#13203B", // Matching the sample screenshot dark blue tone
            }}
          >
            Where can you start ?
          </h2>

          <div className="row text-center g-5 px-lg-5">
            {countries.map((c, i) => (
              <div key={i} className="col-lg-2 col-md-4 col-12 mx-auto">
                <h5
                  style={{
                    fontFamily: "roboto",
                    fontWeight: "700",
                    color: "#13203B",
                    marginBottom: "15px",
                  }}
                >
                  {c.title}
                </h5>
                <p
                  style={{
                    fontSize: "17px",
                    lineHeight: "1.6",
                    color: "#445065",
                    fontFamily: "roboto",
                  }}
                >
                  {c.text}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
