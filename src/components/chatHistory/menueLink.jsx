import React from "react";
import "./chatHistory.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SaveAltOutlinedIcon from "@mui/icons-material/SaveAltOutlined";
const MENUELINK = () => {
  return (
    <ul className="menu-links">
      <li className="nav-link">
        <a href="#">
          <HomeOutlinedIcon className="icon" />
          <span className="text nav-text">Sessions</span>
        </a>
      </li>

      <li className="nav-link">
        <a href="#">
          <NotificationsActiveOutlinedIcon className="icon" />
          <span className="text nav-text">Notifications</span>
        </a>
      </li>

      <li className="nav-link">
        <a href="#">
          <GroupsOutlinedIcon className="icon" />
          <span className="text nav-text">Groups</span>
        </a>
      </li>

      <li className="nav-link">
        <a href="#">
          <FavoriteBorderOutlinedIcon className="icon" />
          <span className="text nav-text">Likes</span>
        </a>
      </li>

      <li className="nav-link">
        <a href="#">
          <SaveAltOutlinedIcon className="icon" />
          <span className="text nav-text">Exam saved</span>
        </a>
      </li>
    </ul>
  );
};
export default MENUELINK;
