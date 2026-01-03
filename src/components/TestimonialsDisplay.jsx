import React, { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

const TestimonialsDisplay = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase.from("testimonials").select("*");

      if (error) {
        throw error;
      }
      setTestimonials(data);
    } catch (error) {
      console.error("Error fetching testimonials:", error.message);
      setError("Failed to fetch testimonials.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id, photoUrl) => {
    if (!window.confirm("Are you sure you want to delete this testimonial?")) {
      return;
    }

    try {
      // Delete from database
      const { error: dbError } = await supabase
        .from("testimonials")
        .delete()
        .eq("id", id);

      if (dbError) throw dbError;

      // Delete photo from storage if it exists
      if (photoUrl) {
        const filePath = photoUrl.split("/").pop();
        await supabase.storage
          .from("hira-overseas-videos")
          .remove([`testimonials/${filePath}`]);
      }

      setTestimonials(testimonials.filter((t) => t.id !== id));
      alert("Testimonial deleted successfully!");
    } catch (error) {
      console.error("Error deleting testimonial:", error.message);
      alert("Failed to delete testimonial.");
    }
  };

  if (loading) {
    return <div>Loading testimonials...</div>;
  }

  if (error) {
    return <div className="text-danger">{error}</div>;
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Uploaded Testimonials</h2>
      {testimonials.length === 0 ? (
        <p>No testimonials uploaded yet.</p>
      ) : (
        <div className="row">
          {testimonials.map((t) => (
            <div className="col-md-6 mb-4" key={t.id}>
              <div className="card h-100">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    {t.photo_url && (
                      <img
                        src={t.photo_url}
                        alt={t.name}
                        className="rounded-circle me-3"
                        style={{ width: "50px", height: "50px", objectFit: "cover" }}
                      />
                    )}
                    <div>
                      <h5 className="card-title mb-0">{t.name}</h5>
                      <small className="text-muted">{t.profession}</small>
                    </div>
                  </div>
                  <p className="card-text">{t.description}</p>
                  <button
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => handleDelete(t.id, t.photo_url)}
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

export default TestimonialsDisplay;
