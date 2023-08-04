import React, { useState } from "react";
import "./FormComponent.css";

const FormComponent = ({ onSubmitting }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };
  const handleDateChange = (event) => {
    setDate(event.target.value);
  };
  const handleEdit = () => {
    setIsEdit(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = {
      id: Math.random(),
      title: title,
      amount: amount,
      date: new Date(date)
    };
    onSubmitting(userData);
    setTitle("");
    setAmount("");
    setDate("");
    setIsEdit(false);
  };
  const handleCancel = () => {
    setIsEdit(false);
  };
  if (!isEdit) {
    return (
      <div className="new-expense">
        <button onClick={handleEdit}>Add Expense</button>
      </div>
    );
  }
  if (isEdit) {
    return (
      <form className="new-expense" onSubmit={handleSubmit}>
        <div className="new-expense__controls ">
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text" value={title} onChange={handleTitleChange} />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              value={amount}
              min="0.01"
              step="0.01"
              onChange={handleAmountChange}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              value={date}
              onChange={handleDateChange}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
          <button>Add Expense</button>
        </div>
      </form>
    );
  }
};
export default FormComponent;
