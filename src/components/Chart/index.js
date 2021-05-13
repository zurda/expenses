import ChartBar from "../ChartBar";
import { ChartStyled } from "./index.styled.js";

const Chart = ({ dataPoints }) => {
  const valueArray = dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...valueArray);

  return (
    <ChartStyled>
      {dataPoints.map((dp) => (
        <ChartBar
          key={dp.label}
          label={dp.label}
          value={dp.value}
          maxValue={totalMaximum}
        />
      ))}
    </ChartStyled>
  );
};
export default Chart;
