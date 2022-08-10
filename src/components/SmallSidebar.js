import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import Wrapper from '../assets/wrappers/SmallSidebar'
import { toggleSidebar } from '../features/user/userSlice'
import Logo from './Logo'
import NavLinks from './NavLinks'
import { useDispatch, useSelector } from 'react-redux'

const SmallSidebar = () => {
  const dispatch = useDispatch()
  const toggle = () => {
    dispatch(toggleSidebar())
  }
  const { isSidebarOpen } = useSelector((state) => state.user)

  return (
    <Wrapper>
      <div
        className={
          isSidebarOpen ? 'sidebar-container show-sidebar' : 'sidebar-container'
        }
      >
        <div className='content'>
          <button type='button' className='close-btn' onClick={toggle}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <NavLinks toggle={toggle} />
        </div>
      </div>
    </Wrapper>

    // <div classe di 'sidebar-container show-sidebar' oppure e solo ‘sidebar-container’>
    // <div classe ‘content'>
    // <button classe ‘close-btn' >
    // Fatimes icona
    // </button>
    // <header>
    // Qui va il logo
    // </header>
    // <div classe di ‘nav-links'>
    // qui va il navlinks component

    // </div>
    // </div>
    // </div>
  )
}

export default SmallSidebar
