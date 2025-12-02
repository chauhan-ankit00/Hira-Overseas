import React from "react";

export default function Features() {
  return (
    <div className="container-xxl py-6">
      <div className="container">
        <div className="row g-5">

          {/* Left Section */}
          <div
            className="col-lg-5 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="d-inline-block border rounded-pill text-primary px-4 mb-3">
              Features
            </div>

            <h2 className="mb-4" style={{fontFamily:"roboto"}}>
              Why People Choose Us? We Are Trusted & Award Wining Agency
            </h2>

            <p style={{fontSize:"18px"}}>
              Hira Overseas has earned a reputation for delivering reliable, skilled, and compliant nursing professionals to healthcare institutions. Our commitment to quality, transparency, and seamless recruitment makes us a preferred partner for hospitals, clinics, and medical centers seeking dependable staffing solutions.

            </p>

            

            
          </div>

          {/* Right Section */}
          <div className="col-lg-7">
            <div className="row g-5">

              {/* Feature Item 1 */}
              <div
                className="col-sm-6 wow fadeIn"
                data-wow-delay="0.1s"
              >
                <div className="d-flex align-items-center mb-3">
                  <div className="flex-shrink-0 btn-square bg-primary rounded-circle me-3 d-flex justify-content-center align-items-center">
                    <i className="fa fa-cubes text-white"></i>
                  </div>
                  <h6 className="mb-0" style={{fontSize:"20px",fontFamily:"roboto"}}>Best In Industry</h6>
                </div>
                <span style={{fontSize:"18px"}}>
                 We specialize in nursing recruitment, ensuring every candidate is thoroughly screened, qualified, and fit for clinical environments.

                </span>
              </div>

              {/* Feature Item 2 */}
              <div
                className="col-sm-6 wow fadeIn"
                data-wow-delay="0.2s"
              >
                <div className="d-flex align-items-center mb-3">
                  <div className="flex-shrink-0 btn-square bg-primary rounded-circle me-3 d-flex justify-content-center align-items-center">
                    <i className="fa fa-percent text-white"></i>
                  </div>
                  <h6 className="mb-0" style={{fontSize:"20px",fontFamily:"roboto"}}>99% Success Rate</h6>
                </div>
                <span style={{fontSize:"18px"}}>
                  Our structured recruitment process ensures fast and accurate placement, helping healthcare organizations maintain uninterrupted patient care.
                </span>
              </div>

              {/* Feature Item 3 */}
              <div
                className="col-sm-6 wow fadeIn"
                data-wow-delay="0.3s"
              >
                <div className="d-flex align-items-center mb-3">
                  <div className="flex-shrink-0 btn-square bg-primary rounded-circle me-3 d-flex justify-content-center align-items-center">
                    <i className="fa fa-award text-white"></i>
                  </div>
                  <h6 className="mb-0" style={{fontSize:"20px",fontFamily:"roboto"}}>Award Winning</h6>
                </div>
                <span style={{fontSize:"18px"}}>
                  Our excellence in healthcare staffing and consulting has been acknowledged by partners, clients, and industry bodies.

                </span>
              </div>

              {/* Feature Item 4 */}
              <div
                className="col-sm-6 wow fadeIn"
                data-wow-delay="0.4s"
              >
                <div className="d-flex align-items-center mb-3">
                  <div className="flex-shrink-0 btn-square bg-primary rounded-circle me-3 d-flex justify-content-center align-items-center">
                    <i className="fa fa-smile-beam text-white"></i>
                  </div>
                  <h6 className="mb-0" style={{fontSize:"20px",fontFamily:"roboto"}}>100% Happy Client</h6>
                </div>
                <span style={{fontSize:"18px"}}>
                  We prioritize long-term partnerships and deliver reliable staffing solutions that healthcare providers trust.

                </span>
              </div>

              {/* Feature Item 5 */}
              <div
                className="col-sm-6 wow fadeIn"
                data-wow-delay="0.5s"
              >
                <div className="d-flex align-items-center mb-3">
                  <div className="flex-shrink-0 btn-square bg-primary rounded-circle me-3 d-flex justify-content-center align-items-center">
                    <i className="fa fa-user-tie text-white"></i>
                  </div>
                  <h6 className="mb-0" style={{fontSize:"20px",fontFamily:"roboto"}}>Professional Advisors</h6>
                </div>
                <span style={{fontSize:"18px"}}>
                  Our team includes skilled consultants with deep knowledge of healthcare operations, compliance, and staffing requirements.

                </span>
              </div>

              {/* Feature Item 6 */}
              <div
                className="col-sm-6 wow fadeIn"
                data-wow-delay="0.6s"
              >
                <div className="d-flex align-items-center mb-3">
                  <div className="flex-shrink-0 btn-square bg-primary rounded-circle me-3 d-flex justify-content-center align-items-center">
                    <i className="fa fa-headset text-white"></i>
                  </div>
                  <h6 className="mb-0" style={{fontSize:"20px",fontFamily:"roboto"}}>24/7 Customer Support</h6>
                </div>
                <span style={{fontSize:"18px"}}>
                  We offer round-the-clock support to both clients and candidates, ensuring smooth communication and timely resolution of needs.
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
