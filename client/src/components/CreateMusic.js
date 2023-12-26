import React, { useState } from 'react';
import axiosInstance from '../utils/axiosInstance'
import { useNavigate } from 'react-router-dom';

const CreateMusic = () => {
  const [formData, setFormData] = useState({
    title: '',
    artist: '',
    url: '',
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Implement the logic to send the form data to the server (POST request)
    const response = await axiosInstance.post('/api/v1/music',formData);
    if(response.status === 201){
        setFormData({
            title: '',
            artist: '',
            url: '',
          })
          navigate("/music-lists");
    }
    console.log('Form submitted:', response ,formData);
  };

  return (
    <div className="container mt-5">
      <h2>Create Music</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="artist" className="form-label">
            Artist
          </label>
          <input
            type="text"
            className="form-control"
            id="artist"
            name="artist"
            value={formData.artist}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="url" className="form-label">
            URL
          </label>
          <input
            type="text"
            className="form-control"
            id="url"
            name="url"
            value={formData.url}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Create Music
        </button>
      </form>
    </div>
  );
};

export default CreateMusic;