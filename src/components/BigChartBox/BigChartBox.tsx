import {
  Area,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
  AreaChart,
} from "recharts";
import "./BigChartBox.scss";
const data = [
    {
      name: 'Mon',
      Nine: 4000,
      Ten: 2400,
      Eleven: 2400,
    },
    {
      name: 'Tue',
      Nine: 3000,
      Ten: 1398,
      Eleven: 2210,
    },
    {
      name: 'Wed',
      Nine: 2000,
      Ten: 9800,
      Eleven: 2290,
    },
    {
      name: 'Thu',
      Nine: 2780,
      Ten: 3908,
      Eleven: 2000,
    },
    {
      name: 'Fri',
      Nine: 1890,
      Ten: 4800,
      Eleven: 2181,
    },
    {
      name: 'Sat',
      Nine: 2390,
      Ten: 3800,
      Eleven: 2500,
    },
    {
      name: 'Sun',
      Nine: 3490,
      Ten: 4300,
      Eleven: 2100,
    },
  ];
  
const BigChartBox = () => {
  return (
    <div className="bigChartBox">
      <h1>Revenue Analytical</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height="100%">
          <AreaChart
           
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="Nine"
              stackId="1"
              stroke="#8884d8"
              fill="#8884d8"
            />
            <Area
              type="monotone"
              dataKey="Ten"
              stackId="1"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
            <Area
              type="monotone"
              dataKey="Eleven"
              stackId="1"
              stroke="#ffc658"
              fill="#ffc658"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
export default BigChartBox;
