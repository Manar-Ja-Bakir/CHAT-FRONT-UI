import React, { useState } from "react";
import "./modal.css";
import LogoutIcon from "@mui/icons-material/Logout";
const OPTION = () => {
  return (
    <>
      <li className="memberItem op1">
        <div className="logOutOption ">
          <span className="optionName">Leave Group</span>
          <span className="logOutIcon">
            <LogoutIcon className="iconLeave" />
          </span>
        </div>
      </li>

  
    </>
  );
};
export default OPTION;
