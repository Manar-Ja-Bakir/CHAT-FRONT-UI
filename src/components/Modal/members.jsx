import React, { useState } from "react";
import { green } from "@mui/material/colors";
import "./modal.css";
import avatar1 from "../../image/AV1.jpg";
import avatar2 from "../../image/AV2.png";
import avatar3 from "../../image/AV3.png";
import avatar4 from "../../image/AV4.jpg";
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
const MEMBERS = () => {
  return (
    <>
      <li className="memberItem">
        <div className="avatarWithStatus">
            <div
              className="avatarUser"
              style={{ backgroundImage: `url(${avatar3})` }}
            ></div>

          <div className="UserStatus"></div>
        </div>
        <div className="UserName">Moatz bakir</div>
        <div className="block">
          <span>
            <RemoveCircleOutlineOutlinedIcon className="iconLeave" />
          </span>
        </div>
      </li>
      <li className="memberItem">
        <div className="avatarWithStatus">
            <div
              className="avatarUser"
              style={{ backgroundImage: `url(${avatar1})` }}
            ></div>

          <div className="UserStatus"></div>
        </div>
        <div className="UserName">Mohammad bakir</div>
        <div className="block">
          <span>
            <RemoveCircleOutlineOutlinedIcon className="iconLeave" />
          </span>
        </div>
      </li>
      <li className="memberItem">
        <div className="avatarWithStatus">
            <div
              className="avatarUser"
              style={{ backgroundImage: `url(${avatar4})` }}
            ></div>

          <div className="UserStatus"></div>
        </div>
        <div className="UserName">Ahmad ali</div>
        <div className="block">
          <span>
            <RemoveCircleOutlineOutlinedIcon className="iconLeave" />
          </span>
        </div>
      </li>

 
    </>
  );
};
export default MEMBERS;
