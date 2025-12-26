import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function NavbarHero() {
  const location = useLocation();

  // 🔹 Background images
  const images = [
    "/img/1.jpg",
    "/img/2.jpg",
    "/img/3.jpg",
    "/img/4.jpg",
  ];

  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState(1);
  const [fade, setFade] = useState(false);

  // ⭐ Typing Animation
  const fullText =
    "Global Talent. Delivered with Precision, simple peace of mind ";
  const [typedText, setTypedText] = useState("");

  // 🔹 Preload images (prevents blank flash)
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // 🔹 Smooth image cross-fade
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);

      setTimeout(() => {
        setCurrent(next);
        setNext((next + 1) % images.length);
        setFade(false);
      },1000); // fade duration
    }, 3000); // image change interval

    return () => clearInterval(interval);
  }, [next, images.length]);

  // 🔹 Typing effect
  useEffect(() => {
    let i = 0;
    const speed = 50;

    const timer = setInterval(() => {
      setTypedText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(timer);
    }, speed);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* ================= CSS ================= */}
      <style>{`
        .hero-header {
          position: relative;
          min-height: 100vh;
          padding: 12rem 0 9rem 0;
          overflow: hidden;
        }

        .hero-header::after {
          content: "";
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.45);
          z-index: -1;
        }

        .hero-content {
          position: relative;
          z-index: 2;
        }

        .typing-cursor {
          display: inline-block;
          width: 2px;
          background: #ffffff;
          animation: blink 0.7s steps(1) infinite;
          margin-left: 4px;
        }

        @keyframes blink {
          50% { opacity: 0; }
        }

        @media (max-width: 768px) {
          .hero-header {
            padding: 9rem 0 6rem 0;
          }
        }
      `}</style>
      {/* ======================================= */}

      {location.pathname === "/" && (
        <div
          className="container-xxl hero-header"
          id="home"
          style={{ marginTop: "70px" }}
        >
          {/* 🔥 BACKGROUND IMAGES (Cross-Fade) */}
          <img
            src={images[current]}
            alt="Recruitment background"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "opacity 1s ease-in-out",
              opacity: fade ? 0 : 1,
              zIndex: -2,
              filter: "brightness(0.6)",
            }}
          />

          <img
            src={images[next]}
            alt=""
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "opacity 1s ease-in-out",
              opacity: fade ? 1 : 0,
              zIndex: -2,
              filter: "brightness(0.6)",
            }}
          />

          {/* ===== CONTENT ===== */}
          <div className="container hero-content">
            <div className="row g-5 align-items-center">
              <div className="col-lg-6 text-center text-lg-start">
                <h1 className="text-white mb-4" style={{ fontFamily: "roboto" }}>
                  {typedText}
                  <span className="typing-cursor"></span>
                </h1>

                <p
                  className="text-white pb-3 animated zoomIn"
                  style={{ fontSize: "20px" }}
                >
                  We provide highly qualified Doctors, Engineers, Nurses,
                  Paramedical Staff, and Skilled Tradesmen to leading
                  institutions across the world.
                </p>

                <div className="mt-4">
                  <Link
                    to="/contact"
                    className="btn btn-primary rounded-pill px-4 py-2"
                    style={{ fontSize: "18px", fontWeight: "600" }}
                  >
                    Request Manpower →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
