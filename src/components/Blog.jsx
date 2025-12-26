import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { supabase } from "../supabaseClient";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Blog.css";

export default function Blog() {
  const [videos, setVideos] = useState([]);
  const [active, setActive] = useState(null);
  const [loading, setLoading] = useState(true);

  /* ===== FETCH VIDEOS FROM SUPABASE ===== */
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const { data, error } = await supabase
          .from("videos")
          .select("*")
          .order("created_at", { ascending: false });

        if (error) throw error;

        // Map DB rows → UI format
        const mapped = data.map((v) => ({
          type:"video",
          title: v.title,
          src: v.url,
          type: "video",
          thumbnail: v.thumbnail_url,
          desc: "Latest update from Hira Overseas",
        }));

        setVideos(mapped);
      } catch (err) {
        console.error("Error loading videos:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const closeModal = () => setActive(null);

  if (loading) {
    return (
      <section className="container-xxl py-6 text-center">
        Loading videos...
      </section>
    );
  }

  return (
    <section className="container-xxl py-6" id="blog">
      <div className="container">

        {/* Header */}
        <div className="mx-auto text-center mb-5" style={{ maxWidth: 600 }}>
          <div className="d-inline-block border rounded-pill text-primary px-4 mb-3">
            Blog
          </div>
          <h2 className="mb-2">Video Blogs & Updates</h2>
          <p className="text-muted">
            Stories, insights, and updates from Hira Overseas.
          </p>
        </div>

        {videos.length === 0 ? (
          <p className="text-center">No videos uploaded yet.</p>
        ) : (
          <>
            {/* Desktop / Tablet */}
            <div className="row g-4 d-none d-md-flex">
              {videos.map((item, i) => (
                <div className="col-lg-4 col-md-6" key={i}>
                  <VideoCard item={item} onOpen={() => setActive(i)} />
                </div>
              ))}
            </div>

            {/* Mobile Carousel */}
            <div className="d-block d-md-none">
              <Slider {...sliderSettings}>
                {videos.map((item, i) => (
                  <div key={i} className="px-3">
                    <VideoCard item={item} onOpen={() => setActive(i)} />
                  </div>
                ))}
              </Slider>
            </div>
          </>
        )}

        {/* Modal */}
        {active !== null && videos[active] && (
          <div
            className="modal fade show"
            style={{ display: "block", background: "rgba(0,0,0,0.6)" }}
            onClick={closeModal}
          >
            <div
  className="modal-dialog modal-dialog-centered modal-xl blog-video-modal"
  onClick={(e) => e.stopPropagation()}
>
              <div className="modal-content border-0">
                <div className="modal-header">
                  <h5 className="modal-title">
                    {videos[active].title}
                  </h5>
                  <button type="button" className="btn-close" onClick={closeModal} aria-label="Close" />
                </div>
                <div className="modal-body">
                  <div className="ratio ratio-16x9">
                    <video
                      src={videos[active].src}
                      controls
                      autoPlay
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

/* ===== Video Card ===== */
function VideoCard({ item, onOpen }) {
  return (
    <div className="card h-100 shadow-sm border-0">
      <div className="position-relative" role="button" onClick={onOpen}>
        <img
          src={item.thumbnail}
          className="card-img-top"
          alt={item.title}
          style={{ height: 220, objectFit: "cover" }}
        />
        <div
          className="position-absolute top-50 start-50 translate-middle bg-white rounded-circle d-flex align-items-center justify-content-center"
          style={{ width: 64, height: 64 }}
        >
          <i className="fa fa-play text-primary fs-4" />
        </div>
      </div>

      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text text-muted">{item.desc}</p>
      </div>

      <div className="card-footer bg-white border-0">
        <button
          className="btn btn-primary w-100 rounded-pill"
          onClick={onOpen}
        >
          Watch
        </button>
      </div>
    </div>
  );
}
