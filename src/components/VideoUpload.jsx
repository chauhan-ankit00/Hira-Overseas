import React, { useState } from 'react';
import { supabase } from '../supabaseClient'; // Assuming you have a supabaseClient.js

const VideoUpload = () => {
  const [videoFile, setVideoFile] = useState(null);
  const [videoTitle, setVideoTitle] = useState('');
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleFileChange = (e) => {
    setVideoFile(e.target.files[0]);
  };

  const handleTitleChange = (e) => {
    setVideoTitle(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!videoFile || !videoTitle) {
      setError('Please select a video file and enter a title.');
      return;
    }

    setUploading(true);
    setMessage('');
    setError('');

    try {
      const fileExt = videoFile.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `public/videos/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('hira-overseas-bucket') // Replace with your actual bucket name
        .upload(filePath, videoFile);

      if (uploadError) {
        throw uploadError;
      }

      const { data: publicUrlData } = supabase.storage
        .from('hira-overseas-bucket') // Replace with your actual bucket name
        .getPublicUrl(filePath);

      const publicUrl = publicUrlData.publicUrl;

      // Save video URL and title to your database table
      const { error: dbError } = await supabase
        .from('videos') // Replace with your actual table name for videos
        .insert([{ title: videoTitle, url: publicUrl }]);

      if (dbError) {
        throw dbError;
      }

      setMessage('Video uploaded and saved successfully!');
      setVideoFile(null);
      setVideoTitle('');
    } catch (err) {
      setError(`Error: ${err.message}`);
      console.error('Video upload error:', err);
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
        <div className="mb-3">
          <label htmlFor="videoTitle" className="form-label">Video Title</label>
          <input
            type="text"
            className="form-control"
            id="videoTitle"
            value={videoTitle}
            onChange={handleTitleChange}
            required
            disabled={uploading}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="videoFile" className="form-label">Select Video File</label>
          <input
            type="file"
            className="form-control"
            id="videoFile"
            accept="video/*"
            onChange={handleFileChange}
            required
            disabled={uploading}
          />
        </div>
        <button type="submit" className="btn btn-primary" disabled={uploading}>
          {uploading ? 'Uploading...' : 'Upload Video'}
        </button>
      </form>
    </div>
  );
};

export default VideoUpload;
