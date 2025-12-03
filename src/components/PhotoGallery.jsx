import React from "react";
import "./PhotoGallery.css";

export default function PhotoGallery({ images = [] }) {
  return (
    <div className="photo-gallery container py-5">
      <div className="row g-4">
        {images.map((src, index) => (
          <div key={index} className="col-lg-3 col-md-4 col-6">
            <div className="photo-wrapper">
              <img
                src={src}
                alt={`gallery-${index}`}
                className="img-fluid gallery-image"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
