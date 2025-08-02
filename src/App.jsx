import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Front from "./components/Front";
import HomePage from "./components/HomePage";
import DisplayAlbum from "./components/DisplayAlbum";
import Displaysong from "./components/Displaysong";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Front />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/album/:id" element={<DisplayAlbum />} />
        <Route path="/song/:id" element={<Displaysong />} />
      </Routes>
    </Router>
  );
};

export default App;
