import React from "react";
import HomePage from "./HomePage";
import Sidebar from "./sidebar";
import Search from "./Search";
import "../components/DisplayAlbum.css";
import { useNavigate, useParams } from "react-router-dom";
import { albumsData, assets, songsData } from "../assets/assets";

const DisplayAlbum = () => {
  const { id } = useParams();
  const albumData = albumsData[id];
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/home");
  };
  return (
    <div className="display-album">
      <Sidebar />
      <Search />
      <div className="album-container">
        <img onClick={goToHome} className="close" src={assets.close} alt="" />
        <img className="main-img" src={albumData.image} alt="" />
        <div className="album-info">
          <h5>Playlist</h5>
          <h2>{albumData.name}</h2>
          <h4>{albumData.desc}</h4>
          <h5>
            <img className="immg" src={assets.logo} alt="" />
            <b>Vibee</b>. 1,323,123 likes , <b>50 Songs</b> about 2 hr 30 min
          </h5>
        </div>
      </div>
      <div className="album-header">
        <p className="album-header-title">
          <b>#</b>Title
        </p>
        <p>Album</p>
        <p>Date Added</p>
        <p>
          <img src={assets.clock_icon} alt="" />
        </p>
      </div>
      <hr />
      {songsData.map((song, index) => (
        <div
          onClick={() => navigate(`/song/${id}`)}
          className="song"
          key={index}
        >
          <p>
            <b>{index + 1}</b>
            <img src={song.image} alt="" />
            {song.name}
          </p>
          <p>{albumData.name}</p>
          <p> 5 Days ago...</p>
          <p>{song.duration}</p>
        </div>
      ))}
    </div>
  );
};

export default DisplayAlbum;
