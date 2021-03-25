import { FaUserCircle } from "react-icons/fa";
import "./UsersList.css";

const UsersList = ({ users, currentUser }) => {
  return (
    <ul className="users-list">
      {Object.values(users).map((el, i) => (
        <li className={`users-item ${el === currentUser && "current"}`} key={i}>
          <FaUserCircle className="user-icon"/>
          {el}
        </li>
      ))}
    </ul>
  );
};

export default UsersList;
