import { useState } from "react";
import ExpenseForm from "../ExpenseForm";
import { NewExpenseStyled } from "./index.styled.js";

const NewExpense = (props) => {
  const [showNewItemForm, setShowNewItemForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  return (
    <NewExpenseStyled>
      {showNewItemForm ? (
        <>
          <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
          <button onClick={() => setShowNewItemForm(false)}>Cancel</button>
        </>
      ) : (
        <button onClick={() => setShowNewItemForm(true)}>
          Add New Expense
        </button>
      )}
    </NewExpenseStyled>
  );
};

export default NewExpense;
