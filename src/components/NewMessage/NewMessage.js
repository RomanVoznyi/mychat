import { useState } from "react";
import "./NewMessage.css";

const NewMessage = ({ onSend }) => {
  const [value, setValue] = useState("");

  const handleChange = (evt) => {
    setValue(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onSend(value);
    setValue("");
  };

  return (
    <form className="messageForm" onSubmit={handleSubmit}>
      <label className="messageLabel">
        <input
          className="messageInput"
          value={value}
          onChange={handleChange}
          placeholder="Type your message"
        />
      </label>
      <button className="messageSendBtn" type="submit">
        Send Message
      </button>
    </form>
  );
};

export default NewMessage;
