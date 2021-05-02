import "./index.css";
import Card from "../Card";
import ExpenseItem from "../ExpenseItem";

const ExpenseList = ({ expenses }) => {
  return (
    <Card className="expense-list">
      {expenses?.map((item) => (
        <ExpenseItem key={item.id} item={item} />
      ))}
    </Card>
  );
};

export default ExpenseList;
