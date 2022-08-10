import React from 'react'
import { useSelector } from 'react-redux'
import Wrapper from '../assets/wrappers/StatsContainer'
import { FaSuitcaseRolling, FaCalendarCheck, FaBug } from 'react-icons/fa'
import StatItem from './StatItem'

// {
//   defaultStats:{pending:24,interview:27,declined:24},
//   monthlyApplications:[{date:"Nov 2021",count:5},{date:"Dec 2021",count:4} ]
//   }
// FaSuitcaseRolling, FaCalendarCheck, FaBug

// colore '#e9b949' '#647acb' '#d66a6a',
// sfondo '#fcefc7'   '#e0e8f9' '#ffeeee',

const StatsContainer = () => {
  const { stats } = useSelector((state) => state.allJobs)

  const defaultItems = [
    {
      count: stats.pending,
      icon: <FaSuitcaseRolling />,
      title: 'Pending Applications',
      color: '#e9b949',
      bcg: '#fcefc7',
    },
    {
      count: stats.interview,
      icon: <FaCalendarCheck />,
      title: 'Interviews Scheduled',
      color: '#647acb',
      bcg: '#e0e8f9',
    },
    {
      count: stats.declined,
      icon: <FaBug />,
      title: 'Jobs Declined',
      color: '#d66a6a',
      bcg: '#ffeeee',
    },
  ]

  return (
    <Wrapper>
      {defaultItems.map((item, index) => {
        return <StatItem key={index} {...item} />
      })}
    </Wrapper>
  )
}

export default StatsContainer
