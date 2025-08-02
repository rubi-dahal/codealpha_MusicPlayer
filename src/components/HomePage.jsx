import React from "react";
import "../components/HomePage.css";
import Display from "./Display";
import Sidebar from "./Sidebar";
import Search from "./Search";

const HomePage = () => {
  return (
    <div className="home-page">
      <Sidebar />
      <div className="main-part">
        <Search />
        <div className="main">
          <h1>
            Discover your next <span>favorite song.</span>
          </h1>
          <p>
            Explore Millions of songs, create playlist and enjoy high quality
            music Streaming.{" "}
          </p>
        </div>
        <Display />
      </div>
    </div>
  );
};

export default HomePage;
