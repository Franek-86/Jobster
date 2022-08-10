import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Wrapper from '../assets/wrappers/SearchContainer'
import { changeFilters, clearFilters } from '../features/allJobs/allJobsSlice'
import FormRows from '../utils/FormRows'
import FormRowSelect from '../utils/FormRowSelect'

const SearchContainer = () => {
  const dispatch = useDispatch()
  const { search, searchStatus, searchType, sort, sortOptions } = useSelector(
    (state) => state.allJobs
  )

  const { statusOptions, jobTypeOptions } = useSelector((state) => state.job)

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    dispatch(changeFilters({ name, value }))
  }
  const handleSubmit = () => {
    dispatch(clearFilters())
  }
  return (
    <Wrapper>
      <form className='form'>
        <h4>search form </h4>
        <div className='form-center'>
          <FormRows
            name='search'
            handleChange={handleChange}
            value={search}
            type='text'
          />
          <FormRowSelect
            name='searchStatus'
            labelName='status'
            id='status'
            value={searchStatus}
            handleChange={handleChange}
            list={['all', ...statusOptions]}
          />
          <FormRowSelect
            name='searchType'
            labelName='type'
            id='status'
            value={searchType}
            handleChange={handleChange}
            list={['all', ...jobTypeOptions]}
          />
          <FormRowSelect
            name='sort'
            id='status'
            value={sort}
            handleChange={handleChange}
            list={sortOptions}
          />
          <button
            type='submit'
            onClick={handleSubmit}
            className='btn btn-block'
          >
            clear filters
          </button>
        </div>
      </form>
    </Wrapper>
  )
}

export default SearchContainer

// - La form ha classe di ‘form'
// - Search form e’ un h4
// - Un  div classe 'form-center'
// - Il bottone  ‘clear filters’ ha classe di 'btn btn-block btn-danger'
// - Chiudi il div
// - Chiudi la form

// id={name || labelName}
// className='form-input'
// type={type}
// name={name}
// onChange={handleChange}
// value={value}

// <select
//   name={name}
//   id={name}
//   className='form-select'
//   value={value}
//   onChange={handleChange}
// >
