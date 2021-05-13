import { useState } from "react";

import { ControlsStyled, ActionsStyled } from "./index.styled";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const amountChangeHandler = (e) => {
    setAmount(e.target.value);
  };

  const dateChangeHandler = (e) => {
    setDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title,
      amount,
      date: new Date(date),
    };
    props.onSaveExpenseData(expenseData);
    setTitle("");
    setAmount("");
    setDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <ControlsStyled>
        <ControlsStyled>
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} value={title} />
        </ControlsStyled>
        <ControlsStyled>
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={amount}
          />
        </ControlsStyled>
        <ControlsStyled>
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2025-12-31"
            onChange={dateChangeHandler}
            value={date}
          />
        </ControlsStyled>
      </ControlsStyled>
      <ActionsStyled>
        <button type="submit">Add Expense</button>
      </ActionsStyled>
    </form>
  );
};

export default ExpenseForm;
