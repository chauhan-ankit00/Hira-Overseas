



import React from "react";

export default function About() {
  return (
    <div className="container-xxl " id="about">
      <div className="container">

        {/* Centered ABOUT US */}
        <div className="text-center mb-4">
          <div className="d-inline-block border rounded-pill text-primary px-4 mb-3">
            About Us
          </div>
        </div>

        <div className="row g-5 align-items-center">

          {/* Left Image */}
          <div
            className="col-lg-6 wow zoomIn"
            data-wow-delay="0.1s"
          >
            <img
              className="img-fluid"
              src="img/about.png"
              alt="About"
              style={{ borderRadius: "150px" }}
            />
          </div>

          {/* Right Content */}
          <div
            className="col-lg-6 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <h2 className="mb-4" style={{ fontFamily: "roboto" }}>
              Connecting Skilled Talent With the World
            </h2>

            <p className="mb-4" style={{ fontSize: "18px" }}>
              We are a global manpower consultancy specialising in the deployment of healthcare, engineering, technical, and skilled blue-collar professionals. With a strong presence in India and partnerships across the Middle East, Europe, and Africa, we deliver workforce solutions that meet the highest international standards.
            </p>

            <p className="mb-4" style={{ fontSize: "18px" }}>
              Our approach combines precision recruitment, ethical practices, and a deep understanding of industry demands.
            </p>

            <div className="row g-3 mb-4">

              {/* Mission */}
              <div className="col-12 d-flex">
                <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary d-flex justify-content-center align-items-center">
                  <i className="fa fa-user-tie text-white"></i>
                </div>
                <div className="ms-4">
                  <h6 style={{ fontFamily: "roboto", fontSize: "20px" }}>Mission</h6>
                  <span style={{ fontSize: "18px" }}>
                    To connect exceptional talent with reputable global employers through integrity, quality, and efficiency.
                  </span>
                </div>
              </div>

              {/* Vision */}
              <div className="col-12 d-flex">
                <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary d-flex justify-content-center align-items-center">
                  <i className="fa fa-chart-line text-white"></i>
                </div>
                <div className="ms-4">
                  <h6 style={{ fontFamily: "roboto", fontSize: "20px" }}>Vision</h6>
                  <span style={{ fontSize: "18px" }}>
                    To become a leading international manpower partner known for reliability, compliance, and service excellence.
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
