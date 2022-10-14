import React, { FC, useState } from "react";
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
  return (
    <div className="Content">
      {cards.map((card) => {
        return (
          <Card
            setSelected={setSelected}
            setModal={setModal}
            key={card.name}
            data={card}
            isMore={selected == card.name}
          ></Card>
        );
      })}
      {modal ? (
        <Modal setModal={setModal} setSelected={setSelected}></Modal>
      ) : null}
    </div>
  );
};

export default Content;
