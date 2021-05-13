import { useState } from "react";

import { ExpenseListStyled } from "./index.styled.js";
import Card from "../Card";
import ExpenseItem from "../ExpenseItem";
import ExpensesFilter from "../ExpensesFilter";
import ExpenseChart from "../ExpensesChart";

const ExpenseList = ({ expenses }) => {
  const [selectedYear, setSelectedYear] = useState("2021");

  const selectYearHandler = (value) => {
    setSelectedYear(value);
  };

  const filteredExpenses = expenses.filter(
    (item) => item.date.getFullYear().toString() === selectedYear
  );
  console.log(filteredExpenses);

  return (
    <>
      <ExpensesFilter
        onSelectYear={selectYearHandler}
        selectedYear={selectedYear}
      />
      <ExpenseChart expenses={filteredExpenses} />
      <Card>
        <ExpenseListStyled>
          {filteredExpenses.length ? (
            filteredExpenses.map((item) => (
              <ExpenseItem key={item.id} item={item} />
            ))
          ) : (
            <p>No items found</p>
          )}
        </ExpenseListStyled>
      </Card>
    </>
  );
};

export default ExpenseList;
