import React, { useEffect, useState } from "react";
import logo from "../images/logo.png"

export default function NavbarHero() {
  const NAV_OFFSET = 80;
  const [activeSection, setActiveSection] = useState("home");

  // ⭐ Typing Animation
  const fullText =
    "Global Talent. Delivered with Precision, simple peace of mind ";
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let index = 0;
    const speed = 50;

    const timer = setInterval(() => {
      setTypedText(fullText.slice(0, index));
      index++;

      if (index > fullText.length) clearInterval(timer);
    }, speed);

    return () => clearInterval(timer);
  }, []);

  // ⭐ Detect active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "service", "contact", "career", "testinomial", "countries"];

      for (let sec of sections) {
        const el = document.getElementById(sec);
        if (!el) continue;

        const top = el.getBoundingClientRect().top;

        if (top <= 120 && top >= -400) {
          setActiveSection(sec);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getLinkClass = (id) =>
    `nav-item nav-link ${activeSection === id ? "text-success fw-bold" : ""}`;

  return (
    <div className="container-xxl position-relative p-0">

      {/* ================= CSS INSIDE THIS FILE ================= */}
      <style>{`
        .typing-cursor {
          display: inline-block;
          width: 2px;
          background: #fff;
          animation: blink 0.7s steps(1) infinite;
          margin-left: 3px;
        }

        @keyframes blink {
          50% { opacity: 0; }
        }
      `}</style>
      {/* ======================================================== */}

      {/* ===== Navbar ===== */}
      <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
        <a
          href="#home"
          className="navbar-brand p-0 d-flex align-items-center"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("home").scrollIntoView({ behavior: "smooth" });
          }}
        >
          <img
            src={logo}
            alt="Hira Overseas Logo"
            style={{
              height: "40px",
              width: "auto",
              marginRight: "10px",
              objectFit: "contain",
              borderRadius: "5px",
            }}
          />
          <h1 className="m-0" style={{ fontFamily: "roboto", fontSize: "28px", color: "" }}>
            Hira Overseas
          </h1>
        </a>


        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="fa fa-bars"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div
            className="navbar-nav ms-auto py-0"
            style={{ whiteSpace: "nowrap", flexWrap: "nowrap" }}
          >


            <a
              href="#home"
              className={getLinkClass("home")}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("home").scrollIntoView({ behavior: "smooth" });
              }}
            >
              Home
            </a>

            <a
              href="#about"
              className={getLinkClass("about")}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("about").scrollIntoView({ behavior: "smooth" });
              }}
            >
              About Us
            </a>

            <a
              href="#service"
              className={getLinkClass("service")}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("service").scrollIntoView({ behavior: "smooth" });
              }}
            >
              Services
            </a>
            <a
              href="#career"
              className={getLinkClass("career")}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("career").scrollIntoView({ behavior: "smooth" });
              }}
            >
              Career
            </a>

            <a
              href="#testinomial"
              className={getLinkClass("testinomial")}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("testinomial").scrollIntoView({ behavior: "smooth" });
              }}
            >
              Testinomial
            </a>
            <a
              href="#countries"
              className={getLinkClass("countries")}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("countries").scrollIntoView({ behavior: "smooth" });
              }}
            >
              Countries
            </a>


            <a
              href="#contact"
              className={getLinkClass("contact")}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
              }}
            >
              Contact
            </a>

          </div>


        </div>
      </nav>

      {/* ===== Hero Section ===== */}
      <div className="container-xxl bg-primary hero-header" id="home">
        <div className="container">
          <div className="row g-5 align-items-center">

            {/* LEFT SIDE TEXT */}
            <div
              className="col-lg-6 text-center text-lg-start"
              style={{ marginTop: "-40px" }}
            >
              {/* ⭐ Typing Text */}
              <h1 className="text-white mb-4" style={{ fontFamily: "roboto" }}>
                {typedText}
                <span className="typing-cursor"></span>
              </h1>

              <p
                className="text-white pb-3 animated zoomIn"
                style={{ fontSize: "20px" }}
              >
                We provide highly qualified Doctors, Engineers, Nurses, Paramedical Staff, and Skilled Tradesmen to leading institutions across the world
              </p>
              <div className="text-center mt-4">
                <a
                  href="#contact"
                  className="btn btn-dark rounded-pill px-4 py-2"
                  style={{ fontSize: "18px", fontWeight: "600" }}
                >
                  Request Manpower →
                </a>
              </div>
            </div>


            {/* RIGHT SIDE IMAGE */}
            <div
              className="col-lg-6 text-center text-lg-start"
              style={{ marginTop: "-40px" }}
            >
              <img
                className="img-fluid animated zoomIn"
                src="img/img1.png"
                alt="Hero Illustration"
              />
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}
