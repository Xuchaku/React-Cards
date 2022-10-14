import React, { FC, useState } from "react";
import { useTransition } from "react-spring";

import CardType from "../../types/CardType";
import Modal from "../../UI/Modal/Modal";
import Card from "../Card/Card";
import "./Content.css";

type ContentPropsType = {
  cards: CardType[];
};
const Content: FC<ContentPropsType> = ({ cards }) => {
  const [selected, setSelected] = useState<string>("");
  const [modal, setModal] = useState<boolean>(false);
  const transition = useTransition(cards, {
    from: { opacity: 0.3, transform: "scale(0.3)" },
    enter: { opacity: 1, transform: "scale(1)" },
    leave: { opacity: 0, transform: "scale(0.3)" },
  });
  return (
    <div className="Content">
      {transition((style, card) => {
        return (
          <Card
            setSelected={setSelected}
            setModal={setModal}
            style={style}
            key={card.name}
            data={card}
            isMore={selected == card.name}
          ></Card>
        );
      })}

      <Modal
        modal={modal}
        setModal={setModal}
        setSelected={setSelected}
      ></Modal>
    </div>
  );
};

export default Content;
