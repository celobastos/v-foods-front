
import React from 'react'
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
import CustomCaption from '../CustomCaption';

interface AveragedData {
  month: number;
  avgMeta: number;
  avgSuperMeta: number;
  avgChallenge: number;
}

interface GraphProps {
  indicatorData: AveragedData[];
}


const HomePageGraph = ({indicatorData}: GraphProps) => {
  const indiDataWithMonthNames = indicatorData.map(data => ({
      ...data,
      month: mapMonthNumberToName(data.month)
  }));

  return (
    <div>
        <BarChart
            width={1120}
            height={462}
            data={indiDataWithMonthNames}
            margin={{
                top: 30,
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
             <Bar dataKey="avgMeta" fill="#E51110" />
              <Bar dataKey="avgSuperMeta" fill="#626FD9" />
              <Bar dataKey="avgChallenge" fill="#5EE0F1" />
        </BarChart>
    </div>
    
  )
}

export default HomePageGraph