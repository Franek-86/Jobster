import React from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { toggleSidebar } from '../features/user/userSlice'
import { links } from '../utils/links'

const NavLinks = ({ toggle }) => {
  //  const dispatch = useDispatch()
  //  const toggle = ()=>{
  // dispatch(toggleSidebar())
  let activeClassName = 'underline'
  return (
    <div className='nav-links'>
      {links.map((i) => {
        const { path, text, id, icon } = i
        return (
          <NavLink
            key={id}
            to={path}
            onClick={toggle}
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
            // className={(isActive) =>
            //   isActive ? 'nav-link active' : 'nav-link'
            // }
          >
            <span className='icon'>{icon}</span>
            {text}
          </NavLink>
        )
      })}
    </div>
  )
}

export default NavLinks

//  'nav-link active' o ‘nav-link’
