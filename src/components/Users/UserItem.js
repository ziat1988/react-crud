import React from "react";
import "./UserItem.scss";
const UserItem = (props) => {
  const handleDelete = () => {
    props.deleteUser(props.id);
  };

  const handleEdit = () => {
    props.toggleEdit();
    props.editUser(props.id);
  };

  return (
    <li>
      <div className="info-user">
        {props.username}&nbsp; ({props.age} years old)
      </div>
      <div className="button-action">
        <span onClick={handleEdit}>Edit</span>
        <span onClick={handleDelete}>Delete</span>
      </div>
    </li>
  );
};

export default UserItem;
