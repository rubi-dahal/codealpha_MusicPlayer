import React from "react";
import "../components/AlbumItem.css";
import { useNavigate } from "react-router-dom";

const AlbumItem = ({ image, name, desc, id }) => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`/album/${id}`)} className="album-item">
      <img src={image} alt={name} className="album-image" />
      <div className="album-details">
        <h3 className="album-name">{name}</h3>
        <p className="album-description">{desc}</p>
      </div>
    </div>
  );
};

export default AlbumItem;
