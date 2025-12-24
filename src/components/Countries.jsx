import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CountriesSection.css";

export default function Countries() {
  const countries = [
    {
      title: "United Arab Emirates",
      text:
        "Explore world-class healthcare and technical career opportunities in the UAE.",
    },
    {
      title: "Saudi Arabia",
      text:
        "Saudi Arabia offers high-growth healthcare and engineering roles with tax-free benefits.",
    },
    {
      title: "Qatar",
      text:
        "Qatar provides excellent opportunities in healthcare and infrastructure sectors.",
    },
    {
      title: "Oman",
      text:
        "Build a rewarding career in Oman with a supportive work environment.",
    },
    {
      title: "Kuwait",
      text:
        "Kuwait presents strong demand for skilled professionals.",
    },
    {
      title: "Bahrain",
      text:
        "Join Bahrain’s dynamic workforce with diverse opportunities.",
    },
    {
      title: "United Kingdom",
      text:
        "UK offers globally recognized pathways for professionals.",
    },
    {
      title: "Germany",
      text:
        "Germany provides structured career growth with high standards.",
    },
    {
      title: "Poland",
      text:
        "Poland offers stable opportunities across industries.",
    },
    {
      title: "Romania",
      text:
        "Romania provides diverse openings in technical fields.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: false,
    slidesToScroll: 1,
    slidesToShow: 3, // ✅ DESKTOP DEFAULT

    responsive: [
      {
        breakpoint: 992, // tablet
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600, // mobile
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "16px",
        },
      },
    ],
  };

  return (
    <div className="container-xxl py-6 countries-wrapper" id="countries">
      <div className="container">
        <h2 className="countries-title">Where Can You Start?</h2>

        <Slider {...settings}>
          {countries.map((c, i) => (
            <div key={i} className="country-slide">
              <div className="country-card">
                <h5 className="country-title">{c.title}</h5>
                <p className="country-text">{c.text}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
