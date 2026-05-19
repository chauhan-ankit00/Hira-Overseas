import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const IMAGES = ["/img/1.jpg", "/img/7.jpg", "/img/2.jpg", "/img/5.jpg", "/img/3.jpg", "/img/6.jpg", "/img/4.jpg"];
const FULL_TEXT = "Global Talent, Delivered with Precision";

export default function NavbarHero() {
  const location = useLocation();
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(false);
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    IMAGES.forEach((src) => { const img = new Image(); img.src = src; });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => { setCurrent((p) => (p + 1) % IMAGES.length); setFade(false); }, 600);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setTypedText(FULL_TEXT.slice(0, i));
      i++;
      if (i > FULL_TEXT.length) clearInterval(timer);
    }, 55);
    return () => clearInterval(timer);
  }, []);

  if (location.pathname !== "/") return null;

  return (
    <section className="hero">
      <div
        className="hero-bg"
        style={{
          backgroundImage: `url(${IMAGES[current]})`,
          opacity: fade ? 0 : 0.35,
          transition: "opacity 0.8s ease",
        }}
      />
      <div className="hero-overlay" />

      <div className="container hero-content">
        <div style={{ maxWidth: 640 }}>
          <div className="hero-eyebrow">Global Manpower Consultancy</div>

          <h1>
            {typedText}
            <span style={{
              display: "inline-block", width: 3, height: "0.85em",
              background: "var(--accent)", marginLeft: 6, verticalAlign: "middle",
              animation: "blink 0.75s steps(1) infinite"
            }} />
          </h1>

          <style>{`@keyframes blink { 50% { opacity: 0; } }`}</style>

          <p className="hero-sub">
            We provide highly qualified Doctors, Engineers, Nurses, Paramedical Staff,
            and Skilled Tradesmen to leading institutions across the Middle East, Europe, and Africa.
          </p>

          <div className="hero-actions">
            <Link to="/contact" className="btn btn-accent">
              Request Manpower →
            </Link>
            <Link to="/services" className="btn btn-outline-white">
              Our Services
            </Link>
          </div>

          <div className="hero-stats">
            {[
              { num: "10+", label: "Years of Experience" },
              { num: "1K+", label: "Successful Placements" },
              { num: "50+", label: "Trusted Employers" },
              { num: "90%", label: "Success Ratio" },
            ].map((s) => (
              <div className="stat-item" key={s.label}>
                <div className="stat-num">{s.num}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
