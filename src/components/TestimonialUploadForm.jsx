import React, { useState } from "react";
import { supabase } from "../supabaseClient";

const TestimonialUploadForm = () => {
  const [name, setName] = useState("");
  const [profession, setProfession] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setError("");

    try {
      let photoUrl = "";

      if (photo) {
        const fileExt = photo.name.split(".").pop();
        const fileName = `${Math.random()}.${fileExt}`;
        const filePath = `testimonials/${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from("testinomials") // Using existing bucket
          .upload(filePath, photo);

        if (uploadError) {
          throw uploadError;
        }

        const { data } = supabase.storage
          .from("testinomials")
          .getPublicUrl(filePath);
        
        photoUrl = data.publicUrl;
      }

      const { error: insertError } = await supabase.from("testimonials").insert([
        {
          name,
          profession,
          description,
          photo_url: photoUrl,
        },
      ]);

      if (insertError) {
        throw insertError;
      }

      setMessage("Testimonial uploaded successfully!");
      setName("");
      setProfession("");
      setDescription("");
      setPhoto(null);
      // Reset file input
      e.target.reset();
    } catch (err) {
      setError(`Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-light rounded p-4">
      <h4 className="mb-4">Upload New Testimonial</h4>

      {message && <div className="alert alert-success">{message}</div>}
      {error && <div className="alert alert-danger">{error}</div>}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Profession</label>
          <input
            type="text"
            className="form-control"
            value={profession}
            onChange={(e) => setProfession(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Short Description</label>
          <textarea
            className="form-control"
            rows="3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Photo</label>
          <input
            type="file"
            className="form-control"
            accept="image/*"
            onChange={(e) => setPhoto(e.target.files[0])}
            required
          />
        </div>

        <button
          type="submit"
          className="btn btn-outline-primary"
          disabled={loading}
        >
          {loading ? "Uploading..." : "Upload Testimonial"}
        </button>
      </form>
    </div>
  );
};

export default TestimonialUploadForm;
