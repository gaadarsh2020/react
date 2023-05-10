import React, { useState } from "react";
import "./ExpenseForm.css";
const NewExpenseForm = (props) => {
  const [enteredtitle, setEnteredtitle] = useState(" ");
  const [enteredamount, setEnteredamount] = useState(" ");
  const [entereddate, setEnteredDate] = useState(" ");

  const titlechangehandler = (event) => {
    setEnteredtitle(event.target.value);
  };

  //const [userIpnut,setuserInput] = usestate
  //useState({
  // enteredtitle:'',   //  onestateobject
  //enteredamount:'',
  //enterddate:''
  //}

  const amountchangehandler = (event) => {
    setEnteredamount(event.target.value);
  };
  const datechangehandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submithandler = (event) => {
    event.preventDefault();

    const ExpenseData = {
      title: enteredtitle,
      amount: enteredamount,
      date: new Date(entereddate),
    };

    props.onSaveExpenseData(ExpenseData);
    setEnteredtitle("");
    setEnteredamount("");
    setEnteredDate("");
  };
  return (
    <form onSubmit={submithandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredtitle}
            onChange={titlechangehandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredamount}
            onChange={amountchangehandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="1995-01-01"
            max="2023-12-31"
            value={entereddate}
            onChange={datechangehandler}
          />
        </div>
      </div>
      <div className="new-expense__action">
        <button type="Submit"> Add Expense </button>
      </div>
    </form>
  );
};
export default NewExpenseForm;
