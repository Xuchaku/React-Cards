import React, { FC } from "react";
import { animated, useTransition } from "react-spring";
import "./Modal.css";

type ModalPropsType = {
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  modal: boolean;
};
const Modal: FC<ModalPropsType> = ({ setModal, setSelected, modal }) => {
  const transition = useTransition(modal, {
    from: { opacity: 0, transform: "scale(0)" },
    enter: { opacity: 0.7, transform: "scale(1)" },
    leave: { opacity: 0 },
  });
  function hideModalHandler() {
    setModal(false);
    setSelected("");
  }
  return transition((style, item) => {
    return item ? (
      <animated.div
        style={style}
        className="Modal"
        onClick={hideModalHandler}
      ></animated.div>
    ) : (
      ""
    );
  });
};

export default Modal;
