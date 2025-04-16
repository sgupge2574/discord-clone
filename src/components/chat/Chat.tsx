import React from "react";
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";
import "./Chat.scss";

const Chat = () => {
  return (
    <div className="chat">
      {/* {chatHeader} */}
      <ChatHeader />
      {/* {chatMessage} */}
      <div className="chatMessage">
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
      </div>
      {/* {chatInput} */}
      <div>
        <ChatInput />
      </div>
    </div>
  );
};

export default Chat;
