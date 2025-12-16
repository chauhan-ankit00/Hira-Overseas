// import React, { useEffect, useState } from "react";
// import { Link, useLocation } from "react-router-dom";


// export default function NavbarHero() {
//   const location = useLocation();
  
//   // ⭐ Typing Animation
//   const fullText =
//     "Global Talent. Delivered with Precision, simple peace of mind ";
//   const [typedText, setTypedText] = useState("");

//   useEffect(() => {
//     let index = 0;
//     const speed = 50;

//     const timer = setInterval(() => {
//       setTypedText(fullText.slice(0, index));
//       index++;

//       if (index > fullText.length) clearInterval(timer);
//     }, speed);

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <>
//       {/* ================= CSS INSIDE THIS FILE ================= */}
//       <style>{`
//         .typing-cursor {
//           display: inline-block;
//           width: 2px;
//           background: #fff;
//           animation: blink 0.7s steps(1) infinite;
//           margin-left: 3px;
//         }

//         @keyframes blink {
//           50% { opacity: 0; }
//         }
//       `}</style>
//       {/* ======================================================== */}

//       {/* ===== Hero Section ===== */}
//       {location.pathname === "/" && (
//         <div className="container-xxl bg-primary hero-header" id="home" style={{ paddingTop: '140px', marginTop: '10px' }}>
//           <div className="container">
//             <div className="row g-5 align-items-center">

//               {/* LEFT SIDE TEXT */}
//               <div
//                 className="col-lg-6 text-center text-lg-start"
//                 style={{ marginTop: "0" }}
//               >
//                 {/* ⭐ Typing Text */}
//                 <h1 className="text-white mb-4" style={{ fontFamily: "roboto" }}>
//                   {typedText}
//                   <span className="typing-cursor"></span>
//                 </h1>

//                 <p
//                   className="text-white pb-3 animated zoomIn"
//                   style={{ fontSize: "20px" }}
//                 >
//                   We provide highly qualified Doctors, Engineers, Nurses, Paramedical Staff, and Skilled Tradesmen to leading institutions across the world
//                 </p>
//                 <div className="text-center mt-4">
//                   <Link
//                     to="/contact"
//                     className="btn btn-dark rounded-pill px-4 py-2"
//                     style={{ fontSize: "18px", fontWeight: "600" }}
//                   >
//                     Request Manpower →
//                   </Link>
//                 </div>
//               </div>


//               {/* RIGHT SIDE IMAGE */}
//               <div
//                 className="col-lg-6 text-center text-lg-start"
//                 style={{ marginTop: "0" }}
//               >
//                 <img
//                   className="img-fluid animated zoomIn"
//                   src="img/img1.png"
//                   alt="Hero Illustration"
//                 />
//               </div>

//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }


import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function NavbarHero() {
  const location = useLocation();

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

  return (
    <>
      {/* ================= CSS ================= */}
      <style>{`
        /* HERO WRAPPER */
        .hero-header {
          position: relative;
          min-height: 100vh;
          padding: 12rem 0 9rem 0;
          overflow: hidden;
        }

        /* VIDEO BACKGROUND */
        .hero-video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: -2;
        }

        /* DARK OVERLAY */
        .hero-header::after {
          content: "";
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.45);
          z-index: -1;
        }

        /* CONTENT ABOVE VIDEO */
        .hero-content {
          position: relative;
          z-index: 2;
        }

        /* TYPING CURSOR */
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

      {/* ===== HERO SECTION (ONLY HOME) ===== */}
      {location.pathname === "/" && (
        <div className="container-xxl hero-header" id="home" style={{marginTop:'70px'}}>

          {/* 🎥 Background Video */}
          <video
            className="hero-video"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/img/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* CONTENT */}
          <div className="container hero-content">
            <div className="row g-5 align-items-center">

              {/* LEFT SIDE TEXT */}
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

              {/* RIGHT SIDE IMAGE */}
              {/* <div className="col-lg-6 text-center">
                <img
                  className="img-fluid animated zoomIn"
                  src="img/img1.png"
                  alt="Hero Illustration"
                />
              </div> */}

            </div>
          </div>
        </div>
      )}
    </>
  );
}
