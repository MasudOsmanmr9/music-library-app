import React, { useState, useEffect } from 'react';
import axiosInstance from '../utils/axiosInstance'
import { Link } from 'react-router-dom';

const MusicList = () => {
  const [musicList, setMusicList] = useState([]);

  useEffect(() => {
    // Fetch all music on page load (or you can load it differently)
    // Implement the logic for fetching all music here
    const fetchMusic = async () => {
      try {
        const response = await axiosInstance.get('/api/v1/music'); // Assuming your endpoint for fetching all music is '/api/music'
        setMusicList(response.data.data.musics);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMusic();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axiosInstance.delete(`/api/v1/music/${id}`);
      // Refresh the music list after deletion
      const updatedMusicList = musicList.filter((track) => track._id !== id);
      setMusicList(updatedMusicList);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Music List</h2>
      <ul className="list-group">
        {musicList.map((track) => (
          <li key={track._id} className="list-group-item">
            <strong>{track.title}</strong> - {track.artist}
            <div className="float-end">
              <Link to={`/update-music/${track._id}`} className="btn btn-sm btn-info me-2">
                Update
              </Link>
              <button className="btn btn-sm btn-danger" onClick={() => handleDelete(track._id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MusicList;
