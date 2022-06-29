import React, { useState } from "react";
import "./modal.css";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import MEMBERS from "./members";
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
const CHATMEMBERS = () => {
  const [LeftIcon, setLeftIcon] = useState(true);
  const handeled = () => {
    setLeftIcon(!LeftIcon);
    console.log(LeftIcon);
  };
  return (
    <>
      <div className="membersDropDwon DropDown">
        <div className="dropTitle">
          <PeopleAltRoundedIcon className="icon" />

          <span className="title"> Members </span>
        </div>
        <span
          role="img"
          className={`anticon anticon-left ${!LeftIcon ? "rotate" : "normal"}`}
          onClick={handeled}
        >
          <ChevronLeftIcon className="iconCher" />
        </span>
      </div>
      {/* list Members */}
      <ul className={`list-container ${!LeftIcon ? "show" : "hidden "}`}>
        <li className="memberItem autocompleteItem">
          <input
            className=" ce-autocomplete-input"
            placeholder=" Select a username"
            type="text"
          />
        </li>
        <MEMBERS />
      </ul>
    </>
  );
};
export default CHATMEMBERS;
