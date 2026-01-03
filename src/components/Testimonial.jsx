// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/pagination";

// export default function Testimonial() {
//   const testimonials = [
//     {
//       img: "img/testimonial-1.jpg",
//       name: "Client Name",
//       role: "Profession",
//       text: "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam",
//     },
//     {
//       img: "img/testimonial-2.jpg",
//       name: "Client Name",
//       role: "Profession",
//       text: "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam",
//     },
//     {
//       img: "img/testimonial-3.jpg",
//       name: "Client Name",
//       role: "Profession",
//       text: "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam",
//     },
//     {
//       img: "img/testimonial-4.jpg",
//       name: "Client Name",
//       role: "Profession",
//       text: "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam",
//     },
//   ];

//   return (
//     <div className="container-xxl py-6" id="testinomial">
//       <div className="container">
//         <div
//           className="mx-auto text-center"
//           style={{ maxWidth: "600px" }}
//         >
//           <div className="d-inline-block border border-primary rounded-pill text-primary px-4 mb-3">
//             Testimonial
//           </div>
//           <h2 className="mb-5">What Our Clients Say!</h2>
//         </div>

//         {/* Swiper Carousel */}
//         <Swiper
//           modules={[Autoplay, Pagination]}
//           autoplay={{ delay: 2000, disableOnInteraction: false }}
//           centeredSlides={true}
//           slidesPerView={1}
//           loop={true}
//           pagination={{ clickable: true }}
//           style={{ paddingBottom: "50px" }}
//         >
//           {testimonials.map((t, index) => (
//             <SwiperSlide key={index}>
//               <div className="testimonial-item rounded p-4 text-center mx-auto" style={{ maxWidth: "600px" }}>
//                 <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
//                 <p>{t.text}</p>
//                 <div className="d-flex justify-content-center align-items-center">
//                   <img
//                     className="img-fluid flex-shrink-0 rounded-circle"
//                     src={t.img}
//                     alt={t.name}
//                     style={{ width: "60px", height: "60px" }}
//                   />
//                   <div className="ps-3 text-start">
//                     <h6 className="mb-1">{t.name}</h6>
//                     <small>{t.role}</small>
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { supabase } from "../supabaseClient";

import "swiper/css";
import "swiper/css/pagination";

export default function Testimonial() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    const { data, error } = await supabase
      .from("testimonials")
      .select("id, name, profession, description, photo_url")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching testimonials:", error.message);
    } else {
      setTestimonials(data || []);
    }
    setLoading(false);
  };

  if (loading) {
    return (
      <div className="container-xxl py-6 text-center">
        <p>Loading testimonials...</p>
      </div>
    );
  }

  if (testimonials.length === 0) {
    return (
      <div className="container-xxl py-6 text-center">
        <p>No testimonials available.</p>
      </div>
    );
  }

  return (
    <div className="container-xxl py-6" id="testinomial">
      <div className="container">
        <div className="mx-auto text-center" style={{ maxWidth: "600px" }}>
          <div className="d-inline-block border border-primary rounded-pill text-primary px-4 mb-3">
            Testimonial
          </div>
          <h2 className="mb-5">What Our Clients Say!</h2>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          centeredSlides
          slidesPerView={1}
          loop
          pagination={{ clickable: true }}
          style={{ paddingBottom: "50px" }}
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <div
                className="testimonial-item rounded p-4 text-center mx-auto"
                style={{ maxWidth: "600px" }}
              >
                <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>

                <p>{t.description}</p>

                <div className="d-flex justify-content-center align-items-center">
                  <img
                    className="img-fluid flex-shrink-0 rounded-circle"
                    src={t.photo_url || "/img/default-avatar.png"}
                    alt={t.name}
                    style={{
                      width: "60px",
                      height: "60px",
                      objectFit: "cover",
                    }}
                  />

                  <div className="ps-3 text-start">
                    <h6 className="mb-1">{t.name}</h6>
                    <small>{t.profession}</small>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
