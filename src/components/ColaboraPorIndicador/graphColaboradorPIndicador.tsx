import { PieChart, Pie, Tooltip } from "recharts";

const ColabIndicadorGraph = () => {
    const data02 = [
    { name: "Group A", value: 2400 },
    { name: "Group B", value: 4567 },
    { name: "Group C", value: 1398 },
    { name: "Group D", value: 9800 },
    { name: "Group E", value: 3908 },
    { name: "Group F", value: 4800 }
    ];
    return (
    <PieChart width={300} height={250}>
      <Pie
        dataKey="value"
        data={data02}
        cx={145}
        cy={120}
        innerRadius={50}
        outerRadius={100}
        fill="#82ca9d"
      />
      <Tooltip />
    </PieChart>
  );
};
export default ColabIndicadorGraph;