import "./ExpenseItem.css";
import Card from "./Card";

const ExpenseItem = ({ item }) => {
  const date = item.date.toISOString().substring(0, 10);
  return (
    <Card className="expense-item">
      <time dateTime={date}>{date}</time>
      <div className="expense-item__description">
        <h2>{item.title}</h2>
        <div className="expense-item__price">${item.amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
