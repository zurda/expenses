import "./ExpenseList.css";
import Card from "./Card";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = ({ expenses }) => {
  return (
    <Card className="expense-list">
      {expenses?.map((item) => (
        <ExpenseItem key={item.id} item={item} />
      ))}
    </Card>
  );
};

export default ExpensesList;
