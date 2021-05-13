import ChartBar from "../ChartBar";
import "./index.css";

const Chart = ({ dataPoints }) => {
  const valueArray = dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...valueArray);

  return (
    <div className="chart">
      {dataPoints.map((dp) => (
        <ChartBar
          key={dp.label}
          label={dp.label}
          value={dp.value}
          maxValue={totalMaximum}
        />
      ))}
    </div>
  );
};
export default Chart;
