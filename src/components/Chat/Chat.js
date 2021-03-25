import { useEffect, useState } from "react";
import io from "socket.io-client";
import NewMessage from "../NewMessage";
import NewUser from "../NewUser";
import UsersList from "./UsersList";
import MessagesList from "./MessagesList";
import "./Chat.css";

const URL = process.env.CHAT_SERVER_URL || "localhost:5000";
const socket = io(URL);

const Chat = () => {
  const [currentUser, setCurrentUser] = useState("");
  const [messages, setMessages] = useState([]);
  const [isLogin, setIsLogin] = useState(false);
  const [users, setUsers] = useState({});

  useEffect(() => {
    socket.on("message", (data) => {
      if (isLogin) {
        setMessages((prevState) => {
          return [
            ...prevState,
            { user: data.user, text: data.message, time: data.time },
          ];
        });
      }
    });
  }, [isLogin]);

  useEffect(() => {
    socket.on("users", (data) => setUsers(data));
  }, [users]);

  const sendMessage = (newMessage) => {
    if (newMessage.trim().length) {
      const date = new Date();
      const timeMsg = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;

      socket.emit("message", {
        user: currentUser,
        message: newMessage.trim(),
        time: timeMsg,
      });
    }
  };

  const logIn = (newUser) => {
    if (newUser.trim().length) {
      setCurrentUser(newUser);
      setIsLogin(true);
      socket.emit("change:name", newUser);
    }
  };

  return (
    <div className="wrapper">
      {!isLogin ? (
        <NewUser onSend={logIn} />
      ) : (
        <>
          <div className="users-container">
            <h4 className="title">Users in chat:</h4>
            <UsersList users={users} currentUser={currentUser} />
          </div>
          <div className="messages-container">
            <h4 className="title">Chat:</h4>
            <MessagesList messages={messages} currentUser={currentUser} />
            <NewMessage onSend={sendMessage} />
          </div>
        </>
      )}
    </div>
  );
};

export default Chat;
