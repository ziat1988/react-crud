import React, { useEffect, useState } from "react";
import "./UserForm.scss";
import { v4 as uuid } from "uuid";
import Modal from "../Modal/Modal";
import Card from "../UI/Card.js";

const UserForm = (props) => {
  let textHeaderModal = "Invalid input";

  console.log("props :", props.dataUser);
  const [errMessage, setErrorMessage] = useState("");

  const [userInfo, setUserInfo] = useState(props.dataUser);

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    console.log("use effect -->");
    setUserInfo(props.dataUser);
  }, [props.dataUser]);

  const checkValid = () => {
    if (userInfo.username.trim() === "") {
      setErrorMessage("user name is required");
      setShowModal(true);
      return false;
    }

    if (userInfo.age.trim() === "") {
      setErrorMessage("age is required");
      setShowModal(true);
      return false;
    }

    if (isNaN(userInfo.age) || userInfo.age < 0) {
      setErrorMessage("Please enter valid age > 0");
      setShowModal(true);
      return false;
    }

    return true;
  };

  const closeModalHandle = () => {
    /**TODO: focus */
    setShowModal(false);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!checkValid()) return;

    if (!props.editMode) {
      const dataUser = { ...userInfo, id: uuid() };
      props.onAddUser(dataUser);

      return;
      //setUserInfo(initUserInfo); // TODO
    }

    props.onEditUserSubmit(userInfo.id, userInfo);
    console.log(userInfo);
  };

  //abstract
  const handleChangeInput = (evt) => {
    setUserInfo((prevState) => ({ ...prevState, [evt.target.name]: evt.target.value }));
  };

  return (
    <React.Fragment>
      <Card>
        <form className="form-horizontal" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username" className="control-label">
              Username
            </label>
            <input id="username" autoComplete="nope" value={userInfo.username} onChange={handleChangeInput} className="form-control" name="username" type="text" onChange={handleChangeInput} />
          </div>

          <div className="form-group">
            <label htmlFor="age" className="control-label">
              Age
            </label>
            <input id="age" autoComplete="nope" value={userInfo.age} onChange={handleChangeInput} className="form-control" name="age" type="text" onChange={handleChangeInput} />
          </div>

          <div className="form-group">
            {!props.editMode ? (
              <button type="submit" className="btn btn-default">
                Add User
              </button>
            ) : (
              <div className="group-button">
                <button type="submit" className="btn btn-default">
                  Edit User
                </button>
                <button
                  onClick={() => {
                    props.onToggleEdit();
                  }}
                  type="button"
                  className="btn btn-default cancel"
                >
                  Cancel
                </button>
              </div>
            )}
          </div>
        </form>
      </Card>

      {showModal && <Modal content={errMessage} title={textHeaderModal} onCloseModal={closeModalHandle} />}
    </React.Fragment>
  );
};

export default UserForm;
