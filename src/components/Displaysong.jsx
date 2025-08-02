import React, { useRef, useState, useEffect } from "react";
import Search from "./Search";
import SongItem from "./SongItem";
import { useNavigate, useParams } from "react-router-dom";
import { assets, songsData } from "../assets/assets";
import Sidebar from "./Sidebar";
import "./DisplaySong.css";

const Displaysong = () => {
  const { id } = useParams();

  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  const nextSong = () => {
    const nextId = parseInt(id) + 1;
    if (nextId < songsData.length) {
      setIsPlaying(false);
      navigate(`/song/${nextId}`);
    }
  };
  const prevSong = () => {
    const prevId = parseInt(id) - 1;
    if (prevId >= 0) {
      setIsPlaying(false);
      navigate(`/song/${prevId}`);
    }
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
    setDuration(audioRef.current.duration);
  };

  const handleMetadataLoaded = () => {
    setDuration(audioRef.current.duration);
  };

  const handleProgressBarChange = (e) => {
    const newTime = e.target.value;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener("timeupdate", handleTimeUpdate);
      audioRef.current.addEventListener("loadedmetadata", handleMetadataLoaded);
    }
    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener("timeupdate", handleTimeUpdate);
        audioRef.current.removeEventListener(
          "loadedmetadata",
          handleMetadataLoaded
        );
      }
    };
  });

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  const songData = songsData[id];
  const navigate = useNavigate();
  const goToHome = () => {
    navigate(-1);
  };

  return (
    <div className="display-song">
      <Search />
      <Sidebar />
      <div className="display-song-container">
        <div className="song-item-container">
          <img onClick={goToHome} className="close" src={assets.close} alt="" />
          <h1>{songData.name}</h1>
          <p>{songData.desc}</p>
          <img src={songData.image} alt={songData.name} />
          <audio src={songData.file} ref={audioRef}></audio>
          <div className="song-det">
            <div className="song-controls">
              <img src={assets.search_icon} alt="" />
              <img onClick={() => prevSong()} src={assets.prev_icon} alt="" />
              <img
                src={isPlaying ? assets.pause_icon : assets.play_icon}
                onClick={togglePlay}
                alt=""
              />
              <img onClick={() => nextSong()} src={assets.next_icon} alt="" />
              <img src={assets.loop_icon} alt="" />
            </div>

            <div className="song-timer">
              <span>{formatTime(currentTime)}</span>
              <input
                type="range"
                min="0"
                max={duration}
                value={currentTime}
                onChange={handleProgressBarChange}
              />
              <span>{formatTime(duration)}</span>
            </div>
            <div className="song-icons">
              <img src={assets.plays_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img src={assets.queue_icon} alt="" />
              <img src={assets.speaker_icon} alt="" />
              <img src={assets.volume_icon} alt="" />
              <img src={assets.mini_player_icon} alt="" />
              <img src={assets.zoom_icon} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Displaysong;
