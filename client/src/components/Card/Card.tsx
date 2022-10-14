import React, { FC } from "react";
import "./Card.css";
import CardType from "./../../types/CardType";

type CardPropsType = {
  data: CardType;
};
const Card: FC<CardPropsType> = ({ data }) => {
  return <div>Card</div>;
};

export default Card;
