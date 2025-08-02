import React from "react";
import { assets } from "../assets/assets";
import "../components/HomePage.css";

const Search = () => {
  return (
    <div>
      <div className="search">
        <img src={assets.search_icon} alt="" />
        <input type="text" placeholder="Search songs, artists, or albums." />
      </div>
    </div>
  );
};

export default Search;
