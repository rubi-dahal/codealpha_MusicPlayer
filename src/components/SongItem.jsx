import React from "react";
import "./SongItem.css";
import { useNavigate } from "react-router-dom";

const SongItem = ({ image, name, desc, id }) => {
  const navigate = useNavigate();

  return (
    <div className="album-item" onClick={() => navigate(`/song/${id}`)}>
      <img src={image} alt={name} className="song-image" />
      <div className="song-details">
        <h3 className="song-name">{name}</h3>
        <p className="song-description">{desc}</p>
      </div>
    </div>
  );
};

export default SongItem;
