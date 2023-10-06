
import React from 'react'
import mapMonthNumberToName from '../mapMonth';
import {
    BarChart,
    Bar,
    YAxis,
    CartesianGrid,
    Tooltip,
  } from "recharts";
import IndicatorData from '../../Interfaces/indiData';



interface GraphProps {
  indicatorData: IndicatorData[];
}




const RelatorioBarra = ({indicatorData}: GraphProps) => {
  const indiDataWithMonthNames = indicatorData.map(data => ({
      ...data,
      month: mapMonthNumberToName(data.month)
  }));

  return (
    <div>
        <BarChart
            width={368}
            height={236}
            data={indiDataWithMonthNames}
            margin={{
                top: 30,
                right: 10,
                left: 5,
                bottom: 5
            }}
            >
            <CartesianGrid strokeDasharray="3 3" />
         
            <YAxis />
            <Tooltip />
           
            <Bar dataKey="meta" fill="#E51110" />
            <Bar dataKey="superMeta" fill="#626FD9" />
            <Bar dataKey="challenge" fill="#5EE0F1" />
        </BarChart>
    </div>
    
  )
}

export default RelatorioBarra;