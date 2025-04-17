import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import "./App.scss";
import Sidebar from "./components/sidebar/Sidebar";
import Chat from "./components/chat/Chat";
import Login from "./components/Login/Login";
import { auth } from "./firebase";
import { login, logout } from "./features/userSlice";

function App() {
  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.user);

  useEffect(() => {
    auth.onAuthStateChanged((loginUser) => {
      console.log("user", loginUser);
      if (loginUser) {
        dispatch(
          login({
            uid: loginUser.uid,
            photo: loginUser.photoURL,
            email: loginUser.email,
            displayName: loginUser.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <div className="App">
      {user ? (
        <>
          <Sidebar />
          <Chat />
        </>
      ) : (
        <>
          <Login />
        </>
      )}
    </div>
  );
}

export default App;
