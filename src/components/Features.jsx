
import React from "react";

export default function Features() {
  return (
    <div className="container-xxl py-4">
      <div className="container">

        {/* Centered "Features" pill across the page */}
        <div className="text-center" style={{marginBottom:'50px'}}>
          <div className="d-inline-block border rounded-pill text-primary px-4 mb-3">
            Features
          </div>
        </div>

        {/* Two columns start at the same vertical level */}
        <div className="row g-5 align-items-start">

          {/* Left Section */}
          <div
            className="col-lg-5 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <h2 className="mb-4" style={{ fontFamily: "roboto" }}>
              Why People Choose Us? We Are Trusted & Award Wining Agency
            </h2>

            <p style={{ fontSize: "18px" }}>
              With licensed recruitment practices, thorough candidate evaluation, and a worldwide presence, we ensure a transparent and efficient pathway to international career opportunities.
            </p>
          </div>

          {/* Right Section */}
          <div className="col-lg-7">
            <div className="row g-5 justify-content-center">

              {/* Feature Item 1 */}
              <div className="col-sm-6 wow fadeIn" data-wow-delay="0.1s">
                <div className="d-flex align-items-center mb-3">
                  <div className="flex-shrink-0 btn-square bg-primary rounded-circle me-3 d-flex justify-content-center align-items-center">
                    <i className="fa fa-cubes text-white"></i>
                  </div>
                  <h6 className="mb-0" style={{ fontSize: "20px", fontFamily: "roboto" }}>
                    Licensed & Ethical Recruitment
                  </h6>
                </div>
                <span style={{ fontSize: "18px" }}>
                  We operate with full legal compliance and strict ethical standards, ensuring transparent processes with zero hidden charges.
                </span>
              </div>

              {/* Feature Item 2 */}
              <div className="col-sm-6 wow fadeIn" data-wow-delay="0.2s">
                <div className="d-flex align-items-center mb-3">
                  <div className="flex-shrink-0 btn-square bg-primary rounded-circle me-3 d-flex justify-content-center align-items-center">
                    <i className="fa fa-percent text-white"></i>
                  </div>
                  <h6 className="mb-0" style={{ fontSize: "20px", fontFamily: "roboto" }}>
                    Rigorous Screening Standards
                  </h6>
                </div>
                <span style={{ fontSize: "18px" }}>
                  Every candidate undergoes a multi-stage evaluation, including skill verification, background checks, and role-specific assessments for the highest placement quality.
                </span>
              </div>

              {/* Feature Item 3 */}
              <div className="col-sm-6 wow fadeIn" data-wow-delay="0.3s">
                <div className="d-flex align-items-center mb-3">
                  <div className="flex-shrink-0 btn-square bg-primary rounded-circle me-3 d-flex justify-content-center align-items-center">
                    <i className="fa fa-award text-white"></i>
                  </div>
                  <h6 className="mb-0" style={{ fontSize: "20px", fontFamily: "roboto" }}>
                    Accelerated Visa & Deployment
                  </h6>
                </div>
                <span style={{ fontSize: "18px" }}>
                  Our dedicated documentation and processing team ensures fast, hassle-free visa approvals and timely international deployment.
                </span>
              </div>

              {/* Feature Item 4 */}
              <div className="col-sm-6 wow fadeIn" data-wow-delay="0.4s">
                <div className="d-flex align-items-center mb-3">
                  <div className="flex-shrink-0 btn-square bg-primary rounded-circle me-3 d-flex justify-content-center align-items-center">
                    <i className="fa fa-smile-beam text-white"></i>
                  </div>
                  <h6 className="mb-0" style={{ fontSize: "20px", fontFamily: "roboto" }}>
                    Worldwide Network of Employers
                  </h6>
                </div>
                <span style={{ fontSize: "18px" }}>
                  We partner with leading healthcare, engineering, and technical organizations across the Middle East, Europe, and other global regions to provide diverse opportunities.
                </span>
              </div>

              {/* Feature Item 5 */}
              <div className="col-sm-6 wow fadeIn" data-wow-delay="0.5s">
                <div className="d-flex align-items-center mb-3">
                  <div className="flex-shrink-0 btn-square bg-primary rounded-circle me-3 d-flex justify-content-center align-items-center">
                    <i className="fa fa-user-tie text-white"></i>
                  </div>
                  <h6 className="mb-0" style={{ fontSize: "20px", fontFamily: "roboto" }}>
                    End-to-End Candidate Management
                  </h6>
                </div>
                <span style={{ fontSize: "18px" }}>
                  From application and interviews to documentation, travel assistance, and post-placement support—we guide candidates through every step of their overseas journey.
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
