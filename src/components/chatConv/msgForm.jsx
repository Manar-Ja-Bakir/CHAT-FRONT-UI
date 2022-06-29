import React, { useState } from "react";
import "./chatConv.css";
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import AttachmentSharpIcon from "@mui/icons-material/AttachmentSharp";
const MSGFORM = () => {
  const [state, setstate] = useState(true);
  const handeled = () => {
    setstate(false);
    console.log(state);
  };
  const auto_grow = (element) => {
    let ele = element.target;
    ele.style.height = "10px";
    ele.style.height = ele.scrollHeight + 20 + "px";
  };
  return (
    <form id="msg-form-container" className="ce-message-form-container">
      <div className="relForm">
      {/* <label htmlFor="files" id="upload-document-button"> */}
        <span
          role="img"
          aria-label="paper-clip"
          className=" anticon-paper-clip ce-attachment-icon  "
        >
          <AttachmentSharpIcon style={{ fontSize: "80%" }} />
        </span>
      {/* </label> */}

      <textarea
        type="textarea"
        id="name"
        placeholder=" Write the message "
        onChange={handeled}
        onInput={(e) => {
          auto_grow(e);
        }}
      />

      <div id="ce-send-message-button">

        <span
          role="img"
          aria-label="arrow-up"
          className={` anticon-arrow-up ${
            state == false ? "" : "hideIcon "
          }`}
        >
          <SendRoundedIcon className="sendIcon" />
        </span>

      </div>
      </div>
    </form>
  );
};
export default MSGFORM;
