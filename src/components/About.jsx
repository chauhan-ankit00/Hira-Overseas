import React from "react";

export default function About() {
  return (
    <div className="container-xxl py-6" id="about">
      <div className="container">
        <div className="row g-5 align-items-center">

          {/* Left Image */}
          <div
            className="col-lg-6 wow zoomIn"
            data-wow-delay="0.1s"
          >
            <img className="img-fluid" src="img/about.png" alt="About" style={{borderRadius:'150px'}}/>
          </div>

          {/* Right Content */}
          <div
            className="col-lg-6 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="d-inline-block border rounded-pill text-primary px-4 mb-3">
              About Us
            </div>

            <h2 className="mb-4" style={{ fontFamily:'roboto' }}>
              Trusted Nursing Recruitment & Healthcare Consulting Partner
            </h2>

            <p className="mb-4"style={{ fontSize:'18px' }}>
              Hira Overseas specializes in providing reliable, skilled, and qualified nursing professionals to hospitals, clinics, and healthcare institutions across the region. With a strong focus on quality, compliance, and patient-centered care, we help healthcare organizations overcome staffing shortages and achieve better workforce efficiency.
            </p>

            <div className="row g-3 mb-4">

              {/* Item 1 */}
              <div className="col-12 d-flex">
                <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary d-flex justify-content-center align-items-center">
                  <i className="fa fa-user-tie text-white"></i>
                </div>
                <div className="ms-4">
                  <h6 style={{ fontFamily:'roboto' ,fontSize:'20px'}}>Nursing Workforce Planning</h6>
                  <span style={{ fontSize:'18px' }}>
                    We assist hospitals and clinics in understanding their staffing needs, forecasting workforce demands, and creating customized nursing staffing plans. Our planning strategies help improve operational efficiency and reduce staffing-related challenges.
                  </span>
                </div>
              </div>

              {/* Item 2 */}
              <div className="col-12 d-flex">
                <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary d-flex justify-content-center align-items-center">
                  <i className="fa fa-chart-line text-white"></i>
                </div>
                <div className="ms-4">
                  <h6 style={{ fontFamily:'roboto', fontSize:'20px' }}>Healthcare Staffing & Skill Assessment</h6>
                  <span style={{ fontSize:'18px' }}>
                    We evaluate candidates through a structured qualification, skill verification, and screening process to ensure that only the most capable professionals reach your facility. Our consultants provide insights to help you select the right nursing staff with confidence.
                  </span>
                </div>
              </div>

            </div>

            
          </div>
        </div>
      </div>
    </div>
  );
}
