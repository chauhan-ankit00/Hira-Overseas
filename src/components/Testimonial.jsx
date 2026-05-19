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
    supabase.from("testimonials")
      .select("id, name, profession, description, photo_url")
      .order("created_at", { ascending: false })
      .then(({ data }) => {
        setTestimonials(data || []);
        setLoading(false);
      });
  }, []);

  if (loading) return <section className="section testimonials-bg"><p className="text-center">Loading testimonials...</p></section>;
  if (!testimonials.length) return null;

  return (
    <section className="section testimonials-bg" id="testimonial">
      <div className="container">
        <div className="text-center" style={{ marginBottom: 56 }}>
          <div className="pill-label">Testimonials</div>
          <h2 className="section-title">What Our Clients Say</h2>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          centeredSlides
          slidesPerView={1}
          loop
          pagination={{ clickable: true }}
          style={{ paddingBottom: 52 }}
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <div className="testimonial-card">
                <div className="quote-icon">"</div>
                <p>{t.description}</p>
                <div className="testimonial-author">
                  <img
                    src={t.photo_url || "/img/default-avatar.png"}
                    alt={t.name}
                    className="author-avatar"
                  />
                  <div>
                    <p className="author-name">{t.name}</p>
                    <p className="author-role">{t.profession}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
