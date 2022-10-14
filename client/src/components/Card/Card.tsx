import React, { ChangeEvent, FC, MouseEventHandler } from "react";
import "./Card.css";
import { animated, useTransition } from "react-spring";
import CardType from "./../../types/CardType";
import { ReactComponent as Mail } from "./../../assets/icons/mail.svg";
import { ReactComponent as Phone } from "./../../assets/icons/phone.svg";

type CardPropsType = {
  data: CardType;
  isMore: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
};
const Card: FC<CardPropsType> = ({ data, isMore, setSelected, setModal }) => {
  const transition = useTransition(isMore, {
    from: { opacity: 0, transform: "scale(0.7)", x: 100 },
    enter: { opacity: 1, transform: "scale(1)", x: -100 },
    leave: { opacity: 0, x: 800 },
  });
  function selectCardHandler(name: string) {
    return function (event: React.MouseEvent<Element, MouseEvent>) {
      setSelected(name);
      setModal(true);
    };
  }

  function hideModalHandler(event: React.MouseEvent<Element, MouseEvent>) {
    setModal(false);
    setSelected("");
    event.stopPropagation();
  }
  return (
    <div
      className={`Card ${isMore ? "Card-visible" : undefined}`}
      onClick={selectCardHandler(data.name)}
    >
      <div className="Card__wrapper">
        <h2 className="Card__header">{data.name}</h2>
        <div className="Card__info">
          <Phone className="Card__icon"></Phone>
          <p className="Card__text">{data.phone}</p>
        </div>
        <div className="Card__info">
          <Mail className="Card__icon"></Mail>
          <p className="Card__link">{data.email}</p>
        </div>
      </div>
      {transition((style, item) => {
        return item ? (
          <animated.div
            style={style}
            className={`Card__wrapper Card__wrapper-abs`}
          >
            <button
              className="Card__button-close"
              onClick={hideModalHandler}
            ></button>
            <h2 className="Card__header">{data.name}</h2>
            <div className="Card__columns">
              <div className="Card__info Card__row">
                <p className="Card__punkt">Телефон:</p>
                <p className="Card__text Card__link Card__trunc">
                  {data.phone}
                </p>
              </div>
              <div className="Card__info Card__row">
                <p className="Card__punkt">Почта:</p>
                <p className="Card__text Card__link Card__trunc">
                  {data.email}
                </p>
              </div>
              <div className="Card__info Card__row">
                <p className="Card__punkt Card__row">Дата приема:</p>
                <p className="Card__text Card__trunc">{data.hire_date}</p>
              </div>
              <div className="Card__info Card__row">
                <p className="Card__punkt">Должность:</p>
                <p className="Card__text Card__trunc">{data.position_name}</p>
              </div>
              <div className="Card__info Card__row">
                <p className="Card__punkt">Подразделение:</p>
                <p className="Card__text Card__trunc">{data.department}</p>
              </div>
            </div>

            <div className="Card__other">
              <p className="Card__punkt Card__other-header">
                Дополнительная информация:
              </p>
              <p className="Card__text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
                voluptate deserunt illo ea magnam repudiandae sapiente dolor?
                Numquam optio sequi, quas fugiat magni delectus consequuntur
                possimus odio est nihil alias?
              </p>
            </div>
          </animated.div>
        ) : (
          ""
        );
      })}
    </div>
  );
};

export default Card;
