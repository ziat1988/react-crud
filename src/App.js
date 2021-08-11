import { useState } from "react";
import "./App.css";
import UserForm from "./components/NewUser/UserForm";

import Users from "./components/Users/Users";
//import "bootstrap/dist/css/bootstrap.min.css";
//import ModalBootstrap from "./components/Modal/ModalBootstrap";

function App() {
  const [users, setUsers] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const initUserInfo = {
    username: "",
    age: "",
    id: "",
  };
  const [dataUser, setDataUser] = useState(initUserInfo);

  const addUserHandler = (user) => {
    console.log("here go");
    setUsers((prevState) => [...prevState, user]);
    setDataUser({ ...initUserInfo }); // reset input
  };

  const deleteUserHandler = (idUser) => {
    setUsers((prevState) => prevState.filter((user) => user.id !== idUser));
  };

  const editUserSubmitHandle = (idUser, data) => {
    const newList = users.map((user) => (user.id === idUser ? data : user));
    setUsers(newList);
  };

  const editUserHandler = (idUser) => {
    const dataEdit = users.find((user) => user.id === idUser);

    setDataUser(dataEdit);
  };

  const setEditModeHandle = () => {
    setEditMode(true);
  };
  const cancelEditModeHandle = () => {
    setEditMode(false);
    setDataUser(initUserInfo);
  };

  return (
    <div className="container">
      <UserForm dataUser={dataUser} onEditUserSubmit={editUserSubmitHandle} onAddUser={addUserHandler} editMode={editMode} onToggleEdit={cancelEditModeHandle} />

      {users.length > 0 && <Users users={users} onDeleteUser={deleteUserHandler} onToggleEdit={setEditModeHandle} onEditUser={editUserHandler} />}
    </div>
  );
}

export default App;
