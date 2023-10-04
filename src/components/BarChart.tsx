import React from 'react'
import { Bar } from 'react-chartjs-2'

/*
interface BarChartProps {
    labels: string[],
    data: number[],
}
*/


const BarChart = ({chartData}) => {
  return (
    <div>BarChart
        return <Bar data={chartData} options={}></Bar>
    </div>
  )
}

BarChart.propTypes = {}

export default BarChart