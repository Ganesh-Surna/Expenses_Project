import React, { useState } from "react";
import "./styles.css";
import FormComponent from "./FormComponent";
import CardsComponent from "./CardsComponent";

export default function App() {
  const itemsList = [
    {
      id: "item1",
      title: "Book",
      amount: 191.64,
      date: new Date("2019,2,21")
    },
    {
      id: "item2",
      title: "Pen",
      amount: 101.51,
      date: new Date("2019,3,21")
    },
    {
      id: "item3",
      title: "Note Book",
      amount: 225.87,
      date: new Date("2019,11,21")
    },
    {
      id: "item4",
      title: "Pencil",
      amount: 50.12,
      date: new Date("2019,1,21")
    },
    {
      id: "item5",
      title: "Laptop",
      amount: 225.87,
      date: new Date("2021,4,21")
    },
    {
      id: "item6",
      title: "Scales",
      amount: 50.12,
      date: new Date("2020,5,21")
    },
    {
      id: "item7",
      title: "Car",
      amount: 4565.87,
      date: new Date("2021,9,21")
    }
  ];
  const [newItemsList, setNewItemsList] = useState(itemsList);
  const handleSubmit = (userData) => {
    setNewItemsList((prevList) => {
      return [userData, ...prevList];
    });
  };
  console.log(newItemsList);
  return (
    <div className="App">
      <FormComponent onSubmitting={handleSubmit} />
      <CardsComponent itemsList={newItemsList} />
    </div>
  );
}
