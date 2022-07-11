import React from "react";
import "./chatHistory.css";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
const SEARCHBOX = () => {
  return (
    <div className="searchCon">
    <div className="search-box">
      <input type="text" placeholder="Search" />
    </div>
    <button><span><SearchRoundedIcon className="searchIcon" />
    </span></button>
    </div>
  );
};
export default SEARCHBOX;
