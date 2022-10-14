import React, { FC } from "react";
import CardType from "../../types/CardType";
import Card from "../Card/Card";
import "./Content.css";

type ContentPropsType = {
  cards: CardType[];
};
const Content: FC<ContentPropsType> = ({ cards }) => {
  return (
    <div className="Content">
      {cards.map((card) => {
        return <Card key={card.name} data={card}></Card>;
      })}
    </div>
  );
};

export default Content;
