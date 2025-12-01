import React from "react";

export default function Client() {
  const logos = [
    "img/logo-1.png",
    "img/logo-2.png",
    "img/logo-3.png",
    "img/logo-4.png",
    "img/logo-5.png",
    "img/logo-6.png",
    "img/logo-7.png",
    "img/logo-8.png",
  ];

  return (
    <div
      className="container-xxl bg-primary my-6 py-5 wow fadeInUp"
      data-wow-delay="0.1s"
    >
      <div className="container">
        <div className="client-carousel d-flex flex-wrap justify-content-center gap-4">
          {logos.map((logo, index) => (
            <a href="#" key={index}>
              <img
                className="img-fluid"
                src={logo}
                alt={`client-logo-${index + 1}`}
                style={{ height: "70px", objectFit: "contain" }}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
