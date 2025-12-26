import React from "react";

export default function Service() {
  const services = [
    {
      icon: "fa fa-user-tie fa-2x",
      delay: "0.1s",
      title: "Medical & Healthcare Recruitment",
      desc: "We supply qualified and licensed professionals:",
      items: [
        "Doctors & Specialists",
        "Registered Nurses",
        "Paramedical & Clinical Support Staff",
        "Laboratory, Radiology, and Pharmacy Professionals",
      ],
      other:
        "Our medical sourcing ensures clinical competence, global compliance, and employer-focused matching.",
    },
    {
      icon: "fa fa-cogs fa-2x",
      delay: "0.1s",
      title: "Engineering & Technical Recruitment",
      desc: "We provide certified technical professionals, including:",
      items: [
        "Mechanical, Electrical & Civil Engineers",
        "IT & Software Engineers",
        "Plant, Maintenance, and Technical Technicians",
      ],
      other: "Each candidate undergoes skill verification and background evaluation.",
    },
    {
      icon: "fa fa-hard-hat fa-2x",
      delay: "0.1s",
      title: "Skilled Blue-Collar Workforce",
      desc:
        "We deploy trained manpower across construction, manufacturing, and facility management sectors:",
      items: [
        "Electricians",
        "Plumbers, Masons, Carpenter",
        "Welders, Steel Fixers",
        "AC & HVAC Technicians",
        "Heavy Vehicle Drivers",
        "General Helpers & Labour",
      ],
      other:
        "Our skilled workforce is trade-tested and mobilised quickly for urgent project demands.",
    },
    {
      icon: "fa fa-briefcase-medical fa-2x",
      delay: "0.1s",
      title: "Paramedical & Support Staff",
      desc:
        "We provide trained paramedical and support professionals for essential healthcare services:",
      items: [
        "Lab Technicians",
        "Radiographer",
        "OT Technicians",
        "Emergency Medical Staff",
        "Physiotherapy Assistants",
      ],
      other: "Ensuring dependable assistance and skilled clinical support.",
    },
  ];

  return (
    <div className="container-xxl py-6" id="service" >
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
            Providing Reliable Manpower for Mentioned below Sector
          </h2>
        </div>

        {/* Services Grid */}
        <div className="row g-4 align-items-stretch">
          {services.map((s, idx) => (
            <div
              className="col-lg-6 col-md-6 wow fadeInUp d-flex"
              data-wow-delay={s.delay}
              key={idx}
            >
              <div
                className="service-item rounded h-100 d-flex flex-column w-100"
                style={{ padding: "20px" }}
              >
                <div className="d-flex justify-content-between mb-3">
                  <div className="service-icon">
                    <i className={s.icon}></i>
                  </div>
                  <a className="service-btn" href="#">
                    <i className="fa fa-link fa-2x"></i>
                  </a>
                </div>

                <div className="p-4 flex-grow-1">
                  <h5 className="mb-3" style={{ fontFamily: "roboto" }}>
                    {s.title}
                  </h5>

                  <p style={{ fontSize: "17px", marginBottom: "8px" }}>
                    {s.desc}
                  </p>

                  <ul
                    style={{
                      fontSize: "16px",
                      color: "#333",
                      marginBottom: "8px",
                    }}
                  >
                    {s.items.map((li, i) => (
                      <li key={i}>{li}</li>
                    ))}
                  </ul>

                  <p style={{ fontSize: "15px", color: "#555" }}>{s.other}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* SECTION 2: RECRUITMENT PROCESS + WHAT WE OFFER (two cards side-by-side) */}
        <div className="mt-5 pt-5">
          <h2
            className="text-center mb-4"
            style={{ fontFamily: "roboto", fontSize: "40px", fontWeight: "700", color: "#13203B" }}
          >
            Recruitment Process
          </h2>

          <div className="row justify-content-center g-4">
            {/* Card 1: Process */}
            <div className="col-md-6 col-lg-6 d-flex">
              <div className="service-item rounded h-100 d-flex flex-column w-100" style={{ padding: "20px" }}>
                <div className="p-4 flex-grow-1">
                  <h5 style={{ fontFamily: "roboto", fontWeight: "700", marginBottom: "15px" }}>
                    Our streamlined process ensures accuracy and speed:
                  </h5>
                  <ol
                    style={{
                      fontSize: "17px",
                      lineHeight: "1.8",
                      color: "#333",
                      paddingLeft: "20px",
                      marginBottom: 0,
                    }}
                  >
                    <li>Requirement Analysis</li>
                    <li>Candidate Sourcing & Screening</li>
                    <li>Trade Test & Skills Evaluation</li>
                    <li>Employer Interview Coordination</li>
                    <li>Medical & Document Clearance</li>
                    <li>Visa Processing & Compliance</li>
                    <li>Deployment & Travel Management</li>
                    <li>Post-Placement Support</li>
                  </ol>
                </div>
              </div>
            </div>

            {/* Card 2: What We Offer */}
            <div className="col-md-6 col-lg-6 d-flex">
              <div className="service-item rounded h-100 d-flex flex-column w-100" style={{ padding: "20px" }}>
                <div className="p-4 flex-grow-1">
                  <h5 style={{ fontFamily: "roboto", fontWeight: "700", marginBottom: "15px" }}>
                    What We Offer
                  </h5>
                  <ul
                    style={{
                      fontSize: "17px",
                      lineHeight: "1.8",
                      color: "#333",
                      paddingLeft: "20px",
                      marginBottom: 0,
                    }}
                  >
                    <li>Verified and competent candidates</li>
                    <li>Industry-specific selection</li>
                    <li>Fast deployment timelines</li>
                    <li>Transparent and compliant operations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Centered CTA below the two cards */}
          <div className="text-center mt-4">
            <a
              href="#contact"
              className="btn btn-outline-primary rounded-pill px-4 py-2"
              style={{ fontSize: "18px", fontWeight: "600" }}
            >
              Request Manpower →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
