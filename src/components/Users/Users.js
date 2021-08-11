import React from "react";
import Card from "../UI/Card";
import UserItem from "./UserItem";
import "./Users.scss";

const Users = ({ users, onDeleteUser, onToggleEdit, onEditUser }) => {
  return (
    <Card className="user-list">
      <ul>
        {users.map((user) => (
          <UserItem key={user.id} {...user} deleteUser={onDeleteUser} toggleEdit={onToggleEdit} editUser={onEditUser} />
        ))}
      </ul>
    </Card>
  );
};

export default Users;
