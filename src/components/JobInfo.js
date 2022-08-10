import moment from 'moment'
import React from 'react'
// FaLocationArrow, FaBriefcase, FaCalendarAlt
import Wrapper from '../assets/wrappers/JobInfo'

const JobInfo = ({ icon, text }) => {
  return (
    <Wrapper>
      <span className='icon'>{icon}</span>
      <span className='text'>{text}</span>
    </Wrapper>
  )
}

export default JobInfo
