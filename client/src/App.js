import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import MusicSearch from './components/MusicSearch';
import CreateMusic from './components/CreateMusic';
import MusicList from './components/MusicList';
import Layout from './layouts/Layout'
import './App.css';
function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<MusicSearch />} />
          <Route path="create-music" element={<CreateMusic />} />
          <Route path="music-lists" element={<MusicList />} />
        </Route>
      </Routes>
  );
}

export default App;
