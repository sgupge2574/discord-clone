import React from "react";
import "./Login.scss";
import { Button } from "@mui/material";
import { auth, provider } from "../../firebase";
import { signInWithPopup } from "firebase/auth";
import { login } from "../../features/userSlice";
import { useAppDispatch } from "../../app/hooks";

const Login = () => {
  const signIn = () => {
    signInWithPopup(auth, provider).catch((error) => {
      alert(error.message);
    });
  };

  // ゲストユーザーとしてログインする関数
  const dispatch = useAppDispatch();
  const guestLogin = () => {
    dispatch(
      login({
        uid: "guest-" + Math.random().toString(36).substring(7),
        photo: "./discordIcon.png",
        email: "guest@example.com",
        displayName: "ゲストユーザー",
      })
    );
  };

  return (
    <div className="login">
      <div className="loginLogo">
        <img src="./discordIcon.png" alt="" />
      </div>

      <Button onClick={signIn}>ログイン</Button>
      <Button onClick={guestLogin}>ゲストとして参加</Button>
    </div>
  );
};

export default Login;
