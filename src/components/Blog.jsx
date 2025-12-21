// import React, { useMemo, useState } from "react";

// /**
//  * Blog component
//  * - Displays video blog cards in a responsive grid
//  * - Click a card to open a modal and play the video
//  * - Supports: YouTube, Vimeo, and local/hosted MP4
//  *
//  * How to use:
//  * <Blog />
//  * or pass your own items:
//  * <Blog items={[{ type:'youtube', id:'abc123', title:'...', ...}]} />
//  */
// export default function Blog({ items }) {
//     const [active, setActive] = useState(null); // the active item index or null

//     // Demo data (replace with your data or pass via props)
//     const data = useMemo(
//         () =>
//             items ?? [
//                 {
//                     type: "youtube",

//                     tags: ["planning", "workflow"],
//                     id: "zhN6SElJeTM",
//                     title: "Hira Overseas - Video Blog",
//                     desc: "Latest update and introduction from Hira Enterprises.",
//                     thumbnail: "https://img.youtube.com/vi/zhN6SElJeTM/hqdefault.jpg",
//                     date: "2025-01-15",
//                     author: "Hira Overseas",
//                 },
//                 {
//                     type: "youtube",

//                     tags: ["planning", "workflow"],
//                     id: "zhN6SElJeTM",
//                     title: "Hira Overseas - Video Blog",
//                     desc: "Latest update and introduction from Hira Enterprises.",
//                     thumbnail: "https://img.youtube.com/vi/zhN6SElJeTM/hqdefault.jpg",
//                     date: "2025-01-15",
//                     author: "Hira Overseas",
//                 },
//                 {
//                     type: "youtube",

//                     tags: ["planning", "workflow"],
//                     id: "zhN6SElJeTM",
//                     title: "Hira Overseas - Video Blog",
//                     desc: "Latest update and introduction from Hira Enterprises.",
//                     thumbnail: "https://img.youtube.com/vi/zhN6SElJeTM/hqdefault.jpg",
//                     date: "2025-01-15",
//                     author: "Hira Overseas",
//                 },

//             ],
//         [items]
//     );

//     const getEmbed = (item) => {
//         if (item.type === "youtube") {
//             const url = `https://www.youtube.com/embed/${item.id}?autoplay=1&rel=0`;
//             return (
//                 <div className="ratio ratio-16x9">
//                     <iframe
//                         src={url}
//                         title={item.title}
//                         allow="autoplay; encrypted-media; picture-in-picture"
//                         allowFullScreen
//                     />
//                 </div>
//             );
//         }
//         if (item.type === "vimeo") {
//             const url = `https://player.vimeo.com/video/${item.id}?autoplay=1`;
//             return (
//                 <div className="ratio ratio-16x9">
//                     <iframe
//                         src={url}
//                         title={item.title}
//                         allow="autoplay; fullscreen; picture-in-picture"
//                         allowFullScreen
//                     />
//                 </div>
//             );
//         }
//         // fallback: mp4
//         return (
//             <div className="ratio ratio-16x9">
//                 <video src={item.src} controls autoPlay />
//             </div>
//         );
//     };

//     const closeModal = () => setActive(null);

//     return (
//         <section className="container-xxl py-6" id="blog">
//             <div className="container">
//                 {/* Header */}
//                 <div
//                     className="mx-auto text-center wow fadeInUp"
//                     data-wow-delay="0.1s"
//                     style={{ maxWidth: 600 }}
//                 >
//                     <div className="d-inline-block border rounded-pill text-primary px-4 mb-3">
//                         Blog
//                     </div>
//                     <h2 className="mb-2">Video Blogs & Updates</h2>
//                     <p className="text-muted mb-5">Stories, insights, and how-tos in video form.</p>
//                 </div>

//                 {/* Grid */}
//                 <div className="row g-4">
//                     {data.map((item, i) => (
//                         <div className="col-lg-4 col-md-6" key={i}>
//                             <div className="card h-100 shadow-sm border-0">
//                                 <div
//                                     className="position-relative"
//                                     role="button"
//                                     onClick={() => setActive(i)}
//                                 >
//                                     {/* Thumbnail */}
//                                     <img
//                                         src={
//                                             item.thumbnail ||
//                                             (item.type === "youtube"
//                                                 ? `https://img.youtube.com/vi/${item.id}/hqdefault.jpg`
//                                                 : undefined)
//                                         }
//                                         className="card-img-top"
//                                         alt={item.title}
//                                         style={{ objectFit: "cover", height: 220 }}
//                                     />
//                                     {/* Play overlay */}
//                                     <div
//                                         className="position-absolute top-50 start-50 translate-middle bg-white rounded-circle d-flex align-items-center justify-content-center"
//                                         style={{ width: 64, height: 64 }}
//                                     >
//                                         <i className="fa fa-play text-primary fs-4" />
//                                     </div>
//                                 </div>

//                                 <div className="card-body">
//                                     <h5 className="card-title">{item.title}</h5>
//                                     <p className="card-text text-muted mb-2" style={{ minHeight: 48 }}>
//                                         {item.desc}
//                                     </p>
//                                     <div className="d-flex align-items-center small text-muted">
//                                         <i className="fa fa-user me-2" />
//                                         {item.author}
//                                         <span className="mx-2">•</span>
//                                         <i className="fa fa-calendar me-2" />
//                                         {new Date(item.date).toLocaleDateString()}
//                                     </div>
//                                     {/* Tags */}
//                                     {item.tags?.length ? (
//                                         <div className="mt-3 d-flex flex-wrap gap-2">
//                                             {item.tags.map((t, tIdx) => (
//                                                 <span key={tIdx} className="badge bg-light text-primary">
//                                                     #{t}
//                                                 </span>
//                                             ))}
//                                         </div>
//                                     ) : null}
//                                 </div>

