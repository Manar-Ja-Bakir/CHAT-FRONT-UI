import React, { Component } from "react";
import "./modal.css";
import CHATPHOTO from "./chatPhoto";
import CHATOPTION from "./chatOption";
import CHATMEMBERS from "./chatMembers";
const MODALBox = (props) => {
  return (
    <>
      <div className="ModalBoxContainer">
        <div className="infoHeader">
          <div className="Title">GROUP INFO</div>
          <div className="groupProfile">
            {props.AvatarLang}
            <div className="groupName">java</div>
          </div>
        </div>
        <div className="groupDescription">
          Java is a popular programming language,It is used for Mobile
          applications,Desktop applications Web applications.
          <div className="desTitle">Bio</div>
        </div>
        <div className="groubMedia">

        <CHATMEMBERS />
          <CHATPHOTO />
          <CHATOPTION />
        </div>

      </div>
    </>
  );
};
export default MODALBox;
