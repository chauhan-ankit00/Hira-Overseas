// import React from "react";

// export default function CountriesSection() {
//   const countries = [
//     { title: "United Arab Emirates", text: "Explore world-class healthcare and technical career opportunities in the UAE." },
//     { title: "Saudi Arabia", text: "Saudi Arabia offers high-growth healthcare and engineering roles with tax-free benefits." },
//     { title: "Qatar", text: "Qatar provides excellent opportunities in healthcare, engineering, and infrastructure sectors." },
//     { title: "Oman", text: "Build a rewarding career in Oman with a supportive work environment and stable growth." },
//     { title: "Kuwait", text: "Kuwait presents strong demand for skilled professionals in healthcare and engineering." },
//     { title: "Bahrain", text: "Join Bahrain’s dynamic workforce with opportunities for nurses, engineers, and technicians." },
//     { title: "United Kingdom", text: "UK offers globally recognized pathways for medical and skilled professionals." },
//     { title: "Germany", text: "Germany provides structured career growth with high standards in healthcare and engineering." },
//     { title: "Poland", text: "Poland offers stable opportunities for skilled and semi-skilled professionals across industries." },
//     { title: "Romania", text: "Romania provides diverse openings in healthcare, manufacturing, and technical fields." },
//   ];

//   return (
//     <div className="container-xxl py-6" id="countries">
//   <div className="container">
//     <h2
//       className="text-center mb-5"
//       style={{ fontFamily: "roboto", fontSize: "46px", fontWeight: "700", color: "#13203B" }}
//     >
//       Where Can You Start?
//     </h2>

//     <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center">
//       {countries.map((c, i) => (
//         <div key={i} className="col d-flex">
//           <div className="service-item rounded h-100 d-flex flex-column w-100" style={{ padding: "20px" }}>
//             <div className="p-4 flex-grow-1">
//               <h5 style={{ fontFamily: "roboto", fontWeight: "700", color: "#13203B", marginBottom: "10px" }}>
//                 {c.title}
//               </h5>
//               <p style={{ fontSize: "17px", lineHeight: "1.6", color: "#445065", fontFamily: "roboto" }}>
//                 {c.text}
//               </p>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// </div>

//   );
// }


import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CountriesSection() {
  const countries = [
    { title: "United Arab Emirates", text: "Explore world-class healthcare and technical career opportunities in the UAE." },
    { title: "Saudi Arabia", text: "Saudi Arabia offers high-growth healthcare and engineering roles with tax-free benefits." },
    { title: "Qatar", text: "Qatar provides excellent opportunities in healthcare, engineering, and infrastructure sectors." },
    { title: "Oman", text: "Build a rewarding career in Oman with a supportive work environment and stable growth." },
    { title: "Kuwait", text: "Kuwait presents strong demand for skilled professionals in healthcare and engineering." },
    { title: "Bahrain", text: "Join Bahrain’s dynamic workforce with opportunities for nurses, engineers, and technicians." },
    { title: "United Kingdom", text: "UK offers globally recognized pathways for medical and skilled professionals." },
    { title: "Germany", text: "Germany provides structured career growth with high standards in healthcare and engineering." },
    { title: "Poland", text: "Poland offers stable opportunities for skilled and semi-skilled professionals across industries." },
    { title: "Romania", text: "Romania provides diverse openings in healthcare, manufacturing, and technical fields." },
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1200,
    autoplaySpeed: 2500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,

    responsive: [
      {
        breakpoint: 992, // tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, // ✅ mobile (below 600px)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container-xxl py-6" id="countries">
      <div className="container">
        <h2
          className="text-center mb-5"
          style={{
            fontFamily: "roboto",
            fontSize: "46px",
            fontWeight: "700",
            color: "#13203B",
          }}
        >
          Where Can You Start?
        </h2>

        <Slider {...settings}>
          {countries.map((c, i) => (
            <div key={i} className="px-3">
              <div
                className="service-item rounded h-100 d-flex flex-column"
                style={{ padding: "20px" }}
              >
                <div className="p-4 flex-grow-1">
                  <h5
                    style={{
                      fontFamily: "roboto",
                      fontWeight: "700",
                      color: "#13203B",
                      marginBottom: "10px",
                    }}
                  >
                    {c.title}
                  </h5>
                  <p
                    style={{
                      fontSize: "17px",
                      lineHeight: "1.6",
                      color: "#445065",
                      fontFamily: "roboto",
                    }}
                  >
                    {c.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