//                                 <div className="card-footer bg-white border-0 pt-0">
//                                     <button
//                                         className="btn btn-primary w-100 rounded-pill"
//                                         onClick={() => setActive(i)}
//                                     >
//                                         Watch
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>

//                 {/* Modal */}
//                 {active !== null && data[active] && (
//                     <div
//                         className="modal fade show"
//                         style={{
//                             display: "block",
//                             background: "rgba(0,0,0,0.6)"
//                         }}
//                         aria-modal="true"
//                         role="dialog"
//                         onClick={closeModal}
//                     >
//                         <div
//                             className="modal-dialog modal-dialog-centered modal-x1"
//                             style={{
//                                 transform: "translateY(-80px)" // ⭐ move modal up
//                             }}
//                             onClick={(e) => e.stopPropagation()}
//                         >
//                             <div className="modal-content border-0">
//                                 <div className="modal-header">
//                                     <h5 className="modal-title">{data[active].title}</h5>
//                                     <button
//                                         type="button"
//                                         className="btn-close"
//                                         onClick={closeModal}
//                                         aria-label="Close"
//                                     />
//                                 </div>
//                                 <div className="modal-body">{getEmbed(data[active])}</div>
//                             </div>
//                         </div>
//                     </div>
//                 )}

//             </div>
//         </section>
//     );
// }


import React, { useMemo, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Blog({ items }) {
  const [active, setActive] = useState(null);

  const data = useMemo(
    () =>
      items ?? [
        {
          type: "youtube",
          tags: ["planning", "workflow"],
          id: "zhN6SElJeTM",
          title: "Hira Overseas - Video Blog",
          desc: "Latest update and introduction from Hira Enterprises.",
          thumbnail: "https://img.youtube.com/vi/zhN6SElJeTM/hqdefault.jpg",
          date: "2025-01-15",
          author: "Hira Overseas",
        },
        {
          type: "youtube",
          tags: ["planning", "workflow"],
          id: "zhN6SElJeTM",
          title: "Hira Overseas - Video Blog",
          desc: "Latest update and introduction from Hira Enterprises.",
          thumbnail: "https://img.youtube.com/vi/zhN6SElJeTM/hqdefault.jpg",
          date: "2025-01-15",
          author: "Hira Overseas",
        },
        {
          type: "youtube",
          tags: ["planning", "workflow"],
          id: "zhN6SElJeTM",
          title: "Hira Overseas - Video Blog",
          desc: "Latest update and introduction from Hira Enterprises.",
          thumbnail: "https://img.youtube.com/vi/zhN6SElJeTM/hqdefault.jpg",
          date: "2025-01-15",
          author: "Hira Overseas",
        },
      ],
    [items]
  );

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

  const getEmbed = (item) => {
    if (item.type === "youtube") {
      return (
        <div className="ratio ratio-16x9">
          <iframe
            src={`https://www.youtube.com/embed/${item.id}?autoplay=1&rel=0`}
            title={item.title}
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        </div>
      );
    }
    if (item.type === "vimeo") {
      return (
        <div className="ratio ratio-16x9">
          <iframe
            src={`https://player.vimeo.com/video/${item.id}?autoplay=1`}
            title={item.title}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        </div>
      );
    }
    return (
      <div className="ratio ratio-16x9">
        <video src={item.src} controls autoPlay />
      </div>
    );
  };

  const closeModal = () => setActive(null);

  return (
    <section className="container-xxl py-6" id="blog">
      <div className="container">

        {/* Header */}
        <div
          className="mx-auto text-center wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: 600 }}
        >
          <div className="d-inline-block border rounded-pill text-primary px-4 mb-3">
            Blog
          </div>
          <h2 className="mb-2">Video Blogs & Updates</h2>
          <p className="text-muted mb-5">
            Stories, insights, and how-tos in video form.
          </p>
        </div>

        {/* ===== DESKTOP / TABLET GRID ===== */}
        <div className="row g-4 d-none d-md-flex">
          {data.map((item, i) => (
            <div className="col-lg-4 col-md-6" key={i}>
              <VideoCard item={item} onOpen={() => setActive(i)} />
            </div>
          ))}
        </div>

        {/* ===== MOBILE CAROUSEL (<768px) ===== */}
        <div className="d-block d-md-none">
          <Slider {...sliderSettings}>
            {data.map((item, i) => (
              <div key={i} className="px-3">
                <VideoCard item={item} onOpen={() => setActive(i)} />
              </div>
            ))}
          </Slider>
        </div>

        {/* ===== MODAL ===== */}
        {active !== null && data[active] && (
          <div
            className="modal fade show"
            style={{ display: "block", background: "rgba(0,0,0,0.6)" }}
            role="dialog"
            aria-modal="true"
            onClick={closeModal}
          >
            <div
              className="modal-dialog modal-dialog-centered modal-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-content border-0">
                <div className="modal-header">
                  <h5 className="modal-title">{data[active].title}</h5>
                  <button className="btn-close" onClick={closeModal} />
                </div>
                <div className="modal-body">
                  {getEmbed(data[active])}
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

/* 🔹 Reusable Video Card */
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
        <button className="btn btn-primary w-100 rounded-pill" onClick={onOpen}>
          Watch
        </button>
      </div>
    </div>
  );
}
