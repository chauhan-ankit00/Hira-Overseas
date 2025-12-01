import React from "react";

export default function Team() {
  const teamMembers = [
    { img: "img/team-1.jpg", delay: "0.1s", name: "Full Name", role: "Designation" },
    { img: "img/team-2.jpg", delay: "0.3s", name: "Full Name", role: "Designation" },
    { img: "img/team-3.jpg", delay: "0.5s", name: "Full Name", role: "Designation" },
    { img: "img/team-4.jpg", delay: "0.7s", name: "Full Name", role: "Designation" },
  ];

  return (
    <div className="container-xxl py-6">
      <div className="container">

        {/* Section Heading */}
        <div
          className="mx-auto text-center wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: "600px" }}
        >
          <div className="d-inline-block border rounded-pill text-primary px-4 mb-3">
            Our Team
          </div>
          <h2 className="mb-5">Meet Our Team Members</h2>
        </div>

        {/* Team Cards */}
        <div className="row g-4">
          {teamMembers.map((member, index) => (
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay={member.delay}
              key={index}
            >
              <div className="team-item text-center">
                <h5>{member.name}</h5>
                <p className="mb-4">{member.role}</p>

                <img
                  className="img-fluid rounded-circle w-100 mb-4"
                  src={member.img}
                  alt={member.name}
                />

                <div className="d-flex justify-content-center">
                  <a className="btn btn-square text-primary bg-white m-1" href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a className="btn btn-square text-primary bg-white m-1" href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a className="btn btn-square text-primary bg-white m-1" href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
