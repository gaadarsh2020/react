import React from "react";
import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const dropdownChangehandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="Expenses-Filter">
      <div className="Expenses-Filter__Control">
        <label>Filter By Year</label>
        <select value={props.selected} onChange={dropdownChangehandler}>
          <option value="2022">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
