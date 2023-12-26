import React, { useState, useEffect } from 'react';
import axiosInstance from '../utils/axiosInstance'
import { useParams,useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toast'
function UpdateMusic() {
  const { id } = useParams();
  const [music, setMusic] = useState({});
  const [updatedTitle, setUpdatedTitle] = useState('');
  const [updatedArtist, setUpdatedArtist] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const fetchMusicDetails = async () => {
      try {
        const response = await axiosInstance.get(`/api/v1/music/${id}`);
            setMusic(response.data.music);
            setUpdatedTitle(response.data.music.title);
            setUpdatedArtist(response.data.music.artist);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMusicDetails();
  }, [id]);

  const handleUpdate = async () => {
    try {
      const update = await axiosInstance.patch(`/api/v1/music/${id}`, {
        title: updatedTitle,
        artist: updatedArtist,
      });
      if(update.data.status && update.data.status === 'succes'){
        toast('Track updated successfully!')
        navigate("/music-lists");
      }
      // Redirect or show a success message as needed
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Update Music</h2>
      <div className="card">
        <div className="card-body">
          <p className="card-text">Title: {music.title}</p>
          <p className="card-text">Artist: {music.artist}</p>

          <form>
            <div className="mb-3">
              <label htmlFor="updatedTitle" className="form-label">
                Updated Title:
              </label>
              <input
                type="text"
                className="form-control"
                id="updatedTitle"
                value={updatedTitle}
                onChange={(e) => setUpdatedTitle(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="updatedArtist" className="form-label">
                Updated Artist:
              </label>
              <input
                type="text"
                className="form-control"
                id="updatedArtist"
                value={updatedArtist}
                onChange={(e) => setUpdatedArtist(e.target.value)}
              />
            </div>

            <button type="button" className="btn btn-primary" onClick={handleUpdate}>
              Update Music
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default UpdateMusic;
