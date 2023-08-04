import React, { useState } from "react";
import "./ChartBarComponent.css";

const ChartBarComponent = ({ barFillHeight, month }) => {
  let heightVal = barFillHeight + "%";
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: heightVal }}></div>
      </div>
      <div className="chart-bar__label">{month}</div>
    </div>
  );
};
export default ChartBarComponent;
