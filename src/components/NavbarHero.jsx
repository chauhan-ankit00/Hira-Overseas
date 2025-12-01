import React, { useEffect, useState } from "react";

export default function NavbarHero() {
  const NAV_OFFSET = 80;
  const [activeSection, setActiveSection] = useState("home");

  const handleScrollTo = (sectionId) => (e) => {
    e.preventDefault();

    const target = document.getElementById(sectionId);
    if (!target) return;

    const yOffset =
      target.getBoundingClientRect().top + window.pageYOffset - NAV_OFFSET;

    window.scrollTo({ top: yOffset, behavior: "smooth" });

    setActiveSection(sectionId); // ⭐ Set active section

    // close mobile menu if open
    const collapseEl = document.getElementById("navbarCollapse");
    if (collapseEl && collapseEl.classList.contains("show")) {
      collapseEl.classList.remove("show");
    }
  };

  // ⭐ Detect active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "service", "contact"];

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

      {/* ===== Navbar ===== */}
      <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
        <a
          href="#home"
          className="navbar-brand p-0"
          onClick={handleScrollTo("home")}
        >
          <h1 className="m-0" style={{ fontFamily:'roboto' }}>Hira Enterprises</h1>
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
          <div className="navbar-nav ms-auto py-0">

            <a
              href="#home"
              className={getLinkClass("home")}
              onClick={handleScrollTo("home")}
            >
              Home
            </a>

            <a
              href="#about"
              className={getLinkClass("about")}
              onClick={handleScrollTo("about")}
            >
              About
            </a>

            <a
              href="#service"
              className={getLinkClass("service")}
              onClick={handleScrollTo("service")}
            >
              Service
            </a>

            <a
              href="#contact"
              className={getLinkClass("contact")}
              onClick={handleScrollTo("contact")}
            >
              Contact
            </a>

          </div>

          <a
            href="#"
            className="btn btn-light rounded-pill text-primary py-2 px-4 ms-lg-5"
          >
            Admin Login
          </a>
        </div>
      </nav>

      {/* ===== Hero Section ===== */}
      <div className="container-xxl bg-primary hero-header" id="home">
        <div className="container">
          <div className="row g-5 align-items-center">

            <div className="col-lg-6 text-center text-lg-start" style={{ marginTop: "-40px" }}>
              <h1 className="text-white mb-4 animated zoomIn"style={{ fontFamily:'roboto' }}>
                Specialized Nursing Recruitment & Consulting for Modern Healthcare Needs
              </h1>
              <p className="text-white pb-3 animated zoomIn" style={{ fontSize: "20px" }}>
                Hira Enterprises provides streamlined nursing recruitment and consulting services to meet the growing demands of hospitals, clinics, and healthcare centers. We ensure that the right professionals are placed in the right roles with confidence.
              </p>
            </div>

            <div className="col-lg-6 text-center text-lg-start" style={{ marginTop: "-40px" }}>
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
