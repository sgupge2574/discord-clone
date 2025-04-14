import React from "react";
import ChatHeader from "./ChatHeader";
import "./Chat.scss";

const Chat = () => {
  return (
    <div className="chat">
      {/* {chatHeader} */}
      <ChatHeader />
      {/* {chatMessage} */}
      <div className="chatMessage"></div>
      {/* {chatInput} */}
      <div className="chatInput"></div>
      Chat
    </div>
  );
};

export default Chat;
