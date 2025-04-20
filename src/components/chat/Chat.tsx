import React, { use } from "react";
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";
import "./Chat.scss";
import { useAppSelector } from "../../app/hooks";

const Chat = () => {
  const channelName = useAppSelector((state) => state.channel.channelName);

  return (
    <div className="chat">
      {/* {chatHeader} */}
      <ChatHeader channelName={channelName} />
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
