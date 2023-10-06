import React from 'react';
import {
    PieChart,
    Pie,
    Tooltip,
    Cell
} from "recharts";
import './relatorioCirculo.css'
import IndicatorData from '../../Interfaces/indiData';


interface GraphProps {
    indicatorData: IndicatorData[];
    dataType: 'meta' | 'superMeta' | 'challenge'; 
}

const COLORS = {
    meta: ['#E51110', '#A9A9A9'],
    superMeta: ['#626FD9', '#A9A9A9'],
    challenge: ['#5EE0F1', '#A9A9A9']
}; 
 

const RelatorioCirculo = ({ indicatorData, dataType }: GraphProps) => {

    const total = indicatorData.reduce((acc, item) => acc + item[dataType], 0);
    const totalAlcancado = indicatorData.reduce((acc, item) => acc + item.result, 0); 
    const dataForPie = [
        { name: 'Alcançado', value: totalAlcancado },
        { name: 'Restante', value: total - totalAlcancado }
    ];

    return (
      
        <PieChart width={200} height={200}>
            <Pie
                    data={dataForPie}
                    cx={55}
                    cy={110}
                    innerRadius={35}
                    outerRadius={50}
                    fill="#8884d8"
                    dataKey="value"
                
                >
                    {dataForPie.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[dataType][index]} />
                    ))}
                </Pie>
                
                <Tooltip />
        </PieChart>
 
    );
}

export default RelatorioCirculo;
