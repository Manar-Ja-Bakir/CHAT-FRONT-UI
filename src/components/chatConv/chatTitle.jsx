import React, { useState } from "react";
import "./chatConv.css";
import LogoutIcon from "@mui/icons-material/Logout";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MODAL from "../Modal/modal";
const CHATTITLE = () => {
  return (
    <>


      <div className="chatTitleCon">
        <div className="chatTitle">
          <div className="BackTo"
              onClick={()=>{
          document.querySelector(".ce-chat-feed-column").classList.remove("toChatOrHistory");
          document.querySelector(".ce-chat-list-column").classList.remove("toChatOrHistory");

        }}>
            <span className="BackIcon">

              <ArrowBackIcon />
            </span>
          </div>

         <MODAL />

          <div className="groupNameAndInfo">
            <div className="groupName">Java</div>
            <div className="CountgroupMembers">223 members</div>
          </div>
        </div>
        <div className="LogOut">
          <span className="logOutIcon">
            <LogoutIcon />
          </span>
        </div>
      </div>
    </>
  );
};
export default CHATTITLE;
