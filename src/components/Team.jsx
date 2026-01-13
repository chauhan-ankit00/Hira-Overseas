import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Team.css"; // Import custom CSS for Team component

export default function Team() {
  const teamMembers = [
    {
      img: "img/team-2.jpeg",
      name: "Full Name",
      role: "Founder",
      desc:
        "Founder with 10+ years of leadership experience in talent acquisition and workforce solutions. Driven to build high-performing teams through strategic and global recruitment.",
    },
    {
      img: "img/team-1.jpeg",
      name: "MD Adam Younus",
      role: "Overseas Manager",
      desc:
        "With 10+ years of managerial expertise, we leverage data-driven sourcing and behavioral competency frameworks to deliver high-performing talent for successful cross-border placements.",
    },
    {
      img: "img/team-1.jpeg",
      name: "Full Name",
      role: "Designation",
      desc:
        "With 10 years of managerial expertise, we leverage data-driven sourcing and behavioral competency frameworks to deliver high-performing talent for successful cross-border placements.",
    },
    {
      img: "img/team-1.jpeg",
      name: "Full Name",
      role: "Designation",
      desc:
        "With 10 years of managerial expertise, we leverage data-driven sourcing and behavioral competency frameworks to deliver high-performing talent for successful cross-border placements.",
    },
  ];

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
        {/* Heading */}
        <div
          className="mx-auto text-center"
          style={{ maxWidth: "600px" }}
        >
          <div className="d-inline-block border border-primary rounded-pill text-primary px-4 mb-3">
            Our Team
          </div>
          <h2 className="mb-5">Meet Our Team Members</h2>
        </div>

        {/* ===== Desktop / Tablet Grid ===== */}
        <div className="row g-4 d-none d-md-flex align-items-stretch">
          {teamMembers.map((member, index) => (
            <div className="col-lg-3 col-md-6" key={index}>
              <TeamCard member={member} />
            </div>
          ))}
        </div>

        {/* ===== Mobile Slider ===== */}
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

/* ================= TEAM CARD ================= */
function TeamCard({ member }) {
  return (
    <div className="team-item text-center h-100">
      <h5 className="mb-1">{member.name}</h5>
      <p className="text-muted mb-4">{member.role}</p>

      {/* Fixed Image */}
      <div className="team-img-wrapper mb-4">
        <img
          src={member.img}
          alt={member.name}
          className="team-img"
        />
      </div>

      <p className="mb-0">{member.desc}</p>
    </div>
  );
}
