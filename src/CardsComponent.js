import React, { useState } from "react";
import SelectComponent from "./SelectComponent";
import CardComponent from "./CardComponent";
import ChartComponent from "./ChartComponent";
import "./CardsComponent.css";

const CardsComponent = ({ itemsList }) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const handleYearChange = (year) => {
    setFilteredYear(year);
  };
  console.log(filteredYear);
  const filteredItemsList = itemsList.filter((eachObj) => {
    if (eachObj.date.getFullYear().toString() === filteredYear) {
      return true;
    }
  });

  if (filteredItemsList.length === 0) {
    return (
      <div className="expenses card">
        <SelectComponent
          selectedYear={filteredYear}
          onYearChange={handleYearChange}
        />
        <ChartComponent list={filteredItemsList} />
        <h2>No Results Found.</h2>
      </div>
    );
  }
  return (
    <div className="expenses card">
      <SelectComponent
        selectedYear={filteredYear}
        onYearChange={handleYearChange}
      />
      <ChartComponent list={filteredItemsList} />
      {filteredItemsList.map((item) => {
        return (
          <CardComponent
            filteredYear={filteredYear}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        );
      })}
    </div>
  );
};
export default CardsComponent;
