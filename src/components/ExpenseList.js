import ExpenseItem from "./ExpenseItem";

const ExpensesList = ({ expenses }) => {
  return (
    <>
      {expenses?.map((item) => (
        <ExpenseItem key={item.id} item={item} />
      ))}
    </>
  );
};

export default ExpensesList;
