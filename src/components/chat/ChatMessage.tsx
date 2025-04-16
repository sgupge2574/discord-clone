import React from "react";
import "./ChatMessage.scss";
import { Avatar } from "@mui/material";

const ChatMessage = () => {
  return (
    <div className="Message">
      <Avatar />
      <div className="MessageInfo">
        <h4>
          {" "}
          山口優翔
          <span className="MessageTimeStanp">2025/4/16</span>
        </h4>
        <p>こんにちは！</p>
      </div>
    </div>
  );
};

export default ChatMessage;
