import React from 'react'
import Wrapper from '../assets/wrappers/Navbar'
import Logo from './Logo'
import { FaAlignLeft, FaUserCircle, FaCaretDown } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { toggleSidebar, clearEverything } from '../features/user/userSlice'

const Navbar = () => {
  const [showDropdown, setShowDropdown] = React.useState(false)
  const { user } = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const toggle = () => dispatch(toggleSidebar())
  const clearEverythingLogout = () => dispatch(clearEverything('test'))

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
