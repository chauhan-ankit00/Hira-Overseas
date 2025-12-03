
import React from "react";
import PhotoGallery from "./PhotoGallery";

export default function SachinGallery() {
  // Auto-import all images from the /img folder
  const images = Object.values(
    import.meta.glob("./img2/*.{png,jpg,jpeg,webp}", { eager: true })
  ).map((img) => img.default);

  return (
    <div id="gallery" className="container-xxl py-6">
      <h2
        className="text-center mb-5"
        style={{ fontFamily: "Roboto", fontWeight: "700", fontSize: "42px" }}
      >
        Diagrams Images/Gallery
      </h2>

      <PhotoGallery images={images} />
    </div>
  );
}
