import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

export default function Footer() {
  const LINKS = [
    { label: "About Us", to: "/about" },
    { label: "Services", to: "/services" },
    { label: "Career", to: "/career" },
    { label: "Countries", to: "/countries" },
    { label: "Testimonials", to: "/testimonial" },
    { label: "Contact Us", to: "/contact" },
  ];

  const SOCIALS = [
    { icon: "fab fa-facebook-f", href: "https://facebook.com" },
    { icon: "fab fa-instagram", href: "https://instagram.com" },
    { icon: "fab fa-linkedin-in", href: "https://linkedin.com" },
    { icon: "fab fa-youtube", href: "https://youtube.com" },
    { icon: "fab fa-twitter", href: "https://twitter.com" },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
              <img src={logo} alt="Hira Overseas" style={{ height: 40, width: "auto", opacity: 0.85 }} />
              <span className="brand-name" style={{ color: "white" }}>Hira <span style={{ color: "var(--accent)" }}>Overseas</span></span>
            </div>
            <p>
              A global manpower consultancy connecting exceptional talent with leading employers
              across the Middle East, Europe, and beyond.
            </p>
            <div className="social-links">
              {SOCIALS.map((s) => (
                <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" className="social-link">
                  <i className={s.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h5>Navigation</h5>
            <ul className="footer-links">
              {LINKS.map((l) => (
                <li key={l.to}>
                  <Link to={l.to}>{l.label}</Link>
                </li>
              ))}

              {/* Admin Login Link */}
              <li>
                <Link to="/admin">Admin Login</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h5>Our Services</h5>
            <ul className="footer-links">
              {["Medical & Healthcare", "Engineering & Technical", "Skilled Workforce", "Paramedical Staff", "Visa Processing"].map((s) => (
                <li key={s}><a href="/services">{s}</a></li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer-col">
            <h5>Newsletter</h5>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.88rem", marginBottom: 0 }}>
              Subscribe for job alerts, updates, and overseas opportunities.
            </p>
            <div className="newsletter-form">
              <input type="email" placeholder="Your email address" />
              <button>Subscribe</button>
            </div>


            <div style={{ marginTop: 28 }}>
              <p
                style={{
                  fontSize: "0.78rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "rgba(255,255,255,0.35)",
                  marginBottom: 14,
                }}
              >
                Head Office
              </p>

              {/* Location */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 10,
                  marginBottom: 12,
                  color: "rgba(255,255,255,0.55)",
                  fontSize: "0.88rem",
                  lineHeight: 1.7,
                }}
              >
                <i className="fas fa-map-marker-alt" style={{ marginTop: 5 }}></i>
                <p style={{ margin: 0, color: "rgba(255,255,255,0.55)" }}>
                  CV Raman Marg, Sarai Jullena,<br />
                  New Friends Colony,<br />
                  New Delhi, Delhi 110025
                </p>
              </div>

              {/* Phone */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 10,
                  color: "rgba(255,255,255,0.55)",
                  fontSize: "0.88rem",
                }}
              >
                <i className="fas fa-phone-alt"></i>
                <a
                  href="tel:+919999999999"
                  style={{ color: "rgba(255,255,255,0.55)", textDecoration: "none" }}
                >
                  +91 99999 99999
                </a>
              </div>

              {/* Email */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  color: "rgba(255,255,255,0.55)",
                  fontSize: "0.88rem",
                }}
              >
                <i className="fas fa-envelope"></i>
                <a
                  href="mailto:info@hiraoverseas.com"
                  style={{ color: "rgba(255,255,255,0.55)", textDecoration: "none" }}
                >
                  info@hiraoverseas.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">

          <p>&copy; {new Date().getFullYear()} <a href="/">HiraOverseas.com</a>. All Rights Reserved.</p>
          <p>Designed by <a href="https://www.linkedin.com/in/ankit-chauhan-b08a0a24b/" target="_blank" rel="noopener noreferrer">Ankit Chauhan</a></p>
        </div>
      </div>
    </footer>
  );
}
