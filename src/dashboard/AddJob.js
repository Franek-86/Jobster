import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FormRows from '../utils/FormRows'
import FormRowSelect from '../utils/FormRowSelect'
import Wrapper from '../assets/wrappers/DashboardFormPage'
import {
  clearJob,
  editJob,
  handleChange,
  postJob,
} from '../features/job/jobSlice'
import { toast } from 'react-toastify'

const AddJob = () => {
  const test = useSelector((state) => state.user.user.location)

  const dispatch = useDispatch()
  const {
    isLoading,
    position,
    company,
    jobLocation,
    jobTypeOptions,
    jobType,
    statusOptions,
    status,
    isEditing,
    editJobId,
  } = useSelector((state) => state.job)

  useEffect(() => {
    if (!isEditing) {
      let name = 'jobLocation'
      let value = test
      dispatch(handleChange({ name, value }))
    }
  }, [])

  const handleJobInput = (e) => {
    const name = e.target.name
    const value = e.target.value
    dispatch(handleChange({ name, value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!position || !company || !jobLocation) {
      toast.error('please fill out all fields')
      return
    }
    // - { position:'position', company:'company', jobLocation:'location', jobType:'full-time', status:'pending' }
    if (!isEditing) {
      dispatch(postJob({ position, company, jobLocation, jobType, status }))
      return
    }
    if (isEditing) {
      const test = { position, company, jobLocation, jobType, status }
      dispatch(editJob({ editJobId, test }))
    }
  }

  return (
    <Wrapper>
      <form className='form'>
        <h3>{isEditing ? 'edit job' : 'add job'}</h3>
        <div className='form-center'>
          <FormRows
            name='position'
            type='text'
            value={position}
            handleChange={handleJobInput}
          />
          <FormRows
            name='company'
            type='text'
            value={company}
            handleChange={handleJobInput}
          />
          <FormRows
            name='jobLocation'
            type='text'
            labelName='job location'
            value={jobLocation}
            handleChange={handleJobInput}
          />
          <FormRowSelect
            name='status'
            list={statusOptions}
            value={status}
            handleChange={handleJobInput}
          />
          <FormRowSelect
            name='jobType'
            list={jobTypeOptions}
            value={jobType}
            handleChange={handleJobInput}
            labelName='job type'
          />
          <div className='btn-container'>
            <button
              type='button'
              className='btn btn-block clear-btn'
              onClick={() => {
                dispatch(clearJob(test))
              }}
            >
              clear
            </button>
            <button
              type='submit'
              className='btn btn-block submit-btn'
              onClick={handleSubmit}
            >
              submit
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  )
}

export default AddJob

// form classe 'form'
// h3 testo di 'edit job' oppure 'add job'
// div classe 'form-center'
// formrow component
//formrowselect component

// div classe 'form-row'
// label classe 'form-label'
// select classe 'form-select'
// ...
// chiudi select e chiudi div

// div classe 'btn-container'
// bottone classe 'btn btn-block clear-btn' e testo di 'clear'
// bottone classe 'btn btn-block submit-btn' e testo di 'submit'
// chiudi i due div di sopra e la form

// - POST /jobs
// - { position:'position', company:'company', jobLocation:'location', jobType:'full-time', status:'pending' }
// - authorization header : 'Bearer token'
// - sends back the job object
