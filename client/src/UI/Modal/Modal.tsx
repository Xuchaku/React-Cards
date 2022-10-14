import React, { FC } from "react";
import "./Modal.css";

type ModalPropsType = {
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
};
const Modal: FC<ModalPropsType> = ({ setModal, setSelected }) => {
  function hideModalHandler() {
    setModal(false);
    setSelected("");
  }
  return <div className="Modal" onClick={hideModalHandler}></div>;
};

export default Modal;
