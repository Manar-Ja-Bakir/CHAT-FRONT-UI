import React, { useState } from "react";
import PROFILEHEADER from "./profileHeader";
import MENUELINK from "./menueLink";
import "./chatHistory.css";
const MENUEBAR = () => {
  return (
    <>
      <div className="menu">
        <PROFILEHEADER />
        <MENUELINK />
      </div>
    </>
  );
};

export default MENUEBAR;
