import React, { ChangeEvent, FC } from "react";
import "./Filter.css";
import search from "./../../assets/icons/search.svg";
type FilterPropsType = {
  filter: string;
  change: React.Dispatch<React.SetStateAction<string>>;
};
const Filter: FC<FilterPropsType> = ({ filter, change }) => {
  function changeInputHandler(event: ChangeEvent<HTMLInputElement>) {
    change(event.target.value);
  }
  return (
    <div className="Filter">
      <input
        type="text"
        className="Filter__input"
        value={filter}
        onChange={changeInputHandler}
        placeholder="Поиск..."
      />
      <img className="Filter__icon" src={search}></img>
    </div>
  );
};

export default Filter;
