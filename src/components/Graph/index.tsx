import mapMonthNumberToName from '../mapMonth';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
  } from "recharts";
//import { indiData } from '../../data/indiData';
import IndicatorData from '../../Interfaces/indiData';
import CustomCaption from '../CustomCaption';

interface GraphProps {
  indicatorData: IndicatorData[];
}

const Graph = ({indicatorData}: GraphProps) => {
  const indiDataWithMonthNames = indicatorData.map(data => ({
      ...data,
      month: mapMonthNumberToName(data.month)
  }));

  return (
    <div>
        <BarChart
            width={500}
            height={300}
            data={indiDataWithMonthNames}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5
            }}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend 
              content={<CustomCaption payload={[]} />}
              layout="vertical"
              verticalAlign="top" 
              align="center"
            />
            <Bar dataKey="meta" fill="#E51110" />
            <Bar dataKey="superMeta" fill="#626FD9" />
            <Bar dataKey="challenge" fill="#5EE0F1" />
        </BarChart>
    </div>
    
  )
}

export default Graph