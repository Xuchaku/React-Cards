import React, { FC } from "react";
import CardType from "../../types/CardType";

type ContentType = {
  cards: CardType[];
};
const Content: FC<ContentType> = ({ cards }) => {
  return <div>Content</div>;
};

export default Content;
