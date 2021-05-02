import { useState } from "react";
import ExpenseForm from "../ExpenseForm";
import "./index.css";

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
    <div className="new-expense">
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
    </div>
  );
};

export default NewExpense;
