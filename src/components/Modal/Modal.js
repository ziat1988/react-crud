import React from "react";
import ReactDOM from "react-dom";
import Card from "../UI/Card";
import "./Modal.scss";

const ModalOverlay = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Modal {...props} />, document.getElementById("modal-root"))}

      {ReactDOM.createPortal(<Backdrop {...props} />, document.getElementsByTagName("body")[0])}
    </React.Fragment>
  );
};

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onCloseModal}></div>;
};

const Modal = (props) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">{props.title}</div>
        <div className="modal-body">
          <span className="close" onClick={props.onCloseModal}>
            &times;
          </span>
          <p>{props.content}</p>
        </div>
      </div>
    </div>
  );
};

export default ModalOverlay;
