import React, { useState } from "react";
import { supabase } from "../supabaseClient";

export default function VideoUpload() {
  const [videoFile, setVideoFile] = useState(null);
  const [videoTitle, setVideoTitle] = useState("");
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const generateThumbnail = (file) => {
    return new Promise((resolve) => {
      const video = document.createElement("video");
      video.src = URL.createObjectURL(file);
      video.crossOrigin = "anonymous";
      video.muted = true;

      video.onloadeddata = () => {
        video.currentTime = 1;
      };

      video.onseeked = () => {
        const canvas = document.createElement("canvas");
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;

        const ctx = canvas.getContext("2d");
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

        canvas.toBlob((blob) => {
          resolve(blob);
        }, "image/png");
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!videoFile || !videoTitle) {
      setError("Please select a video file and enter a title.");
      return;
    }

    try {
      setUploading(true);
      setError("");

      /* ===== Upload Video ===== */
      const videoExt = videoFile.name.split(".").pop();
      const videoName = `${Date.now()}.${videoExt}`;
      const videoPath = `videos/${videoName}`;

      await supabase.storage
        .from("hira-overseas-videos")
        .upload(videoPath, videoFile);

      const { data: videoUrlData } = supabase.storage
        .from("hira-overseas-videos")
        .getPublicUrl(videoPath);

      /* ===== Generate Thumbnail ===== */
      const thumbBlob = await generateThumbnail(videoFile);
      const thumbName = `${Date.now()}.png`;
      const thumbPath = `thumbnails/${thumbName}`;

      await supabase.storage
        .from("hira-overseas-videos")
        .upload(thumbPath, thumbBlob);

      const { data: thumbUrlData } = supabase.storage
        .from("hira-overseas-videos")
        .getPublicUrl(thumbPath);

      /* ===== Save to DB ===== */
      await supabase.from("videos").insert([
        {
          title: videoTitle,
          url: videoUrlData.publicUrl,
          thumbnail_url: thumbUrlData.publicUrl,
        },
      ]);

      setMessage("Video uploaded successfully!");
      setVideoFile(null);
      setVideoTitle("");
    } catch (err) {
      console.error(err);
      setError("Upload failed");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="bg-light rounded p-4">
      <h4 className="mb-4">Upload Video</h4>

      {message && <div className="alert alert-success">{message}</div>}
      {error && <div className="alert alert-danger">{error}</div>}

      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-3"
          placeholder="Video title"
          value={videoTitle}
          onChange={(e) => setVideoTitle(e.target.value)}
        />

        <input
          type="file"
          className="form-control mb-3"
          accept="video/*"
          onChange={(e) => setVideoFile(e.target.files[0])}
        />

        <button className="btn btn-primary" disabled={uploading}>
          {uploading ? "Uploading..." : "Upload Video"}
        </button>
      </form>
    </div>
  );
}
