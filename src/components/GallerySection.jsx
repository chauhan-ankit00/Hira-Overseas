import React from "react";
import PhotoGallery from "./PhotoGallery";
import img1 from "./img/1.png";

export default function GallerySection() {
  const images = [
    img1,

  ];

  return (
    <div id="gallery" className="container-xxl py-6">
      <h2
        className="text-center mb-5"
        style={{ fontFamily: "Roboto", fontWeight: "700", fontSize: "42px" }}
      >
        Photo Gallery
      </h2>

      <PhotoGallery images={images} />
    </div>
  );
}
