import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Team() {
  const teamMembers = [
    { img: "img/team-1.jpeg", name: "MD Adam Younus", role: "Overseas Manager" , desc:"With 10 years of managerial expertise, we leverage data-driven sourcing and behavioral competency frameworks to deliver high-performing talent for successful cross-border placements."},
    { img: "img/team-1.jpeg", name: "Full Name", role: "Designation" ,desc:"With 10 years of managerial expertise, we leverage data-driven sourcing and behavioral competency frameworks to deliver high-performing talent for successful cross-border placements." },
    { img: "img/team-1.jpeg", name: "Full Name", role: "Designation" ,desc:"With 10 years of managerial expertise, we leverage data-driven sourcing and behavioral competency frameworks to deliver high-performing talent for successful cross-border placements." },
    { img: "img/team-1.jpeg", name: "Full Name", role: "Designation", desc:"With 10 years of managerial expertise, we leverage data-driven sourcing and behavioral competency frameworks to deliver high-performing talent for successful cross-border placements." },
  ];

  // 🔹 Slider settings (mobile only)
  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

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

        {/* ===== DESKTOP / TABLET GRID ===== */}
        <div className="row g-4 d-none d-md-flex">
          {teamMembers.map((member, index) => (
            <div className="col-lg-3 col-md-6" key={index}>
              <TeamCard member={member} />
            </div>
          ))}
        </div>

        {/* ===== MOBILE CAROUSEL (<768px) ===== */}
        <div className="d-block d-md-none">
          <Slider {...sliderSettings}>
            {teamMembers.map((member, index) => (
              <div key={index} className="px-3">
                <TeamCard member={member} />
              </div>
            ))}
          </Slider>
        </div>

      </div>
    </div>
  );
}

/* 🔹 Reusable Card */
function TeamCard({ member }) {
  return (
    <div className="team-item text-center">
      <h5>{member.name}</h5>
      <p className="mb-4">{member.role}</p>

      <img
        className="img-fluid rounded-circle w-100 mb-4"
        src={member.img}
        alt={member.name}
      />

      <div className="d-flex justify-content-center">
        <p className="mb-1">{member.desc} </p>
      </div>
    </div>
  );
}
