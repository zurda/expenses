import {
  ExpenseItemStyled,
  DescriptionStyled,
  PriceStyled,
  H2Styled,
} from "./index.styled.js";
import Card from "../Card";

const ExpenseItem = ({ item }) => {
  const date = item.date.toISOString().substring(0, 10);
  return (
    <Card>
      <ExpenseItemStyled>
        <time dateTime={date}>{date}</time>
        <DescriptionStyled>
          <H2Styled>{item.title}</H2Styled>
          <PriceStyled>${item.amount}</PriceStyled>
        </DescriptionStyled>
      </ExpenseItemStyled>
    </Card>
  );
};

export default ExpenseItem;
