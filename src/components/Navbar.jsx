import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../images/logo.png";

export default function Navbar() {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const path = location.pathname;
    if (path === "/") setActiveSection("home");
    else if (path === "/about") setActiveSection("about");
    else if (path === "/services") setActiveSection("service");
    else if (path === "/career") setActiveSection("career");
    else if (path === "/testimonial") setActiveSection("testinomial");
    else if (path === "/countries") setActiveSection("countries");
    else if (path === "/contact") setActiveSection("contact");

    // 🔹 Close mobile menu on route change
    const collapseEl = document.getElementById("navbarCollapse");
    if (collapseEl && collapseEl.classList.contains("show")) {
      collapseEl.classList.remove("show");
    }
  }, [location]);

  const getLinkClass = (id) =>
    `nav-item nav-link ${activeSection === id ? "fw-bold" : ""}`;

  const getLinkColor = (id) =>
    activeSection === id ? "#3c51ef" : "#0E2E50";

  // 🔹 Close menu on link click (mobile)
  const closeMenu = () => {
    const collapseEl = document.getElementById("navbarCollapse");
    if (collapseEl && collapseEl.classList.contains("show")) {
      collapseEl.classList.remove("show");
    }
  };

  return (
    <>
      {/* ============== CSS (UNCHANGED) ============== */}
      <style>{`
        .custom-navbar {
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 999;
          background: #ffffff;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }

        .navbar-brand {
          display: flex;
          align-items: center;
          height: 100%;
        }

        .navbar-nav .nav-link {
          transition: color 0.3s ease;
        }

        .navbar-nav .nav-link:hover {
          color: #3c51ef !important;
        }

        @media (max-width: 768px) {
          .navbar-brand img {
            height: 52px !important;
          }
          .navbar-brand h1 {
            font-size: 22px !important;
          }
            .navbar-collapse {
    background: #ffffff;
    padding: 12px 16px;
    border-radius: 0 0 12px 12px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  }
        }
      `}</style>
      {/* ============================================= */}

      <nav
        className="navbar navbar-expand-lg px-4 px-lg-5 custom-navbar"
        style={{ height: "72px" }}
      >
        {/* ===== BRAND (UNCHANGED) ===== */}
        <Link to="/" className="navbar-brand p-0">
          <img
            src={logo}
            alt="Hira Overseas Logo"
            style={{
              height: "68px",
              width: "auto",
              objectFit: "contain",
              marginRight: "12px",
            }}
          />
          <h1
            className="m-0"
            style={{
              fontFamily: "roboto",
              fontSize: "26px",
              fontWeight: "600",
              color: "black",
              lineHeight: "1",
            }}
          >
            Hira Overseas
          </h1>
        </Link>

        {/* Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="fa fa-bars" />
        </button>

        {/* ===== MENU ===== */}
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0">
            <Link to="/" onClick={closeMenu} className={getLinkClass("home")} style={{ color: getLinkColor("home") }}>Home</Link>
            <Link to="/about" onClick={closeMenu} className={getLinkClass("about")} style={{ color: getLinkColor("about") }}>About Us</Link>
            <Link to="/services" onClick={closeMenu} className={getLinkClass("service")} style={{ color: getLinkColor("service") }}>Services</Link>
            <Link to="/career" onClick={closeMenu} className={getLinkClass("career")} style={{ color: getLinkColor("career") }}>Career</Link>
            <Link to="/countries" onClick={closeMenu} className={getLinkClass("countries")} style={{ color: getLinkColor("countries") }}>Countries</Link>
            <Link to="/testimonial" onClick={closeMenu} className={getLinkClass("testinomial")} style={{ color: getLinkColor("testinomial") }}>Testinomial</Link>
            <Link to="/contact" onClick={closeMenu} className={getLinkClass("contact")} style={{ color: getLinkColor("contact") }}>Contact</Link>
          </div>
        </div>
      </nav>
    </>
  );
}
