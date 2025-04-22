import React, { use, useState } from "react";
import "./ChatInput.scss";
import RedeemIcon from "@mui/icons-material/Redeem";
import GifBoxIcon from "@mui/icons-material/GifBox";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import {
  addDoc,
  collection,
  CollectionReference,
  DocumentData,
  DocumentReference,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../../firebase";
import { useAppSelector } from "../../app/hooks";
const ChatInput = () => {
  const [inputText, setInputText] = useState<string>("");
  const channelId = useAppSelector((state) => state.channel.channelId);
  const user = useAppSelector((state) => state.user.user);
  const sendMessage = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (inputText.trim() === "") return;

    //channelsコレクションの中にあるmessagesコレクションの中にメッセージを追加する
    const collectionRef: CollectionReference<DocumentData, DocumentData> =
      collection(db, "channels", String(channelId), "messages");

    try {
      await addDoc(collectionRef, {
        message: inputText,
        timestamp: serverTimestamp(),
        user: user,
      });

      // 送信後にinputTextをクリア
      setInputText("");
    } catch (error) {
      console.error("Error sending message: ", error);
    }
  };

  return (
    <div className="chatInput">
      <AddCircleIcon />
      <form>
        <input
          type="text"
          value={inputText} // valueプロパティを追加
          placeholder="Type a message..."
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInputText(e.target.value)
          }
        />
        <button
          type="submit"
          className="chatInputButtom"
          onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
            sendMessage(e)
          }
        >
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
