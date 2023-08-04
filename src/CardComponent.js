import React, { useState } from "react";
import DateComponent from "./DateComponent";
import "./CardComponent.css";

const CardComponent = ({ title, amount, date }) => {
  return (
    <div className="expense-item card">
      <DateComponent date={date} />
      <h2>{title}</h2>
      <div className="expense-item__price">${amount}</div>
    </div>
  );
};
export default CardComponent;
