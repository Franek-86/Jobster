import React from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

const BarCharts = ({ data }) => {
  // In generale height 300
  // La chart deve avere Margin top 50
  // No allow decimals on y axis
  // La bar fill di ‘#3b82f6' e la size delle bar di 75

  return (
    <ResponsiveContainer width='100%' height={300}>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='date' />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey='count' fill='#8884d8' />
      </BarChart>
    </ResponsiveContainer>
  )
}

// <ResponsiveContainer width='100%' height='300'>
//   <BarChart width={500} height={300} data={data} margin={{ top: 5 }}>
//     <CartesianGrid strokeDasharray='3 3' />
//     <XAxis dataKey='date' />
//     <YAxis allowedDecimals={false} />
//     <Tooltip />
//     <Legend />
//     <Bar dataKey='count' fill='#3b82f6' barSize={75} />
//   </BarChart>
// </ResponsiveContainer>

export default BarCharts
