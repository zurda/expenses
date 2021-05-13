import {
  ChartBarStyled,
  InnerStyled,
  FillStyled,
  LabelStyled,
} from "./index.styled.js";

const ChartBar = ({ value, maxValue, label }) => {
  let barFillHeight = "0%";
  if (maxValue) {
    barFillHeight = `${Math.round((value * 100) / maxValue)}%`;
  }
  return (
    <ChartBarStyled>
      <InnerStyled>
        <FillStyled style={{ height: barFillHeight }}></FillStyled>
      </InnerStyled>
      <LabelStyled>{label}</LabelStyled>
    </ChartBarStyled>
  );
};

export default ChartBar;
