import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../images/logo.png";

export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/career", label: "Career" },
    { to: "/countries", label: "Countries" },
    { to: "/testimonial", label: "Testimonials" },
    { to: "/contact", label: "Contact" },
  ];

  const isActive = (to) =>
    to === "/" ? location.pathname === "/" : location.pathname.startsWith(to);

  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .mobile-menu {
            position: fixed;
            top: 72px; left: 0; right: 0;
            background: rgba(255,255,255,0.98);
            backdrop-filter: blur(12px);
            border-bottom: 1px solid var(--border);
            padding: 16px 24px;
            z-index: 999;
            display: flex;
            flex-direction: column;
            gap: 4px;
          }
          .mobile-menu a {
            padding: 12px 16px;
            border-radius: var(--radius-sm);
            font-weight: 500;
            color: var(--mid);
            font-size: 0.95rem;
            display: block;
          }
          .mobile-menu a.active,
          .mobile-menu a:hover { background: var(--light-bg); color: var(--primary); }
          .hamburger { display: flex !important; }
          .nav-links, .nav-cta { display: none !important; }
        }
        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
        }
        .hamburger span {
          display: block; width: 24px; height: 2px;
          background: var(--dark);
          border-radius: 2px;
          transition: all 0.25s;
        }
      `}</style>

      <nav className="navbar">
        <div className="container">
          <div className="navbar-inner">
            <Link to="/" className="navbar-brand">
              <img src={logo} alt="Hira Overseas" className="brand-logo" />
              <span className="brand-name">Hira <span>Overseas</span></span>
            </Link>

            <ul className="nav-links">
              {links.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className={isActive(l.to) ? "active" : ""}>{l.label}</Link>
                </li>
              ))}
            </ul>

            <Link to="/contact" className="btn btn-primary nav-cta">
              Request Manpower →
            </Link>

            <button
              className="hamburger"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div className="mobile-menu">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={isActive(l.to) ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link to="/contact" className="btn btn-primary" style={{ marginTop: 8 }} onClick={() => setMenuOpen(false)}>
            Request Manpower →
          </Link>
        </div>
      )}
    </>
  );
}
