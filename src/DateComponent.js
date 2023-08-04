import React, { useState } from "react";
import "./DateComponent.css";

const DateComponent = ({ date }) => {
  const dateObj = new Date(date);
  const year = dateObj.getFullYear();
  const month = dateObj.toLocaleString("en-US", { month: "long" });
  const day = dateObj.toLocaleString("en-US", { day: "2-digit" });
  return (
    <div className="expense-date">
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};
export default DateComponent;
