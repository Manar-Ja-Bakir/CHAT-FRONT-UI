import React,{useState} from "react";
import "./modal.css";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import OPTION from './option.jsx'
const CHATOPTION = () => {
  const[LeftIcon, setLeftIcon] = useState(true);
  const handeled=()=>{
   setLeftIcon(!LeftIcon);
   console.log(LeftIcon);
  }
  return (
<>
          <div className="OptionDropDown DropDown">
            <div className="dropTitle">

              <SettingsOutlinedIcon className="icon" />

              <span className="title">
              Options
              </span>
              </div>
            <div className={`anticon anticon-left ${!LeftIcon ? "rotate" : "normal"}`} onClick={handeled}>
              <ChevronLeftIcon className="iconCher" />
            </div>
          </div>

          <ul className={`list-container  ${!LeftIcon ? "ShowListOp" : "hidden "}`}>
       
        <OPTION />
      </ul> 
          </>

  );
};
export default CHATOPTION;
