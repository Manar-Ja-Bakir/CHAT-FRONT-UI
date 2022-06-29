import React, { useState } from "react";
import "./chatHistory.css";
import imgConvjava from "../../image/java.jpg";
import GroupIcon from "@mui/icons-material/Group";
const CONVERSATION = () => {
  return (
    <ul className="conversation-list">
      <li className="conversation-item"
         onClick={()=>{
          document.querySelector(".ce-chat-feed-column").classList.add("toChatOrHistory");
          document.querySelector(".ce-chat-list-column").classList.add("toChatOrHistory");

        }}
        
      >
        <div className="langAvatar">
          <img src={imgConvjava} alt="not appeared" />
        </div>
        <div className="containConv">
          <div className="langInfo">
            <div className="groupName">
              <span className="iconGroup">
                <GroupIcon style={{ fontSize: "18px" }} />
              </span>
              <span className="langName">Java</span>
            </div>
            <div className="langDate">
              <span className="Date">8:20 PM</span>
            </div>
          </div>
          <div className="lastMessageInfo">
            <div className="MessCon">
              <div className="NameAuthLastMessage">mohammad ali :</div>
              <div className="lastMessageContain">Hi,I am mohammad ali</div>
            </div>
            <div className="countNotReadMessage">10</div>
          </div>
        </div>
      </li>
      <li className="conversation-item">
        <div className="langAvatar">
          <img src={imgConvjava} alt="not appeared" />
        </div>
        <div className="containConv">
          <div className="langInfo">
            <div className="groupName">
              <span className="iconGroup">
                <GroupIcon style={{ fontSize: "18px" }} />
              </span>
              <span className="langName">Java</span>
            </div>
            <div className="langDate">
              <span className="Date">8:20 PM</span>
            </div>
          </div>
          <div className="lastMessageInfo">
            <div className="MessCon">
              <div className="NameAuthLastMessage">mohammad ali :</div>
              <div className="lastMessageContain">Hi,I am mohammad ali</div>
            </div>
            <div className="countNotReadMessage">10</div>
          </div>
        </div>
      </li>
      <li className="conversation-item">
        <div className="langAvatar">
          <img src={imgConvjava} alt="not appeared" />
        </div>
        <div className="containConv">
          <div className="langInfo">
            <div className="groupName">
              <span className="iconGroup">
                <GroupIcon style={{ fontSize: "18px" }} />
              </span>
              <span className="langName">Java</span>
            </div>
            <div className="langDate">
              <span className="Date">8:20 PM</span>
            </div>
          </div>
          <div className="lastMessageInfo">
            <div className="MessCon">
              <div className="NameAuthLastMessage">mohammad ali :</div>
              <div className="lastMessageContain">Hi,I am mohammad ali</div>
            </div>
            <div className="countNotReadMessage">10</div>
          </div>
        </div>
      </li>
      <li className="conversation-item">
        <div className="langAvatar">
          <img src={imgConvjava} alt="not appeared" />
        </div>
        <div className="containConv">
          <div className="langInfo">
            <div className="groupName">
              <span className="iconGroup">
                <GroupIcon style={{ fontSize: "18px" }} />
              </span>
              <span className="langName">Java</span>
            </div>
            <div className="langDate">
              <span className="Date">8:20 PM</span>
            </div>
          </div>
          <div className="lastMessageInfo">
            <div className="MessCon">
              <div className="NameAuthLastMessage">mohammad ali :</div>
              <div className="lastMessageContain">Hi,I am mohammad ali</div>
            </div>
            <div className="countNotReadMessage">10</div>
          </div>
        </div>
      </li>
      <li className="conversation-item">
        <div className="langAvatar">
          <img src={imgConvjava} alt="not appeared" />
        </div>
        <div className="containConv">
          <div className="langInfo">
            <div className="groupName">
              <span className="iconGroup">
                <GroupIcon style={{ fontSize: "18px" }} />
              </span>
              <span className="langName">Java</span>
            </div>
            <div className="langDate">
              <span className="Date">8:20 PM</span>
            </div>
          </div>
          <div className="lastMessageInfo">
            <div className="MessCon">
              <div className="NameAuthLastMessage">mohammad ali :</div>
              <div className="lastMessageContain">Hi,I am mohammad ali</div>
            </div>
            <div className="countNotReadMessage">10</div>
          </div>
        </div>
      </li>
      <li className="conversation-item">
        <div className="langAvatar">
          <img src={imgConvjava} alt="not appeared" />
        </div>
        <div className="containConv">
          <div className="langInfo">
            <div className="groupName">
              <span className="iconGroup">
                <GroupIcon style={{ fontSize: "18px" }} />
              </span>
              <span className="langName">Java</span>
            </div>
            <div className="langDate">
              <span className="Date">8:20 PM</span>
            </div>
          </div>
          <div className="lastMessageInfo">
            <div className="MessCon">
              <div className="NameAuthLastMessage">mohammad ali :</div>
              <div className="lastMessageContain">Hi,I am mohammad ali</div>
            </div>
            <div className="countNotReadMessage">10</div>
          </div>
        </div>
      </li>
      <li className="conversation-item">
        <div className="langAvatar">
          <img src={imgConvjava} alt="not appeared" />
        </div>
        <div className="containConv">
          <div className="langInfo">
            <div className="groupName">
              <span className="iconGroup">
                <GroupIcon style={{ fontSize: "18px" }} />
              </span>
              <span className="langName">Java</span>
            </div>
            <div className="langDate">
              <span className="Date">8:20 PM</span>
            </div>
          </div>
          <div className="lastMessageInfo">
            <div className="MessCon">
              <div className="NameAuthLastMessage">mohammad ali :</div>
              <div className="lastMessageContain">Hi,I am mohammad ali</div>
            </div>
            <div className="countNotReadMessage">10</div>
          </div>
        </div>
      </li>
      <li className="conversation-item">
        <div className="langAvatar">
          <img src={imgConvjava} alt="not appeared" />
        </div>
        <div className="containConv">
          <div className="langInfo">
            <div className="groupName">
              <span className="iconGroup">
                <GroupIcon style={{ fontSize: "18px" }} />
              </span>
              <span className="langName">Java</span>
            </div>
            <div className="langDate">
              <span className="Date">8:20 PM</span>
            </div>
          </div>
          <div className="lastMessageInfo">
            <div className="MessCon">
              <div className="NameAuthLastMessage">mohammad ali :</div>
              <div className="lastMessageContain">Hi,I am mohammad ali</div>
            </div>
            <div className="countNotReadMessage">10</div>
          </div>
        </div>
      </li>
    </ul>
  );
};
export default CONVERSATION;
