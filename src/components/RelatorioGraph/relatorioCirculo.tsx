import React from 'react';
import {
    PieChart,
    Pie,
    Tooltip,
    Legend,
    Cell
} from "recharts";
import IndicatorData from '../../Interfaces/indiData';

interface GraphProps {
    indicatorData: IndicatorData[];
}

const COLORS = ['#E51110', '#626FD9', '#5EE0F1']; 

const RelatorioCirculo = ({ indicatorData }: GraphProps) => {

    const dataForPie = [
        { name: 'Meta', value: indicatorData.reduce((acc, item) => acc + item.meta, 0) },
        { name: 'Super Meta', value: indicatorData.reduce((acc, item) => acc + item.superMeta, 0) },
        { name: 'Challenge', value: indicatorData.reduce((acc, item) => acc + item.challenge, 0) }
    ];

    return (
        <PieChart width={400} height={400}>
            <Pie
                data={dataForPie}
                cx={200}
                cy={200}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label
            >
                {dataForPie.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
            </Pie>
            <Tooltip />
            <Legend />
        </PieChart>
    );
}

export default RelatorioCirculo;
