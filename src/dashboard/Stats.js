import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ChartContainer from '../components/ChartContainer'
import StatsContainer from '../components/StatsContainer'
import { getStats } from '../features/allJobs/allJobsSlice'

function Stats() {
  const { monthlyApplications } = useSelector((state) => state.allJobs)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getStats())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <StatsContainer />
      {monthlyApplications.length > 0 && <ChartContainer />}
    </>
  )
}

export default Stats
