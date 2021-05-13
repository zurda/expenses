import { ExpensesFilterStyled, ControlStyled } from "./index.styled.js";

const ExpensesFilter = ({ onSelectYear, selectedYear }) => {
  return (
    <ExpensesFilterStyled>
      <ControlStyled>
        <label>Filter by year</label>
        <select
          onChange={(e) => onSelectYear(e.target.value)}
          value={selectedYear}
        >
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </ControlStyled>
    </ExpensesFilterStyled>
  );
};

export default ExpensesFilter;
