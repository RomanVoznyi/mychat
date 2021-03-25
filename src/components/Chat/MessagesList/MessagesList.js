import "./MessagesList.css";

const MessagesList = ({ messages, currentUser }) => {
  return (
    <ul className="messages-list">
      {messages.map((item, key) => (
        <li className="message-item" key={key}>
          <span className="message-time">{item.time} </span>
          <span className="message-user">{item.user} : </span>
          <span
            className={`message ${
              item.user === currentUser ? "ownMsg" : "otherMsg"
            }`}
          >
            {item.text}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default MessagesList;
