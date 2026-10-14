import React, { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

const UploadedVideoDisplay = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      setLoading(true);

      const { data, error } = await supabase
        .from("videos")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;

      setVideos(data);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch videos");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteVideo = async (video) => {
    if (!window.confirm(`Delete "${video.title}"?`)) return;

    try {
      /* 1️⃣ Delete from storage */
      const filePath = video.url.split(
        "/storage/v1/object/public/hira-overseas-videos/"
      )[1];

      const { error: storageError } = await supabase.storage
        .from("hira-overseas-videos")
        .remove([filePath]);

      if (storageError) throw storageError;

      /* 2️⃣ Delete from database */
      const { error: dbError } = await supabase
        .from("videos")
        .delete()
        .eq("id", video.id);

      if (dbError) throw dbError;

      /* 3️⃣ Update UI */
      setVideos((prev) => prev.filter((v) => v.id !== video.id));

      alert("Video deleted successfully!");
    } catch (err) {
      console.error("Delete error:", err);
      alert("Failed to delete video");
    }
  };

  if (loading) return <p>Loading videos...</p>;
  if (error) return <p className="text-danger">{error}</p>;

  return (
    <div className="container mt-4">
      <h3 className="mb-4">Uploaded Videos</h3>

      {videos.length === 0 ? (
        <p>No videos uploaded.</p>
      ) : (
        <div className="row">
          {videos.map((video) => (
            <div className="col-md-4 mb-4" key={video.id}>
              <div className="card">
                <video
                  src={video.url}
                  controls
                  className="card-img-top"
                />

                <div className="card-body">
                  <h6 className="card-title">{video.title}</h6>
                  <button
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => handleDeleteVideo(video)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UploadedVideoDisplay;
