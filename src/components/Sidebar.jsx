import React from "react";
import { assets } from "../assets/assets";
import "../components/HomePage.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const goToFront = () => {
    navigate("/");
  };
  return (
    <div>
      <div className="sidebar">
        <div onClick={goToFront} className="log">
          <img src={assets.logo} alt="Logo" className="logo1" />
          <p>Vibee</p>
        </div>
        <div className="line"></div>
        <div className="nav active">
          <Link to="/home">
            <img src={assets.home_icon} alt="" />
            <p>Home</p>
          </Link>
        </div>
        <div className="nav">
          <img src={assets.search_icon} alt="" />
          <p>Search</p>
        </div>
        <div className="nav">
          <img src={assets.queue_icon} alt="" />
          <p>Your Library</p>
        </div>
        <div className="line"></div>

        <h2>Recently Played</h2>

        <h2>Create Playlist</h2>
        <div className="playlist">
          <div className="play">
            <img src={assets.plus_icon} alt="" />
            <p>Playlist 1</p>
          </div>
          <div className="play">
            <img src={assets.like_icon} alt="" />
            <p>Liked Songs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
