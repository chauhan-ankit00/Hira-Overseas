import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../images/logo.png"

export default function Navbar() {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("home");

  // ⭐ Detect active route
  useEffect(() => {
    const path = location.pathname;
    if (path === "/") {
      setActiveSection("home");
    } else if (path === "/about") {
      setActiveSection("about");
    } else if (path === "/services") {
      setActiveSection("service");
    } else if (path === "/career") {
      setActiveSection("career");
    } else if (path === "/testimonial") {
      setActiveSection("testinomial");
    } else if (path === "/countries") {
      setActiveSection("countries");
    } else if (path === "/contact") {
      setActiveSection("contact");
    }
  }, [location]);
  
  const getLinkClass = (id) =>
    `nav-item nav-link ${activeSection === id ? "fw-bold" : ""}`;
  
  const getLinkColor = (id) => {
    const isActive = activeSection === id;
    return isActive ? "#00B98E" : "#0E2E50"; // Green for active, dark for others
  };

  return (
    <>
      {/* ================= CSS INSIDE THIS FILE ================= */}
      <style>{`
        .navbar-nav .nav-link {
          transition: color 0.3s ease;
        }
        
        .navbar-nav .nav-link:hover {
          color: #00B98E !important;
        }
        
        .custom-navbar {
          transition: background-color 0.3s ease, box-shadow 0.3s ease;
          position: fixed !important;
          width: 100% !important;
          top: 0 !important;
          left: 0 !important;
          z-index: 999 !important;
          background-color: #FFFFFF !important;
          background: #FFFFFF !important;
        }
      `}</style>
      {/* ======================================================== */}

      {/* ===== Navbar ===== */}
      <nav 
        className="navbar navbar-expand-lg px-4 px-lg-5 py-3 py-lg-0 custom-navbar"
        style={{ 
          backgroundColor: '#FFFFFF',
          background: '#FFFFFF',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          transition: 'all 0.3s ease'
        }}
      >
        <Link
          to="/"
          className="navbar-brand p-0 d-flex align-items-center"
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
          <h1 
            className="m-0" 
            style={{ 
              fontFamily: "roboto", 
              fontSize: "28px", 
              color: "#00B98E",
              transition: 'color 0.3s ease'
            }}
          >
            Hira Overseas
          </h1>
        </Link>


        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          style={{ 
            borderColor: "rgba(0,0,0,0.1)",
            transition: 'border-color 0.3s ease'
          }}
        >
          <span 
            className="fa fa-bars"
            style={{ 
              color: "#0E2E50",
              transition: 'color 0.3s ease'
            }}
          ></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div
            className="navbar-nav ms-auto py-0"
            style={{ whiteSpace: "nowrap", flexWrap: "nowrap" }}
          >


            <Link
              to="/"
              className={getLinkClass("home")}
              style={{ color: getLinkColor("home") }}
            >
              Home
            </Link>

            <Link
              to="/about"
              className={getLinkClass("about")}
              style={{ color: getLinkColor("about") }}
            >
              About Us
            </Link>

            <Link
              to="/services"
              className={getLinkClass("service")}
              style={{ color: getLinkColor("service") }}
            >
              Services
            </Link>
            <Link
              to="/career"
              className={getLinkClass("career")}
              style={{ color: getLinkColor("career") }}
            >
              Career
            </Link>

            <Link
              to="/testimonial"
              className={getLinkClass("testinomial")}
              style={{ color: getLinkColor("testinomial") }}
            >
              Testinomial
            </Link>
            <Link
              to="/countries"
              className={getLinkClass("countries")}
              style={{ color: getLinkColor("countries") }}
            >
              Countries
            </Link>


            <Link
              to="/contact"
              className={getLinkClass("contact")}
              style={{ color: getLinkColor("contact") }}
            >
              Contact
            </Link>

          </div>


        </div>
      </nav>
    </>
  );
}

