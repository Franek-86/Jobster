import React from 'react'
import Wrapper from '../assets/wrappers/Navbar'
import Logo from './Logo'
import {
  FaAlignLeft,
  FaUserCircle,
  FaCaretDown,
  FaAlignRight,
} from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import {
  toggleSidebar,
  logoutUser,
  clearEverything,
} from '../features/user/userSlice'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [showDropdown, setShowDropdown] = React.useState(false)
  const { user } = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const toggle = () => dispatch(toggleSidebar())
  const clearEverythingLogout = () => dispatch(clearEverything('test'))
  const navigate = useNavigate()
  return (
    <Wrapper>
      <div className='nav-center'>
        <button className='toggle-btn' type='button' onClick={toggle}>
          <FaAlignLeft />
        </button>

        <div>
          <Logo />
          <h3 className='logo-text'>dashboard</h3>
        </div>
        <div className='btn-container'>
          <button
            type='button'
            className='btn'
            onClick={() => {
              setShowDropdown(!showDropdown)
            }}
          >
            <FaUserCircle />
            {user?.name}
            <FaCaretDown />
          </button>
          <div
            className={showDropdown ? 'dropdown  show-dropdown' : 'dropdown'}
          >
            <button
              className='dropdown-btn'
              type='button'
              onClick={clearEverythingLogout}
            >
              logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Navbar
