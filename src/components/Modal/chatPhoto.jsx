import React, { useState } from "react";
import "./modal.css";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import PhotoLibraryOutlinedIcon from '@mui/icons-material/PhotoLibraryOutlined';
const CHATPHOTO = () => {
  const [LeftIcon, setLeftIcon] = useState(true);
  const handeled = () => {
    setLeftIcon(!LeftIcon);
    console.log(LeftIcon);
  };
  return (
    <div className="photoDropDown DropDown">
      <div className="dropTitle">
      
          <PhotoLibraryOutlinedIcon className="icon"/>
     
        <span> Photos</span>
      </div>
      <span
        role="img"
        aria-label="left"
        className={`anticon anticon-left ${!LeftIcon ? "rotate" : "normal"}`}
        onClick={handeled}
      >
        <ChevronLeftIcon className="iconCher" />
      </span>
    </div>
  );
};
export default CHATPHOTO;
