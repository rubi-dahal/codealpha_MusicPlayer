import React from "react";
import { assets } from "../assets/assets";
import "./Front.css";
import { useNavigate } from "react-router-dom";

const Front = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/home");
  };
  return (
    <div id="front">
      <img className="logo" src={assets.spotify_logo} alt="Welcome" />
      <h1>
        Welcome to your{" "}
        <span>
          Mini <br /> Music Universe.
        </span>
      </h1>
      <div className="shine" id="a"></div>
      <div className="shine" id="b"></div>
      <div className="shine" id="c"></div>
      <div className="shine" id="d"></div>
      <p>
        This is a simple music player app built with React. It allows you to
        <br />
        play, pause, and skip through your favorite tracks.
      </p>
      <div className="buttons">
        <button onClick={goToHome} className="one">
          Let's Start
        </button>

        <button className="two">Learn More</button>
      </div>
      <div className="inf">
        <div className="in">
          <img src={assets.in1} alt="" />
          <p>High Quality Audio</p>
        </div>
        <div className="in">
          <img src={assets.in2} alt="" />
          <p>Smart Playlist</p>
        </div>
        <div className="in">
          <img src={assets.in3} alt="" />
          <p>Personalized Experience</p>
        </div>
      </div>
    </div>
  );
};

export default Front;
