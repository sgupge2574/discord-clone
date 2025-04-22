import React, { use, useEffect, useState } from "react";
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";
import "./Chat.scss";
import { useAppSelector } from "../../app/hooks";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  Timestamp,
} from "firebase/firestore";
import { db } from "../../firebase";

interface Messages {
  timestamp: Timestamp;
  message: string;
  user: {
    uid: string;
    photo: string;
    email: string;
    displayName: string;
  };
}

const Chat = () => {
  const [messages, setMessages] = useState<Messages[]>([]);
  const channelName = useAppSelector((state) => state.channel.channelName);
  const channelId = useAppSelector((state) => state.channel.channelId);
  useEffect(() => {
    let collectionRef = collection(
      db,
      "channels",
      String(channelId),
      "messages"
    );

    const collectionRefOrderBy = query(
      collectionRef,
      orderBy("timestamp", "asc")
    );

    onSnapshot(collectionRefOrderBy, (snapshot) => {
      let results: Messages[] = [];
      snapshot.docs.forEach((doc) => {
        results.push({
          timestamp: doc.data().timestamp,
          message: doc.data().message,
          user: doc.data().user,
        });
      });
      setMessages(results);
    });
  }, [channelId]);

  return (
    <div className="chat">
      {/* {chatHeader} */}
      <ChatHeader channelName={channelName} />
      {/* {chatMessage} */}
      <div className="chatMessage">
        {messages.map((message, index) => (
          <ChatMessage
            key={index}
            message={message.message}
            timestamp={message.timestamp}
            user={message.user}
          />
        ))}
      </div>
      {/* {chatInput} */}
      <div>
        <ChatInput />
      </div>
    </div>
  );
};

export default Chat;
