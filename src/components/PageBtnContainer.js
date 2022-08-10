import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Wrapper from '../assets/wrappers/PageBtnContainer'
import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi'
import { changePage } from '../features/allJobs/allJobsSlice'

const PageBtnContainer = () => {
  const dispatch = useDispatch()
  const { numOfPages, page } = useSelector((state) => state.allJobs)

  const pages = Array.from({ length: numOfPages }, (_, index) => {
    return index + 1
  })
  const nextPage = () => {
    let newPage = page + 1
    if (newPage > numOfPages) {
      newPage = 1
    }

    dispatch(changePage(newPage))
  }
  const prevPage = () => {
    let newPage = page - 1
    if (newPage < 1) {
      newPage = numOfPages
    }
    dispatch(changePage(newPage))
  }

  return (
    <Wrapper>
      <button
        onClick={() => {
          prevPage()
        }}
        className='prev-btn'
      >
        <HiChevronDoubleLeft />
        prev
      </button>
      <div className='btn-container'>
        {pages.map((singlePage) => {
          return (
            <button
              key={singlePage}
              onClick={() => dispatch(changePage(singlePage))}
              className={page === singlePage ? 'pageBtn active' : 'pageBtn'}
            >
              {singlePage}
            </button>
          )
        })}
      </div>
      <button
        onClick={() => {
          nextPage()
        }}
        className='next-btn'
      >
        next
        <HiChevronDoubleRight />
      </button>
    </Wrapper>
  )
}

export default PageBtnContainer

// Bottone di prev classe ‘prev-btn' e icona HiChevronDoubleLeft

// Div classe btn-container
// I bottoni avranno classe ‘pageBtn’, ‘pageBtn active’ se sto a quella pagina
// Chiudi div

// Bottone di next classe ‘next-btn’ e icona HiChevronDoubleRight
