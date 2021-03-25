import { useState } from "react";
import "./NewUser.css";

const NewUser = ({ onSend }) => {
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
    <div className="newUser-container">
      <h3 className="greeting">Welcome to our Chat !</h3>
      <form className="userForm" onSubmit={handleSubmit}>
        <h4 className="userTitle">Please, introduce yourself</h4>
        <label className="userLabel">
          <input
            className="userInput"
            value={value}
            onChange={handleChange}
            placeholder="Type your nikname"
          />
        </label>
        <button className="userSendBtn" type="submit">
          Log In
        </button>
      </form>
    </div>
  );
};

export default NewUser;
