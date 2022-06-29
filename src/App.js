import React, { Component } from "react";
import CHATHISTORY from "./components/chatHistory/chatHistory";
import CHATCONV from "./components/chatConv/chatConv";
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <div className="ce-wrapper">
          <div
            className="overlay"
            onClick={(e) => {
              e.target.classList.remove("overlayApear");
              document
                .querySelector(".chatSetting")
                .classList.add("closeSetting");
            }}
          ></div>

          <div className="ce-chat-list-column">
            <CHATHISTORY />
          </div>
          <div className="ce-chat-feed-column">
            <CHATCONV />
          </div>
        </div>
      </>
    );
  }
}

export default App;
