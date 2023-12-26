import React, { useState } from 'react';
import axiosInstance from '../utils/axiosInstance'
import AudioPlayer from 'react-audio-player';
// import CustomAudioPlayer from "./CustomAudioPlayer";
const MusicSearch = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [selectedTrack, setSelectedTrack] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axiosInstance.get(`/api/v1/music/search?track=${query}`);
      console.log(response.data.tracks);
      setResults(response.data.tracks);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='pt-5 mt-5'>
      <div className="card shadow mb-5 bg-card">
        <div className="card-body">
          <input type="text" value={query} className='form-control' onChange={(e) => setQuery(e.target.value)} />
          <button className='btn btn-secondary my-3' onClick={handleSearch}>Search track</button>
        </div>
      </div>
      <ul className='musicList'>
        {results.map((track) => (
          <li  className='border border-danger py-2 mb-2 rounded' key={track._id} onClick={() => setSelectedTrack(track)}>
            {track.title} - {track.artist}
          </li>
        ))}
      </ul>
      {/* <CustomAudioPlayer audioSrc="/pahlevi_ma.mp3" /> */}
      {selectedTrack && (
        <AudioPlayer
          src={selectedTrack.url}
          // src="/pahlevi_ma.mp3"
          onEnded={() => setSelectedTrack(null)}
          autoPlay
          controls
        />
      )}
    </div>
  );
};

export default MusicSearch;
