import React from "react";
import "./ChatMessage.scss";
import { Avatar } from "@mui/material";
import { Timestamp } from "firebase/firestore";

type Props = {
  message: string;
  timestamp: Timestamp | null;
  user: {
    uid: string;
    photo: string;
    email: string;
    displayName: string;
  };
};

const ChatMessage = (props: Props) => {
  const { message, timestamp, user } = props;
  const formatTimestamp = (timestamp: Timestamp | null) => {
    if (!timestamp) return "メッセージを送信してみましょう！";
    return timestamp.toDate().toLocaleString();
  };
  return (
    <div className="Message">
      <Avatar src={user?.photo} />
      <div className="MessageInfo">
        <h4>
          {" "}
          {user?.displayName}
          <span className="MessageTimeStanp">{formatTimestamp(timestamp)}</span>
        </h4>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
