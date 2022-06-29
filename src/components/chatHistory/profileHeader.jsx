import React, { useState } from "react";
import "./chatHistory.css";
import imgProfileUser1 from "../../image/user1.png";
const PROFILEHEADER = () => {
  return (
    <header>
      <div className="profile-User">
        <span className="profAvatar">
          <img src={imgProfileUser1} alt="not appeared" />
        </span>
        <div className="text">
          <span className="UserName">Mohammed Ali</span>
        </div>
      </div>
    </header>
  );
};
export default PROFILEHEADER;
