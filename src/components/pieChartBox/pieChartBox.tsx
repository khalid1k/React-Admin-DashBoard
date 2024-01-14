import { ResponsiveContainer,PieChart,Pie,Cell, Tooltip } from "recharts";
import "./pieChartBoc.scss";
const data = [
  { name: "9th", value: 90, color: "#0088FE" },
  { name: "10th", value: 140 , color: "#00C49F" },
  { name: "11th", value: 100, color: "#FFBB28" },
  { name: "12th", value: 50, color: "#FF8042" },
];
const PieChartBox = () => {
  return (
    <div className="pieChartBox">
      <h1>Leads by Source</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height={300}>
          <PieChart >
            <Tooltip 
            contentStyle={{background:"white", borderRadius:"5px"}}/>
            <Pie
              data={data}
              
              innerRadius={"70%"}
              outerRadius={"90"}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((item) => (
                <Cell
                  key={item.name}
                  fill={item.color}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="options">
            {data.map((item)=>
                <div className="option" key={item.name}>
                    <div className="title">
                        <div className="dot" style={{backgroundColor:item.color}}></div>
                        <div className="span">{item.name}</div>
                    </div>
                    <span>{item.value}</span>
                </div>
            )}
      </div>
    </div>
  );
};
export default PieChartBox;
