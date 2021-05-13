import { useState } from "react";
import ExpenseForm from "../ExpenseForm";
import { ButtonStyled } from "../Button/index.styled";
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
          <ButtonStyled onClick={() => setShowNewItemForm(false)}>
            Cancel
          </ButtonStyled>
        </>
      ) : (
        <ButtonStyled onClick={() => setShowNewItemForm(true)}>
          Add New Expense
        </ButtonStyled>
      )}
    </NewExpenseStyled>
  );
};

export default NewExpense;
