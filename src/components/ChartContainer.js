import AreaCharts from './AreaChart'
import BarCharts from './BarChart'
import React, { useState } from 'react'
import Wrapper from '../assets/wrappers/ChartsContainer'
import { useSelector } from 'react-redux'

const ChartContainer = () => {
  const { monthlyApplications: data } = useSelector((state) => state.allJobs)
  const [barChart, setBarChart] = useState(false)

  return (
    <Wrapper>
      <h4>Monthly Applications</h4>
      <button onClick={() => setBarChart(!barChart)}>
        {barChart ? 'Area Chart' : 'Bar Chart'}
      </button>
      {barChart ? <AreaCharts data={data} /> : <BarCharts data={data} />}
    </Wrapper>
  )
}

export default ChartContainer
