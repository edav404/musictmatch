import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Welcome from '../pages/Welcome';
import Login from '../pages/Login';
import Register from '../pages/Register';
import GenreSelection from '../pages/GenreSelection';
import Home from '../pages/Home';
import SongDetail from '../pages/SongDetail';
import Chat from '../pages/Chat';
import Events from '../pages/Events';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/genres" element={<GenreSelection />} />
        <Route path="/home" element={<Home />} />
        <Route path="/song/:id" element={<SongDetail />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
