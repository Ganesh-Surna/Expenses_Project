import React, { useState } from "react";
import ChartBarComponent from "./ChartBarComponent";
import "./ChartComponent.css";

const ChartComponent = ({ list }) => {
  let amountsArr = list.map((eachObj) => {
    return parseFloat(eachObj.amount);
  });
  let maxVal = Math.max(...amountsArr);
  if (amountsArr.length === 0) {
    maxVal = 0;
  }
  console.log(maxVal);
  let barsList = [
    { month: "Jan", val: 0 },
    { month: "Feb", val: 0 },
    { month: "Mar", val: 0 },
    { month: "Apr", val: 0 },
    { month: "May", val: 0 },
    { month: "Jun", val: 0 },
    { month: "Jul", val: 0 },
    { month: "Aug", val: 0 },
    { month: "Sep", val: 0 },
    { month: "Oct", val: 0 },
    { month: "Nov", val: 0 },
    { month: "Dec", val: 0 }
  ];
  if (maxVal > 0) {
    for (let eachObj of list) {
      let month1 = eachObj.date.getMonth();
      let amount1 = eachObj.amount;
      let val1 = Math.round((amount1 / maxVal) * 100);
      barsList[month1].val = val1;
    }
  }
  return (
    <div className="chart">
      {barsList.map((eachBarObj) => {
        return (
          <ChartBarComponent
            barFillHeight={eachBarObj.val}
            month={eachBarObj.month}
          />
        );
      })}
    </div>
  );
};
export default ChartComponent;
