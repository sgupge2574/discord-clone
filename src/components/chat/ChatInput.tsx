import React from "react";
import "./ChatInput.scss";
import RedeemIcon from "@mui/icons-material/Redeem";
import GifBoxIcon from "@mui/icons-material/GifBox";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
const ChatInput = () => {
  return (
    <div className="chatInput">
      <AddCircleIcon />
      <form>
        <input type="text" placeholder="Type a message..." />
        <button type="submit" className="chatInputButtom">
          Send
        </button>
      </form>
      <div className="chatInputIcons">
        <RedeemIcon />
        <GifBoxIcon />
        <SentimentSatisfiedAltIcon />
      </div>
    </div>
  );
};

export default ChatInput;
