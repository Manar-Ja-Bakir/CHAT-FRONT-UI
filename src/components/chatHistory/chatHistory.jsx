import React, { useState } from "react";
import "./chatHistory.css";
import SEARCHBOX from "./searchBox";
import MenuIcon from "@mui/icons-material/Menu";
import CONVERSATION from "./conversation";
import CHATSETTING from "./chatSetting";
const CHATHISTORY = () => {
  return (
    <>
      <CHATSETTING />
      <div className="headerHistory">
        <MenuIcon
          className="menuIconHistory"
          onClick={() => {
            document
              .querySelector(".chatSetting")
              .classList.remove("closeSetting");
            document.querySelector(".overlay").classList.add("overlayApear");
          }}
        />
        <SEARCHBOX />
      </div>
      <CONVERSATION />
    </>
  );
};
export default CHATHISTORY;
