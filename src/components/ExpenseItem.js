import "./ExpenseItem.css";

const ExpenseItem = ({ item }) => {
  const date = item.date.toISOString().substring(0, 10);
  return (
    <div className="expense-item">
      <time dateTime={date}>{date}</time>
      <div className="expense-item__description">
        <h2>{item.title}</h2>
        <div className="expense-item__price">${item.amount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
