import React, { useState } from "react";
import "./Content.css";
import {
  faArrowLeft,
  faArrowRight,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Input, InputAdornment } from "@mui/material";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const Content = ({ radio }) => {
  const [totalAmount, setTotalAmount] = useState(0);
  const [monthlyAmount, setMonthlyAmount] = useState(0);

  const [countMonth, setCountMonth] = useState(1);

  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());

  const prevMonth = () => {
    if (countMonth <= 1) {
    } else {
      if (month > 11) {
        setMonth(0);
        setYear(year + 1);
      } else if (month < 1) {
        setMonth(11);
        setYear(year - 1);
      } else {
        setMonth(month - 1);
      }
      setCountMonth(countMonth - 1);
    }
  };
  const nextMonth = () => {
    if (month > 10) {
      setMonth(0);
      setYear(year + 1);
    } else if (month < 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month + 1);
    }
    setCountMonth(countMonth + 1);
  };

  const clickButton = () => {
    if (radio === true) {
      const a = parseInt(totalAmount);
      const b = parseInt(countMonth);
      setMonthlyAmount(Math.round(a / b));
    } else {
      const a = parseInt(monthlyAmount);
      const b = parseInt(countMonth);
      setTotalAmount(Math.round(a * b));
    }
  };

  function handleInput(event) {
    radio
      ? setTotalAmount(event.target.value)
      : setMonthlyAmount(event.target.value);
  }

  return (
    <>
      <p className={"inputTitle"}>
        {radio ? `Total amount` : `Calculate by monthly saving`}
      </p>
      <div className={"inputs"}>
        <Input
          className={"firstInput"}
          type={"number"}
          onChange={handleInput}
          value={radio ? totalAmount : monthlyAmount}
          startAdornment={
            <InputAdornment position='start'>
              <FontAwesomeIcon color={"#828282"} icon={faDollarSign} />
            </InputAdornment>
          }
        />
      </div>
      <p className={"inputTitle"}>{radio ? `Reach goal by` : `Save until`}</p>
      <div className={"inputs"}>
        <div onClick={prevMonth}>
          <FontAwesomeIcon
            className={"Arrows"}
            color={"#828282"}
            icon={faArrowLeft}
          />
        </div>
        <p className={"textInInput"}>{`${monthNames[month]}, ${year}`}</p>
        <div onClick={nextMonth}>
          <FontAwesomeIcon
            className={"Arrows"}
            color={"#828282"}
            icon={faArrowRight}
          />
        </div>
      </div>
      <div className={"mainDiv"}>
        <p className={"leftText"}>
          {radio ? `Monthly amount` : `Total amount`}
        </p>
        <p className={"RightText"}>${radio ? monthlyAmount : totalAmount}</p>
        <div className={"massageDiv"}>
          <p className={"massage"}>
            {radio
              ? `You are planning ${countMonth} monthly deposits to reach your $ ${totalAmount} goal by ${monthNames[month]} ${year}.`
              : `You are saving $ ${monthlyAmount} monthly to save $ ${totalAmount} by ${monthNames[month]} ${year}.`}
          </p>
        </div>
      </div>
      <button className={"button"} onClick={clickButton}>
        Finish
      </button>
    </>
  );
};

export default Content;
